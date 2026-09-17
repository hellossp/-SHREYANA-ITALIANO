'use client';

import React from 'react';
import { Flame, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#120806] border-t border-[#D97736]/25 text-[#F6EDE0]/75 pt-16 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#D97736]/20">
        
        {/* Col 1: Brand Info */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D97736]/15 border border-[#D97736]/40 flex items-center justify-center">
              <Flame className="w-4 h-4 text-[#FFAA2B]" />
            </div>
            <span className="font-sans font-bold text-xl text-white tracking-wider">
              SHREYANA ITALIANO
            </span>
          </div>
          <p className="text-xs text-[#F6EDE0]/70 font-sans max-w-md leading-relaxed">
            Shreyana Italiano, Berhampur’s finest Neapolitan pizza cloud kitchen, serves authentic Italian flavors in the heart of Odisha. Savor our mouthwatering wood-fired pizzas, gourmet pastas, and sweet treats.
          </p>
          <div className="pt-1 text-xs text-[#FFAA2B] font-medium">
            4.9★ Google Rated • 100% Neapolitan Style Wood-Fired Takeaway
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-3">
          <h3 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2 text-xs font-sans text-[#F6EDE0]/70">
            <li>
              <a href="#" className="hover:text-[#FFAA2B] transition-colors">Home</a>
            </li>
            <li>
              <a href="#menu" className="hover:text-[#FFAA2B] transition-colors">Menu & Pricing</a>
            </li>
            <li>
              <a href="#story" className="hover:text-[#FFAA2B] transition-colors">Our Secret 48h Dough</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#FFAA2B] transition-colors">Photo Gallery</a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-[#FFAA2B] transition-colors">Google Reviews (4.9★)</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#FFAA2B] transition-colors">Contact & Location</a>
            </li>
          </ul>
        </div>

        {/* Col 3: Address & Hours */}
        <div className="space-y-3">
          <h3 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
            Takeaway Location
          </h3>
          <p className="text-xs text-[#F6EDE0]/70 font-sans leading-relaxed">
            NEELKANTHA NAGAR Lane No 2,<br />
            Nilakantha Nagar, Gosani Nuagam,<br />
            Brahmapur, Odisha 760003
          </p>
          <div className="pt-1 text-xs font-sans space-y-1">
            <div className="text-white font-semibold">Hours: Mon - Sun (11:30 AM - 10 PM)</div>
            <a href="tel:+917735171654" className="text-[#FFAA2B] font-bold block hover:underline">
              +91 7735171654
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#F6EDE0]/60">
        <div>
          © {new Date().getFullYear()} Shreyana Italiano. All rights reserved. Neapolitan Culinary Magic in Berhampur.
        </div>
        <div className="flex items-center gap-1">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-[#C83E2B] fill-[#C83E2B]" />
          <span>for Italian food connoisseurs</span>
        </div>
      </div>
    </footer>
  );
};
