import { useEffect, useRef } from "react";

const BENEFITS = [
  { icon: "🤝", text: "Comunidade de empresários que usam IA" },
  { icon: "🎓", text: "Cursos e treinamentos exclusivos" },
  { icon: "🌐", text: "Networking com pessoas de valor" },
  { icon: "💎", text: "50% de desconto em novos produtos Eva" },
];

export function EvaClub() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="eva-club"
      className="relative w-full py-16 sm:py-24"
      style={{ background: "#030303", borderBottom: "2px solid rgba(255,0,128,0.3)" }}
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
              Eva Club
            </span>
          </div>

          <h2
            className="text-center text-white font-black mb-4 fade-up"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Mais do que uma IA.<br />
            <span className="gradient-text">Uma comunidade.</span>
          </h2>

          <p
            className="text-center text-white/50 mb-12 fade-up"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem" }}
          >
            Ao contratar a Eva, você entra automaticamente no Eva Club.
          </p>

          {/* Premium card */}
          <div
            className="fade-up p-6 sm:p-8 md:p-12 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0D0D0D 0%, #120005 100%)",
              border: "2px solid #FF0080",
              borderRadius: "8px",
              boxShadow: "8px 8px 0px 0px #FF0080",
            }}
          >
            {/* Decorative glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255,0,128,0.1) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Left */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
                  style={{
                    background: "rgba(255,0,128,0.15)",
                    border: "1px solid rgba(255,0,128,0.4)",
                    borderRadius: "4px",
                  }}
                >
                  <span className="text-sm">👑</span>
                  <span
                    className="gradient-text text-sm font-black"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    EXCLUSIVO PARA CLIENTES EVA
                  </span>
                </div>

                <h3
                  className="text-white font-black text-2xl md:text-3xl mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
                >
                  Faça parte do clube de empresários mais avançados do Brasil
                </h3>

                <p
                  className="text-white/50 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  O Eva Club é onde empresários que usam IA se encontram, aprendem e crescem juntos.
                  Acesso exclusivo ao que há de mais novo em automação e IA para negócios.
                </p>
              </div>

              {/* Right - benefits */}
              <div className="flex flex-col gap-4">
                {BENEFITS.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "6px",
                    }}
                  >
                    <span className="text-2xl flex-shrink-0">{b.icon}</span>
                    <span
                      className="text-white/80 font-medium text-sm"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {b.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
