import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ClubPage from "@/components/eden/pages/ClubPage";

export const metadata: Metadata = pageMeta({
  path: "/eva-club/",
  og: "eva-club",
  title: "Eva Club · Eva Inteligência",
  description:
    "Acesso antecipado, suporte direto com resposta em até 1 hora, comunidade, treinamento toda terça e quinta e 50% de desconto em novos produtos. Todo cliente Eva é membro.",
});

export default function Page() {
  return <ClubPage />;
}
