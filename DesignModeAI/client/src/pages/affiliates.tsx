import { Navbar } from "@/components/eva/Navbar";
import { AffiliatesHero } from "@/components/eva/affiliates/AffiliatesHero";
import { AffiliatesStory } from "@/components/eva/affiliates/AffiliatesStory";
import { AffiliatesOpportunity } from "@/components/eva/affiliates/AffiliatesOpportunity";
import { AffiliatesCommissions } from "@/components/eva/affiliates/AffiliatesCommissions";
import { AffiliatesHowItWorks } from "@/components/eva/affiliates/AffiliatesHowItWorks";
import { AffiliatesTestimonial } from "@/components/eva/affiliates/AffiliatesTestimonial";
import { AffiliatesFinalCTA } from "@/components/eva/affiliates/AffiliatesFinalCTA";
import { Footer } from "@/components/eva/Footer";

export default function Affiliates() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <AffiliatesHero />
        <AffiliatesStory />
        <AffiliatesOpportunity />
        <AffiliatesCommissions />
        <AffiliatesHowItWorks />
        <AffiliatesTestimonial />
        <AffiliatesFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
