import { useEffect, useRef } from "react";

const ROWS = [
  { referrals: "5 indicações", pct: "5%", value: "R$ 672,50/mês" },
  { referrals: "15 indicações", pct: "8%", value: "R$ 2.017,50/mês" },
  { referrals: "35 indicações", pct: "8%", value: "R$ 4.707,50/mês" },
  { referrals: "105 indicações", pct: "10%", value: "R$ 14.122,50/mês" },
];

export function AffiliatesCommissions() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
    <section ref={sectionRef} style={{ background: "#0a0a0a", padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2
          className="fade-up text-center text-white font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Quanto você pode ganhar?
        </h2>

        <p
          className="fade-up text-center"
          style={{
            color: "#999",
            fontSize: "1.25rem",
            fontFamily: "'Inter', sans-serif",
            marginBottom: "64px",
          }}
        >
          Baseado no Eva PRO — R$ 2.690/mês por cliente ativo.
        </p>

        {/* Table */}
        <div
          className="fade-up"
          style={{
            borderRadius: "16px",
            overflow: "auto",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #FF0080, #FF6B00)",
              padding: "16px 20px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "16px",
              minWidth: "400px",
            }}
          >
            {["Indicações Ativas", "Comissão", "Você recebe/mês"].map((col) => (
              <span
                key={col}
                style={{
                  color: "white",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {col}
              </span>
            ))}
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={i}
              style={{
                background: i % 2 === 0 ? "#111" : "#0d0d0d",
                padding: "16px 20px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "16px",
                minWidth: "400px",
                borderBottom: i < ROWS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                transition: "background 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#161616";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "#111" : "#0d0d0d";
              }}
            >
              <span style={{ color: "white", fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem" }}>
                {row.referrals}
              </span>
              <span style={{ color: "white", fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem" }}>
                {row.pct}
              </span>
              <span
                className="gradient-text font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9375rem" }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <p
          className="fade-up"
          style={{
            color: "#555",
            fontSize: "0.8rem",
            fontFamily: "'Inter', sans-serif",
            marginTop: "12px",
            textAlign: "center",
          }}
        >
          *É considerada uma indicação de sucesso quando a venda é fechada e o cliente permanece por 3 meses.
        </p>

        {/* Bonus card */}
        <div
          className="fade-up"
          style={{
            background: "rgba(255,0,128,0.04)",
            border: "2px solid #FF0080",
            boxShadow: "4px 4px 0px 0px #FF0080",
            borderRadius: "16px",
            padding: "clamp(32px, 5vw, 64px)",
            marginTop: "48px",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div
              style={{
                background: "linear-gradient(90deg, #FF0080, #FF6B00)",
                borderRadius: "100px",
                padding: "8px 20px",
                color: "white",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
              }}
            >
              🏆 BÔNUS ESPECIAL
            </div>
          </div>

          <h3
            className="gradient-text font-black"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            Ao completar 100 indicações ativas:
          </h3>

          <p
            className="text-white font-black"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(3rem, 8vw, 4rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: "8px",
            }}
          >
            R$ 15.000,00
          </p>
          <p style={{ color: "#999", fontFamily: "'Inter', sans-serif", fontSize: "1rem", marginBottom: "32px" }}>
            de bônus único
          </p>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "32px" }} />

          <p
            style={{
              color: "white",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              marginBottom: "24px",
            }}
          >
            + R$ 14.122,50/mês de comissão recorrente
          </p>

          <p style={{ color: "#999", fontFamily: "'Inter', sans-serif", fontSize: "1.125rem" }}>
            Estamos falando de R$ 150.000+ em comissões
            apenas indicando clientes que vão se beneficiar da tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
}
