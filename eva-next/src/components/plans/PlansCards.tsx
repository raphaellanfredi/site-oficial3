const evaOneFeatures = [
  "Até 1.500 atendimentos/mês",
  "3 etapas de recuperação de cliente (follow-up)",
  "Disparo de mensagens em massa com segmentação",
  "2 conexões (WhatsApp, Instagram, e-mail, etc.)",
  "3 usuários",
  "CRM nativo",
  "Integração com Google Agenda",
];

const evaProFeatures = [
  "Até 3.500 atendimentos/mês",
  "7 etapas de recuperação de cliente",
  "Disparo em massa ilimitado",
  "Anti no Show (confirmação automática)",
  "5 conexões",
  "10 usuários",
  "Integração Asaas / PagarMe / Conta Azul",
  "Ligações com IA (ativa e passiva)*",
];

const evaBlackFeatures = [
  "Servidor dedicado & infraestrutura escalável",
  "Até 15.200 atendimentos/mês",
  "Suporte Premium",
  "15 etapas de recuperação de cliente",
  "Disparo em massa ilimitado",
  "10 conexões",
  "30 usuários",
  "Integração Asaas / PagarMe / Conta Azul",
  "Ligações com IA (ativa e passiva)*",
];

function FeatureItem({ text, accent = "#FF0080" }: { text: string; accent?: string }) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
      <span style={{ color: accent, fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✓</span>
      <span style={{ color: "#555", fontSize: "15px", lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

function PriceBlock({ monthly, setup }: { monthly: string; setup: string }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ color: "#aaa", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
        Mensalidade
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "16px" }}>
        <span style={{ color: "#888", fontSize: "22px", fontWeight: 700 }}>R$</span>
        <span style={{ fontWeight: 900, fontSize: "clamp(36px, 4vw, 48px)", letterSpacing: "-1px", color: "#111" }}>
          {monthly.replace("R$", "").replace("/mês", "").replace("/mes", "").trim()}
        </span>
        <span style={{ color: "#aaa", fontSize: "16px" }}>/mês</span>
      </div>
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "16px" }}>
        <div style={{ color: "#aaa", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
          Implantação (Setup)
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ color: "#666", fontSize: "20px", fontWeight: 700 }}>{setup}</span>
          <span style={{ color: "#aaa", fontSize: "13px" }}>até 12x no cartão</span>
        </div>
      </div>
    </div>
  );
}

export default function PlansCards() {
  return (
    <section style={{ backgroundColor: "#f8f8f8", padding: "80px 24px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          alignItems: "start",
        }}
      >
        {/* Eva One */}
        <div className="glass-card" style={{ padding: "48px" }}>
          <div
            style={{
              display: "inline-block",
              border: "1px solid rgba(0,0,0,0.1)",
              color: "#888",
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "100px",
              marginBottom: "20px",
            }}
          >
            Para começar
          </div>
          <h3 style={{ fontWeight: 900, fontSize: "32px", marginBottom: "8px", color: "#111" }}>Eva One</h3>
          <p style={{ color: "#888", fontSize: "15px", marginBottom: "32px", lineHeight: 1.6 }}>
            Ideal para quem está começando e quer profissionalizar o atendimento.
          </p>

          <PriceBlock monthly="R$ 998/mês" setup="R$ 1.853" />

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", marginBottom: "24px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
            {evaOneFeatures.map((f) => <FeatureItem key={f} text={f} />)}
          </div>

          <a
            href="https://wa.me/5511961163777"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
            style={{ display: "block", width: "100%", textAlign: "center" }}
          >
            Contratar Eva One
          </a>
        </div>

        {/* Eva PRO */}
        <div
          className="glass-card gradient-border"
          style={{
            padding: "48px",
            backgroundColor: "#fff",
            transform: "scale(1.02)",
            boxShadow: "0 0 60px rgba(255,0,128,0.08)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #FF0080, #FF6B00)",
              color: "#fff",
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "100px",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            ⭐ Mais Popular
          </div>
          <h3 style={{ fontWeight: 900, fontSize: "32px", marginBottom: "8px", color: "#111" }}>Eva PRO</h3>
          <p style={{ color: "#888", fontSize: "15px", marginBottom: "32px", lineHeight: 1.6 }}>
            Para negócios em crescimento que precisam de escala e mais canais.
          </p>

          <PriceBlock monthly="R$ 2.690/mês" setup="R$ 3.950" />

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", marginBottom: "24px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "8px" }}>
            {evaProFeatures.map((f) => <FeatureItem key={f} text={f} />)}
          </div>
          <p style={{ color: "#aaa", fontSize: "13px", marginBottom: "32px" }}>
            *Custo da IA de ligação é pós-pago conforme uso.
          </p>

          <a
            href="https://wa.me/5511961163777"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
            style={{ display: "block", width: "100%", textAlign: "center" }}
          >
            Contratar Eva PRO
          </a>
        </div>

        {/* Eva BLACK */}
        <div
          className="glass-card"
          style={{
            padding: "48px",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              border: "1px solid rgba(0,0,0,0.15)",
              color: "#111",
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "100px",
              marginBottom: "20px",
            }}
          >
            Máxima potência
          </div>
          <h3 style={{ fontWeight: 900, fontSize: "32px", marginBottom: "8px", color: "#111" }}>Eva BLACK</h3>
          <p style={{ color: "#888", fontSize: "15px", marginBottom: "32px", lineHeight: 1.6 }}>
            Potência máxima, infraestrutura dedicada e suporte premium.
          </p>

          <PriceBlock monthly="R$ 4.490/mês" setup="R$ 9.800" />

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", marginBottom: "24px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "8px" }}>
            {evaBlackFeatures.map((f) => <FeatureItem key={f} text={f} />)}
          </div>
          <p style={{ color: "#aaa", fontSize: "13px", marginBottom: "32px" }}>
            *Custo da IA de ligação é pós-pago conforme uso.
          </p>

          <a
            href="https://wa.me/5511961163777"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
            style={{ display: "block", width: "100%", textAlign: "center" }}
          >
            Contratar Eva BLACK
          </a>
        </div>
      </div>
    </section>
  );
}
