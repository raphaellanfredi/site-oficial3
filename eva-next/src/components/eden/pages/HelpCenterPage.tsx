"use client";

import Shell from "../Shell";
import Magnetic from "../Magnetic";
import type { SceneTarget } from "../sceneBus";
import { HELP_CENTER, PROVE } from "../site";
import s from "../eden.module.css";
import m from "./more.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);

const CATEGORIES = [
  { name: "Primeiros passos", count: "8 artigos" },
  { name: "Agendamentos", count: "5 artigos" },
  { name: "Pagamentos", count: "6 artigos" },
  { name: "Trocas e devoluções", count: "4 artigos" },
];

export default function HelpCenterPage() {
  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "tree", align: "right", pan: -1 })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>Central de Ajuda própria</p>
          <h1 className={s.display} data-hero-title>
            Um trabalho, <span className={s.fruit}>dois resultados.</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            Cada conta Eva ganha um portal público de ajuda, com categorias, artigos e busca.
            <strong> E cada artigo que você publica ensina a sua IA.</strong>
          </p>
          <div className={s.ctaRow} data-hero-fade>
            <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
            <Magnetic href={HELP_CENTER} variant="ghost" external>Ver a Central da Eva</Magnetic>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "left", glow: 0.5 })}>
        <div className={s.wrap}>
          <div className={s.split}>
            <div>
              <p className={s.chapterLabel}>I · O portal</p>
              <h2 className={s.verse} data-reveal>A sua central, com a sua marca.</h2>
              <p className={s.body} data-fade>
                Um portal público onde o seu cliente encontra respostas sozinho: organizado por categorias, com artigos e busca. Menos perguntas repetidas chegando no WhatsApp.
              </p>
            </div>
            <div className={m.portal} data-fade aria-label="Exemplo de portal de ajuda com busca e categorias">
              <div className={m.portalTop}>
                <p className={m.portalBrand}>Central de Ajuda · Sua Marca</p>
                <p className={m.portalSearch}>Como posso ajudar?</p>
              </div>
              <div className={m.portalCats}>
                {CATEGORIES.map((c) => (
                  <p key={c.name} className={m.portalCat}>
                    {c.name}
                    <small>{c.count}</small>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "center", pan: -1, glow: 0.6 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>II · O segredo</p>
          <h2 className={s.verse} data-reveal>Escrever um artigo ensina o agente.</h2>
          <p className={s.body} data-fade>
            Os artigos da sua Central alimentam a base de conhecimento da IA automaticamente. Você documenta uma vez, e o portal e o agente ficam em dia ao mesmo tempo.
          </p>
          <div className={m.flow} data-fade>
            <div className={m.node}>
              <p className={m.nodeIcon}>i.</p>
              <p className={m.nodeTitle}>Você publica um artigo</p>
              <p className={m.nodeText}>Na sua Central de Ajuda, visível para os seus clientes.</p>
            </div>
            <span className={m.arrow} aria-hidden="true" />
            <div className={`${m.node} ${m.nodeMid}`}>
              <p className={m.nodeIcon}>ii.</p>
              <p className={m.nodeTitle}>Vira conhecimento da IA</p>
              <p className={m.nodeText}>A base do agente se atualiza sozinha.</p>
            </div>
            <span className={m.arrow} aria-hidden="true" />
            <div className={`${m.node} ${m.nodeEnd}`}>
              <p className={m.nodeIcon}>iii.</p>
              <p className={m.nodeTitle}>A resposta sai certa</p>
              <p className={m.nodeText}>No WhatsApp, no Instagram, no site.</p>
            </div>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.8 })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>III · Na prática</p>
          <h2 className={s.verse} data-reveal>A nossa também é assim.</h2>
          <p className={s.body} data-fade>
            A própria Central de Ajuda da Eva roda neste formato. Entre, navegue e veja o que o seu cliente vai encontrar.
          </p>
          <div className={s.ctaRow} data-fade>
            <Magnetic href={HELP_CENTER} variant="ghost" external>Abrir a Central da Eva</Magnetic>
          </div>
        </div>
      </section>

      <section className={s.final} data-scene={scene({ shape: "apple", align: "center", glow: 1.6 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>Documente uma vez. Colha duas.</h2>
          <p className={s.body} data-fade>A Central de Ajuda vem com a Eva, em todos os planos.</p>
          <div className={`${s.ctaRow} ${s.center}`} data-fade>
            <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
            <Magnetic href="/planos" variant="ghost">Ver planos</Magnetic>
          </div>
        </div>
      </section>
    </Shell>
  );
}
