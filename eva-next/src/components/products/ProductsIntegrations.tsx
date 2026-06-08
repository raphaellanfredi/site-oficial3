"use client";

import { useEffect, useRef, useState } from "react";

const integrations = [
  "Google Agenda", "Asaas", "PagarMe", "Conta Azul",
  "Shopify", "WooCommerce", "N8N", "Zapier",
  "Linear", "Notion", "Slack",
];

export default function ProductsIntegrations() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15, rootMargin: "-50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="integracoes" style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            marginBottom: "64px",
            letterSpacing: "-1.5px",
            color: "#111",
          }}
        >
          Integra com o que você já usa.
        </h2>

        <div
          ref={ref}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {integrations.map((name, i) => (
            <span
              key={name}
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                backgroundColor: "rgba(0,0,0,0.02)",
                padding: "12px 24px",
                borderRadius: "100px",
                fontSize: "15px",
                fontWeight: 500,
                color: "#444",
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(0.9)",
                transition: `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`,
              }}
            >
              {name}
            </span>
          ))}
        </div>

        <p style={{ color: "#888", fontSize: "18px" }}>
          E milhares de outras plataformas via API e integrações nativas.
        </p>
      </div>
    </section>
  );
}
