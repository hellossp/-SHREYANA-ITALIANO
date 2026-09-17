'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, Clock, Sparkles, Award, HeartHandshake } from 'lucide-react';

export const RatatouilleStory: React.FC = () => {
  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#160B08] relative overflow-hidden border-y border-[#D97736]/20 font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D97736]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFAA2B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Story Visual Showcase */}
        <div className="relative">
          
          {/* Main Story Image */}
          <div className="relative h-[460px] w-full rounded-3xl overflow-hidden border border-[#D97736]/30 shadow-2xl shadow-black/80">
            <Image
              src="/images/pepperoni_pizza.jpg"
              alt="Shreyana Italiano Neapolitan Pizza Crafting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160B08] via-transparent to-black/30" />
            
            {/* Floating Chef Quote Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 parchment-badge p-5 rounded-2xl backdrop-blur-md border border-[#FFAA2B]/30">
              <span className="font-handwriting text-2xl text-[#FFAA2B] block mb-1">
                &quot;Great cooking is not about perfection. It’s about soul.&quot;
              </span>
              <span className="text-xs font-sans text-white/80 block font-medium">
                — Shreyana Italiano Pizzaiolo
              </span>
            </div>
          </div>

          {/* Secondary Accent Floating Badge */}
          <div className="absolute -top-5 -right-5 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#120806] border border-[#D97736]/40 shadow-xl">
            <div className="w-9 h-9 rounded-full bg-[#D97736]/20 border border-[#D97736]/50 flex items-center justify-center">
              <Clock className="w-4 h-4 text-[#FFAA2B]" />
            </div>
            <div>
              <div className="font-sans font-bold text-xs text-white">48-Hour Dough</div>
              <div className="text-[10px] text-[#F6EDE0]/70">Slow cold fermentation</div>
            </div>
          </div>

        </div>

        {/* Right Side: Culinary Story Text */}
        <div className="space-y-5">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#120806] border border-[#D97736]/30 text-[#FFAA2B] text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#D97736]" />
            <span>Culinary Passion</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white leading-tight">
            The Alchemy of <br />
            <span className="copper-gradient-text">Italian Wood-Fired Craft</span>
          </h2>

          <p className="text-sm sm:text-base text-[#F6EDE0]/85 font-sans leading-relaxed">
            Inspired by the timeless culinary passion of Parisian bistro craft and Naples’ historic pizzaiolos, 
            <strong className="text-white"> Shreyana Italiano</strong> was born to bring true Neapolitan pizza perfection to Berhampur.
          </p>

          <p className="text-xs sm:text-sm text-[#F6EDE0]/75 font-sans leading-relaxed">
            We believe pizza is edible art. Our signature dough matures for 48 hours to create a crust that is light, bubbly, delightfully digestible, and char-kissed in our 450°C wood-fired oven.
          </p>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-[#D97736]/20">
            
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#FFAA2B]">
                <Flame className="w-4 h-4" />
                <span className="font-sans font-bold text-xs text-white">450°C Wood Fire</span>
              </div>
              <p className="text-[11px] text-[#F6EDE0]/65">Baked in 90 seconds flat for classic leopard spots.</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#FFAA2B]">
                <Award className="w-4 h-4" />
                <span className="font-sans font-bold text-xs text-white">Authentic Italian</span>
              </div>
              <p className="text-[11px] text-[#F6EDE0]/65">San Marzano tomatoes & pure Fior di Latte mozzarella.</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#FFAA2B]">
                <HeartHandshake className="w-4 h-4" />
                <span className="font-sans font-bold text-xs text-white">Crafted Daily</span>
              </div>
              <p className="text-[11px] text-[#F6EDE0]/65">No premixes, no artificial flavors, pure passion.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
