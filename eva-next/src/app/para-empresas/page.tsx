import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SegmentPage from "@/components/eden/pages/SegmentPage";
import { SEGMENTS } from "@/components/eden/pages/segments";

const SEGMENT = SEGMENTS.empresas;

export const metadata: Metadata = pageMeta({
  path: SEGMENT.path,
  og: "para-empresas",
  title: "IA para empresas: atendimento e vendas no WhatsApp · Eva",
  description:
    "A Eva IA atende, vende e agenda no WhatsApp, Instagram e telefone, consulta os seus sistemas e deixa o funil pronto para a equipe. No ar em 24 horas.",
});

const FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SEGMENT.faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={FAQ} />
      <SegmentPage segment="empresas" />
    </>
  );
}
