import React from 'react';
import {
  Star,
  ShoppingBag,
  Sparkles,
  Zap,
  Eye,
  Check
} from 'lucide-react';
import { Product } from '../types';
import { FEATURED_8_PRODUCTS, FeaturedProductCardItem } from '../data/products';

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onAddToCart,
  onSelectProduct
}) => {
  return (
    <section id="featured" className="py-16 bg-sky-50/60 text-slate-900 relative overflow-hidden border-b border-sky-200">
      {/* Background Subtle Tech Ambient */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>HANDPICKED DUBAI TECH SELECTION</span>
            </div>
            <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Featured products
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Curated everyday flagships, audio gear, computing powerhouses, and smart essentials backed by official UAE warranties.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-sky-800 bg-white/90 border border-sky-200 px-3.5 py-2 rounded-xl shadow-xs">
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Ready for Same-Day Dubai Dispatch</span>
          </div>
        </div>

        {/* Responsive Grid: Stacks 1 or 2 per row on mobile, 4 per row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FEATURED_8_PRODUCTS.map((item: FeaturedProductCardItem, index: number) => {
            const { product, oneLineSpec, hasSaleBadge, type } = item;
            
            // Full rating stars calculation
            const fullStars = Math.floor(product.rating);
            const hasHalfStar = product.rating - fullStars >= 0.5;

            return (
              <div
                key={product.id}
                id={`featured-card-${product.id}`}
                className="group relative bg-white border border-sky-200/90 hover:border-sky-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Card Top: Electronics Category Label & Optional Red Sale Badge */}
                <div className="flex items-center justify-between gap-2 mb-3 min-h-[26px]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-150 px-2.5 py-0.5 rounded-md font-mono">
                    {type}
                  </span>

                  {hasSaleBadge && (
                    <span
                      id={`sale-badge-${product.id}`}
                      className="px-2.5 py-0.5 rounded-full bg-rose-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-xs shadow-rose-600/30 flex items-center gap-1 animate-pulse"
                    >
                      Sale
                    </span>
                  )}
                </div>

                {/* Product Image Container with Soft Background and Gentle Hover Zoom */}
                <div
                  className="relative aspect-square rounded-xl bg-sky-50/70 border border-sky-100/80 flex items-center justify-center p-4 overflow-hidden cursor-pointer group/img"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-300 drop-shadow-xs"
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-0 bg-sky-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[1px]">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-md border border-sky-200 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-sky-600" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Card Body: Name, One-line Spec, Rating, Price */}
                <div className="mt-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    
                    {/* Star Rating & Numeric Score */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < fullStars
                                ? 'fill-amber-400 text-amber-400'
                                : i === fullStars && hasHalfStar
                                ? 'fill-amber-400/50 text-amber-400'
                                : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-700">
                        {product.rating.toFixed(1)}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        ({product.reviewsCount})
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-['Outfit'] font-bold text-sm sm:text-base text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 leading-snug cursor-pointer"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {/* One-line Spec */}
                    <p
                      className="text-xs text-slate-500 font-medium truncate"
                      title={oneLineSpec}
                    >
                      {oneLineSpec}
                    </p>
                  </div>

                  {/* Pricing & Add To Cart Button */}
                  <div className="pt-2 border-t border-slate-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="font-['Outfit'] font-extrabold text-lg sm:text-xl text-sky-800">
                          AED {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="text-xs text-slate-400 line-through">
                            AED {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {hasSaleBadge && product.discountPercent && (
                        <span className="text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded">
                          -{product.discountPercent}%
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      id={`featured-add-to-cart-${product.id}`}
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className="w-full py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4 text-white" />
                      <span>Add to cart</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
