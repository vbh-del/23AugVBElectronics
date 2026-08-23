export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  price: number; // In AED
  originalPrice?: number; // In AED
  discountPercent?: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  stockCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isDeal?: boolean;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  specs: Record<string, string>;
  tags: string[];
  colors?: { name: string; hex: string }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  image: string;
  itemCount: number;
  description: string;
  popularBrands: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface DealItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  discount: string;
  endsInHours: number;
  product: Product;
  stockSoldPercent: number;
}

export interface StoreLocation {
  id: string;
  name: string;
  mall: string;
  area: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
  hasExpressPickup: boolean;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
}

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';

export interface FilterState {
  category: string;
  searchQuery: string;
  minPrice: number;
  maxPrice: number;
  selectedBrands: string[];
  inStockOnly: boolean;
  minRating: number;
  sortBy: SortOption;
}
