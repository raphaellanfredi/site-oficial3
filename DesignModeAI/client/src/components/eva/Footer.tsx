import { Linkedin, Instagram, Youtube } from "lucide-react";

const LINKS = {
  Produto: ["Eva One", "Eva PRO", "Eva BLACK", "Gestor de Condomínios", "Prospecção Infinita"],
  Empresa: ["Sobre", "Contato", "Blog", "Política de Privacidade", "Termos de Uso"],
  Afiliados: ["Programa de Afiliados", "Comissões", "Área do Afiliado"],
  Suporte: ["Central de Ajuda", "WhatsApp", "Status do Sistema"],
};

export function Footer() {
  return (
    <footer
      className="relative w-full"
      style={{ background: "#000000" }}
    >
      {/* Top gradient line */}
      <div
        style={{
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, #FF0080 30%, #FF6B00 70%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <span
                className="gradient-text text-2xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
              >
                Eva
              </span>
              <span
                className="text-xs font-bold px-1.5 py-0.5"
                style={{
                  background: "rgba(255,0,128,0.15)",
                  border: "1px solid rgba(255,0,128,0.4)",
                  color: "#FF0080",
                  borderRadius: "3px",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                IA
              </span>
            </div>

            <p
              className="text-white/40 text-sm leading-relaxed max-w-[180px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Seu primeiro agente de IA profissional. Atendimento inteligente 24h.
            </p>

            <div className="flex gap-3">
              {[
                {
                  icon: <Linkedin className="h-4 w-4" />,
                  href: "#",
                  label: "LinkedIn",
                },
                {
                  icon: <Instagram className="h-4 w-4" />,
                  href: "https://www.instagram.com/eva.inteligencia.art/",
                  label: "Instagram",
                },
                {
                  icon: <Youtube className="h-4 w-4" />,
                  href: "https://www.youtube.com/@EvaIntelig%C3%AAnciaArt",
                  label: "YouTube",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "#111",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "6px",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#FF0080";
                    el.style.border = "1px solid #FF0080";
                    el.style.color = "white";
                    el.style.boxShadow = "2px 2px 0px 0px rgba(255,0,128,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#111";
                    el.style.border = "1px solid rgba(255,255,255,0.12)";
                    el.style.color = "rgba(255,255,255,0.5)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h4
                className="text-white font-bold text-sm uppercase tracking-wider"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 text-sm transition-colors duration-200 hover:text-white"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-white/25 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 Eva Inteligência. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-white/20 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              Feito com
            </span>
            <span className="gradient-text text-xs font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              ♥ IA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
