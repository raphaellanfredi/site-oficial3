import { useEffect, useRef } from "react";

const PLANS = [
  {
    name: "Eva One",
    badge: "Para começar",
    badgeHighlight: false,
    description: "Ideal para quem está começando e quer profissionalizar o atendimento.",
    price: "998",
    setup: "R$ 1.853",
    features: [
      "Até 1.500 atendimentos/mês",
      "3 etapas de recuperação de cliente (follow up)",
      "Disparo de mensagens em massa com segmentação",
      "2 conexões (WhatsApp, Instagram, e-mail, etc)",
      "3 usuários",
      "CRM nativo",
      "Integração com Google Agenda",
    ],
    note: null,
    cta: "Contratar Eva One",
    highlight: false,
  },
  {
    name: "Eva PRO",
    badge: "⭐ Mais Popular",
    badgeHighlight: true,
    description: "Para negócios em crescimento que precisam de escala e mais canais.",
    price: "2.690",
    setup: "R$ 3.950",
    features: [
      "Até 3.500 atendimentos/mês",
      "7 etapas de recuperação de cliente",
      "Disparo em massa ilimitado",
      "Anti no Show (confirmação automática)",
      "5 conexões",
      "10 usuários",
      "Integração Asaas / PagarMe / Conta Azul",
      "Ligações com IA (ativa e passiva)*",
    ],
    note: "*Custo da IA de ligação é pós-pago conforme uso.",
    cta: "Contratar Eva PRO",
    highlight: true,
  },
  {
    name: "Eva BLACK",
    badge: "Máxima potência",
    badgeHighlight: false,
    description: "Potência máxima, infraestrutura dedicada e suporte premium.",
    price: "4.490",
    setup: "R$ 9.800",
    features: [
      "Servidor dedicado & infraestrutura escalável",
      "Até 15.200 atendimentos/mês",
      "Suporte Premium",
      "15 etapas de recuperação de cliente",
      "Disparo em massa ilimitado",
      "10 conexões",
      "30 usuários",
      "Integração Asaas / PagarMe / Conta Azul",
      "Ligações com IA (ativa e passiva)*",
    ],
    note: "*Custo da IA de ligação é pós-pago conforme uso.",
    cta: "Contratar Eva BLACK",
    highlight: false,
  },
];

export function PlansCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#0a0a0a", padding: "clamp(48px, 6vw, 80px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            alignItems: "start",
          }}
        >
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className="fade-up flex flex-col relative"
              style={{
                background: plan.highlight ? "#0d0d0d" : "#0a0a0a",
                border: plan.highlight
                  ? "2px solid #FF0080"
                  : "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                boxShadow: plan.highlight
                  ? "0 0 60px rgba(255,0,128,0.15), 4px 4px 0px 0px #FF0080"
                  : "4px 4px 0px 0px rgba(255,255,255,0.06)",
                zIndex: plan.highlight ? 1 : 0,
                padding: "clamp(24px, 4vw, 48px)",
              }}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-black whitespace-nowrap"
                  style={{
                    background: "linear-gradient(90deg, #FF0080, #FF6B00)",
                    color: "white",
                    borderRadius: "100px",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Non-highlight badge */}
              {!plan.highlight && (
                <div
                  className="inline-block px-3 py-1 text-xs font-semibold mb-4 self-start"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "100px",
                    color: "#999",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {plan.badge}
                </div>
              )}
              {plan.highlight && <div style={{ height: "16px" }} />}

              {/* Name */}
              <h2
                className="text-white font-black mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {plan.name}
              </h2>

              {/* Description */}
              <p
                className="mb-6"
                style={{
                  color: "#999",
                  fontSize: "1rem",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.5,
                }}
              >
                {plan.description}
              </p>

              {/* Price block */}
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "24px",
                  marginBottom: "24px",
                }}
              >
                <p
                  className="uppercase font-bold mb-2"
                  style={{
                    color: "#555",
                    fontSize: "0.7rem",
                    letterSpacing: "2px",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  MENSALIDADE
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span style={{ color: "#999", fontSize: "1.25rem", fontFamily: "'Inter', sans-serif" }}>R$</span>
                  <span
                    className="text-white font-black"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "3.5rem",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ color: "#999", fontSize: "1rem", fontFamily: "'Inter', sans-serif" }}>/mês</span>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: "16px" }} />
                <p
                  className="uppercase font-bold mb-1"
                  style={{
                    color: "#555",
                    fontSize: "0.7rem",
                    letterSpacing: "2px",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  IMPLANTAÇÃO (SETUP)
                </p>
                <p style={{ color: "#999", fontFamily: "'Inter', sans-serif", fontSize: "1.1rem", fontWeight: 700 }}>
                  {plan.setup}{" "}
                  <span style={{ color: "#555", fontSize: "0.8rem", fontWeight: 400 }}>até 12x no cartão</span>
                </p>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: "24px" }} />

              {/* Features */}
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px", flex: 1 }}>
                {plan.features.map((feat, j) => (
                  <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "#FF0080", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0, marginTop: "2px" }}>✓</span>
                    <span style={{ color: "white", fontSize: "0.9375rem", fontFamily: "'Inter', sans-serif" }}>{feat}</span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p style={{ color: "#555", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif", marginBottom: "24px" }}>
                  {plan.note}
                </p>
              )}

              {/* CTA */}
              <button
                className={plan.highlight ? "btn-primary w-full py-4 text-sm" : "btn-outline w-full py-4 text-sm"}
                style={{ borderRadius: "10px", marginTop: "auto" }}
                onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
