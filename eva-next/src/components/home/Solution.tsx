"use client";

import { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15, rootMargin: "-50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

const channels = [
  "📱 WhatsApp", "📸 Instagram", "📧 E-mail", "📞 Telefone",
  "💬 Chat do Site", "👍 Facebook", "🎵 TikTok", "🛒 E-commerce",
];

const pillars = [
  {
    title: "IA Omnichannel",
    text: "Uma IA que atende em todos os canais simultaneamente. Sem perder nenhuma oportunidade, independente do horário.",
    color: "#FF0080",
  },
  {
    title: "CRM Inteligente",
    text: "Visão completa de cada cliente. Histórico de conversas, funil de vendas e follow-up automático. Tudo num lugar só.",
    color: "#FF4040",
  },
  {
    title: "Gestão Total",
    text: "Painel unificado para você e sua equipe. Relatórios em tempo real. Sua equipe humana focada no que importa.",
    color: "#FF6B00",
  },
];

export default function Solution() {
  const { ref: titleRef, inView: titleInView } = useInView();
  const { ref: channelsRef, inView: channelsInView } = useInView();
  const { ref: pillarsRef, inView: pillarsInView } = useInView();

  return (
    <section id="solucao" style={{ backgroundColor: "#fff", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <div ref={titleRef}>
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              marginBottom: "24px",
              color: "#111",
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            A Eva não é um bot.<br />
            É sua <span className="gradient-text">melhor funcionária</span>.
          </h2>
          <p
            style={{
              color: "#888",
              fontSize: "20px",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Treinada por especialistas, entregue pronta em 7 dias.<br />
            Você não programa nada.
          </p>
        </div>

        <div
          ref={channelsRef}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            margin: "48px auto",
            opacity: channelsInView ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
        >
          {channels.map((ch, i) => (
            <span
              key={ch}
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                backgroundColor: "rgba(0,0,0,0.02)",
                padding: "10px 20px",
                borderRadius: "100px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#444",
                cursor: "default",
                transition: "all 0.2s",
                opacity: channelsInView ? 1 : 0,
                transform: channelsInView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FF0080";
                e.currentTarget.style.backgroundColor = "rgba(255,0,128,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.02)";
              }}
            >
              {ch}
            </span>
          ))}
        </div>

        <div
          ref={pillarsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            textAlign: "left",
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="glass-card"
              style={{
                padding: "40px",
                borderTop: `2px solid ${p.color}`,
                borderRadius: "0 0 16px 16px",
                opacity: pillarsInView ? 1 : 0,
                transform: pillarsInView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
              }}
            >
              <h3 style={{ fontWeight: 700, fontSize: "22px", marginBottom: "12px", color: "#111" }}>{p.title}</h3>
              <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
