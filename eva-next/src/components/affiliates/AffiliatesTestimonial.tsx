export default function AffiliatesTestimonial() {
  return (
    <section style={{ backgroundColor: "var(--surface)", padding: "120px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            marginBottom: "64px",
            letterSpacing: "-1.5px",
            color: "var(--ink)",
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
              color: "var(--ink-2)",
              fontStyle: "italic",
              marginBottom: "40px",
              position: "relative",
            }}
          >
            <span style={{ color: "var(--link)", fontSize: "48px", lineHeight: 0, verticalAlign: "-14px", marginRight: "4px" }}>{'“'}</span>
            Depois de automatizar meu próprio negócio com a Eva, as indicações vieram naturais.
            Todo empresário que eu contava sobre os resultados queria contratar.
            Hoje recebo comissão todo mês sem fazer nada além do que já faço: falar sobre o que funciona.
            <span style={{ color: "var(--orange-text)", fontSize: "48px", lineHeight: 0, verticalAlign: "-14px", marginLeft: "4px" }}>{'”'}</span>
          </blockquote>

          <p style={{ color: "var(--ink-2)", fontWeight: 700, fontSize: "15px", letterSpacing: "1px" }}>
            — Membro Eva Club
          </p>
        </div>
      </div>
    </section>
  );
}
