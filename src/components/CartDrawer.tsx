'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Send, 
  ShoppingBag, 
  Store, 
  User, 
  Phone, 
  FileText
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    specialInstructions,
    setSpecialInstructions,
    totalAmount,
    totalItemsCount,
    sendWhatsAppOrder,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6">
        <div className="w-screen max-w-md bg-[#160B08] border-l border-[#D97736]/30 text-[#F6EDE0] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-[#D97736]/20 flex items-center justify-between bg-[#1C0D0A]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D97736]/15 border border-[#D97736]/40 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-[#FFAA2B]" />
              </div>
              <div>
                <h2 className="font-sans font-bold text-base text-white">Your Order</h2>
                <p className="text-xs text-[#FFAA2B] font-sans">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#F6EDE0]/60 hover:text-white rounded-full bg-[#120806] hover:bg-[#D97736]/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1C0D0A] border border-[#D97736]/20 flex items-center justify-center mx-auto text-[#D97736]">
                  <ShoppingBag className="w-8 h-8 opacity-50" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-sans text-base font-bold text-white">Your Basket is Empty</h3>
                  <p className="text-xs text-[#F6EDE0]/60 max-w-xs mx-auto">
                    Select your favorite wood-fired pizzas and gourmet pastas to build your takeaway order.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#D97736] text-white font-sans text-xs font-semibold hover:bg-[#F48D46] transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Order Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#FFAA2B] uppercase tracking-wide">
                      Selected Items
                    </span>
                    <button
                      onClick={clearCart}
                      className="text-xs text-[#C83E2B] hover:underline"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="space-y-3">
                    {cart.map((ci) => (
                      <div
                        key={ci.cartId}
                        className="p-3.5 rounded-2xl bg-[#1C0D0A] border border-[#D97736]/20 flex gap-3 items-center justify-between"
                      >
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#D97736]/25">
                          <Image
                            src={ci.item.image}
                            alt={ci.item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 space-y-0.5 min-w-0">
                          <h4 className="font-sans font-semibold text-xs text-white truncate">
                            {ci.item.name}
                          </h4>
                          <div className="text-xs text-[#FFAA2B] font-bold">
                            ₹{ci.totalItemPrice}
                          </div>
                          {ci.selectedOptions.length > 0 && (
                            <div className="text-[11px] text-[#F6EDE0]/50 space-y-0.5">
                              {ci.selectedOptions.map((o, idx) => (
                                <div key={idx}>+ {o.name} (+₹{o.extraPrice})</div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-[#120806] px-2 py-1 rounded-lg border border-[#D97736]/20">
                          <button
                            onClick={() => updateQuantity(ci.cartId, ci.quantity - 1)}
                            className="p-0.5 text-[#F6EDE0]/60 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-bold text-xs text-white px-1">{ci.quantity}</span>
                          <button
                            onClick={() => updateQuantity(ci.cartId, ci.quantity + 1)}
                            className="p-0.5 text-[#F6EDE0]/60 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(ci.cartId)}
                          className="text-[#C83E2B]/70 hover:text-[#C83E2B] p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Takeaway Order Mode Badge */}
                <div className="p-3.5 rounded-2xl bg-[#1C0D0A] border border-[#D97736]/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5 text-[#FFAA2B]">
                    <Store className="w-4 h-4 text-[#D97736]" />
                    <span className="font-semibold text-white">Takeaway / Self-Pickup</span>
                  </div>
                  <span className="text-[11px] text-[#549667] font-semibold bg-[#549667]/15 px-2.5 py-1 rounded-full border border-[#549667]/30">
                    Ready in 20 mins
                  </span>
                </div>

                {/* Customer Details Form */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold text-[#FFAA2B] uppercase tracking-wide block">
                    Contact Information
                  </span>
                  
                  <div className="space-y-2.5">
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#F6EDE0]/40" />
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-[#120806] border border-[#D97736]/25 rounded-xl text-xs text-white focus:outline-none focus:border-[#F48D46]"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#F6EDE0]/40" />
                      <input
                        type="tel"
                        placeholder="Phone Number (+91)"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-[#120806] border border-[#D97736]/25 rounded-xl text-xs text-white focus:outline-none focus:border-[#F48D46]"
                      />
                    </div>

                    <div className="relative">
                      <FileText className="w-4 h-4 absolute left-3 top-3 text-[#F6EDE0]/40" />
                      <textarea
                        placeholder="Special instructions or notes for takeaway..."
                        value={specialInstructions}
                        rows={2}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-[#120806] border border-[#D97736]/25 rounded-xl text-xs text-white focus:outline-none focus:border-[#F48D46] resize-none"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#D97736]/20 bg-[#1C0D0A] space-y-3.5">
              <div className="space-y-1 text-xs text-[#F6EDE0]/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className="flex justify-between font-bold text-base text-white pt-2 border-t border-[#D97736]/15">
                  <span>Total Amount</span>
                  <span className="text-[#FFAA2B]">₹{totalAmount}</span>
                </div>
              </div>

              <button
                onClick={sendWhatsAppOrder}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:brightness-110 text-white font-sans font-bold text-xs tracking-wider shadow-lg flex items-center justify-center gap-2.5 transition-all active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>SEND TAKEAWAY ORDER ON WHATSAPP</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
