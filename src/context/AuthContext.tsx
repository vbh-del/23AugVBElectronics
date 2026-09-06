import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  orderBy
} from 'firebase/firestore';
import { auth, googleProvider, db } from '../lib/firebase';
import { UserProfile, UserOrder, CartItem } from '../types';

interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  orders: UserOrder[];
  isAuthModalOpen: boolean;
  authModalMode: 'login' | 'signup';
  authModalPrompt?: string;
  openAuthModal: (mode?: 'login' | 'signup', prompt?: string) => void;
  closeAuthModal: () => void;
  signUpWithEmail: (name: string, email: string, password: string) => Promise<void>;
  logInWithEmail: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  saveOrderToFirestore: (order: Omit<UserOrder, 'id'>) => Promise<string>;
  refreshOrders: () => Promise<void>;
  syncCartToFirestore: (cart: CartItem[]) => Promise<void>;
  loadCartFromFirestore: () => Promise<CartItem[] | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Local storage keys for offline/demo resilience
const LOCAL_USER_KEY = 'vbe_auth_user_profile';
const LOCAL_ORDERS_KEY = 'vbe_customer_orders';
const LOCAL_CART_KEY = 'vbe_user_cart';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_USER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [orders, setOrders] = useState<UserOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');
  const [authModalPrompt, setAuthModalPrompt] = useState<string | undefined>(undefined);

  const openAuthModal = (mode: 'login' | 'signup' = 'login', prompt?: string) => {
    setAuthModalMode(mode);
    setAuthModalPrompt(prompt);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setAuthModalPrompt(undefined);
  };

  // Helper to format join date
  const formatJoinDate = (): string => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Helper to check if an error is due to unconfigured/placeholder Firebase credentials
  const isApiKeyConfigError = (err: any): boolean => {
    const code = err?.code || '';
    const message = err?.message || '';
    return (
      code === 'auth/api-key-not-valid' ||
      code === 'auth/invalid-api-key' ||
      message.includes('auth/api-key-not-valid') ||
      message.includes('API key not valid')
    );
  };

  // Fetch or create user record in Firestore
  const fetchOrCreateUserProfile = async (user: User, explicitName?: string): Promise<UserProfile> => {
    const profileRef = doc(db, 'users', user.uid);
    let profileData: UserProfile;

    try {
      const snap = await getDoc(profileRef);
      if (snap.exists()) {
        const data = snap.data() as Partial<UserProfile>;
        profileData = {
          uid: user.uid,
          name: data.name || explicitName || user.displayName || user.email?.split('@')[0] || 'Valued Customer',
          email: data.email || user.email || '',
          joinDate: data.joinDate || formatJoinDate(),
          photoURL: user.photoURL || data.photoURL || '',
          phone: data.phone || '',
          address: data.address || ''
        };
      } else {
        profileData = {
          uid: user.uid,
          name: explicitName || user.displayName || user.email?.split('@')[0] || 'Valued Customer',
          email: user.email || '',
          joinDate: formatJoinDate(),
          photoURL: user.photoURL || '',
          phone: '',
          address: ''
        };

        await setDoc(
          profileRef,
          {
            ...profileData,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          },
          { merge: true }
        );
      }
    } catch (err) {
      console.warn('Firestore user fetch note (using profile fallback):', err);
      profileData = {
        uid: user.uid,
        name: explicitName || user.displayName || user.email?.split('@')[0] || 'Valued Customer',
        email: user.email || '',
        joinDate: userProfile?.joinDate || formatJoinDate(),
        photoURL: user.photoURL || ''
      };
    }

    setUserProfile(profileData);
    try {
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(profileData));
    } catch {}

    return profileData;
  };

  // Load orders for active user
  const fetchUserOrders = async (userId: string) => {
    try {
      const ordersRef = collection(db, 'orders');
      const q = query(
        ordersRef,
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const userOrders: UserOrder[] = [];
      querySnapshot.forEach((docSnap) => {
        userOrders.push({ id: docSnap.id, ...docSnap.data() } as UserOrder);
      });

      if (userOrders.length > 0) {
        setOrders(userOrders);
        localStorage.setItem(`${LOCAL_ORDERS_KEY}_${userId}`, JSON.stringify(userOrders));
        return;
      }
    } catch (err) {
      console.warn('Firestore orders fetch note:', err);
    }

    // Fallback to local storage cache if firestore rules or offline
    try {
      const cached = localStorage.getItem(`${LOCAL_ORDERS_KEY}_${userId}`);
      if (cached) {
        setOrders(JSON.parse(cached));
      } else {
        setOrders([]);
      }
    } catch {
      setOrders([]);
    }
  };

  // Listen to Firebase Auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchOrCreateUserProfile(user);
        await fetchUserOrders(user.uid);
      } else {
        // Only clear if not in fallback local demo session
        const cached = localStorage.getItem(LOCAL_USER_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed.uid?.startsWith('local_')) {
            setUserProfile(parsed);
            await fetchUserOrders(parsed.uid);
          } else {
            setUserProfile(null);
            setOrders([]);
            localStorage.removeItem(LOCAL_USER_KEY);
          }
        } else {
          setUserProfile(null);
          setOrders([]);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 1. Sign Up with Email and Password
  const signUpWithEmail = async (name: string, email: string, password: string) => {
    const cleanName = name.trim();
    const cleanEmail = email.trim();

    try {
      const cred = await createUserWithEmailAndPassword(auth, cleanEmail, password);
      // Update Firebase Auth display name
      if (cred.user) {
        await updateProfile(cred.user, { displayName: cleanName });
      }

      // Save to "users" collection in Firestore
      const joinDate = formatJoinDate();
      const userDocRef = doc(db, 'users', cred.user.uid);
      await setDoc(
        userDocRef,
        {
          uid: cred.user.uid,
          name: cleanName,
          email: cleanEmail.toLowerCase(),
          joinDate: joinDate,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );

      const profile: UserProfile = {
        uid: cred.user.uid,
        name: cleanName,
        email: cleanEmail.toLowerCase(),
        joinDate: joinDate,
        photoURL: cred.user.photoURL || ''
      };
      setUserProfile(profile);
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(profile));
      closeAuthModal();
    } catch (error: any) {
      if (isApiKeyConfigError(error)) {
        // Graceful simulation: create customer account locally so the user can test without interruption
        console.info('Firebase API key not yet configured in .env - creating demo customer session.');
        const mockUid = 'local_' + Date.now().toString(36);
        const joinDate = formatJoinDate();
        const profile: UserProfile = {
          uid: mockUid,
          name: cleanName,
          email: cleanEmail.toLowerCase(),
          joinDate: joinDate,
          photoURL: ''
        };
        setUserProfile(profile);
        localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(profile));
        closeAuthModal();
        return;
      }
      console.error('Sign-up error:', error);
      throw error;
    }
  };

  // 2. Log In with Email and Password
  const logInWithEmail = async (email: string, password: string) => {
    const cleanEmail = email.trim();
    try {
      const cred = await signInWithEmailAndPassword(auth, cleanEmail, password);
      if (cred.user) {
        await fetchOrCreateUserProfile(cred.user);
        await fetchUserOrders(cred.user.uid);
      }
      closeAuthModal();
    } catch (error: any) {
      if (isApiKeyConfigError(error)) {
        // Graceful simulation: log into customer session
        console.info('Firebase API key not yet configured in .env - activating demo customer session.');
        const mockUid = 'local_' + Date.now().toString(36);
        const joinDate = formatJoinDate();
        const extractedName = cleanEmail.split('@')[0].replace(/[._-]/g, ' ');
        const formattedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);
        const profile: UserProfile = {
          uid: mockUid,
          name: formattedName || 'Valued Customer',
          email: cleanEmail.toLowerCase(),
          joinDate: joinDate,
          photoURL: ''
        };
        setUserProfile(profile);
        localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(profile));
        await fetchUserOrders(mockUid);
        closeAuthModal();
        return;
      }
      console.error('Log-in error:', error);
      throw error;
    }
  };

  // 3. Continue with Google (Google Sign-In)
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save / merge customer's name, email, join date into Firestore "users" collection
      const userDocRef = doc(db, 'users', user.uid);
      const existingDoc = await getDoc(userDocRef).catch(() => null);

      const profileName = user.displayName || user.email?.split('@')[0] || 'Valued Customer';
      const userEmail = user.email || '';
      const joinDate = existingDoc?.exists()
        ? existingDoc.data()?.joinDate || formatJoinDate()
        : formatJoinDate();

      await setDoc(
        userDocRef,
        {
          uid: user.uid,
          name: profileName,
          email: userEmail.toLowerCase(),
          joinDate: joinDate,
          photoURL: user.photoURL || '',
          updatedAt: serverTimestamp(),
          ...(existingDoc?.exists() ? {} : { createdAt: serverTimestamp() })
        },
        { merge: true }
      );

      const profile: UserProfile = {
        uid: user.uid,
        name: profileName,
        email: userEmail.toLowerCase(),
        joinDate: joinDate,
        photoURL: user.photoURL || ''
      };
      setUserProfile(profile);
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(profile));
      await fetchUserOrders(user.uid);
      closeAuthModal();
    } catch (error: any) {
      if (isApiKeyConfigError(error)) {
        console.info('Firebase API key not yet configured in .env - creating demo Google customer session.');
        const mockUid = 'local_g_' + Date.now().toString(36);
        const joinDate = formatJoinDate();
        const profile: UserProfile = {
          uid: mockUid,
          name: 'Rashid Al Maktoum',
          email: 'rashid.maktoum@gmail.com',
          joinDate: joinDate,
          photoURL: ''
        };
        setUserProfile(profile);
        localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(profile));
        await fetchUserOrders(mockUid);
        closeAuthModal();
        return;
      }
      console.error('Google Sign-In error:', error);
      throw error;
    }
  };

  // 4. Log Out
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.warn('Firebase signOut note:', error);
    }
    setCurrentUser(null);
    setUserProfile(null);
    setOrders([]);
    localStorage.removeItem(LOCAL_USER_KEY);
  };

  // 5. Save Order to Firestore (linked to account)
  const saveOrderToFirestore = async (orderData: Omit<UserOrder, 'id'>): Promise<string> => {
    const orderId = `ord_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const fullOrder: UserOrder = {
      id: orderId,
      ...orderData
    };

    try {
      // Save in Firestore 'orders' collection
      const orderDocRef = doc(db, 'orders', orderId);
      await setDoc(orderDocRef, {
        ...fullOrder,
        serverCreatedAt: serverTimestamp()
      });

      // Also record in subcollection users/{uid}/orders
      if (orderData.userId && !orderData.userId.startsWith('local_')) {
        const userOrderRef = doc(db, 'users', orderData.userId, 'orders', orderId);
        await setDoc(userOrderRef, {
          ...fullOrder,
          serverCreatedAt: serverTimestamp()
        });
      }
    } catch (err) {
      console.warn('Firestore order save note (persisting locally):', err);
    }

    // Update state and local storage cache
    setOrders((prev) => [fullOrder, ...prev]);
    if (orderData.userId) {
      try {
        const cached = localStorage.getItem(`${LOCAL_ORDERS_KEY}_${orderData.userId}`);
        const currentOrders = cached ? JSON.parse(cached) : [];
        localStorage.setItem(
          `${LOCAL_ORDERS_KEY}_${orderData.userId}`,
          JSON.stringify([fullOrder, ...currentOrders])
        );
      } catch {}
    }

    return orderId;
  };

  const refreshOrders = async () => {
    const uid = currentUser?.uid || userProfile?.uid;
    if (uid) {
      await fetchUserOrders(uid);
    }
  };

  // 6. Cart Sync to Firestore for Logged-In User
  const syncCartToFirestore = async (cart: CartItem[]) => {
    const uid = currentUser?.uid || userProfile?.uid;
    if (!uid) return;
    try {
      if (!uid.startsWith('local_')) {
        const cartRef = doc(db, 'users', uid, 'cart', 'active');
        await setDoc(
          cartRef,
          {
            items: cart,
            updatedAt: serverTimestamp()
          },
          { merge: true }
        );
      }
    } catch (err) {
      try {
        localStorage.setItem(`${LOCAL_CART_KEY}_${uid}`, JSON.stringify(cart));
      } catch {}
    }
  };

  const loadCartFromFirestore = async (): Promise<CartItem[] | null> => {
    const uid = currentUser?.uid || userProfile?.uid;
    if (!uid) return null;
    try {
      if (!uid.startsWith('local_')) {
        const cartRef = doc(db, 'users', uid, 'cart', 'active');
        const snap = await getDoc(cartRef);
        if (snap.exists() && snap.data()?.items) {
          return snap.data()?.items as CartItem[];
        }
      }
    } catch (err) {
      console.warn('Cart load from Firestore note:', err);
    }

    try {
      const cached = localStorage.getItem(`${LOCAL_CART_KEY}_${uid}`);
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        loading,
        orders,
        isAuthModalOpen,
        authModalMode,
        authModalPrompt,
        openAuthModal,
        closeAuthModal,
        signUpWithEmail,
        logInWithEmail,
        loginWithGoogle,
        logOut,
        saveOrderToFirestore,
        refreshOrders,
        syncCartToFirestore,
        loadCartFromFirestore
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
