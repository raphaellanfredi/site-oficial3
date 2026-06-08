"use client";

export default function AffiliatesFinalCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #FF0080, #FF6B00)",
        position: "relative",
        padding: "160px 24px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(40px, 7vw, 72px)",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-2px",
          }}
        >
          Comece sua primeira<br />
          indicação hoje.
        </h2>

        <p
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "48px",
            lineHeight: 1.6,
          }}
        >
          Seu primeiro passo: use a Eva no seu próprio negócio.<br />
          Depois, as indicações vêm naturais.
        </p>

        <a
          href="https://wa.me/5517991827713"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#FF0080",
            padding: "20px 48px",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "18px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Quero ser afiliado Eva
        </a>

        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", marginTop: "24px", letterSpacing: "0.5px" }}>
          Cadastro gratuito &bull; Sem taxa de adesão &bull; Comissão vitalícia
        </p>
      </div>
    </section>
  );
}
