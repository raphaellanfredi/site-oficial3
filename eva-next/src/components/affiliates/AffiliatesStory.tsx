"use client";

import { useEffect, useRef, useState } from "react";

const paragraphs = [
  "Vivemos na era da Economia da Atenção.",
  "Olhamos, em média, 183 vezes para a tela do smartphone todos os dias. Olhar o celular é a terceira atividade que mais fazemos — só perde para piscar e respirar.",
  "Em 2010, os clientes esperavam 28 minutos por uma resposta e ainda avaliavam o atendimento como satisfatório.",
  "Em 2026, esse número caiu para 3 minutos e 28 segundos.",
  "Hoje apenas 8% das empresas utilizam automações e IA profissionalmente. Ou seja: existe um oceano de 92% de empresários que já ouviram falar de IA e ainda não utilizam profissionalmente.",
  "Existe procura. Existe desejo. E existe espaço para você.",
];

export default function AffiliatesStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }} ref={ref}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            marginBottom: "48px",
            letterSpacing: "-1.5px",
            color: "#111",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          A filosofia por trás disso tudo.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "18px",
                color: "#555",
                lineHeight: 2,
                margin: 0,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
                fontWeight: i === 0 || i === 3 ? 700 : 400,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <div
          className="glass-card gradient-border"
          style={{
            padding: "40px",
            marginTop: "48px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "22px", lineHeight: 1.4, margin: 0, color: "#111" }}>
            {'"'}Na corrida da IA, você pode ser<br />
            o vendedor de pás.{'"'}
          </p>
        </div>
      </div>
    </section>
  );
}
