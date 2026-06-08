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
            color: "#888",
            marginBottom: "32px",
          }}
        >
          Transparência total &bull; Sem surpresas
        </div>

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
          Escolha o plano certo<br />
          para sua operação.
        </h1>

        <p style={{ color: "#888", fontSize: "20px", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
          Implantação feita por especialistas. Você recebe sua IA<br />
          pronta em 7 dias, conectada aos seus canais.
        </p>
      </div>
    </section>
  );
}
