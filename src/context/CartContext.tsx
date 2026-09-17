'use client';

import React, { createContext, useContext, useState } from 'react';
import { MenuItem } from '@/data/menu';

export interface SelectedOption {
  name: string;
  extraPrice: number;
}

export interface CartItem {
  cartId: string;
  item: MenuItem;
  quantity: number;
  selectedOptions: SelectedOption[];
  totalItemPrice: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, selectedOptions?: SelectedOption[]) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  customerPhone: string;
  setCustomerPhone: (phone: string) => void;
  specialInstructions: string;
  setSpecialInstructions: (notes: string) => void;
  totalAmount: number;
  totalItemsCount: number;
  sendWhatsAppOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Calculate totals
  const totalAmount = cart.reduce((acc, cartItem) => acc + cartItem.totalItemPrice * cartItem.quantity, 0);
  const totalItemsCount = cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  const addToCart = (item: MenuItem, selectedOptions: SelectedOption[] = []) => {
    const optionsCost = selectedOptions.reduce((sum, opt) => sum + opt.extraPrice, 0);
    const unitPrice = item.price + optionsCost;
    const cartId = `${item.id}-${selectedOptions.map(o => o.name).sort().join('-')}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((ci) => ci.cartId === cartId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartId,
            item,
            quantity: 1,
            selectedOptions,
            totalItemPrice: unitPrice,
          },
        ];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
    } else {
      setCart((prev) =>
        prev.map((item) => (item.cartId === cartId ? { ...item, quantity } : item))
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let text = `🍕 *NEW TAKEAWAY ORDER - SHREYANA ITALIANO* 🇮🇹\n`;
    text += `====================================\n`;
    text += `*Order Type:* 📦 Takeaway / Self-Pickup\n`;
    if (customerName) text += `*Customer Name:* ${customerName}\n`;
    if (customerPhone) text += `*Phone:* ${customerPhone}\n`;
    if (specialInstructions) {
      text += `*Notes:* ${specialInstructions}\n`;
    }
    text += `====================================\n\n`;
    text += `*ITEMS ORDERED:*\n`;

    cart.forEach((ci) => {
      text += `• ${ci.quantity}x *${ci.item.name}* (₹${ci.item.price} each)\n`;
      if (ci.selectedOptions.length > 0) {
        ci.selectedOptions.forEach((opt) => {
          text += `    + ${opt.name} (+₹${opt.extraPrice})\n`;
        });
      }
      text += `   Subtotal: ₹${ci.totalItemPrice * ci.quantity}\n\n`;
    });

    text += `====================================\n`;
    text += `*GRAND TOTAL: ₹${totalAmount}*\n`;
    text += `====================================\n`;
    text += `_Sent via Shreyana Italiano Digital Order Express_`;

    const encodedMsg = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917735171654?text=${encodedMsg}`;
    
    // Dynamic import for confetti
    import('canvas-confetti').then((confettiModule) => {
      const confetti = confettiModule.default;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }).catch(() => {});

    window.open(whatsappUrl, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        customerName,
        setCustomerName,
        customerPhone,
        setCustomerPhone,
        specialInstructions,
        setSpecialInstructions,
        totalAmount,
        totalItemsCount,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
