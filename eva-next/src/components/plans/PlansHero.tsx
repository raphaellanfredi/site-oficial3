export default function PlansHero() {
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
          background: "radial-gradient(ellipse at 50% -20%, rgba(255,0,128,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(0,0,0,0.1)",
            padding: "8px 20px",
            borderRadius: "100px",
            fontSize: "13px",
            color: "var(--ink-2)",
            marginBottom: "32px",
          }}
        >
          Transparência total &bull; Sem surpresas
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(40px, 6vw, 64px)",
            letterSpacing: "-2.5px",
            lineHeight: 1.05,
            marginBottom: "24px",
            color: "var(--ink)",
          }}
        >
          Escolha o plano certo<br />
          para sua operação.
        </h1>

        <p style={{ color: "var(--ink-2)", fontSize: "20px", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
          Montada pela Eva IA, validada por especialistas.<br />
          Pronta em 24 horas, conectada aos seus canais.
        </p>
      </div>
    </section>
  );
}
