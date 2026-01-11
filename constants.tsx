
import { MenuItem, Testimonial, CSRTier, EventHighlight } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Fried Blue Corn & Pecan Hushpuppies',
    description: 'Sweet potato mole, crème fraîche',
    category: 'Starter',
    imageUrl: 'https://picsum.photos/seed/hushpuppies/600/400'
  },
  {
    name: 'Crab Fingers',
    description: 'Curry leaf, leche de tigre, smoked chili oil',
    category: 'Starter',
    imageUrl: 'https://picsum.photos/seed/crab/600/400'
  },
  {
    name: 'Big Tree Oysters',
    description: 'Chili mignonette, pickled shallots',
    category: 'Starter',
    imageUrl: 'https://picsum.photos/seed/oysters/600/400'
  },
  {
    name: 'Bulgogi Beef Tartare',
    description: 'Apple kimchi, potato chips',
    category: 'Starter',
    imageUrl: 'https://picsum.photos/seed/tartare/600/400'
  },
  {
    name: 'Seared Whole Fish',
    description: 'Blue crab salad & Goan crab curry',
    category: 'Main',
    imageUrl: 'https://picsum.photos/seed/fish/600/400'
  },
  {
    name: 'Roasted Half Chicken',
    description: 'Chili lime butter & gremolata',
    category: 'Main',
    imageUrl: 'https://picsum.photos/seed/chicken/600/400'
  },
  {
    name: '10oz Seared Picanha Steak',
    description: 'Mojo de ajo & roasted potatoes',
    category: 'Main',
    imageUrl: 'https://picsum.photos/seed/steak/600/400'
  },
  {
    name: 'Tangerine Almond Cake',
    description: 'Lightly citrus-scented almond sponge',
    category: 'Dessert',
    imageUrl: 'https://picsum.photos/seed/cake/600/400'
  },
  {
    name: 'Fried Apple Hand Pie',
    description: 'Warm, spiced apple filling with a crisp crust',
    category: 'Dessert',
    imageUrl: 'https://picsum.photos/seed/pie/600/400'
  },
  {
    name: 'Caramelized Banana Pudding',
    description: 'A modern twist on a classic Southern favorite',
    category: 'Dessert',
    imageUrl: 'https://picsum.photos/seed/pudding/600/400'
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
    imageUrl: "https://picsum.photos/seed/event1/800/600"
  },
  {
    title: "Beefsteak Dinner",
    description: "A traditional communal feast celebrating prime cuts and conviviality.",
    imageUrl: "https://picsum.photos/seed/event2/800/600"
  },
  {
    title: "Texas Table: Feast for a Cause",
    description: "A charity event supporting local agricultural communities.",
    imageUrl: "https://picsum.photos/seed/event3/800/600"
  }
];
