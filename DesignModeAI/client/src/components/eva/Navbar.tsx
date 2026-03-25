import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Produto", href: "/produtos" },
    { label: "Planos", href: "/planos" },
    { label: "Afiliados", href: "/afiliados" },
    { label: "Eva Club", href: "/#eva-club" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.92)" : "#000000",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: "2px solid #FF0080",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo + Badge */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/logo-eva.png"
            alt="Eva"
            style={{ height: "36px", width: "auto" }}
          />
          <span
            className="text-xs font-bold px-2 py-0.5"
            style={{
              background: "rgba(255,0,128,0.15)",
              border: "1px solid rgba(255,0,128,0.5)",
              color: "#FF0080",
              fontFamily: "'Space Grotesk', sans-serif",
              borderRadius: "4px",
            }}
          >
            IA
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.evainteligencia.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-4 py-2.5 text-sm whitespace-nowrap"
            style={{ borderRadius: "8px" }}
          >
            Login
          </a>
          <button
            className="btn-primary px-4 py-2.5 text-sm whitespace-nowrap"
            style={{ borderRadius: "8px" }}
            onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
          >
            Quero minha IA
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white flex flex-col justify-center gap-1.5 w-8 h-8 flex-shrink-0"
          aria-label="Menu"
        >
          <span className="block h-0.5 bg-white transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
          <span className="block h-0.5 bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block h-0.5 bg-white transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
        </button>
      </div>

      {/* Animated gradient line */}
      <div className="navbar-line" />

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? "400px" : "0" }}
      >
        <div
          className="px-4 py-4 flex flex-col gap-3 bg-black"
          style={{ borderTop: "1px solid rgba(255,0,128,0.3)" }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-semibold py-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app.evainteligencia.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full py-3 text-sm text-center"
            style={{ borderRadius: "8px" }}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </a>
          <button
            className="btn-primary w-full py-3 text-sm mt-1"
            style={{ borderRadius: "8px" }}
            onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
          >
            Quero minha IA
          </button>
        </div>
      </div>
    </nav>
  );
}
