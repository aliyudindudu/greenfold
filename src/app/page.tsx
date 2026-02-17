import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Catalog from "@/components/Catalog";
import CustomOrders from "@/components/CustomOrders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-paper overflow-x-hidden">
      {/* Texture Layer (Fixed Background) */}
      <div className="texture-grain pointer-events-none fixed inset-0 z-50 mix-blend-multiply opacity-[0.03]" />
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* The Process Section */}
      <div id="process">
        <Process />
      </div>

      {/* Catalog Grid Section */}
      <div id="crafts">
        <Catalog />
      </div>

      {/* Custom Orders Form */}
      <div id="custom">
        <CustomOrders />
      </div>

      {/* Footer */}
      <Footer />

      {/* Background Decorative Elements (Parallax style layout) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Soft Cardboard Blobs */}
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-cardboard/5 rounded-full blur-[120px] -rotate-12" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-leaf/5 rounded-full blur-[150px] rotate-45" />
        
        {/* Subtle Grid Lines (Technical Look) */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#3E2723_1px,transparent_1px),linear-gradient(to_bottom,#3E2723_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </main>
  );
}
