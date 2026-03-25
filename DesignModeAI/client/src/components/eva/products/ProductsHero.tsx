import { useEffect, useRef } from "react";

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 1,
  dur: Math.random() * 8 + 6,
  delay: Math.random() * 6,
  type: ["a", "b", "c"][Math.floor(Math.random() * 3)] as "a" | "b" | "c",
  opacity: Math.random() * 0.4 + 0.15,
  color: Math.random() > 0.5 ? "#FF0080" : "#FF6B00",
}));

export function ProductsHero() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;
    const spans = headlineRef.current.querySelectorAll("span.word");
    spans.forEach((span, i) => {
      (span as HTMLElement).style.animationDelay = `${i * 0.1}s`;
    });
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#000000", paddingTop: "clamp(120px, 12vw, 160px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern pointer-events-none opacity-60" />

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

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,0,128,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        ref={headlineRef}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div
            className="word-reveal inline-flex items-center gap-2 px-4 py-2 text-sm font-bold"
            style={{
              background: "rgba(255,0,128,0.08)",
              border: "2px solid #FF0080",
              boxShadow: "2px 2px 0px 0px #FF0080",
              borderRadius: "6px",
              color: "#FF0080",
              fontFamily: "'Space Grotesk', sans-serif",
              animationDelay: "0s",
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "#FF0080", boxShadow: "0 0 8px #FF0080" }} />
            IA Omnichannel • Pronta em 7 dias
          </div>
        </div>

        {/* Headline */}
        <h1
          className="font-black mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          <span className="word-reveal word inline-block mr-3 text-white" style={{ animationDelay: "0.1s" }}>Uma</span>
          <span className="word-reveal word inline-block mr-3 text-white" style={{ animationDelay: "0.2s" }}>IA</span>
          <span className="word-reveal word inline-block mr-3 text-white" style={{ animationDelay: "0.3s" }}>que</span>
          <span className="word-reveal word inline-block mr-3 text-white" style={{ animationDelay: "0.4s" }}>não</span>
          <span className="word-reveal word inline-block mr-3 text-white" style={{ animationDelay: "0.5s" }}>dorme,</span>
          <br />
          <span className="word-reveal word inline-block mr-3 text-white" style={{ animationDelay: "0.6s" }}>não</span>
          <span className="word-reveal word inline-block mr-3 text-white" style={{ animationDelay: "0.7s" }}>falta</span>
          <span className="word-reveal word inline-block mr-3 text-white" style={{ animationDelay: "0.8s" }}>e</span>
          <span className="word-reveal word inline-block gradient-text" style={{ animationDelay: "0.9s" }}>não erra.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="word-reveal mx-auto"
          style={{
            color: "#999",
            fontSize: "1.25rem",
            maxWidth: "600px",
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.6,
            animationDelay: "1.1s",
          }}
        >
          A Eva é um sistema completo de atendimento e gestão
          omnichannel — treinado para o seu negócio,
          entregue pronto em 7 dias.
        </p>
      </div>
    </section>
  );
}
