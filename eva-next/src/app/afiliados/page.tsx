import type { Metadata } from "next";
import AffiliatesPage from "@/components/eden/pages/AffiliatesPage";

export const metadata: Metadata = {
  title: "Afiliados · Eva Inteligência",
  description:
    "Indique a Eva e receba comissão recorrente de 5% a 30%, bônus de R$ 15.000 com 100 indicações ativas e 20% de desconto na implantação para quem você indicar.",
};

export default function Page() {
  return <AffiliatesPage />;
}
