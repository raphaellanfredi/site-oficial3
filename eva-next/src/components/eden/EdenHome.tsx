"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { setSceneTarget, type SceneTarget } from "./EdenScene";
import s from "./eden.module.css";

const EdenScene = dynamic(() => import("./EdenScene"), { ssr: false });

const WHATSAPP = `https://wa.me/5511961163777?text=${encodeURIComponent(
  "Olá! Vim pelo site e quero provar a Eva.",
)}`;

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
      { value: 20, suffix: "M+", label: "atendimentos" },
      { value: 99.9, suffix: "%", label: "de precisão", decimals: 1 },
    ],
  },
];

const GROWTH = [
  { stage: "Semente", text: "Você contrata." },
  { stage: "Solo", text: "Você preenche o formulário de configuração. Sem reunião." },
  { stage: "Raízes", text: "A Eva IA monta a arquitetura e treina o agente com o seu negócio." },
  { stage: "Galhos", text: "Canais conectados e bateria de validação." },
  { stage: "Fruto", text: "Especialistas validam, você aprova e a Eva entra no ar." },
];

const FIRST_FRUIT = [
  "50% de desconto em todos os novos produtos Eva",
  "Acesso ao Eva Club: comunidade, cursos e networking",
  "Implantação em até 12x no cartão",
  "No ar em 24 horas, montada pela Eva IA e validada por especialistas",
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

function Magnetic({ href, children, variant = "primary", external = false }: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * 0.28);
      y((e.clientY - (r.top + r.height / 2)) * 0.36);
    };
    const leave = () => { x(0); y(0); };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);
  const cls = variant === "primary" ? s.btnPrimary : s.btnGhost;
  if (external) {
    return (
      <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link ref={ref} href={href} className={cls}>
      {children}
    </Link>
  );
}

export default function EdenHome({ verseFont }: { verseFont: string }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("eden");
    return () => document.documentElement.classList.remove("eden");
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);
    const el = root.current;
    if (!el) return;

    // Cursor lantern.
    const fine = window.matchMedia("(pointer: fine)").matches;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });

    const mm = gsap.matchMedia();
    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        wide: "(min-width: 761px)",
      },
      (ctx) => {
        const { motion, wide } = ctx.conditions as { motion: boolean; wide: boolean };

        // Scene choreography: each chapter tells the particles what to become.
        el.querySelectorAll<HTMLElement>("[data-scene]").forEach((sec) => {
          const target = JSON.parse(sec.dataset.scene || "{}") as SceneTarget;
          ScrollTrigger.create({
            trigger: sec,
            start: "top 60%",
            end: "bottom 40%",
            onToggle: (self) => self.isActive && setSceneTarget(target),
          });
        });
        setSceneTarget({ shape: "apple", align: "right" });

        if (!motion) return;

        // Hero entrance.
        const heroSplit = SplitText.create(el.querySelector("[data-hero-title]"), {
          type: "lines",
          mask: "lines",
          linesClass: s.line,
        });
        gsap
          .timeline({ delay: 0.25 })
          .from(heroSplit.lines, { yPercent: 110, duration: 1.3, stagger: 0.12, ease: "expo.out" })
          .from("[data-hero-fade]", { opacity: 0, y: 24, duration: 1, stagger: 0.08, ease: "power3.out" }, "-=0.8");

        // Headline reveals.
        el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((h) => {
          SplitText.create(h, {
            type: "lines",
            mask: "lines",
            linesClass: s.line,
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.2,
                stagger: 0.1,
                ease: "expo.out",
                scrollTrigger: { trigger: h, start: "top 85%" },
              }),
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((f) => {
          gsap.from(f, { opacity: 0, y: 32, duration: 1, ease: "power3.out", scrollTrigger: { trigger: f, start: "top 88%" } });
        });

        // Chapter I: unanswered messages pile up while you scroll.
        const chaos = el.querySelector<HTMLElement>("[data-chaos]");
        if (chaos) {
          const counter = chaos.querySelector<HTMLElement>("[data-counter]");
          const state = { n: 0 };
          gsap.to(state, {
            n: 37,
            ease: "none",
            scrollTrigger: { trigger: chaos, start: "top 70%", end: "bottom 60%", scrub: true },
            onUpdate: () => { if (counter) counter.textContent = String(Math.round(state.n)); },
          });
          chaos.querySelectorAll<HTMLElement>("[data-chip]").forEach((chip, i) => {
            gsap.fromTo(
              chip,
              { opacity: 0, scale: 0.85, y: 40 },
              {
                opacity: 1, scale: 1, y: 0, ease: "power2.out",
                scrollTrigger: { trigger: chaos, start: `top+=${i * 7}% 75%`, end: `top+=${i * 7 + 18}% 60%`, scrub: true },
              },
            );
            gsap.to(chip, { y: "+=14", rotation: i % 2 ? 2 : -2, duration: 2.4 + i * 0.3, yoyo: true, repeat: -1, ease: "sine.inOut" });
          });
        }

        // Chapter II: the conversation plays once.
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

        // Chapter III: the tree is pinned while its layers light up, roots to fruit.
        const treeSec = el.querySelector<HTMLElement>("[data-tree]");
        if (treeSec) {
          const layers = treeSec.querySelectorAll<HTMLElement>("[data-layer]");
          const activate = (i: number) => {
            layers.forEach((l, k) => l.classList.toggle(s.layerOn, k === i));
            setSceneTarget({ shape: "tree", align: wide ? "right" : "center", pan: -1 + (2 * i) / (layers.length - 1) });
          };
          if (wide) {
            ScrollTrigger.create({
              trigger: treeSec,
              start: "top top",
              end: `+=${layers.length * 90}%`,
              pin: true,
              // The pin adds scroll distance; it must be measured before the
              // triggers of the chapters that come after it.
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
          treeSec.querySelectorAll<HTMLElement>("[data-count]").forEach((c) => {
            const to = Number(c.dataset.count);
            const dec = Number(c.dataset.decimals || 0);
            const st = { v: 0 };
            gsap.to(st, {
              v: to, duration: 2, ease: "power2.out",
              scrollTrigger: { trigger: c, start: "top 90%" },
              onUpdate: () => { c.textContent = st.v.toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec }); },
            });
          });
        }

        // Chapter IV: the vine grows as you scroll through the 24 hours.
        const vine = el.querySelector<SVGPathElement>("[data-vine]");
        const growth = el.querySelector<HTMLElement>("[data-growth]");
        if (vine && growth) {
          gsap.fromTo(vine, { drawSVG: "0%" }, {
            drawSVG: "100%", ease: "none",
            scrollTrigger: { trigger: growth, start: "top 65%", end: "bottom 55%", scrub: 0.6 },
          });
          growth.querySelectorAll<HTMLElement>("[data-stage]").forEach((st) => {
            ScrollTrigger.create({ trigger: st, start: "top 62%", onEnter: () => st.classList.add(s.stageOn), onLeaveBack: () => st.classList.remove(s.stageOn) });
          });
        }

        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      },
    );

    return () => {
      mm.revert();
      if (fine) window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const scene = (t: SceneTarget) => JSON.stringify(t);

  return (
    <div ref={root} className={`${s.root} ${verseFont}`}>
      <EdenScene />
      <div className={s.lantern} aria-hidden="true" />
      <div className={s.grain} aria-hidden="true" />

      <header className={s.nav}>
        <Link href="/" className={s.logo} aria-label="Eva, página inicial">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-eva.webp" alt="" />
        </Link>
        <nav className={s.navLinks} aria-label="Principal">
          <Link href="/produtos">Produto</Link>
          <Link href="/planos">Planos</Link>
          <Link href="/eva-club">Eva Club</Link>
          <Link href="/afiliados">Afiliados</Link>
        </nav>
        <div className={s.navCta}>
          <a href="https://app.evainteligencia.com.br" className={s.navLogin}>Entrar</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={s.navPrimary}>Prove a Eva</a>
        </div>
      </header>

      <main>
        {/* Cover */}
        <section className={s.hero} data-scene={scene({ shape: "apple", align: "right" })}>
          <div className={s.heroInner}>
            <p className={s.kicker} data-hero-fade>Eva · Inteligência artificial de atendimento</p>
            <h1 className={s.heroTitle} data-hero-title>
              Enquanto você vive,<br />
              <span className={s.fruit}>a Eva trabalha.</span>
            </h1>
            <p className={s.heroSub} data-hero-fade>
              A inteligência que colheu o conhecimento do seu negócio. Atende no WhatsApp, Instagram, e-mail e telefone, 24 horas por dia.
              <strong> No ar em 24 horas.</strong>
            </p>
            <div className={s.ctaRow} data-hero-fade>
              <Magnetic href={WHATSAPP} external>Prove a Eva</Magnetic>
              <Magnetic href="/planos" variant="ghost">Planos a partir de R$ 998/mês</Magnetic>
            </div>
            <ul className={s.trust} data-hero-fade>
              <li>300+ empresas</li>
              <li>Sem fidelidade</li>
              <li>Implantação em até 12x</li>
            </ul>
          </div>
          <div className={s.scrollCue} aria-hidden="true"><span />Gênesis</div>
        </section>

        {/* I */}
        <section className={s.chaos} data-chaos data-scene={scene({ shape: "chaos", align: "center" })}>
          <div className={s.chapter}>
            <p className={s.chapterLabel}>I · 23h07</p>
            <h2 className={s.verse} data-reveal>No princípio, era o caos.</h2>
            <p className={s.body} data-fade>
              Sua loja fechou. O WhatsApp, não. Três pessoas perguntam o preço, uma quer agendar, outra desiste e compra do concorrente. Amanhã cedo você descobre, tarde demais.
            </p>
            <p className={s.counter} data-fade>
              <span data-counter>0</span> mensagens sem resposta
            </p>
          </div>
          <div className={s.chips} aria-hidden="true">
            {CHAOS_MESSAGES.map((m, i) => (
              <span key={m} className={s.chip} data-chip style={{ ["--i" as string]: i }}>{m}</span>
            ))}
          </div>
        </section>

        {/* II */}
        <section className={s.arrival} data-scene={scene({ shape: "apple", align: "left", glow: 1.25 })}>
          <div className={s.arrivalGrid}>
            <div className={s.chapterRight}>
              <p className={s.chapterLabel}>II · 23h07min04s</p>
              <h2 className={s.verse} data-reveal>Então veio a Eva.</h2>
              <p className={s.body} data-fade>
                Ela responde em segundos, com o conhecimento do seu negócio. Agenda, vende, cobra e chama um humano quando precisa. Quando alguém da equipe entra na conversa, ela sai de cena sozinha.
              </p>
              <div className={s.chat} data-chat>
                <div className={s.chatHead}><span className={s.dot} />Atendimento · agora</div>
                <p className={`${s.msg} ${s.msgIn}`} data-msg="cliente">Vocês abrem sábado?</p>
                <p className={s.typing} data-typing><span className={s.pulse} />Eva IA respondendo</p>
                <p className={`${s.msg} ${s.msgOut}`} data-msg="eva">Abrimos, das 9h às 14h. Quer que eu reserve um horário para você?</p>
                <p className={`${s.msg} ${s.msgIn}`} data-msg="cliente">Pode ser 10h</p>
                <p className={`${s.msg} ${s.msgOut}`} data-msg="eva">Reservado: sábado, 10h. Te mando um lembrete na sexta.</p>
                <p className={s.system} data-msg="sistema">✓ Agendado na agenda · lembrete Anti No Show programado</p>
              </div>
            </div>
          </div>
        </section>

        {/* III */}
        <section className={s.tree} data-tree data-scene={scene({ shape: "tree", align: "right", pan: -1 })}>
          <div className={s.treeInner}>
            <p className={s.chapterLabel}>III</p>
            <h2 className={s.verse} data-reveal>A árvore do conhecimento.</h2>
            <ol className={s.layers}>
              {TREE_LAYERS.map((l) => (
                <li key={l.name} className={s.layer} data-layer>
                  <p className={s.layerName}>{l.name}</p>
                  <h3 className={s.layerTitle}>{l.title}</h3>
                  {l.text && <p className={s.layerText}>{l.text}</p>}
                  {l.channels && (
                    <ul className={s.pills}>
                      {l.channels.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                  )}
                  {l.numbers && (
                    <dl className={s.numbers}>
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
        <section className={s.growth} data-growth data-scene={scene({ shape: "clock", align: "right" })}>
          <div className={s.chapter}>
            <p className={s.chapterLabel}>IV · 24 horas</p>
            <h2 className={s.verse} data-reveal>Implantar é plantar.</h2>
            <p className={s.lead} data-fade>A gente planta. Você colhe. Em 24 horas.</p>
            <div className={s.timeline}>
              <svg className={s.vine} viewBox="0 0 40 600" preserveAspectRatio="none" aria-hidden="true">
                <path className={s.vineBase} d="M20 0 C 36 60, 4 120, 20 180 S 36 300, 20 360 S 4 480, 20 600" />
                <path className={s.vineGrow} data-vine d="M20 0 C 36 60, 4 120, 20 180 S 36 300, 20 360 S 4 480, 20 600" />
              </svg>
              <ol className={s.stages}>
                {GROWTH.map((g, i) => (
                  <li key={g.stage} className={s.stage} data-stage>
                    <span className={s.stageNum}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className={s.stageName}>{g.stage}</p>
                      <p className={s.stageText}>{g.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <p className={s.note} data-fade>
              As 24 horas contam a partir do pagamento e do formulário preenchido. Depois do go-live, o jardim é cuidado por 90 dias de acompanhamento.
            </p>
          </div>
        </section>

        {/* V */}
        <section className={s.offer} data-scene={scene({ shape: "apple", align: "right", glow: 1.4 })}>
          <div className={s.chapter}>
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
                <Magnetic href={WHATSAPP} external>Prove a Eva</Magnetic>
                <Magnetic href="/planos" variant="ghost">Ver os planos</Magnetic>
              </div>
            </div>
          </div>
        </section>

        {/* VI */}
        <section className={s.harvest} data-scene={scene({ shape: "apple", align: "center", glow: 0.45 })}>
          <div className={s.harvestInner}>
            <p className={s.chapterLabel}>VI</p>
            <h2 className={s.verse} data-reveal>Frutos colhidos.</h2>
            <div className={s.quotes}>
              {HARVEST.map((h) => (
                <figure key={h.author} className={s.quote} data-fade>
                  <blockquote>{h.quote}</blockquote>
                  <figcaption>{h.author}</figcaption>
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
              <Magnetic href={WHATSAPP} external>Prove a Eva</Magnetic>
            </div>
          </div>
        </section>
      </main>

      <footer className={s.footer}>
        <span>© 2026 Eva Inteligência · CNPJ 62.162.039/0001-62</span>
        <nav aria-label="Rodapé">
          <a href="https://wa.me/5521993924639" target="_blank" rel="noopener noreferrer">Suporte</a>
          <a href="https://app.evainteligencia.com.br/hc/central-de-ajuda/articles/1756986596-politica-de-priva" target="_blank" rel="noopener noreferrer">Privacidade</a>
          <a href="https://app.evainteligencia.com.br/hc/central-de-ajuda/articles/1777938226-termos-de-servico" target="_blank" rel="noopener noreferrer">Termos</a>
        </nav>
      </footer>
    </div>
  );
}
