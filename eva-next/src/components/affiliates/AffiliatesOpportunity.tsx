"use client";

import { useEffect, useRef, useState } from "react";

const opportunities = [
  {
    icon: "♾️",
    title: "Comissão Vitalícia",
    text: "Enquanto o cliente que você indicou pagar a mensalidade, você recebe. Todo mês. Para sempre. Não é comissão única. É renda recorrente.",
  },
  {
    icon: "🎁",
    title: "Desconto para seu indicado",
    text: "Seu indicado recebe 20% de desconto na implantação usando seu cupom. Você facilita a venda dele e ainda ganha a comissão.",
  },
  {
    icon: "📈",
    title: "Comissão crescente",
    text: "Quanto mais você indica, maior sua porcentagem. Começa em 5% e pode chegar a 30% conforme seu volume cresce.",
  },
  {
    icon: "🤝",
    title: "Produto que se vende",
    text: "A Eva entrega resultado mensurável. Clientes satisfeitos ficam. Isso significa que sua comissão é estável e cresce com o tempo.",
  },
  {
    icon: "🎓",
    title: "Suporte e treinamento",
    text: "Você terá acesso ao Eva Club, treinamentos e materiais para ajudar suas indicações a tomarem a decisão.",
  },
  {
    icon: "🔄",
    title: "Gestão automática",
    text: "Tudo rastreado automaticamente. Você indica, acompanha pelo painel e recebe sua comissão sem burocracia.",
  },
];

export default function AffiliatesOpportunity() {
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
    <section style={{ backgroundColor: "#fff", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(28px, 4.5vw, 56px)",
            textAlign: "center",
            marginBottom: "64px",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            color: "#111",
          }}
        >
          Por que indicar a Eva<br />
          é diferente de qualquer<br />
          outro programa de afiliados?
        </h2>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {opportunities.map((o, i) => (
            <div
              key={o.title}
              className="glass-card"
              style={{
                padding: "36px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{o.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: "18px", marginBottom: "10px", color: "#111" }}>{o.title}</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{o.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
