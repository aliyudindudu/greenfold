'use client';

import { Instagram, Twitter, Facebook, Mail, Globe } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Mail, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-paper py-20 relative overflow-hidden">
      {/* Footer Top Border (Cardboard Texture) */}
      <div className="absolute top-0 left-0 w-full h-8 bg-cardboard/20 border-b border-paper/10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="text-leaf" />
            <h2 className="text-3xl font-stencil text-paper uppercase">
              GreenFold
            </h2>
          </div>
          <p className="font-mono text-paper/60 max-w-sm mb-8">
            Pioneers of upcycled cardboard design. We transform common waste 
            into sustainable, aesthetic, and functional pieces for the modern home.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-10 h-10 flex items-center justify-center border border-paper/20 rounded-full hover:bg-leaf hover:border-leaf transition-colors group"
                aria-label={social.label}
              >
                <social.icon size={18} className="text-paper group-hover:text-paper" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-stencil text-paper mb-6 uppercase">Collections</h3>
          <ul className="space-y-3 font-mono text-paper/60">
            <li><a href="#" className="hover:text-leaf transition-colors">Home Decor</a></li>
            <li><a href="#" className="hover:text-leaf transition-colors">Workspace</a></li>
            <li><a href="#" className="hover:text-leaf transition-colors">Pet Furniture</a></li>
            <li><a href="#" className="hover:text-leaf transition-colors">Kids' Play</a></li>
            <li><a href="#" className="hover:text-leaf transition-colors">Custom Orders</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-stencil text-paper mb-6 uppercase">Contact</h3>
          <ul className="space-y-3 font-mono text-paper/60">
            <li>Zero-Waste Studio 404</li>
            <li>Brooklyn, NY 11201</li>
            <li>hello@greenfold.eco</li>
            <li>+1 (555) 000-0000</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-mono text-xs text-paper/30">
          © 2026 GREENFOLD | REIMAGINING WASTE INTO WONDER.
        </p>
        <div className="flex gap-8 font-mono text-xs text-paper/30">
          <a href="#" className="hover:text-paper transition-colors underline decoration-leaf underline-offset-4">Privacy Policy</a>
          <a href="#" className="hover:text-paper transition-colors underline decoration-leaf underline-offset-4">Terms of Use</a>
          <a href="#" className="hover:text-paper transition-colors underline decoration-leaf underline-offset-4">Returns & Exchange</a>
        </div>
      </div>

      {/* Box Tape Decorative Element */}
      <div className="absolute bottom-10 right-10 w-40 h-10 bg-cardboard/10 -rotate-45 translate-x-10 translate-y-10 border-t border-paper/10 pointer-events-none" />
    </footer>
  );
}
