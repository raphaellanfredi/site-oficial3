import type { Metadata } from "next";
import ProductsPage from "@/components/eden/pages/ProductsPage";

export const metadata: Metadata = {
  title: "Produto · Eva Inteligência",
  description:
    "Agente de IA que resolve, CRM nativo, automação, agenda e gestão da equipe em oito canais, numa tela só. No ar em 24 horas.",
};

export default function Page() {
  return <ProductsPage />;
}
