import { useState, useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote:
      "No primeiro dia a Eva já converteu dois clientes novos para a loja. Estamos adorando! A gente nem esperava que fosse tão rápido.",
    author: "Loja da Caru",
    role: "Varejo",
    initial: "C",
    color: "#FF0080",
  },
  {
    quote:
      "Nossa equipe adora a Eva. Foram mais de 20 mil clientes atendidos com IA no último ano. Aumento de 25% nas conversões e zeramos o tempo de espera pelo WhatsApp. A Eva atende 24 horas.",
    author: "Boate Boas Intenções",
    role: "Entretenimento",
    initial: "B",
    color: "#FF3D60",
  },
  {
    quote:
      "Contratamos a Eva para todos os clientes da nossa agência. Temos tranquilidade de saber que os leads dos anúncios serão respondidos e qualificados de forma profissional.",
    author: "Agência Alexakis",
    role: "Marketing Digital",
    initial: "A",
    color: "#FF6B00",
  },
];

const BRANDS = [
  "Loja da Caru",
  "Boate Boas Intenções",
  "Agência Alexakis",
  "Clínica Premium",
  "Studio Beauty",
  "Academia Fit",
  "Consultório Dr. Silva",
  "Imobiliária Capital",
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

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

  const t = TESTIMONIALS[current];

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="relative w-full py-16 sm:py-24 overflow-hidden"
      style={{ background: "#050505", borderBottom: "2px solid rgba(255,0,128,0.3)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Label */}
        <div className="flex justify-center mb-6 fade-up">
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1.5"
            style={{
              color: "#FF0080",
              border: "1px solid rgba(255,0,128,0.4)",
              borderRadius: "4px",
              background: "rgba(255,0,128,0.08)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Depoimentos
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
          Quem já tem a Eva,{" "}
          <span className="gradient-text">não abre mão</span>
        </h2>

        {/* Featured testimonial card */}
        <div className="fade-up max-w-3xl mx-auto mb-8">
          <div
            className="p-6 sm:p-8 md:p-12 transition-all duration-300"
            style={{
              background: "#0A0A0A",
              border: `2px solid ${t.color}`,
              borderRadius: "8px",
              boxShadow: `8px 8px 0px 0px ${t.color}`,
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? "translateY(8px)" : "translateY(0)",
              transition: "opacity 0.3s ease, transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "#FF6B00", fontSize: "18px" }}>★</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              "{t.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${t.color}, #FF6B00)`,
                  borderRadius: "8px",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {t.initial}
              </div>
              <div>
                <p
                  className="text-white font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t.author}
                </p>
                <p className="text-white/40 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mb-16 fade-up">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                clearInterval(intervalRef.current);
                goTo(i);
              }}
              className="transition-all duration-300"
              style={{
                width: i === current ? "32px" : "10px",
                height: "10px",
                borderRadius: "5px",
                background:
                  i === current
                    ? "linear-gradient(90deg, #FF0080, #FF6B00)"
                    : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* Marquee of brands */}
        <div
          className="fade-up overflow-hidden py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="marquee-track">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={i}
                className="mx-8 font-bold text-white/20 whitespace-nowrap"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.875rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
