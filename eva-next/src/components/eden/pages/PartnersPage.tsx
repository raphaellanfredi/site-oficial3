"use client";

import Shell from "../Shell";
import Magnetic from "../Magnetic";
import type { SceneTarget } from "../sceneBus";
import { wa, WA_COMERCIAL } from "../site";
import s from "../eden.module.css";
import m from "./more.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);
const TALK = wa(WA_COMERCIAL, "Olá! Quero conversar sobre ser parceiro e revender a Eva com a minha marca.");

const GETS = [
  { title: "Marca própria", text: "A plataforma com o seu nome e a sua identidade." },
  { title: "Planos e preços seus", text: "Você define o que vende e por quanto." },
  { title: "Cobrança recorrente", text: "Mensalidades cobradas automaticamente, em quatro gateways de pagamento." },
  { title: "Suspensão e reativação automáticas", text: "Cliente em atraso é suspenso sozinho, e volta sozinho quando paga." },
  { title: "Receita e consumo por conta", text: "Relatório de quanto cada cliente paga e de quanto consome de IA." },
  { title: "Painel de administração", text: "Todas as contas da sua carteira num lugar só." },
];

const WHO = [
  { title: "Agências", text: "Que já atendem empresas em marketing e vendas e querem uma receita recorrente." },
  { title: "Consultorias", text: "Que implantam processos e querem entregar a IA junto." },
  { title: "Integradores", text: "Que já conectam sistemas e querem um produto próprio de atendimento." },
];

export default function PartnersPage() {
  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "tree", align: "right", pan: 0.5 })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>Parceiros · Revenda</p>
          <h1 className={s.display} data-hero-title>
            Venda a Eva com a <span className={s.fruit}>sua marca.</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            A tecnologia é nossa. A marca, os planos, os preços e os clientes são seus.
            <strong> Uma nova linha de receita recorrente para o seu negócio.</strong>
          </p>
          <div className={s.ctaRow} data-hero-fade>
            <Magnetic href={TALK} external>Quero revender</Magnetic>
            <Magnetic href="/afiliados" variant="ghost">Prefiro só indicar</Magnetic>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.5 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>I · Dois caminhos</p>
          <h2 className={s.verse} data-reveal>Afiliado indica. Parceiro revende.</h2>
          <div className={s.tableWrap} data-fade>
            <table className={s.table}>
              <thead>
                <tr>
                  <th scope="col"><span className={m.srOnly}>Comparação</span></th>
                  <th scope="col">Afiliado</th>
                  <th scope="col" className={s.hot}>Parceiro</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row">O que faz</th><td>Indica clientes para a Eva</td><td className={s.hot}>Revende a plataforma</td></tr>
                <tr><th scope="row">Marca</th><td>Eva</td><td className={s.hot}>A sua</td></tr>
                <tr><th scope="row">Preço para o cliente</th><td>O da Eva</td><td className={s.hot}>Você define</td></tr>
                <tr><th scope="row">Como ganha</th><td>Comissão recorrente de 5% a 30%</td><td className={s.hot}>Com a receita dos seus clientes</td></tr>
                <tr><th scope="row">Relacionamento com o cliente</th><td>Da Eva</td><td className={s.hot}>Seu</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "center", pan: 1, glow: 0.45 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>II · O que você recebe</p>
          <h2 className={s.verse} data-reveal>Tudo para operar como dono.</h2>
          <div className={s.grid}>
            {GETS.map((g) => (
              <article key={g.title} className={s.card} data-fade data-spot>
                <h3 className={s.cardTitle}>{g.title}</h3>
                <p className={s.cardText}>{g.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "left", glow: 0.7 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>III · Para quem</p>
          <h2 className={s.verse} data-reveal>Quem já tem a carteira.</h2>
          <div className={m.who}>
            {WHO.map((w) => (
              <article key={w.title} className={s.card} data-fade data-spot>
                <h3 className={s.cardTitle}>{w.title}</h3>
                <p className={s.cardText}>{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={s.final} data-scene={scene({ shape: "tree", align: "center", pan: 1, glow: 1.3 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>Plante o seu próprio jardim.</h2>
          <p className={s.body} data-fade>Conte como é o seu negócio e montamos o modelo de parceria com você.</p>
          <div className={`${s.ctaRow} ${s.center}`} data-fade>
            <Magnetic href={TALK} external>Quero revender</Magnetic>
          </div>
        </div>
      </section>
    </Shell>
  );
}
