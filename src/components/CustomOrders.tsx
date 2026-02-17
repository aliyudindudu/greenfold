'use client';

import { Send } from 'lucide-react';

export default function CustomOrders() {
  return (
    <section className="py-24 bg-cardboard/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-paper p-8 md:p-12 shadow-layered border border-cardboard-light/30 relative">
          {/* Packaging Tape Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-10 bg-cardboard-light/40 border border-espresso/10 rotate-1" />
          
          <h2 className="text-4xl font-stencil text-espresso mb-6 text-center uppercase tracking-tight">
            Custom Commissions
          </h2>
          <p className="text-center font-mono text-espresso/70 mb-12">
            Have a specific vision? We design and build bespoke cardboard 
            installations, furniture, and structures for your space.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-mono uppercase font-bold text-espresso/50">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="bg-paper-off border-b-2 border-cardboard focus:border-leaf outline-none p-3 font-mono text-espresso transition-colors"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-mono uppercase font-bold text-espresso/50">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="bg-paper-off border-b-2 border-cardboard focus:border-leaf outline-none p-3 font-mono text-espresso transition-colors"
              />
            </div>
            <div className="md:col-span-2 flex flex-col space-y-2">
              <label className="text-xs font-mono uppercase font-bold text-espresso/50">Project Vision</label>
              <textarea 
                rows={4}
                placeholder="Tell us about the piece you want us to create..."
                className="bg-paper-off border-b-2 border-cardboard focus:border-leaf outline-none p-3 font-mono text-espresso transition-colors resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-espresso text-paper font-stencil text-xl py-4 hover:bg-espresso/90 transition-all shadow-cardboard active:translate-y-1 active:shadow-none"
              >
                Send Request <Send size={20} />
              </button>
            </div>
          </form>

          {/* Fragile Stamp */}
          <div className="absolute -bottom-6 -left-6 opacity-20 pointer-events-none rotate-[-15deg]">
            <div className="border-4 border-red-900 text-red-900 px-4 py-2 font-stencil text-4xl rounded-xl">
              FRAGILE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
