import React, { useState, useMemo } from 'react';
import {
  SlidersHorizontal,
  Search,
  X,
  RotateCcw,
  Sparkles,
  ChevronDown,
  Check,
  Grid3X3,
  Filter
} from 'lucide-react';
import { Product, SortOption } from '../types';
import { ProductCard } from './ProductCard';
import { CATEGORIES } from '../data/categories';

interface ShopSectionProps {
  products: Product[];
  selectedCategorySlug: string;
  onSelectCategory: (slug: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (product: Product) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  products,
  selectedCategorySlug,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  onAddToCart,
  onSelectProduct,
  wishlist,
  onToggleWishlist
}) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(15000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState<boolean>(false);

  // Collect available unique brands
  const allBrands = useMemo(() => {
    return Array.from(new Set(products.map(p => p.brand))).sort();
  }, [products]);

  // Handle brand toggle
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedBrands([]);
    setMaxPrice(15000);
    setInStockOnly(false);
    onSelectCategory('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (selectedCategorySlug !== 'all' && product.categorySlug !== selectedCategorySlug) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        const matchesTags = product.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesBrand && !matchesCategory && !matchesTags) {
          return false;
        }
      }
      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // In stock filter
      if (inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // Default featured order
    });
  }, [products, selectedCategorySlug, searchQuery, selectedBrands, maxPrice, inStockOnly, sortBy]);

  const hasActiveFilters =
    selectedCategorySlug !== 'all' ||
    selectedBrands.length > 0 ||
    maxPrice < 15000 ||
    inStockOnly ||
    searchQuery.trim() !== '';

  return (
    <section id="shop" className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & Live Product Count */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-100 px-3 py-1 rounded-full mb-2">
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>Full Electronics Catalog</span>
            </div>
            <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Explore All Tech &amp; Gadgets
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> electronics available for instant dispatch in UAE.
            </p>
          </div>

          {/* Quick Category Bar Tabs */}
          <div className="flex items-center gap-2">
            <button
              id="mobile-filter-drawer-toggle"
              onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
              className="lg:hidden px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center gap-2 shadow-sm"
            >
              <Filter className="w-4 h-4 text-sky-400" />
              <span>Filters {selectedBrands.length > 0 ? `(${selectedBrands.length})` : ''}</span>
            </button>
          </div>
        </div>

        {/* Category Horizontal Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            id="cat-pill-all"
            onClick={() => onSelectCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategorySlug === 'all'
                ? 'bg-slate-950 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Products ({products.length})
          </button>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategorySlug === cat.slug;
            return (
              <button
                key={cat.id}
                id={`cat-pill-${cat.slug}`}
                onClick={() => onSelectCategory(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Main Shop Layout: Sidebar + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Filter Sidebar (Desktop & Mobile Drawer) */}
          <div
            className={`lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6 ${
              isFilterSidebarOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 font-['Outfit'] font-bold text-base text-slate-900">
                <SlidersHorizontal className="w-4 h-4 text-sky-600" />
                <span>Refine Selection</span>
              </div>
              {hasActiveFilters && (
                <button
                  id="reset-all-filters-btn"
                  onClick={resetFilters}
                  className="text-xs text-rose-500 hover:text-rose-600 font-semibold flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {/* Price Range Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-800">
                <span>Maximum Price</span>
                <span className="font-bold text-sky-600">AED {maxPrice.toLocaleString()}</span>
              </div>
              <input
                id="price-range-slider"
                type="range"
                min={1000}
                max={15000}
                step={500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>AED 1,000</span>
                <span>AED 15,000</span>
              </div>
            </div>

            {/* Brand Checkboxes */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Brands
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {allBrands.map((brand) => {
                  const isChecked = selectedBrands.includes(brand);
                  return (
                    <label
                      key={brand}
                      className="flex items-center justify-between text-xs text-slate-700 hover:text-slate-900 cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleBrand(brand)}
                          className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 rounded-md"
                        />
                        <span className={isChecked ? 'font-bold text-slate-900' : ''}>
                          {brand}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {products.filter(p => p.brand === brand).length}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Stock Availability Toggle */}
            <div className="pt-4 border-t border-slate-100">
              <label className="flex items-center justify-between text-xs font-semibold text-slate-800 cursor-pointer">
                <span>In Stock Ready in Dubai</span>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
              </label>
            </div>

            {/* UAE Express Delivery Banner in Sidebar */}
            <div className="pt-4 border-t border-slate-100 bg-sky-50/50 p-3.5 rounded-xl border border-sky-100 text-xs text-slate-700 space-y-1">
              <div className="font-bold text-sky-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Dubai Mall Pickup</span>
              </div>
              <p className="text-[11px] text-slate-600">
                Order online and pick up in store within 60 minutes free of charge.
              </p>
            </div>
          </div>

          {/* Right Area: Controls Bar + Products Grid */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Sorting & Search Indicator Bar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-slate-500 font-medium">Sort by:</span>
                <select
                  id="shop-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 rounded-xl px-3 py-2 focus:outline-none focus:border-sky-500"
                >
                  <option value="featured">Featured / Recommended</option>
                  <option value="price-asc">Price: Low to High (AED)</option>
                  <option value="price-desc">Price: High to Low (AED)</option>
                  <option value="rating">Highest Customer Rating</option>
                  <option value="newest">New Releases</option>
                </select>
              </div>

              {/* Active Filter Badges */}
              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
                  {selectedCategorySlug !== 'all' && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg">
                      {selectedCategorySlug}
                      <button onClick={() => onSelectCategory('all')} className="hover:text-rose-500">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-sky-100 text-sky-800 px-2.5 py-1 rounded-lg">
                      "{searchQuery}"
                      <button onClick={() => setSearchQuery('')} className="hover:text-rose-500">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedBrands.map(b => (
                    <span key={b} className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg">
                      {b}
                      <button onClick={() => toggleBrand(b)} className="hover:text-rose-500">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onSelectProduct={onSelectProduct}
                    isWishlisted={wishlist.includes(product.id)}
                    onToggleWishlist={onToggleWishlist}
                  />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-['Outfit'] font-bold text-xl text-slate-900">
                  No Electronics Matched Your Search
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  We couldn't find any products matching your active filters. Try broadening your price range or clearing selected brands.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-sky-600 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
