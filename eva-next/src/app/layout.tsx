import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, Sora } from "next/font/google";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Analytics from "@/components/shared/Analytics";
import PageTransition from "@/components/transition/PageTransition";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

// Serif of the chapter verses ("No princípio, era o caos.").
const verse = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-verse",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Eva Inteligência · Enquanto você vive, a Eva trabalha",
  description:
    "Inteligência artificial de atendimento no WhatsApp, Instagram, e-mail e telefone. Montada pela Eva IA, validada por especialistas, no ar em 24 horas.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050806",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable} ${verse.variable}`}>
      <body className="antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <PageTransition />
        <Analytics />
      </body>
    </html>
  );
}
