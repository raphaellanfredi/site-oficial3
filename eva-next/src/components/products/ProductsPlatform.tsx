"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProductsPlatform() {
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
    <section style={{ backgroundColor: "#fff", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: 900,
              fontSize: "clamp(32px, 4.5vw, 48px)",
              letterSpacing: "-1.5px",
              color: "#111",
              marginBottom: "16px",
            }}
          >
            Tudo centralizado em um só lugar.
          </h2>
          <p style={{ fontSize: "18px", color: "#888", maxWidth: "560px", margin: "0 auto", lineHeight: 1.6 }}>
            Uma plataforma completa para gerenciar todos os seus canais, equipe e clientes.
          </p>
        </div>

        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.12)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <Image
            src="/platform-screenshot.png"
            alt="Plataforma Eva Inteligência"
            width={1422}
            height={683}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
