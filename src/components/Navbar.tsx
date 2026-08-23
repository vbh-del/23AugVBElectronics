import React, { useState, useEffect, useRef } from 'react';
import {
  Zap,
  Search,
  ShoppingCart,
  Menu,
  X,
  Heart,
  Phone,
  Clock,
  ShieldCheck,
  Truck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Product } from '../types';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectProduct: (product: Product) => void;
  allProducts: Product[];
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  cartCount,
  wishlistCount,
  onOpenCart,
  searchQuery,
  setSearchQuery,
  onSelectProduct,
  allProducts
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isBadgePopping, setIsBadgePopping] = useState(false);
  const prevCartCountRef = useRef(cartCount);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Trigger smooth pop effect when cart count changes
  useEffect(() => {
    if (cartCount > prevCartCountRef.current) {
      setIsBadgePopping(true);
      const timer = setTimeout(() => setIsBadgePopping(false), 600);
      return () => clearTimeout(timer);
    }
    prevCartCountRef.current = cartCount;
  }, [cartCount]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'featured', label: 'Featured' },
    { id: 'shop', label: 'Shop' },
    { id: 'categories', label: 'Categories' },
    { id: 'deals', label: 'Deals' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = searchQuery.trim() === ''
    ? []
    : allProducts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section element
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-md shadow-sky-900/5">
      {/* Top Utility Announcement Bar (UAE Specific perks) */}
      <div className="bg-sky-100 text-sky-950 text-xs py-2 px-4 border-b border-sky-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 font-semibold text-sky-700">
              <Truck className="w-3.5 h-3.5 text-sky-600" />
              <span>Same-Day Dubai Express Delivery</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Official 2-Year UAE Warranty</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-slate-700">
            <span className="hidden sm:inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sky-600" />
              <span>Dubai Mall Flagship: Open until 11 PM</span>
            </span>
            <a
              href="tel:+97143308890"
              className="inline-flex items-center gap-1 text-sky-900 hover:text-sky-600 transition-colors font-semibold"
            >
              <Phone className="w-3 h-3 text-sky-600" />
              <span>+971 4 330 8890</span>
            </a>
            <span className="bg-sky-200/70 text-sky-900 border border-sky-300 px-2 py-0.5 rounded font-mono font-bold text-[10px]">
              AED (د.إ)
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="bg-sky-50/95 border-b border-sky-200/80 text-slate-900 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo Section */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                id="brand-logo-btn"
                onClick={() => handleNavClick('home')}
                className="group flex items-center gap-2.5 text-left focus:outline-none"
              >
                <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 shadow-md shadow-sky-400/30 group-hover:shadow-sky-400/50 group-hover:scale-105 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white fill-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/40" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-['Outfit'] font-extrabold text-2xl tracking-tight text-[#0A192F] group-hover:text-sky-700 transition-colors">
                      VB
                    </span>
                    <span className="font-['Outfit'] font-bold text-2xl tracking-tight text-sky-600">
                      Electronics
                    </span>
                  </div>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-sky-800 -mt-1">
                    Dubai • UAE
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-sky-900 bg-sky-200/80 shadow-sm border border-sky-300'
                        : 'text-slate-700 hover:text-sky-900 hover:bg-sky-100/70'
                    }`}
                  >
                    {link.label}
                    {link.id === 'deals' && (
                      <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white animate-pulse">
                        HOT
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Search Bar with Live Suggestions Dropdown */}
            <div ref={searchContainerRef} className="hidden md:block relative flex-1 max-w-md mx-2">
              <div className="relative">
                <input
                  id="navbar-search-input"
                  type="text"
                  placeholder="Search iPhones, MacBooks, PS5, OLED TVs, Audio..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  className="w-full bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm rounded-xl pl-10 pr-9 py-2.5 border border-sky-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-300/40 shadow-sm transition-all"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-600" />
                {searchQuery && (
                  <button
                    id="clear-search-btn"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown */}
              {isSearchFocused && searchQuery.trim().length > 0 && (
                <div
                  id="search-results-dropdown"
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-sky-200 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="p-2 border-b border-sky-100 bg-sky-50 text-[11px] font-bold text-sky-900 uppercase tracking-wider flex justify-between">
                    <span>Products matching "{searchQuery}"</span>
                    <span>{searchResults.length} results</span>
                  </div>
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                      {searchResults.map((prod) => (
                        <button
                          key={prod.id}
                          id={`search-item-${prod.id}`}
                          onClick={() => {
                            onSelectProduct(prod);
                            setIsSearchFocused(false);
                            setSearchQuery('');
                          }}
                          className="w-full p-2.5 flex items-center gap-3 hover:bg-sky-50 text-left transition-colors group"
                        >
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-10 h-10 object-cover rounded-lg bg-sky-50 border border-sky-100 shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-slate-900 group-hover:text-sky-700 truncate">
                              {prod.name}
                            </p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-xs font-extrabold text-sky-700">
                                AED {prod.price.toLocaleString()}
                              </span>
                              {prod.originalPrice && (
                                <span className="text-[10px] text-slate-400 line-through">
                                  AED {prod.originalPrice.toLocaleString()}
                                </span>
                              )}
                              <span className="text-[10px] px-1.5 py-0.2 bg-sky-100 text-sky-800 font-medium rounded">
                                {prod.brand}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 shrink-0" />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-500">
                      No matching products found. Try searching for "Apple", "Sony", or "OLED".
                    </div>
                  )}
                  <div className="p-2 bg-sky-50 border-t border-sky-100 text-center">
                    <button
                      id="view-all-results-btn"
                      onClick={() => {
                        handleNavClick('shop');
                        setIsSearchFocused(false);
                      }}
                      className="text-xs text-sky-700 hover:text-sky-900 font-bold inline-flex items-center gap-1"
                    >
                      View all in Shop catalog <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Action Icons: Cart & Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Wishlist Quick Counter (Optional Delight) */}
              <button
                id="wishlist-btn"
                onClick={() => handleNavClick('shop')}
                className="relative p-2.5 rounded-xl text-slate-700 hover:text-sky-900 hover:bg-sky-100 transition-colors hidden sm:flex items-center justify-center border border-sky-200/60 bg-white/80 shadow-sm"
                title="Wishlist"
              >
                <Heart className="w-5 h-5 text-slate-600 hover:text-rose-500 transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Icon with Item-Count Badge */}
              <button
                id="navbar-cart-btn"
                onClick={onOpenCart}
                className={`relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-200 active:scale-95 group cursor-pointer ${
                  isBadgePopping ? 'scale-105 shadow-sky-400/50 ring-2 ring-sky-400' : ''
                }`}
                aria-label="View Shopping Cart"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
                  {cartCount > 0 && (
                    <span
                      id="navbar-cart-badge"
                      className={`absolute -top-2.5 -right-2.5 bg-rose-500 text-white text-[11px] font-extrabold rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1 border-2 border-white shadow-sm transition-all duration-300 ${
                        isBadgePopping ? 'scale-125 bg-rose-600' : 'scale-100'
                      }`}
                    >
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-xs font-bold tracking-wide">
                  Cart
                </span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-900 bg-white border border-sky-200 shadow-sm focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-900" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-900" />
                )}
              </button>
            </div>

          </div>

          {/* Mobile Search Bar Row (When on phones) */}
          <div className="block md:hidden pb-3 pt-1">
            <div className="relative">
              <input
                id="mobile-search-input"
                type="text"
                placeholder="Search electronics in Dubai..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-slate-900 placeholder-slate-400 text-xs rounded-xl pl-9 pr-8 py-2 border border-sky-200 focus:outline-none focus:border-sky-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-sky-600" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Dropdown */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu-drawer"
            className="lg:hidden bg-white border-t border-sky-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4 duration-200"
          >
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between p-3 rounded-xl text-left text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-sky-100 text-sky-900 border border-sky-300'
                        : 'bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-900 border border-slate-200/80'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.id === 'deals' && (
                      <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white">
                        HOT
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Contact & Store Pickup Info in Mobile Menu */}
            <div className="bg-sky-50/70 rounded-xl p-3 border border-sky-200 text-xs text-slate-700 space-y-2">
              <div className="flex items-center justify-between text-slate-600 font-medium">
                <span>Dubai Customer Care:</span>
                <a href="tel:+97143308890" className="text-sky-700 font-bold">
                  +971 4 330 8890
                </a>
              </div>
              <div className="flex items-center justify-between text-slate-600 font-medium">
                <span>Showroom Location:</span>
                <span className="text-slate-900 font-semibold">The Dubai Mall, Level 2</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 font-medium">
                <span>Delivery:</span>
                <span className="text-emerald-700 font-semibold">⚡ Same-Day Dubai</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
