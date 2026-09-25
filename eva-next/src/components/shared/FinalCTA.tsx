"use client";

export default function FinalCTA() {
  return (
    <section
      style={{
        background: "var(--gradient-action)",
        position: "relative",
        padding: "160px 24px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(40px, 7vw, 72px)",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-2px",
          }}
        >
          Sua concorrência<br />
          já está usando IA.
        </h2>

        <p
          style={{
            fontSize: "22px",
            color: "#fff",
            marginBottom: "48px",
            lineHeight: 1.6,
          }}
        >
          A pergunta não é se você vai automatizar.<br />
          É quando.
        </p>

        <a
          href="https://wa.me/5511961163777"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#fff",
            color: "var(--ink)",
            padding: "20px 48px",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "18px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
            letterSpacing: "-0.3px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Quero minha IA agora
        </a>

        <p style={{ color: "#fff", fontSize: "15px", marginTop: "24px", letterSpacing: "0.5px" }}>
          IA pronta em 24 horas &nbsp;&bull;&nbsp; Zero programação &nbsp;&bull;&nbsp; Zero caos
        </p>
      </div>
    </section>
  );
}
