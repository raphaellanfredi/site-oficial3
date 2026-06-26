"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const features = [
  { label: "Visão única do cliente", desc: "Histórico completo independente do canal" },
  { label: "Atributos personalizados", desc: "Campos customizados para seu negócio" },
  { label: "Gestão B2B", desc: "Agrupe contatos por empresa" },
  { label: "Funil de vendas integrado", desc: "Acompanhe cada lead" },
  { label: "Follow-up automático", desc: "Até 15 etapas de recuperação" },
  { label: "Anti no Show", desc: "Confirmações automáticas de compromissos" },
];

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
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#FF0080",
              marginBottom: "16px",
            }}
          >
            CRM
          </p>
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
                <span className="gradient-text" style={{ fontWeight: 700, flexShrink: 0 }}>→</span>
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
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 32px 70px rgba(0,0,0,0.12)",
          }}
        >
          <Image
            src="/products/crm-ia.png"
            alt="CRM com IA mostrando funil de vendas em formato Kanban"
            width={1004}
            height={571}
            style={{ width: "100%", height: "auto", display: "block" }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
