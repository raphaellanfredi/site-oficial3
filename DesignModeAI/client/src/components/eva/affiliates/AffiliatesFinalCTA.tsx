import { useEffect, useRef } from "react";

export function AffiliatesFinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
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
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FF0080 0%, #FF3D60 40%, #FF6B00 100%)",
        padding: "clamp(80px, 10vw, 160px) clamp(16px, 4vw, 24px)",
        textAlign: "center",
      }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
          opacity: 0.05,
        }}
      />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <h2
          className="fade-up text-white font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "24px",
            textShadow: "4px 4px 0px rgba(0,0,0,0.15)",
          }}
        >
          Comece sua primeira
          <br />
          indicação hoje.
        </h2>

        <p
          className="fade-up mx-auto"
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "1.375rem",
            maxWidth: "600px",
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.6,
            marginBottom: "48px",
          }}
        >
          Seu primeiro passo é simples:
          use a Eva no seu próprio negócio.
          Quando você viver o resultado, as indicações vêm naturais.
        </p>

        <div className="fade-up flex justify-center" style={{ marginBottom: "24px" }}>
          <button
            className="btn-primary"
            style={{ borderRadius: "12px", padding: "20px 56px", fontSize: "1.125rem" }}
            onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
          >
            Quero ser afiliado Eva →
          </button>
        </div>

        <p
          className="fade-up"
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "0.9375rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Cadastro gratuito &nbsp;•&nbsp; Sem taxa de adesão &nbsp;•&nbsp; Comissão vitalícia
        </p>
      </div>
    </section>
  );
}
