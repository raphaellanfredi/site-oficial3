import { useEffect, useRef } from "react";

const CHANNELS = [
  {
    icon: "📱",
    label: "WhatsApp",
    desc: "API oficial e não-oficial. Atendimento, vendas, follow-up e campanhas em massa.",
    badge: "Mais usado",
    badgeColor: "#22c55e",
  },
  {
    icon: "📸",
    label: "Instagram",
    desc: "DMs, comentários e respostas a Stories. Nunca perca uma interação.",
    badge: null,
    badgeColor: null,
  },
  {
    icon: "📧",
    label: "E-mail",
    desc: "Caixa de entrada unificada com domínio próprio e continuidade de conversa.",
    badge: null,
    badgeColor: null,
  },
  {
    icon: "📞",
    label: "Telefone",
    desc: "Ligações ativas e receptivas com IA. Atende, qualifica e transfere para humano quando necessário.",
    badge: null,
    badgeColor: null,
  },
  {
    icon: "💬",
    label: "Chat do Site",
    desc: "Widget configurável com dados do usuário logado. Integrado ao seu site em minutos.",
    badge: null,
    badgeColor: null,
  },
  {
    icon: "👍",
    label: "Facebook",
    desc: "Mensagens diretas e comentários gerenciados em um só lugar.",
    badge: null,
    badgeColor: null,
  },
  {
    icon: "🎵",
    label: "TikTok",
    desc: "Respostas automáticas e gestão de interações para quem vende no TikTok.",
    badge: null,
    badgeColor: null,
  },
  {
    icon: "🛒",
    label: "E-commerce",
    desc: "Integração com Shopify e WooCommerce. Histórico de pedidos diretamente na conversa.",
    badge: null,
    badgeColor: null,
  },
];

export function ProductsChannels() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <h2
          className="fade-up text-center text-white font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Todos os seus canais.
          <br />
          <span className="gradient-text">Um único painel.</span>
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
          A Eva centraliza WhatsApp, Instagram, E-mail, Telefone e muito mais
          em uma única interface. Sua equipe nunca mais perde uma mensagem.
        </p>

        {/* Grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
        >
          {CHANNELS.map((ch, i) => (
            <div
              key={i}
              className="fade-up glass-card"
              style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "clamp(20px, 3vw, 32px)",
                cursor: "default",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,0,128,0.4)";
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 20px 40px rgba(255,0,128,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {ch.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "rgba(34,197,94,0.15)",
                    border: "1px solid rgba(34,197,94,0.4)",
                    color: "#22c55e",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: "100px",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {ch.badge}
                </span>
              )}
              <div
                style={{
                  background: "linear-gradient(135deg, #FF0080, #FF6B00)",
                  borderRadius: "12px",
                  width: "56px",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  marginBottom: "16px",
                }}
              >
                {ch.icon}
              </div>
              <h3
                style={{
                  color: "white",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  marginBottom: "8px",
                }}
              >
                {ch.label}
              </h3>
              <p
                style={{
                  color: "#666",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                }}
              >
                {ch.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
