"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const ITEMS = [
  {
    n: "01",
    title: "IA treinada para o seu negócio",
    desc: "Não é chatbot genérico. É um agente com o seu conhecimento, tom de voz e processos.",
  },
  {
    n: "02",
    title: "Omnichannel de verdade",
    desc: "WhatsApp, Instagram, E-mail, Telefone — tudo num painel, sem perder nenhuma conversa.",
  },
  {
    n: "03",
    title: "Pronta em 7 dias",
    desc: "Nossa equipe configura tudo. Você transmite o conhecimento. A Eva entra ao vivo em uma semana.",
  },
  {
    n: "04",
    title: "Zero processos trabalhistas",
    desc: "Sem férias, sem atestados. A Eva trabalha 24h por dia, 365 dias por ano.",
  },
];

export default function PinnedFeatures() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrub =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
        ? 0.5
        : 1.5;

    const ctx = gsap.context(() => {
      gsap.set(".pf-bg",      { x: -80, opacity: 0,    force3D: true });
      gsap.set(".pf-content", { x: 55,                 force3D: true });
      gsap.set(".pf-label",   { y: 22,  opacity: 0,    force3D: true });
      gsap.set(".pf-heading", { yPercent: 110,         force3D: true });
      gsap.set(".pf-rule",    { scaleX: 0,             force3D: true });
      gsap.set(".pf-item",    { y: 64,  opacity: 0,    force3D: true });
      gsap.set(".pf-cta",     { y: 28,  opacity: 0,    force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=240%",
          pin: true,
          scrub,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ── Phase 1 — scene establishes ──────────────────────────────────────

      tl.to(".pf-bg",
        { x: 0, opacity: 0.06, duration: 0.6, ease: "power3.out", force3D: true },
        0
      );

      tl.to(".pf-content",
        { x: 0, duration: 0.8, ease: "power3.out", force3D: true },
        0
      );

      tl.to(".pf-label",
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", force3D: true },
        0.12
      );

      tl.to(".pf-heading",
        { yPercent: 0, duration: 0.6, ease: "power3.out", force3D: true },
        0.22
      );

      tl.to(".pf-rule",
        { scaleX: 1, duration: 0.6, ease: "power3.out", force3D: true },
        0.34
      );

      // ── Phase 2 — items enter in sequence, 0.2s stagger ──────────────────

      tl.to(".pf-item",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.2,
          force3D: true,
        },
        0.55
      );

      // ── Phase 3 — CTA ─────────────────────────────────────────────────────

      tl.to(".pf-cta",
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", force3D: true },
        1.75
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-white"
    >
      {/* ── Background watermark ─────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          aria-hidden
          className="pf-bg absolute -bottom-8 -left-6 select-none
                     font-black leading-none tracking-tighter text-black"
          style={{ fontSize: "clamp(8rem, 26vw, 24rem)" }}
        >
          EVA
        </span>
      </div>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="pf-content relative z-10 flex h-full items-center px-8 sm:px-16 lg:px-28">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1fr_1.5fr]">

          {/* Left column */}
          <div className="flex flex-col justify-center">
            <p className="pf-label mb-5 text-[0.65rem] font-semibold
                          tracking-[0.45em] uppercase text-black/40">
              Por que a Eva
            </p>

            <div className="overflow-hidden mb-10">
              <h2
                className="pf-heading font-black leading-[1.06] tracking-tight text-neutral-900"
                style={{ fontSize: "clamp(2rem, 4.2vw, 4rem)" }}
              >
                O que muda quando<br />a IA trabalha<br />por você.
              </h2>
            </div>

            <div className="pf-rule h-px w-10 origin-left bg-black/15" />
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-center gap-8">
            {ITEMS.map((item) => (
              <div key={item.n} className="pf-item flex gap-5">
                <span className="mt-0.5 shrink-0 font-mono text-[0.6rem]
                                 font-bold tabular-nums text-black/20">
                  {item.n}
                </span>
                <div>
                  <p className="mb-1.5 text-sm font-bold leading-snug text-neutral-900">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-black/45">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            <a
              href="/planos"
              className="pf-cta mt-1 inline-flex w-fit items-center gap-2
                         text-xs font-semibold tracking-wide text-black/40
                         transition-colors duration-200 hover:text-black"
            >
              Ver todos os planos
              <span className="text-black/20">→</span>
            </a>
          </div>

        </div>
      </div>

      {/* ── Scroll depth indicator ────────────────────────────────────────── */}
      <div className="absolute right-8 top-1/2 z-20 -translate-y-1/2 flex flex-col gap-1.5">
        {ITEMS.map((item) => (
          <div key={item.n} className="h-px w-3 bg-black/10" />
        ))}
      </div>
    </section>
  );
}
