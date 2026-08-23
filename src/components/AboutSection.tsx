import React from 'react';
import {
  Building2,
  ShieldCheck,
  Truck,
  Award,
  Users,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { STORE_LOCATIONS } from '../data/deals';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-sky-50 via-sky-100/50 to-blue-50 text-slate-900 relative overflow-hidden border-t border-sky-200">
      {/* Decorative Gradients */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 uppercase tracking-widest bg-sky-100 border border-sky-200 px-3.5 py-1 rounded-full">
            <Building2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Dubai's Premier Tech Destination</span>
          </div>
          <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-900">
            Built on Authenticity, Passion &amp; Speed
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered in Dubai, <strong className="text-slate-900 font-bold">VB Electronics</strong> was founded with a singular mission: providing tech enthusiasts, professionals, and families across the UAE with 100% genuine consumer electronics backed by gold-standard Middle East warranties.
          </p>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white border border-sky-200 p-6 rounded-2xl space-y-3 hover:border-sky-400 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900">100% Genuine Spec</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every device is sourced directly from authorized UAE brand distributors with official TDRA and TRA certifications.
            </p>
          </div>

          <div className="bg-white border border-sky-200 p-6 rounded-2xl space-y-3 hover:border-sky-400 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900">2-Hour Express Delivery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our dedicated Dubai logistics fleet delivers orders to Downtown, Marina, Palm Jumeirah, and Deira within 120 minutes.
            </p>
          </div>

          <div className="bg-white border border-sky-200 p-6 rounded-2xl space-y-3 hover:border-sky-400 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900">2-Year Official Warranty</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive manufacturer warranty coverage with walk-in repair support at our certified Dubai service labs.
            </p>
          </div>

          <div className="bg-white border border-sky-200 p-6 rounded-2xl space-y-3 hover:border-sky-400 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900">Bilingual Tech Gurus</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our showroom advisors speak English &amp; Arabic to offer personalized product advice, data migration, and unboxing help.
            </p>
          </div>
        </div>

        {/* Dubai Showroom Hubs */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">
                Physical Retail Experience
              </span>
              <h3 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900">
                Visit Our Dubai Showrooms
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-600">
              Instant in-store pickup available at all 3 locations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STORE_LOCATIONS.map((store) => (
              <div
                key={store.id}
                id={`store-card-${store.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-sky-200 hover:border-sky-400 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden bg-sky-50">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-sky-600 text-white font-bold text-[11px] shadow-sm">
                    {store.mall}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-['Outfit'] font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors">
                      {store.name}
                    </h4>
                    
                    <p className="text-xs text-slate-600 mt-2 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{store.address}</span>
                    </p>

                    <div className="mt-3 space-y-1.5 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{store.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <a href={`tel:${store.phone}`} className="text-sky-700 font-bold hover:underline">
                          {store.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      60-Min Click &amp; Collect
                    </span>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-sky-700 hover:text-sky-900"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
