import { useEffect, useRef } from "react";

const PLANS = [
  {
    name: "Eva One",
    badge: "Para começar",
    monthlyLabel: "MENSALIDADE",
    price: "998",
    period: "/mês",
    setupLabel: "IMPLANTAÇÃO (SETUP)",
    setup: "R$ 1.853",
    setupSub: "até 12x no cartão",
    highlight: false,
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
    cta: "Começar agora",
    ctaHref: "https://wa.me/5511961163777",
    color: "rgba(255,255,255,0.12)",
    shadowColor: "rgba(255,255,255,0.1)",
  },
  {
    name: "Eva PRO",
    badge: "⭐ Mais Popular",
    monthlyLabel: "MENSALIDADE",
    price: "2.690",
    period: "/mês",
    setupLabel: "IMPLANTAÇÃO (SETUP)",
    setup: "R$ 3.950",
    setupSub: "até 12x no cartão",
    highlight: true,
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
    cta: "Entrar no Club",
    ctaHref: "https://wa.me/5511961163777",
    color: "#FF0080",
    shadowColor: "#FF0080",
  },
  {
    name: "Eva BLACK",
    badge: "Máxima potência",
    monthlyLabel: "MENSALIDADE",
    price: "4.490",
    period: "/mês",
    setupLabel: "IMPLANTAÇÃO (SETUP)",
    setup: "R$ 9.800",
    setupSub: "até 12x no cartão",
    highlight: false,
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
    cta: "Entrar no Club",
    ctaHref: "https://wa.me/5511961163777",
    color: "rgba(255,107,0,0.5)",
    shadowColor: "#FF6B00",
  },
];

export function Plans() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
    <section
      ref={sectionRef}
      id="planos"
      className="relative w-full py-16 sm:py-24"
      style={{ background: "#000000", borderBottom: "2px solid rgba(255,0,128,0.3)" }}
    >
      <div className="dot-pattern absolute inset-0 pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Label */}
        <div className="flex justify-center mb-6 fade-up">
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1.5"
            style={{
              color: "#FF0080",
              border: "1px solid rgba(255,0,128,0.4)",
              borderRadius: "4px",
              background: "rgba(255,0,128,0.08)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Planos
          </span>
        </div>

        <h2
          className="text-center text-white font-black mb-4 fade-up"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Escolha o plano certo{" "}
          <span className="gradient-text">para sua operação</span>
        </h2>

        <p
          className="text-center text-white/50 mb-16 fade-up"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
        >
          Implantação a partir de R$ 1.853 • Mensalidade a partir de R$ 998/mês para 1.500 conversas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className="fade-up flex flex-col relative"
              style={{
                background: "#0A0A0A",
                border: `2px solid ${plan.color}`,
                borderRadius: "8px",
                boxShadow: `6px 6px 0px 0px ${plan.shadowColor}`,
                ...(plan.highlight ? { zIndex: 10 } : {}),
              }}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-black whitespace-nowrap"
                  style={{
                    background: "linear-gradient(90deg, #FF0080, #FF6B00)",
                    color: "white",
                    borderRadius: "4px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    border: "2px solid white",
                    boxShadow: "2px 2px 0px 0px #FF0080",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Plan badge (non-highlighted) */}
                {!plan.highlight && (
                  <div
                    className="inline-block px-3 py-1 text-xs font-bold mb-4 self-start"
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

                {/* Plan name */}
                <p
                  className="text-white font-black text-2xl mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {plan.name}
                </p>

                {/* Price block */}
                <div className="mb-6">
                  <p
                    className="text-xs uppercase font-bold tracking-widest mb-2"
                    style={{ color: "#555", letterSpacing: "2px", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {plan.monthlyLabel}
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-white/50 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>R$</span>
                    <span
                      className="text-white font-black"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                      }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-white/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {plan.period}
                    </span>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: "12px" }} />
                  <p
                    className="text-xs uppercase font-bold tracking-widest mb-1"
                    style={{ color: "#555", letterSpacing: "2px", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {plan.setupLabel}
                  </p>
                  <p className="text-white/50 text-base font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {plan.setup}{" "}
                    <span className="text-white/30 text-xs font-normal">{plan.setupSub}</span>
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="mb-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-4 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 font-bold text-sm mt-0.5"
                        style={{ color: "#FF0080" }}
                      >
                        ✓
                      </span>
                      <span
                        className="text-white text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.note && (
                  <p
                    className="text-xs mb-6"
                    style={{ color: "#555", fontFamily: "'Inter', sans-serif" }}
                  >
                    {plan.note}
                  </p>
                )}

                {/* CTA */}
                <button
                  className={plan.highlight ? "btn-primary w-full py-4 text-sm" : "btn-outline w-full py-4 text-sm"}
                  style={{ borderRadius: "6px", marginTop: "auto" }}
                  onClick={() => window.open(plan.ctaHref, "_blank")}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-white/30 text-xs mt-8 fade-up"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Todos os planos incluem implantação personalizada • Sem fidelidade mínima • Suporte em português
        </p>
      </div>
    </section>
  );
}
