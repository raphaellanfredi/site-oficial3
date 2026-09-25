"use client";

import Image from "next/image";
import Shell from "../Shell";
import Magnetic from "../Magnetic";
import type { SceneTarget } from "../sceneBus";
import { PROVE } from "../site";
import {
  CartIcon,
  ChatIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "../icons";
import { AgentDemo, FunnelDemo, ReportDemo } from "./Demos";
import s from "../eden.module.css";
import p from "./products.module.css";

const scene = (t: SceneTarget) => JSON.stringify(t);

const CHANNELS = [
  { Icon: WhatsAppIcon, name: "WhatsApp", text: "API oficial e não oficial, no mesmo painel." },
  { Icon: InstagramIcon, name: "Instagram", text: "Direct, comentários e respostas a Stories." },
  { Icon: EmailIcon, name: "E-mail", text: "Caixa unificada com o seu domínio." },
  { Icon: PhoneIcon, name: "Telefone", text: "Ligação ativa e receptiva com IA." },
  { Icon: ChatIcon, name: "Chat do site", text: "Widget que reconhece o usuário logado." },
  { Icon: FacebookIcon, name: "Facebook", text: "Mensagens e comentários." },
  { Icon: TikTokIcon, name: "TikTok", text: "Mensagens no mesmo lugar que o resto." },
  { Icon: CartIcon, name: "E-commerce", text: "Shopify e WooCommerce, com o pedido dentro da conversa." },
];

const AGENT = [
  {
    tag: "O maior diferencial",
    title: "Funções personalizadas",
    text: "Durante a conversa, a IA consulta o seu sistema: estoque, status de pedido, saldo, disponibilidade. Ela não só responde. Resolve.",
    feature: true,
  },
  {
    tag: "Conhecimento",
    title: "Aprende com a sua Central de Ajuda",
    text: "Cada artigo que você publica na sua Central de Ajuda vira conhecimento da IA. Um trabalho, dois resultados.",
  },
  {
    tag: "Precisão",
    title: "Respostas aprovadas e cenários",
    text: "Fatos que não podem sair errados têm resposta aprovada. Cada intenção tem o seu roteiro e as suas ferramentas.",
  },
  {
    tag: "Controle",
    title: "Atendimento híbrido",
    text: "Quando alguém da equipe entra na conversa, a IA sai de cena. Quando sai, ela volta. Você pausa quando quiser.",
  },
  {
    tag: "Para a equipe",
    title: "Copiloto do atendente",
    text: "A Eva IA ajuda quem está atendendo, direto na conversa.",
  },
  {
    tag: "Para o dono",
    title: "Eva IA no painel",
    text: "Pergunte à sua operação: quem mais escreveu no mês, como estão as caixas, o relatório da semana. Ela propõe ações que só acontecem depois da sua confirmação. Abre em qualquer tela com Alt + Shift + M.",
    feature: true,
  },
  {
    tag: "Integração",
    title: "MCP",
    text: "Conecta o agente a um conjunto de ferramentas externas.",
  },
  {
    tag: "Organização",
    title: "Etiquetas sugeridas pela IA",
    text: "Cada conversa chega classificada, pronta para o funil e para os relatórios.",
  },
];

const CRM = [
  { title: "Visão única do cliente", text: "Todo o histórico, de todos os canais, numa ficha só." },
  { title: "Atributos e gestão B2B", text: "Campos personalizados e contatos agrupados por empresa." },
  { title: "Checklist por etapa", text: "Cada etapa do funil com o que precisa ser feito antes de avançar." },
  { title: "Automação ao entrar na etapa", text: "Mudou de etapa, a ação acontece: mensagem, tarefa, etiqueta." },
  { title: "Tempo em cada etapa", text: "Relatório de onde os negócios param, com notas de ciclo em cada cartão." },
  { title: "Webhook e importação", text: "Eventos do funil para o seu sistema, e contatos importados com etiquetas e campos." },
];

const AUTOMATION = [
  {
    tag: "Destaque",
    title: "Agenda nativa",
    text: "A IA marca o compromisso de verdade, com link de reunião, confirma no dia e cancela quando o cliente pede. Integrada ao Google Agenda.",
    feature: true,
  },
  { title: "Anti No Show", text: "Confirmação automática antes do horário, para a agenda não ficar vazia." },
  { title: "Follow-up e mensagem agendada", text: "O cliente que sumiu recebe a mensagem certa, na hora certa." },
  { title: "Regras se/então", text: "Se a mensagem fala de orçamento, vai para o comercial. Sem programar." },
  { title: "Roteamento por habilidade", text: "Cada conversa para quem entende do assunto." },
  { title: "SLA definido e medido", text: "Alerta antes de estourar o prazo e relatório de cumprimento." },
  { title: "Campanhas segmentadas", text: "Disparo com segmentação e agendamento. Envios cobrados por mensagem." },
  { title: "Pesquisa de satisfação", text: "CSAT automático ao fim do atendimento." },
  { title: "Macros e resolução automática", text: "Sequências de ações num clique, e conversas inativas encerradas sozinhas." },
];

const MANAGEMENT = [
  { title: "Painel unificado", text: "Todas as conversas, de todos os canais, com contador de não lidas." },
  { title: "Relatórios de verdade", text: "Por atendente, caixa, etiqueta e time." },
  { title: "Times e atribuição", text: "Política de distribuição e limite de carga por atendente." },
  { title: "Chat interno", text: "Salas, tópicos, enquetes e mensagens fixadas para a equipe." },
  { title: "App da Eva IA", text: "Instalado no celular direto do navegador, sem loja." },
  { title: "Segurança", text: "Logs de auditoria, papéis granulares, SSO/SAML e roteamento geográfico." },
];

const INTEGRATIONS = [
  "Google Agenda", "Asaas", "PagarMe", "Conta Azul", "Shopify", "WooCommerce",
  "n8n", "Zapier", "Linear", "Notion", "Slack", "API aberta",
];

function Cards({ items }: { items: { tag?: string; title: string; text: string; feature?: boolean }[] }) {
  return (
    <div className={s.grid}>
      {items.map((it) => (
        <article key={it.title} className={`${s.card} ${it.feature ? s.feature : ""}`} data-fade data-spot>
          {it.tag && <span className={s.cardTag}>{it.tag}</span>}
          <h3 className={s.cardTitle}>{it.title}</h3>
          <p className={s.cardText}>{it.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Shell>
      <section className={s.pageHero} data-scene={scene({ shape: "apple", align: "right" })}>
        <div className={s.wrap}>
          <p className={s.kicker} data-hero-fade>Produto</p>
          <h1 className={s.display} data-hero-title>
            Uma inteligência. Todos os canais. <span className={s.fruit}>Uma tela.</span>
          </h1>
          <p className={s.heroSub} data-hero-fade>
            A Eva IA atende, organiza e vende em todos os seus canais, e a sua equipe acompanha tudo de um painel só.
            <strong> No ar em 24 horas.</strong>
          </p>
          <div className={s.ctaRow} data-hero-fade>
            <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
            <Magnetic href="/planos" variant="ghost">Ver planos</Magnetic>
          </div>
        </div>
      </section>

      <section id="canais" data-scene={scene({ shape: "tree", align: "right", pan: 1 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>I · Os galhos</p>
          <h2 className={s.verse} data-reveal>Onde o seu cliente estiver.</h2>
          <p className={s.body} data-fade>Oito canais, uma única tela de Conversas. Nenhuma mensagem se perde entre apps.</p>
          <div className={p.channels}>
            {CHANNELS.map(({ Icon, name, text }) => (
              <article key={name} className={p.channel} data-fade data-spot>
                <span className={p.channelIcon}><Icon /></span>
                <h3 className={s.cardTitle}>{name}</h3>
                <p className={s.cardText}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="agente" data-scene={scene({ shape: "apple", align: "right", glow: 1.1 })}>
        <div className={s.wrap}>
          <div className={s.split}>
            <div>
              <p className={s.chapterLabel}>II · O agente</p>
              <h2 className={s.verse} data-reveal>Ela não só responde. Resolve.</h2>
              <p className={s.body} data-fade>
                Treinada com o conhecimento do seu negócio, a Eva IA consulta o seu sistema no meio da conversa e entrega a resposta que o cliente precisava. Quando a base não cobre o assunto, ela admite que não sabe e chama um humano.
              </p>
            </div>
            <div data-fade>
              <AgentDemo />
            </div>
          </div>
          <Cards items={AGENT} />
          <div className={p.audio} data-fade>
            <div className={s.shot}>
              <Image src="/products/transcricao-audio.jpeg" alt="Áudio do WhatsApp com a transcrição automática logo abaixo" width={437} height={174} />
            </div>
            <div>
              <h3 className={s.cardTitle}>Transcrição de áudio</h3>
              <p className={s.cardText}>Recebeu um áudio de três minutos? A Eva transcreve em segundos, e a equipe lê em vez de ouvir.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="crm" data-scene={scene({ shape: "tree", align: "center", pan: 0, glow: 0.5 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>III · O cultivo</p>
          <h2 className={s.verse} data-reveal>Cada cliente, cultivado até a colheita.</h2>
          <p className={s.body} data-fade>O CRM nativo acompanha cada negócio do primeiro oi à venda, com o funil andando sozinho.</p>
          <div className={p.demoWide} data-fade>
            <FunnelDemo />
          </div>
          <Cards items={CRM} />
        </div>
      </section>

      <section id="automacao" data-scene={scene({ shape: "clock", align: "right" })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>IV · As estações</p>
          <h2 className={s.verse} data-reveal>O que se repete, a Eva faz.</h2>
          <p className={s.body} data-fade>Agenda, confirmação, follow-up, roteamento e prazos. Configurado uma vez, funcionando para sempre.</p>
          <Cards items={AUTOMATION} />
        </div>
      </section>

      <section id="gestao" data-scene={scene({ shape: "apple", align: "right", glow: 0.7 })}>
        <div className={s.wrap}>
          <div className={s.split}>
            <div>
              <p className={s.chapterLabel}>V · O jardineiro</p>
              <h2 className={s.verse} data-reveal>Sua equipe no controle.</h2>
              <p className={s.body} data-fade>Você vê quem atende o quê, quanto tempo leva e onde está o gargalo. A IA e as pessoas no mesmo relatório.</p>
            </div>
            <div data-fade>
              <ReportDemo />
            </div>
          </div>
          <Cards items={MANAGEMENT} />
        </div>
      </section>

      <section id="integracoes" data-scene={scene({ shape: "tree", align: "center", pan: -1, glow: 0.6 })}>
        <div className={s.wrap}>
          <p className={s.chapterLabel}>VI · As raízes</p>
          <h2 className={s.verse} data-reveal>Conectada ao que você já usa.</h2>
        </div>
        <div className={s.marquee} aria-label={`Integrações: ${INTEGRATIONS.join(", ")}`}>
          {[0, 1].map((k) => (
            <div key={k} className={s.marqueeTrack} aria-hidden="true">
              {INTEGRATIONS.map((i) => <span key={i}>{i}</span>)}
            </div>
          ))}
        </div>
      </section>

      <section className={s.final} data-scene={scene({ shape: "apple", align: "center", glow: 1.6 })}>
        <div className={s.finalInner}>
          <h2 className={s.finalVerse} data-reveal>Tudo isso, no ar em 24 horas.</h2>
          <p className={s.body} data-fade>Ou a implantação é por nossa conta.</p>
          <div className={`${s.ctaRow} ${s.center}`} data-fade>
            <Magnetic href={PROVE} external>Prove a Eva</Magnetic>
            <Magnetic href="/planos" variant="ghost">Ver planos</Magnetic>
          </div>
        </div>
      </section>
    </Shell>
  );
}
