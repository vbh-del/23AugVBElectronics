import React from 'react';
import {
  Smartphone,
  Laptop,
  Headphones,
  Gamepad2,
  Camera,
  Tv,
  Watch,
  Home,
  ArrowRight,
  Layers
} from 'lucide-react';
import { Category } from '../types';
import { CATEGORIES } from '../data/categories';

interface CategoryGridProps {
  onSelectCategory: (categorySlug: string) => void;
  selectedCategory: string;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  selectedCategory
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-sky-400" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-sky-400" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-sky-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6 text-sky-400" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-sky-400" />;
      case 'Tv':
        return <Tv className="w-6 h-6 text-sky-400" />;
      case 'Watch':
        return <Watch className="w-6 h-6 text-sky-400" />;
      case 'Home':
        return <Home className="w-6 h-6 text-sky-400" />;
      default:
        return <Layers className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="categories" className="py-16 bg-slate-100/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-100 px-3 py-1 rounded-full mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Explore Tech Categories</span>
            </div>
            <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Curated for Modern Tech Connoisseurs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl">
              Browse UAE’s premier collection of genuine consumer electronics, computing gear, and smart living gear.
            </p>
          </div>

          <button
            id="view-all-cats-btn"
            onClick={() => onSelectCategory('all')}
            className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 self-start md:self-auto bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 hover:border-sky-300 transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat: Category, index: number) => {
            const isSelected = selectedCategory === cat.slug;
            const pastelTints = [
              { bg: 'hover:bg-sky-50/40', badge: 'bg-sky-100 text-sky-800 border-sky-200/60', iconBg: 'bg-sky-100 text-sky-700' },
              { bg: 'hover:bg-purple-50/40', badge: 'bg-purple-100 text-purple-800 border-purple-200/60', iconBg: 'bg-purple-100 text-purple-700' },
              { bg: 'hover:bg-pink-50/40', badge: 'bg-pink-100 text-pink-800 border-pink-200/60', iconBg: 'bg-pink-100 text-pink-700' },
              { bg: 'hover:bg-amber-50/40', badge: 'bg-amber-100 text-amber-800 border-amber-200/60', iconBg: 'bg-amber-100 text-amber-700' },
              { bg: 'hover:bg-teal-50/40', badge: 'bg-teal-100 text-teal-800 border-teal-200/60', iconBg: 'bg-teal-100 text-teal-700' },
              { bg: 'hover:bg-blue-50/40', badge: 'bg-blue-100 text-blue-800 border-blue-200/60', iconBg: 'bg-blue-100 text-blue-700' },
              { bg: 'hover:bg-emerald-50/40', badge: 'bg-emerald-100 text-emerald-800 border-emerald-200/60', iconBg: 'bg-emerald-100 text-emerald-700' },
              { bg: 'hover:bg-indigo-50/40', badge: 'bg-indigo-100 text-indigo-800 border-indigo-200/60', iconBg: 'bg-indigo-100 text-indigo-700' }
            ];
            const tint = pastelTints[index % pastelTints.length];

            return (
              <div
                key={cat.id}
                id={`category-card-${cat.slug}`}
                onClick={() => onSelectCategory(cat.slug)}
                className={`group relative bg-white rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 ${tint.bg} ${
                  isSelected
                    ? 'border-sky-500 ring-2 ring-sky-500/20 bg-sky-50/40'
                    : 'border-slate-200/80 hover:border-sky-300'
                }`}
              >
                {/* Background image preview on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-full overflow-hidden pointer-events-none">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${tint.iconBg} group-hover:scale-105 transition-transform`}>
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tint.badge}`}>
                      {cat.itemCount} items
                    </span>
                  </div>

                  <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex -space-x-1 overflow-hidden">
                    {cat.popularBrands.slice(0, 3).map((brand, i) => (
                      <span
                        key={i}
                        className="inline-block text-[10px] font-medium bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200/80"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-sky-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Shop</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
