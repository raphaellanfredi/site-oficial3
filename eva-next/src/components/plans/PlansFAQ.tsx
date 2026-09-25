"use client";

import { useState } from "react";

const faqs = [
  {
    q: "O que está incluído na implantação?",
    a: "A Eva IA monta a arquitetura a partir do formulário de configuração e treina o agente com o conhecimento do seu negócio. Especialistas validam tudo antes de entrar no ar. Você recebe pronto, conectado aos seus canais, em até 24 horas depois do pagamento e do formulário preenchido.",
  },
  {
    q: "Preciso saber programar?",
    a: "Não. Zero programação. Você transmite o conhecimento do seu negócio e nós fazemos todo o trabalho técnico.",
  },
  {
    q: "Posso trocar de plano depois?",
    a: "Sim. O upgrade vale na hora, com cobrança proporcional ao tempo que falta no período. O downgrade vale no fim do período já pago e nunca apaga atendente nem conexão.",
  },
  {
    q: "O que são as 'conexões'?",
    a: "Cada conexão é um canal de atendimento ativo — um número de WhatsApp, um perfil de Instagram, um e-mail, etc.",
  },
  {
    q: "Como funciona o custo das ligações com IA?",
    a: "As ligações são cobradas por uso, separadamente da mensalidade. O valor varia conforme o volume de chamadas realizadas.",
  },
  {
    q: "Existe contrato de fidelidade?",
    a: "Trabalhamos com mensalidade sem fidelidade obrigatória. Nosso compromisso é que você fique porque quer, não porque assinou.",
  },
];

export default function PlansFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#fff", padding: "120px 24px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            textAlign: "center",
            marginBottom: "64px",
            letterSpacing: "-1.5px",
            color: "var(--ink)",
          }}
        >
          Perguntas frequentes
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "24px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  color: "var(--ink)",
                  fontFamily: "var(--font-text)",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                <span>{faq.q}</span>
                <span
                  style={{
                    flexShrink: 0,
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    border: "1px solid rgba(0,0,0,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: 300,
                    color: open === i ? "var(--link)" : "var(--ink-2)",
                    transition: "all 0.2s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                style={{
                  maxHeight: open === i ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  style={{
                    color: "var(--ink-2)",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    paddingBottom: "24px",
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
