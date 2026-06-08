import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AffiliatesHero from "@/components/affiliates/AffiliatesHero";
import AffiliatesStory from "@/components/affiliates/AffiliatesStory";
import AffiliatesOpportunity from "@/components/affiliates/AffiliatesOpportunity";
import AffiliatesCommissions from "@/components/affiliates/AffiliatesCommissions";
import AffiliatesHowItWorks from "@/components/affiliates/AffiliatesHowItWorks";
import AffiliatesTestimonial from "@/components/affiliates/AffiliatesTestimonial";
import AffiliatesFinalCTA from "@/components/affiliates/AffiliatesFinalCTA";

export const metadata = {
  title: "Afiliados — Eva Inteligência",
  description: "Seja afiliado Eva e ganhe comissão vitalícia indicando a melhor IA para empresas.",
};

export default function AffiliatesPage() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <AffiliatesHero />
      <AffiliatesStory />
      <AffiliatesOpportunity />
      <AffiliatesCommissions />
      <AffiliatesHowItWorks />
      <AffiliatesTestimonial />
      <AffiliatesFinalCTA />
      <Footer />
    </div>
  );
}
