import { useEffect, useRef } from "react";

const PROBLEMS = [
  {
    icon: "📱",
    title: "São 23h. O WhatsApp não para.",
    desc: "Você deveria estar descansando. Em vez disso, está respondendo cliente sobre horário de funcionamento pela décima vez hoje. Amanhã você faz isso de novo.",
  },
  {
    icon: "💸",
    title: "Lead chegou. Ninguém respondeu.",
    desc: "Enquanto você estava em reunião, uma lead chegou pelo Instagram querendo comprar. Esperou 4 horas. Foi para a concorrente. Você nem ficou sabendo.",
  },
  {
    icon: "😤",
    title: "Funcionário que era pra ajudar, virou problema.",
    desc: "Falta sem avisar. Fica doente na semana mais movimentada. Pede aumento depois de 3 meses. E quando sai, leva os contatos dos clientes. Você no prejuízo.",
  },
  {
    icon: "🔥",
    title: "Você virou recepcionista do próprio negócio.",
    desc: "Formada, experiente, estratégica — respondendo 'qual o horário de vocês?' pela décima vez no dia. Seu tempo vale muito mais do que isso.",
  },
];

export function Problem() {
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
    <section
      ref={sectionRef}
      id="problema"
      className="relative w-full py-16 sm:py-24"
      style={{ background: "#050505", borderBottom: "2px solid rgba(255,0,128,0.3)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="flex justify-center mb-5 fade-up">
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
            A realidade que ninguém fala
          </span>
        </div>

        <h2
          className="text-center text-white font-black mb-3 fade-up"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Você reconhece essa cena?
        </h2>

        <p
          className="text-center text-white/50 mb-12 max-w-xl mx-auto fade-up"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
        >
          Cada mensagem não respondida é dinheiro indo para o concorrente.
          Cada dia que passa sem automação é um custo invisível crescendo.
        </p>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              className="fade-up p-5 sm:p-6 flex gap-4 items-start cursor-default transition-all duration-300"
              style={{
                background: "#0A0A0A",
                border: "2px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                boxShadow: "4px 4px 0px 0px rgba(255,0,128,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border = "2px solid #FF0080";
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px 0px #FF0080";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border = "2px solid rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px 0px rgba(255,0,128,0.2)";
              }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  background: "#FF0080",
                  borderRadius: "12px",
                  width: "52px",
                  height: "52px",
                  fontSize: "24px",
                  minWidth: "52px",
                }}
              >
                {p.icon}
              </div>
              <div>
                <h3
                  className="text-white font-bold text-base sm:text-lg mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-white/50 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact phrase */}
        <div className="fade-up text-center mt-4">
          <p
            className="gradient-text font-black"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              lineHeight: 1.3,
            }}
          >
            "Enquanto você dorme, seu concorrente está respondendo."
          </p>
          <p
            className="mt-4"
            style={{
              color: "#999",
              fontSize: "clamp(0.9rem, 1.5vw, 1.125rem)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Em 2026, o cliente espera no máximo 3 minutos e 28 segundos. Depois disso, ele vai embora.
          </p>
        </div>
      </div>
    </section>
  );
}
