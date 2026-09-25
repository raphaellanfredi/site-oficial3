"use client";

import Shell from "../Shell";
import Magnetic from "../Magnetic";
import type { SceneTarget } from "../sceneBus";
import { HELP_CENTER, SUPPORT_EMAIL, WA_SUPORTE, wa } from "../site";
import s from "../eden.module.css";
import m from "./more.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);
const SUPPORT = wa(WA_SUPORTE, "Olá! Preciso de ajuda com a minha Eva.");

// Brief, section 2: response and delivery times.
const TIMES = [
  { what: "Primeira resposta", when: "até 1 hora" },
  { what: "Operação parada", when: "15 minutos" },
  { what: "Emergência", when: "8 horas" },
  { what: "Ajuste rápido", when: "6 horas" },
  { what: "Demanda padrão", when: "3 dias" },
  { what: "Evolução e prompt", when: "10 dias" },
];

export default function SupportPage() {
  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "clock", align: "right" })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>Suporte</p>
          <h1 className={s.display} data-hero-title>
            Gente de verdade, <span className={s.fruit}>rápido.</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            Primeira resposta em até 1 hora.
            <strong> Em 15 minutos se a sua operação parar.</strong>
          </p>
          <div className={s.ctaRow} data-hero-fade>
            <Magnetic href={SUPPORT} external>Falar com o suporte</Magnetic>
            <Magnetic href={HELP_CENTER} variant="ghost" external>Abrir a Central de Ajuda</Magnetic>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "apple", align: "right", glow: 0.5 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>I · Canais</p>
          <h2 className={s.verse} data-reveal>Onde nos encontrar.</h2>
          <div className={m.channels}>
            <a href={SUPPORT} target="_blank" rel="noopener noreferrer" className={m.contact} data-fade>
              <span className={s.cardTag}>WhatsApp e telefone · 24h</span>
              <span className={m.contactName}>WhatsApp suporte</span>
              <span className={m.contactValue}>+55 21 99392-4639</span>
              <span className={m.contactNote}>O mesmo número também atende ligação, 24 horas.</span>
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className={m.contact} data-fade>
              <span className={s.cardTag}>E-mail</span>
              <span className={m.contactName}>Suporte por e-mail</span>
              <span className={m.contactValue}>{SUPPORT_EMAIL}</span>
              <span className={m.contactNote}>Para pedidos com anexos e detalhes.</span>
            </a>
            <div className={m.contact} data-fade>
              <span className={s.cardTag}>Comunidade</span>
              <span className={m.contactName}>Grupo EvaClub</span>
              <span className={m.contactValue}>Clientes e equipe Eva</span>
              <span className={m.contactNote}>Todo cliente Eva faz parte.</span>
            </div>
            <a href={HELP_CENTER} target="_blank" rel="noopener noreferrer" className={m.contact} data-fade>
              <span className={s.cardTag}>Autoatendimento</span>
              <span className={m.contactName}>Central de Ajuda</span>
              <span className={m.contactValue}>Artigos e passo a passo</span>
              <span className={m.contactNote}>Aberta a qualquer hora.</span>
            </a>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "clock", align: "right", glow: 0.8 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>II · Prazos</p>
          <h2 className={s.verse} data-reveal>Cada pedido tem o seu tempo.</h2>
          <div className={m.bigClock} data-fade>
            <strong>1h</strong>
            <span>para a primeira resposta, em qualquer pedido.</span>
          </div>
          <div className={s.tableWrap} data-fade>
            <table className={s.table}>
              <thead>
                <tr>
                  <th scope="col">Tipo de pedido</th>
                  <th scope="col">Prazo</th>
                </tr>
              </thead>
              <tbody>
                {TIMES.map((t) => (
                  <tr key={t.what}>
                    <th scope="row">{t.what}</th>
                    <td>{t.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section data-scene={scene({ shape: "tree", align: "right", pan: 0, glow: 0.7 })}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.chapterLabel}>III · Ao vivo</p>
          <h2 className={s.verse} data-reveal>Treinamento toda semana.</h2>
          <p className={s.body} data-fade>
            Toda terça e quinta, às 11h15, a equipe Eva faz um treinamento ao vivo para tirar dúvidas e mostrar como tirar mais da sua IA.
          </p>
        </div>
      </section>

      <section className={s.final} data-scene={scene({ shape: "apple", align: "center", glow: 1.4 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>Ninguém fica sozinho no jardim.</h2>
          <p className={s.body} data-fade>Chame no WhatsApp ou ligue no mesmo número, a qualquer hora.</p>
          <div className={`${s.ctaRow} ${s.center}`} data-fade>
            <Magnetic href={SUPPORT} external>Falar com o suporte</Magnetic>
          </div>
        </div>
      </section>
    </Shell>
  );
}
