"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Shell from "./Shell";
import Magnetic from "./Magnetic";
import Growth from "./Growth";
import Guarantee from "./Guarantee";
import { setSceneTarget, type SceneTarget } from "./sceneBus";
import { PROVE } from "./site";
import s from "./eden.module.css";
import h from "./home.module.css";

const CHAOS_MESSAGES = [
  "Oi, ainda tem?",
  "Qual o valor?",
  "Vocês abrem sábado?",
  "Alguém aí?",
  "Aceita Pix?",
  "Quero agendar",
  "Tem pronta entrega?",
  "Deixa pra lá.",
];

const TREE_LAYERS = [
  {
    name: "Raízes",
    title: "O que ela sabe.",
    text: "Treinada com o conhecimento do seu negócio. Cada artigo da sua Central de Ajuda vira conhecimento da IA, e as respostas aprovadas garantem os fatos que não podem sair errados.",
  },
  {
    name: "Tronco",
    title: "Quem ela é.",
    text: "Uma inteligência só: a Eva IA. Atende o seu cliente, ajuda o seu atendente durante a conversa e trabalha para você no painel. Pergunte à sua operação e ela responde com dados reais.",
  },
  {
    name: "Galhos",
    title: "Onde ela está.",
    channels: ["WhatsApp", "Instagram", "E-mail", "Telefone", "Chat do site", "Facebook", "TikTok", "Shopify e WooCommerce"],
  },
  {
    name: "Frutos",
    title: "O que ela entrega.",
    text: "Vendas fechadas na conversa, horários confirmados, clientes que voltam.",
    numbers: [
      { value: 300, suffix: "+", label: "empresas" },
      { value: 5, suffix: "", label: "países" },
      { value: 20, suffix: "M+", label: "atendimentos" },
      { value: 99.9, suffix: "%", label: "de precisão", decimals: 1 },
    ],
  },
];

const FIRST_FRUIT = [
  "Garantia 24 horas: no ar em até 24 horas ou a implantação é por nossa conta",
  "50% de desconto em todos os novos produtos Eva",
  "Acesso ao Eva Club: comunidade, cursos e networking",
  "Implantação em até 12x no cartão",
  "Sem fidelidade. Atendimento não é cobrado por mensagem",
];

const HARVEST = [
  {
    quote: "No primeiro dia, a Eva já converteu dois clientes novos para a loja. Estamos adorando!",
    author: "Loja de roupas, Rio de Janeiro",
  },
  {
    quote: "Foram mais de 20 mil clientes atendidos com IA no último ano. Aumento de 25% nas conversões e zeramos o tempo de espera pelo WhatsApp.",
    author: "Casa de eventos, São Paulo",
  },
  {
    quote: "Temos tranquilidade de saber que os leads dos anúncios serão respondidos e qualificados de forma profissional.",
    author: "Agência de propaganda, São Paulo",
  },
];

const scene = (t: SceneTarget) => JSON.stringify(t);

/** Home-only choreography: the chaos counter, the conversation and the pinned tree. */
function useHomeMotion(root: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(
      { motion: "(prefers-reduced-motion: no-preference)", wide: "(min-width: 761px)" },
      (ctx) => {
        const { motion, wide } = ctx.conditions as { motion: boolean; wide: boolean };
        if (!motion) return;

        const chaos = el.querySelector<HTMLElement>("[data-chaos]");
        if (chaos) {
          const counter = chaos.querySelector<HTMLElement>("[data-counter]");
          const state = { n: 0 };
          gsap.to(state, {
            n: 37,
            ease: "none",
            scrollTrigger: { trigger: chaos, start: "top 70%", end: "bottom 60%", scrub: true },
            onUpdate: () => {
              if (counter) counter.textContent = String(Math.round(state.n));
            },
          });
          chaos.querySelectorAll<HTMLElement>("[data-chip]").forEach((chip, i) => {
            gsap.fromTo(
              chip,
              { opacity: 0, scale: 0.85, y: 40 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: { trigger: chaos, start: `top+=${i * 7}% 75%`, end: `top+=${i * 7 + 18}% 60%`, scrub: true },
              },
            );
            gsap.to(chip, { y: "+=14", rotation: i % 2 ? 2 : -2, duration: 2.4 + i * 0.3, yoyo: true, repeat: -1, ease: "sine.inOut" });
          });
        }

        const chat = el.querySelector<HTMLElement>("[data-chat]");
        if (chat) {
          const items = chat.querySelectorAll<HTMLElement>("[data-msg]");
          const typing = chat.querySelector<HTMLElement>("[data-typing]");
          gsap.set(items, { opacity: 0, y: 16 });
          const tl = gsap.timeline({ paused: true });
          items.forEach((m) => {
            const who = m.dataset.msg;
            if (who === "eva" && typing) {
              tl.to(typing, { opacity: 1, y: 0, duration: 0.3 }).to(typing, { opacity: 0, duration: 0.2 }, "+=1.1");
            }
            tl.to(m, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, who === "cliente" ? "+=0.5" : "<");
          });
          ScrollTrigger.create({ trigger: chat, start: "top 70%", once: true, onEnter: () => tl.play() });
        }

        const treeSec = el.querySelector<HTMLElement>("[data-tree]");
        if (treeSec) {
          const layers = treeSec.querySelectorAll<HTMLElement>("[data-layer]");
          const activate = (i: number) => {
            layers.forEach((l, k) => l.classList.toggle(h.layerOn, k === i));
            setSceneTarget({ shape: "tree", align: wide ? "right" : "center", pan: -1 + (2 * i) / (layers.length - 1) });
          };
          if (wide) {
            ScrollTrigger.create({
              trigger: treeSec,
              start: "top top",
              end: `+=${layers.length * 90}%`,
              pin: true,
              refreshPriority: 1,
              onUpdate: (self) => activate(Math.min(layers.length - 1, Math.floor(self.progress * layers.length))),
              onEnter: () => activate(0),
              onEnterBack: () => activate(layers.length - 1),
            });
          } else {
            layers.forEach((l, i) =>
              ScrollTrigger.create({ trigger: l, start: "top 65%", end: "bottom 35%", onToggle: (self) => self.isActive && activate(i) }),
            );
          }
        }

        // The shared motion ran first (children's effects run before the
        // parent's); re-measure now that the pinned tree exists.
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      },
    );
    return () => mm.revert();
  }, [root]);
}

export default function EdenHome() {
  const root = useRef<HTMLDivElement>(null);
  useHomeMotion(root);

  return (
    <Shell>
      <div ref={root}>
        {/* Cover */}
        <section className={h.hero} data-scene={scene({ shape: "apple", align: "right" })}>
          <div className={h.heroInner}>
            <p className={s.kicker} data-hero-fade>Eva · Inteligência artificial de atendimento</p>
            <h1 className={h.heroTitle} data-hero-title>
              Enquanto você vive,<br />
              <span className={s.fruit}>a Eva trabalha.</span>
            </h1>
            <p className={h.heroSub} data-hero-fade>
              A inteligência que colheu o conhecimento do seu negócio. Atende no WhatsApp, Instagram, e-mail e telefone, 24 horas por dia.
              <strong> No ar em 24 horas, ou a implantação é por nossa conta.</strong>
            </p>
            <div className={s.ctaRow} data-hero-fade>
              <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
              <Magnetic href="/planos" variant="ghost">Planos a partir de R$ 998/mês</Magnetic>
            </div>
            <ul className={s.trust} data-hero-fade>
              <li>300+ empresas em 5 países</li>
              <li>Sem fidelidade</li>
              <li>Implantação em até 12x</li>
            </ul>
          </div>
          <div className={h.scrollCue} aria-hidden="true"><span />Gênesis</div>
        </section>

        {/* I */}
        <section className={h.chaos} data-chaos data-scene={scene({ shape: "chaos", align: "center" })}>
          <div className={`${h.chapter} ${s.narrow}`}>
            <p className={s.chapterLabel}>I · 23h07</p>
            <h2 className={s.verse} data-reveal>No princípio, era o caos.</h2>
            <p className={s.body} data-fade>
              Sua loja fechou. O WhatsApp, não. Três pessoas perguntam o preço, uma quer agendar, outra desiste e compra do concorrente. Amanhã cedo você descobre, tarde demais.
            </p>
            <p className={h.counter} data-fade>
              <span data-counter>0</span> mensagens sem resposta
            </p>
          </div>
          <div className={h.chips} aria-hidden="true">
            {CHAOS_MESSAGES.map((m, i) => (
              <span key={m} className={h.chip} data-chip style={{ ["--i" as string]: i }}>{m}</span>
            ))}
          </div>
        </section>

        {/* II */}
        <section className={h.arrival} data-scene={scene({ shape: "apple", align: "left", glow: 1.25 })}>
          <div className={h.arrivalGrid}>
            <div className={h.chapterRight}>
              <p className={s.chapterLabel}>II · 23h07min04s</p>
              <h2 className={s.verse} data-reveal>Então veio a Eva.</h2>
              <p className={s.body} data-fade>
                Ela responde em segundos, com o conhecimento do seu negócio. Agenda, vende, cobra e chama um humano quando precisa. Quando alguém da equipe entra na conversa, ela sai de cena sozinha.
              </p>
              <div className={h.chat} data-chat>
                <div className={h.chatHead}><span className={h.dot} />Atendimento · agora</div>
                <p className={`${h.msg} ${h.msgIn}`} data-msg="cliente">Vocês abrem sábado?</p>
                <p className={h.typing} data-typing><span className={h.pulse} />Eva IA respondendo</p>
                <p className={`${h.msg} ${h.msgOut}`} data-msg="eva">Abrimos, das 9h às 14h. Quer que eu reserve um horário para você?</p>
                <p className={`${h.msg} ${h.msgIn}`} data-msg="cliente">Pode ser 10h</p>
                <p className={`${h.msg} ${h.msgOut}`} data-msg="eva">Reservado: sábado, 10h. Te mando um lembrete na sexta.</p>
                <p className={h.system} data-msg="sistema">✓ Agendado na agenda · lembrete Anti No Show programado</p>
              </div>
            </div>
          </div>
        </section>

        {/* III */}
        <section className={h.tree} data-tree data-scene={scene({ shape: "tree", align: "right", pan: -1 })}>
          <div className={h.treeInner}>
            <p className={s.chapterLabel}>III</p>
            <h2 className={s.verse} data-reveal>A árvore do conhecimento.</h2>
            <ol className={h.layers}>
              {TREE_LAYERS.map((l) => (
                <li key={l.name} className={h.layer} data-layer>
                  <p className={s.kicker}>{l.name}</p>
                  <h3 className={h.layerTitle}>{l.title}</h3>
                  {l.text && <p className={h.layerText}>{l.text}</p>}
                  {l.channels && (
                    <ul className={h.pills}>
                      {l.channels.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                  )}
                  {l.numbers && (
                    <dl className={h.numbers}>
                      {l.numbers.map((n) => (
                        <div key={n.label}>
                          <dt>
                            <span data-count={n.value} data-decimals={n.decimals ?? 0}>
                              {n.value.toLocaleString("pt-BR", { minimumFractionDigits: n.decimals ?? 0 })}
                            </span>
                            {n.suffix}
                          </dt>
                          <dd>{n.label}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* IV */}
        <section data-scene={scene({ shape: "clock", align: "right" })}>
          <div className={`${s.wrap} ${s.narrow}`}>
            <p className={s.chapterLabel}>IV · 24 horas</p>
            <h2 className={s.verse} data-reveal>Implantar é plantar.</h2>
            <p className={s.lead} data-fade>A gente planta. Você colhe. Em 24 horas.</p>
            <Growth />
            <Guarantee />
          </div>
        </section>

        {/* V */}
        <section data-scene={scene({ shape: "apple", align: "right", glow: 1.4 })}>
          <div className={`${s.wrap} ${s.narrow}`}>
            <p className={s.chapterLabel}>V · Para quem chega agora</p>
            <h2 className={s.verse} data-reveal>O primeiro fruto.</h2>
            <div className={s.offerCard} data-fade>
              <p className={s.offerTitle}>Vantagens de primeira compra</p>
              <ul className={s.offerList}>
                {FIRST_FRUIT.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <div className={s.price}>
                <span className={s.priceFrom}>Planos a partir de</span>
                <span className={s.priceValue}>R$ 998<small>/mês</small></span>
              </div>
              <div className={s.ctaRow}>
                <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
                <Magnetic href="/planos" variant="ghost">Ver os planos</Magnetic>
              </div>
            </div>
          </div>
        </section>

        {/* VI */}
        <section data-scene={scene({ shape: "apple", align: "center", glow: 0.45 })}>
          <div className={s.wrap}>
            <p className={s.chapterLabel}>VI</p>
            <h2 className={s.verse} data-reveal>Frutos colhidos.</h2>
            <div className={s.quotes}>
              {HARVEST.map((q) => (
                <figure key={q.author} className={s.quote} data-fade>
                  <blockquote>{q.quote}</blockquote>
                  <figcaption>{q.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Final */}
        <section className={s.final} data-scene={scene({ shape: "apple", align: "center", glow: 1.6 })}>
          <div className={s.finalInner}>
            <h2 className={s.finalVerse} data-reveal>Prove do fruto do conhecimento.</h2>
            <p className={s.body} data-fade>Fale com um especialista e veja a Eva atendendo o seu negócio.</p>
            <div className={`${s.ctaRow} ${s.center}`} data-fade>
              <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
}
