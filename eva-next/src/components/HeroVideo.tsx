"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-line", { yPercent: 115, skewX: 4 });
      gsap.set([".hero-meta", indicatorRef.current], { opacity: 0, y: 16 });

      const tl = gsap.timeline({ delay: 0.55 });

      tl.to(".hero-meta.tagline", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      tl.to(
        ".hero-line",
        {
          yPercent: 0,
          skewX: 0,
          duration: 1.5,
          ease: "expo.out",
          stagger: 0.16,
        },
        "-=0.3"
      );

      tl.to(
        ".hero-meta.subtitle",
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.8"
      );

      tl.to(
        indicatorRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2"
      );

      tl.to(
        ".scroll-dot",
        {
          y: 28,
          duration: 1.1,
          ease: "expo.inOut",
          repeat: -1,
          repeatDelay: 0.5,
        },
        "<"
      );
    }, sectionRef);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        gsap.to(indicatorRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power3.in",
        });
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* ── Video background ─────────────────────────────────────────────── */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays ─────────────────────────────────────────────────────── */}
      {/* White veil: keeps text readable, gives video an ethereal quality */}
      <div className="absolute inset-0 bg-white/[0.82]" />

      {/* Vignette: fades edges to white, holds focus on center content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(255,255,255,0.75) 100%)",
        }}
      />

      {/* Grain: cinematic texture — works on light and dark alike */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "160px 160px",
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center text-neutral-900">

        {/* Tagline */}
        <div className="overflow-hidden mb-6">
          <p className="hero-meta tagline text-[0.7rem] font-semibold tracking-[0.45em] uppercase text-neutral-900/50">
            IA Omnichannel
          </p>
        </div>

        {/* Headline */}
        <h1 className="mb-8">
          <span className="block overflow-hidden leading-[1.05]">
            <span
              className="hero-line block text-[clamp(2.8rem,7.5vw,7rem)] font-black tracking-tight"
              style={{ textShadow: "0 2px 24px rgba(255,255,255,0.9), 0 1px 4px rgba(255,255,255,0.8)" }}
            >
              Enquanto você vive,
            </span>
          </span>
          <span className="block overflow-hidden leading-[1.05]">
            <span
              className="hero-line block text-[clamp(2.8rem,7.5vw,7rem)] font-black tracking-tight"
              style={{ textShadow: "0 2px 24px rgba(255,255,255,0.9), 0 1px 4px rgba(255,255,255,0.8)" }}
            >
              a Eva trabalha.
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-meta subtitle max-w-md text-[clamp(0.9rem,1.8vw,1.15rem)] font-light tracking-wide text-neutral-900/55">
          Atendimento inteligente 24h — WhatsApp, Instagram,<br className="hidden sm:block" /> E-mail e Telefone. Pronta em 7 dias.
        </p>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div
        ref={indicatorRef}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2.5"
      >
        <span className="text-[0.6rem] font-medium tracking-[0.4em] uppercase text-black/35">
          Scroll
        </span>
        {/* Track */}
        <div className="relative h-9 w-px overflow-hidden bg-black/15">
          {/* Dot */}
          <span className="scroll-dot absolute left-0 top-0 h-3 w-full bg-black/40" />
        </div>
      </div>
    </section>
  );
}
