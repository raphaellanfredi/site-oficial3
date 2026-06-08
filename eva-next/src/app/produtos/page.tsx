import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FinalCTA from "@/components/shared/FinalCTA";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsChannels from "@/components/products/ProductsChannels";
import ProductsCRM from "@/components/products/ProductsCRM";
import ProductsAutomation from "@/components/products/ProductsAutomation";
import ProductsSecurity from "@/components/products/ProductsSecurity";
import ProductsIntegrations from "@/components/products/ProductsIntegrations";
import ProductsPlatform from "@/components/products/ProductsPlatform";

export const metadata = {
  title: "Produto — Eva Inteligência",
  description: "IA omnichannel completa: todos os canais, CRM, automação e segurança enterprise.",
};

export default function ProductsPage() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <ProductsHero />
      <ProductsChannels />
      <ProductsCRM />
      <ProductsAutomation />
      <ProductsSecurity />
      <ProductsIntegrations />
      <ProductsPlatform />
      <FinalCTA />
      <Footer />
    </div>
  );
}
