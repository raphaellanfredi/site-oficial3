"use client";

import { useState } from "react";
import Link from "next/link";
import Shell from "../Shell";
import Magnetic from "../Magnetic";
import type { SceneTarget } from "../sceneBus";
import { WA_COMERCIAL, wa } from "../site";
import { SEGMENTS } from "./segments";
import { slugify, type Article, type ArticleCard, type Block } from "@/content/articles";
import s from "../eden.module.css";
import a from "./article.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);

/** Renders **bold** and [links](/path/) inside a string. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) return <Link key={i} href={link[2]} className={a.inline}>{link[1]}</Link>;
        return part;
      })}
    </>
  );
}

/** A message template the reader can copy with one tap. */
function Template({ title, text }: { title: string; text: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the text stays selectable.
    }
  }
  return (
    <figure className={a.template}>
      <figcaption className={a.templateHead}>
        <span>{title}</span>
        <button type="button" onClick={copy} className={a.copy}>
          {copied ? "Copiado" : "Copiar"}
        </button>
      </figcaption>
      <p className={a.templateText}>{text}</p>
    </figure>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 id={slugify(block.text)} className={a.h2}>{block.text}</h2>;
    case "p":
      return <p className={a.p}><Rich text={block.text} /></p>;
    case "list":
      return (
        <ul className={a.list}>
          {block.items.map((it) => <li key={it}><span><Rich text={it} /></span></li>)}
        </ul>
      );
    case "steps":
      return (
        <ol className={a.steps}>
          {block.items.map((it) => (
            <li key={it.title}>
              <p className={a.stepTitle}>{it.title}</p>
              <p className={a.stepText}><Rich text={it.text} /></p>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>{block.head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return <p className={a.callout}><Rich text={block.text} /></p>;
    case "template":
      return <Template title={block.title} text={block.text} />;
  }
}

export default function ArticlePage({
  article,
  minutes,
  related,
}: {
  article: Article;
  minutes: number;
  related: ArticleCard[];
}) {
  const seg = SEGMENTS[article.segment];
  const toc = article.blocks.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const date = (d: string) =>
    new Date(`${d}T12:00:00`).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <Shell>
      <section className={a.hero} data-scene={scene({ shape: "tree", align: "right", pan: 1, glow: 0.6 })}>
        <div className={s.wrap}>
          <nav className={a.crumbs} aria-label="Você está em" data-hero-fade>
            <Link href="/conteudo">Conteúdo</Link>
            <span aria-hidden="true">/</span>
            <Link href={seg.path}>{seg.label}</Link>
          </nav>
          <h1 className={a.title} data-hero-title>{article.title}</h1>
          <p className={s.heroSub} data-hero-fade>{article.lead}</p>
          <p className={a.meta} data-hero-fade>
            {article.updated !== article.published ? (
              <>Atualizado em <time dateTime={article.updated}>{date(article.updated)}</time></>
            ) : (
              <time dateTime={article.published}>{date(article.published)}</time>
            )}{" "}
            · {minutes} min de leitura
          </p>
        </div>
      </section>

      <section className={a.readerSection} data-scene={scene({ shape: "tree", align: "right", pan: 1, glow: 0.25 })}>
        <div className={a.layout}>
          <aside className={a.toc} aria-label="Neste artigo">
            <p className={a.tocHead}>Neste artigo</p>
            <ol>
              {toc.map((h) => (
                <li key={h.text}><a href={`#${slugify(h.text)}`}>{h.text}</a></li>
              ))}
              <li><a href="#perguntas">Perguntas frequentes</a></li>
            </ol>
          </aside>

          <article className={a.reader}>
            {article.blocks.map((b, i) => <BlockView key={i} block={b} />)}

            <div className={a.cta}>
              <p className={a.ctaKicker}>{seg.kicker}</p>
              <p className={a.ctaTitle}>
                {seg.title} <span className={s.fruit}>{seg.fruit}</span>
              </p>
              <p className={a.ctaText}>No ar em 24 horas, ou a implantação é por nossa conta.</p>
              <div className={s.ctaRow}>
                <Magnetic href={wa(WA_COMERCIAL, seg.prove)} external>Prove a Eva</Magnetic>
                <Magnetic href={seg.path} variant="ghost">Ver a Eva para {seg.label.toLowerCase()}</Magnetic>
              </div>
            </div>

            <h2 id="perguntas" className={a.h2}>Perguntas frequentes</h2>
            <div className={s.faq}>
              {article.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.7 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>Continue lendo</p>
          <h2 className={s.verse} data-reveal>Mais frutos do conhecimento.</h2>
          <div className={a.related}>
            {related.map((r) => (
              <Link key={r.slug} href={`/conteudo/${r.slug}`} className={s.card} data-fade data-spot>
                <span className={s.cardTag}>{SEGMENTS[r.segment].kicker}</span>
                <h3 className={s.cardTitle}>{r.title}</h3>
                <p className={s.cardText}>{r.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
