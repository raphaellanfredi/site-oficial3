import type { Metadata } from "next";
import PlansPage from "@/components/eden/pages/PlansPage";

export const metadata: Metadata = {
  title: "Planos · Eva Inteligência",
  description:
    "Eva One, PRO e BLACK a partir de R$ 998/mês. Sem fidelidade, implantação em até 12x, no ar em 24 horas ou a implantação é por nossa conta.",
};

export default function Page() {
  return <PlansPage />;
}
