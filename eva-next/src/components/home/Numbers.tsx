"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "300+", label: "Empresas com Eva" },
  { value: "20000000+", label: "Atendimentos com IA", display: "20M+" },
  { value: "99,9%", label: "Precisão nas respostas" },
];

function StatItem({ stat, inView, delay }: { stat: typeof stats[0]; inView: boolean; delay: number }) {
  return (
    <div
      style={{
        textAlign: "center",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      <div
        className="gradient-text"
        style={{
          fontWeight: 900,
          fontSize: "clamp(22px, 5vw, 64px)",
          lineHeight: 1,
          marginBottom: "12px",
          letterSpacing: "-1px",
        }}
      >
        {stat.display || stat.value}
      </div>
      <div
        style={{
          color: "#888",
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontWeight: 500,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function Numbers() {
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
    <section style={{ background: "linear-gradient(180deg, #f8f8f8, #fff)", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 56px)",
            textAlign: "center",
            marginBottom: "80px",
            letterSpacing: "-2px",
            color: "#111",
          }}
        >
          Números que falam por si.
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-3"
          style={{ gap: "24px" }}
        >
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} inView={inView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
