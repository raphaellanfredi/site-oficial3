import { useEffect, useRef } from "react";

export function FinalCTA() {
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
      className="relative w-full py-20 sm:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FF0080 0%, #FF3D60 40%, #FF6B00 100%)",
        borderBottom: "2px solid #FF0080",
      }}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Hard shadow border top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "rgba(0,0,0,0.3)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Label */}
        <div className="flex justify-center mb-8 fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold"
            style={{
              background: "rgba(0,0,0,0.2)",
              border: "2px solid rgba(0,0,0,0.3)",
              borderRadius: "6px",
              color: "white",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            ⚡ Comece hoje
          </div>
        </div>

        <h2
          className="text-white font-black mb-6 fade-up"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            textShadow: "4px 4px 0px rgba(0,0,0,0.2)",
          }}
        >
          Sua concorrência já está usando IA.
        </h2>

        <p
          className="text-white/80 text-xl md:text-2xl mb-12 fade-up"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          A pergunta não é <em className="text-white">se</em> você vai automatizar.
          <br />É <em className="text-white font-black">quando.</em>
        </p>

        <div className="flex flex-col items-center gap-6 fade-up">
          <button
            className="w-full sm:w-auto px-10 py-5 text-lg font-black transition-all duration-150"
            style={{
              background: "#000000",
              color: "white",
              border: "3px solid #000000",
              borderRadius: "8px",
              boxShadow: "6px 6px 0px 0px rgba(0,0,0,0.3)",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translate(4px, 4px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px 0px rgba(0,0,0,0.3)";
            }}
            onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
          >
            Quero minha Eva agora →
          </button>

          <p
            className="text-white/70 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            IA pronta em 7 dias · Zero programação · Zero caos
          </p>
        </div>
      </div>
    </section>
  );
}
