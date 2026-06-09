"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/produtos", label: "Produto" },
    { href: "/eva-club", label: "Eva Club" },
    { href: "/planos", label: "Planos" },
    { href: "/afiliados", label: "Afiliados" },
  ];

  return (
    <>
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/logo-eva.webp" alt="Eva" style={{ height: "38px" }} />
        </Link>

        <div
          style={{ gap: "32px", alignItems: "center" }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: pathname === link.href ? "#111" : "#888",
                fontSize: "14px",
                fontWeight: 500,
                transition: "color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? "#111" : "#888")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex" style={{ gap: "12px", alignItems: "center" }}>
          <a
            href="https://app.evainteligencia.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#888",
              textDecoration: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.1)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#111";
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#888";
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
            }}
          >
            Login
          </a>
          <a
            href="https://wa.me/5511961163777"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
            style={{ padding: "12px 24px", fontSize: "14px" }}
          >
            Quero minha IA
          </a>
        </div>

        <button
          className="md:hidden flex flex-col"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            gap: "5px",
            padding: "8px",
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "#111",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transformOrigin: "center",
                transform:
                  menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" :
                  menuOpen && i === 1 ? "scaleX(0)" :
                  menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" :
                  "none",
              }}
            />
          ))}
        </button>
      </div>

    </nav>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            zIndex: 100,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#111",
                fontSize: "24px",
                fontWeight: 700,
                textDecoration: "none",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginTop: "16px" }}>
            <a
              href="https://wa.me/5511961163777"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Quero minha IA
            </a>
            <a
              href="https://app.evainteligencia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "#888",
                textDecoration: "none",
                padding: "12px 28px",
                borderRadius: "8px",
                border: "1px solid rgba(0,0,0,0.12)",
              }}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </>
  );
}
