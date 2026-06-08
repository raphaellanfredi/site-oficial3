"use client";

import { useEffect, useRef, useState } from "react";

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

const steps = [
  {
    num: "01",
    title: "Reunião de Arquitetura",
    text: "Entendemos seu negócio a fundo. Processos, tom de voz, objeções, metas. Sua IA começa a tomar forma.",
  },
  {
    num: "02",
    title: "Treinamento da IA",
    text: "Nossa equipe de especialistas treina sua IA com seu conhecimento. Você transmite, eles executam.",
  },
  {
    num: "03",
    title: "Aprovação e Go Live",
    text: "Você testa, aprova e sua IA entra ao vivo. Em 7 dias, trabalhando 24h por você.",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView();

  return (
    <section style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 56px)",
            textAlign: "center",
            marginBottom: "80px",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            color: "#111",
          }}
        >
          Da contratação à IA funcionando<br />
          em 7 dias.
        </h2>

        <div ref={ref} style={{ position: "relative" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "40px",
              position: "relative",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  textAlign: "center",
                  padding: "32px 24px",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.7s ease ${i * 0.2}s, transform 0.7s ease ${i * 0.2}s`,
                }}
              >
                <div
                  className="gradient-text"
                  style={{
                    fontWeight: 900,
                    fontSize: "72px",
                    lineHeight: 1,
                    opacity: 0.3,
                    marginBottom: "16px",
                  }}
                >
                  {step.num}
                </div>

                <div
                  className="gradient-border"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    margin: "0 auto 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <span className="gradient-text" style={{ fontWeight: 900, fontSize: "20px" }}>
                    {step.num}
                  </span>
                </div>

                <h3 style={{ fontWeight: 700, fontSize: "22px", marginBottom: "12px", color: "#111" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              position: "relative",
              display: "inline-block",
              color: "#111",
            }}
          >
            Você não programa nada. Recebe pronto.
            <span
              style={{
                position: "absolute",
                bottom: "-6px",
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(135deg, #FF0080, #FF6B00)",
                borderRadius: "2px",
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
