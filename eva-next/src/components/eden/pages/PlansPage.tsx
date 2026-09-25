"use client";

import { useState } from "react";
import Link from "next/link";
import Shell from "../Shell";
import Magnetic from "../Magnetic";
import Growth from "../Growth";
import Guarantee from "../Guarantee";
import TrackOnView from "@/components/shared/TrackOnView";
import type { SceneTarget } from "../sceneBus";
import { PROVE, wa, WA_COMERCIAL } from "../site";
import { PLANS, PLAN_LIMITS, PLAN_SPECS, type PlanKey } from "@/components/checkout/checkout-data";
import { PLANS_FAQ as FAQ } from "./plansFaq";
import s from "../eden.module.css";
import p from "./plans.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);
const brl = (n: number) => n.toLocaleString("pt-BR");


function recommend(users: number, connections: number): PlanKey {
  if (users <= PLAN_LIMITS.one.users && connections <= PLAN_LIMITS.one.connections) return "one";
  if (users <= PLAN_LIMITS.pro.users && connections <= PLAN_LIMITS.pro.connections) return "pro";
  return "black";
}

function Finder() {
  const [users, setUsers] = useState(4);
  const [connections, setConnections] = useState(2);
  const key = recommend(users, connections);
  const plan = PLANS.find((x) => x.key === key)!;
  const limits = PLAN_LIMITS[key];
  const over = users > PLAN_LIMITS.black.users || connections > PLAN_LIMITS.black.connections;
  return (
    <div className={p.finder} data-fade>
      <div className={p.sliders}>
        <label className={p.slider} htmlFor="finder-users">
          <span>
            Pessoas que atendem
            <output>{users}</output>
          </span>
          <input id="finder-users" type="range" min={1} max={30} value={users} onChange={(e) => setUsers(Number(e.target.value))} />
        </label>
        <label className={p.slider} htmlFor="finder-connections">
          <span>
            Canais conectados
            <output>{connections}</output>
          </span>
          <input id="finder-connections" type="range" min={1} max={10} value={connections} onChange={(e) => setConnections(Number(e.target.value))} />
        </label>
        <p className={p.finderHint}>WhatsApp, Instagram e e-mail contam como canais separados.</p>
      </div>
      <div className={p.answer} aria-live="polite">
        <p className={s.kicker}>O seu plano</p>
        <p className={p.answerName}>{plan.name}</p>
        <p className={p.answerWhy}>
          {over
            ? "Para uma operação desse tamanho, fale com um especialista e montamos o plano com você."
            : `Até ${limits.users} usuários e ${limits.connections} conexões, por R$ ${brl(plan.monthly)}/mês.`}
        </p>
        <div className={s.ctaRow}>
          {over ? (
            <Magnetic href={wa(WA_COMERCIAL, "Olá! Quero um plano para uma operação grande.")} external>Falar com especialista</Magnetic>
          ) : (
            <Magnetic href={`/checkout?plano=${key}`}>Contratar {plan.name}</Magnetic>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PlansPage() {
  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "apple", align: "right" })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>Planos</p>
          <h1 className={s.display} data-hero-title>
            Escolha o tamanho do seu <span className={s.fruit}>jardim.</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            Todos os planos com a Eva IA, CRM nativo e atendimento que não é cobrado por mensagem.
            <strong> Montada pela Eva IA, validada por especialistas, no ar em 24 horas.</strong>
          </p>
          <ul className={s.trust} data-hero-fade>
            <li>Sem fidelidade</li>
            <li>Implantação em até 12x</li>
            <li>Garantia 24 horas</li>
          </ul>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "center", pan: 1, glow: 0.35 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>I · Os planos</p>
          <h2 className={s.verse} data-reveal>Três colheitas.</h2>
          <TrackOnView event="ver_tabela_planos" />
          <div className={p.plans}>
            {PLANS.map((plan) => {
              const limits = PLAN_LIMITS[plan.key];
              return (
                <article key={plan.key} className={`${p.plan} ${plan.popular ? p.popular : ""}`} data-fade data-spot>
                  <p className={p.badge}>{plan.popular ? "★ " : ""}{plan.badge}</p>
                  <h3 className={p.planName}>{plan.name}</h3>
                  <p className={p.tagline}>{plan.tagline}</p>
                  <dl className={p.limits}>
                    <div>
                      <dt>{limits.connections}</dt>
                      <dd>conexões</dd>
                    </div>
                    <div>
                      <dt>{limits.users}</dt>
                      <dd>usuários</dd>
                    </div>
                  </dl>
                  <p className={p.monthly}>
                    <small>R$</small>
                    {brl(plan.monthly)}
                    <small>/mês</small>
                  </p>
                  <p className={p.setup}>Implantação R$ {brl(plan.setup)} · até 12x no cartão</p>
                  <ul className={p.features}>
                    {plan.features.filter((f) => !/conex|usuár/i.test(f)).map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  {plan.footnote && <p className={p.foot}>{plan.footnote}</p>}
                  <Link href={`/checkout?plano=${plan.key}`} className={plan.popular ? s.btnPrimary : s.btnGhost}>
                    Contratar {plan.name}
                  </Link>
                </article>
              );
            })}
          </div>
          <p className={s.note}>Disparo em massa: envios cobrados por mensagem, consulte valores com o nosso time.</p>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.9 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>II · Em dúvida?</p>
          <h2 className={s.verse} data-reveal>Qual é o seu jardim?</h2>
          <p className={s.body} data-fade>
            O que define o plano é o tamanho da sua equipe e quantos canais você atende. Arraste e veja.
          </p>
          <Finder />
        </div>
      </section>

      <section data-scene={scene({ shape: "clock", align: "right" })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>III · A implantação</p>
          <h2 className={s.verse} data-reveal>Implantar é plantar.</h2>
          <p className={s.lead} data-fade>A implantação é um serviço, não uma taxa. Em 24 horas.</p>
          <Growth />
          <Guarantee />
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "left", pan: -1, glow: 0.8 })}>
        <div className={s.wrap}>
          <div className={s.split}>
            <div />
            <div>
              <p className={s.chapterLabel}>IV · Qualidade</p>
              <h2 className={s.verse} data-reveal>Validada antes. Acompanhada depois.</h2>
              <div className={p.twin}>
                <article className={s.card} data-fade data-spot>
                  <span className={s.cardTag}>Antes do go-live</span>
                  <h3 className={s.cardTitle}>Bateria de validação</h3>
                  <p className={s.cardText}>
                    Dezenas de casos de teste cobrindo roteamento, fatos que não podem sair errados, recusa de pedidos indevidos e limite de conhecimento. A bateria roda mais de uma vez. Quando a base não cobre o assunto, a IA admite que não sabe e chama um humano, em vez de inventar.
                  </p>
                </article>
                <article className={s.card} data-fade data-spot>
                  <span className={s.cardTag}>Depois do go-live</span>
                  <h3 className={s.cardTitle}>90 dias de acompanhamento</h3>
                  <p className={s.cardText}>
                    Auditoria do comportamento da IA e ajuste do que aparecer, nos 90 dias seguintes à entrada no ar.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "center", glow: 0.4 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>V · Sem surpresa</p>
          <h2 className={s.verse} data-reveal>O que é e o que não é cobrado.</h2>
          <div className={s.grid}>
            <article className={s.card} data-fade data-spot>
              <span className={s.cardTag}>Incluído</span>
              <h3 className={s.cardTitle}>Atendimento sem cobrança por mensagem</h3>
              <p className={s.cardText}>Conversas, respostas da IA e atendimento humano estão dentro da mensalidade.</p>
            </article>
            <article className={s.card} data-fade data-spot>
              <span className={s.cardTag}>Cobrado por envio</span>
              <h3 className={s.cardTitle}>Disparo em massa</h3>
              <p className={s.cardText}>Campanhas com segmentação e agendamento. Cada envio é cobrado por mensagem; consulte os valores.</p>
            </article>
            <article className={s.card} data-fade data-spot>
              <span className={s.cardTag}>Pós-pago</span>
              <h3 className={s.cardTitle}>Ligações com IA</h3>
              <p className={s.cardText}>No Eva PRO e no Eva BLACK, pagas conforme o uso.</p>
            </article>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "center", glow: 0.25 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>VI · Lado a lado</p>
          <h2 className={s.verse} data-reveal>Comparativo completo.</h2>
          <div className={s.tableWrap} data-fade>
            <table className={s.table}>
              <thead>
                <tr>
                  <th scope="col"><span className={p.srOnly}>Recurso</span></th>
                  {PLANS.map((plan) => (
                    <th key={plan.key} scope="col" className={plan.popular ? s.hot : undefined}>{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mensalidade</th>
                  {PLANS.map((plan) => (
                    <td key={plan.key} className={plan.popular ? s.hot : undefined}>R$ {brl(plan.monthly)}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">Implantação</th>
                  {PLANS.map((plan) => (
                    <td key={plan.key} className={plan.popular ? s.hot : undefined}>R$ {brl(plan.setup)}</td>
                  ))}
                </tr>
                {PLAN_SPECS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {PLANS.map((plan) => {
                      const v = row.values[plan.key];
                      return (
                        <td key={plan.key} className={plan.popular ? s.hot : undefined}>
                          {v === true ? <span className={p.yes} aria-label="Sim">●</span> : v === false ? <span className={p.no} aria-label="Não">—</span> : v}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.6 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>VII · Perguntas</p>
          <h2 className={s.verse} data-reveal>Antes de colher.</h2>
          <div className={s.faq}>
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={s.final} data-scene={scene({ shape: "apple", align: "center", glow: 1.6 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>Amanhã, a esta hora, a Eva já trabalha para você.</h2>
          <p className={s.body} data-fade>Contrate agora ou fale com um especialista antes.</p>
          <div className={`${s.ctaRow} ${s.center}`} data-fade>
            <Magnetic href="/checkout?plano=pro">Contratar agora</Magnetic>
            <Magnetic href={PROVE} variant="ghost" external>Prove a Eva</Magnetic>
          </div>
        </div>
      </section>
    </Shell>
  );
}
