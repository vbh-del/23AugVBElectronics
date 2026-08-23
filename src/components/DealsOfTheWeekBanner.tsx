import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Flame,
  Clock,
  Tag,
  Zap
} from 'lucide-react';

interface DealsOfTheWeekBannerProps {
  onViewDeals: () => void;
}

export const DealsOfTheWeekBanner: React.FC<DealsOfTheWeekBannerProps> = ({
  onViewDeals
}) => {
  return (
    <section id="deals-of-the-week-banner" className="py-10 bg-sky-50/40 relative overflow-hidden border-b border-sky-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Colourful Banner Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 text-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-blue-500/20 border border-blue-400/40">
          
          {/* Decorative ambient elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-cyan-300/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-10 w-72 h-72 bg-purple-400/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              
              {/* Badges row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/90 border border-rose-400/50 text-white text-xs font-extrabold tracking-wide uppercase shadow-sm">
                  <Flame className="w-3.5 h-3.5 fill-white" />
                  <span>Limited Time Drop</span>
                </span>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-cyan-200" />
                  <span>Refreshes Every Monday</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-extrabold shadow-sm">
                  <Zap className="w-3.5 h-3.5 fill-slate-900" />
                  <span>Up to 45% OFF</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
                Deals of the week
              </h2>

              {/* Subtitle */}
              <p className="text-blue-100 text-sm sm:text-base max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Unlock handpicked price cuts on flagship smartphones, ultra-portable laptops, noise-cancelling audio, and smart home essentials with 100% official UAE warranties.
              </p>

              {/* Promo Code Pill & Feature tags */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-blue-100">
                <span className="flex items-center gap-1.5 bg-blue-900/40 border border-blue-300/30 px-3 py-1.5 rounded-xl font-mono text-cyan-200 font-semibold">
                  <Tag className="w-3.5 h-3.5 text-amber-300" />
                  Code: <strong className="text-white font-bold tracking-wider">WEEKLYDROP</strong>
                </span>
                <span>• Free express courier in Dubai</span>
                <span>• 0% Tabby installments</span>
              </div>

            </div>

            {/* Right Action Button Area */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 text-center w-full max-w-xs space-y-4 shadow-lg">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold block">
                    Exclusive Weekly Offers
                  </span>
                  <div className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-[#FACC15]">
                    Save up to AED 1,200
                  </div>
                </div>

                <button
                  id="deals-of-the-week-btn"
                  onClick={onViewDeals}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] active:bg-[#EAB308] text-[#0A192F] font-['Outfit'] font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-yellow-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#0A192F]" />
                  <span>Shop Deals of the Week</span>
                  <ArrowRight className="w-4 h-4 text-[#0A192F]" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
