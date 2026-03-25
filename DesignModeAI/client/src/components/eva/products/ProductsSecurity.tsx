import { useEffect, useRef } from "react";

const SECURITY_ITEMS = [
  {
    icon: "🔒",
    title: "Logs de Auditoria",
    desc: "Trilha forense completa: quem fez o quê, quando e de onde. Conformidade total para auditorias internas e externas.",
  },
  {
    icon: "👤",
    title: "Controle de Acesso Granular",
    desc: "Crie papéis personalizados com permissões específicas. Cada usuário acessa apenas o que precisa. Sem mais, sem menos.",
  },
  {
    icon: "🌐",
    title: "SSO / SAML",
    desc: "Integração com sistemas corporativos de identidade. Quando um funcionário sai da empresa, o acesso é revogado instantaneamente.",
  },
  {
    icon: "📊",
    title: "Roteamento Geográfico",
    desc: "Direcione clientes para equipes com base em idioma ou localização. Atendimento global com toque local.",
  },
];

export function ProductsSecurity() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#000", padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          className="fade-up text-center text-white font-black"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Segurança enterprise.
          <br />
          <span className="gradient-text">Para qualquer tamanho de empresa.</span>
        </h2>

        <p
          className="fade-up text-center mx-auto"
          style={{
            color: "#999",
            fontSize: "1.125rem",
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.6,
            marginBottom: "64px",
          }}
        >
          Os mesmos padrões de segurança usados por grandes corporações,
          acessíveis para o seu negócio.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {SECURITY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="fade-up"
              style={{
                background: "#0a0a0a",
                border: "2px solid rgba(255,0,128,0.2)",
                borderRadius: "12px",
                padding: "clamp(24px, 4vw, 48px)",
                transition: "all 0.3s ease",
                cursor: "default",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#FF0080";
                el.style.boxShadow = "4px 4px 0px 0px #FF0080";
                el.style.transform = "translate(-2px,-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,0,128,0.2)";
                el.style.boxShadow = "none";
                el.style.transform = "none";
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #FF0080, #FF6B00)",
                  borderRadius: "12px",
                  width: "56px",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  color: "white",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "#666",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
