import React, { useState } from 'react';
import {
  MessageSquare,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Tech Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Tech Inquiry',
        message: ''
      });
    }, 800);
  };

  const faqs = [
    {
      q: 'Do you offer same-day delivery across Dubai and UAE?',
      a: 'Yes! All orders placed before 2:00 PM GST qualify for guaranteed Same-Day Express Delivery across Dubai, Sharjah, and Ajman. Abu Dhabi and other Emirates are delivered within 24 hours.'
    },
    {
      q: 'Are all devices 100% genuine with official UAE warranties?',
      a: 'Every single product sold at VB Electronics is 100% genuine Middle East / UAE specification, officially sealed with TDRA compliance, and backed by a 2-year official manufacturer warranty.'
    },
    {
      q: 'Can I pay in installments without a credit card in UAE?',
      a: 'Yes! We partner with Tabby and Tamara to allow you to split your purchase into 4 equal monthly payments with 0% interest and zero hidden fees, using any UAE debit card.'
    },
    {
      q: 'Can I collect my online order at The Dubai Mall store?',
      a: 'Yes! Simply select "Click & Collect - The Dubai Mall" or "Mall of the Emirates" at checkout. Your order will be packed and ready for pickup within 60 minutes.'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-sky-50/50 border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 uppercase tracking-widest bg-sky-100 border border-sky-200 px-3.5 py-1 rounded-full">
            <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
            <span>We're Here in Dubai</span>
          </div>
          <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Contact VB Electronics Support
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Have questions about specs, bulk corporate pricing, or warranty? Our Dubai team is ready to assist you.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form & Quick Channels */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-sm space-y-6">
            <h3 className="font-['Outfit'] font-bold text-xl text-slate-900">
              Send us a Message
            </h3>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been sent to our Dubai team. We will contact you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Al Mansoori"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-sky-50/50 border border-sky-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tariq@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-sky-50/50 border border-sky-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Phone / WhatsApp (UAE +971)
                  </label>
                  <input
                    type="tel"
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-sky-50/50 border border-sky-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white transition-all text-slate-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-sky-50/50 border border-sky-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-medium text-slate-800"
                  >
                    <option value="General Tech Inquiry">General Tech Inquiry</option>
                    <option value="Dubai Same-Day Delivery">Dubai Same-Day Delivery Status</option>
                    <option value="Product Availability & Specs">Product Availability &amp; Specs</option>
                    <option value="Corporate / B2B Dubai Orders">Corporate / B2B Dubai Orders</option>
                    <option value="Official Warranty Claim">Official Warranty &amp; Service</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you with electronics today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs sm:text-sm bg-sky-50/50 border border-sky-200 rounded-xl p-3.5 focus:outline-none focus:border-sky-500 focus:bg-white transition-all resize-none text-slate-900"
                />
              </div>

              <button
                id="submit-contact-form-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Dispatching to Dubai Support...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-sky-200" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Direct WhatsApp Action */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-emerald-950 text-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                  💬
                </div>
                <div>
                  <span className="font-bold text-sm block text-emerald-900">Need Instant Help?</span>
                  <span className="text-emerald-700">Chat with a Dubai electronics advisor on WhatsApp</span>
                </div>
              </div>

              <a
                href="https://wa.me/97143308890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs whitespace-nowrap shadow-sm transition-colors flex items-center gap-1.5"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: FAQ & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-gradient-to-br from-sky-900 to-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-sky-800 space-y-4 shadow-md">
              <h4 className="font-['Outfit'] font-bold text-lg text-white">
                Dubai Headquarters &amp; Flagship
              </h4>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <span>
                    The Dubai Mall, Level 2, Electronics Avenue, Downtown Dubai, United Arab Emirates
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-sky-300 shrink-0" />
                  <a href="tel:+97143308890" className="text-sky-300 font-bold hover:underline">
                    +971 4 330 8890
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-300 shrink-0" />
                  <a href="mailto:support@vbelectronics.ae" className="text-slate-200 hover:underline">
                    support@vbelectronics.ae
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>Daily: 10:00 AM - 11:00 PM GST</span>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-white rounded-3xl p-6 border border-sky-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
                <HelpCircle className="w-4 h-4 text-sky-600" />
                <span>Frequently Asked Questions</span>
              </div>

              <div className="space-y-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-sky-100 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-3 text-left text-xs font-bold text-slate-800 flex items-center justify-between gap-2 hover:bg-sky-50/50 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-sky-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3 pb-3 text-xs text-slate-600 leading-relaxed bg-sky-50/30">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
