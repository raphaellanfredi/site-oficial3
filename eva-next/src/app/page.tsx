import type { Metadata } from "next";
import EdenHome from "@/components/eden/EdenHome";

export const metadata: Metadata = {
  title: "Eva Inteligência · Enquanto você vive, a Eva trabalha",
  description:
    "Inteligência artificial de atendimento no WhatsApp, Instagram, e-mail e telefone. Montada pela Eva IA, validada por especialistas, no ar em 24 horas ou a implantação é por nossa conta.",
};

export default function Home() {
  return <EdenHome />;
}
