import { useEffect, useRef, useState } from "react";

const PARTICLES = Array.from({ length: 25 }, (_, i) => ({
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

export function AffiliatesHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#000", paddingTop: "clamp(120px, 12vw, 160px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}
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

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,0,128,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold mb-8"
          style={{
            opacity: 0,
            animation: "word-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards",
            background: "rgba(255,0,128,0.08)",
            border: "2px solid rgba(255,0,128,0.4)",
            borderRadius: "100px",
            color: "#FF0080",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Programa de Afiliados Eva • Comissão vitalícia
        </div>

        {/* Headline */}
        <h1
          className="text-white font-black"
          style={{
            opacity: 0,
            animation: "word-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: "800px",
            margin: "0 auto 24px",
          }}
        >
          Na corrida do ouro,<br />
          quem enriqueceu foi<br />
          o <span className="gradient-text">vendedor de pás.</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            opacity: 0,
            animation: "word-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
            color: "#999",
            fontSize: "clamp(16px, 2vw, 22px)",
            maxWidth: "560px",
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.7,
            margin: "0 auto 40px",
          }}
        >
          Enquanto todo mundo corre atrás da IA,
          você pode ser quem vende a ferramenta.{" "}
          <strong style={{ color: "rgba(255,255,255,0.85)" }}>Com comissão vitalícia.</strong>
        </p>

        {/* CTA */}
        <div
          style={{
            opacity: 0,
            animation: "word-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards",
            marginBottom: "64px",
          }}
        >
          <button
            className="btn-primary w-full sm:w-auto"
            style={{ borderRadius: "12px", padding: "18px 48px", fontSize: "18px" }}
            onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
          >
            Quero ser afiliado Eva →
          </button>
        </div>

        {/* Metrics — ABAIXO do CTA, nunca sobrepostas */}
        <div
          style={{
            opacity: 0,
            animation: "word-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "48px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            width: "100%",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {[
            { value: "5% a 30%", label: "Comissão" },
            { value: "Vitalícia", label: "Por indicação ativa" },
            { value: "R$ 14.122", label: "Com 105 clientes" },
          ].map((metric, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="gradient-text font-black"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.25rem, 3vw, 2.5rem)",
                  lineHeight: 1,
                  fontWeight: 900,
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#666",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginTop: "8px",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
