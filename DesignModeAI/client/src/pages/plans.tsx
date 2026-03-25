import { Navbar } from "@/components/eva/Navbar";
import { PlansHero } from "@/components/eva/plans/PlansHero";
import { PlansCards } from "@/components/eva/plans/PlansCards";
import { PlansFAQ } from "@/components/eva/plans/PlansFAQ";
import { FinalCTA } from "@/components/eva/FinalCTA";
import { Footer } from "@/components/eva/Footer";

export default function Plans() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <PlansHero />
        <PlansCards />
        <PlansFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
