import { useEffect, useRef } from "react";

const INTEGRATIONS = [
  { icon: "📅", label: "Google Agenda" },
  { icon: "💰", label: "Asaas" },
  { icon: "💳", label: "PagarMe" },
  { icon: "🏦", label: "Conta Azul" },
  { icon: "🛍️", label: "Shopify" },
  { icon: "🛒", label: "WooCommerce" },
  { icon: "⚙️", label: "N8N" },
  { icon: "⚡", label: "Zapier" },
  { icon: "📋", label: "Linear" },
  { icon: "📝", label: "Notion" },
  { icon: "💬", label: "Slack" },
  { icon: "📦", label: "Correios" },
  { icon: "🔗", label: "API REST" },
];

export function ProductsIntegrations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#0a0a0a", padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2
          className="fade-up text-center text-white font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Integra com o que você já usa.
        </h2>

        <p
          className="fade-up text-center mx-auto"
          style={{
            color: "#999",
            fontSize: "1.125rem",
            maxWidth: "560px",
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.6,
            marginBottom: "64px",
          }}
        >
          A Eva se conecta ao seu ecossistema de ferramentas.
          Sem trocar o que já funciona.
        </p>

        {/* Pills */}
        <div
          className="flex flex-wrap justify-center gap-4 fade-up"
          style={{ marginBottom: "48px" }}
        >
          {INTEGRATIONS.map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "100px",
                padding: "12px 24px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "default",
                transition: "all 0.2s ease",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#FF0080";
                el.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "scale(1)";
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
              <span
                style={{
                  color: "white",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p
          className="fade-up text-center"
          style={{
            color: "#999",
            fontSize: "1.125rem",
            fontFamily: "'Inter', sans-serif",
            marginBottom: "48px",
          }}
        >
          E milhares de outras plataformas via API e integrações nativas.
        </p>

        <div className="fade-up flex justify-center">
          <button
            className="btn-outline px-8 py-4 text-sm"
            style={{ borderRadius: "8px" }}
            onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
          >
            Ver documentação de integrações
          </button>
        </div>
      </div>
    </section>
  );
}
