import React from 'react';
import {
  X,
  Package,
  Calendar,
  Truck,
  CreditCard,
  Building2,
  ExternalLink,
  ShoppingBag,
  Clock,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { UserOrder } from '../types';

interface OrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreShop?: () => void;
}

export const OrdersModal: React.FC<OrdersModalProps> = ({
  isOpen,
  onClose,
  onExploreShop
}) => {
  const { userProfile, orders } = useAuth();

  if (!isOpen) return null;

  return (
    <div
      id="orders-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="orders-modal-panel"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Outfit'] font-bold text-lg text-white">
                My Orders &amp; Warranties
              </h3>
              <p className="text-xs text-slate-400">
                Logged in as <span className="text-sky-300 font-semibold">{userProfile?.name}</span> ({userProfile?.email})
              </p>
            </div>
          </div>

          <button
            id="orders-modal-close-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Orders Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <div
                key={order.id || order.orderNumber}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 hover:border-sky-300 transition-colors shadow-sm"
              >
                {/* Order Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-slate-500 block text-[11px]">Order Reference</span>
                    <strong className="font-mono text-sm text-sky-700 font-bold">
                      {order.orderNumber}
                    </strong>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {order.status || 'Confirmed & Processing'}
                    </span>
                  </div>
                </div>

                {/* Items in this order */}
                <div className="space-y-3">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain rounded-xl bg-white border border-slate-200 p-1 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Qty: {item.quantity} {item.selectedColor ? `• Color: ${item.selectedColor}` : ''}
                        </p>
                      </div>
                      <span className="text-xs font-extrabold text-slate-900 font-['Outfit'] shrink-0">
                        AED {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Order Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 text-[11px] text-slate-600 bg-white/60 p-3 rounded-xl">
                  <div>
                    <span className="text-slate-400 block font-medium">Fulfillment</span>
                    <strong className="text-slate-800">
                      {order.deliveryMethod === 'courier'
                        ? `Express Courier (${order.emirate || 'Dubai'})`
                        : (order.pickupStore || 'Dubai Mall Flagship')}
                    </strong>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-medium">Payment</span>
                    <strong className="text-slate-800 capitalize">
                      {order.paymentMethod === 'card'
                        ? 'Credit / Debit Card'
                        : order.paymentMethod === 'tabby'
                        ? 'Tabby (4 Installments)'
                        : 'Cash on Delivery'}
                    </strong>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-medium">Total Paid</span>
                    <strong className="text-slate-900 font-extrabold font-['Outfit'] text-xs">
                      AED {order.total.toLocaleString()}
                    </strong>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-['Outfit'] font-bold text-base text-slate-900">
                  No orders placed yet
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                  Once you order flagship electronics, your orders, delivery status, and UAE warranty certificates will appear here.
                </p>
              </div>
              {onExploreShop && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onExploreShop();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs hover:from-sky-400 hover:to-blue-500 transition-all shadow-md"
                >
                  Start Shopping
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
          <p className="text-[11px] text-slate-500">
            Official 2-Year UAE Warranty registered automatically for all accounts.
          </p>
        </div>
      </div>
    </div>
  );
};
