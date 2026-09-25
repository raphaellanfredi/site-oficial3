import type { Metadata } from "next";
import PartnersPage from "@/components/eden/pages/PartnersPage";

export const metadata: Metadata = {
  title: "Parceiros · Eva Inteligência",
  description:
    "Revenda a Eva com a sua marca: planos e preços próprios, cobrança recorrente, suspensão automática e painel de administração.",
};

export default function Page() {
  return <PartnersPage />;
}
