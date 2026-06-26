"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MicWaveIcon } from "./icons";

export default function ProductsTranscription() {
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
    <section style={{ backgroundColor: "#fff", padding: "120px 24px", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.06) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={ref}
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #FF0080, #FF6B00)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            color: "#fff",
          }}
        >
          <MicWaveIcon className="h-7 w-7" />
        </div>

        <p
          style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#FF0080",
            marginBottom: "16px",
          }}
        >
          Novo recurso
        </p>

        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            marginBottom: "20px",
            letterSpacing: "-1.5px",
            lineHeight: 1.2,
            color: "#111",
          }}
        >
          Áudios virados em texto.<br />
          <span className="gradient-text">Automaticamente.</span>
        </h2>

        <p style={{ color: "#888", fontSize: "18px", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 48px" }}>
          Recebeu um áudio no WhatsApp? A Eva transcreve em segundos. Sua equipe lê em vez de ouvir, e nenhuma informação importante fica perdida num áudio de 3 minutos.
        </p>

        <div
          style={{
            display: "inline-block",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 32px 70px rgba(0,0,0,0.1)",
            backgroundColor: "#0f0f10",
            padding: "20px",
            maxWidth: "420px",
          }}
        >
          <Image
            src="/products/transcricao-audio.jpeg"
            alt="Player de áudio do WhatsApp com transcrição automática do texto abaixo"
            width={437}
            height={174}
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
