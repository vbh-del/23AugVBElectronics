import React from 'react';
import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle2,
  Truck,
  ShieldCheck,
  CreditCard,
  Building2,
  ChevronRight,
  ShoppingBag,
  Zap
} from 'lucide-react';
import { Product } from '../types';

interface HeroProps {
  onExploreShop: () => void;
  onViewDeals: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory?: (categorySlug: string) => void;
  featuredProduct: Product;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreShop,
  onViewDeals,
  onSelectProduct,
  onSelectCategory,
  featuredProduct
}) => {
  // 4 Featured Categories for the "Shop by category" row
  const categoryRowItems = [
    {
      name: 'Phones',
      slug: 'smartphones',
      icon: Smartphone,
      subtitle: '42+ Flagships',
      tag: '5G & Foldables',
      pastelBg: 'from-sky-100/90 to-blue-50/80',
      pastelBorder: 'border-sky-200/80 hover:border-sky-400',
      pastelBadge: 'bg-sky-100 text-sky-800 border-sky-200',
      iconBg: 'bg-sky-500 text-white shadow-sm shadow-sky-500/20'
    },
    {
      name: 'Laptops',
      slug: 'laptops',
      icon: Laptop,
      subtitle: '38+ Models',
      tag: 'M3/M4 & AI PCs',
      pastelBg: 'from-violet-100/80 to-purple-50/80',
      pastelBorder: 'border-violet-200/80 hover:border-violet-400',
      pastelBadge: 'bg-violet-100 text-violet-800 border-violet-200',
      iconBg: 'bg-violet-500 text-white shadow-sm shadow-violet-500/20'
    },
    {
      name: 'Audio',
      slug: 'audio',
      icon: Headphones,
      subtitle: '29+ Hi-Fi Gear',
      tag: 'ANC & Spatial',
      pastelBg: 'from-pink-100/80 to-rose-50/80',
      pastelBorder: 'border-pink-200/80 hover:border-pink-400',
      pastelBadge: 'bg-pink-100 text-pink-800 border-pink-200',
      iconBg: 'bg-pink-500 text-white shadow-sm shadow-pink-500/20'
    },
    {
      name: 'Wearables',
      slug: 'wearables',
      icon: Watch,
      subtitle: '26+ Smartwatches',
      tag: 'GPS & Health',
      pastelBg: 'from-emerald-100/80 to-teal-50/80',
      pastelBorder: 'border-emerald-200/80 hover:border-emerald-400',
      pastelBadge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      iconBg: 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/20'
    }
  ];

  const handleCategoryClick = (slug: string) => {
    if (onSelectCategory) {
      onSelectCategory(slug);
    } else {
      onExploreShop();
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-[#e0f2fe] text-slate-900 pt-8 pb-16 overflow-hidden border-b border-sky-200/60">
      {/* Background Decorative Tech Grid & Light Blue Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-10 -left-36 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Pastel Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-200/70 border border-sky-300/80 text-sky-900 text-xs font-bold mb-6 backdrop-blur-md shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>DUBAI’S SMART ELECTRONICS STORE • OFFICIAL UAE AUTHORIZED RETAILER</span>
        </div>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Short Subline, Bright Yellow "Shop now" button */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A192F] leading-[1.12]">
              Dubai’s smart electronics store
            </h1>

            <p className="text-slate-700 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Explore authentic UAE-spec smartphones, high-performance laptops, studio-grade audio, and next-gen wearables with 2-year warranty and same-day express delivery across Dubai.
            </p>

            {/* CTAs: Dominant Bright Yellow "Shop now" button (Yellow bg + dark navy text) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-shop-now-btn"
                onClick={onExploreShop}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FACC15] hover:bg-[#FDE047] active:bg-[#EAB308] text-[#0A192F] font-['Outfit'] font-extrabold text-base tracking-wide shadow-xl shadow-yellow-500/25 hover:shadow-yellow-400/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-[#0A192F]" />
                <span>Shop now</span>
                <ArrowRight className="w-5 h-5 text-[#0A192F]" />
              </button>

              <button
                id="hero-view-deals-btn"
                onClick={onViewDeals}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/90 hover:bg-white text-sky-900 font-bold text-sm border border-sky-200/90 shadow-md hover:border-sky-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>View Flash Deals</span>
              </button>
            </div>

            {/* Quick Trust Metrics */}
            <div className="pt-6 border-t border-sky-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-['Outfit'] font-extrabold text-2xl text-[#0A192F]">100%</span>
                <span className="text-xs text-sky-800 font-semibold">Genuine UAE Spec</span>
              </div>
              <div>
                <span className="block font-['Outfit'] font-extrabold text-2xl text-sky-700">2 Hours</span>
                <span className="text-xs text-sky-800 font-semibold">Express Dubai Delivery</span>
              </div>
              <div>
                <span className="block font-['Outfit'] font-extrabold text-2xl text-emerald-700">0% Tabby</span>
                <span className="text-xs text-emerald-800 font-semibold">Split in 4 Payments</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Flagship Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Pastel Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
              
              {/* Main Card */}
              <div className="relative bg-white/95 border border-sky-200 rounded-2xl p-6 sm:p-7 shadow-xl backdrop-blur-xl">
                
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#FACC15] text-[#0A192F] flex items-center gap-1 shadow-sm">
                    <Award className="w-3.5 h-3.5" />
                    DUBAI TOP PICK
                  </span>
                  <span className="text-xs font-bold text-emerald-800 flex items-center gap-1 bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Ready in Dubai Warehouse
                  </span>
                </div>

                {/* Image Container with Zoom */}
                <div className="relative overflow-hidden rounded-xl bg-sky-50 aspect-[4/3] flex items-center justify-center p-4 border border-sky-100">
                  <img
                    src={featuredProduct.image}
                    alt={featuredProduct.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-sky-200 text-[11px] text-slate-700 font-mono font-semibold shadow-sm">
                    {featuredProduct.brand} • {featuredProduct.categorySlug.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-5 space-y-3">
                  <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-1">
                    {featuredProduct.name}
                  </h3>

                  <div className="flex items-baseline gap-2">
                    <span className="font-['Outfit'] font-extrabold text-2xl text-sky-700">
                      AED {featuredProduct.price.toLocaleString()}
                    </span>
                    {featuredProduct.originalPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        AED {featuredProduct.originalPrice.toLocaleString()}
                      </span>
                    )}
                    {featuredProduct.discountPercent && (
                      <span className="text-xs font-bold text-rose-800 bg-rose-100 border border-rose-200 px-2 py-0.5 rounded">
                        Save {featuredProduct.discountPercent}%
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {featuredProduct.description}
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      id="hero-quick-view-btn"
                      onClick={() => onSelectProduct(featuredProduct)}
                      className="flex-1 py-2.5 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#0A192F] font-extrabold text-xs shadow-md transition-colors text-center cursor-pointer"
                    >
                      View Specs &amp; Order
                    </button>
                    <div className="text-[11px] text-slate-600 text-right">
                      <span>4 payments of</span>
                      <strong className="block text-slate-900 font-bold">
                        AED {Math.round(featuredProduct.price / 4).toLocaleString()} with Tabby
                      </strong>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* "Shop by category" Row of Four Cards (Phones, Laptops, Audio, Wearables) */}
        <div className="mt-16 pt-8 border-t border-sky-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-700 block mb-1">
                Curated Collections
              </span>
              <h2 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Shop by category
              </h2>
            </div>
            <button
              onClick={() => onSelectCategory ? onSelectCategory('all') : onExploreShop()}
              className="text-xs font-bold text-sky-800 hover:text-sky-950 flex items-center gap-1.5 self-start sm:self-auto py-1.5 px-3.5 rounded-xl bg-white border border-sky-200 hover:border-sky-400 shadow-sm transition-colors cursor-pointer"
            >
              <span>View All Categories</span>
              <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
            </button>
          </div>

          {/* Responsive 4-card Category Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {categoryRowItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.slug}
                  id={`hero-category-card-${item.slug}`}
                  onClick={() => handleCategoryClick(item.slug)}
                  className={`group relative rounded-2xl p-5 border bg-gradient-to-br ${item.pastelBg} ${item.pastelBorder} backdrop-blur-md cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between overflow-hidden shadow-sm`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.pastelBadge}`}>
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 group-hover:text-sky-800 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 flex items-center justify-between font-medium">
                      <span>{item.subtitle}</span>
                      <span className="text-sky-700 font-bold text-[11px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                        Browse <ChevronRight className="w-3 h-3" />
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* UAE Value Proposition Strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/90 border border-sky-200/80 hover:border-sky-400 rounded-2xl p-5 shadow-sm flex items-start gap-4 transition-all group">
            <div className="p-3 rounded-xl bg-sky-100 text-sky-700 group-hover:scale-110 transition-transform">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Same-Day Dubai Delivery</h4>
              <p className="text-xs text-slate-600 mt-1">Free express delivery on all orders over AED 200 across UAE.</p>
            </div>
          </div>

          <div className="bg-white/90 border border-sky-200/80 hover:border-sky-400 rounded-2xl p-5 shadow-sm flex items-start gap-4 transition-all group">
            <div className="p-3 rounded-xl bg-violet-100 text-violet-700 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">2-Year UAE Warranty</h4>
              <p className="text-xs text-slate-600 mt-1">100% genuine Middle East spec with official brand servicing.</p>
            </div>
          </div>

          <div className="bg-white/90 border border-sky-200/80 hover:border-sky-400 rounded-2xl p-5 shadow-sm flex items-start gap-4 transition-all group">
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 group-hover:scale-110 transition-transform">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">0% Interest Tabby &amp; Tamara</h4>
              <p className="text-xs text-slate-600 mt-1">Split in 4 easy installments. No hidden fees or credit cards.</p>
            </div>
          </div>

          <div className="bg-white/90 border border-sky-200/80 hover:border-sky-400 rounded-2xl p-5 shadow-sm flex items-start gap-4 transition-all group">
            <div className="p-3 rounded-xl bg-amber-100 text-amber-700 group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Dubai Mall &amp; MoE Hubs</h4>
              <p className="text-xs text-slate-600 mt-1">Touch, test, and pick up orders in 60 mins at our retail showrooms.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
