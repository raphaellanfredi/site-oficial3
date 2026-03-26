import { Navbar } from "@/components/eva/Navbar";
import { Hero } from "@/components/eva/Hero";
import { Solution } from "@/components/eva/Solution";
import { HowItWorks } from "@/components/eva/HowItWorks";
import { Results } from "@/components/eva/Results";
import { Testimonials } from "@/components/eva/Testimonials";
import { Plans } from "@/components/eva/Plans";
import { EvaClub } from "@/components/eva/EvaClub";
import { Affiliates } from "@/components/eva/Affiliates";
import { FinalCTA } from "@/components/eva/FinalCTA";
import { Footer } from "@/components/eva/Footer";
import { ChatSimulator } from "@/components/eva/ChatSimulator";
import { DoresSection } from "@/components/eva/DoresSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <ChatSimulator />
        <DoresSection />
        <Solution />
        <HowItWorks />
        <Results />
        <Testimonials />
        <Plans />
        <EvaClub />
        <Affiliates />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
