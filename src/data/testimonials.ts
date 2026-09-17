export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  dishTried: string;
  source: 'Google' | 'Zomato';
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aakash Mohanty',
    location: 'Berhampur, Odisha',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Hands down the best Neapolitan pizza in Berhampur! The crust is so light, airy and leopard spotted just like in Italy. The Chicken Pepperoni with hot honey drizzle is pure perfection.',
    dishTried: 'Chicken Pepperoni Gourmet Pizza',
    source: 'Google',
  },
  {
    id: 't-2',
    name: 'Priyanka Dash',
    location: 'Nilakantha Nagar',
    rating: 5,
    date: '1 month ago',
    comment: 'The Nutella Dessert Pizza was mindblowing! Warm, soft, slathered with genuine Nutella and fresh strawberries. My family loved every slice. Fast WhatsApp ordering too!',
    dishTried: 'Signature Nutella & Strawberry Pizza',
    source: 'Google',
  },
  {
    id: 't-3',
    name: 'Rohan Pattnaik',
    location: 'Brahmapur',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Authentic 48-hour fermented dough makes a huge difference. You don’t feel heavy after eating. Shreyana Italiano brings real gourmet dining to Gosani Nuagam.',
    dishTried: 'Classic Neapolitan Margherita',
    source: 'Zomato',
  },
  {
    id: 't-4',
    name: 'Sneha Sahu',
    location: 'Berhampur Locality',
    rating: 5,
    date: '2 months ago',
    comment: 'Creamy Fettuccine Alfredo was super rich and delicious! Garlic crust was crispy on the outside and soft inside. Highly recommend ordering directly on WhatsApp.',
    dishTried: 'Creamy Fettuccine Alfredo',
    source: 'Google',
  },
];
