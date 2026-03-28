'use client';

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CreditCard, Truck, ShieldCheck, CheckCircle2, ArrowRight, Loader2, Package, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  // Mock total from cart (normally this would come from a global state or server)
  const total = 535; // 450 + (35 * 2) + 15 shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment gateway processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      window.scrollTo(0, 0);
    }, 3000);
  };

  if (step === 'success') {
    return (
      <main className="relative flex flex-col min-h-screen bg-paper overflow-x-hidden">
        <div className="texture-grain pointer-events-none fixed inset-0 z-50 mix-blend-multiply opacity-[0.03]" />
        <Navbar />
        <section className="flex-grow pt-40 pb-20 px-6 flex items-center justify-center">
          <div className="max-w-md w-full text-center space-y-8 bg-paper p-12 border border-espresso/10 shadow-layered relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-leaf text-paper rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <CheckCircle2 size={40} />
            </div>
            
            <div className="space-y-4 pt-4">
              <h1 className="text-4xl font-stencil text-espresso uppercase">Payment Successful</h1>
              <p className="font-mono text-espresso/60">Your order #GF-2026-0328 has been confirmed and is being prepared in our eco-hub.</p>
            </div>

            <div className="p-6 bg-cardboard/5 border border-dashed border-espresso/20 rounded-lg text-left space-y-3">
              <div className="flex justify-between font-mono text-xs uppercase text-espresso/40">
                <span>Estimated Delivery</span>
                <span className="text-leaf font-bold">April 02 - 05</span>
              </div>
              <div className="flex justify-between font-mono text-xs uppercase text-espresso/40">
                <span>Shipping Method</span>
                <span>Carbon Neutral Ground</span>
              </div>
            </div>

            <div className="space-y-4">
              <Link href="/collections" className="block w-full py-4 bg-espresso text-paper font-stencil uppercase tracking-widest hover:bg-leaf transition-colors">
                Continue Shopping
              </Link>
              <button 
                onClick={() => router.push('/')}
                className="block w-full py-4 border border-espresso/10 font-mono text-sm uppercase tracking-widest hover:bg-paper-off transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative flex flex-col min-h-screen bg-paper overflow-x-hidden">
      <div className="texture-grain pointer-events-none fixed inset-0 z-50 mix-blend-multiply opacity-[0.03]" />
      
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl md:text-5xl font-stencil text-espresso uppercase">Check<span className="text-leaf">out</span></h1>
              <div className="h-1 w-20 bg-leaf" />
            </div>
            
            {/* Steps Progress */}
            <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest">
              <div className={`flex items-center gap-2 ${step === 'shipping' ? 'text-espresso font-bold' : 'text-espresso/40'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center border ${step === 'shipping' ? 'border-espresso bg-espresso text-paper' : 'border-espresso/20'}`}>1</span>
                Shipping
              </div>
              <div className="h-[1px] w-8 bg-espresso/10" />
              <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-espresso font-bold' : 'text-espresso/40'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center border ${step === 'payment' ? 'border-espresso bg-espresso text-paper' : 'border-espresso/20'}`}>2</span>
                Payment
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Side */}
            <div className="lg:col-span-8">
              <div className="bg-paper border border-espresso/10 p-8 md:p-12 relative overflow-hidden">
                {/* Visual Stamp Decor */}
                <div className="absolute top-8 right-8 w-24 h-24 border-4 border-espresso/5 rounded-full flex items-center justify-center -rotate-12 pointer-events-none">
                  <span className="font-stencil text-espresso/5 text-[10px] uppercase text-center">Greenfold<br/>Logistics<br/>2026</span>
                </div>

                {step === 'shipping' ? (
                  <form onSubmit={handleShippingSubmit} className="space-y-8">
                    <div className="flex items-center gap-3 text-espresso/40 mb-2">
                      <Truck size={20} />
                      <h2 className="font-stencil uppercase tracking-widest">Shipping Information</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase text-espresso/60 px-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-paper-off border border-espresso/10 p-4 font-mono text-sm focus:border-leaf outline-none transition-colors"
                          placeholder="ARTISAN NAME"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase text-espresso/60 px-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-paper-off border border-espresso/10 p-4 font-mono text-sm focus:border-leaf outline-none transition-colors"
                          placeholder="artisan@greenfold.com"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="block font-mono text-[10px] uppercase text-espresso/60 px-1">Delivery Address</label>
                        <input 
                          required
                          type="text" 
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full bg-paper-off border border-espresso/10 p-4 font-mono text-sm focus:border-leaf outline-none transition-colors"
                          placeholder="STREET, BUILDING, FLOOR"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase text-espresso/60 px-1">City</label>
                        <input 
                          required
                          type="text" 
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full bg-paper-off border border-espresso/10 p-4 font-mono text-sm focus:border-leaf outline-none transition-colors"
                          placeholder="ECO CITY"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase text-espresso/60 px-1">ZIP / Postal Code</label>
                        <input 
                          required
                          type="text" 
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                          className="w-full bg-paper-off border border-espresso/10 p-4 font-mono text-sm focus:border-leaf outline-none transition-colors"
                          placeholder="00000"
                        />
                      </div>
                    </div>

                    <button type="submit" className="w-full py-5 bg-espresso text-paper font-stencil uppercase tracking-[0.2em] hover:bg-leaf transition-all flex items-center justify-center gap-3 group mt-8">
                      Proceed to Payment
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handlePaymentSubmit} className="space-y-8">
                    <div className="flex items-center gap-3 text-espresso/40 mb-2">
                      <CreditCard size={20} />
                      <h2 className="font-stencil uppercase tracking-widest">Payment Gateway</h2>
                    </div>

                    <div className="p-6 bg-leaf/5 border border-leaf/20 rounded-lg flex items-center gap-4 mb-8">
                      <ShieldCheck className="text-leaf" />
                      <p className="font-mono text-xs text-espresso/60 italic">Your transaction is encrypted with 256-bit SSL security. We never store your full card details.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase text-espresso/60 px-1">Card Number</label>
                        <div className="relative">
                          <input 
                            required
                            type="text" 
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={(e) => {
                              // Simple card formatting
                              const val = e.target.value.replace(/\D/g, '').substring(0, 16);
                              const formatted = val.match(/.{1,4}/g)?.join(' ') || val;
                              setFormData(prev => ({ ...prev, cardNumber: formatted }));
                            }}
                            className="w-full bg-paper-off border border-espresso/10 p-4 font-mono text-sm focus:border-leaf outline-none transition-colors"
                            placeholder="0000 0000 0000 0000"
                          />
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 opacity-30 grayscale hover:grayscale-0 transition-all">
                            <div className="w-8 h-5 bg-espresso rounded-sm" />
                            <div className="w-8 h-5 bg-leaf rounded-sm" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block font-mono text-[10px] uppercase text-espresso/60 px-1">Expiry Date</label>
                          <input 
                            required
                            type="text" 
                            name="expiry"
                            value={formData.expiry}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '').substring(0, 4);
                              const formatted = val.length >= 2 ? val.substring(0, 2) + '/' + val.substring(2) : val;
                              setFormData(prev => ({ ...prev, expiry: formatted }));
                            }}
                            className="w-full bg-paper-off border border-espresso/10 p-4 font-mono text-sm focus:border-leaf outline-none transition-colors"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block font-mono text-[10px] uppercase text-espresso/60 px-1">CVV</label>
                          <input 
                            required
                            type="password" 
                            name="cvv"
                            value={formData.cvv}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '').substring(0, 3);
                              setFormData(prev => ({ ...prev, cvv: val }));
                            }}
                            className="w-full bg-paper-off border border-espresso/10 p-4 font-mono text-sm focus:border-leaf outline-none transition-colors"
                            placeholder="***"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-8">
                      <button 
                        type="button" 
                        onClick={() => setStep('shipping')}
                        className="flex-shrink-0 px-8 py-5 border border-espresso/10 font-mono text-[10px] uppercase tracking-widest hover:bg-paper-off transition-colors"
                      >
                        Back
                      </button>
                      <button 
                        disabled={isProcessing}
                        type="submit" 
                        className="flex-grow py-5 bg-leaf text-paper font-stencil uppercase tracking-[0.2em] hover:bg-espresso transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="animate-spin" size={20} />
                            Authorizing...
                          </>
                        ) : (
                          <>
                            Pay ${total}
                            <ShieldCheck size={20} className="group-hover:scale-110 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Summary Side */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div className="bg-espresso text-paper p-8 border border-espresso shadow-layered">
                  <h3 className="font-stencil uppercase text-xl mb-6 pb-4 border-b border-paper/10">Order Manifest</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between font-mono text-xs uppercase">
                      <span className="text-paper/40">The Sovereign Throne</span>
                      <span>$450</span>
                    </div>
                    <div className="flex justify-between font-mono text-xs uppercase">
                      <span className="text-paper/40">Geometric Desk (x2)</span>
                      <span>$70</span>
                    </div>
                    <div className="flex justify-between font-mono text-xs uppercase border-t border-paper/10 pt-4">
                      <span className="text-paper/40">Packaging & Shipping</span>
                      <span>$15</span>
                    </div>
                    <div className="flex justify-between font-stencil text-2xl uppercase pt-4">
                      <span>Total Due</span>
                      <span className="text-leaf">${total}</span>
                    </div>
                  </div>

                  {step === 'payment' && (
                    <div className="space-y-4 pt-6 border-t border-paper/10">
                      <h4 className="font-mono text-[10px] uppercase text-paper/40 tracking-widest">Shipping to:</h4>
                      <div className="font-mono text-xs space-y-1">
                        <p className="font-bold">{formData.name}</p>
                        <p className="text-paper/60">{formData.address}</p>
                        <p className="text-paper/60">{formData.city}, {formData.zip}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 bg-cardboard/10 border border-espresso/5 font-mono text-[9px] uppercase tracking-tighter text-espresso/40 leading-relaxed">
                  Notice: This is a secure checkout simulation. No real funds will be deducted from your account. Greenfold uses 100% recycled data packets for this transaction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
