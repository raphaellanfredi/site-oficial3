"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold, rootMargin: "-50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const problems = [
  { emoji: "📱", title: "WhatsApp lotado às 23h", text: "Leads respondidos no dia seguinte. Ou nunca." },
  { emoji: "👤", title: "Funcionário que some", text: "Falta, adoece, pede aumento. Você no prejuízo." },
  { emoji: "🔄", title: "Você no operacional", text: "Deveria estar expandindo. Está respondendo mensagem." },
  { emoji: "⏰", title: "O cliente não espera", text: "Em 2026, o limite de paciência é 3 minutos e 28 segundos." },
];

const storyLines = [
  "São 23h.",
  "Você acabou de deitar.",
  "",
  "O celular vibra.",
  "",
  "Um lead chegou pelo Instagram.",
  "Pergunta básica. Mas ninguém vai",
  "responder até amanhã de manhã.",
  "",
  "Amanhã, ela já comprou da concorrente.",
];

export default function Problem() {
  const { ref: storyRef, inView: storyInView } = useInView();
  const { ref: cardsRef, inView: cardsInView } = useInView();
  const { ref: quoteRef, inView: quoteInView } = useInView();

  return (
    <section id="problema" style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 56px)",
            textAlign: "center",
            marginBottom: "64px",
            letterSpacing: "-2px",
            color: "#111",
          }}
        >
          Você reconhece essa cena?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "start",
          }}
        >
          <div ref={storyRef}>
            {storyLines.map((line, i) => (
              <p
                key={i}
                style={{
                  fontSize: "20px",
                  color: "#555",
                  lineHeight: 2,
                  margin: 0,
                  minHeight: line === "" ? "20px" : undefined,
                  opacity: storyInView ? 1 : 0,
                  transform: storyInView ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                  fontWeight: i < 2 ? 700 : 400,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <div ref={cardsRef} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {problems.map((p, i) => (
              <div
                key={p.title}
                style={{
                  padding: "24px 28px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  position: "relative",
                  opacity: cardsInView ? 1 : 0,
                  transform: cardsInView ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                  background: "rgba(220,0,0,0.03)",
                  border: "1px solid rgba(200,0,0,0.18)",
                  borderLeft: "3px solid rgba(200,0,0,0.55)",
                  borderRadius: "12px",
                }}
              >
                {/* X vermelho */}
                <div style={{
                  position: "absolute",
                  top: "12px",
                  right: "14px",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="11" fill="rgba(200,0,0,0.1)"/>
                    <path d="M7 7l8 8M15 7l-8 8" stroke="#cc0000" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span style={{ fontSize: "28px", flexShrink: 0 }}>{p.emoji}</span>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "16px", marginBottom: "4px", color: "#111" }}>{p.title}</h3>
                  <p style={{ color: "#777", fontSize: "14px", margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={quoteRef}
          style={{
            textAlign: "center",
            marginTop: "80px",
            opacity: quoteInView ? 1 : 0,
            transform: quoteInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p
            className="gradient-text"
            style={{
              fontWeight: 900,
              fontSize: "clamp(24px, 3.5vw, 36px)",
              lineHeight: 1.4,
              letterSpacing: "-1px",
            }}
          >
            {'"'}Enquanto você dorme,<br />
            seu concorrente está respondendo.{'"'}
          </p>
        </div>
      </div>
    </section>
  );
}
