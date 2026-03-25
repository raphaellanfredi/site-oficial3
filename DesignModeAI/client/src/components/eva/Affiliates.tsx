import { useEffect, useRef } from "react";

const COMMISSION_TABLE = [
  { referrals: "5 indicações", monthly: "R$ 672,50/mês", highlight: false },
  { referrals: "15 indicações", monthly: "R$ 2.017,50/mês", highlight: false },
  { referrals: "35 indicações", monthly: "R$ 4.707,50/mês", highlight: true },
  { referrals: "105 indicações", monthly: "R$ 14.122,50/mês + bônus R$ 15.000", highlight: false },
];

export function Affiliates() {
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
    <section
      ref={sectionRef}
      id="afiliados"
      className="relative w-full py-16 sm:py-24"
      style={{ background: "#000000", borderBottom: "2px solid rgba(255,0,128,0.3)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Label */}
          <div className="flex justify-center mb-6 fade-up">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5"
              style={{
                color: "#FF6B00",
                border: "1px solid rgba(255,107,0,0.4)",
                borderRadius: "4px",
                background: "rgba(255,107,0,0.08)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Programa de Afiliados
            </span>
          </div>

          <h2
            className="text-center text-white font-black mb-4 fade-up"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Indique a Eva e ganhe{" "}
            <span className="gradient-text">comissão vitalícia em cada mensalidade.</span>
          </h2>

          <p
            className="text-center text-white/50 mb-12 max-w-lg mx-auto fade-up"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
          >
            Eva organiza o seu negócio e te remunera por cada indicação.
          </p>

          {/* Commission table — desktop */}
          <div
            className="fade-up overflow-hidden hidden sm:block"
            style={{
              border: "2px solid rgba(255,0,128,0.4)",
              borderRadius: "8px",
              boxShadow: "6px 6px 0px 0px rgba(255,0,128,0.3)",
            }}
          >
            {/* Header */}
            <div
              className="grid grid-cols-2 px-6 py-4"
              style={{
                background: "rgba(255,0,128,0.1)",
                borderBottom: "1px solid rgba(255,0,128,0.3)",
              }}
            >
              <span
                className="text-white/60 text-xs font-bold uppercase tracking-wider"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Indicações ativas
              </span>
              <span
                className="text-white/60 text-xs font-bold uppercase tracking-wider text-right"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Renda mensal
              </span>
            </div>

            {/* Rows */}
            {COMMISSION_TABLE.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 px-6 py-5 transition-colors duration-200"
                style={{
                  background: row.highlight ? "rgba(255,0,128,0.08)" : i % 2 === 0 ? "#0A0A0A" : "#080808",
                  borderBottom:
                    i < COMMISSION_TABLE.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : "none",
                  borderLeft: row.highlight ? "3px solid #FF0080" : "3px solid transparent",
                }}
              >
                <span
                  className="font-bold text-white/80 text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {row.referrals}
                </span>
                <span
                  className="text-right font-black text-sm gradient-text"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {row.monthly}
                </span>
              </div>
            ))}
          </div>

          {/* Commission cards — mobile */}
          <div className="fade-up flex flex-col gap-3 sm:hidden">
            {COMMISSION_TABLE.map((row, i) => (
              <div
                key={i}
                style={{
                  background: "#111",
                  borderRadius: "12px",
                  padding: "20px",
                  border: row.highlight ? "2px solid #FF0080" : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: row.highlight ? "4px 4px 0px 0px #FF0080" : "none",
                }}
              >
                <div
                  style={{
                    color: "#999",
                    fontSize: "14px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    marginBottom: "8px",
                  }}
                >
                  {row.referrals}
                </div>
                <div
                  className="gradient-text font-black"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 900,
                    fontSize: "24px",
                    lineHeight: 1,
                  }}
                >
                  {row.monthly}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 fade-up">
            <button
              className="btn-primary px-8 py-4 text-base"
              style={{ borderRadius: "8px" }}
              onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
            >
              Quero ser afiliado Eva →
            </button>
            <p
              className="text-white/30 text-xs mt-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Programa de comissão vitalícia • Pagamento mensal • Zero investimento inicial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
