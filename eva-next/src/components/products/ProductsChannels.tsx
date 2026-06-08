"use client";

import { useEffect, useRef, useState } from "react";

const channels = [
  { icon: "📱", name: "WhatsApp", desc: "API oficial e não-oficial. Atendimento, vendas, follow-up e campanhas em massa." },
  { icon: "📸", name: "Instagram", desc: "DMs, comentários e respostas a Stories. Nunca perca uma interação." },
  { icon: "📧", name: "E-mail", desc: "Caixa de entrada unificada com domínio próprio e continuidade de conversa." },
  { icon: "📞", name: "Telefone", desc: "Ligações ativas e receptivas com IA. Atende, qualifica e transfere." },
  { icon: "💬", name: "Chat do Site", desc: "Widget configurável com dados do usuário logado. Integrado ao seu site." },
  { icon: "👍", name: "Facebook", desc: "Mensagens diretas e comentários gerenciados em um só lugar." },
  { icon: "🎵", name: "TikTok", desc: "Respostas automáticas e gestão de interações para quem vende no TikTok." },
  { icon: "🛒", name: "E-commerce", desc: "Integração com Shopify e WooCommerce. Histórico de pedidos na conversa." },
];

export default function ProductsChannels() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="canais" style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            textAlign: "center",
            marginBottom: "64px",
            letterSpacing: "-1.5px",
            lineHeight: 1.2,
            color: "#111",
          }}
        >
          Todos os seus canais.<br />
          Um único painel.
        </h2>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {channels.map((ch, i) => (
            <div
              key={ch.name}
              className="glass-card"
              style={{
                padding: "32px",
                cursor: "default",
                transition: "all 0.3s ease",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 0.06}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,0,128,0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "16px" }}>{ch.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: "18px", marginBottom: "8px", color: "#111" }}>{ch.name}</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{ch.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
