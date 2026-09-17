export interface MenuItem {
  id: string;
  name: string;
  italianTitle: string;
  category: 'pizzas' | 'pastas' | 'starters' | 'desserts' | 'beverages';
  price: number;
  description: string;
  ingredients: string[];
  isVeg: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  spicyLevel?: number; // 0 to 3
  image: string;
  options?: {
    name: string;
    extraPrice: number;
  }[];
}

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Masterpieces', icon: 'Sparkles' },
  { id: 'pizzas', name: 'Neapolitan Pizzas', icon: 'Pizza' },
  { id: 'pastas', name: 'Gourmet Pastas', icon: 'Utensils' },
  { id: 'starters', name: 'Starters & Garlic Crusts', icon: 'Flame' },
  { id: 'desserts', name: 'Sweet Creations', icon: 'Cake' },
  { id: 'beverages', name: 'Refreshments', icon: 'GlassWater' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Pizzas
  {
    id: 'pizza-margherita',
    name: 'Classic Neapolitan Margherita',
    italianTitle: 'Margherita Verace Napoletana',
    category: 'pizzas',
    price: 269,
    description: 'The golden standard of Naples. San Marzano tomatoes, fresh Fior di Latte mozzarella, extra virgin olive oil, and fresh basil on a 48-hour fermented leopard-spotted crust.',
    ingredients: ['San Marzano Tomato Sauce', 'Fior di Latte Mozzarella', 'Fresh Basil', 'EVOO', 'Sea Salt'],
    isVeg: true,
    isBestseller: true,
    isChefSpecial: true,
    spicyLevel: 0,
    image: '/images/hero_pizza.jpg',
    options: [
      { name: 'Extra Fior di Latte Mozzarella', extraPrice: 60 },
      { name: 'Truffle Oil Drizzle', extraPrice: 50 },
      { name: 'Garlic Butter Crust Dip', extraPrice: 40 },
    ],
  },
  {
    id: 'pizza-pepperoni',
    name: 'Gourmet Chicken Pepperoni',
    italianTitle: 'Diavola Speziata al Salame',
    category: 'pizzas',
    price: 399,
    description: 'Crispy caramelized chicken pepperoni slices, fiery chili flakes, smoked mozzarella, and hot honey drizzle on a light, airy Neapolitan crust.',
    ingredients: ['Smoked Mozzarella', 'Crispy Chicken Pepperoni', 'Crushed Chili', 'Hot Honey Drizzle', 'San Marzano Sauce'],
    isVeg: false,
    isBestseller: true,
    isChefSpecial: true,
    spicyLevel: 2,
    image: '/images/pepperoni_pizza.jpg',
    options: [
      { name: 'Double Pepperoni Load', extraPrice: 90 },
      { name: 'Hot Honey Drizzle Dip', extraPrice: 45 },
      { name: 'Jalapeño Crunch', extraPrice: 35 },
    ],
  },
  {
    id: 'pizza-chicken-tikka',
    name: 'Chicken Tikka Neapolitan',
    italianTitle: 'Pollo Tikka Fusione Napoletana',
    category: 'pizzas',
    price: 359,
    description: 'Smoky clay-oven chicken tikka marinated in aromatic spices, charred onions, capsicum, mint pesto swirl, and stringy Italian mozzarella.',
    ingredients: ['Clay-Oven Chicken Tikka', 'Italian Mozzarella', 'Red Onion Rings', 'Capsicum', 'Mint Pesto Drizzle'],
    isVeg: false,
    isBestseller: true,
    spicyLevel: 2,
    image: '/images/hero_pizza.jpg',
    options: [
      { name: 'Extra Smoky Chicken', extraPrice: 80 },
      { name: 'Extra Mint Pesto Swirl', extraPrice: 30 },
    ],
  },
  {
    id: 'pizza-paneer-tikka',
    name: 'Paneer Tikka Fusion',
    italianTitle: 'Paneer Speziato del Gusto',
    category: 'pizzas',
    price: 329,
    description: 'Char-broiled spiced cottage cheese cubes, charred red onions, crisp bell peppers, coriander pesto, and rich tomato sauce on wood-fired crust.',
    ingredients: ['Charred Paneer Tikka', 'San Marzano Tomato Base', 'Bell Peppers', 'Red Onion', 'Coriander Pesto'],
    isVeg: true,
    isBestseller: false,
    spicyLevel: 1,
    image: '/images/pepperoni_pizza.jpg',
    options: [
      { name: 'Extra Charred Paneer', extraPrice: 70 },
      { name: 'Cheese Burst Base', extraPrice: 80 },
    ],
  },
  {
    id: 'pizza-marinara',
    name: 'Marinara Rustica (Dairy-Free)',
    italianTitle: 'Marinara Tradizionale',
    category: 'pizzas',
    price: 229,
    description: 'Pure simplicity and intense aroma. San Marzano tomato sauce, sliced fresh garlic, wild mountain oregano, EVOO, and fresh basil.',
    ingredients: ['San Marzano Tomato', 'Thin Sliced Garlic', 'Wild Mountain Oregano', 'Extra Virgin Olive Oil', 'Basil'],
    isVeg: true,
    spicyLevel: 0,
    image: '/images/hero_pizza.jpg',
  },

  // Pastas
  {
    id: 'pasta-alfredo',
    name: 'Creamy Fettuccine Alfredo',
    italianTitle: 'Fettuccine al Burro e Parmigiano',
    category: 'pastas',
    price: 279,
    description: 'Handcrafted ribbon pasta tossed in rich heavy cream, French butter, 24-month aged Parmigiano Reggiano, and garlic sautéed wild mushrooms.',
    ingredients: ['Fettuccine Ribbon Pasta', 'Aged Parmigiano Reggiano', 'French Butter', 'Garlic Mushrooms', 'Cracked Black Pepper'],
    isVeg: true,
    isBestseller: true,
    isChefSpecial: true,
    spicyLevel: 0,
    image: '/images/pasta_alfredo.jpg',
    options: [
      { name: 'Add Grilled Chicken Strip', extraPrice: 75 },
      { name: 'Wood-Fired Garlic Toast (2 pcs)', extraPrice: 50 },
    ],
  },
  {
    id: 'pasta-arrabbiata',
    name: 'Spicy Penne All’Arrabbiata',
    italianTitle: 'Penne alla Arrabbiata',
    category: 'pastas',
    price: 249,
    description: 'Penne pasta simmered in a fiery garlic-rich tomato sauce infused with Calabrian chili oil, cherry tomatoes, and fresh parsley.',
    ingredients: ['Penne Rigate', 'San Marzano Tomato Sauce', 'Garlic', 'Calabrian Chili Flakes', 'Parsley', 'EVOO'],
    isVeg: true,
    spicyLevel: 3,
    image: '/images/pasta_alfredo.jpg',
    options: [
      { name: 'Add Burrata Cheese Ball', extraPrice: 110 },
      { name: 'Add Sliced Pepperoni', extraPrice: 80 },
    ],
  },

  // Starters
  {
    id: 'starter-garlic-crust',
    name: 'Wood-Fired Cheesy Garlic Crust',
    italianTitle: 'Pane all’Aglio e Mozzarella',
    category: 'starters',
    price: 169,
    description: 'Neapolitan dough brushed with roasted garlic herb butter, loaded with melted mozzarella, and baked until bubbling golden.',
    ingredients: ['48h Dough', 'Roasted Garlic Butter', 'Mozzarella Cheese', 'Oregano', 'Parsley'],
    isVeg: true,
    isBestseller: true,
    spicyLevel: 0,
    image: '/images/hero_pizza.jpg',
  },

  // Desserts
  {
    id: 'dessert-nutella-pizza',
    name: 'Signature Nutella & Strawberry Pizza',
    italianTitle: 'Pizza Dolce alla Nutella e Fragole',
    category: 'desserts',
    price: 289,
    description: 'A heavenly sweet masterpiece! Neapolitan wood-fired crust coated with velvety warm Nutella, fresh sliced strawberries, roasted hazelnut crunch, and powdered sugar.',
    ingredients: ['Wood-Fired Crust', 'Creamy Nutella', 'Fresh Strawberries', 'Toasted Hazelnut Crunch', 'Powdered Sugar'],
    isVeg: true,
    isBestseller: true,
    isChefSpecial: true,
    spicyLevel: 0,
    image: '/images/nutella_pizza.jpg',
  },

  // Beverages
  {
    id: 'bev-italian-lemonade',
    name: 'Sicilian Blood Orange Fizz',
    italianTitle: 'Limonata Frizzante alla Siciliana',
    category: 'beverages',
    price: 119,
    description: 'Sparkling artisanal citrus quencher infused with blood orange syrup, fresh crushed mint, and lemon zests.',
    ingredients: ['Sparkling Water', 'Blood Orange Concentrate', 'Fresh Mint', 'Lemon Twist'],
    isVeg: true,
    spicyLevel: 0,
    image: '/images/nutella_pizza.jpg',
  },
];
