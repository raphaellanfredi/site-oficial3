"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ZapIcon,
  MegaphoneIcon,
  TargetIcon,
  ClockAlertIcon,
  CalendarCheckIcon,
  CheckCircleIcon,
} from "./icons";

const automations = [
  {
    Icon: ZapIcon,
    title: "Regras Inteligentes",
    text: "Configure uma vez: SE mensagem contém 'orçamento' ENTÃO encaminhe para equipe comercial. Lógica poderosa sem programação.",
  },
  {
    Icon: MegaphoneIcon,
    title: "Campanhas em Massa",
    text: "Envie mensagens segmentadas para sua base. Templates aprovados, respeitando as regras dos canais. Zero banimento.",
  },
  {
    Icon: TargetIcon,
    title: "Roteamento por Habilidade",
    text: "Cada conversa vai para o agente certo. Por idioma, especialidade ou disponibilidade. Automático.",
  },
  {
    Icon: ClockAlertIcon,
    title: "SLA e Alertas",
    text: "Defina tempos de resposta. Receba alertas antes de violar um prazo. Nunca mais cliente esperando sem resposta.",
  },
  {
    Icon: CalendarCheckIcon,
    title: "Disparo Anti no Show",
    text: "Confirmações automáticas de consultas, reuniões e compromissos. Reduza faltas sem esforço humano.",
  },
  {
    Icon: CheckCircleIcon,
    title: "Resolução Automática",
    text: "Conversas inativas por tempo configurável são fechadas automaticamente. Fila sempre organizada.",
  },
];

function useInView() {
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
  return { ref, inView };
}

export default function ProductsAutomation() {
  const { ref, inView } = useInView();
  const { ref: highlightRef, inView: highlightInView } = useInView();

  return (
    <section style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#FF0080",
            marginBottom: "16px",
          }}
        >
          Automação
        </p>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            textAlign: "center",
            marginBottom: "64px",
            letterSpacing: "-1.5px",
            lineHeight: 1.2,
            color: "#111",
          }}
        >
          Automação que trabalha<br />
          enquanto você vive.
        </h2>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "64px",
          }}
        >
          {automations.map((a, i) => (
            <div
              key={a.title}
              className="glass-card"
              style={{
                padding: "32px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #FF0080, #FF6B00)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  color: "#fff",
                }}
              >
                <a.Icon className="h-5 w-5" />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "18px", marginBottom: "12px", color: "#111" }}>{a.title}</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{a.text}</p>
            </div>
          ))}
        </div>

        {/* Destaques com captura real do produto */}
        <div
          ref={highlightRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              opacity: highlightInView ? 1 : 0,
              transform: highlightInView ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <h3 style={{ fontWeight: 700, fontSize: "22px", marginBottom: "8px", color: "#111", letterSpacing: "-0.3px" }}>
              Agendamento de mensagens (follow-up)
            </h3>
            <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, marginBottom: "28px" }}>
              Programe o follow-up com data e hora certas. A Eva envia no momento ideal, sem depender de alguém lembrar.
            </p>
            <div
              style={{
                marginTop: "auto",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="/products/agendamento-mensagens.png"
                alt="Calendário de agendamento de mensagens e follow-up"
                width={1004}
                height={571}
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="lazy"
              />
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              opacity: highlightInView ? 1 : 0,
              transform: highlightInView ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <div>
              <h3 style={{ fontWeight: 700, fontSize: "22px", marginBottom: "8px", color: "#111", letterSpacing: "-0.3px" }}>
                Contador de mensagens não lidas
              </h3>
              <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, marginBottom: "28px" }}>
                Ninguém fica pra trás. Veja de imediato quantas conversas ainda precisam de resposta, em todos os canais.
              </p>
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,0.08)",
                backgroundColor: "#fafafa",
                padding: "28px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/products/mensagens-nao-lidas.png"
                alt="Contador de mensagens não lidas no painel de conversas"
                width={200}
                height={29}
                style={{ width: "200px", height: "auto", display: "block" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
