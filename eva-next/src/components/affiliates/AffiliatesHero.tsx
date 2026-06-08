"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  radius: number; color: string; phase: number; speed: number;
}

export default function AffiliatesHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      color: Math.random() > 0.5 ? "rgba(0,0,0,0.08)" : "rgba(255,107,0,0.12)",
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.01,
    }));

    let t = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;
      for (const p of particles) {
        p.x += p.vx + Math.sin(t + p.phase) * 0.3;
        p.y += p.vy + Math.cos(t * p.speed + p.phase) * 0.3;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% -20%, rgba(255,107,0,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", width: "100%", padding: "120px 24px 80px", textAlign: "center" }}>
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(40px, 7vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "-3px",
            marginBottom: "24px",
            animationDelay: "0.3s",
            opacity: 0,
            animationFillMode: "forwards",
            color: "#111",
          }}
        >
          Na corrida do ouro,<br />
          quem enriqueceu foi o<br />
          <span className="gradient-text">vendedor de pás</span>.
        </h1>

        <p
          className="animate-fade-up"
          style={{
            fontSize: "22px",
            color: "#888",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
            animationDelay: "0.6s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Enquanto todo mundo corre atrás da IA,
          você pode ser quem vende a ferramenta.
          Com comissão vitalícia.
        </p>

        <div
          className="animate-fade-up"
          style={{
            marginBottom: "64px",
            animationDelay: "0.9s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <a href="https://wa.me/5517991827713" target="_blank" rel="noopener noreferrer" className="cta-primary" style={{ padding: "20px 48px", fontSize: "18px" }}>
            Quero ser afiliado Eva
          </a>
        </div>

        <div
          className="animate-fade-up"
          style={{
            borderTop: "1px solid rgba(0,0,0,0.06)",
            paddingTop: "32px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            animationDelay: "1.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {[
            { value: "5% a 30%", label: "Comissão" },
            { value: "Vitalícia", label: "Por indicação" },
            { value: "R$ 14.122/mês", label: "Com 105 clientes ativos" },
          ].map((m) => (
            <div key={m.value}>
              <div className="gradient-text" style={{ fontWeight: 900, fontSize: "clamp(20px, 3vw, 32px)", lineHeight: 1, marginBottom: "8px" }}>
                {m.value}
              </div>
              <div style={{ color: "#888", fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
