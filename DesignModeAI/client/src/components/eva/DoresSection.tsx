export function DoresSection() {
  const dores = [
    {
      numero: "DOR 01",
      titulo: "Sua secretária não atende fora do horário",
      descricao:
        "A cliente manda mensagem às 22h perguntando sobre consulta. Não tem resposta. De manhã, ela já marcou com a concorrente.",
      urgencia: "Acontece toda semana na sua clínica",
    },
    {
      numero: "DOR 02",
      titulo: "Você paga um funcionário para responder 'quanto custa?'",
      descricao:
        "80% das mensagens são perguntas repetitivas. Sua equipe gasta horas nisso ao invés de focar no que realmente importa.",
      urgencia: "Calculou quanto isso custa por mês?",
    },
    {
      numero: "DOR 03",
      titulo: "Leads somem antes de você conseguir ligar",
      descricao:
        "Quem pede informação hoje quer resposta em minutos. Cada hora sem retorno reduz em 80% a chance de conversão.",
      urgencia: "Você está perdendo leads pagos agora",
    },
    {
      numero: "DOR 04",
      titulo: "Seu negócio parece menor do que é",
      descricao:
        "Demora pra responder, mensagem sem padrão, cliente sem retorno. A percepção de valor cai antes da primeira consulta.",
      urgencia: "Imagem é tudo no mercado premium",
    },
  ];

  return (
    <section style={{ padding: "80px 40px", background: "#000" }}>
      {/* Cabeçalho */}
      <div style={{ textAlign: "center", marginBottom: "52px" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#FF2D8A",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Você se reconhece aqui?
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.12,
            letterSpacing: "-0.8px",
            marginBottom: "12px",
          }}
        >
          Cada cliente sem resposta
          <br />é dinheiro que não volta.
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "#ffffff",
            opacity: 0.5,
            lineHeight: 1.7,
            maxWidth: "420px",
            margin: "0 auto",
          }}
        >
          Essas situações custam clientes todo dia. E o pior —
          <br />
          você nem sabe quantos foram embora em silêncio.
        </p>
      </div>

      {/* Grid de dores */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2px",
          maxWidth: "860px",
          margin: "0 auto 48px",
        }}
      >
        {dores.map((dor, i) => (
          <div
            key={i}
            style={{
              background: "#0a0a0a",
              padding: "28px",
              position: "relative",
              overflow: "hidden",
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "#111";
              const glow = e.currentTarget.querySelector(".dor-glow") as HTMLElement;
              if (glow) glow.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "#0a0a0a";
              const glow = e.currentTarget.querySelector(".dor-glow") as HTMLElement;
              if (glow) glow.style.opacity = "0";
            }}
          >
            <div
              className="dor-glow"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, #FF2D8A, #FF6B35)",
                opacity: 0,
                transition: "opacity 0.3s",
              }}
            />
            <p
              style={{
                fontSize: "10px",
                fontWeight: 700,
                color: "#FF2D8A",
                letterSpacing: "0.14em",
                marginBottom: "12px",
              }}
            >
              {dor.numero}
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.3,
                marginBottom: "8px",
              }}
            >
              {dor.titulo}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#ffffff",
                opacity: 0.4,
                lineHeight: 1.65,
              }}
            >
              {dor.descricao}
            </p>
            <p
              style={{
                marginTop: "16px",
                fontSize: "12px",
                color: "rgba(255, 107, 53, 0.85)",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#FF6B35",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {dor.urgencia}
            </p>
          </div>
        ))}
      </div>

      {/* Frase de transição */}
      <div
        style={{
          textAlign: "center",
          padding: "36px",
          border: "1px solid rgba(255, 45, 138, 0.15)",
          borderRadius: "16px",
          background: "rgba(255, 45, 138, 0.03)",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.4,
            letterSpacing: "-0.3px",
          }}
        >
          A Eva resolve tudo isso.{" "}
          <span
            style={{
              background: "linear-gradient(100deg, #FF2D8A, #FF6B35)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Automaticamente.<br />24 horas. Sem contratar ninguém.
          </span>
        </p>
      </div>
    </section>
  );
}
