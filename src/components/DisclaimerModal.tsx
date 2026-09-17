'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

export const DisclaimerModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on page load after a brief delay
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('disclaimer_dismissed');
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('disclaimer_dismissed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-sans animate-fade-in">
      <div className="relative w-full max-w-md bg-[#160B08] border border-[#D97736]/40 rounded-3xl p-6 sm:p-7 shadow-2xl text-center space-y-5">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[#F6EDE0]/60 hover:text-white rounded-full bg-[#120806] hover:bg-[#D97736]/20 transition-colors"
          aria-label="Close Notice"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="w-12 h-12 rounded-2xl bg-[#D97736]/15 border border-[#D97736]/40 flex items-center justify-center mx-auto text-[#FFAA2B]">
          <Sparkles className="w-6 h-6 text-[#D97736]" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-[#FFAA2B] uppercase tracking-wider block">
            Concept Preview Notice
          </span>
          <h3 className="font-display font-bold text-xl text-white">
            Demonstration Website
          </h3>
          <p className="text-xs sm:text-sm text-[#F6EDE0]/80 font-sans leading-relaxed">
            This is a dummy concept website developed for client <strong className="text-white">Shreyana Italiano</strong> by <strong className="text-[#F48D46]">Instant Pages</strong>.
          </p>
        </div>

        {/* Footer Action Button */}
        <div className="pt-2">
          <button
            onClick={handleClose}
            className="w-full py-3 rounded-xl bg-[#D97736] hover:bg-[#F48D46] text-white font-sans font-bold text-xs tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all active:scale-98"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>EXPLORE PREVIEW WEBSITE</span>
          </button>
        </div>

      </div>
    </div>
  );
};
