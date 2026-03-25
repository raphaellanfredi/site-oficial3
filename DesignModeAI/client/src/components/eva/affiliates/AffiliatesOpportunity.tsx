import { useEffect, useRef } from "react";

const CARDS = [
  {
    icon: "♾️",
    title: "Comissão Vitalícia",
    desc: "Enquanto o cliente que você indicou pagar a mensalidade, você recebe. Todo mês. Para sempre. Não é comissão única. É renda recorrente que dura anos.",
  },
  {
    icon: "🎁",
    title: "Desconto para seu indicado",
    desc: "Seu indicado recebe 20% de desconto na implantação usando seu cupom. Você facilita a decisão dele e ainda ganha a comissão. Win-win.",
  },
  {
    icon: "📈",
    title: "Comissão crescente",
    desc: "Quanto mais você indica, maior sua porcentagem. Começa em 5% e pode chegar a 30% conforme seu volume cresce. Seu esforço é recompensado de forma exponencial.",
  },
  {
    icon: "🤝",
    title: "Produto que se vende",
    desc: "A Eva entrega resultado mensurável. Clientes satisfeitos ficam. Isso significa que sua comissão é estável e cresce mês a mês sem você precisar fazer nada.",
  },
  {
    icon: "🎓",
    title: "Suporte e treinamento",
    desc: "Você terá acesso ao Eva Club, treinamentos, materiais de vendas e suporte para ajudar suas indicações a tomarem a decisão com segurança.",
  },
  {
    icon: "🔄",
    title: "Gestão automática",
    desc: "Tudo rastreado automaticamente. Você indica, acompanha pelo painel e recebe sua comissão sem burocracia. Zero planilha, zero cobrança manual.",
  },
];

export function AffiliatesOpportunity() {
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
    <section ref={sectionRef} style={{ background: "#000", padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          className="fade-up text-center text-white font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Por que indicar a Eva é diferente
          <br />
          de qualquer outro programa?
        </h2>

        <p
          className="fade-up text-center mx-auto"
          style={{
            color: "#999",
            fontSize: "1.25rem",
            maxWidth: "600px",
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.6,
            marginBottom: "64px",
          }}
        >
          Não é comissão única. Não tem prazo de validade.
          <br />
          É renda recorrente que cresce com você.
        </p>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}
        >
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="fade-up glass-card"
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "clamp(24px, 3vw, 40px)",
                cursor: "default",
                transition: "all 0.3s ease",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,0,128,0.4)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 0 30px rgba(255,0,128,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #FF0080, #FF6B00)",
                  borderRadius: "12px",
                  width: "52px",
                  height: "52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  marginBottom: "20px",
                }}
              >
                {card.icon}
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
                {card.title}
              </h3>
              <p
                style={{
                  color: "#666",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
