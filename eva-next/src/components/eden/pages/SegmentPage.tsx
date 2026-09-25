"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import Shell from "../Shell";
import Magnetic from "../Magnetic";
import Guarantee from "../Guarantee";
import type { SceneTarget } from "../sceneBus";
import { WA_COMERCIAL, wa } from "../site";
import { ChatDemo } from "./Demos";
import { SEGMENT_LIST, SEGMENTS, type Segment, type SegmentKey } from "./segments";
import s from "../eden.module.css";
import g from "./segment.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);

/** The segment's day, hour by hour, on a line that draws itself on scroll. */
function Day({ items }: { items: Segment["day"]["items"] }) {
  const ref = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const line = el.querySelector<HTMLElement>("[data-line]");
    const tween = line
      ? gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 70%", end: "bottom 60%", scrub: true } })
      : null;
    const dots = gsap.utils.toArray<HTMLElement>(el.querySelectorAll("[data-dot]"));
    const pops = dots.map((dot) =>
      gsap.from(dot, { scale: 0, duration: 0.5, ease: "back.out(3)", scrollTrigger: { trigger: dot, start: "top 72%" } }),
    );
    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
      pops.forEach((p) => {
        p.scrollTrigger?.kill();
        p.kill();
      });
    };
  }, []);
  return (
    <ol ref={ref} className={g.day}>
      <span className={g.dayLine} data-line aria-hidden="true" />
      {items.map((it) => (
        <li key={it.time} className={g.dayItem} data-fade>
          <span className={g.dayDot} data-dot aria-hidden="true" />
          <p className={g.dayTime}>{it.time}</p>
          <div>
            <p className={g.dayWhat}>{it.what}</p>
            <p className={g.dayText}>{it.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function SegmentPage({ segment }: { segment: SegmentKey }) {
  const seg = SEGMENTS[segment];
  const prove = wa(WA_COMERCIAL, seg.prove);
  const others = SEGMENT_LIST.filter((o) => o.key !== seg.key);

  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "apple", align: "right", glow: 1.2 })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>{seg.kicker}</p>
          <h1 className={s.display} data-hero-title>
            {seg.title} <span className={s.fruit}>{seg.fruit}</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            {seg.sub}
            <strong>{seg.strong}</strong>
          </p>
          <ul className={s.trust} data-hero-fade>
            <li>No ar em 24 horas</li>
            <li>Montada pela Eva IA, validada por especialistas</li>
            <li>Sem fidelidade</li>
          </ul>
          <div className={s.ctaRow} data-hero-fade>
            <Magnetic href={prove} external>Prove a Eva</Magnetic>
            <Magnetic href="/planos" variant="ghost">Ver planos</Magnetic>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "chaos", align: "center" })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>I · A espera</p>
          <h2 className={s.verse} data-reveal>{seg.pain.verse}</h2>
          <p className={s.body} data-fade>
            {seg.pain.body} <strong>{seg.pain.strong}</strong>
          </p>
        </div>
      </section>

      <section data-scene={scene({ shape: "clock", align: "right", glow: 0.7 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>II · Vinte e quatro horas</p>
          <h2 className={s.verse} data-reveal>{seg.day.title}</h2>
          <Day items={seg.day.items} />
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "center", pan: 0, glow: 0.45 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>III · O que ela faz</p>
          <h2 className={s.verse} data-reveal>Feita para a sua rotina.</h2>
          <div className={`${s.grid} ${g.features}`}>
            {seg.features.map((f) => (
              <article key={f.title} className={s.card} data-fade data-spot>
                <span className={s.cardTag}>{f.tag}</span>
                <h3 className={s.cardTitle}>{f.title}</h3>
                <p className={s.cardText}>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "left", glow: 0.9 })}>
        <div className={s.wrap}>
          <div className={s.split}>
            <div data-fade>
              <ChatDemo name={seg.chat.name} label={seg.chat.label} steps={seg.chat.steps} />
            </div>
            <div>
              <p className={s.chapterLabel}>IV · Na prática</p>
              <h2 className={s.verse} data-reveal>Ela não só responde. Resolve.</h2>
              <p className={s.body} data-fade>
                Treinada com o conhecimento do seu negócio, a Eva IA consulta a agenda e os seus sistemas no meio da conversa.
                <strong> Quando não sabe, admite e chama a sua equipe.</strong>
              </p>
              <p className={s.body} data-fade>
                <Link href="/produtos" className={g.more}>Ver tudo o que a Eva faz</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "clock", align: "right" })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>V · 24 horas</p>
          <h2 className={s.verse} data-reveal>{seg.harvest}</h2>
          <p className={s.body} data-fade>
            Depois do pagamento e do formulário de onboarding, a Eva IA monta a arquitetura com o conhecimento do seu negócio. Especialistas validam, e ela entra no ar.
          </p>
          <Guarantee />
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.6 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>VI · Perguntas</p>
          <h2 className={s.verse} data-reveal>Antes de colher.</h2>
          <div className={s.faq}>
            {seg.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "right", pan: 1, glow: 0.6 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>VII · Também para</p>
          <h2 className={s.verse} data-reveal>Outros jardins da Eva.</h2>
          <div className={g.others}>
            {others.map((o) => (
              <Link key={o.key} href={o.path} className={s.card} data-fade data-spot>
                <span className={s.cardTag}>{o.kicker}</span>
                <h3 className={s.cardTitle}>
                  {o.title} {o.fruit}
                </h3>
                <p className={s.cardText}>{o.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={s.final} data-scene={scene({ shape: "apple", align: "center", glow: 1.6 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>{seg.final}</h2>
          <p className={s.body} data-fade>No ar em 24 horas, ou a implantação é por nossa conta.</p>
          <div className={`${s.ctaRow} ${s.center}`} data-fade>
            <Magnetic href={prove} external>Prove a Eva</Magnetic>
            <Magnetic href="/planos" variant="ghost">Ver planos</Magnetic>
          </div>
        </div>
      </section>
    </Shell>
  );
}
