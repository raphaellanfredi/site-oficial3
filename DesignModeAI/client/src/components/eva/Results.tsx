import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 300, suffix: "+", label: "empresas atendidas", icon: "🏢" },
  { value: 20, suffix: "M+", label: "atendimentos realizados com IA", icon: "💬" },
  { value: 7, suffix: " dias", label: "para sua IA estar no ar", icon: "⚡" },
  { value: 99.9, suffix: "%", label: "de precisão nas respostas", icon: "🎯", decimals: 1 },
  { value: 0, suffix: "", label: "processos trabalhistas", icon: "⚖️" },
  { value: 24, suffix: "h", label: "por dia, 365 dias por ano", icon: "🌙" },
];

function Counter({
  target,
  suffix,
  decimals = 0,
  active,
}: {
  target: number;
  suffix: string;
  decimals?: number;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [active, target]);

  const display =
    target === 0
      ? "0"
      : decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString("pt-BR");

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function Results() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !active) {
            setActive(true);
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [active]);

  return (
    <section
      ref={sectionRef}
      id="resultados"
      className="relative w-full py-16 sm:py-24 overflow-hidden"
      style={{ background: "#000000", borderBottom: "2px solid rgba(255,0,128,0.3)" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,0,128,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
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
            Resultados
          </span>
        </div>

        <h2
          className="text-center text-white font-black mb-16 fade-up"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Números que{" "}
          <span className="gradient-text">falam por si</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="fade-up p-6 flex flex-col items-center text-center group transition-all duration-300"
              style={{
                background: "#0A0A0A",
                border: "2px solid rgba(255,0,128,0.3)",
                borderRadius: "8px",
                boxShadow: "4px 4px 0px 0px rgba(255,0,128,0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "2px solid #FF0080";
                el.style.boxShadow = "6px 6px 0px 0px #FF0080";
                el.style.transform = "translate(-2px,-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "2px solid rgba(255,0,128,0.3)";
                el.style.boxShadow = "4px 4px 0px 0px rgba(255,0,128,0.2)";
                el.style.transform = "none";
              }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div
                className="gradient-text font-black mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  active={active}
                />
              </div>
              <p
                className="text-white/50 text-xs font-medium leading-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
