"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import { useEdenMotion } from "./useEdenMotion";
import {
  HELP_CENTER,
  INSTAGRAM,
  LOGIN,
  PRIVACY,
  PROVE,
  SUPPORT_EMAIL,
  TERMS,
  WA_COMERCIAL,
  WA_SUPORTE,
  wa,
} from "./site";
import { SEGMENT_LIST } from "./pages/segments";
import s from "./eden.module.css";

const EdenScene = dynamic(() => import("./EdenScene"), { ssr: false });

const NAV = [
  { href: "/produtos", label: "Produto" },
  { href: "/eva-ia", label: "Eva IA" },
  { href: "/planos", label: "Planos" },
];

const COMPANY = [
  { href: "/sobre", label: "Sobre" },
  { href: "/eva-club", label: "Eva Club" },
  { href: "/suporte", label: "Suporte" },
  { href: "/afiliados", label: "Afiliados" },
];

function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduce) {
        gsap.fromTo(menu, { clipPath: "circle(0% at 92% 4%)" }, { clipPath: "circle(150% at 92% 4%)", duration: 0.8, ease: "expo.inOut" });
        gsap.fromTo(menu.querySelectorAll("[data-menu-item]"), { yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.06, delay: 0.25, ease: "expo.out" });
      }
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
    lenis?.start();
    document.body.style.overflow = "";
  }, [open]);

  return (
    <>
      <header className={s.nav}>
        <Link href="/" className={s.logo} aria-label="Eva, página inicial">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-eva.webp" alt="" />
        </Link>
        <nav className={s.navLinks} aria-label="Principal">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={pathname?.startsWith(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
          <div className={s.dropdown}>
            <button
              type="button"
              className={s.dropdownToggle}
              aria-haspopup="true"
              aria-current={COMPANY.some((c) => pathname?.startsWith(c.href)) ? "page" : undefined}
            >
              Empresa
            </button>
            <div className={s.dropdownPanel}>
              {COMPANY.map((c) => (
                <Link key={c.href} href={c.href} aria-current={pathname?.startsWith(c.href) ? "page" : undefined}>
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className={s.navCta}>
          <a href={LOGIN} className={s.navLogin}>Entrar</a>
          <a href={PROVE} target="_blank" rel="noopener noreferrer" className={s.navPrimary}>Prove a Eva</a>
          <button
            type="button"
            className={s.burger}
            aria-expanded={open}
            aria-controls="menu-eva"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="menu-eva" ref={menuRef} className={s.menu} hidden={!open}>
        <nav aria-label="Menu" className={s.menuLinks}>
          {[{ href: "/", label: "Início" }, ...NAV, ...COMPANY].map((n) => (
            <span key={n.href} className={s.menuMask}>
              <Link href={n.href} data-menu-item onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            </span>
          ))}
        </nav>
        <div className={s.menuFoot}>
          <a href={PROVE} target="_blank" rel="noopener noreferrer" className={s.btnPrimary}>Prove a Eva</a>
          <a href={LOGIN} className={s.btnGhost}>Entrar no painel</a>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footTop}>
        <div className={s.footBrand}>
          <p className={s.footVerse}>Enquanto você vive, a Eva trabalha.</p>
          <a href={PROVE} target="_blank" rel="noopener noreferrer" className={s.btnPrimary}>Prove a Eva</a>
        </div>
        <div className={s.footCols}>
          <div>
            <p className={s.footHead}>Produto</p>
            <Link href="/produtos">Visão geral</Link>
            <Link href="/produtos#canais">Canais</Link>
            <Link href="/produtos#agente">Agente de IA</Link>
            <Link href="/produtos#crm">CRM</Link>
            <Link href="/produtos#automacao">Automação</Link>
            <Link href="/eva-ia">Eva IA</Link>
            <Link href="/central-de-ajuda">Central de Ajuda própria</Link>
            <Link href="/planos">Planos</Link>
          </div>
          <div>
            <p className={s.footHead}>Para quem</p>
            {SEGMENT_LIST.map((g) => (
              <Link key={g.key} href={g.path}>{g.label}</Link>
            ))}
          </div>
          <div>
            <p className={s.footHead}>Empresa</p>
            <Link href="/sobre">Sobre</Link>
            <Link href="/eva-club">Eva Club</Link>
            <Link href="/suporte">Suporte</Link>
            <Link href="/afiliados">Programa de Afiliados</Link>
            <a href={HELP_CENTER} target="_blank" rel="noopener noreferrer">Central de Ajuda da Eva</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div>
            <p className={s.footHead}>Contato</p>
            <a href={wa(WA_COMERCIAL, "Olá! Vim pelo site.")} target="_blank" rel="noopener noreferrer">
              WhatsApp comercial<small>+55 11 96116-3777</small>
            </a>
            <a href={`https://wa.me/${WA_SUPORTE}`} target="_blank" rel="noopener noreferrer">
              WhatsApp suporte<small>+55 21 99392-4639 · também atende ligação, 24h</small>
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`}>
              E-mail<small>{SUPPORT_EMAIL}</small>
            </a>
          </div>
        </div>
      </div>
      <div className={s.footBottom}>
        <span>© 2026 Eva Inteligência · CNPJ 62.162.039/0001-62</span>
        <nav aria-label="Legal">
          <a href={PRIVACY} target="_blank" rel="noopener noreferrer">Privacidade</a>
          <a href={TERMS} target="_blank" rel="noopener noreferrer">Termos</a>
        </nav>
      </div>
    </footer>
  );
}

/** Page frame of the Gênesis site: scene, atmosphere, navigation and motion. */
export default function Shell({ children, scene = true }: { children: React.ReactNode; scene?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  useEdenMotion(root);
  return (
    <div ref={root} className={s.root}>
      {scene && <EdenScene />}
      <div className={s.lantern} aria-hidden="true" />
      <div className={s.grain} aria-hidden="true" />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
