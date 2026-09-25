"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Flip } from "gsap/Flip";
import d from "./demos.module.css";

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** The agent resolving, not just answering: it calls the store's system mid-conversation. */
export function AgentDemo() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const items = el.querySelectorAll<HTMLElement>("[data-step]");
    gsap.set(items, { opacity: 0, y: 14 });
    const tl = gsap.timeline({ paused: true });
    items.forEach((it) => tl.to(it, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "+=0.55"));
    const st = ScrollTrigger.create({ trigger: el, start: "top 75%", once: true, onEnter: () => tl.play() });
    return () => {
      st.kill();
      tl.kill();
    };
  }, []);
  return (
    <div ref={ref} className={d.phone} aria-label="Exemplo de conversa: a Eva IA consulta um pedido no sistema da loja">
      <div className={d.phoneHead}>
        <span className={d.avatar}>E</span>
        <div>
          <p className={d.phoneName}>Eva · Loja</p>
          <p className={d.phoneStatus}><span className={d.live} />online agora</p>
        </div>
      </div>
      <p className={`${d.msg} ${d.in}`} data-step>Oi! Meu pedido 4812 já saiu?</p>
      <p className={d.fn} data-step>
        <span className={d.fnDot} />
        Função personalizada · consultar_pedido(4812)
      </p>
      <p className={d.fnResult} data-step>status: enviado · 14h02 · previsão: amanhã</p>
      <p className={`${d.msg} ${d.out}`} data-step>Saiu hoje às 14h e chega amanhã. Quer que eu te mande o código de rastreio aqui?</p>
      <p className={`${d.msg} ${d.in}`} data-step>Quero sim!</p>
      <p className={`${d.msg} ${d.out}`} data-step>Pronto, enviei. Qualquer coisa é só chamar. 😊</p>
      <p className={d.caption}>Exemplo ilustrativo</p>
    </div>
  );
}

type Card = { id: string; title: string; meta: string };
const COLUMNS = ["Novo lead", "Em negociação", "Proposta", "Fechado"];
const START: Card[][] = [
  [
    { id: "a", title: "Clínica de estética", meta: "Instagram · hoje" },
    { id: "b", title: "Loja de móveis", meta: "WhatsApp · hoje" },
  ],
  [{ id: "c", title: "Escola de idiomas", meta: "Site · 2 dias" }],
  [{ id: "d", title: "Imobiliária", meta: "WhatsApp · 4 dias" }],
  [{ id: "e", title: "Pet shop", meta: "E-mail · fechado" }],
];

/** Sales funnel whose cards advance on their own. Built with GSAP Flip. */
export function FunnelDemo() {
  gsap.registerPlugin(Flip);
  const board = useRef<HTMLDivElement>(null);
  const flipState = useRef<Flip.FlipState | null>(null);
  const [cols, setCols] = useState(START);

  useEffect(() => {
    if (reduced()) return;
    let visible = false;
    const st = ScrollTrigger.create({
      trigger: board.current,
      start: "top 90%",
      end: "bottom 10%",
      onToggle: (self) => (visible = self.isActive),
    });
    const id = window.setInterval(() => {
      if (!visible || !board.current) return;
      flipState.current = Flip.getState(board.current.querySelectorAll("[data-card]"));
      setCols((prev) => {
        const next = prev.map((c) => [...c]);
        // move the first card of the furthest non-empty stage forward; the
        // closed column recycles back to new leads so the loop never ends
        for (let i = next.length - 2; i >= 0; i--) {
          if (next[i].length) {
            const card = next[i].shift()!;
            next[i + 1].unshift(card);
            break;
          }
        }
        if (next[3].length > 2) next[0].push(next[3].pop()!);
        return next;
      });
    }, 2200);
    return () => {
      window.clearInterval(id);
      st.kill();
    };
  }, []);

  useLayoutEffect(() => {
    if (!flipState.current) return;
    Flip.from(flipState.current, { duration: 0.8, ease: "power3.inOut", absolute: true });
    flipState.current = null;
  }, [cols]);

  return (
    <div ref={board} className={d.board} aria-label="Exemplo de funil de vendas com quatro etapas">
      {COLUMNS.map((name, i) => (
        <div key={name} className={d.column}>
          <p className={d.colHead}>
            <span className={d.colDot} style={{ ["--c" as string]: ["#07DAFF", "#FF6B00", "#FF0080", "#2FCB7E"][i] }} />
            {name}
            <span className={d.count}>{cols[i].length}</span>
          </p>
          {cols[i].map((c) => (
            <div key={c.id} className={d.card} data-card data-flip-id={c.id}>
              <p className={d.cardTitle}>{c.title}</p>
              <p className={d.cardMeta}>{c.meta}</p>
              <p className={d.check}>✓ Checklist da etapa</p>
            </div>
          ))}
        </div>
      ))}
      <p className={d.caption}>Exemplo ilustrativo</p>
    </div>
  );
}

const TEAM = [
  { name: "Eva IA", value: 412, ia: true },
  { name: "Atendente 1", value: 96 },
  { name: "Atendente 2", value: 81 },
  { name: "Atendente 3", value: 57 },
];

/** Report by agent, with the Eva IA row in its cyan. */
export function ReportDemo() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const bars = el.querySelectorAll<HTMLElement>("[data-bar]");
    const tw = gsap.from(bars, {
      scaleX: 0,
      duration: 1.4,
      stagger: 0.12,
      ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
    return () => {
      tw.scrollTrigger?.kill();
      tw.kill();
    };
  }, []);
  const max = Math.max(...TEAM.map((t) => t.value));
  return (
    <div ref={ref} className={d.report} aria-label="Exemplo de relatório de conversas resolvidas por atendente">
      <p className={d.reportHead}>Conversas resolvidas · esta semana</p>
      {TEAM.map((t) => (
        <div key={t.name} className={d.row}>
          <span className={d.rowName}>{t.name}</span>
          <span className={d.track}>
            <span data-bar className={`${d.bar} ${t.ia ? d.barIa : ""}`} style={{ width: `${(t.value / max) * 100}%` }} />
          </span>
          <span className={d.rowValue}>{t.value}</span>
        </div>
      ))}
      <p className={d.caption}>Exemplo ilustrativo</p>
    </div>
  );
}

const QUESTIONS = [
  "Quais contatos escreveram mais este mês?",
  "Como estão minhas caixas hoje?",
  "Monta um relatório da semana.",
];

/** The Eva IA in the owner's panel: types a question, answers with a chart, proposes an action. */
export function PanelDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState(QUESTIONS[0]);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    let q = 0;
    let timer = 0;
    let visible = false;
    const answer = el.querySelector<HTMLElement>("[data-answer]");
    const type = (text: string, i = 0) => {
      setTyped(text.slice(0, i));
      if (i < text.length) timer = window.setTimeout(() => type(text, i + 1), 38);
      else {
        if (answer) gsap.fromTo(answer, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
        timer = window.setTimeout(next, 4200);
      }
    };
    const next = () => {
      if (!visible) {
        timer = window.setTimeout(next, 800);
        return;
      }
      q = (q + 1) % QUESTIONS.length;
      if (answer) gsap.to(answer, { opacity: 0.25, duration: 0.3 });
      type(QUESTIONS[q]);
    };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      end: "bottom 15%",
      onToggle: (self) => (visible = self.isActive),
    });
    timer = window.setTimeout(next, 3000);
    return () => {
      window.clearTimeout(timer);
      st.kill();
    };
  }, []);
  const bars = [
    { k: "Seg", v: 62 },
    { k: "Ter", v: 80 },
    { k: "Qua", v: 71 },
    { k: "Qui", v: 94 },
    { k: "Sex", v: 88 },
  ];
  return (
    <div ref={ref} className={d.panel} aria-label="Exemplo da Eva IA no painel respondendo a uma pergunta do dono">
      <div className={d.panelBar}>
        <span className={d.panelDot} />
        Eva IA
        <kbd className={d.kbd}>Alt + Shift + M</kbd>
      </div>
      <p className={d.ask}>
        {typed}
        <span className={d.caret} aria-hidden="true" />
      </p>
      <div className={d.answer} data-answer>
        <p className={d.answerText}>Aqui está. Conversas atendidas por dia, com dados reais da sua operação:</p>
        <div className={d.chart}>
          {bars.map((b) => (
            <span key={b.k} className={d.col}>
              <span className={d.colBar} style={{ height: `${b.v}%` }} />
              <span className={d.colKey}>{b.k}</span>
            </span>
          ))}
        </div>
        <div className={d.proposal}>
          <p>Posso enviar um lembrete para os 12 contatos sem resposta há mais de 2 dias?</p>
          <div className={d.actions}>
            <span className={d.confirm}>Confirmar</span>
            <span className={d.cancel}>Agora não</span>
          </div>
        </div>
      </div>
      <p className={d.caption}>Exemplo ilustrativo · nenhuma ação acontece sem a sua confirmação</p>
    </div>
  );
}
