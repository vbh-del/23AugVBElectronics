import React, { useState } from 'react';
import {
  X,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  Tag
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCheckout: (discountAmount: number, promoCodeApplied: string) => void;
  onShowToast: (title: string, message: string, type: 'success' | 'info' | 'warning') => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
  onShowToast
}) => {
  if (!isOpen) return null;

  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [fixedDiscount, setFixedDiscount] = useState<number>(0);

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  // Free delivery threshold: 200 AED
  const FREE_DELIVERY_THRESHOLD = 200;
  const amountToFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);

  // Discount calculation
  const discountAmount = Math.round(
    discountPercent > 0
      ? (subtotal * discountPercent) / 100
      : fixedDiscount > 0
      ? Math.min(subtotal, fixedDiscount)
      : 0
  );

  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (!code) return;

    if (code === 'DUBAI10') {
      setAppliedPromo('DUBAI10');
      setDiscountPercent(10);
      setFixedDiscount(0);
      onShowToast('Coupon Applied', 'DUBAI10 applied: 10% discount has been deducted!', 'success');
      setPromoInput('');
    } else if (code === 'WELCOME50') {
      setAppliedPromo('WELCOME50');
      setDiscountPercent(0);
      setFixedDiscount(50);
      onShowToast('Coupon Applied', 'WELCOME50 applied: AED 50 discount deducted!', 'success');
      setPromoInput('');
    } else if (code === 'VBELEC') {
      setAppliedPromo('VBELEC');
      setDiscountPercent(5);
      setFixedDiscount(0);
      onShowToast('Coupon Applied', 'VBELEC applied: 5% discount deducted!', 'success');
      setPromoInput('');
    } else {
      onShowToast('Invalid Coupon', 'Code not recognized. Try "DUBAI10" or "WELCOME50".', 'warning');
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setDiscountPercent(0);
    setFixedDiscount(0);
  };

  const handleCheckoutClick = () => {
    if (cart.length === 0) return;
    onOpenCheckout(discountAmount, appliedPromo || '');
  };

  return (
    <div
      id="cart-drawer-overlay"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="cart-drawer-panel"
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Outfit'] font-bold text-base text-white">
                Your Shopping Cart
              </h3>
              <p className="text-[11px] text-slate-400">
                {cart.length} unique {cart.length === 1 ? 'device' : 'devices'} selected
              </p>
            </div>
          </div>
          <button
            id="close-cart-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="p-3.5 bg-sky-50/80 border-b border-sky-100 px-5">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className="text-slate-800 flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-sky-600" />
              {amountToFreeDelivery === 0 ? (
                <strong className="text-emerald-600">You unlocked FREE Same-Day Dubai Delivery!</strong>
              ) : (
                <span>
                  Add <strong className="text-sky-600">AED {amountToFreeDelivery}</strong> more for Free Delivery
                </span>
              )}
            </span>
            <span className="text-slate-500 font-mono text-[11px]">
              {Math.round(progressPercent)}%
            </span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-slate-100">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.product.id} className="py-4 flex gap-3.5 first:pt-0 last:pb-0">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-contain rounded-xl bg-slate-50 border border-slate-200/80 p-1 shrink-0"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-slate-400 hover:text-rose-500 p-1 transition-colors shrink-0"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {item.selectedColor && (
                      <span className="inline-block text-[10px] text-slate-500 font-medium mt-0.5">
                        Color: <span className="text-slate-800 font-semibold">{item.selectedColor}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 overflow-hidden">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="px-2 py-1 text-slate-600 hover:bg-slate-200 text-xs font-bold"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 py-1 text-xs font-bold text-slate-900 min-w-[24px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="px-2 py-1 text-slate-600 hover:bg-slate-200 text-xs font-bold"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-['Outfit'] font-extrabold text-sm text-slate-900">
                      AED {(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h4 className="font-['Outfit'] font-bold text-base text-slate-900">
                Your cart is empty
              </h4>
              <p className="text-xs text-slate-500 max-w-xs">
                Explore our catalog for the latest iPhones, MacBooks, PS5s, and tech accessories.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-sky-600 transition-colors"
              >
                Browse Electronics
              </button>
            </div>
          )}
        </div>

        {/* Cart Footer Calculation & Actions */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3.5">
            
            {/* Promo Code Input Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Promo code (e.g. DUBAI10)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="w-full text-xs bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-2 uppercase font-mono font-medium focus:outline-none focus:border-sky-500"
                />
                <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-sky-600 transition-colors whitespace-nowrap"
              >
                Apply
              </button>
            </form>

            {appliedPromo && (
              <div className="flex items-center justify-between text-xs font-semibold bg-emerald-50 text-emerald-800 p-2 rounded-lg border border-emerald-200">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Code <strong>{appliedPromo}</strong> applied!
                </span>
                <button
                  onClick={removePromo}
                  className="text-xs text-rose-500 hover:text-rose-700 underline font-normal"
                >
                  Remove
                </button>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-slate-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal ({cart.reduce((a, c) => a + c.quantity, 0)} items)</span>
                <span className="font-semibold text-slate-900">AED {subtotal.toLocaleString()}</span>
              </div>
              
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Special Discount</span>
                  <span>- AED {discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>UAE VAT (5% Included)</span>
                <span className="text-slate-500 font-mono">AED {Math.round(finalTotal * 0.05).toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Delivery</span>
                <span className="text-emerald-600 font-semibold">
                  {amountToFreeDelivery === 0 ? 'FREE Same-Day' : 'AED 20'}
                </span>
              </div>

              <div className="flex justify-between items-baseline pt-2 border-t border-slate-200 text-sm">
                <span className="font-bold text-slate-900">Total (AED)</span>
                <span className="font-['Outfit'] font-extrabold text-xl text-slate-950">
                  AED {finalTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              id="proceed-checkout-btn"
              onClick={handleCheckoutClick}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span>Official UAE Spec Guarantee • 14-Day Free Returns</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
