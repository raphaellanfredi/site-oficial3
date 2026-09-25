import type { Metadata } from "next";
import AboutPage from "@/components/eden/pages/AboutPage";

export const metadata: Metadata = {
  title: "Sobre · Eva Inteligência",
  description:
    "Fundada em 2024 com 8 anos de experiência dos fundadores, a Eva é o assistente perfeito: o braço direito do empresário, da clínica e do escritório, com clientes em 5 países.",
};

export default function Page() {
  return <AboutPage />;
}
