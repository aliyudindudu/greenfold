'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Crafts', href: '#crafts' },
  { label: 'The Process', href: '#process' },
  { label: 'Collections', href: '#collections' },
  { label: 'Custom', href: '#custom' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-paper/80 backdrop-blur-md py-4 shadow-layered" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-cardboard flex items-center justify-center text-paper group-hover:scale-110 transition-transform">
            <Globe size={18} />
          </div>
          <h1 className="text-2xl font-stencil text-espresso uppercase tracking-tight">
            GreenFold
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="font-mono text-sm text-espresso uppercase font-bold hover:text-leaf transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-leaf transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-espresso/10 mx-2" />

          <div className="flex items-center gap-6">
            <button className="text-espresso hover:text-leaf transition-colors">
              <Search size={20} />
            </button>
            <button className="text-espresso hover:text-leaf transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-leaf text-paper text-[10px] flex items-center justify-center rounded-full font-bold">
                2
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-espresso"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-paper z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-transform duration-500",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <a 
            key={link.label} 
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-stencil text-4xl text-espresso uppercase hover:text-leaf transition-colors"
          >
            {link.label}
          </a>
        ))}
        <div className="flex gap-8 mt-12">
          <ShoppingCart size={32} className="text-espresso" />
          <Search size={32} className="text-espresso" />
        </div>
      </div>
    </nav>
  );
}
