// Google Analytics 4. The measurement ID comes from the build environment
// (GitHub repository variable GA_MEASUREMENT_ID → NEXT_PUBLIC_GA_ID). With no
// ID, every call here is a no-op and nothing is loaded.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const WHATSAPP_COMERCIAL = "5511961163777";
export const WHATSAPP_SUPORTE = "5521993924639";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Params = {}) {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}

const CONSENT_KEY = "eva_consent_analytics";

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
}
