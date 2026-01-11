
import React from 'react';
import Navbar from './components/Navbar';
import { MENU_ITEMS, TESTIMONIALS, CSR_TIERS, EVENTS } from './constants';
import { MenuItem, CSRTier, EventHighlight } from './types';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/lenoir-hero/1920/1080" 
            alt="Lenoir Dining Room" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 inline-block px-4 py-2 border border-lenoir-gold/50 rounded-full backdrop-blur-md">
            <span className="text-lenoir-gold text-xs uppercase tracking-[0.3em] font-semibold">
              Featured in MICHELIN Guide
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl text-white font-serif mb-6 leading-tight">
            Lenoir — Exceptional <br/> <span className="italic">Seasonal Dining</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            A farm-to-table culinary destination celebrating local Texas ingredients, bold flavor, and hospitality in a relaxed wine garden setting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-lenoir-gold text-lenoir-dark px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors w-full sm:w-auto">
              Reserve a Table
            </button>
            <button className="border border-white text-white px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-lenoir-dark transition-all w-full sm:w-auto">
              View Menu
            </button>
            <button className="text-white text-xs uppercase tracking-widest font-bold underline underline-offset-8 hover:text-lenoir-gold transition-colors py-4">
              Join Wine Club
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-lenoir-earth">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-lenoir-burgundy text-xs uppercase tracking-widest font-bold">The Story</span>
              <h2 className="text-5xl font-serif text-lenoir-dark leading-tight">
                About <span className="italic">Lenoir</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Lenoir is named after a hearty grape growing across the Texas Hill Country — a tribute to the land’s bounty. Since opening in 2012, chef-owners Todd Duplechan and Jessica Maher have crafted a seasonal, warm-weather cuisine inspired by local ingredients and global techniques.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                At Lenoir, food is thoughtfully prepared with spice, heat, and robust flavor and served alongside an extraordinary selection of wines from grower-producers worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <img src="https://picsum.photos/seed/todd/200/200" alt="Todd Duplechan" className="w-20 h-20 rounded-full mb-4 object-cover" />
                  <h4 className="font-serif text-xl mb-1">Todd Duplechan</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Chef-Owner</p>
                </div>
                <div>
                  <img src="https://picsum.photos/seed/jessica/200/200" alt="Jessica Maher" className="w-20 h-20 rounded-full mb-4 object-cover" />
                  <h4 className="font-serif text-xl mb-1">Jessica Maher</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Chef-Owner</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img src="https://picsum.photos/seed/lenoir-dining/800/1000" alt="Lenoir Interior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 overflow-hidden rounded-sm shadow-2xl hidden lg:block">
                <img src="https://picsum.photos/seed/seasonal-dish/500/500" alt="Seasonal Dish" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-lenoir-burgundy text-xs uppercase tracking-widest font-bold">A Taste of the Season</span>
            <h2 className="text-5xl font-serif text-lenoir-dark mt-4 mb-6">Our Menu</h2>
            <p className="max-w-2xl mx-auto text-gray-600 font-light">
              Showcasing innovative seasonal à la carte offerings focusing on locally sourced ingredients, thoughtful preparations, and bold flavors.
            </p>
          </div>

          <div className="space-y-24">
            {(['Starter', 'Main', 'Dessert'] as const).map(category => (
              <div key={category}>
                <h3 className="text-3xl font-serif text-lenoir-burgundy mb-10 border-b border-gray-100 pb-4 flex items-baseline gap-4">
                  {category}s
                  <span className="text-sm font-sans uppercase tracking-[0.2em] text-gray-400 font-medium">Seasonal Selection</span>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {MENU_ITEMS.filter(item => item.category === category).map((item, idx) => (
                    <div key={idx} className="group cursor-default">
                      <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-50">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <h4 className="font-serif text-2xl mb-2 group-hover:text-lenoir-burgundy transition-colors">{item.name}</h4>
                      <p className="text-gray-500 font-light text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <button className="bg-lenoir-dark text-white px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-lenoir-gold hover:text-lenoir-dark transition-all">
                Download Full Menu PDF
             </button>
          </div>
        </div>
      </section>

      {/* Wine Club CTA */}
      <section id="wine-club" className="relative py-32 bg-lenoir-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://picsum.photos/seed/wine-cellar/1920/800" alt="Wine Garden" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-lenoir-gold text-xs uppercase tracking-widest font-bold block mb-6">Experience at Home</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-8 italic">Lenoir Wine Club</h2>
          <p className="text-xl font-light leading-relaxed mb-12 text-gray-300">
            A monthly curated selection featuring seasonal sips, rare finds, and bottles with compelling stories. Support independent winemakers and local producers with every glass.
          </p>
          <button className="bg-lenoir-gold text-lenoir-dark px-12 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all">
            Join the Wine Club
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 bg-lenoir-earth">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-lenoir-burgundy text-xs uppercase tracking-widest font-bold">Gatherings</span>
              <h2 className="text-5xl font-serif text-lenoir-dark mt-4">Events & Special Nights</h2>
              <p className="mt-6 text-gray-600 font-light leading-relaxed">
                Lenoir hosts a vibrant calendar of seasonal wine dinners, community celebrations, and themed nights in our wine garden.
              </p>
            </div>
            <button className="text-lenoir-burgundy text-xs uppercase tracking-widest font-bold border-b border-lenoir-burgundy pb-2 hover:text-lenoir-gold hover:border-lenoir-gold transition-all">
              View All Events
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {EVENTS.map((event, idx) => (
              <div key={idx} className="bg-white group shadow-sm hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-3">{event.title}</h3>
                  <p className="text-gray-500 text-sm font-light mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <button className="text-xs uppercase tracking-widest font-bold text-lenoir-gold group-hover:underline underline-offset-4">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR & Community Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <span className="text-lenoir-burgundy text-xs uppercase tracking-widest font-bold">Community Support</span>
             <h2 className="text-5xl font-serif text-lenoir-dark mt-4">CSR Membership</h2>
             <p className="mt-6 text-gray-600 font-light max-w-2xl mx-auto">
               Become a part of the Lenoir community. Enjoy priority access, special event bookings, and unique rewards while supporting our mission.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CSR_TIERS.map((tier, idx) => (
              <div key={idx} className={`p-10 border transition-all ${idx === 1 ? 'border-lenoir-gold bg-lenoir-dark text-white scale-105 shadow-2xl' : 'border-gray-100 bg-gray-50 hover:bg-white'}`}>
                <h3 className={`text-2xl font-serif mb-2 ${idx === 1 ? 'text-lenoir-gold' : 'text-lenoir-dark'}`}>{tier.name}</h3>
                <div className="text-4xl font-serif mb-8">{tier.price}</div>
                <ul className="space-y-4 mb-10 text-sm font-light h-48 overflow-y-auto">
                  {tier.perks.map((perk, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="text-lenoir-gold">✦</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 text-xs uppercase tracking-widest font-bold transition-all ${idx === 1 ? 'bg-lenoir-gold text-lenoir-dark hover:bg-white' : 'bg-lenoir-dark text-white hover:bg-lenoir-gold'}`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Dining Section */}
      <section id="private-dining" className="py-24 bg-lenoir-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative z-10">
            <span className="text-lenoir-gold text-xs uppercase tracking-widest font-bold mb-6 block">Celebrations</span>
            <h2 className="text-5xl font-serif mb-8 italic">Host Your Event <br/> With Us</h2>
            <p className="text-lg font-light text-gray-300 leading-relaxed mb-8">
              Lenoir’s restaurant and wine garden are available for private gatherings, business dinners, celebrations, and wedding receptions. With a capacity of 16–65 guests, tailored menus, and beautiful ambiance, it’s the perfect place to host unforgettable events.
            </p>
            <button className="border border-lenoir-gold text-lenoir-gold px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-lenoir-gold hover:text-lenoir-dark transition-all">
              Inquire About Private Dining
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-square bg-lenoir-gold/20 p-4">
               <img src="https://picsum.photos/seed/private-event/800/800" alt="Private Dining" className="w-full h-full object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-lenoir-earth">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-lenoir-burgundy text-xs uppercase tracking-widest font-bold italic">Kind Words</span>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl text-lenoir-gold mb-6 font-serif">“</div>
                <p className="text-lg font-serif italic text-lenoir-dark mb-6 leading-relaxed">
                  {t.quote}
                </p>
                <div className="uppercase tracking-[0.2em] text-[10px] font-bold text-gray-500">
                  {t.author} — {t.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-lenoir-burgundy text-xs uppercase tracking-widest font-bold mb-6 block">Location & Hours</span>
              <h2 className="text-5xl font-serif text-lenoir-dark mb-10">Visit Us</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="text-lenoir-gold mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Address</h4>
                    <p className="text-lg text-gray-800">1807 S. First Street,<br/> Austin, Texas 78704</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="text-lenoir-gold mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Hours</h4>
                    <ul className="text-lg text-gray-800 space-y-1">
                      <li>Sunday – Thursday: 4:30 PM – 10:00 PM</li>
                      <li>Friday – Saturday: 4:30 PM – 10:30 PM</li>
                      <li className="text-lenoir-burgundy font-medium italic">Closed Tuesdays</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="text-lenoir-gold mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Contact</h4>
                    <p className="text-lg text-gray-800">(512) 215-9778</p>
                    <p className="text-gray-500 font-light underline">reservations@lenoirrestaurant.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <button className="bg-lenoir-dark text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-lenoir-gold hover:text-lenoir-dark transition-all">
                  Reserve Now
                </button>
                <button className="border border-gray-200 text-gray-600 px-8 py-4 text-xs uppercase tracking-widest font-bold hover:border-lenoir-gold hover:text-lenoir-gold transition-all">
                  Get Directions
                </button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-sm overflow-hidden h-[500px] shadow-inner flex items-center justify-center relative">
              <img src="https://picsum.photos/seed/austin-map/800/800" alt="Austin Map Placeholder" className="w-full h-full object-cover opacity-50 grayscale" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 backdrop-blur-sm p-6 text-center shadow-xl border border-lenoir-gold/20">
                    <span className="text-lenoir-burgundy text-xl font-serif italic mb-2 block">Our Garden Awaits</span>
                    <p className="text-xs uppercase tracking-widest text-gray-500">1807 S. First Street</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-lenoir-earth">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-lenoir-dark mb-4 italic">Stay In the Loop</h2>
          <p className="text-gray-600 font-light mb-10">Sign up for the latest news, seasonal menus, and upcoming events.</p>
          <form className="flex flex-col sm:flex-row gap-0 group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-grow px-6 py-4 bg-white border border-gray-200 focus:outline-none focus:border-lenoir-gold transition-all"
            />
            <button className="bg-lenoir-dark text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-lenoir-gold hover:text-lenoir-dark transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-lenoir-dark text-gray-400 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-serif text-lenoir-gold tracking-widest uppercase mb-6">Lenoir</h3>
              <p className="text-sm font-light leading-relaxed max-w-sm">
                A tribute to the land's bounty. Exceptional seasonal dining and curated wine experiences in the heart of Austin, Texas.
              </p>
              <div className="flex gap-6 mt-8">
                <a href="#" className="hover:text-lenoir-gold transition-colors">
                  <span className="text-xs uppercase tracking-widest font-bold">Instagram</span>
                </a>
                <a href="#" className="hover:text-lenoir-gold transition-colors">
                  <span className="text-xs uppercase tracking-widest font-bold">Facebook</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#wine-club" className="hover:text-white transition-colors">Wine Club</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#private-dining" className="hover:text-white transition-colors">Private Dining</a></li>
                <li><a href="#visit" className="hover:text-white transition-colors">CSR Membership</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-6">Contact</h4>
              <ul className="space-y-3 text-sm font-light">
                <li>(512) 215-9778</li>
                <li>reservations@lenoirrestaurant.com</li>
                <li className="text-gray-500 mt-6">1807 S. First Street<br/>Austin, TX 78704</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-medium">
            <p>&copy; 2024 Lenoir Restaurant. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
