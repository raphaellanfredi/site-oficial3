import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import EvaIaPage from "@/components/eden/pages/EvaIaPage";

export const metadata: Metadata = pageMeta({
  path: "/eva-ia/",
  og: "eva-ia",
  title: "Eva IA · Eva Inteligência",
  description:
    "A inteligência por trás da Eva: atende o seu cliente, ajuda a sua equipe e trabalha para você no painel. Pergunte à sua operação e receba relatórios com dados reais.",
});

export default function Page() {
  return <EvaIaPage />;
}
