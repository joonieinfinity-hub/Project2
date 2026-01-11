
import { MenuItem, Testimonial, CSRTier, EventHighlight } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Fried Blue Corn & Pecan Hushpuppies',
    description: 'Sweet potato mole, crème fraîche',
    price: '$14',
    category: 'Starter',
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Crab Fingers',
    description: 'Curry leaf, leche de tigre, smoked chili oil',
    price: '$18',
    category: 'Starter',
    imageUrl: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Big Tree Oysters',
    description: 'Chili mignonette, pickled shallots',
    price: '$22',
    category: 'Starter',
    imageUrl: 'https://images.unsplash.com/photo-1599481238332-b01e87afccff?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Bulgogi Beef Tartare',
    description: 'Apple kimchi, potato chips',
    price: '$19',
    category: 'Starter',
    imageUrl: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Seared Whole Fish',
    description: 'Blue crab salad & Goan crab curry',
    price: '$42',
    category: 'Main',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Roasted Half Chicken',
    description: 'Chili lime butter & gremolata',
    price: '$34',
    category: 'Main',
    imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '10oz Seared Picanha Steak',
    description: 'Mojo de ajo & roasted potatoes',
    price: '$48',
    category: 'Main',
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Tangerine Almond Cake',
    description: 'Lightly citrus-scented almond sponge',
    price: '$12',
    category: 'Dessert',
    imageUrl: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Fried Apple Hand Pie',
    description: 'Warm, spiced apple filling with a crisp crust',
    price: '$11',
    category: 'Dessert',
    imageUrl: 'https://images.unsplash.com/photo-1535927082727-1b28b99aae7d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Caramelized Banana Pudding',
    description: 'A modern twist on a classic Southern favorite',
    price: '$12',
    category: 'Dessert',
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Como La Flor',
    description: 'Hibiscus-infused gin, lavender, lemon, sparkling rose',
    price: '$16',
    category: 'Drink',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Smoking Gun',
    description: 'Mezcal, charred grapefruit, black salt, agave',
    price: '$17',
    category: 'Drink',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "One of the most creative and warm dining experiences in Austin. The wine garden is pure magic.",
    author: "Elena Rodriguez",
    source: "Google Review"
  },
  {
    quote: "A masterclass in seasonal Texas ingredients. Every dish tells a story of the land.",
    author: "Mark Thompson",
    source: "Food Critic"
  },
  {
    quote: "Exceptional wine list and the service is as vibrant as the flavors on the plate.",
    author: "Sarah Jenkins",
    source: "Resy Guest"
  }
];

export const CSR_TIERS: CSRTier[] = [
  {
    name: "Traditional",
    price: "$1,000",
    perks: ["$1,200 House Credit", "Priority Bookings", "Exclusive Newsletter Access"],
    cta: "Become a Member"
  },
  {
    name: "Second Tier",
    price: "$2,500",
    perks: ["$3,000 House Credit", "Professional Knife Sharpenings", "Seasonal Gift Basket", "Early Access to Events"],
    cta: "Join Second Tier"
  },
  {
    name: "Third Tier",
    price: "$5,000",
    perks: ["Private 5-Course Dinner for 8", "$5,500 House Credit", "Direct Concierge Line", "Founder's Circle Perks"],
    cta: "Elite Membership"
  }
];

export const EVENTS: EventHighlight[] = [
  {
    title: "Robert Sinskey Wine Dinner",
    description: "An evening of Napa Valley elegance paired with seasonal Texas fare.",
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Beefsteak Dinner",
    description: "A traditional communal feast celebrating prime cuts and conviviality.",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Texas Table: Feast for a Cause",
    description: "A charity event supporting local agricultural communities.",
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
  }
];
