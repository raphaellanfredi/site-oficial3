"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  { icon: "→", label: "Visão única do cliente", desc: "Histórico completo independente do canal" },
  { icon: "→", label: "Atributos personalizados", desc: "Campos customizados para seu negócio" },
  { icon: "→", label: "Gestão B2B", desc: "Agrupe contatos por empresa" },
  { icon: "→", label: "Funil de vendas integrado", desc: "Acompanhe cada lead" },
  { icon: "→", label: "Follow-up automático", desc: "Até 15 etapas de recuperação" },
  { icon: "→", label: "Anti no Show", desc: "Confirmações automáticas de compromissos" },
];

function DashboardMock() {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "16px",
        padding: "24px",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
          <div key={c} style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: c }} />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "20px" }}>
        {[
          { label: "Ativos", value: "1.284", color: "#FF0080" },
          { label: "Conversões", value: "342", color: "#FF6B00" },
          { label: "Resp. Média", value: "47s", color: "#00AA55" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              backgroundColor: "#e8e8e8",
              borderRadius: "8px",
              padding: "12px",
              textAlign: "center",
            }}
          >
            <div style={{ color: s.color, fontWeight: 900, fontSize: "18px" }}>{s.value}</div>
            <div style={{ color: "#888", fontSize: "11px", marginTop: "2px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {[
        { name: "Maria S.", tag: "Lead quente", tagColor: "#FF0080" },
        { name: "João P.", tag: "Em negociação", tagColor: "#FF6B00" },
        { name: "Ana L.", tag: "Fechado", tagColor: "#00AA55" },
        { name: "Carlos M.", tag: "Follow-up", tagColor: "#8B5CF6" },
      ].map((contact) => (
        <div
          key={contact.name}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 0",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FF0080, #FF6B00)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              {contact.name[0]}
            </div>
            <span style={{ color: "#333", fontSize: "14px" }}>{contact.name}</span>
          </div>
          <span
            style={{
              backgroundColor: `${contact.tagColor}18`,
              color: contact.tagColor,
              fontSize: "11px",
              fontWeight: 600,
              padding: "4px 10px",
              borderRadius: "100px",
            }}
          >
            {contact.tag}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ProductsCRM() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="crm" style={{ backgroundColor: "#fff", padding: "120px 24px" }}>
      <div
        ref={ref}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: 900,
              fontSize: "clamp(32px, 4.5vw, 48px)",
              marginBottom: "32px",
              letterSpacing: "-1.5px",
              lineHeight: 1.2,
              color: "#111",
            }}
          >
            CRM que entende<br />
            o seu cliente.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {features.map((f) => (
              <div key={f.label} style={{ display: "flex", gap: "12px" }}>
                <span className="gradient-text" style={{ fontWeight: 700, flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <span style={{ fontWeight: 600, fontSize: "15px", color: "#111" }}>{f.label}</span>
                  <span style={{ color: "#888", fontSize: "15px" }}> — {f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
