import { Navbar } from "@/components/eva/Navbar";
import { ProductsHero } from "@/components/eva/products/ProductsHero";
import { ProductsChannels } from "@/components/eva/products/ProductsChannels";
import { ProductsCRM } from "@/components/eva/products/ProductsCRM";
import { ProductsAutomation } from "@/components/eva/products/ProductsAutomation";
import { ProductsSecurity } from "@/components/eva/products/ProductsSecurity";
import { ProductsIntegrations } from "@/components/eva/products/ProductsIntegrations";
import { FinalCTA } from "@/components/eva/FinalCTA";
import { Footer } from "@/components/eva/Footer";

export default function Products() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <ProductsHero />
        <ProductsChannels />
        <ProductsCRM />
        <ProductsAutomation />
        <ProductsSecurity />
        <ProductsIntegrations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
