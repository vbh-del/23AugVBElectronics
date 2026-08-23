import React, { useState, useEffect } from 'react';
import {
  Flame,
  Clock,
  Zap,
  ShoppingBag,
  Sparkles,
  Eye,
  ShieldCheck
} from 'lucide-react';
import { Product } from '../types';
import { DEALS } from '../data/deals';

interface DealsSectionProps {
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  onAddToCart,
  onSelectProduct
}) => {
  // Live simulated countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="deals" className="py-16 bg-gradient-to-b from-sky-100/60 via-sky-50 to-blue-50/60 text-slate-900 relative overflow-hidden border-y border-sky-200">
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Deals Header with Live Countdown */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 bg-white/95 border border-sky-200 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-md">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-extrabold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>LIMITED DUBAI FLASH SALE</span>
            </div>
            <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Dubai Tech Drop &amp; Weekend Deals
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Special promotional prices on flagship items. Guaranteed genuine UAE models with official brand warranties.
            </p>
          </div>

          {/* Countdown Clock Display */}
          <div className="flex flex-col items-start lg:items-end">
            <span className="text-xs font-bold text-slate-600 mb-2 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-sky-600 animate-pulse" />
              <span>Deal Ends In:</span>
            </span>
            <div className="flex items-center gap-2 font-mono">
              <div className="bg-sky-100/90 border border-sky-200 px-3.5 py-2.5 rounded-xl text-center min-w-[56px] shadow-sm">
                <span className="block font-bold text-2xl text-slate-900">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-sky-800 font-bold uppercase tracking-wider">Hours</span>
              </div>
              <span className="font-extrabold text-sky-600 text-xl">:</span>
              <div className="bg-sky-100/90 border border-sky-200 px-3.5 py-2.5 rounded-xl text-center min-w-[56px] shadow-sm">
                <span className="block font-bold text-2xl text-slate-900">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-sky-800 font-bold uppercase tracking-wider">Mins</span>
              </div>
              <span className="font-extrabold text-sky-600 text-xl">:</span>
              <div className="bg-sky-100/90 border border-sky-200 px-3.5 py-2.5 rounded-xl text-center min-w-[56px] shadow-sm">
                <span className="block font-bold text-2xl text-sky-700">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-sky-800 font-bold uppercase tracking-wider">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEALS.map((deal) => {
            const product = deal.product;
            return (
              <div
                key={deal.id}
                id={`deal-card-${deal.id}`}
                className="group relative bg-white border border-sky-200 hover:border-sky-400 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 shadow-sm"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-rose-500 text-white font-extrabold text-[11px] flex items-center gap-1 shadow-sm">
                    <Zap className="w-3 h-3 fill-white" />
                    {deal.badge}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold font-mono">
                    {product.brand}
                  </span>
                </div>

                {/* Image Showcase */}
                <div
                  className="relative aspect-square rounded-xl bg-sky-50/70 flex items-center justify-center p-3 overflow-hidden border border-sky-100 cursor-pointer group/img"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                  <div className="absolute inset-0 bg-sky-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[1px]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white hover:bg-sky-50 text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-md border border-sky-200"
                    >
                      <Eye className="w-3.5 h-3.5 text-sky-600" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-['Outfit'] font-bold text-sm text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    
                    <div className="mt-2.5 flex items-baseline gap-2">
                      <span className="font-['Outfit'] font-extrabold text-lg text-sky-700">
                        AED {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          AED {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stock progress meter */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">Claimed in UAE:</span>
                      <span className="text-rose-600 font-bold">{deal.stockSoldPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-rose-500 rounded-full"
                        style={{ width: `${deal.stockSoldPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      id={`claim-deal-btn-${deal.id}`}
                      onClick={() => onAddToCart(product)}
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-sky-500/20 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Promo banner strip */}
        <div className="mt-10 p-5 rounded-2xl bg-sky-100/90 border border-sky-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500 text-white shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Use Coupon Code <span className="font-mono bg-white text-sky-800 border border-sky-200 px-2 py-0.5 rounded font-extrabold shadow-xs">DUBAI10</span> at Checkout
              </p>
              <p className="text-xs text-slate-600">
                Get an extra 10% discount on all accessory and audio orders above AED 300 today.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-sky-800">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Applies automatically in cart</span>
          </div>
        </div>

      </div>
    </section>
  );
};
