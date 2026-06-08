export default function ProductsHero() {
  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "160px 24px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% -20%, rgba(255,107,0,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(40px, 6vw, 64px)",
            letterSpacing: "-2.5px",
            lineHeight: 1.05,
            marginBottom: "24px",
            color: "#111",
          }}
        >
          Uma IA que não dorme,<br />
          não falta e <span className="gradient-text">não erra</span>.
        </h1>

        <p style={{ color: "#888", fontSize: "20px", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
          A Eva é um sistema completo de atendimento e gestão
          omnichannel — treinado para o seu negócio,
          entregue pronto em 7 dias.
        </p>
      </div>
    </section>
  );
}
