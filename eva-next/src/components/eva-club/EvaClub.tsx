"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "4px 0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          color: "#111",
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        <span>{q}</span>
        <span
          style={{
            flexShrink: 0,
            fontSize: "20px",
            color: "#FF0080",
            transition: "transform 0.2s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            display: "block",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p
          style={{
            margin: "0 0 20px",
            color: "#888",
            fontFamily: "Inter",
            fontSize: "15px",
            lineHeight: 1.7,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1, rootMargin: "-40px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function EvaClub() {
  const { ref: heroRef, inView: heroInView } = useInView();
  const { ref: cardsRef, inView: cardsInView } = useInView();
  const { ref: inclusionsRef, inView: inclusionsInView } = useInView();
  const { ref: testimonialRef, inView: testimonialInView } = useInView();
  const { ref: faqRef, inView: faqInView } = useInView();

  return (
    <div style={{ backgroundColor: "#fff" }}>

      {/* Hero */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "160px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% -20%, rgba(255,0,128,0.07) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          ref={heroRef}
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "800px",
            margin: "0 auto",
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div
            style={{
              display: "inline-block",
              color: "#FF6B00",
              border: "1px solid rgba(255,107,0,0.3)",
              borderRadius: "4px",
              background: "rgba(255,107,0,0.06)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "6px 16px",
              marginBottom: "32px",
            }}
          >
            ◆ Eva Club
          </div>

          <h1
            style={{
              fontFamily: "Inter",
              fontWeight: 900,
              fontSize: "clamp(36px, 6vw, 64px)",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              marginBottom: "24px",
              color: "#111",
            }}
          >
            O clube de quem leva a IA<br />
            <span className="gradient-text">a sério no negócio.</span>
          </h1>

          <p
            style={{
              color: "#888",
              fontFamily: "Inter",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "640px",
              margin: "0 auto 48px",
            }}
          >
            Acesso prioritário a novos agentes, suporte direto com especialistas, comunidade exclusiva
            e conteúdo que não está em lugar nenhum. Todo cliente Eva já faz parte do Club.
          </p>

          <a
            href="https://wa.me/5511961163777"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
            style={{ padding: "18px 48px", fontSize: "17px" }}
          >
            Quero entrar no Eva Club
          </a>
        </div>
      </section>

      {/* Benefit cards */}
      <section style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            ref={cardsRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "32px",
                  opacity: cardsInView ? 1 : 0,
                  transform: cardsInView ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                }}
              >
                <div style={{ color: "#FF0080", fontSize: "22px", marginBottom: "16px", fontWeight: 700 }}>
                  {b.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "17px", marginBottom: "10px", color: "#111" }}>{b.title}</h3>
                <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.65, margin: 0 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ backgroundColor: "#fff", padding: "120px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            ref={inclusionsRef}
            style={{
              background: "linear-gradient(135deg, #fff 0%, #fff5f8 100%)",
              border: "2px solid #FF0080",
              borderRadius: "8px",
              boxShadow: "6px 6px 0px 0px #FF0080",
              padding: "48px",
              opacity: inclusionsInView ? 1 : 0,
              transform: inclusionsInView ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <p
              style={{
                color: "#FF0080",
                fontFamily: "Inter",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Incluso em todos os planos
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {INCLUSIONS.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "#FF0080", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✓</span>
                  <span style={{ color: "#444", fontFamily: "Inter", fontSize: "15px", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
        <div
          ref={testimonialRef}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
            opacity: testimonialInView ? 1 : 0,
            transform: testimonialInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="glass-card gradient-border" style={{ padding: "56px 48px" }}>
            <div style={{ color: "#FFB800", fontSize: "20px", marginBottom: "28px", letterSpacing: "3px" }}>
              ★★★★★
            </div>
            <blockquote
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: 1.75,
                color: "#555",
                fontStyle: "italic",
                marginBottom: "32px",
                position: "relative",
              }}
            >
              <span style={{ color: "#FF0080", fontSize: "40px", lineHeight: 0, verticalAlign: "-12px", marginRight: "4px" }}>{'"'}</span>
              A Eva não é só uma ferramenta — é como ter um funcionário que nunca falta, nunca esquece
              e ainda aprende com o tempo. Desde que implementei, meu atendimento virou outro.
              <span style={{ color: "#FF6B00", fontSize: "40px", lineHeight: 0, verticalAlign: "-12px", marginLeft: "4px" }}>{'"'}</span>
            </blockquote>
            <p style={{ color: "#aaa", fontWeight: 700, fontSize: "14px", letterSpacing: "1px" }}>
              — Carolina R., SaúdeMax
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#fff", padding: "120px 24px" }}>
        <div
          ref={faqRef}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            opacity: faqInView ? 1 : 0,
            transform: faqInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: 900,
              fontSize: "clamp(28px, 4vw, 48px)",
              textAlign: "center",
              marginBottom: "64px",
              letterSpacing: "-1.5px",
              color: "#111",
            }}
          >
            Perguntas frequentes
          </h2>
          {FAQS.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #FF0080, #FF6B00)",
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: 900,
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-2px",
            }}
          >
            Todo cliente Eva é membro do Club.
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            Contrate a Eva e já entre para a comunidade de quem usa IA de verdade.
          </p>
          <Link
            href="/planos"
            style={{
              display: "inline-block",
              background: "#fff",
              padding: "18px 48px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "17px",
              textDecoration: "none",
              backgroundImage: "linear-gradient(135deg, #FF0080, #FF6B00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundColor: "#fff",
            }}
          >
            Ver planos
          </Link>
        </div>
      </section>

    </div>
  );
}
