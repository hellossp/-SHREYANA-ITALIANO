'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/testimonials';
import { Star, MessageSquare, ExternalLink, ShieldCheck, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#160B08] relative border-t border-[#D97736]/20 font-sans">
      <div className="max-w-7xl mx-auto space-y-11">
        
        {/* Section Header & Metrics */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#120806] border border-[#D97736]/30 text-[#FFAA2B] text-xs font-semibold">
            <MessageSquare className="w-4 h-4 text-[#D97736]" />
            <span>Community Feedback</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">
            Rated <span className="copper-gradient-text">4.9 Stars</span> in Berhampur
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-1">
            <div className="flex items-center gap-2 bg-[#120806] px-4 py-2 rounded-2xl border border-[#FFAA2B]/30">
              <span className="font-bold text-base text-white">4.9</span>
              <div className="flex text-[#FFAA2B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFAA2B]" />
                ))}
              </div>
              <span className="text-xs text-[#F6EDE0]/70 ml-1">Google (71+ Reviews)</span>
            </div>

            <div className="flex items-center gap-2 bg-[#120806] px-4 py-2 rounded-2xl border border-[#C83E2B]/30">
              <span className="font-bold text-base text-white">4.4</span>
              <div className="flex text-[#FFAA2B]">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFAA2B]" />
                ))}
              </div>
              <span className="text-xs text-[#F6EDE0]/70 ml-1">Zomato (97 Ratings)</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="ratatouille-card p-6 rounded-3xl space-y-4 relative flex flex-col justify-between"
            >
              <Quote className="w-9 h-9 text-[#D97736]/15 absolute top-4 right-4" />

              <div className="space-y-3">
                {/* Rating & Source Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#FFAA2B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFAA2B]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#120806] border border-[#D97736]/25 text-[#FFAA2B]">
                    Verified {t.source} Review
                  </span>
                </div>

                <p className="text-sm text-[#F6EDE0]/90 italic font-sans leading-relaxed">
                  &quot;{t.comment}&quot;
                </p>
              </div>

              <div className="pt-3 border-t border-[#D97736]/20 flex items-center justify-between">
                <div>
                  <div className="font-sans font-bold text-sm text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#549667]" />
                  </div>
                  <div className="text-[11px] text-[#F6EDE0]/60 font-sans">{t.location} • {t.date}</div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-[#FFAA2B] font-handwriting block">
                    Favorite Dish:
                  </span>
                  <span className="text-xs text-white/80 font-semibold">{t.dishTried}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="text-center pt-2">
          <a
            href="https://maps.google.com/?q=Shreyana+Italiano+Berhampur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#120806] border border-[#D97736]/50 hover:border-[#FFAA2B] text-[#FFAA2B] font-sans text-xs font-semibold transition-all"
          >
            <span>Write a Google Review</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
