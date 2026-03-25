import { useEffect, useRef } from "react";

const FEATURES = [
  {
    title: "Visão única do cliente",
    desc: "Histórico completo independente do canal",
  },
  {
    title: "Atributos personalizados",
    desc: "Campos customizados para o seu negócio",
  },
  {
    title: "Gestão B2B",
    desc: "Agrupe contatos por empresa e acompanhe contas",
  },
  {
    title: "Funil de vendas integrado",
    desc: "Acompanhe cada lead do início ao fechamento",
  },
  {
    title: "Follow-up automático",
    desc: "Até 15 etapas de recuperação de cliente",
  },
  {
    title: "Anti no Show",
    desc: "Confirmações automáticas de consultas e compromissos",
  },
];

export function ProductsCRM() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left - text */}
        <div>
          <h2
            className="fade-up text-white font-black"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.02em",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            CRM que entende
            <br />
            <span className="gradient-text">o seu cliente.</span>
          </h2>

          <p
            className="fade-up"
            style={{
              color: "#999",
              fontSize: "1.125rem",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.6,
              marginBottom: "40px",
            }}
          >
            Todas as conversas, de todos os canais, unificadas em um único perfil.
            Sua equipe sempre sabe com quem está falando.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="fade-up"
                style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
              >
                <span
                  className="gradient-text font-black flex-shrink-0"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem", marginTop: "2px" }}
                >
                  →
                </span>
                <div>
                  <span
                    style={{
                      color: "white",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {f.title}
                  </span>
                  <span style={{ color: "#666", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}>
                    {" — "}{f.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - dashboard mockup */}
        <div
          className="fade-up"
          style={{
            background: "#111",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "24px",
            minHeight: "400px",
            overflow: "hidden",
          }}
        >
          {/* Browser bar */}
          <div
            style={{
              background: "#000",
              borderRadius: "8px",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e", flexShrink: 0 }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
            <div
              style={{
                flex: 1,
                background: "#1a1a1a",
                borderRadius: "4px",
                height: "20px",
                marginLeft: "8px",
              }}
            />
          </div>

          {/* Content area */}
          <div style={{ display: "flex", gap: "12px", height: "calc(100% - 56px)" }}>
            {/* Sidebar */}
            <div style={{ width: "48px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: "36px",
                    background: i === 1 ? "rgba(255,0,128,0.2)" : "#1a1a1a",
                    borderRadius: "6px",
                    border: i === 1 ? "1px solid rgba(255,0,128,0.4)" : "none",
                  }}
                />
              ))}
            </div>

            {/* Main */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
              {/* Stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                {["#FF0080", "#FF6B00", "#333"].map((color, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#161616",
                      borderRadius: "8px",
                      padding: "12px",
                      borderTop: `2px solid ${color}`,
                    }}
                  >
                    <div style={{ height: "8px", background: color, borderRadius: "4px", marginBottom: "6px", width: `${60 + i * 15}%`, opacity: 0.7 }} />
                    <div style={{ height: "6px", background: "#333", borderRadius: "4px", width: "50%" }} />
                  </div>
                ))}
              </div>

              {/* Conversation list */}
              {[
                { name: "Maria Silva", tag: "Qualificada", tagColor: "#22c55e" },
                { name: "João Mendes", tag: "Follow-up", tagColor: "#FF6B00" },
                { name: "Ana Costa", tag: "Novo lead", tagColor: "#FF0080" },
                { name: "Carlos Lima", tag: "Agendado", tagColor: "#3b82f6" },
              ].map((conv, i) => (
                <div
                  key={i}
                  style={{
                    background: "#161616",
                    borderRadius: "8px",
                    padding: "10px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    border: i === 0 ? "1px solid rgba(255,0,128,0.2)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #FF0080, #FF6B00)",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    {conv.name[0]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ height: "8px", background: "#333", borderRadius: "4px", width: "60%", marginBottom: "4px" }} />
                    <div style={{ height: "6px", background: "#222", borderRadius: "4px", width: "40%" }} />
                  </div>
                  <span
                    style={{
                      background: `${conv.tagColor}20`,
                      border: `1px solid ${conv.tagColor}40`,
                      color: conv.tagColor,
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontFamily: "'Space Grotesk', sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {conv.tag}
                  </span>
                </div>
              ))}

              {/* Progress bars */}
              <div style={{ background: "#161616", borderRadius: "8px", padding: "12px" }}>
                {[80, 60, 45].map((pct, i) => (
                  <div key={i} style={{ marginBottom: i < 2 ? "8px" : "0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                      <div style={{ height: "6px", background: "#333", borderRadius: "4px", width: "30%" }} />
                      <span style={{ color: "#555", fontSize: "0.6rem" }}>{pct}%</span>
                    </div>
                    <div style={{ height: "4px", background: "#222", borderRadius: "4px" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${pct}%`,
                          background: "linear-gradient(90deg, #FF0080, #FF6B00)",
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
