import type { Metadata } from "next";
import SupportPage from "@/components/eden/pages/SupportPage";

export const metadata: Metadata = {
  title: "Suporte · Eva Inteligência",
  description:
    "Primeira resposta em até 1 hora, 15 minutos com a operação parada. WhatsApp e telefone 24h, e-mail, EvaClub e treinamento toda terça e quinta.",
};

export default function Page() {
  return <SupportPage />;
}
