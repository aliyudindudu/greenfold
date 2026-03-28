import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ShoppingBag, Eye, Filter } from 'lucide-react';
import Link from 'next/link';

const allProducts = [
  { id: 1, name: 'Geometric Lamp', category: 'Decor', price: '$45' },
  { id: 2, name: 'Cat House', category: 'Pets', price: '$85' },
  { id: 3, name: 'Desk Organizer', category: 'Office', price: '$35' },
  { id: 4, name: 'Eco Chair', category: 'Furniture', price: '$120' },
  { id: 5, name: 'Wall Art Set', category: 'Decor', price: '$65' },
  { id: 6, name: 'Toy Rocket', category: 'Kids', price: '$55' },
  { id: 7, name: 'Bookshelf Unit', category: 'Furniture', price: '$150' },
  { id: 8, name: 'Pendant Light', category: 'Decor', price: '$75' },
  { id: 9, name: 'Laptop Stand', category: 'Office', price: '$40' },
  { id: 10, name: 'Pet Bed S', category: 'Pets', price: '$60' },
  { id: 11, name: 'Abstract Frame', category: 'Decor', price: '$30' },
  { id: 12, name: 'Castle Play House', category: 'Kids', price: '$110' },
];

const categories = ['All', 'Decor', 'Furniture', 'Office', 'Pets', 'Kids'];

export default function CraftsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-paper overflow-x-hidden">
      <div className="texture-grain pointer-events-none fixed inset-0 z-50 mix-blend-multiply opacity-[0.03]" />
      
      <Navbar />

      {/* Hero Section / Header */}
      <section className="pt-32 pb-16 px-6 bg-paper-off border-b border-espresso/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <nav className="flex items-center gap-2 mb-6 text-xs font-mono uppercase text-espresso/40">
                <Link href="/" className="hover:text-leaf transition-colors">Home</Link>
                <span>/</span>
                <span className="text-espresso">All Crafts</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-stencil text-espresso mb-6 uppercase leading-none">
                The Full <span className="text-leaf">Inventory</span>
              </h1>
              <p className="text-lg font-mono text-espresso/70">
                Explore our complete collection of handmade, upcycled cardboard wonders. 
                From functional furniture to whimsical toys, every piece is a testament to 
                circular design and creative sustainability.
              </p>
            </div>
            
            {/* Filter Controls (Static for now) */}
            <div className="w-full md:w-auto flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border border-espresso/20 hover:border-leaf hover:text-leaf transition-all ${cat === 'All' ? 'bg-espresso text-paper border-espresso' : 'bg-transparent text-espresso/60'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allProducts.map((product) => (
              <div 
                key={product.id}
                className="group relative flex flex-col bg-cardboard/5 rounded-none border border-cardboard-light/20 p-4 transition-all hover:shadow-cardboard-hover hover:-translate-y-1"
              >
                {/* Product Image Placeholder */}
                <div className="relative aspect-square mb-6 overflow-hidden bg-cardboard/20 border-2 border-espresso/10">
                  <div className="absolute inset-0 flex items-center justify-center text-espresso/20 font-stencil text-xl rotate-45 select-none text-center px-4">
                    GF-CATALOG-P00{product.id}
                  </div>
                  
                  {/* Actions Overlay */}
                  <div className="absolute inset-0 bg-espresso/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-3">
                    <button className="w-10 h-10 bg-paper text-espresso rounded-full flex items-center justify-center hover:bg-leaf hover:text-paper transition-colors">
                      <Eye size={18} />
                    </button>
                    <button className="w-10 h-10 bg-paper text-espresso rounded-full flex items-center justify-center hover:bg-leaf hover:text-paper transition-colors">
                      <ShoppingBag size={18} />
                    </button>
                  </div>

                  {/* Stock Indicator */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-leaf text-paper text-[8px] font-mono uppercase tracking-tighter">
                    In Stock
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-leaf font-bold">
                      {product.category}
                    </span>
                    <span className="text-lg font-stencil text-espresso">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-stencil text-espresso uppercase mb-4 tracking-tight leading-tight">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto pt-4 border-t border-espresso/10 flex justify-between items-center text-[10px] font-mono text-espresso/40 uppercase">
                    <span>GF-2026-0{product.id}</span>
                    <button className="hover:text-espresso transition-colors">
                      <Heart size={14} />
                    </button>
                  </div>
                </div>

                {/* Cardboard Edge Detail */}
                <div className="absolute top-0 right-0 w-6 h-6 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 right-0 w-[141%] h-[141%] bg-cardboard/10 rotate-45 translate-x-1/2 -translate-y-1/2 border-b-2 border-l-2 border-espresso/10" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-20 flex justify-center items-center gap-4 font-mono text-sm">
            <button className="p-2 border border-espresso/20 text-espresso/40 cursor-not-allowed">PREV</button>
            <span className="px-4 py-2 bg-espresso text-paper border border-espresso">01</span>
            <button className="px-4 py-2 border border-espresso/20 hover:border-leaf hover:text-leaf transition-colors">02</button>
            <button className="px-4 py-2 border border-espresso/20 hover:border-leaf hover:text-leaf transition-colors">03</button>
            <button className="p-2 border border-espresso/20 hover:border-leaf hover:text-leaf transition-colors">NEXT</button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Decorative Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-cardboard/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-leaf/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#3E2723_1px,transparent_1px),linear-gradient(to_bottom,#3E2723_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
    </main>
  );
}
