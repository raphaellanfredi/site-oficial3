import { Navbar } from "@/components/eva/Navbar";
import { Hero } from "@/components/eva/Hero";
import { WhyEva } from "@/components/eva/WhyEva";
import { EvaAnswers } from "@/components/eva/EvaAnswers";
import { EvaCaptain } from "@/components/eva/EvaCaptain";
import { Security } from "@/components/eva/Security";
import { CTA } from "@/components/eva/CTA";
import { Footer } from "@/components/eva/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#050816]">
      <Navbar />
      <main>
        <Hero />
        <WhyEva />
        <EvaAnswers />
        <EvaCaptain />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
