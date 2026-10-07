"use client";

import Link from "next/link";
import Shell from "../Shell";
import Magnetic from "../Magnetic";
import type { SceneTarget } from "../sceneBus";
import { PROVE } from "../site";
import { SEGMENT_LIST } from "./segments";
import type { ArticleCard } from "@/content/articles";
import s from "../eden.module.css";
import a from "./article.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);

export default function ArticlesPage({ articles }: { articles: ArticleCard[] }) {
  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "tree", align: "right", pan: 1, glow: 1 })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>Conteúdo</p>
          <h1 className={s.display} data-hero-title>
            O fruto do <span className={s.fruit}>conhecimento.</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            Guias práticos para atender melhor, vender mais e perder menos clientes.
            <strong> Para empresários, clínicas e escritórios.</strong>
          </p>
        </div>
      </section>

      {SEGMENT_LIST.map((seg, i) => {
        const list = articles.filter((x) => x.segment === seg.key);
        if (!list.length) return null;
        return (
          <section
            key={seg.key}
            data-scene={scene({ shape: i === 1 ? "clock" : "apple", align: "right", glow: 0.6 })}
          >
            <div className={s.wrap}>
              <p className={s.chapterLabel}>{["I", "II", "III"][i]} · {seg.kicker}</p>
              <h2 className={s.verse} data-reveal>{seg.title} {seg.fruit}</h2>
              <div className={a.related}>
                {list.map((r) => (
                  <Link key={r.slug} href={`/conteudo/${r.slug}`} className={s.card} data-fade data-spot>
                    <span className={s.cardTag}>{r.minutes} min de leitura</span>
                    <h3 className={s.cardTitle}>{r.title}</h3>
                    <p className={s.cardText}>{r.description}</p>
                  </Link>
                ))}
              </div>
              <p className={s.body} data-fade>
                <Link href={seg.path} className={a.more}>Ver a Eva para {seg.label.toLowerCase()}</Link>
              </p>
            </div>
          </section>
        );
      })}

      <section className={s.final} data-scene={scene({ shape: "apple", align: "center", glow: 1.6 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>Ler é bom. Provar é melhor.</h2>
          <p className={s.body} data-fade>No ar em 24 horas, ou a implantação é por nossa conta.</p>
          <div className={`${s.ctaRow} ${s.center}`} data-fade>
            <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
            <Magnetic href="/planos" variant="ghost">Ver planos</Magnetic>
          </div>
        </div>
      </section>
    </Shell>
  );
}
