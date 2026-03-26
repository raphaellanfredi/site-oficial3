import { useEffect, useRef, type ReactNode } from "react";

const WhatsAppIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 3C9.716 3 3 9.716 3 18c0 2.643.693 5.122 1.904 7.272L3 33l7.93-1.875A14.94 14.94 0 0018 33c8.284 0 15-6.716 15-15S26.284 3 18 3z" fill="#25D366"/>
    <path d="M25.5 21.938c-.375-.188-2.216-1.094-2.56-1.219-.343-.125-.593-.188-.843.188-.25.375-.969 1.219-1.188 1.469-.218.25-.437.281-.812.094-.375-.188-1.582-.583-3.013-1.857-1.113-.993-1.865-2.219-2.083-2.594-.219-.375-.024-.578.163-.765.169-.168.375-.438.563-.657.188-.218.25-.375.375-.624.125-.25.063-.47-.031-.657-.094-.188-.844-2.032-1.157-2.782-.304-.73-.613-.63-.843-.642-.218-.01-.469-.013-.719-.013-.25 0-.656.094-.999.469-.344.375-1.313 1.282-1.313 3.126s1.344 3.626 1.532 3.876c.187.25 2.643 4.032 6.405 5.657 3.761 1.625 3.761 1.083 4.436 1.02.675-.063 2.216-.906 2.53-1.781.313-.875.313-1.625.219-1.781-.094-.157-.344-.25-.719-.438z" fill="white"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-grad1" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497"/>
        <stop offset="5%" stopColor="#fdf497"/>
        <stop offset="45%" stopColor="#fd5949"/>
        <stop offset="60%" stopColor="#d6249f"/>
        <stop offset="90%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
    <rect width="36" height="36" rx="9" fill="url(#ig-grad1)"/>
    <circle cx="18" cy="18" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
    <circle cx="25.5" cy="10.5" r="1.5" fill="white"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="9" fill="#1877F2"/>
    <path d="M20.5 19h2.5l1-4h-3.5v-2c0-1.1.45-2 1.75-2H24V7.14A18.05 18.05 0 0021.25 7C18.4 7 16.5 8.73 16.5 12.2V15H13v4h3.5v9h4v-9z" fill="white"/>
  </svg>
);

const CHANNELS = [
  { icon: <WhatsAppIcon />, label: "WhatsApp" },
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: "📧", label: "E-mail" },
  { icon: "📞", label: "Telefone" },
  { icon: "💻", label: "Chat do Site" },
  { icon: "🎵", label: "TikTok" },
  { icon: "🛒", label: "E-commerce" },
];

const PILLARS = [
  {
    number: "01",
    title: "IA Omnichannel",
    desc: "Uma IA que atende em todos os canais ao mesmo tempo. WhatsApp, Instagram, e-mail — tudo integrado, tudo respondido.",
    color: "#FF0080",
  },
  {
    number: "02",
    title: "CRM Inteligente",
    desc: "Visão completa de cada cliente. Histórico, funil de vendas, segmentação automática. Sua equipe sempre informada.",
    color: "#FF4040",
  },
  {
    number: "03",
    title: "Gestão Total",
    desc: "Painel unificado. Sua equipe humana focada no que realmente importa. Você no controle de tudo.",
    color: "#FF6B00",
  },
];

export function Solution() {
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
    <section
      ref={sectionRef}
      id="solucao"
      className="relative w-full py-16 sm:py-24"
      style={{ background: "#000000", borderBottom: "2px solid rgba(255,0,128,0.3)" }}
    >
      <div className="dot-pattern absolute inset-0 pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Label */}
        <div className="flex justify-center mb-6 fade-up">
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1.5"
            style={{
              color: "#FF6B00",
              border: "1px solid rgba(255,107,0,0.4)",
              borderRadius: "4px",
              background: "rgba(255,107,0,0.08)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            A solução
          </span>
        </div>

        <h2
          className="text-center text-white font-black mb-4 fade-up"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          A Eva não é um bot.{" "}
          <span className="gradient-text">É sua melhor funcionária.</span>
        </h2>

        <p
          className="text-center text-white/50 mb-16 max-w-xl mx-auto fade-up"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem" }}
        >
          Ela não falta, não fica doente, não pede aumento — e atende melhor que qualquer humano.
        </p>

        {/* Channels grid */}
        <div
          className="fade-up p-4 sm:p-6 mb-8 sm:mb-12"
          style={{
            background: "#0A0A0A",
            border: "2px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            boxShadow: "6px 6px 0px 0px rgba(255,0,128,0.3)",
          }}
        >
          <p
            className="text-center text-white/40 text-xs font-bold uppercase tracking-widest mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Canais atendidos
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {CHANNELS.map((ch, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 cursor-default"
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "16px",
                    padding: "16px",
                    fontSize: "36px",
                    lineHeight: 1,
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255, 0, 128, 0.12)";
                    el.style.borderColor = "rgba(255, 0, 128, 0.4)";
                    el.style.transform = "translateY(-4px) scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255, 255, 255, 0.06)";
                    el.style.borderColor = "rgba(255, 255, 255, 0.12)";
                    el.style.transform = "";
                  }}
                >
                  {ch.icon}
                </div>
                <span
                  className="text-white/50 text-xs text-center font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {ch.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p
              className="text-white/70 font-bold text-sm"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ✓ Tudo centralizado. &nbsp; ✓ Tudo automatizado. &nbsp; ✓ Você no controle.
            </p>
          </div>
        </div>

        {/* 3 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="fade-up p-5 sm:p-6 flex flex-col gap-4 group transition-all duration-300 cursor-default"
              style={{
                background: "#0A0A0A",
                border: `2px solid ${p.color}`,
                borderRadius: "8px",
                boxShadow: `4px 4px 0px 0px ${p.color}`,
              }}
            >
              <div
                className="text-3xl font-black"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: `linear-gradient(90deg, ${p.color}, #FF6B00)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {p.number}
              </div>
              <h3
                className="text-white font-bold text-xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.01em" }}
              >
                {p.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
