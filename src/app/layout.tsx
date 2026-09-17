import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'Shreyana Italiano | Authentic Neapolitan Pizza & Gourmet Cloud Kitchen in Berhampur',
  description: 'Shreyana Italiano, Berhampur’s finest Neapolitan pizza restaurant, serves authentic Italian flavors in the heart of Odisha. Handcrafted 48-hour fermented dough, imported San Marzano tomatoes, & fresh mozzarella. Order online via WhatsApp!',
  keywords: [
    'Shreyana Italiano',
    'Pizza Berhampur',
    'Neapolitan Pizza Brahmapur',
    'Italian Cloud Kitchen Odisha',
    'Best Pizza in Berhampur',
    'Pepperoni Pizza Berhampur',
    'Nutella Pizza Brahmapur',
    'Zomato Shreyana Italiano'
  ],
  authors: [{ name: 'Shreyana Italiano' }],
  openGraph: {
    title: 'Shreyana Italiano | Neapolitan Wood-Fired Pizza Cloud Kitchen',
    description: 'Authentic Neapolitan Pizzas & Gourmet Pastas crafted with passion in Berhampur, Odisha. 4.9★ Google Rated.',
    url: 'https://shreyana-italiano.vercel.app',
    siteName: 'Shreyana Italiano',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyana Italiano | Neapolitan Pizza & Gourmet Kitchen',
    description: 'Savor Neapolitan-style wood-fired pizzas in Berhampur. Direct WhatsApp Ordering.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Shreyana Italiano',
    image: 'https://shreyana-italiano.vercel.app/images/hero_pizza.jpg',
    telephone: '+917735171654',
    url: 'https://shreyana-italiano.vercel.app',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'NEELKANTHA NAGAR Lane No 2, Nilakantha Nagar, Gosani Nuagam',
      addressLocality: 'Brahmapur',
      addressRegion: 'Odisha',
      postalCode: '760003',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.315,
      longitude: 84.794,
    },
    servesCuisine: ['Italian', 'Pizza', 'Neapolitan Pizza', 'Pasta', 'Desserts'],
    priceRange: '₹200 - ₹500',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '71',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:30',
        closes: '22:00',
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#120806] text-[#F6EDE0] min-h-screen selection:bg-[#D97736] selection:text-white">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
