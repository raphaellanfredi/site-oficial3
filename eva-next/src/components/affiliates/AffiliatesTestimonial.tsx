export default function AffiliatesTestimonial() {
  return (
    <section style={{ backgroundColor: "#f8f8f8", padding: "120px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            marginBottom: "64px",
            letterSpacing: "-1.5px",
            color: "#111",
          }}
        >
          De quem já está dentro.
        </h2>

        <div className="glass-card gradient-border" style={{ padding: "64px", textAlign: "center" }}>
          <div style={{ color: "#FFB800", fontSize: "22px", marginBottom: "32px", letterSpacing: "4px" }}>
            ★★★★★
          </div>

          <blockquote
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.8,
              color: "#555",
              fontStyle: "italic",
              marginBottom: "40px",
              position: "relative",
            }}
          >
            <span style={{ color: "#FF0080", fontSize: "48px", lineHeight: 0, verticalAlign: "-14px", marginRight: "4px" }}>{'“'}</span>
            Depois de automatizar meu próprio negócio com a Eva, as indicações vieram naturais.
            Todo empresário que eu contava sobre os resultados queria contratar.
            Hoje recebo comissão todo mês sem fazer nada além do que já faço: falar sobre o que funciona.
            <span style={{ color: "#FF6B00", fontSize: "48px", lineHeight: 0, verticalAlign: "-14px", marginLeft: "4px" }}>{'”'}</span>
          </blockquote>

          <p style={{ color: "#aaa", fontWeight: 700, fontSize: "15px", letterSpacing: "1px" }}>
            — Membro Eva Club
          </p>
        </div>
      </div>
    </section>
  );
}
