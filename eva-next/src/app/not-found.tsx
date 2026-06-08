import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div
        className="gradient-text"
        style={{ fontWeight: 900, fontSize: "120px", lineHeight: 1, marginBottom: "16px" }}
      >
        404
      </div>
      <h1
        style={{
          fontFamily: "Inter",
          fontWeight: 900,
          fontSize: "clamp(28px, 4vw, 48px)",
          letterSpacing: "-1.5px",
          marginBottom: "16px",
          color: "#111",
        }}
      >
        Página não encontrada.
      </h1>
      <p style={{ color: "#888", fontSize: "18px", marginBottom: "40px", maxWidth: "400px", lineHeight: 1.6 }}>
        O endereço que você acessou não existe ou foi movido.
      </p>
      <Link href="/" className="cta-primary">
        Voltar para o início
      </Link>
    </div>
  );
}
