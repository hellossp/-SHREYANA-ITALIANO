import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MenuSection } from '@/components/MenuSection';
import { RatatouilleStory } from '@/components/RatatouilleStory';
import { GallerySection } from '@/components/GallerySection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { LocationContact } from '@/components/LocationContact';
import { CartDrawer } from '@/components/CartDrawer';
import { Footer } from '@/components/Footer';
import { DisclaimerModal } from '@/components/DisclaimerModal';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#120806] text-[#F6EDE0] relative overflow-hidden">
      <DisclaimerModal />
      <Navbar />
      <Hero />
      <MenuSection />
      <RatatouilleStory />
      <GallerySection />
      <ReviewsSection />
      <LocationContact />
      <Footer />
      <CartDrawer />
    </main>
  );
}
