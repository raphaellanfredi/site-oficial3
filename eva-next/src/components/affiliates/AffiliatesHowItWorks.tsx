"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Você indica a Eva",
    text: "Compartilhe seu cupom de desconto com empresários, médicos, donos de clínica ou qualquer negócio com alta demanda de atendimento.",
  },
  {
    num: "02",
    title: "Seu indicado contrata",
    text: "Ele usa seu cupom, recebe 20% de desconto na implantação e você é registrado como o afiliado da conta.",
  },
  {
    num: "03",
    title: "Você recebe todo mês",
    text: "A cada mensalidade paga pelo seu indicado, sua comissão cai automaticamente. Todo mês. Enquanto ele for cliente.",
  },
];

export default function AffiliatesHowItWorks() {
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

  return (
    <section style={{ backgroundColor: "#fff", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            textAlign: "center",
            marginBottom: "80px",
            letterSpacing: "-1.5px",
            color: "#111",
          }}
        >
          Como funciona na prática?
        </h2>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "40px",
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
              <div className="gradient-text" style={{ fontWeight: 900, fontSize: "72px", lineHeight: 1, opacity: 0.3, marginBottom: "16px" }}>
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
                <span className="gradient-text" style={{ fontWeight: 900, fontSize: "20px" }}>{step.num}</span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "22px", marginBottom: "12px", color: "#111" }}>{step.title}</h3>
              <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
