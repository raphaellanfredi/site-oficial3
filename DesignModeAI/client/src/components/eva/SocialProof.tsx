const metrics = [
  { value: "+60", label: "empresas ativas" },
  { value: "+120k", label: "atendimentos/mês" },
  { value: "98%", label: "satisfação dos clientes" },
  { value: "< 8s", label: "tempo médio de resposta" },
];

export function SocialProof() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        flexWrap: "wrap",
        padding: "28px 0 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        marginTop: "40px",
        width: "100%",
      }}
    >
      {metrics.map((m, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
              fontWeight: 700,
              margin: 0,
              color: "#ffffff",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {m.value}
          </p>
          <p
            style={{
              fontSize: "12px",
              opacity: 0.45,
              margin: "4px 0 0",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {m.label}
          </p>
        </div>
      ))}
    </div>
  );
}
