import { useState, useEffect, useRef } from "react";

const FAQS = [
  {
    q: "O que está incluído na implantação?",
    a: "Nossa equipe de especialistas configura toda a sua IA: treinamento com o conhecimento do seu negócio, integração com seus canais, testes e ajustes. Você recebe tudo pronto em 7 dias.",
  },
  {
    q: "Preciso saber programar?",
    a: "Não. Zero programação. Você transmite o conhecimento do seu negócio e nós fazemos todo o trabalho técnico.",
  },
  {
    q: "Posso trocar de plano depois?",
    a: "Sim. Você pode fazer upgrade a qualquer momento conforme seu negócio cresce.",
  },
  {
    q: "O que são as \"conexões\"?",
    a: "Cada conexão é um canal de atendimento ativo — um número de WhatsApp, um perfil de Instagram, um e-mail, etc.",
  },
  {
    q: "Como funciona o custo das ligações com IA?",
    a: "As ligações são cobradas por uso, separadamente da mensalidade. O valor varia conforme o volume de chamadas realizadas.",
  },
  {
    q: "Existe contrato de fidelidade?",
    a: "Trabalhamos com mensalidade sem fidelidade obrigatória. Nosso compromisso é que você fique porque quer, não porque assinou.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "#0a0a0a",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "border-color 0.2s ease",
        ...(open ? { borderColor: "rgba(255,0,128,0.4)" } : {}),
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <span
          style={{
            color: "white",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          {q}
        </span>
        <span
          style={{
            color: "#FF0080",
            fontSize: "1.25rem",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p
          style={{
            padding: "0 24px 20px",
            color: "#999",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9375rem",
            lineHeight: 1.7,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export function PlansFAQ() {
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
    <section ref={sectionRef} style={{ background: "#000", padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2
          className="fade-up text-center text-white font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-0.02em",
            marginBottom: "64px",
          }}
        >
          Perguntas frequentes
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQS.map((faq, i) => (
            <div key={i} className="fade-up">
              <FAQItem q={faq.q} a={faq.a} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
