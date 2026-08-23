import React, { useState } from 'react';
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  CreditCard,
  Banknote,
  ShieldCheck,
  Truck,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onShowToast: (title: string, message: string, type: 'success' | 'info') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onShowToast }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      onShowToast('Invalid Email', 'Please enter a valid email address.', 'info');
      return;
    }

    onShowToast(
      'Subscribed to VIP Tech Drops',
      'You are now on VB Electronics Dubai VIP list for secret flash drops and new releases!',
      'success'
    );
    setNewsletterEmail('');
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Shop', id: 'shop' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Twitter / X', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' }
  ];

  return (
    <footer className="bg-sky-100/90 text-slate-700 border-t border-sky-200">
      
      {/* Top Newsletter Bar */}
      <div className="border-b border-sky-200 py-10 bg-sky-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center lg:text-left">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
                VB VIP Tech Club
              </span>
              <h3 className="font-['Outfit'] font-bold text-2xl text-slate-900">
                Get Exclusive UAE Tech Drops &amp; Flash Sales
              </h3>
              <p className="text-xs text-slate-600">
                Sign up for secret price drops, new flagship arrivals, and Dubai express delivery perks.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email for AED 50 voucher..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 text-xs sm:text-sm bg-white border border-sky-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-xs shadow-md shadow-sky-600/20 whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand, About & Social Icons (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 shadow-md shadow-sky-500/25">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="font-['Outfit'] font-extrabold text-2xl tracking-tight text-slate-900">
                VB <span className="text-sky-600">Electronics</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Dubai’s trusted smart electronics store delivering genuine UAE-spec smartphones, computing gear, audio equipment, and wearables with gold-standard official warranties and express courier service.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Connect with us
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-white border border-sky-200/90 text-slate-600 hover:text-sky-600 hover:border-sky-400 hover:bg-sky-50 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-xs"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Outfit'] font-bold text-sm text-slate-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavClick(item.id)}
                    className="text-slate-600 hover:text-sky-700 font-medium flex items-center gap-1.5 transition-all duration-150 hover:translate-x-1 cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-sky-500" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details (Dubai Address, Phone, Support Hours) (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-['Outfit'] font-bold text-sm text-slate-900 uppercase tracking-wider">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-semibold">Dubai Headquarters &amp; Showroom:</strong>
                  <span>The Dubai Mall, Level 2, Electronics Avenue, Downtown Dubai, United Arab Emirates</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-semibold">Phone Support:</strong>
                  <a href="tel:+97143308890" className="text-sky-700 font-bold hover:underline">
                    +971 4 330 8890
                  </a>
                </div>
              </div>

              {/* Support Hours (9am–9pm) */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 shadow-2xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-semibold">Customer Support Hours:</strong>
                  <span className="font-medium text-slate-700">9:00 AM – 9:00 PM GST (Daily)</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Payment Icons Strip */}
        <div className="mt-10 pt-6 border-t border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Secure Payment Methods
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {/* Visa */}
            <div className="bg-white border border-sky-200 px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5 text-xs font-bold font-mono text-blue-900">
              <CreditCard className="w-3.5 h-3.5 text-blue-800" />
              <span>Visa</span>
            </div>

            {/* Mastercard */}
            <div className="bg-white border border-sky-200 px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5 text-xs font-bold font-mono text-rose-700">
              <CreditCard className="w-3.5 h-3.5 text-amber-500" />
              <span>Mastercard</span>
            </div>

            {/* Apple Pay */}
            <div className="bg-white border border-sky-200 px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <span> Apple Pay</span>
            </div>

            {/* Cash on Delivery */}
            <div className="bg-white border border-sky-200 px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5 text-xs font-bold text-emerald-800">
              <Banknote className="w-3.5 h-3.5 text-emerald-600" />
              <span>Cash on Delivery</span>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Copyright */}
        <div className="mt-6 pt-6 border-t border-sky-200/80 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center md:text-left">
          {/* Small Line Required */}
          <div className="font-medium text-slate-600">
            VB Electronics · built at London International · <a href="https://lisrc.ae" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-semibold hover:underline inline-flex items-center gap-0.5">lisrc.ae</a>
          </div>

          <div>
            © {new Date().getFullYear()} VB Electronics. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
