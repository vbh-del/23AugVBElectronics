import React, { useState } from 'react';
import {
  X,
  Star,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';
import { Product } from '../types';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedColor?: string) => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0].name : ''
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs'>('overview');

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedColor || undefined);
    onClose();
  };

  return (
    <div
      id="product-quickview-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-quickview-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Gallery Showcase */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative aspect-square w-full rounded-2xl bg-slate-50 border border-slate-200/80 p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply transition-all duration-300"
                />
                {product.discountPercent && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-rose-500 text-white font-extrabold text-xs shadow-sm">
                    SAVE {product.discountPercent}%
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.gallery.map((imgUrl, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(imgUrl)}
                      className={`w-16 h-16 rounded-xl border-2 p-1 bg-slate-50 overflow-hidden shrink-0 transition-all ${
                        selectedImage === imgUrl ? 'border-sky-500 ring-2 ring-sky-500/20' : 'border-slate-200'
                      }`}
                    >
                      <img src={imgUrl} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* UAE Guarantee badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100 flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="text-[11px] text-slate-700 font-medium leading-tight">
                    Same-Day Delivery in Dubai &amp; Sharjah
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="text-[11px] text-slate-700 font-medium leading-tight">
                    2-Year Official UAE Brand Warranty
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Product Information & Purchase Controls */}
            <div className="md:col-span-6 space-y-5">
              
              {/* Header Info */}
              <div>
                <div className="flex items-center gap-2 text-xs mb-1.5">
                  <span className="font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded uppercase tracking-wider">
                    {product.brand}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 font-medium">{product.category}</span>
                </div>

                <h2 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-slate-900 leading-tight">
                  {product.name}
                </h2>

                {/* Rating & Availability */}
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                  <span className="text-xs text-slate-400">({product.reviewsCount} customer reviews)</span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    In Stock ({product.stockCount} left)
                  </span>
                </div>
              </div>

              {/* Price Display */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-slate-950">
                    AED {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      AED {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-xs font-bold text-emerald-600">
                    Includes 5% UAE VAT
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Or 4 interest-free monthly installments of{' '}
                  <strong className="text-slate-800">
                    AED {Math.round(product.price / 4).toLocaleString()}
                  </strong>{' '}
                  with Tabby / Tamara.
                </p>
              </div>

              {/* Color Selection (if available) */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-800 block">
                    Select Color: <span className="text-sky-600 font-semibold">{selectedColor}</span>
                  </label>
                  <div className="flex items-center gap-2.5">
                    {product.colors.map((col) => (
                      <button
                        key={col.name}
                        onClick={() => setSelectedColor(col.name)}
                        className={`group relative w-8 h-8 rounded-full p-0.5 border-2 transition-all ${
                          selectedColor === col.name ? 'border-sky-500 scale-110' : 'border-transparent'
                        }`}
                        title={col.name}
                      >
                        <span
                          className="block w-full h-full rounded-full border border-slate-300 shadow-inner"
                          style={{ backgroundColor: col.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tabs: Highlights vs Specs */}
              <div>
                <div className="flex border-b border-slate-200 gap-4 mb-3">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`pb-2 text-xs font-bold transition-all border-b-2 ${
                      activeTab === 'overview'
                        ? 'border-sky-600 text-sky-600'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Highlights
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2 text-xs font-bold transition-all border-b-2 ${
                      activeTab === 'specs'
                        ? 'border-sky-600 text-sky-600'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Technical Specifications
                  </button>
                </div>

                {activeTab === 'overview' ? (
                  <div className="space-y-2">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-1.5 pt-1">
                      {product.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between py-1 border-b border-slate-100 text-xs">
                        <span className="text-slate-500 font-medium">{key}</span>
                        <span className="text-slate-900 font-semibold text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quantity & Add to Cart Controls */}
              <div className="pt-3 border-t border-slate-200 flex items-center gap-3">
                {/* Quantity input */}
                <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-slate-600 hover:bg-slate-200 font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-bold text-slate-900 min-w-[32px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    className="px-3 py-2 text-slate-600 hover:bg-slate-200 font-bold text-sm"
                  >
                    +
                  </button>
                </div>

                <button
                  id="modal-add-to-cart-btn"
                  onClick={handleAdd}
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Shopping Cart • AED {(product.price * quantity).toLocaleString()}</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
