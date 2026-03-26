import { useEffect, useRef, useState } from "react";

const BENEFITS = [
  {
    icon: "◆",
    title: "Acesso antecipado",
    desc: "Novos agentes e funcionalidades chegam primeiro pra você, antes do lançamento público.",
  },
  {
    icon: "⚡",
    title: "Suporte direto",
    desc: "Canal exclusivo com a equipe Eva. Sem fila, sem chatbot. Problema resolvido de verdade.",
  },
  {
    icon: "◎",
    title: "Comunidade de membros",
    desc: "Grupo fechado com empresários que usam IA no dia a dia. Troca real, não posts de motivação.",
  },
  {
    icon: "▶",
    title: "Conteúdo exclusivo",
    desc: "Playbooks, prompts e casos reais de implementação — o que funciona de verdade no mercado brasileiro.",
  },
];

const INCLUSIONS = [
  "Agente de IA ativo no WhatsApp, Instagram e site",
  "Customização completa de identidade, tom e fluxos de atendimento",
  "Acesso antecipado a novos agentes verticais",
  "Suporte humano dedicado via canal exclusivo (resposta em até 2h)",
  "Sessão mensal de otimização do agente com especialista Eva",
  "Acesso à comunidade fechada + biblioteca de prompts e playbooks",
  "Relatório mensal de desempenho com insights e recomendações",
];

const FAQS = [
  {
    q: "Preciso ter conhecimento técnico?",
    a: "Não. A Eva cuida de toda a parte técnica. Você define a identidade e os objetivos do seu negócio — a gente configura o agente do zero.",
  },
  {
    q: "Em quanto tempo o agente fica no ar?",
    a: "Em média 5 dias úteis após a coleta de informações do seu negócio.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. Não há fidelidade. Você pode cancelar a qualquer momento — sem multas e sem burocracia.",
  },
  {
    q: "O que é a sessão mensal de otimização?",
    a: "Uma reunião de 30 minutos com um especialista Eva para revisar o desempenho do agente, ajustar fluxos e implementar melhorias com base nos dados do mês.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "4px 0",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "16px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          color: "#ffffff",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
          fontWeight: 600,
        }}
      >
        <span>{q}</span>
        <span
          style={{
            flexShrink: 0,
            fontSize: "18px",
            color: "#FF0080",
            transition: "transform 0.2s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p
          style={{
            margin: "0 0 16px",
            color: "rgba(255,255,255,0.55)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.7,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export function EvaClub() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="eva-club"
      className="relative w-full py-16 sm:py-24"
      style={{ background: "#030303", borderBottom: "2px solid rgba(255,0,128,0.3)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6 fade-up">
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1.5"
            style={{
              color: "#FF6B00",
              border: "1px solid rgba(255,107,0,0.4)",
              borderRadius: "4px",
              background: "rgba(255,107,0,0.08)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            ◆ Eva Club
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-center text-white font-black mb-4 fade-up"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          O clube de quem leva a IA<br />
          <span className="gradient-text">a sério no negócio.</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-center text-white/50 mb-16 fade-up"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", maxWidth: "640px", margin: "0 auto 64px" }}
        >
          Acesso prioritário a novos agentes, suporte direto com especialistas, comunidade exclusiva e conteúdo que não está em lugar nenhum. Todo cliente Eva já faz parte do Club.
        </p>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 fade-up">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  color: "#FF0080",
                  marginBottom: "10px",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {b.icon}
              </div>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  marginBottom: "6px",
                }}
              >
                {b.title}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div
          className="fade-up mb-16"
          style={{
            background: "linear-gradient(135deg, #0D0D0D 0%, #120005 100%)",
            border: "2px solid #FF0080",
            borderRadius: "8px",
            boxShadow: "6px 6px 0px 0px #FF0080",
            padding: "32px 36px",
          }}
        >
          <p
            style={{
              color: "#FF0080",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Incluso em todos os planos
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {INCLUSIONS.map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: "#FF0080", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✓</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial */}
        <div
          className="fade-up mb-16 text-center"
          style={{ maxWidth: "600px", margin: "0 auto 64px" }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.75,
              fontStyle: "italic",
              marginBottom: "12px",
            }}
          >
            "A Eva não é só uma ferramenta — é como ter um funcionário que nunca falta, nunca esquece e ainda aprende com o tempo. Desde que implementei, meu atendimento virou outro."
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            — Carolina R., SaúdeMax
          </p>
        </div>

        {/* FAQ */}
        <div className="fade-up" style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p
            style={{
              color: "#FF0080",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            Perguntas frequentes
          </p>
          {FAQS.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>

      </div>
    </section>
  );
}
