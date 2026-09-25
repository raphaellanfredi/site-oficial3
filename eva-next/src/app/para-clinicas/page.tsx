import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SegmentPage from "@/components/eden/pages/SegmentPage";
import { SEGMENTS } from "@/components/eden/pages/segments";

const SEGMENT = SEGMENTS.clinicas;

export const metadata: Metadata = pageMeta({
  path: SEGMENT.path,
  og: "para-clinicas",
  title: "IA para clínicas: atendimento e agenda no WhatsApp · Eva",
  description:
    "A Eva IA atende o paciente no WhatsApp, Instagram e telefone, marca a consulta na agenda e confirma no dia com o Anti No Show. No ar em 24 horas.",
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
      <SegmentPage segment="clinicas" />
    </>
  );
}
