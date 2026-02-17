'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { ease: 'power4.out' }
    });

    // Headline Unfolding
    tl.fromTo(headlineRef.current,
      { rotateX: -90, opacity: 0, transformOrigin: 'top' },
      { rotateX: 0, opacity: 1, duration: 1.5, delay: 0.5 }
    )
    .fromTo(subheadlineRef.current,
      { rotateX: -90, opacity: 0, transformOrigin: 'top' },
      { rotateX: 0, opacity: 1, duration: 1 },
      '-=1'
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.5'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-paper"
      style={{ perspective: '1000px' }}
    >
      <div className="max-w-4xl px-6 text-center">
        <div ref={headlineRef} className="mb-6">
          <h1 className="text-6xl md:text-8xl font-stencil text-espresso leading-none uppercase">
            Reimagining <br />
            <span className="text-leaf">Waste</span> into <br />
            Wonder.
          </h1>
        </div>
        
        <div ref={subheadlineRef} className="mb-12">
          <p className="text-lg md:text-xl font-mono text-espresso/80 max-w-2xl mx-auto">
            Handcrafted cardboard furniture & decor. <br />
            Sustainable design that folds into your life.
          </p>
        </div>

        <div ref={ctaRef}>
          <button className="group relative px-8 py-4 bg-cardboard hover:bg-cardboard-light text-espresso font-stencil text-xl transition-colors shadow-cardboard hover:shadow-cardboard-hover">
            Explore the Folds
            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            
            {/* Cardboard edge texture effect */}
            <div className="absolute inset-0 border-2 border-espresso/10 pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-full h-full border-b-2 border-r-2 border-espresso/20 pointer-events-none" />
          </button>
        </div>
      </div>

      {/* Decorative Box Elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-cardboard-light/30 -rotate-12 pointer-events-none" />
      <div className="absolute top-40 right-10 w-24 h-24 border-2 border-leaf/20 rotate-45 pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-cardboard/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
