/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { WhyShopWithUs } from './components/WhyShopWithUs';
import { DealsOfTheWeekBanner } from './components/DealsOfTheWeekBanner';
import { CategoryGrid } from './components/CategoryGrid';
import { DealsSection } from './components/DealsSection';
import { ShopSection } from './components/ShopSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ProductQuickView } from './components/ProductQuickView';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';
import { PRODUCTS } from './data/products';
import { Product, CartItem, ToastMessage } from './types';

export default function App() {
  // Navigation State
  const [activeSection, setActiveSection] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('all');

  // Shopping Cart & Wishlist State (Initialized with 1 sample item so user immediately sees badge)
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[2], // Sony WH-1000XM5
      quantity: 1,
      selectedColor: 'Midnight Blue'
    }
  ]);
  const [wishlist, setWishlist] = useState<string[]>(['prod-iphone16promax']);

  // Modals & Drawers State
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutDiscount, setCheckoutDiscount] = useState<number>(0);
  const [checkoutPromoCode, setCheckoutPromoCode] = useState<string>('');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  // Toast Notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, title, message, type }]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart Management
  const handleAddToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity, selectedColor }];
      }
    });

    showToast(
      'Added to Cart',
      `${quantity}x ${product.name} added to your cart in Dubai warehouse.`,
      'success'
    );
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item Removed', 'Product removed from your shopping cart.', 'info');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist Management
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const isAlready = prev.includes(product.id);
      if (isAlready) {
        showToast('Removed from Wishlist', `${product.name} removed from your saved list.`, 'info');
        return prev.filter((id) => id !== product.id);
      } else {
        showToast('Saved to Wishlist', `${product.name} saved to your favorite electronics.`, 'success');
        return [...prev, product.id];
      }
    });
  };

  // Navigation and Category Filtering
  const handleSelectCategory = (categorySlug: string) => {
    setSelectedCategorySlug(categorySlug);
    setActiveSection('shop');

    const shopElement = document.getElementById('shop');
    if (shopElement) {
      const yOffset = -85;
      const y = shopElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const totalCartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={scrollToSection}
        cartCount={totalCartItemCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectProduct={(product) => setSelectedProductForModal(product)}
        allProducts={PRODUCTS}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreShop={() => scrollToSection('shop')}
          onViewDeals={() => scrollToSection('deals')}
          onSelectProduct={(product) => setSelectedProductForModal(product)}
          onSelectCategory={handleSelectCategory}
          featuredProduct={PRODUCTS[0]} // iPhone 16 Pro Max Flagship
        />

        {/* Featured Products Section (8 Curated Flagship Electronics with Specs & Sale Badges) */}
        <FeaturedProducts
          onAddToCart={handleAddToCart}
          onSelectProduct={(product) => setSelectedProductForModal(product)}
        />

        {/* Why Shop With Us Strip (5 Icons & Labels) */}
        <WhyShopWithUs />

        {/* Colourful Deals of the Week Banner */}
        <DealsOfTheWeekBanner
          onViewDeals={() => scrollToSection('deals')}
        />

        {/* Categories Section */}
        <CategoryGrid
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategorySlug}
        />

        {/* Deals Section */}
        <DealsSection
          onAddToCart={handleAddToCart}
          onSelectProduct={(product) => setSelectedProductForModal(product)}
        />

        {/* Full Shop Catalog Section */}
        <ShopSection
          products={PRODUCTS}
          selectedCategorySlug={selectedCategorySlug}
          onSelectCategory={setSelectedCategorySlug}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onAddToCart={handleAddToCart}
          onSelectProduct={(product) => setSelectedProductForModal(product)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* About Section */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onNavClick={scrollToSection} onShowToast={showToast} />

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-out Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onOpenCheckout={(discountAmount, promoCode) => {
          setIsCartOpen(false);
          setCheckoutDiscount(discountAmount);
          setCheckoutPromoCode(promoCode);
          setIsCheckoutOpen(true);
        }}
        onShowToast={showToast}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        discountAmount={checkoutDiscount}
        promoCode={checkoutPromoCode}
        onClearCart={handleClearCart}
        onShowToast={showToast}
      />

      {/* Toast Notifications Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
