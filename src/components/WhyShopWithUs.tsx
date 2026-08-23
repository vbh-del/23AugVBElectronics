import React from 'react';
import {
  ShieldCheck,
  Award,
  Truck,
  RotateCcw,
  Banknote
} from 'lucide-react';

export const WhyShopWithUs: React.FC = () => {
  const features = [
    {
      id: 'feature-genuine',
      title: 'Genuine products',
      desc: '100% authentic brand sealed',
      icon: ShieldCheck,
      iconColor: 'text-sky-600',
      iconBg: 'bg-sky-100 group-hover:bg-sky-600 group-hover:text-white',
      borderColor: 'border-sky-200/80 hover:border-sky-400'
    },
    {
      id: 'feature-warranty',
      title: '1-year warranty',
      desc: 'Official manufacturer warranty',
      icon: Award,
      iconColor: 'text-violet-600',
      iconBg: 'bg-violet-100 group-hover:bg-violet-600 group-hover:text-white',
      borderColor: 'border-violet-200/80 hover:border-violet-400'
    },
    {
      id: 'feature-delivery',
      title: 'Free UAE delivery',
      desc: 'Fast express to all Emirates',
      icon: Truck,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
      borderColor: 'border-emerald-200/80 hover:border-emerald-400'
    },
    {
      id: 'feature-returns',
      title: 'Easy 7-day returns',
      desc: 'Hassle-free swap or refund',
      icon: RotateCcw,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-100 group-hover:bg-amber-600 group-hover:text-white',
      borderColor: 'border-amber-200/80 hover:border-amber-400'
    },
    {
      id: 'feature-cod',
      title: 'Cash on Delivery',
      desc: 'Pay at your doorstep',
      icon: Banknote,
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-100 group-hover:bg-rose-600 group-hover:text-white',
      borderColor: 'border-rose-200/80 hover:border-rose-400'
    }
  ];

  return (
    <section id="why-shop-with-us" className="py-12 bg-white/80 border-b border-sky-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 block mb-1">
            Peace of Mind Guaranteed
          </span>
          <h2 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Why shop with us
          </h2>
        </div>

        {/* 5-Column Responsive Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className={`group bg-white rounded-2xl p-4 sm:p-5 border ${item.borderColor} shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-3.5 transition-all duration-300 shadow-xs group-hover:scale-110`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="font-['Outfit'] font-bold text-sm sm:text-base text-slate-900 group-hover:text-sky-800 transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
