import { useEffect, useRef } from "react";

const STORY_BLOCKS = [
  { text: "Vivemos na era da Economia da Atenção.", bold: false },
  {
    text: "Olhamos, em média, 183 vezes para a tela do smartphone todos os dias.\nOlhar o celular é a terceira atividade que mais fazemos —\nsó perde para piscar e respirar.",
    bold: false,
  },
  {
    text: "Em 2010, os clientes esperavam 28 minutos por uma resposta\ne ainda avaliavam o atendimento como satisfatório.",
    bold: false,
  },
  {
    text: "Em 2026, esse número caiu para 3 minutos e 28 segundos.",
    bold: true,
  },
  {
    text: "Hoje apenas 8% das empresas utilizam automações e IA profissionalmente.\nExiste um oceano de 92% de empresários que já ouviram falar de IA\ne ainda não utilizam profissionalmente na operação.",
    bold: false,
  },
  {
    text: "Existe procura. Existe desejo. E existe espaço para você.",
    bold: false,
  },
];

export function AffiliatesStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2
          className="fade-up text-white font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-0.02em",
            marginBottom: "48px",
          }}
        >
          A filosofia por trás disso tudo.
        </h2>

        {STORY_BLOCKS.map((block, i) => (
          <p
            key={i}
            className="fade-up"
            style={{
              color: block.bold ? "white" : "#ccc",
              fontFamily: "'Inter', sans-serif",
              fontSize: block.bold ? "1.25rem" : "1.125rem",
              fontWeight: block.bold ? 700 : 400,
              lineHeight: 2,
              marginBottom: "24px",
              whiteSpace: "pre-line",
            }}
          >
            {block.text}
          </p>
        ))}

        {/* Callout box */}
        <div
          className="fade-up"
          style={{
            background: "rgba(255,0,128,0.04)",
            border: "2px solid #FF0080",
            boxShadow: "4px 4px 0px 0px #FF0080",
            borderRadius: "12px",
            padding: "clamp(24px, 4vw, 48px)",
            marginTop: "48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "white",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              letterSpacing: "-0.01em",
              marginBottom: "16px",
            }}
          >
            "Na corrida da IA, você pode ser o vendedor de pás."
          </p>
          <p
            style={{
              color: "#999",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
            }}
          >
            E receber comissão vitalícia por cada cliente que você indicar.
          </p>
        </div>
      </div>
    </section>
  );
}
