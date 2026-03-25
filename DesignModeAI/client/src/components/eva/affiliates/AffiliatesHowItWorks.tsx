import { useEffect, useRef } from "react";

const STEPS = [
  {
    number: "01",
    title: "Você indica a Eva",
    desc: "Compartilhe seu cupom de desconto com empresários, médicos, donos de clínica ou qualquer negócio com alta demanda de atendimento. Pode ser por mensagem, indicação pessoal ou nas redes sociais.",
    color: "#FF0080",
  },
  {
    number: "02",
    title: "Seu indicado contrata",
    desc: "Ele usa seu cupom exclusivo, recebe 20% de desconto na implantação e você é registrado automaticamente como o afiliado da conta. Simples e rastreável.",
    color: "#FF3D60",
  },
  {
    number: "03",
    title: "Você recebe todo mês",
    desc: "A cada mensalidade paga pelo seu indicado, sua comissão é depositada automaticamente. Todo mês. Enquanto ele for cliente da Eva.",
    color: "#FF6B00",
  },
];

export function AffiliatesHowItWorks() {
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
    <section ref={sectionRef} style={{ background: "#000", padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          className="fade-up text-center text-white font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Como funciona na prática?
        </h2>

        <p
          className="fade-up text-center"
          style={{
            color: "#999",
            fontSize: "1.125rem",
            fontFamily: "'Inter', sans-serif",
            marginBottom: "80px",
          }}
        >
          Três passos simples. Comissão para sempre.
        </p>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {/* Connector line desktop */}
          <div
            className="hidden md:block absolute"
            style={{
              top: "56px",
              left: "16.67%",
              right: "16.67%",
              height: "2px",
              background: "linear-gradient(90deg, #FF0080, #FF3D60, #FF6B00)",
              opacity: 0.3,
            }}
          />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {STEPS.map((step, i) => (
              <div key={i} className="fade-up flex flex-col items-center text-center">
                {/* Circle */}
                <div
                  style={{
                    width: "112px",
                    height: "112px",
                    borderRadius: "50%",
                    background: "#0a0a0a",
                    border: `3px solid ${step.color}`,
                    boxShadow: `0 0 0 6px ${step.color}1F, 4px 4px 0px 0px ${step.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    position: "relative",
                    willChange: "transform",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 900,
                      fontSize: "2rem",
                      background: `linear-gradient(90deg, ${step.color}, #FF6B00)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.number}
                  </span>
                  {/* Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      width: "28px",
                      height: "28px",
                      background: step.color,
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 900,
                      fontSize: "0.75rem",
                    }}
                  >
                    {i + 1}
                  </div>
                </div>

                <h3
                  style={{
                    color: "white",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    maxWidth: "280px",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom phrase */}
        <p
          className="fade-up text-center text-white font-bold"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.5rem",
            letterSpacing: "-0.01em",
            marginTop: "64px",
          }}
        >
          Sem burocracia. Sem prazo. Sem limite de indicações.
        </p>
      </div>
    </section>
  );
}
