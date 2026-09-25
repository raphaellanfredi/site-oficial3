import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Analytics from "@/components/shared/Analytics";
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

export const metadata: Metadata = {
  title: "Eva Inteligência",
  description:
    "IA omnichannel para empresas. Atendimento 24h no WhatsApp, Instagram, E-mail e Telefone.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
