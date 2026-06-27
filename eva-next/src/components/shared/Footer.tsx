"use client";

export default function Footer() {
  const productLinks = [
    { label: "Como funciona", href: "/produtos" },
    { label: "Canais", href: "/produtos#canais" },
    { label: "CRM", href: "/produtos#crm" },
    { label: "Integrações", href: "/produtos#integracoes" },
  ];

  const companyLinks = [
    { label: "Nossa história", href: "#" },
    { label: "Cases", href: "#" },
    { label: "Eva Club", href: "/eva-club" },
  ];

  const partnerLinks = [
    { label: "Programa de Afiliados", href: "/afiliados", external: false },
    { label: "Suporte", href: "https://wa.me/5521993924639", external: true },
  ];

  return (
    <footer style={{ backgroundColor: "#f5f5f5", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "80px 0 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <img src="/logo-eva.png" alt="Eva" style={{ height: "48px" }} />
            </div>
            <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px", maxWidth: "220px" }}>
              Inteligência Artificial omnichannel para empresas que não param.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { label: "IG", href: "https://www.instagram.com/eva_tecnologia/" },
                { label: "WA", href: "https://wa.me/5511961163777" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#888",
                    fontSize: "11px",
                    fontWeight: 700,
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#FF0080";
                    e.currentTarget.style.color = "#FF0080";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                    e.currentTarget.style.color = "#888";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 style={{ color: "#111", fontWeight: 700, fontSize: "14px", marginBottom: "20px", letterSpacing: "0.5px" }}>Produto</h4>
            {productLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ display: "block", color: "#888", fontSize: "14px", marginBottom: "12px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Empresa */}
          <div>
            <h4 style={{ color: "#111", fontWeight: 700, fontSize: "14px", marginBottom: "20px", letterSpacing: "0.5px" }}>Empresa</h4>
            {companyLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ display: "block", color: "#888", fontSize: "14px", marginBottom: "12px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Parceiros */}
          <div>
            <h4 style={{ color: "#111", fontWeight: 700, fontSize: "14px", marginBottom: "20px", letterSpacing: "0.5px" }}>Parceiros</h4>
            {partnerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                style={{ display: "block", color: "#888", fontSize: "14px", marginBottom: "12px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(0,0,0,0.06)",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span style={{ color: "#aaa", fontSize: "14px" }}>
            &copy; 2026 Eva Inteligência. Todos os direitos reservados.
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            <a
              href="https://app.evainteligencia.com.br/hc/central-de-ajuda/articles/1756986596-politica-de-priva"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#aaa", fontSize: "14px", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              Privacidade
            </a>
            <a
              href="https://app.evainteligencia.com.br/hc/central-de-ajuda/articles/1777938226-termos-de-servico"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#aaa", fontSize: "14px", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
