'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

// Mock initial cart data
const initialCartItems = [
  {
    id: 1,
    name: 'The Sovereign Throne',
    category: 'Furniture',
    price: 450,
    quantity: 1,
    imageLabel: 'PREMIUM-01'
  },
  {
    id: 2,
    name: 'Geometric Desk Organizer',
    category: 'Office',
    price: 35,
    quantity: 2,
    imageLabel: 'OFFICE-02'
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  return (
    <main className="relative flex flex-col min-h-screen bg-paper overflow-x-hidden">
      <div className="texture-grain pointer-events-none fixed inset-0 z-50 mix-blend-multiply opacity-[0.03]" />
      
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h1 className="text-4xl md:text-6xl font-stencil text-espresso uppercase">Your <span className="text-leaf">Crate</span></h1>
            <div className="h-[2px] flex-grow bg-espresso/10" />
            <span className="font-mono text-espresso/40 uppercase text-sm">Items: {cartItems.length}</span>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items List */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="group relative flex flex-col md:flex-row gap-6 p-6 bg-paper border border-espresso/10 hover:border-leaf transition-all">
                    {/* Item Image Placeholder */}
                    <div className="w-full md:w-40 aspect-square bg-cardboard/10 flex items-center justify-center text-espresso/20 font-stencil text-sm rotate-3 border border-espresso/5">
                      {item.imageLabel}
                    </div>

                    {/* Item Info */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-leaf font-bold">{item.category}</span>
                          <h3 className="text-2xl font-stencil text-espresso uppercase leading-tight mt-1">{item.name}</h3>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-espresso/20 hover:text-red-500 transition-colors p-2"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-end justify-between gap-4 mt-6">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-espresso/20 bg-paper-off">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-espresso hover:text-paper transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-12 text-center font-mono font-bold text-espresso">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-espresso hover:text-paper transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-sm font-mono text-espresso/40 line-through">${item.price * item.quantity + 10}</p>
                          <p className="text-2xl font-stencil text-espresso">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Shipping Info Card */}
                <div className="p-6 bg-leaf/5 border border-leaf/20 flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center text-leaf">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h4 className="font-stencil text-espresso uppercase">Eco-Friendly Packaging</h4>
                    <p className="font-mono text-sm text-espresso/60">Your order will be shipped in 100% biodegradable materials with zero plastic usage.</p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 p-8 bg-espresso text-paper border border-espresso shadow-layered">
                  <h2 className="text-3xl font-stencil uppercase mb-8 pb-4 border-b border-paper/10">Summary</h2>
                  
                  <div className="space-y-4 font-mono text-sm uppercase">
                    <div className="flex justify-between">
                      <span className="text-paper/60">Subtotal</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-paper/60">Shipping Fee</span>
                      <span>${shipping}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-paper/60">Eco-Tax</span>
                      <span className="text-leaf">FREE</span>
                    </div>
                    <div className="pt-4 mt-4 border-t border-paper/20 flex justify-between text-xl font-stencil">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>

                  <Link href="/checkout" className="w-full mt-10 py-5 bg-leaf text-paper font-stencil uppercase tracking-[0.2em] hover:bg-paper hover:text-espresso transition-all flex items-center justify-center gap-3 group">
                    Secure Checkout
                    <ShieldCheck size={20} className="group-hover:scale-110 transition-transform" />
                  </Link>

                  <div className="mt-6 flex items-center justify-center gap-4 opacity-40">
                    <div className="w-8 h-5 bg-paper rounded-sm" />
                    <div className="w-8 h-5 bg-paper rounded-sm" />
                    <div className="w-8 h-5 bg-paper rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center space-y-8 bg-cardboard/5 border border-dashed border-espresso/20">
              <div className="w-24 h-24 mx-auto bg-espresso/5 flex items-center justify-center text-espresso/20 rounded-full">
                <ShoppingBag size={48} />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-stencil text-espresso uppercase">The Crate is Empty</h2>
                <p className="font-mono text-espresso/50">Your masterpiece hasn't been picked yet.</p>
              </div>
              <Link href="/crafts" className="inline-flex items-center gap-3 px-8 py-4 bg-espresso text-paper font-mono uppercase text-sm tracking-widest hover:bg-leaf transition-colors">
                Explore Crafts <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-cardboard/10 blur-[100px] -rotate-12" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-leaf/10 blur-[100px] rotate-12" />
      </div>
    </main>
  );
}
