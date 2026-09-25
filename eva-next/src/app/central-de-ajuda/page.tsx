import type { Metadata } from "next";
import HelpCenterPage from "@/components/eden/pages/HelpCenterPage";

export const metadata: Metadata = {
  title: "Central de Ajuda própria · Eva Inteligência",
  description:
    "Cada conta Eva ganha um portal público de ajuda com categorias, artigos e busca. E cada artigo publicado ensina a IA.",
};

export default function Page() {
  return <HelpCenterPage />;
}
