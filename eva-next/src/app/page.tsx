import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import EdenHome from "@/components/eden/EdenHome";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

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
  url: SITE_URL,
  logo: `${SITE_URL}/logo-eva.png`,
  foundingDate: "2024",
  description:
    "Inteligência artificial de atendimento no WhatsApp, Instagram, e-mail e telefone, montada pela Eva IA e validada por especialistas.",
  sameAs: ["https://www.instagram.com/eva.inteligencia.art/"],
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
      <EdenHome />
    </>
  );
}
