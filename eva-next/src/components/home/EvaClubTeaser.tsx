"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15, rootMargin: "-50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

const benefits = [
  "Comunidade de empresários que usam IA",
  "Cursos e treinamentos exclusivos",
  "Networking com pessoas de alto valor",
  "Acesso antecipado a novos produtos",
  "50% de desconto em todos os novos produtos Eva",
];

export default function EvaClubTeaser() {
  const { ref: leftRef, inView: leftInView } = useInView();
  const { ref: rightRef, inView: rightInView } = useInView();

  return (
    <section style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          alignItems: "center",
        }}
      >
        <div
          ref={leftRef}
          style={{
            opacity: leftInView ? 1 : 0,
            transform: leftInView ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: 900,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.2,
              marginBottom: "24px",
              letterSpacing: "-1.5px",
              color: "#111",
            }}
          >
            Mais do que uma IA.<br />
            Uma comunidade.
          </h2>
          <p style={{ color: "#888", fontSize: "18px", lineHeight: 1.7, marginBottom: "32px" }}>
            Ao contratar a Eva, você entra no Eva Club — uma comunidade exclusiva de
            empresários que estão na vanguarda da IA.
          </p>
          <Link
            href="/eva-club"
            className="gradient-text"
            style={{ fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Saiba mais sobre o Eva Club →
          </Link>
        </div>

        <div
          ref={rightRef}
          className="glass-card gradient-border"
          style={{
            padding: "48px",
            opacity: rightInView ? 1 : 0,
            transform: rightInView ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #FF0080, #FF6B00)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: "100px",
              marginBottom: "32px",
            }}
          >
            EVA CLUB
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            {benefits.map((b) => (
              <div key={b} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "#FF0080", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ color: "#555", fontSize: "15px" }}>{b}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "24px" }}>
            <p style={{ fontStyle: "italic", color: "#999", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>
              {'"'}Você não está comprando uma ferramenta.<br />
              Está entrando para um movimento.{'"'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
