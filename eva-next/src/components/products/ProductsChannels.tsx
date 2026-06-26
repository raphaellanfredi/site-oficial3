"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  WhatsAppIcon,
  InstagramIcon,
  EmailIcon,
  PhoneIcon,
  ChatIcon,
  FacebookIcon,
  TikTokIcon,
  CartIcon,
} from "./icons";

const channels = [
  { Icon: WhatsAppIcon, name: "WhatsApp", desc: "API oficial e não-oficial. Atendimento, vendas, follow-up e campanhas em massa." },
  { Icon: InstagramIcon, name: "Instagram", desc: "DMs, comentários e respostas a Stories. Nunca perca uma interação." },
  { Icon: EmailIcon, name: "E-mail", desc: "Caixa de entrada unificada com domínio próprio e continuidade de conversa." },
  { Icon: PhoneIcon, name: "Telefone", desc: "Ligações ativas e receptivas com IA. Atende, qualifica e transfere." },
  { Icon: ChatIcon, name: "Chat do Site", desc: "Widget configurável com dados do usuário logado. Integrado ao seu site." },
  { Icon: FacebookIcon, name: "Facebook", desc: "Mensagens diretas e comentários gerenciados em um só lugar." },
  { Icon: TikTokIcon, name: "TikTok", desc: "Respostas automáticas e gestão de interações para quem vende no TikTok." },
  { Icon: CartIcon, name: "E-commerce", desc: "Integração com Shopify e WooCommerce. Histórico de pedidos na conversa." },
];

function useInView() {
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
  return { ref, inView };
}

export default function ProductsChannels() {
  const { ref, inView } = useInView();
  const { ref: highlightRef, inView: highlightInView } = useInView();

  return (
    <section id="canais" style={{ backgroundColor: "#f8f8f8", padding: "120px 24px", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 85% 0%, rgba(255,0,128,0.05) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
          Canais
        </p>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 48px)",
            textAlign: "center",
            marginBottom: "64px",
            letterSpacing: "-1.5px",
            lineHeight: 1.2,
            color: "#111",
          }}
        >
          Todos os seus canais.<br />
          Um único painel.
        </h2>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            marginBottom: "64px",
          }}
        >
          {channels.map((ch, i) => (
            <div
              key={ch.name}
              className="glass-card"
              style={{
                padding: "32px",
                cursor: "default",
                transition: "all 0.3s ease",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 0.06}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,0,128,0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #FF0080, #FF6B00)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  color: "#fff",
                }}
              >
                <ch.Icon className="h-6 w-6" />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "18px", marginBottom: "8px", color: "#111" }}>{ch.name}</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{ch.desc}</p>
            </div>
          ))}
        </div>

        {/* Destaques com captura real do produto */}
        <div
          ref={highlightRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            className="glass-card flex flex-col sm:flex-row sm:items-center gap-8"
            style={{
              padding: "40px",
              opacity: highlightInView ? 1 : 0,
              transform: highlightInView ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="flex-1">
              <h3 style={{ fontWeight: 700, fontSize: "22px", marginBottom: "8px", color: "#111", letterSpacing: "-0.3px" }}>
                Gerenciamento unificado de todos os canais
              </h3>
              <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                WhatsApp, Instagram, e-mail e mais — todas as conversas da empresa em uma única caixa de entrada. Nenhum canal isolado, nenhum atendimento perdido.
              </p>
            </div>
            <div
              className="sm:w-[180px] sm:flex-shrink-0"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                maxWidth: "260px",
                margin: "0 auto",
              }}
            >
              <Image
                src="/products/atendimento-centralizado.png"
                alt="Painel de conversas unificado com todos os canais de atendimento"
                width={203}
                height={349}
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="lazy"
              />
            </div>
          </div>

          <div
            className="glass-card flex flex-col sm:flex-row sm:items-center gap-8"
            style={{
              padding: "40px",
              opacity: highlightInView ? 1 : 0,
              transform: highlightInView ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <div className="flex-1">
              <h3 style={{ fontWeight: 700, fontSize: "22px", marginBottom: "8px", color: "#111", letterSpacing: "-0.3px" }}>
                Tags de interesse do cliente
              </h3>
              <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Cada lead é classificado automaticamente por interesse. Encontre rapidamente quem quer o quê e personalize a abordagem.
              </p>
            </div>
            <div
              className="sm:w-[180px] sm:flex-shrink-0"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                maxWidth: "260px",
                margin: "0 auto",
              }}
            >
              <Image
                src="/products/tags-interesse.png"
                alt="Etiquetas de interesse do lead organizadas por categoria"
                width={177}
                height={204}
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
