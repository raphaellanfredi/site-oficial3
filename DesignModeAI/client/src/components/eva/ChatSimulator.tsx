import { useState, useEffect, useRef } from "react";

const flows: Record<string, {
  name: string;
  color: string;
  steps: { from: "eva" | "user"; text: string; quick: string[] }[];
}> = {
  petshop: {
    name: "Eva — Petiatria",
    color: "#1D9E75",
    steps: [
      { from: "eva", text: "Olá! Sou a Eva, assistente virtual da Petiatria 🐾\nComo posso te ajudar? Agendamento de banho e tosa, consultas ou dúvidas sobre serviços.", quick: ["Agendar banho e tosa", "Emergência veterinária", "Ver preços"] },
      { from: "user", text: "Agendar banho e tosa", quick: [] },
      { from: "eva", text: "Ótimo! Qual o porte do seu pet?\n• Pequeno\n• Médio\n• Grande", quick: ["Pequeno", "Médio", "Grande"] },
      { from: "user", text: "Pequeno — Lhasa Apso", quick: [] },
      { from: "eva", text: "Perfeito! Temos disponibilidade:\n\n📅 Amanhã às 9h ou 14h\n📅 Quinta às 10h ou 15h\n\nQual prefere?", quick: ["Amanhã às 9h", "Amanhã às 14h", "Quinta às 10h"] },
      { from: "user", text: "Amanhã às 9h", quick: [] },
      { from: "eva", text: "✅ Agendado! Banho e tosa confirmado para amanhã às 9h.\nVou te enviar um lembrete 1h antes. Precisa de mais alguma coisa?", quick: [] },
    ],
  },
  clinica: {
    name: "Eva — SaúdeMax",
    color: "#185FA5",
    steps: [
      { from: "eva", text: "Olá! Sou a Eva da SaúdeMax 👋\nPosso verificar cobertura, agendar consultas ou esclarecer dúvidas sobre seu plano.", quick: ["Verificar cobertura", "Agendar consulta", "Falar com atendente"] },
      { from: "user", text: "Verificar cobertura", quick: [] },
      { from: "eva", text: "Claro! Me informe o número da carteirinha ou CPF.", quick: [] },
      { from: "user", text: "123.456.789-00", quick: [] },
      { from: "eva", text: "✅ Plano encontrado!\n\nPlano: SaúdeMax Essencial\nValidade: 31/12/2025\nStatus: Ativo\n\nCobertura inclui: consultas clínicas, exames básicos, pronto-socorro.", quick: ["Ver cobertura completa", "Agendar consulta"] },
    ],
  },
  juridico: {
    name: "Eva — Grupo SS Jurídico",
    color: "#534AB7",
    steps: [
      { from: "eva", text: "Olá! Sou a assistente do Grupo SS Consultoria Jurídica.\nVou fazer uma triagem para direcionar você ao especialista certo. Qual é o seu caso?", quick: ["Direito Trabalhista", "Direito do Consumidor", "Família e Herança"] },
      { from: "user", text: "Direito Trabalhista", quick: [] },
      { from: "eva", text: "Entendido. Você é trabalhador buscando seus direitos, ou empresa precisando de assessoria?", quick: ["Sou trabalhador", "Sou empresa"] },
      { from: "user", text: "Sou trabalhador", quick: [] },
      { from: "eva", text: "Qual situação descreve melhor seu caso?\n\n• Fui demitido sem justa causa\n• Não recebi verbas rescisórias\n• Horas extras não pagas", quick: ["Demissão sem justa causa", "Verbas rescisórias", "Horas extras"] },
      { from: "user", text: "Fui demitido sem justa causa", quick: [] },
      { from: "eva", text: "✅ Triagem concluída! Vou encaminhar para a Dra. Joana, especialista em direito trabalhista.\n\nEla entrará em contato em até 2h úteis.", quick: [] },
    ],
  },
};

type Segment = keyof typeof flows;
type Message = { from: "eva" | "user"; text: string };

export function ChatSimulator() {
  const [seg, setSeg] = useState<Segment>("petshop");
  const [messages, setMessages] = useState<Message[]>([]);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const flow = flows[seg];

  useEffect(() => { restart(); }, [seg]);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing]);

  function restart() {
    setMessages([]);
    setQuickReplies([]);
    setStepIndex(0);
    setTyping(false);
    setTimeout(() => runStep(0, []), 400);
  }

  function runStep(idx: number, currentMsgs: Message[]) {
    const steps = flows[seg].steps;
    if (idx >= steps.length) return;
    const step = steps[idx];
    if (step.from === "eva") {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        const next = [...currentMsgs, { from: "eva" as const, text: step.text }];
        setMessages(next);
        setQuickReplies(step.quick);
        setStepIndex(idx + 1);
      }, 900 + Math.random() * 400);
    }
  }

  function handleQuick(text: string) {
    if (typing) return;
    setQuickReplies([]);
    const next = [...messages, { from: "user" as const, text }];
    setMessages(next);
    const nextIdx = stepIndex + 1;
    setStepIndex(nextIdx);
    setTimeout(() => runStep(nextIdx, next), 300);
  }

  const segments: { key: Segment; label: string }[] = [
    { key: "petshop", label: "Petshop / Vet" },
    { key: "clinica", label: "Clínica / Saúde" },
    { key: "juridico", label: "Escritório Jurídico" },
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        maxWidth: "560px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          opacity: 0.5,
          marginBottom: 6,
          fontFamily: "'Space Grotesk', sans-serif",
          color: "#ffffff",
        }}
      >
        Simule uma conversa real
      </p>
      <h2
        style={{
          fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
          fontWeight: 600,
          margin: "0 0 20px",
          color: "#ffffff",
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        Escolha o segmento e veja a Eva em ação.
      </h2>

      {/* Segment tabs */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {segments.map((s) => (
          <button
            key={s.key}
            onClick={() => setSeg(s.key)}
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              fontSize: 13,
              cursor: "pointer",
              background: seg === s.key ? flow.color : "transparent",
              color: "#ffffff",
              border: seg === s.key ? "none" : "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.15s",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Phone frame */}
      <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, overflow: "hidden" }}>
        {/* Header */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: flow.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 14,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            E
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#ffffff", fontFamily: "'Space Grotesk', sans-serif" }}>
              {flow.name}
            </p>
            <p style={{ margin: 0, fontSize: 11, color: flow.color, fontFamily: "'Inter', sans-serif" }}>
              ● Online agora
            </p>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={chatRef}
          style={{
            padding: 16,
            minHeight: 300,
            maxHeight: 380,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            background: "#0A0A0A",
          }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                maxWidth: "78%",
                padding: "9px 13px",
                borderRadius: 12,
                fontSize: 13,
                lineHeight: 1.5,
                alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                background: m.from === "user" ? flow.color : "rgba(255,255,255,0.08)",
                color: "#fff",
                borderBottomRightRadius: m.from === "user" ? 4 : 12,
                borderBottomLeftRadius: m.from === "eva" ? 4 : 12,
                whiteSpace: "pre-line",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {m.text}
            </div>
          ))}
          {typing && (
            <div
              style={{
                display: "flex",
                gap: 4,
                padding: "10px 14px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: 12,
                borderBottomLeftRadius: 4,
                alignSelf: "flex-start",
                width: 52,
              }}
            >
              {[0, 0.2, 0.4].map((d, i) => (
                <div
                  key={i}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.5)",
                    animation: `chat-bounce 1.2s ease ${d}s infinite`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Quick replies */}
        {quickReplies.length > 0 && (
          <div
            style={{
              padding: "10px 16px 14px",
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              background: "#0A0A0A",
            }}
          >
            {quickReplies.map((q, i) => (
              <button
                key={i}
                onClick={() => handleQuick(q)}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 16,
                  padding: "6px 12px",
                  fontSize: 12,
                  color: "#ffffff",
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {q}
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: 12 }}>
        <button
          onClick={restart}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 8,
            padding: "7px 18px",
            fontSize: 12,
            color: "rgba(255,255,255,0.5)",
            cursor: "pointer",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          ↺ Reiniciar conversa
        </button>
      </div>

      <style>{`@keyframes chat-bounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-5px)} }`}</style>
    </section>
  );
}
