'use client';

import React from 'react';
import { MapPin, Phone, Clock, Instagram, Send, Navigation } from 'lucide-react';

export const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#120806] relative font-sans">
      <div className="max-w-7xl mx-auto space-y-11">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C0D0A] border border-[#D97736]/30 text-[#FFAA2B] text-xs font-semibold">
            <MapPin className="w-4 h-4 text-[#D97736]" />
            <span>Visit Us & Takeaway</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">
            Find Us in <span className="copper-gradient-text">Berhampur</span>
          </h2>
          <p className="text-[#F6EDE0]/75 max-w-lg mx-auto text-sm font-sans">
            Located in Nilakantha Nagar, Gosani Nuagam. Drop by for fresh takeaway or place your order via WhatsApp.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Card */}
            <div className="ratatouille-card p-6 rounded-3xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#D97736]/15 border border-[#D97736]/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FFAA2B]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-base text-white">Cloud Kitchen Address</h3>
                  <p className="text-xs text-[#F6EDE0]/80 font-sans leading-relaxed">
                    Shreyana Italiano<br />
                    NEELKANTHA NAGAR Lane No 2, Nilakantha Nagar, Gosani Nuagam,<br />
                    Brahmapur, Odisha 760003
                  </p>
                  <a
                    href="https://maps.google.com/?q=Shreyana+Italiano+Berhampur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#FFAA2B] font-semibold hover:underline pt-2"
                  >
                    <span>Directions on Google Maps</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours & Phone Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="ratatouille-card p-5 rounded-3xl space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#549667]/15 border border-[#549667]/40 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#549667]" />
                </div>
                <h4 className="font-sans font-bold text-sm text-white">Takeaway Hours</h4>
                <p className="text-xs text-[#F6EDE0]/75 font-sans">
                  Monday – Sunday<br />
                  <strong className="text-white">11:30 AM – 10:00 PM</strong>
                </p>
              </div>

              <div className="ratatouille-card p-5 rounded-3xl space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#D97736]/15 border border-[#D97736]/40 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#FFAA2B]" />
                </div>
                <h4 className="font-sans font-bold text-sm text-white">Direct Phone</h4>
                <a
                  href="tel:+917735171654"
                  className="text-xs text-[#FFAA2B] font-bold block hover:underline"
                >
                  +91 7735171654
                </a>
                <span className="text-[10px] text-[#F6EDE0]/60 block font-sans">Call for takeaway orders</span>
              </div>

            </div>

            {/* Social Redirections */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/917735171654?text=Hi%20Shreyana%20Italiano,%20I%20want%20to%20place%20a%20takeaway%20order!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 hover:bg-[#25D366]/25 text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Takeaway</span>
              </a>

              <a
                href="https://instagram.com/shreyanaitaliano"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-[#E1306C]/15 border border-[#E1306C]/40 hover:bg-[#E1306C]/25 text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>@shreyanaitaliano</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 h-[400px] rounded-3xl overflow-hidden border border-[#D97736]/30 shadow-2xl relative">
            <iframe
              title="Shreyana Italiano Berhampur Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.495123456789!2d84.794!3d19.315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzU0LjAiTiA4NMKwNDcnMzguNCJF!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) invert(0.9) hue-rotate(180deg)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-[#120806]/90 border border-[#D97736]/40 p-3 rounded-2xl text-xs backdrop-blur-md font-sans">
              <span className="font-bold text-white block">📍 Shreyana Italiano</span>
              <span className="text-[#F6EDE0]/70 text-[11px]">Nilakantha Nagar, Berhampur</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
