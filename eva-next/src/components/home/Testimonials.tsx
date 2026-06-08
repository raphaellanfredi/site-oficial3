"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "No primeiro dia, a Eva já converteu dois clientes novos para a loja. Estamos adorando!",
    author: "Loja da Caru",
  },
  {
    quote: "Nossa equipe adora a Eva. Foram mais de 20 mil clientes atendidos com IA no último ano. Aumento de 25% nas conversões e zeramos o tempo de espera pelo WhatsApp. A Eva atende 24 horas.",
    author: "Boate Boas Intenções",
  },
  {
    quote: "Contratamos a Eva para todos os clientes da nossa agência. Temos tranquilidade de saber que os leads dos anúncios serão respondidos e qualificados de forma profissional.",
    author: "Agência Alexakis",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
        setTransitioning(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i: number) => {
    if (i === active) return;
    setTransitioning(true);
    setTimeout(() => {
      setActive(i);
      setTransitioning(false);
    }, 300);
  };

  const t = testimonials[active];

  return (
    <section style={{ backgroundColor: "#fff", padding: "120px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            marginBottom: "64px",
            letterSpacing: "-1.5px",
            lineHeight: 1.2,
            color: "#111",
          }}
        >
          Quem já tem a Eva,<br />
          não abre mão.
        </h2>

        <div
          className="glass-card gradient-border"
          style={{
            padding: "48px",
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div style={{ color: "#FFB800", fontSize: "20px", marginBottom: "24px", letterSpacing: "2px" }}>
            ★★★★★
          </div>
          <blockquote
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.7,
              color: "#555",
              fontStyle: "italic",
              marginBottom: "32px",
              position: "relative",
            }}
          >
            <span style={{ color: "#FF0080", fontSize: "40px", lineHeight: 0, verticalAlign: "-12px", marginRight: "4px" }}>{'"'}</span>
            {t.quote}
            <span style={{ color: "#FF6B00", fontSize: "40px", lineHeight: 0, verticalAlign: "-12px", marginLeft: "4px" }}>{'"'}</span>
          </blockquote>
          <p style={{ color: "#aaa", fontWeight: 700, fontSize: "15px", letterSpacing: "1px" }}>
            — {t.author}
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "32px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                background: i === active ? "linear-gradient(135deg, #FF0080, #FF6B00)" : "rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
