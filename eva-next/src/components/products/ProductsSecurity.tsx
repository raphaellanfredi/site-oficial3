"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldIcon, UserShieldIcon, GlobeLockIcon, MapPinIcon } from "./icons";

const secFeatures = [
  {
    Icon: ShieldIcon,
    title: "Logs de Auditoria",
    text: "Trilha forense de tudo: quem fez o que, quando e de onde. Conformidade total.",
  },
  {
    Icon: UserShieldIcon,
    title: "Controle de Acesso",
    text: "Papéis personalizados com permissões granulares. Cada usuário vê apenas o que precisa.",
  },
  {
    Icon: GlobeLockIcon,
    title: "SSO / SAML",
    text: "Integração com sistemas corporativos de identidade. Acesso revogado instantaneamente ao desligar um funcionário.",
  },
  {
    Icon: MapPinIcon,
    title: "Roteamento Geográfico",
    text: "Direcione clientes para equipes pelo idioma ou localização. Atendimento global, toque local.",
  },
];

export default function ProductsSecurity() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15, rootMargin: "-50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ backgroundColor: "#fff", padding: "120px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#FF0080",
            marginBottom: "16px",
          }}
        >
          Segurança
        </p>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 48px)",
            textAlign: "center",
            marginBottom: "64px",
            letterSpacing: "-1.5px",
            lineHeight: 1.2,
            color: "#111",
          }}
        >
          Segurança enterprise.<br />
          Para qualquer tamanho de empresa.
        </h2>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "32px",
          }}
        >
          {secFeatures.map((f, i) => (
            <div
              key={f.title}
              className="glass-card"
              style={{
                padding: "40px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #FF0080, #FF6B00)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  color: "#fff",
                }}
              >
                <f.Icon className="h-5 w-5" />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "20px", marginBottom: "12px", color: "#111" }}>{f.title}</h3>
              <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
