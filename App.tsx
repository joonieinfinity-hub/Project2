
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { MENU_ITEMS, TESTIMONIALS, CSR_TIERS, EVENTS } from './constants';
import { MenuItem, CSRTier, EventHighlight } from './types';

const App: React.FC = () => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const galleryImages = [
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1550966842-28a1a2ca4a5c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1534422298391-e4f8c170db0f?auto=format&fit=crop&w=1200&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen text-lenoir-dark selection:bg-lenoir-gold selection:text-lenoir-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80" 
            alt="Lenoir Wine Garden" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-3 px-5 py-2 border border-white/20 rounded-full backdrop-blur-md bg-white/5">
            <span className="w-2 h-2 rounded-full bg-lenoir-gold animate-pulse"></span>
            <span className="text-white text-[10px] uppercase tracking-[0.4em] font-semibold">
              Featured in MICHELIN Guide
            </span>
          </div>
          <h1 className="text-5xl md:text-[7rem] text-white font-serif mb-8 leading-[1.1] drop-shadow-2xl">
            Exceptional <span className="italic">Seasonal</span> <br className="hidden md:block"/> Dining & Curated Wine
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light mb-12 max-w-3xl mx-auto leading-relaxed font-serif italic">
            Celebrating local Texas ingredients, bold flavor, and hospitality in Austin's most intimate wine garden setting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-lenoir-gold text-lenoir-dark px-12 py-5 text-xs uppercase tracking-[0.2em] font-black hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl w-full sm:w-auto">
              Reserve a Table
            </button>
            <button className="backdrop-blur-md border border-white/40 text-white px-12 py-5 text-xs uppercase tracking-[0.2em] font-black hover:bg-white hover:text-lenoir-dark transition-all transform hover:-translate-y-1 w-full sm:w-auto">
              View Menu
            </button>
            <button className="text-white text-xs uppercase tracking-[0.3em] font-bold border-b-2 border-lenoir-gold/50 hover:border-lenoir-gold transition-all py-2 mt-4 sm:mt-0">
              Join the Wine Club
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-lenoir-earth">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <header>
                <span className="text-lenoir-burgundy text-xs uppercase tracking-[0.3em] font-black mb-4 block">The Land's Bounty</span>
                <h2 className="text-6xl font-serif text-lenoir-dark leading-tight">
                  Named for a <span className="italic">Hearty Grape</span>
                </h2>
              </header>
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed font-light font-serif">
                <p>
                  Lenoir is a tribute to the Texas Hill Country — a resilient grape that thrives in our local terroir. Since 2012, chef-owners Todd Duplechan and Jessica Maher have crafted a seasonal, warm-weather cuisine that bridges global techniques with the robust soul of Texas.
                </p>
                <p>
                  Our food is thoughtfully prepared with spice, heat, and bold acidity, designed to pair perfectly with an extraordinary selection of wines from independent grower-producers worldwide.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-12 pt-10 border-t border-lenoir-gold/20">
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-full w-24 h-24 mb-6 ring-4 ring-white shadow-lg transition-transform group-hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1583394838336-acd977730f90?auto=format&fit=crop&w=400&q=80" alt="Todd Duplechan" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-serif text-2xl mb-1">Todd Duplechan</h4>
                  <p className="text-[10px] text-lenoir-burgundy uppercase tracking-widest font-bold">Chef-Owner</p>
                </div>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-full w-24 h-24 mb-6 ring-4 ring-white shadow-lg transition-transform group-hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1595273670150-db0a3d39074c?auto=format&fit=crop&w=400&q=80" alt="Jessica Maher" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-serif text-2xl mb-1">Jessica Maher</h4>
                  <p className="text-[10px] text-lenoir-burgundy uppercase tracking-widest font-bold">Chef-Owner</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl relative">
                {galleryImages.map((img, i) => (
                  <img 
                    key={i}
                    src={img} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === activeGalleryIndex ? 'opacity-100' : 'opacity-0'}`}
                    alt="Lenoir Gallery"
                  />
                ))}
                <div className="absolute bottom-8 right-8 flex gap-2">
                  {galleryImages.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full border border-white transition-all ${i === activeGalleryIndex ? 'bg-white w-6' : 'bg-transparent opacity-50'}`} />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-12 -left-12 w-72 h-72 hidden xl:block animate-float">
                <div className="w-full h-full p-3 bg-white shadow-2xl rounded-sm rotate-3 transform hover:rotate-0 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80" alt="Wine Pour" className="w-full h-full object-cover rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-lenoir-burgundy text-xs uppercase tracking-[0.4em] font-black">Current Offerings</span>
            <h2 className="text-6xl font-serif text-lenoir-dark mt-6 mb-8">Our <span className="italic">Menu</span></h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed italic font-serif">
              A rotating, farm-to-table à la carte selection celebrating the vibrant flavors of the warm-weather seasons.
            </p>
          </div>

          <div className="space-y-32">
            {(['Starter', 'Main', 'Dessert', 'Drink'] as const).map(category => (
              <div key={category}>
                <div className="flex items-center gap-6 mb-12">
                  <h3 className="text-4xl font-serif text-lenoir-burgundy flex-shrink-0">
                    {category === 'Drink' ? 'Signature Cocktails' : `${category}s`}
                  </h3>
                  <div className="h-px bg-lenoir-gold/20 flex-grow"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                  {MENU_ITEMS.filter(item => item.category === category).map((item, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="aspect-square overflow-hidden mb-8 bg-gray-50 rounded-sm shadow-sm">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name} 
                          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                        />
                      </div>
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-serif text-2xl group-hover:text-lenoir-gold transition-colors leading-tight">{item.name}</h4>
                        <span className="font-serif text-xl text-lenoir-burgundy italic">{item.price}</span>
                      </div>
                      <p className="text-gray-500 font-light text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center">
             <button className="inline-flex items-center gap-4 bg-lenoir-dark text-white px-12 py-5 text-xs uppercase tracking-[0.3em] font-black hover:bg-lenoir-gold hover:text-lenoir-dark transition-all transform hover:-translate-y-1 shadow-2xl">
                <span>Download Full Menu PDF</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
             </button>
             <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-widest">Extensive wine list available in-house</p>
          </div>
        </div>
      </section>

      {/* Wine Club CTA */}
      <section id="wine-club" className="relative py-40 bg-lenoir-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?auto=format&fit=crop&w=1920&q=80" alt="Wine Bottles" className="w-full h-full object-cover opacity-20 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-r from-lenoir-dark via-lenoir-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-lenoir-gold text-xs uppercase tracking-[0.5em] font-black block mb-8">Curated Experiences</span>
            <h2 className="text-6xl md:text-8xl font-serif mb-10 leading-tight">Lenoir <span className="italic text-lenoir-gold/80 block">Wine Club</span></h2>
            <p className="text-xl font-light leading-relaxed mb-12 text-gray-300 font-serif italic max-w-xl">
              Bring the Lenoir experience home. Our monthly club features rare finds from independent producers with compelling stories, hand-selected by our sommelier team.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-lenoir-gold text-lenoir-dark px-12 py-5 text-xs uppercase tracking-[0.2em] font-black hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl">
                Join the Wine Club
              </button>
              <button className="border border-white/20 px-12 py-5 text-xs uppercase tracking-[0.2em] font-black hover:bg-white hover:text-lenoir-dark transition-all transform hover:-translate-y-1">
                Gift a Membership
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="aspect-square bg-lenoir-gold/5 p-8 rounded-full border border-lenoir-gold/10 animate-spin-slow">
              <div className="w-full h-full rounded-full border border-lenoir-gold/20 p-8">
                <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80" alt="Sommelier" className="w-full h-full object-cover rounded-full shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-32 bg-lenoir-earth">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-lenoir-burgundy text-xs uppercase tracking-[0.4em] font-black">Community & Culture</span>
              <h2 className="text-6xl font-serif text-lenoir-dark mt-6 italic">Special Nights</h2>
              <p className="mt-8 text-xl text-gray-600 font-light leading-relaxed font-serif">
                From intimate wine dinners with visiting winemakers to our legendary Beefsteak celebrations.
              </p>
            </div>
            <button className="group flex items-center gap-4 text-lenoir-burgundy text-xs uppercase tracking-[0.3em] font-black pb-2 border-b-2 border-lenoir-burgundy/20 hover:border-lenoir-burgundy transition-all">
              <span>Explore All Events</span>
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {EVENTS.map((event, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-white shadow-2xl rounded-sm transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-90 group-hover:opacity-100" />
                </div>
                <div className="p-10">
                  <span className="text-lenoir-gold text-[10px] uppercase tracking-[0.3em] font-black mb-4 block">Limited Seating</span>
                  <h3 className="text-3xl font-serif mb-4 leading-tight group-hover:text-lenoir-burgundy transition-colors">{event.title}</h3>
                  <p className="text-gray-500 text-sm font-light mb-8 leading-relaxed italic font-serif">
                    {event.description}
                  </p>
                  <button className="text-xs uppercase tracking-widest font-black text-lenoir-dark flex items-center gap-3">
                    <span>Reserve Spot</span>
                    <div className="w-6 h-[2px] bg-lenoir-gold"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Dining Section */}
      <section id="private-dining" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="aspect-square bg-lenoir-earth p-4 rounded-lg shadow-inner">
               <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" alt="Private Garden Event" className="w-full h-full object-cover rounded-md shadow-2xl group-hover:scale-[1.02] transition-transform duration-700" />
            </div>
            <div className="absolute -top-10 -right-10 bg-lenoir-gold p-12 rounded-full hidden lg:flex flex-col items-center justify-center text-lenoir-dark shadow-2xl">
              <span className="text-2xl font-serif italic leading-none">16-65</span>
              <span className="text-[10px] uppercase tracking-widest font-black mt-1">Guests</span>
            </div>
          </div>
          <div className="space-y-10">
            <header>
              <span className="text-lenoir-burgundy text-xs uppercase tracking-[0.4em] font-black mb-4 block">Private Gatherings</span>
              <h2 className="text-6xl font-serif text-lenoir-dark leading-tight italic">Host With <br/> Purpose</h2>
            </header>
            <p className="text-xl font-light text-gray-700 leading-relaxed italic font-serif">
              From business dinners to wedding receptions, our wine garden and dining room provide a soulful backdrop for your most important celebrations.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-500 font-light">
                <div className="w-2 h-2 rounded-full bg-lenoir-gold"></div>
                <p>Tailored Seasonal Menus & Wine Pairings</p>
              </div>
              <div className="flex items-center gap-4 text-gray-500 font-light">
                <div className="w-2 h-2 rounded-full bg-lenoir-gold"></div>
                <p>Full Restaurant & Garden Buyouts</p>
              </div>
              <div className="flex items-center gap-4 text-gray-500 font-light">
                <div className="w-2 h-2 rounded-full bg-lenoir-gold"></div>
                <p>Dedicated Event Planning Team</p>
              </div>
            </div>
            <button className="bg-lenoir-dark text-white px-12 py-5 text-xs uppercase tracking-[0.3em] font-black hover:bg-lenoir-gold hover:text-lenoir-dark transition-all transform hover:-translate-y-1 shadow-2xl w-full sm:w-auto">
              Inquire About Private Dining
            </button>
          </div>
        </div>
      </section>

      {/* CSR & Community Section */}
      <section className="py-32 bg-lenoir-earth border-t border-lenoir-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
             <span className="text-lenoir-burgundy text-xs uppercase tracking-[0.4em] font-black">Sustainability & Support</span>
             <h2 className="text-6xl font-serif text-lenoir-dark mt-6 mb-8 underline decoration-lenoir-gold/20 underline-offset-8">Community Support</h2>
             <p className="text-xl text-gray-600 font-light italic font-serif">
               Join our mission to support local agricultural cycles. Our CSR memberships provide unique perks while fueling our commitment to independent Texas producers.
             </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {CSR_TIERS.map((tier, idx) => (
              <div key={idx} className={`relative p-12 group transition-all duration-700 border overflow-hidden ${idx === 1 ? 'border-lenoir-gold bg-lenoir-dark text-white lg:scale-105 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-10' : 'border-gray-200 bg-white hover:border-lenoir-gold/50'}`}>
                {idx === 1 && <div className="absolute top-0 right-0 bg-lenoir-gold text-lenoir-dark px-6 py-2 text-[10px] uppercase tracking-widest font-black">Most Popular</div>}
                <h3 className={`text-3xl font-serif mb-2 ${idx === 1 ? 'text-lenoir-gold' : 'text-lenoir-dark'}`}>{tier.name}</h3>
                <div className="text-5xl font-serif mb-10 italic">{tier.price}</div>
                <ul className="space-y-6 mb-12 min-h-[160px]">
                  {tier.perks.map((perk, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-4">
                      <span className="text-lenoir-gold mt-1 text-xs">✦</span>
                      <span className="text-sm font-light leading-snug">{perk}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-5 text-xs uppercase tracking-[0.2em] font-black transition-all ${idx === 1 ? 'bg-lenoir-gold text-lenoir-dark hover:bg-white' : 'bg-lenoir-dark text-white hover:bg-lenoir-gold hover:text-lenoir-dark'}`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lenoir-gold/30 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-lenoir-burgundy text-xs uppercase tracking-[0.5em] font-black italic">Kind Words</span>
          </div>
          <div className="grid lg:grid-cols-3 gap-16 relative">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-6xl text-lenoir-gold/30 mb-8 font-serif group-hover:text-lenoir-gold/60 transition-colors">“</div>
                <p className="text-2xl font-serif italic text-lenoir-dark mb-10 leading-relaxed group-hover:scale-105 transition-transform">
                  {t.quote}
                </p>
                <div className="inline-block py-2 px-4 border-l border-lenoir-gold">
                  <div className="uppercase tracking-[0.3em] text-[10px] font-black text-lenoir-burgundy">
                    {t.author}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-400 mt-1 font-bold">{t.source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="py-32 bg-lenoir-earth overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              <header>
                <span className="text-lenoir-burgundy text-xs uppercase tracking-[0.4em] font-black mb-4 block">South Austin Landmark</span>
                <h2 className="text-7xl font-serif text-lenoir-dark italic leading-none">Visit Us</h2>
              </header>
              
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-lenoir-gold">Location</h4>
                  <p className="text-2xl font-serif text-gray-800 leading-tight">1807 S. First Street,<br/> Austin, Texas 78704</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-lenoir-gold">Reservations</h4>
                  <p className="text-2xl font-serif text-gray-800">(512) 215-9778</p>
                  <p className="text-sm font-light text-lenoir-burgundy underline underline-offset-4 cursor-pointer">Email our Concierge</p>
                </div>

                <div className="space-y-4 sm:col-span-2">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-lenoir-gold">Hours</h4>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Dinner</p>
                      <p className="text-lg font-serif">Sun – Thu: 4:30 – 10:00</p>
                      <p className="text-lg font-serif">Fri – Sat: 4:30 – 10:30</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Holiday</p>
                      <p className="text-lg font-serif italic text-lenoir-burgundy font-bold uppercase tracking-tighter">Closed Tuesdays</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-lenoir-dark text-white px-12 py-5 text-xs uppercase tracking-[0.2em] font-black hover:bg-lenoir-gold hover:text-lenoir-dark transition-all transform hover:-translate-y-1 shadow-2xl">
                  Reserve via Resy
                </button>
                <button className="border border-lenoir-dark/10 text-lenoir-dark px-12 py-5 text-xs uppercase tracking-[0.2em] font-black hover:bg-white transition-all transform hover:-translate-y-1">
                  Get Directions
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-square bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] p-4 rounded-xl rotate-2 group-hover:rotate-0 transition-all duration-1000">
                <div className="w-full h-full rounded-lg overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80" alt="Austin Skyline" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-2000" />
                  <div className="absolute inset-0 bg-lenoir-burgundy/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white/95 backdrop-blur-sm p-8 text-center shadow-2xl rounded-sm border border-lenoir-gold/20 min-w-[240px]">
                      <span className="text-lenoir-burgundy text-3xl font-serif italic mb-2 block">Our Garden Awaits</span>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black">S. First District</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-40 bg-lenoir-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-lenoir-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <header className="mb-16">
            <h2 className="text-6xl font-serif mb-6 italic leading-tight">Stay In the <span className="text-lenoir-gold">Loop</span></h2>
            <p className="text-xl text-gray-400 font-light font-serif italic max-w-xl mx-auto">Sign up for first access to wine dinners, seasonal menu changes, and garden events.</p>
          </header>
          <form className="max-w-xl mx-auto relative group">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-10 py-6 bg-white/5 border border-white/10 text-white placeholder-white/30 font-light focus:outline-none focus:border-lenoir-gold transition-all text-lg font-serif italic"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-lenoir-gold text-lenoir-dark px-10 text-xs uppercase tracking-[0.3em] font-black hover:bg-white transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-lenoir-dark text-gray-400 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-5">
              <a href="#" className="text-4xl font-serif text-lenoir-gold tracking-widest uppercase mb-8 block">Lenoir</a>
              <p className="text-lg font-serif italic text-gray-400 leading-relaxed max-w-sm mb-12">
                Named after a hearty grape growing across the Texas Hill Country — a tribute to the land’s resilience and bounty.
              </p>
              <div className="flex gap-10">
                <a href="#" className="text-[10px] uppercase tracking-[0.4em] font-black text-white hover:text-lenoir-gold transition-colors flex items-center gap-3">
                  <div className="w-4 h-[1px] bg-lenoir-gold"></div>
                  <span>Instagram</span>
                </a>
                <a href="#" className="text-[10px] uppercase tracking-[0.4em] font-black text-white hover:text-lenoir-gold transition-colors flex items-center gap-3">
                  <div className="w-4 h-[1px] bg-lenoir-gold"></div>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-12">
              <div className="space-y-8">
                <h4 className="text-white text-[10px] uppercase tracking-[0.5em] font-black mb-8">Cuisine</h4>
                <ul className="space-y-4 text-sm font-light italic font-serif">
                  <li><a href="#about" className="hover:text-lenoir-gold transition-colors">Our Story</a></li>
                  <li><a href="#menu" className="hover:text-lenoir-gold transition-colors">Current Menu</a></li>
                  <li><a href="#wine-club" className="hover:text-lenoir-gold transition-colors">Wine Club</a></li>
                  <li><a href="#visit" className="hover:text-lenoir-gold transition-colors">Location</a></li>
                </ul>
              </div>

              <div className="space-y-8">
                <h4 className="text-white text-[10px] uppercase tracking-[0.5em] font-black mb-8">Hospitality</h4>
                <ul className="space-y-4 text-sm font-light italic font-serif">
                  <li><a href="#events" className="hover:text-lenoir-gold transition-colors">Events</a></li>
                  <li><a href="#private-dining" className="hover:text-lenoir-gold transition-colors">Private Events</a></li>
                  <li><a href="#" className="hover:text-lenoir-gold transition-colors">Gift Cards</a></li>
                  <li><a href="#" className="hover:text-lenoir-gold transition-colors">CSR Membership</a></li>
                </ul>
              </div>

              <div className="space-y-8">
                <h4 className="text-white text-[10px] uppercase tracking-[0.5em] font-black mb-8">Contact</h4>
                <ul className="space-y-4 text-sm font-light italic font-serif">
                  <li>1807 S. First Street<br/>Austin, TX 78704</li>
                  <li>(512) 215-9778</li>
                  <li>reservations@lenoirrestaurant.com</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] font-black text-gray-500">
            <p>&copy; 2024 Lenoir Restaurant Group. Crafted in Austin, TX.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
