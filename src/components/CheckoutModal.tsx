import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Truck,
  CreditCard,
  Building2,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  discountAmount: number;
  promoCode: string;
  onClearCart: () => void;
  onShowToast: (title: string, message: string, type: 'success' | 'info') => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  discountAmount,
  promoCode,
  onClearCart,
  onShowToast
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'details' | 'success'>('details');
  const [deliveryMethod, setDeliveryMethod] = useState<'courier' | 'pickup'>('courier');
  const [emirate, setEmirate] = useState('Dubai');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'tabby' | 'cod'>('card');
  const [orderNumber, setOrderNumber] = useState('');

  const [customer, setCustomer] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    pickupStore: 'The Dubai Mall (Level 2)'
  });

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const total = Math.max(0, subtotal - discountAmount);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.fullName || !customer.phone || (deliveryMethod === 'courier' && !customer.address)) {
      onShowToast('Required Information', 'Please provide your full delivery and contact information.', 'info');
      return;
    }

    const genOrderNum = `VB-DXB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(genOrderNum);
    setStep('success');
    onClearCart();
    onShowToast('Order Placed Successfully!', `Your order ${genOrderNum} is being prepared.`, 'success');
  };

  return (
    <div
      id="checkout-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="checkout-modal-panel"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div className="overflow-y-auto p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Secure UAE Checkout (256-Bit SSL)</span>
            </div>
            
            <h2 className="font-['Outfit'] font-extrabold text-2xl text-slate-900 mb-6">
              Complete Your Electronics Order
            </h2>

            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* Delivery or Store Pickup Toggle */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Choose Fulfillment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('courier')}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                      deliveryMethod === 'courier'
                        ? 'border-sky-500 bg-sky-50/50 ring-2 ring-sky-500/20'
                        : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <Truck className={`w-5 h-5 mt-0.5 ${deliveryMethod === 'courier' ? 'text-sky-600' : 'text-slate-400'}`} />
                    <div>
                      <strong className="block text-xs font-bold text-slate-900">UAE Express Delivery</strong>
                      <span className="text-[11px] text-slate-500">Same-Day in Dubai &amp; Sharjah</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                      deliveryMethod === 'pickup'
                        ? 'border-sky-500 bg-sky-50/50 ring-2 ring-sky-500/20'
                        : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <Building2 className={`w-5 h-5 mt-0.5 ${deliveryMethod === 'pickup' ? 'text-sky-600' : 'text-slate-400'}`} />
                    <div>
                      <strong className="block text-xs font-bold text-slate-900">Dubai Mall Pickup</strong>
                      <span className="text-[11px] text-slate-500">Ready in 60 minutes free</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Contact &amp; Delivery Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={customer.fullName}
                    onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                    className="text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="UAE Mobile Number (+971) *"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address (for invoice &amp; warranty certificate)"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500"
                />

                {deliveryMethod === 'courier' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <select
                      value={emirate}
                      onChange={(e) => setEmirate(e.target.value)}
                      className="text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 font-medium text-slate-800 focus:outline-none focus:border-sky-500"
                    >
                      <option value="Dubai">Dubai</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      <option value="Fujairah">Fujairah</option>
                      <option value="Umm Al Quwain">Umm Al Quwain</option>
                    </select>

                    <input
                      type="text"
                      required
                      placeholder="Building, Villa, Street, Area in UAE *"
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      className="sm:col-span-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                ) : (
                  <select
                    value={customer.pickupStore}
                    onChange={(e) => setCustomer({ ...customer, pickupStore: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 font-medium text-slate-800 focus:outline-none focus:border-sky-500"
                  >
                    <option value="The Dubai Mall (Level 2)">The Dubai Mall — Level 2 Electronics Avenue</option>
                    <option value="Mall of the Emirates (Ground Floor)">Mall of the Emirates — Ground Floor Ski Dubai Wing</option>
                    <option value="City Centre Mirdif (Level 1)">City Centre Mirdif — Level 1 North Galleria</option>
                  </select>
                )}
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      paymentMethod === 'card'
                        ? 'border-sky-500 bg-sky-50/50 ring-2 ring-sky-500/20'
                        : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <CreditCard className="w-4 h-4 text-sky-600" />
                      <span className="text-[10px] font-bold text-slate-500">VISA / MC</span>
                    </div>
                    <span className="text-xs font-bold text-slate-900 block">Credit/Debit Card</span>
                    <span className="text-[10px] text-slate-500">Apple Pay Supported</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('tabby')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      paymentMethod === 'tabby'
                        ? 'border-sky-500 bg-sky-50/50 ring-2 ring-sky-500/20'
                        : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span className="text-[10px] font-bold text-emerald-600">0% Interest</span>
                    </div>
                    <span className="text-xs font-bold text-slate-900 block">Tabby / Tamara</span>
                    <span className="text-[10px] text-slate-500">4 x AED {Math.round(total / 4).toLocaleString()}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-sky-500 bg-sky-50/50 ring-2 ring-sky-500/20'
                        : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Truck className="w-4 h-4 text-slate-700" />
                      <span className="text-[10px] font-bold text-slate-500">Cash/Card</span>
                    </div>
                    <span className="text-xs font-bold text-slate-900 block">Pay on Delivery</span>
                    <span className="text-[10px] text-slate-500">Courier terminal</span>
                  </button>
                </div>
              </div>

              {/* Order Total Review */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Total payable (Incl. 5% VAT)</span>
                  <div className="font-['Outfit'] font-extrabold text-2xl text-slate-950">
                    AED {total.toLocaleString()}
                  </div>
                </div>
                {promoCode && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    Promo {promoCode} Active
                  </span>
                )}
              </div>

              {/* Confirm Button */}
              <button
                id="place-order-btn"
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <span>Confirm &amp; Place UAE Order (AED {total.toLocaleString()})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          /* Order Confirmation Screen */
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Order Confirmed
              </span>
              <h2 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2">
                Thank You, {customer.fullName}!
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Your order is confirmed with VB Electronics Dubai. We have sent receipt &amp; UAE warranty registration to {customer.email || customer.phone}.
              </p>
            </div>

            {/* Receipt Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left text-xs space-y-2.5 max-w-md mx-auto font-mono">
              <div className="flex justify-between pb-2 border-b border-slate-200 font-sans">
                <span className="text-slate-500">Order Reference:</span>
                <strong className="text-sky-600 font-mono font-bold text-sm">{orderNumber}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Fulfillment:</span>
                <span className="text-slate-900 font-semibold">{deliveryMethod === 'courier' ? `Same-Day Delivery (${emirate})` : customer.pickupStore}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment:</span>
                <span className="text-slate-900 font-semibold capitalize">{paymentMethod === 'card' ? 'Online Card' : paymentMethod === 'tabby' ? 'Tabby 4 Installments' : 'Cash on Delivery'}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 font-sans text-sm">
                <span className="font-bold text-slate-900">Total Paid:</span>
                <strong className="text-slate-950 font-['Outfit'] text-base">AED {total.toLocaleString()}</strong>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="done-checkout-btn"
                onClick={onClose}
                className="px-8 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-sky-600 transition-colors shadow-md"
              >
                Continue Browsing VB Electronics
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
