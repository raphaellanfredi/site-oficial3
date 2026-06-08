import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FinalCTA from "@/components/shared/FinalCTA";
import HeroVideo from "@/components/HeroVideo";
import PinnedFeatures from "@/components/PinnedFeatures";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Solution";
import HowItWorks from "@/components/home/HowItWorks";
import Numbers from "@/components/home/Numbers";
import Testimonials from "@/components/home/Testimonials";
import EvaClubTeaser from "@/components/home/EvaClubTeaser";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <HeroVideo />
      <PinnedFeatures />
      <Problem />
      <Solution />
      <HowItWorks />
      <Numbers />
      <Testimonials />
      <EvaClubTeaser />
      <FinalCTA />
      <Footer />
    </div>
  );
}
