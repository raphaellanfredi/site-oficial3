"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import Shell from "../Shell";
import Magnetic from "../Magnetic";
import type { SceneTarget } from "../sceneBus";
import { wa, WA_AFILIADOS } from "../site";
import s from "../eden.module.css";
import a from "./affiliates.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);
const brl = (n: number) => n.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

const JOIN = wa(WA_AFILIADOS, "Olá! Quero ser afiliado Eva.");

// Brief, section 8.2. Base: Eva PRO, R$ 2.690/mês.
const BASE = 2690;
const LADDER = [
  { from: 1, to: 4, rate: 0.05 },
  { from: 5, to: 14, rate: 0.08 },
  { from: 15, to: 34, rate: 0.12 },
  { from: 35, to: 74, rate: 0.18 },
  { from: 75, to: 149, rate: 0.24 },
  { from: 150, to: Infinity, rate: 0.3 },
];
const rateFor = (n: number) => LADDER.find((t) => n >= t.from && n <= t.to)?.rate ?? 0.05;
const monthly = (n: number) => n * BASE * rateFor(n);
const PRESETS = [5, 15, 35, 75, 150];

const STORY = [
  "Olhamos, em média, 183 vezes para a tela do celular todos os dias. Só perde para piscar e respirar.",
  "Em 2010, o cliente esperava 28 minutos por uma resposta e ainda achava o atendimento satisfatório. Em 2026, esse número caiu para 3 minutos e 28 segundos.",
  "Hoje, só 8% das empresas usam automação e IA de forma profissional. Existe um oceano de 92% de empresários que já ouviram falar de IA e ainda não usam.",
];

const WHY = [
  { title: "Comissão vitalícia", text: "Enquanto o cliente que você indicou pagar a mensalidade, você recebe. Todo mês. Não é comissão única, é renda recorrente." },
  { title: "Desconto para o seu indicado", text: "Com o seu cupom, o indicado ganha 20% de desconto na implantação. Você facilita a decisão e ainda ganha a comissão." },
  { title: "Comissão crescente", text: "Quanto mais você indica, maior a sua porcentagem. Começa em 5% e chega a 30%." },
  { title: "Produto que se vende", text: "A Eva entrega resultado que dá para medir. Cliente satisfeito fica, e a sua comissão fica junto." },
  { title: "Suporte e treinamento", text: "Acesso ao Eva Club, treinamentos e materiais para ajudar as suas indicações a decidir." },
  { title: "Gestão automática", text: "Tudo rastreado. Você indica, acompanha e recebe, sem burocracia." },
];

const STEPS = [
  { name: "Você indica", text: "Compartilhe o seu cupom com empresários, médicos, donos de clínica ou qualquer negócio com muito atendimento." },
  { name: "O indicado contrata", text: "Ele usa o seu cupom, ganha 20% de desconto na implantação e a conta fica registrada como sua." },
  { name: "Você recebe todo mês", text: "A cada mensalidade paga pelo seu indicado, a sua comissão cai automaticamente. Enquanto ele for cliente." },
];

function Simulator() {
  const [n, setN] = useState(15);
  const rate = rateFor(n);
  return (
    <div className={a.sim} id="simulador" data-fade>
      <div className={a.simInput}>
        <label htmlFor="sim-n" className={a.simLabel}>
          Indicações ativas
          <output>{n}</output>
        </label>
        <input id="sim-n" type="range" min={1} max={200} value={n} onChange={(e) => setN(Number(e.target.value))} />
        <div className={a.presets} role="group" aria-label="Exemplos">
          {PRESETS.map((v) => (
            <button key={v} type="button" onClick={() => setN(v)} aria-pressed={n === v}>
              {v}
            </button>
          ))}
        </div>
      </div>
      <div className={a.simOut} aria-live="polite">
        <p className={s.kicker}>Você recebe</p>
        <p className={a.simValue}>
          R$ {brl(monthly(n))}
          <small>/mês</small>
        </p>
        <p className={a.simRate}>
          Comissão de <strong>{Math.round(rate * 100)}%</strong> sobre R$ {brl(BASE)} por cliente
        </p>
        {n >= 100 && <p className={a.bonusNote}>+ R$ 15.000 de bônus ao completar 100 indicações ativas</p>}
      </div>
    </div>
  );
}

export default function AffiliatesPage() {
  const ladder = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ladder.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.dataset.armed = "";
    const st = ScrollTrigger.create({ trigger: el, start: "top 80%", once: true, onEnter: () => (el.dataset.go = "") });
    return () => st.kill();
  }, []);

  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "tree", align: "right", pan: 1 })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>Programa de Afiliados</p>
          <h1 className={s.display} data-hero-title>
            Plante uma indicação. <span className={s.fruit}>Colha todo mês.</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            Na corrida do ouro, quem enriqueceu foi o vendedor de pás. Enquanto todo mundo corre atrás da IA, você indica a ferramenta.
            <strong> Com comissão recorrente que chega a 30%.</strong>
          </p>
          <div className={s.ctaRow} data-hero-fade>
            <Magnetic href={JOIN} external>Quero ser afiliado</Magnetic>
            <a href="#simulador" className={s.btnGhost}>Simular meus ganhos</a>
          </div>
          <ul className={s.trust} data-hero-fade>
            <li>Cadastro gratuito</li>
            <li>Sem taxa de adesão</li>
            <li>Comissão vitalícia</li>
          </ul>
        </div>
      </section>

      <section data-scene={scene({ shape: "chaos", align: "center" })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>I · A filosofia</p>
          <h2 className={s.verse} data-reveal>A economia da atenção.</h2>
          <div className={a.story}>
            {STORY.map((t) => (
              <p key={t} data-fade>{t}</p>
            ))}
            <p className={a.storyEnd} data-fade>Existe procura. Existe desejo. E existe espaço para você.</p>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.9 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>II · Por que a Eva</p>
          <h2 className={s.verse} data-reveal>Não é um programa de afiliados qualquer.</h2>
          <div className={s.grid}>
            {WHY.map((w) => (
              <article key={w.title} className={s.card} data-fade data-spot>
                <h3 className={s.cardTitle}>{w.title}</h3>
                <p className={s.cardText}>{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "right", pan: 0 })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>III · Na prática</p>
          <h2 className={s.verse} data-reveal>Três passos.</h2>
          <ol className={a.steps}>
            {STEPS.map((st, i) => (
              <li key={st.name} data-fade>
                <span className={a.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={s.cardTitle}>{st.name}</h3>
                  <p className={s.cardText}>{st.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "center", pan: 1, glow: 0.4 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>IV · A escada</p>
          <h2 className={s.verse} data-reveal>Quanto mais você planta, maior a colheita.</h2>
          <div ref={ladder} className={a.ladder}>
            {LADDER.map((t) => (
              <div key={t.from} className={a.rung} style={{ ["--h" as string]: `${(t.rate / 0.3) * 100}%` }}>
                <span className={a.rungRate}>{Math.round(t.rate * 100)}%</span>
                <span className={a.rungBar} />
                <span className={a.rungRange}>{t.to === Infinity ? `${t.from}+` : `${t.from} a ${t.to}`}</span>
              </div>
            ))}
          </div>
          <p className={s.note}>Indicações ativas por faixa. Base de cálculo: Eva PRO, R$ {brl(BASE)}/mês por cliente.</p>
          <Simulator />
          <p className={s.note}>
            Indicação de sucesso é venda fechada com o cliente permanecendo por 3 meses. O seu indicado ganha 20% de desconto na implantação com o seu cupom.
          </p>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 1.4 })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>V · O fruto maior</p>
          <h2 className={s.verse} data-reveal>Bônus de R$ 15.000.</h2>
          <div className={s.offerCard} data-fade>
            <p className={s.offerTitle}>Ao completar 100 indicações ativas</p>
            <div className={s.price}>
              <span className={s.priceFrom}>Bônus único</span>
              <span className={s.priceValue}>R$ 15.000</span>
            </div>
            <div className={s.price}>
              <span className={s.priceFrom}>Mais a comissão recorrente, com 100 indicações a 24%</span>
              <span className={s.priceValue}>R$ {brl(monthly(100))}<small>/mês</small></span>
            </div>
            <div className={s.ctaRow}>
              <Magnetic href={JOIN} external>Quero ser afiliado</Magnetic>
            </div>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "left", glow: 0.5 })}>
        <div className={s.wrap}>
          <div className={s.split}>
            <div />
            <figure className={a.testimonial} data-fade>
              <p className={s.chapterLabel}>VI · De quem já está dentro</p>
              <blockquote>
                Depois de automatizar meu próprio negócio com a Eva, as indicações vieram naturais. Todo empresário que eu contava sobre os resultados queria contratar. Hoje recebo comissão todo mês sem fazer nada além do que já faço: falar sobre o que funciona.
              </blockquote>
              <figcaption>Membro Eva Club</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={s.final} data-scene={scene({ shape: "tree", align: "center", pan: 1, glow: 1.3 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>Comece a sua primeira indicação hoje.</h2>
          <p className={s.body} data-fade>Seu primeiro passo: use a Eva no seu próprio negócio. Depois, as indicações vêm naturais.</p>
          <div className={`${s.ctaRow} ${s.center}`} data-fade>
            <Magnetic href={JOIN} external>Quero ser afiliado</Magnetic>
          </div>
        </div>
      </section>
    </Shell>
  );
}
