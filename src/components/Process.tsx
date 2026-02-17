'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Sparkles, Pencil, Scissors } from 'lucide-react';

const steps = [
  { icon: Truck, title: 'Collected', description: 'Post-consumer cardboard gathered from local waste streams.' },
  { icon: Sparkles, title: 'Sanitized', description: 'Heat-treated and cleaned using eco-friendly ozone technology.' },
  { icon: Pencil, title: 'Designed', description: 'CAD-optimized for maximum structural integrity without glue.' },
  { icon: Scissors, title: 'Folded', description: 'Precisely cut and hand-assembled in our zero-waste studio.' },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center+=200',
        end: 'bottom center',
        scrub: 1,
      },
    });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'none',
    });

    itemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          { opacity: 0, y: 30, rotateX: -45, transformOrigin: 'top' },
          {
            opacity: 1, y: 0, rotateX: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
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

  return (
    <section 
      ref={containerRef}
      className="relative py-24 bg-paper overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-stencil text-espresso mb-16 text-center">
          The Eco-Cycle
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 pt-10">
          {/* Connecting SVG Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 hidden md:block z-0 pointer-events-none opacity-20">
            <svg width="100%" height="100" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
              <path 
                ref={pathRef}
                d="M0 50 C 125 50, 125 0, 250 0 S 375 100, 500 50 S 625 0, 750 0 S 875 100, 1000 50" 
                stroke="#6B8E23" 
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {steps.map((step, index) => (
            <div 
              key={index}
              ref={el => { itemsRef.current[index] = el; }}
              className="relative z-10 flex flex-col items-center text-center p-8 bg-cardboard/10 border border-cardboard-light/20 backdrop-blur-sm rounded-lg shadow-layered"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-cardboard text-paper rounded-full shadow-cardboard transition-transform hover:scale-110">
                <step.icon size={32} />
              </div>
              <h3 className="text-2xl font-stencil text-espresso mb-4 uppercase">{step.title}</h3>
              <p className="text-sm font-mono text-espresso/70 leading-relaxed">
                {step.description}
              </p>
              
              {/* Recycled Stamp Effect */}
              {index === 3 && (
                <div className="absolute -bottom-4 -right-4 recylced-stamp">
                  Verified
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
