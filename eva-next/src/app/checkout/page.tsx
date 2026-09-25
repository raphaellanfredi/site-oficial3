import { Suspense } from "react";
import { Metadata } from "next";
import CheckoutPage from "@/components/checkout/CheckoutPage";

export const metadata: Metadata = {
  title: "Checkout — Eva Inteligência",
  description: "Finalize sua contratação e receba sua IA em 24 horas.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense>
      <CheckoutPage />
    </Suspense>
  );
}
