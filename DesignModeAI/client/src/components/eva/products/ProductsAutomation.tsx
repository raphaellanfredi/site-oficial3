import { useEffect, useRef } from "react";

const AUTOMATIONS = [
  {
    icon: "⚡",
    title: "Regras Inteligentes",
    desc: "Configure uma vez: SE mensagem contém 'orçamento' ENTÃO encaminhe para equipe comercial. Lógica poderosa sem programação.",
  },
  {
    icon: "📣",
    title: "Campanhas em Massa",
    desc: "Envie mensagens segmentadas para sua base. Templates aprovados, respeitando as regras dos canais. Zero banimento.",
  },
  {
    icon: "🎯",
    title: "Roteamento por Habilidade",
    desc: "Cada conversa vai para o agente certo. Por idioma, especialidade ou disponibilidade. Automático e inteligente.",
  },
  {
    icon: "⏱️",
    title: "SLA e Alertas",
    desc: "Defina tempos de resposta. Receba alertas antes de violar um prazo. Nunca mais cliente esperando sem resposta.",
  },
  {
    icon: "📅",
    title: "Anti no Show",
    desc: "Confirmações automáticas de consultas, reuniões e compromissos. Reduza faltas sem esforço humano.",
  },
  {
    icon: "🧹",
    title: "Resolução Automática",
    desc: "Conversas inativas por tempo configurável são fechadas automaticamente. Fila sempre organizada e precisa.",
  },
];

export function ProductsAutomation() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#0a0a0a", padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          className="fade-up text-center text-white font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Automação que trabalha
          <br />
          <span className="gradient-text">enquanto você vive.</span>
        </h2>

        <p
          className="fade-up text-center mx-auto"
          style={{
            color: "#999",
            fontSize: "1.25rem",
            maxWidth: "560px",
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.6,
            marginBottom: "64px",
          }}
        >
          Configure uma vez. Funciona para sempre.
          <br />
          Sem programação, sem complicação.
        </p>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}
        >
          {AUTOMATIONS.map((item, i) => (
            <div
              key={i}
              className="fade-up glass-card"
              style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "clamp(24px, 3vw, 40px)",
                cursor: "default",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,0,128,0.4)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 0 30px rgba(255,0,128,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #FF0080, #FF6B00)",
                  borderRadius: "12px",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "20px",
                  willChange: "transform",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  color: "white",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  marginBottom: "12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "#666",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
