"use client";

import { useEffect, useRef, useState } from "react";

const automations = [
  {
    title: "Regras Inteligentes",
    text: "Configure uma vez: SE mensagem contém 'orçamento' ENTÃO encaminhe para equipe comercial. Lógica poderosa sem programação.",
  },
  {
    title: "Campanhas em Massa",
    text: "Envie mensagens segmentadas para sua base. Templates aprovados, respeitando as regras dos canais. Zero banimento.",
  },
  {
    title: "Roteamento por Habilidade",
    text: "Cada conversa vai para o agente certo. Por idioma, especialidade ou disponibilidade. Automático.",
  },
  {
    title: "SLA e Alertas",
    text: "Defina tempos de resposta. Receba alertas antes de violar um prazo. Nunca mais cliente esperando sem resposta.",
  },
  {
    title: "Disparo Anti no Show",
    text: "Confirmações automáticas de consultas, reuniões e compromissos. Reduza faltas sem esforço humano.",
  },
  {
    title: "Resolução Automática",
    text: "Conversas inativas por tempo configurável são fechadas automaticamente. Fila sempre organizada.",
  },
];

export default function ProductsAutomation() {
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
    <section style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
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
          Automação que trabalha<br />
          enquanto você vive.
        </h2>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {automations.map((a, i) => (
            <div
              key={a.title}
              className="glass-card"
              style={{
                padding: "32px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "3px",
                  background: "linear-gradient(135deg, #FF0080, #FF6B00)",
                  borderRadius: "2px",
                  marginBottom: "20px",
                }}
              />
              <h3 style={{ fontWeight: 700, fontSize: "18px", marginBottom: "12px", color: "#111" }}>{a.title}</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
