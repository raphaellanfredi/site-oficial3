"use client";

import Shell from "../Shell";
import Magnetic from "../Magnetic";
import Growth from "../Growth";
import type { SceneTarget } from "../sceneBus";
import { PROVE } from "../site";
import s from "../eden.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);

const HOW = [
  { tag: "Em 24 horas", title: "Implantação", text: "A Eva IA monta a arquitetura e treina o agente. Especialistas validam antes de entrar no ar." },
  { tag: "Antes do go-live", title: "Validação", text: "Uma bateria de testes cobre roteamento, fatos, recusa e limites. A IA admite o que não sabe." },
  { tag: "Depois do go-live", title: "90 dias de acompanhamento", text: "Auditoria do comportamento da IA e ajuste do que aparecer." },
  { tag: "Para sempre", title: "Eva Club", text: "Comunidade, treinamento toda semana e suporte com resposta em até 1 hora." },
];

export default function AboutPage() {
  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "apple", align: "right", glow: 1.3 })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>Sobre a Eva</p>
          <h1 className={s.display} data-hero-title>
            A primeira a colher <span className={s.fruit}>o conhecimento.</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            Na história, Eva foi a primeira a estender a mão para o fruto do conhecimento.
            <strong> A nossa Eva faz o mesmo pela sua empresa: colhe tudo o que o seu negócio sabe e coloca para trabalhar.</strong>
          </p>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "right", pan: -1, glow: 0.8 })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>I · O nome</p>
          <h2 className={s.verse} data-reveal>Por que Eva.</h2>
          <p className={s.body} data-fade>
            Todo negócio guarda um conhecimento que ninguém tem tempo de usar: as respostas que o dono sabe de cor, o jeito certo de falar com cada cliente, o horário que sempre lota. A Eva existe para colher esse conhecimento e transformar em atendimento, venda e agenda cheia, 24 horas por dia.
          </p>
          <p className={s.body} data-fade>
            Não é um chatbot. <strong>É uma funcionária treinada, entregue pronta.</strong>
          </p>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "center", pan: 1, glow: 0.5 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>II · Os frutos</p>
          <h2 className={s.verse} data-reveal>Até aqui.</h2>
          <dl className={s.numbers}>
            <div>
              <dt><span data-count="300">300</span>+</dt>
              <dd>empresas atendidas</dd>
            </div>
            <div>
              <dt><span data-count="20">20</span>M+</dt>
              <dd>atendimentos</dd>
            </div>
            <div>
              <dt><span data-count="99.9" data-decimals="1">99,9</span>%</dt>
              <dd>de precisão</dd>
            </div>
          </dl>
          <p className={s.note}>Levantamento próprio da Eva.</p>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.6 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>III · Como trabalhamos</p>
          <h2 className={s.verse} data-reveal>Do plantio à colheita.</h2>
          <div className={s.grid}>
            {HOW.map((h) => (
              <article key={h.title} className={s.card} data-fade data-spot>
                <span className={s.cardTag}>{h.tag}</span>
                <h3 className={s.cardTitle}>{h.title}</h3>
                <p className={s.cardText}>{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "clock", align: "right" })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>IV · 24 horas</p>
          <h2 className={s.verse} data-reveal>Implantar é plantar.</h2>
          <Growth />
        </div>
      </section>

      <section className={s.final} data-scene={scene({ shape: "apple", align: "center", glow: 1.6 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>Prove do fruto do conhecimento.</h2>
          <p className={s.body} data-fade>Eva Inteligência · CNPJ 62.162.039/0001-62</p>
          <div className={`${s.ctaRow} ${s.center}`} data-fade>
            <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
            <Magnetic href="/planos" variant="ghost">Ver planos</Magnetic>
          </div>
        </div>
      </section>
    </Shell>
  );
}
