import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import EdenHome from "@/components/eden/EdenHome";
import JsonLd from "@/components/seo/JsonLd";
import { GOOGLE_PROFILE, INSTAGRAM } from "@/components/eden/site";
import { SITE_URL } from "@/lib/seo";
import { ARTICLES, articleCard } from "@/content/articles";

export const metadata: Metadata = pageMeta({
  path: "/",
  og: "home",
  title: "Eva Inteligência · Enquanto você vive, a Eva trabalha",
  description:
    "Inteligência artificial de atendimento no WhatsApp, Instagram, e-mail e telefone. Montada pela Eva IA, validada por especialistas, no ar em 24 horas ou a implantação é por nossa conta.",
});

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Eva Inteligência",
  legalName: "EVA SERVICOS E TECNOLOGIA DA INFORMACAO LTDA",
  taxID: "67.792.163/0001-25",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Walfrido Rey, 451",
    addressLocality: "São José do Rio Preto",
    addressRegion: "SP",
    postalCode: "15061-530",
    addressCountry: "BR",
  },
  url: SITE_URL,
  logo: `${SITE_URL}/logo-eva.png`,
  foundingDate: "2024",
  description:
    "Inteligência artificial de atendimento no WhatsApp, Instagram, e-mail e telefone, montada pela Eva IA e validada por especialistas.",
  sameAs: [INSTAGRAM, GOOGLE_PROFILE],
  contactPoint: [
    { "@type": "ContactPoint", contactType: "sales", telephone: "+55-11-96116-3777", availableLanguage: "Portuguese" },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+55-21-99392-4639",
      email: "suporte@evainteligencia.com.br",
      availableLanguage: "Portuguese",
      hoursAvailable: { "@type": "OpeningHoursSpecification", opens: "00:00", closes: "23:59" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={ORGANIZATION} />
      <EdenHome reading={ARTICLES.map(articleCard)} />
    </>
  );
}
