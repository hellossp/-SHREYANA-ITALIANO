'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Maximize2, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'pizzas' | 'pastas' | 'desserts' | 'kitchen';
  src: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Wood-Fired Neapolitan Baking',
    category: 'kitchen',
    src: '/images/hero_pizza.jpg',
    caption: 'Baking at 450°C inside our traditional brick oven in Berhampur.',
  },
  {
    id: 'g-2',
    title: 'Gourmet Chicken Pepperoni',
    category: 'pizzas',
    src: '/images/pepperoni_pizza.jpg',
    caption: 'Crispy caramelized chicken pepperoni with hot honey drizzle.',
  },
  {
    id: 'g-3',
    title: 'Signature Nutella & Strawberry Pizza',
    category: 'desserts',
    src: '/images/nutella_pizza.jpg',
    caption: 'Decadent dessert pizza slathered with warm Nutella and fresh berries.',
  },
  {
    id: 'g-4',
    title: 'Creamy Fettuccine Alfredo',
    category: 'pastas',
    src: '/images/pasta_alfredo.jpg',
    caption: 'Handcrafted pasta tossed in aged Parmigiano Reggiano & wild mushrooms.',
  },
];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filtered = GALLERY_ITEMS.filter((item) =>
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#120806] relative font-sans">
      <div className="max-w-7xl mx-auto space-y-9">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C0D0A] border border-[#D97736]/30 text-[#FFAA2B] text-xs font-semibold">
            <Camera className="w-4 h-4 text-[#D97736]" />
            <span>Visual Culinary Showcase</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">
            Gallery of <span className="copper-gradient-text">Flavors</span>
          </h2>
          <p className="text-[#F6EDE0]/75 max-w-lg mx-auto text-sm font-sans">
            Take a visual tour inside Shreyana Italiano&apos;s kitchen. Real ingredients, real passion, zero shortcuts.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-2">
          {['all', 'pizzas', 'pastas', 'desserts', 'kitchen'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium capitalize transition-all ${
                activeFilter === cat
                  ? 'bg-[#D97736] text-white font-bold shadow-md border border-[#FFAA2B]/30'
                  : 'bg-[#1C0D0A] text-[#F6EDE0]/70 border border-[#D97736]/20 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Photos' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="relative h-72 rounded-3xl overflow-hidden cursor-pointer group border border-[#D97736]/25 shadow-xl"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120806] via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 space-y-0.5">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#FFAA2B]">
                  {item.category}
                </span>
                <h3 className="font-sans text-sm font-bold text-white group-hover:text-[#F48D46] transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 p-2 rounded-full bg-[#120806]/80 text-[#FFAA2B] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-[#1C0D0A] rounded-3xl overflow-hidden border border-[#D97736]">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-[#FFAA2B]"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-[450px] w-full">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-1 bg-[#1C0D0A]">
              <h3 className="font-display text-2xl font-bold text-white">{lightboxImage.title}</h3>
              <p className="text-sm text-[#F6EDE0]/80 font-sans">{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
