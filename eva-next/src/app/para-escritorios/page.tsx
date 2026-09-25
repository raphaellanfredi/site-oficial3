import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SegmentPage from "@/components/eden/pages/SegmentPage";
import { SEGMENTS } from "@/components/eden/pages/segments";

const SEGMENT = SEGMENTS.escritorios;

export const metadata: Metadata = pageMeta({
  path: SEGMENT.path,
  og: "para-escritorios",
  title: "IA para escritórios de advocacia e contabilidade · Eva",
  description:
    "A Eva IA recebe o cliente, faz a triagem, encaminha para a área certa e marca a reunião. Advocacia, contabilidade e consultoria. No ar em 24 horas.",
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
      <SegmentPage segment="escritorios" />
    </>
  );
}
