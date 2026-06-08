"use client";

import { useEffect, useRef, useState } from "react";

const rows = [
  { indications: "5 indicações", commission: "5%", monthly: "R$ 672,50/mês" },
  { indications: "15 indicações", commission: "8%", monthly: "R$ 2.017,50/mês" },
  { indications: "35 indicações", commission: "8%", monthly: "R$ 4.707,50/mês" },
  { indications: "105 indicações", commission: "10%", monthly: "R$ 14.122,50/mês" },
];

export default function AffiliatesCommissions() {
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
    <section style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 56px)",
            textAlign: "center",
            marginBottom: "16px",
            letterSpacing: "-2px",
            color: "#111",
          }}
        >
          Quanto você pode ganhar?
        </h2>
        <p style={{ color: "#888", fontSize: "20px", textAlign: "center", marginBottom: "64px" }}>
          Baseado no Eva PRO — R$ 2.690/mês por cliente.
        </p>

        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              background: "linear-gradient(135deg, #FF0080, #FF6B00)",
              padding: "20px 32px",
            }}
          >
            {["Indicações Ativas", "Comissão", "Você recebe/mês"].map((h) => (
              <span key={h} style={{ color: "#fff", fontWeight: 700, fontSize: "14px", letterSpacing: "0.5px" }}>{h}</span>
            ))}
          </div>

          {rows.map((row, i) => (
            <div
              key={row.indications}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "20px 32px",
                backgroundColor: i % 2 === 0 ? "#fff" : "#f8f8f8",
                transition: "background-color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = i % 2 === 0 ? "#fff" : "#f8f8f8")}
            >
              <span style={{ color: "#555", fontSize: "15px" }}>{row.indications}</span>
              <span className="gradient-text" style={{ fontWeight: 700, fontSize: "15px" }}>{row.commission}</span>
              <span style={{ color: "#111", fontWeight: 700, fontSize: "15px" }}>{row.monthly}</span>
            </div>
          ))}
        </div>

        <p style={{ color: "#aaa", fontSize: "13px", marginTop: "16px", textAlign: "center" }}>
          *É considerada uma indicação de sucesso quando a venda é fechada e o cliente permanece por 3 meses.
        </p>

        <div
          className="glass-card gradient-border"
          style={{
            padding: "48px",
            marginTop: "48px",
            textAlign: "center",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.4s",
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
              marginBottom: "24px",
            }}
          >
            BÔNUS ESPECIAL
          </div>

          <h3 className="gradient-text" style={{ fontWeight: 900, fontSize: "32px", marginBottom: "16px", letterSpacing: "-1px" }}>
            Ao completar 100 indicações ativas:
          </h3>

          <p style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px", color: "#111" }}>
            R$ 15.000,00 de bônus
          </p>
          <p style={{ color: "#888", fontSize: "18px", marginBottom: "24px" }}>
            + R$ 14.122,50/mês de comissão recorrente
          </p>
          <p style={{ color: "#888", fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
            Estamos falando de R$ 150.000+ em comissões<br />
            apenas indicando clientes que vão se beneficiar<br />
            da tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
}
