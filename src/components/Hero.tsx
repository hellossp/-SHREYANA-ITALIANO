'use client';

import React from 'react';
import { Flame, ArrowRight, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { PizzaCanvas } from '@/components/PizzaCanvas';

export const Hero: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#120806] overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Simple, Bold Brand Headline & Info (7 Cols on LG) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C0D0A] border border-[#D97736]/30 text-[#FFAA2B] text-xs font-medium">
            <Flame className="w-3.5 h-3.5 text-[#D97736]" />
            <span>Neapolitan Cloud Kitchen • Berhampur</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-display font-bold text-4xl sm:text-6xl text-white leading-[1.12]">
              Shreyana Italiano
            </h1>
            <p className="text-xl sm:text-2xl text-[#E5C384] font-medium font-sans">
              Handcrafted Neapolitan Wood-Fired Pizzas & Gourmet Pastas
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#F6EDE0]/80 font-sans leading-relaxed max-w-xl">
            Savor authentic Italian craft prepared with 48-hour cold-fermented dough, 
            imported San Marzano tomatoes, and fresh Fior di Latte mozzarella—baked at 450°C. Available for takeaway.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#menu"
              className="px-6 py-3.5 rounded-xl bg-[#D97736] hover:bg-[#F48D46] text-white font-sans font-semibold text-sm tracking-wide shadow-md flex items-center gap-2 transition-all active:scale-98"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-[#1C0D0A] hover:bg-[#2B1611] text-[#FFAA2B] border border-[#D97736]/30 font-sans font-semibold text-sm tracking-wide flex items-center gap-2 transition-all"
            >
              <Flame className="w-4 h-4 text-[#D97736]" />
              <span>Order Takeaway</span>
            </button>
          </div>

          {/* Clean Rating Snippet */}
          <div className="pt-4 flex items-center gap-3 text-xs text-[#F6EDE0]/70 border-t border-[#D97736]/20">
            <div className="flex text-[#FFAA2B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FFAA2B]" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9★ Rated on Google</span>
            <span>•</span>
            <span>71+ Verified Customer Reviews in Berhampur</span>
          </div>

        </div>

        {/* Right Column: GSAP Interactive Frame Sequence Animation (5 Cols on LG) */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <PizzaCanvas />
        </div>

      </div>

    </section>
  );
};
