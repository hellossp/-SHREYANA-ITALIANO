'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Phone, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#120806]/95 backdrop-blur-md py-4 border-b border-[#D97736]/25 shadow-xl'
          : 'bg-gradient-to-b from-[#120806]/90 via-[#120806]/50 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Simple Brand Logo - No Tagline */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#D97736]/15 border border-[#D97736]/50 flex items-center justify-center text-[#FFAA2B] group-hover:border-[#F48D46] transition-colors">
            <span className="font-cinematic font-bold text-sm">S</span>
          </div>
          <span className="font-cinematic font-bold text-lg sm:text-xl tracking-wider text-white group-hover:text-[#F48D46] transition-colors">
            SHREYANA ITALIANO
          </span>
        </a>

        {/* Clean Nav Links - No Emojis */}
        <nav className="hidden md:flex items-center gap-8 font-cinematic text-xs tracking-widest text-[#F6EDE0]/80">
          <a href="#menu" className="hover:text-[#F48D46] transition-colors">
            Menu
          </a>
          <a href="#story" className="hover:text-[#F48D46] transition-colors">
            Story
          </a>
          <a href="#gallery" className="hover:text-[#F48D46] transition-colors">
            Gallery
          </a>
          <a href="#reviews" className="hover:text-[#F48D46] transition-colors">
            Reviews
          </a>
          <a href="#contact" className="hover:text-[#F48D46] transition-colors">
            Contact
          </a>
        </nav>

        {/* Simple Right Actions */}
        <div className="flex items-center gap-4">
          
          <a
            href="tel:+917735171654"
            className="hidden lg:flex items-center gap-2 text-xs font-cinematic text-[#F6EDE0]/70 hover:text-[#FFAA2B] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D97736]" />
            <span>+91 7735171654</span>
          </a>

          {/* Simple Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#D97736] hover:bg-[#F48D46] text-white font-cinematic text-xs font-bold tracking-wider transition-all shadow-md active:scale-95"
            aria-label="View Order Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Cart</span>
            {totalItemsCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded-full bg-[#120806] text-[#FFAA2B] text-[10px] font-bold">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F6EDE0] hover:text-[#F48D46] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#160B08] border-b border-[#D97736]/30 px-6 py-6 font-cinematic space-y-4 text-center tracking-widest text-[#F6EDE0] text-sm">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#F48D46]"
          >
            Menu
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#F48D46]"
          >
            Story
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#F48D46]"
          >
            Gallery
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#F48D46]"
          >
            Reviews
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#F48D46]"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-[#D97736]/20">
            <a
              href="tel:+917735171654"
              className="inline-flex items-center gap-2 text-xs text-[#FFAA2B]"
            >
              <Phone className="w-3.5 h-3.5" /> +91 7735171654
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
