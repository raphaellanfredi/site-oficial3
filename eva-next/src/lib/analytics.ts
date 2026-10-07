// Google Analytics 4 and the Meta Pixel. The IDs come from the build
// environment (deploy.yml: NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_META_PIXEL_ID).
// With no ID, the matching calls are no-ops and nothing is loaded, so local
// builds never reach either report.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

export const WHATSAPP_COMERCIAL = "5511961163777";
export const WHATSAPP_SUPORTE = "5521993924639";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** The site's events that are also conversions for Meta ads. */
function metaEvent(event: string, params: Params): [string, Params] | null {
  if (event === "whatsapp_click" && params.tipo === "comercial") return ["Contact", {}];
  if (event === "ir_para_pagamento")
    return ["InitiateCheckout", { value: params.value, currency: "BRL", content_name: params.plano }];
  if (event === "onboarding_concluido") return ["CompleteRegistration", {}];
  return null;
}

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  if (GA_ID && window.gtag) window.gtag("event", event, params);
  const meta = metaEvent(event, params);
  if (meta && window.fbq) window.fbq("track", meta[0], meta[1]);
}

/**
 * Loads the Meta Pixel. Called only once the visitor has accepted cookies;
 * the Pixel then sends PageView, including on in-app navigation.
 */
export function loadMetaPixel() {
  if (!META_PIXEL_ID || typeof window === "undefined" || window.fbq) return;
  // Same stub as Meta's official snippet: calls queue until fbevents.js
  // loads and takes over through callMethod.
  type Fbq = ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    queue: unknown[][];
    loaded: boolean;
    version: string;
    push: Fbq;
  };
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  window.fbq = fbq;
  (window as unknown as { _fbq: Fbq })._fbq = fbq;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  fbq("init", META_PIXEL_ID);
  fbq("track", "PageView");
}

// Versioned: the first key only covered analytics. Since the Meta Pixel,
// everyone is asked again, for analytics and ad measurement together.
export const CONSENT_KEY = "eva_consent_v2";

export type Consent = "granted" | "denied";

export function readConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Private mode or blocked storage: the choice lasts for this page only.
  }
  window.gtag?.("consent", "update", { analytics_storage: value });
  if (value === "granted") loadMetaPixel();
}
