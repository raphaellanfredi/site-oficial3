import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ArticlesPage from "@/components/eden/pages/ArticlesPage";
import { ARTICLES, articleCard } from "@/content/articles";

export const metadata: Metadata = pageMeta({
  path: "/conteudo/",
  og: "conteudo",
  title: "Conteúdo · Guias de atendimento e IA · Eva Inteligência",
  description:
    "Guias práticos para atender melhor, vender mais e perder menos clientes no WhatsApp, com e sem inteligência artificial. Para empresários, clínicas e escritórios.",
});

export default function Page() {
  return <ArticlesPage articles={ARTICLES.map(articleCard)} />;
}
