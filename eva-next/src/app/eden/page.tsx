import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import EdenHome from "@/components/eden/EdenHome";

// Serif for the chapter verses ("No princípio, era o caos.").
const verse = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-verse",
  display: "swap",
});

// Concept preview of the new home. Not linked and kept out of search engines
// until it is approved.
export const metadata: Metadata = {
  title: "Eva · Gênesis",
  description: "Enquanto você vive, a Eva trabalha. Inteligência artificial de atendimento, no ar em 24 horas.",
  robots: { index: false, follow: false },
};

export default function EdenPage() {
  return <EdenHome verseFont={verse.variable} />;
}
