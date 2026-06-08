import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FinalCTA from "@/components/shared/FinalCTA";
import PlansHero from "@/components/plans/PlansHero";
import PlansCards from "@/components/plans/PlansCards";
import PlansFAQ from "@/components/plans/PlansFAQ";

export const metadata = {
  title: "Planos — Eva Inteligência",
  description: "Escolha o plano ideal para o seu negócio. Implantação em 7 dias, sem programação.",
};

export default function PlansPage() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <PlansHero />
      <PlansCards />
      <PlansFAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
