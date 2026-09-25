"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  GA_ID,
  WHATSAPP_COMERCIAL,
  WHATSAPP_SUPORTE,
  readConsent,
  saveConsent,
  track,
} from "@/lib/analytics";

const PRIVACY_URL =
  "https://app.evainteligencia.com.br/hc/central-de-ajuda/articles/1756986596-politica-de-priva";

// Consent Mode v2: nothing is stored on the visitor's device until they
// accept. Ads storage stays denied; the site does not run ad tags.
const bootstrap = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var stored = null;
try { stored = localStorage.getItem("eva_consent_analytics"); } catch (e) {}
gtag("consent", "default", {
  analytics_storage: stored === "granted" ? "granted" : "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied"
});
gtag("js", new Date());
gtag("config", "${GA_ID}");
`;

// One listener for the whole site: every WhatsApp and payment link is
// tracked wherever it appears, without touching each component.
function handleClick(e: MouseEvent) {
  const link = (e.target as Element | null)?.closest?.("a[href]");
  if (!link) return;
  const href = link.getAttribute("href") ?? "";
  const pagina = window.location.pathname;

  if (href.includes("wa.me/")) {
    const tipo = href.includes(WHATSAPP_SUPORTE)
      ? "suporte"
      : href.includes(WHATSAPP_COMERCIAL)
        ? "comercial"
        : "outro";
    track("whatsapp_click", { tipo, pagina, texto: link.textContent?.trim().slice(0, 60) });
  } else if (href.includes("asaas.com/")) {
    const el = link as HTMLElement;
    track("ir_para_pagamento", {
      plano: el.dataset.plan,
      parcelas: Number(el.dataset.installments) || undefined,
      value: Number(el.dataset.value) || undefined,
      currency: "BRL",
    });
  }
}

export default function Analytics() {
  const [askConsent, setAskConsent] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    setAskConsent(readConsent() === null);
    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  if (!GA_ID) return null;

  function choose(value: "granted" | "denied") {
    saveConsent(value);
    setAskConsent(false);
  }

  return (
    <>
      <Script id="ga-bootstrap" strategy="afterInteractive">
        {bootstrap}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      {askConsent && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies"
          style={{
            position: "fixed",
            left: "16px",
            right: "16px",
            bottom: "calc(16px + env(safe-area-inset-bottom))",
            zIndex: 1000,
            maxWidth: "560px",
            margin: "0 auto",
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "14px",
            boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
            padding: "16px 18px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px 16px",
          }}
        >
          <p style={{ flex: "1 1 260px", fontSize: "14px", lineHeight: 1.5, color: "var(--ink-2)" }}>
            Usamos cookies de análise para entender como o site é usado e melhorá-lo.{" "}
            <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)", textDecoration: "underline" }}>
              Política de Privacidade
            </a>
          </p>
          <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
            <button
              type="button"
              onClick={() => choose("denied")}
              style={{
                padding: "10px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(0,0,0,0.12)",
                background: "#fff",
                color: "var(--ink-2)",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              style={{
                padding: "10px 16px",
                borderRadius: "10px",
                border: "none",
                background: "var(--gradient-action)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Aceitar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
