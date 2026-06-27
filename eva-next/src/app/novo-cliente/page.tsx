import type { Metadata } from "next";
import OnboardingWizard from "@/components/onboarding/OnboardingWizard";

export const metadata: Metadata = {
  title: "Configuração do Agente — Eva Inteligência",
  robots: { index: false, follow: false },
};

export default function NovoClientePage() {
  return <OnboardingWizard />;
}
