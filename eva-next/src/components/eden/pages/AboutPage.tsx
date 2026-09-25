"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import Shell from "../Shell";
import Magnetic from "../Magnetic";
import Growth from "../Growth";
import type { SceneTarget } from "../sceneBus";
import { PROVE } from "../site";
import s from "../eden.module.css";
import m from "./more.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);

const FOR_WHOM = [
  {
    who: "Do empresário",
    href: "/para-empresas",
    title: "Enquanto você decide, ela executa.",
    text: "Atende, vende, cobra e agenda no WhatsApp, no Instagram e no telefone. Você volta a cuidar do que só você pode fazer.",
  },
  {
    who: "Da clínica",
    href: "/para-clinicas",
    title: "Nenhum paciente sem resposta.",
    text: "Responde a qualquer hora, marca a consulta, confirma no dia e reduz as faltas com o Anti No Show.",
  },
  {
    who: "Do escritório",
    href: "/para-escritorios",
    title: "Cada pedido no lugar certo.",
    text: "Recebe, organiza e encaminha para quem entende do assunto, com a equipe no controle e o histórico de cada cliente à mão.",
  },
];

const HOW = [
  { tag: "Em 24 horas", title: "Implantação", text: "A Eva IA monta a arquitetura e treina o agente. Especialistas validam antes de entrar no ar." },
  { tag: "Antes do go-live", title: "Validação", text: "Uma bateria de testes cobre roteamento, fatos, recusa e limites. A IA admite o que não sabe." },
  { tag: "Depois do go-live", title: "90 dias de acompanhamento", text: "Auditoria do comportamento da IA e ajuste do que aparecer." },
  { tag: "Para sempre", title: "Eva Club", text: "Comunidade, treinamento toda semana e suporte com resposta em até 1 hora." },
];

const TIMELINE = [
  { when: "8 anos antes", what: "A experiência", text: "Os fundadores começam a acumular o que viria a ser a Eva: anos aprendendo o que faz um negócio perder o cliente e o que faz ele voltar." },
  { when: "2024", what: "Gênesis", text: "Nasce a Eva, com um único propósito: ser o assistente perfeito." },
  { when: "Hoje", what: "A colheita", text: "Mais de 300 empresas, mais de 20 milhões de atendimentos e clientes em 5 países." },
];

/** Horizontal timeline whose line draws itself as it scrolls into view. */
function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const line = el.querySelector<HTMLElement>("[data-line]");
    const dots = el.querySelectorAll<HTMLElement>("[data-dot]");
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 75%" } });
    if (line) tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1.6, ease: "expo.inOut" });
    tl.from(dots, { scale: 0, duration: 0.5, stagger: 0.35, ease: "back.out(3)" }, 0.2);
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);
  return (
    <ol ref={ref} className={m.story}>
      <span className={m.storyLine} data-line aria-hidden="true" />
      {TIMELINE.map((t) => (
        <li key={t.when} className={m.storyItem}>
          <span className={m.storyDot} data-dot aria-hidden="true" />
          <p className={m.storyWhen}>{t.when}</p>
          <p className={m.storyWhat}>{t.what}</p>
          <p className={m.storyText}>{t.text}</p>
        </li>
      ))}
    </ol>
  );
}

export default function AboutPage() {
  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "apple", align: "right", glow: 1.3 })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>Sobre a Eva · desde 2024</p>
          <h1 className={s.display} data-hero-title>
            O assistente perfeito, <span className={s.fruit}>enfim realizado.</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            A Eva nasceu em 2024, mas não nasceu do zero. Ela carrega 8 anos de experiência dos seus fundadores,
            <strong> e foi criada para ser o braço direito do empresário, da clínica e do escritório.</strong>
          </p>
          <ul className={s.trust} data-hero-fade>
            <li>Fundada em 2024</li>
            <li>8 anos de experiência</li>
            <li>Clientes em 5 países</li>
          </ul>
        </div>
      </section>

      <section data-scene={scene({ shape: "chaos", align: "center" })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>I · Antes do princípio</p>
          <h2 className={s.verse} data-reveal>Oito anos de estrada.</h2>
          <p className={s.body} data-fade>
            Antes de existir, a Eva já estava sendo escrita. Foram oito anos de experiência acumulada pelos fundadores: tentativas, acertos, erros caros e muitas conversas com quem vive de atender bem.
          </p>
          <p className={s.body} data-fade>
            Oito anos para entender uma coisa simples: <strong>nenhum negócio perde cliente por falta de produto. Perde por falta de resposta.</strong>
          </p>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "left", glow: 1.4 })}>
        <div className={s.wrap}>
          <div className={s.split}>
            <div />
            <div>
              <p className={s.chapterLabel}>II · 2024</p>
              <h2 className={s.verse} data-reveal>No princípio, era uma ideia.</h2>
              <p className={s.body} data-fade>
                O assistente perfeito. O que nunca esquece um cliente, nunca deixa uma mensagem sem resposta e conhece o negócio como o próprio dono. O que atende às 23h com a mesma calma das 9h.
              </p>
              <p className={s.body} data-fade>
                Em 2024, essa ideia ganhou nome. <strong>Como a Eva da história, a primeira a estender a mão para o fruto do conhecimento, a nossa Eva colhe tudo o que o seu negócio sabe e coloca para trabalhar.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "center", pan: 0, glow: 0.45 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>III · O braço direito</p>
          <h2 className={s.verse} data-reveal>Criada para quem não pode parar.</h2>
          <div className={m.who}>
            {FOR_WHOM.map((f) => (
              <Link key={f.who} href={f.href} className={s.card} data-fade data-spot>
                <span className={s.cardTag}>{f.who}</span>
                <h3 className={s.cardTitle}>{f.title}</h3>
                <p className={s.cardText}>{f.text}</p>
              </Link>
            ))}
          </div>
          <p className={s.body} data-fade>
            Não é um chatbot. <strong>É uma funcionária treinada, entregue pronta, que não tira férias.</strong>
          </p>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "right", pan: 1, glow: 0.7 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>IV · A colheita</p>
          <h2 className={s.verse} data-reveal>De uma ideia a cinco países.</h2>
          <Timeline />
          <dl className={s.numbers}>
            <div>
              <dt><span data-count="5">5</span></dt>
              <dd>países com clientes</dd>
            </div>
            <div>
              <dt><span data-count="300">300</span>+</dt>
              <dd>empresas</dd>
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
          <p className={s.note}>Números de levantamento próprio da Eva.</p>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.6 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>V · Como trabalhamos</p>
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
          <p className={s.chapterLabel}>VI · 24 horas</p>
          <h2 className={s.verse} data-reveal>Implantar é plantar.</h2>
          <Growth />
        </div>
      </section>

      <section className={s.final} data-scene={scene({ shape: "apple", align: "center", glow: 1.6 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>O assistente perfeito existe. Prove.</h2>
          <p className={s.body} data-fade>Eva Inteligência · desde 2024 · CNPJ 62.162.039/0001-62</p>
          <div className={`${s.ctaRow} ${s.center}`} data-fade>
            <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
            <Magnetic href="/planos" variant="ghost">Ver planos</Magnetic>
          </div>
        </div>
      </section>
    </Shell>
  );
}
