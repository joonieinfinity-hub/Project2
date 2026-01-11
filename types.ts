
export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  category: 'Starter' | 'Main' | 'Dessert' | 'Drink';
  imageUrl?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  source: string;
}

export interface CSRTier {
  name: string;
  price: string;
  perks: string[];
  cta: string;
}

export interface EventHighlight {
  title: string;
  date?: string;
  description: string;
  imageUrl?: string;
}
