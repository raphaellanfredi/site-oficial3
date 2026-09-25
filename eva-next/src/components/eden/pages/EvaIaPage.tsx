"use client";

import Shell from "../Shell";
import Magnetic from "../Magnetic";
import type { SceneTarget } from "../sceneBus";
import { PROVE } from "../site";
import { PanelDemo } from "./Demos";
import s from "../eden.module.css";
import m from "./more.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);

const PLACES = [
  { who: "Para o seu cliente", title: "Atende", text: "Responde no WhatsApp, Instagram, e-mail, telefone e site, com o conhecimento do seu negócio, 24 horas por dia." },
  { who: "Para a sua equipe", title: "Ajuda o atendente", text: "Como copiloto, apoia quem está atendendo direto na conversa." },
  { who: "Para você", title: "Trabalha no painel", text: "Consulta a sua operação, monta relatórios e propõe ações." },
  { who: "Em cada áudio", title: "Transcreve", text: "O áudio de três minutos vira texto em segundos." },
  { who: "Em cada conversa", title: "Classifica", text: "Sugere as etiquetas certas, e a conversa chega organizada ao funil." },
  { who: "Na agenda", title: "Marca compromissos", text: "Agenda com link de reunião, confirma no dia e cancela quando o cliente pede." },
];

const PANEL = [
  "Consulta contatos, conversas, caixas e relatórios com dados reais",
  "Monta relatório, tabela e gráfico, prontos para exportar",
  "Propõe ações que só acontecem depois da sua confirmação",
  "Abre em qualquer tela com Alt + Shift + M",
  "Aceita arquivo, PDF e áudio",
];

export default function EvaIaPage() {
  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "apple", align: "right", glow: 1.2 })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>Eva IA</p>
          <h1 className={s.display} data-hero-title>
            Uma inteligência, presente em <span className={s.fruit}>tudo.</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            A Eva IA não é um recurso entre outros. É a inteligência que atravessa a plataforma inteira:
            <strong> atende o seu cliente, ajuda a sua equipe e trabalha para você.</strong>
          </p>
          <div className={s.ctaRow} data-hero-fade>
            <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
            <Magnetic href="/produtos" variant="ghost">Ver o produto</Magnetic>
          </div>
        </div>
      </section>

      <section className={m.iaBand} data-scene={scene({ shape: "tree", align: "center", pan: 0, glow: 0.45 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>I · Onde ela age</p>
          <h2 className={s.verse} data-reveal>Seis lugares, a mesma inteligência.</h2>
          <div className={m.places}>
            {PLACES.map((p) => (
              <article key={p.title} className={m.place} data-fade>
                <p className={m.placeWho}>{p.who}</p>
                <h3 className={m.placeTitle}>{p.title}</h3>
                <p className={m.placeText}>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={m.iaBand} data-scene={scene({ shape: "apple", align: "left", glow: 0.5 })}>
        <div className={s.wrap}>
          <div className={s.split}>
            <div>
              <p className={s.chapterLabel}>II · Eva IA no painel</p>
              <h2 className={s.verse} data-reveal>Pergunte à sua operação.</h2>
              <p className={s.body} data-fade>
                Quais contatos escreveram mais este mês? Como estão minhas caixas? Monta um relatório da semana. Você pergunta como perguntaria a um gerente, e ela responde com os seus dados.
              </p>
              <ul className={m.list} data-fade>
                {PANEL.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div data-fade>
              <PanelDemo />
            </div>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.9 })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>III · Você decide</p>
          <h2 className={s.verse} data-reveal>Ela propõe. Você confirma.</h2>
          <p className={s.body} data-fade>
            A Eva IA pode sugerir um lembrete, um disparo, uma mudança no funil. Nenhuma dessas ações acontece antes da sua confirmação.
            <strong> A inteligência é dela. A decisão é sua.</strong>
          </p>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "right", pan: 1, glow: 0.8 })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>IV · No bolso</p>
          <h2 className={s.verse} data-reveal>O App da Eva IA.</h2>
          <p className={s.body} data-fade>
            A Eva instalada no celular, direto do navegador, sem passar por loja de aplicativos. A sua operação na palma da mão.
          </p>
        </div>
      </section>

      <section className={s.final} data-scene={scene({ shape: "apple", align: "center", glow: 1.6 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>O conhecimento, colhido para você.</h2>
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
