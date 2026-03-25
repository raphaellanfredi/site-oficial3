import { useEffect, useRef } from "react";

const STEPS = [
  {
    number: "01",
    title: "Reunião de Arquitetura",
    desc: "Entendemos seu negócio a fundo. Processos, objeções, produtos, tom de voz. A Eva vai ser uma extensão da sua marca.",
    icon: "🏗️",
    color: "#FF0080",
  },
  {
    number: "02",
    title: "Treinamento da IA",
    desc: "Especialistas treinam sua IA com seu processo, sua linguagem e seus produtos. Você não precisa saber nada de tecnologia.",
    icon: "🧠",
    color: "#FF3D60",
  },
  {
    number: "03",
    title: "Aprovação e Go Live",
    desc: "Você testa, aprova e a Eva começa a trabalhar. Em 7 dias sua IA está no ar atendendo seus clientes.",
    icon: "🚀",
    color: "#FF6B00",
  },
];

export function HowItWorks() {
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
      id="como-funciona"
      className="relative w-full py-16 sm:py-24"
      style={{ background: "#040404", borderBottom: "2px solid rgba(255,0,128,0.3)" }}
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
            Como funciona
          </span>
        </div>

        <h2
          className="text-center text-white font-black mb-4 fade-up"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Da contratação à IA funcionando{" "}
          <span className="gradient-text">em 7 dias</span>
        </h2>

        <p
          className="text-center text-white/50 mb-20 max-w-lg mx-auto fade-up"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem" }}
        >
          Você não programa nada. Recebe pronto.
        </p>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-14 left-0 right-0 h-0.5"
            style={{
              background: "linear-gradient(90deg, #FF0080 0%, #FF3D60 50%, #FF6B00 100%)",
              top: "56px",
              left: "16.67%",
              right: "16.67%",
              opacity: 0.4,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="fade-up flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div
                  className="relative w-28 h-28 flex items-center justify-center mb-6 flex-shrink-0"
                  style={{
                    background: "#0A0A0A",
                    border: `3px solid ${step.color}`,
                    borderRadius: "50%",
                    boxShadow: `0 0 0 6px rgba(${step.color === "#FF0080" ? "255,0,128" : step.color === "#FF3D60" ? "255,61,96" : "255,107,0"},0.12), 4px 4px 0px 0px ${step.color}`,
                  }}
                >
                  <span className="text-4xl">{step.icon}</span>
                  {/* Step number */}
                  <div
                    className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center text-xs font-black"
                    style={{
                      background: step.color,
                      borderRadius: "4px",
                      color: "white",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {i + 1}
                  </div>
                </div>

                <h3
                  className="text-white font-bold text-xl mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.01em" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/50 text-sm leading-relaxed max-w-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom highlight */}
        <div
          className="fade-up mt-16 text-center py-6 px-8"
          style={{
            background: "rgba(255,0,128,0.05)",
            border: "1px solid rgba(255,0,128,0.2)",
            borderRadius: "8px",
          }}
        >
          <p
            className="text-white/70 font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem" }}
          >
            ⚡ Média de{" "}
            <span className="gradient-text font-black">7 dias</span>{" "}
            do contrato ao primeiro atendimento com IA.
          </p>
        </div>
      </div>
    </section>
  );
}
