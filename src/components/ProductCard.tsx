import React from 'react';
import { Star, ShoppingBag, Eye, Heart, Check, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onSelectProduct,
  isWishlisted,
  onToggleWishlist
}) => {
  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
    >
      {/* Top Badges & Actions */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
        <div className="flex flex-wrap gap-1.5">
          {product.discountPercent && (
            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 border border-rose-200 text-rose-800 font-bold text-[10px] shadow-sm">
              -{product.discountPercent}% OFF
            </span>
          )}
          {product.isFeatured && (
            <span className="px-2.5 py-0.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 font-bold text-[10px] shadow-sm">
              FEATURED
            </span>
          )}
        </div>

        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`pointer-events-auto p-2 rounded-full backdrop-blur-md transition-all shadow-sm ${
            isWishlisted
              ? 'bg-rose-500 text-white'
              : 'bg-white/90 hover:bg-white text-slate-400 hover:text-rose-500 border border-slate-200/60'
          }`}
          aria-label="Toggle Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>
      </div>

      {/* Image Area with Quick View Trigger */}
      <div
        onClick={() => onSelectProduct(product)}
        className="relative aspect-square w-full bg-slate-50 flex items-center justify-center p-6 cursor-pointer overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Quick View Hover Button */}
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-950 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-200"
          >
            <Eye className="w-3.5 h-3.5 text-sky-400" />
            <span>Quick Specs</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="font-semibold uppercase tracking-wider text-[10px] text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
              {product.brand}
            </span>
            <span className="flex items-center gap-1 text-slate-400 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>UAE Spec</span>
            </span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onSelectProduct(product)}
            className="font-['Outfit'] font-bold text-sm sm:text-base text-slate-900 hover:text-sky-600 transition-colors line-clamp-2 cursor-pointer leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-slate-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-700">{product.rating}</span>
            <span className="text-[11px] text-slate-400">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Price & Add to Cart Footer */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-end justify-between gap-2">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
              Dubai Price
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-['Outfit'] font-extrabold text-base sm:text-lg text-slate-950">
                AED {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  AED {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <button
            id={`add-to-cart-btn-${product.id}`}
            onClick={() => onAddToCart(product)}
            className="p-2.5 sm:px-3 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm hover:shadow-md hover:shadow-sky-500/25 active:scale-95 transition-all"
            title="Add to Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-sky-400 group-hover:text-white" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

      </div>
    </div>
  );
};
