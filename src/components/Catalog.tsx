'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Geometric Lamp', category: 'Decor', price: '$45' },
  { id: 2, name: 'Cat House', category: 'Pets', price: '$85' },
  { id: 3, name: 'Desk Organizer', category: 'Office', price: '$35' },
  { id: 4, name: 'Eco Chair', category: 'Furniture', price: '$120' },
  { id: 5, name: 'Wall Art Set', category: 'Decor', price: '$65' },
  { id: 6, name: 'Toy Rocket', category: 'Kids', price: '$55' },
];

export default function Catalog() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: 'power3.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (card: HTMLDivElement) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-paper-off"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-stencil text-espresso mb-4 uppercase">
              The Crafts
            </h2>
            <p className="text-lg font-mono text-espresso/70">
              Browse our latest upcycled creations. Each piece is unique, 
              preserving the story of its material while serving a new purpose.
            </p>
          </div>
          <Link 
            href="/crafts"
            className="px-6 py-3 border-2 border-espresso text-espresso font-stencil hover:bg-espresso hover:text-paper transition-colors"
          >
            View All Crafts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div 
              key={product.id}
              ref={el => { cardsRef.current[index] = el; }}
              onMouseMove={(e) => {
                const target = cardsRef.current[index];
                if (target) handleMouseMove(e, target);
              }}
              onMouseLeave={() => {
                const target = cardsRef.current[index];
                if (target) handleMouseLeave(target);
              }}
              className="group relative flex flex-col bg-cardboard/5 rounded-none border border-cardboard-light/20 p-4 transition-shadow hover:shadow-cardboard-hover"
            >
              {/* Product Image Placeholder */}
              <div className="relative aspect-square mb-6 overflow-hidden bg-cardboard/20 border-2 border-espresso/10">
                <div className="absolute inset-0 flex items-center justify-center text-espresso/20 font-stencil text-2xl rotate-45 select-none">
                  GREENFOLD PRODUCT
                </div>
                
                {/* Actions Overlay */}
                <div className="absolute inset-0 bg-espresso/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-4">
                  <button className="w-12 h-12 bg-paper text-espresso rounded-full flex items-center justify-center hover:bg-leaf hover:text-paper transition-colors">
                    <Eye size={20} />
                  </button>
                  <button className="w-12 h-12 bg-paper text-espresso rounded-full flex items-center justify-center hover:bg-leaf hover:text-paper transition-colors">
                    <ShoppingBag size={20} />
                  </button>
                  <button className="w-12 h-12 bg-paper text-espresso rounded-full flex items-center justify-center hover:bg-leaf hover:text-paper transition-colors">
                    <Heart size={20} />
                  </button>
                </div>

                {/* Recycled Stamp (Reveals on Hover) */}
                <div className="absolute top-4 right-4 recylced-stamp opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100">
                  RECYCLED
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-leaf font-bold">
                    {product.category}
                  </span>
                  <span className="text-xl font-stencil text-espresso">
                    {product.price}
                  </span>
                </div>
                <h3 className="text-2xl font-stencil text-espresso uppercase mb-4 tracking-tight">
                  {product.name}
                </h3>
                
                {/* Technical Specs Style */}
                <div className="mt-auto pt-4 border-t border-espresso/10 flex justify-between items-center text-[10px] font-mono text-espresso/40 uppercase">
                  <span>REF: GF-2026-00{product.id}</span>
                  <span>100% CORRUGATED</span>
                </div>
              </div>

              {/* Cardboard Edge Detail */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[141%] h-[141%] bg-cardboard/10 rotate-45 translate-x-1/2 -translate-y-1/2 border-b-2 border-l-2 border-espresso/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
