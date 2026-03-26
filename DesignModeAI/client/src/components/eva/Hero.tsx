import { useEffect, useRef, useState } from "react";
import { SocialProof } from "./SocialProof";

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  dur: Math.random() * 8 + 6,
  delay: Math.random() * 6,
  type: ["a", "b", "c"][Math.floor(Math.random() * 3)] as "a" | "b" | "c",
  opacity: Math.random() * 0.5 + 0.2,
  color: Math.random() > 0.5 ? "#FF0080" : "#FF6B00",
}));

function useCounter(target: number, active: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const c300 = useCounter(300, active);
  const c20 = useCounter(20, active);
  const c7 = useCounter(7, active);

  return (
    <div
      ref={ref}
      className="word-reveal"
      style={{
        animationDelay: "1.1s",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "32px",
        marginTop: "48px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "48px",
        flexWrap: "wrap",
      }}
    >
      {[
        { value: c300, suffix: "+", label: "empresas", icon: "🏢" },
        { value: c20, suffix: "M+", label: "atendimentos", icon: "💬" },
        { value: c7, suffix: " dias", label: "para começar", icon: "⚡" },
      ].map((stat, i) => (
        <div
          key={i}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}
        >
          <span
            className="gradient-text font-black"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              lineHeight: 1,
            }}
          >
            {stat.icon} {stat.value}{stat.suffix}
          </span>
          <span
            className="text-white/40 uppercase tracking-widest font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem" }}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center"
      style={{ background: "#000000", paddingTop: "80px" }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className={`particle particle-${p.type}`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              opacity: p.opacity,
              "--dur": `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,0,128,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
      >
        {/* Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div
            className="word-reveal inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold"
            style={{
              background: "rgba(255,0,128,0.1)",
              border: "2px solid #FF0080",
              boxShadow: "2px 2px 0px 0px #FF0080",
              borderRadius: "6px",
              color: "#FF0080",
              fontFamily: "'Space Grotesk', sans-serif",
              animationDelay: "0s",
            }}
          >
            <span className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "#FF0080", boxShadow: "0 0 8px #FF0080" }} />
            IA omnichannel • Pronta em 7 dias
          </div>
        </div>

        {/* Headline — 2 linhas */}
        <h1
          className="font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: "100%",
          }}
        >
          <span
            className="hero-headline block text-white"
            style={{
              opacity: 0,
              animation: "word-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards",
            }}
          >
            Seu atendimento no nível das grandes empresas.
          </span>
          <span
            className="hero-headline block"
            style={{
              opacity: 0,
              animation: "word-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards",
            }}
          >
            <span className="text-white">Por uma </span>
            <span className="gradient-text">fração do custo.</span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="word-reveal text-white/60 leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
            animationDelay: "0.75s",
            maxWidth: "580px",
            marginTop: "24px",
            marginBottom: "40px",
          }}
        >
          A Eva é sua primeira contratação de IA — inteligente o suficiente pra entender contexto, responder com personalidade e nunca deixar um cliente sem resposta.
        </p>

        {/* CTAs */}
        <div
          className="word-reveal flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          style={{ animationDelay: "0.9s", justifyContent: "center" }}
        >
          <button
            className="btn-primary px-6 sm:px-8 py-4 text-sm sm:text-base w-full sm:w-auto"
            style={{ borderRadius: "8px" }}
            onClick={() => (window.location.href = "/planos")}
          >
            Conhecer a Eva
          </button>
          <button
            className="btn-outline px-6 sm:px-8 py-4 text-sm sm:text-base w-full sm:w-auto"
            style={{ borderRadius: "8px" }}
            onClick={() => document.getElementById("solucao")?.scrollIntoView({ behavior: "smooth" })}
          >
            ▶ Assistir demo (60s)
          </button>
        </div>

        {/* Social proof */}
        <SocialProof />
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #FF0080, transparent)" }}
      />
    </section>
  );
}
