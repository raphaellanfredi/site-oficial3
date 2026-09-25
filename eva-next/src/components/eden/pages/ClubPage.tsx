"use client";

import Shell from "../Shell";
import Magnetic from "../Magnetic";
import type { SceneTarget } from "../sceneBus";
import { PROVE, wa, WA_COMERCIAL } from "../site";
import s from "../eden.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);
const JOIN = wa(WA_COMERCIAL, "Olá! Quero entrar no Eva Club.");

const BENEFITS = [
  { tag: "Primeiro", title: "Acesso antecipado", text: "Novos agentes e funcionalidades chegam para você antes do lançamento público." },
  { tag: "Sem fila", title: "Suporte direto", text: "Canal exclusivo com a equipe Eva. Primeira resposta em até 1 hora, e em 15 minutos se a sua operação parar." },
  { tag: "Gente", title: "Comunidade de membros", text: "Grupo fechado com empresários que usam IA no dia a dia. Troca real, não post de motivação." },
  { tag: "Aprender", title: "Conteúdo exclusivo", text: "Playbooks, prompts e casos de implementação: o que funciona de verdade no mercado brasileiro." },
  { tag: "Ao vivo", title: "Treinamento toda semana", text: "Toda terça e quinta, às 11h15, com a equipe Eva." },
];

const INCLUDED = [
  "50% de desconto em todos os novos produtos Eva",
  "Agente de IA ativo no WhatsApp, Instagram e site",
  "Customização completa de identidade, tom e fluxos de atendimento",
  "Acesso antecipado a novos agentes verticais",
  "Sessão mensal de otimização do agente com especialista Eva",
  "Comunidade fechada, biblioteca de prompts e playbooks",
  "Relatório mensal de desempenho com recomendações",
];

const FAQ = [
  { q: "Preciso ter conhecimento técnico?", a: "Não. A Eva cuida de toda a parte técnica. Você conta como o seu negócio funciona, e a Eva IA monta o agente do zero." },
  { q: "Em quanto tempo o agente fica no ar?", a: "Em até 24 horas depois do pagamento e do formulário preenchido. Se não ficar, a implantação é por nossa conta." },
  { q: "Posso cancelar a qualquer momento?", a: "Sim. Não há fidelidade. Sem multa e sem burocracia." },
  { q: "O que é a sessão mensal de otimização?", a: "Uma reunião de 30 minutos com um especialista Eva para revisar o desempenho do agente, ajustar fluxos e melhorar com base nos dados do mês." },
];

export default function ClubPage() {
  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "tree", align: "right", pan: 1 })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>Eva Club</p>
          <h1 className={s.display} data-hero-title>
            O clube de quem leva a IA <span className={s.fruit}>a sério no negócio.</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            Acesso antecipado a novos agentes, suporte direto com especialistas, comunidade exclusiva e conteúdo que não está em lugar nenhum.
            <strong> Todo cliente Eva já faz parte do Club.</strong>
          </p>
          <div className={s.ctaRow} data-hero-fade>
            <Magnetic href={JOIN} external>Quero entrar no Eva Club</Magnetic>
            <Magnetic href="/planos" variant="ghost">Ver planos</Magnetic>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "center", pan: 0, glow: 0.5 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>I · Os benefícios</p>
          <h2 className={s.verse} data-reveal>Dentro do jardim.</h2>
          <div className={s.grid}>
            {BENEFITS.map((b) => (
              <article key={b.title} className={s.card} data-fade data-spot>
                <span className={s.cardTag}>{b.tag}</span>
                <h3 className={s.cardTitle}>{b.title}</h3>
                <p className={s.cardText}>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 1.4 })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>II · Para quem chega agora</p>
          <h2 className={s.verse} data-reveal>O primeiro fruto.</h2>
          <div className={s.offerCard} data-fade>
            <p className={s.offerTitle}>Incluso em todos os planos</p>
            <ul className={s.offerList}>
              {INCLUDED.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <div className={s.ctaRow}>
              <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
              <Magnetic href="/planos" variant="ghost">Ver os planos</Magnetic>
            </div>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "left", glow: 0.6 })}>
        <div className={s.wrap}>
          <div className={s.split}>
            <div />
            <figure className={s.quote} data-fade>
              <blockquote>
                A Eva não é só uma ferramenta. É como ter um funcionário que nunca falta, nunca esquece e ainda aprende com o tempo. Desde que implementei, meu atendimento virou outro.
              </blockquote>
              <figcaption>Cliente Eva, área da saúde</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.5 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>III · Perguntas</p>
          <h2 className={s.verse} data-reveal>Antes de entrar.</h2>
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

      <section className={s.final} data-scene={scene({ shape: "tree", align: "center", pan: 1, glow: 1.3 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>Todo cliente Eva é membro do Club.</h2>
          <p className={s.body} data-fade>Contrate a Eva e entre para a comunidade de quem usa IA de verdade.</p>
          <div className={`${s.ctaRow} ${s.center}`} data-fade>
            <Magnetic href="/planos">Ver planos</Magnetic>
            <Magnetic href={PROVE} variant="ghost" external>Prove a Eva</Magnetic>
          </div>
        </div>
      </section>
    </Shell>
  );
}
