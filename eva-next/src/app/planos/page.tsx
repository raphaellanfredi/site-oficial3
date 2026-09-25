import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PlansPage from "@/components/eden/pages/PlansPage";
import JsonLd from "@/components/seo/JsonLd";
import { PLANS } from "@/components/checkout/checkout-data";
import { PLANS_FAQ } from "@/components/eden/pages/plansFaq";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/planos/",
  og: "planos",
  title: "Planos · Eva Inteligência",
  description:
    "Eva One, PRO e BLACK a partir de R$ 998/mês. Sem fidelidade, implantação em até 12x, no ar em 24 horas ou a implantação é por nossa conta.",
});

const PRODUCT = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Eva · Inteligência artificial de atendimento",
  brand: { "@type": "Brand", name: "Eva Inteligência" },
  description: "Agente de IA, CRM, automação e gestão em oito canais. No ar em 24 horas.",
  image: `${SITE_URL}/og/planos.png`,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "BRL",
    lowPrice: Math.min(...PLANS.map((p) => p.monthly)),
    highPrice: Math.max(...PLANS.map((p) => p.monthly)),
    offerCount: PLANS.length,
    offers: PLANS.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.monthly,
      priceCurrency: "BRL",
      url: `${SITE_URL}/checkout/?plano=${p.key}`,
      availability: "https://schema.org/InStock",
      priceSpecification: { "@type": "UnitPriceSpecification", price: p.monthly, priceCurrency: "BRL", unitText: "MONTH" },
    })),
  },
};

const FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PLANS_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={PRODUCT} />
      <JsonLd data={FAQ} />
      <PlansPage />
    </>
  );
}
