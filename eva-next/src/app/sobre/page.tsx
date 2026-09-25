import type { Metadata } from "next";
import AboutPage from "@/components/eden/pages/AboutPage";

export const metadata: Metadata = {
  title: "Sobre · Eva Inteligência",
  description:
    "Eva, a primeira a colher o conhecimento. Mais de 300 empresas e 20 milhões de atendimentos. Implantação em 24 horas, validação e 90 dias de acompanhamento.",
};

export default function Page() {
  return <AboutPage />;
}
