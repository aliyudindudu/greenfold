'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, ArrowRight, Award, Zap } from 'lucide-react';
import Link from 'next/link';

const topCollections = [
  {
    id: 'premium-01',
    title: 'The Sovereign Throne',
    category: 'Furniture',
    description: 'Our most ambitious piece yet. A fully structural lounge chair engineered from 48 layers of reinforced honeycomb cardboard. It challenges the perception of "disposable" materials with a lifespan designed for decades.',
    features: ['Load-bearing up to 150kg', 'Zero-glue assembly', 'Hand-burnished edges'],
    imageLabel: 'PREMIUM-COLLECTION-001'
  },
  {
    id: 'premium-02',
    title: 'Lumina Geometrica',
    category: 'Lighting',
    description: 'A mathematical marvel. This pendant light uses precision laser-cut slats to create a mesmerizing play of light and shadow, casting complex geometric patterns across your living space.',
    features: ['Recycled craft paper', 'Heat-resistant core', 'Adjustable cable length'],
    imageLabel: 'PREMIUM-COLLECTION-002'
  }
];

const spotlightProducts = [
  { id: 3, name: 'Minimalist Organizer', price: '$45', label: 'Best Seller' },
  { id: 4, name: 'Modular Bookshelf', price: '$180', label: 'Limited Edition' },
  { id: 5, name: 'Pet Sanctuary XL', price: '$95', label: 'Top Rated' },
];

export default function CollectionsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-paper overflow-x-hidden">
      <div className="texture-grain pointer-events-none fixed inset-0 z-50 mix-blend-multiply opacity-[0.03]" />
      
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-leaf/10 text-leaf rounded-full mb-8">
            <Award size={16} />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">Curated Masterpieces</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-stencil text-espresso uppercase leading-none mb-8">
            The <span className="text-leaf">Signature</span> <br /> Collection
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-mono text-espresso/70 leading-relaxed">
            A celebration of structural integrity and aesthetic purity. These pieces represent the pinnacle of our craft—where waste transforms into wonder.
          </p>
        </div>
      </section>

      {/* Featured Masterpieces */}
      <section className="py-20 px-6 bg-cardboard/5">
        <div className="max-w-7xl mx-auto space-y-32">
          {topCollections.map((item, index) => (
            <div key={item.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              {/* Image Side */}
              <div className="w-full md:w-1/2 aspect-[4/5] bg-cardboard/20 border-2 border-espresso/10 relative group overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-espresso/10 font-stencil text-4xl rotate-12 group-hover:scale-110 transition-transform duration-700">
                  {item.imageLabel}
                </div>
                <div className="absolute top-6 left-6 px-3 py-1 bg-espresso text-paper font-mono text-[10px] uppercase">
                  Featured Work
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-leaf font-mono text-sm uppercase font-bold tracking-widest">{item.category}</span>
                <h2 className="text-4xl md:text-5xl font-stencil text-espresso uppercase leading-tight">{item.title}</h2>
                <p className="text-lg text-espresso/80 font-mono leading-relaxed italic border-l-4 border-leaf pl-6">
                  "{item.description}"
                </p>
                <ul className="grid grid-cols-1 gap-3 pt-4">
                  {item.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-mono text-espresso/60">
                      <Zap size={14} className="text-leaf" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <button className="px-8 py-4 bg-espresso text-paper font-mono uppercase text-sm tracking-widest hover:bg-leaf transition-colors flex items-center gap-3 group">
                    View Project Details
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Products Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-stencil text-espresso uppercase mb-2">The Elite Selection</h2>
              <p className="font-mono text-espresso/50">Our highest rated creations by the community.</p>
            </div>
            <Link href="/crafts" className="hidden md:flex items-center gap-2 text-espresso hover:text-leaf font-mono uppercase text-xs font-bold transition-colors">
              Browse All Crafts <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spotlightProducts.map((p) => (
              <div key={p.id} className="group p-8 border border-espresso/10 bg-paper hover:border-leaf transition-all hover:shadow-layered relative">
                <div className="absolute -top-3 left-6 px-3 py-1 bg-leaf text-paper text-[8px] font-mono uppercase tracking-tighter">
                  {p.label}
                </div>
                <div className="aspect-square bg-cardboard/10 mb-8 flex items-center justify-center text-espresso/20 font-stencil text-xl group-hover:rotate-6 transition-transform">
                  GF-TOP-00{p.id}
                </div>
                <h3 className="text-2xl font-stencil text-espresso uppercase mb-2">{p.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-mono text-leaf">{p.price}</span>
                  <button className="p-3 border border-espresso/10 hover:bg-espresso hover:text-paper transition-colors">
                    <Star size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 border-t border-espresso/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-stencil text-espresso uppercase">Have a vision for a <span className="text-leaf">Custom</span> Collection?</h2>
          <p className="text-lg font-mono text-espresso/60">We collaborate with architects and designers to create bespoke cardboard installations and furniture suites.</p>
          <button className="px-10 py-5 border-2 border-espresso text-espresso font-stencil uppercase tracking-[0.2em] hover:bg-espresso hover:text-paper transition-all">
            Start a Collaboration
          </button>
        </div>
      </section>

      <Footer />

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-leaf/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-cardboard/5 blur-[120px]" />
      </div>
    </main>
  );
}
