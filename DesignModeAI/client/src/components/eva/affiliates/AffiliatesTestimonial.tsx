import { useEffect, useRef } from "react";

export function AffiliatesTestimonial() {
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
    <section ref={sectionRef} style={{ background: "#0a0a0a", padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2
          className="fade-up text-center text-white font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-0.02em",
            marginBottom: "64px",
          }}
        >
          De quem já está dentro.
        </h2>

        <div
          className="fade-up"
          style={{
            background: "rgba(255,0,128,0.04)",
            border: "2px solid rgba(255,0,128,0.3)",
            boxShadow: "4px 4px 0px 0px rgba(255,0,128,0.4)",
            borderRadius: "16px",
            padding: "clamp(32px, 5vw, 64px)",
            textAlign: "center",
          }}
        >
          {/* Stars */}
          <div style={{ fontSize: "1.5rem", marginBottom: "32px", letterSpacing: "4px" }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "#FF6B00" }}>★</span>
            ))}
          </div>

          {/* Quote */}
          <blockquote
            style={{
              color: "#ccc",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.25rem",
              fontStyle: "italic",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            "Depois de automatizar meu próprio negócio com a Eva,
            as indicações vieram naturais. Todo empresário que eu contava
            sobre os resultados queria contratar.
            Hoje recebo comissão todo mês sem fazer nada além
            do que já faço: falar sobre o que funciona."
          </blockquote>

          {/* Author */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px" }}>
            <p
              style={{
                color: "white",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                marginBottom: "4px",
              }}
            >
              — Membro Eva Club
            </p>
            <p
              style={{
                color: "#555",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
              }}
            >
              Afiliado desde 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
