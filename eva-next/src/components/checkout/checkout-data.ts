export type PlanKey = "one" | "pro" | "black";

export interface PlanConfig {
  key: PlanKey;
  name: string;
  badge: string;
  badgeStyle: "outline" | "gradient" | "dark";
  tagline: string;
  monthly: number;
  setup: number;
  features: string[];
  footnote?: string;
  popular?: boolean;
}

export const PLANS: PlanConfig[] = [
  {
    key: "one",
    name: "Eva One",
    badge: "Para começar",
    badgeStyle: "outline",
    tagline: "Ideal para quem está começando e quer profissionalizar o atendimento.",
    monthly: 998,
    setup: 1853,
    features: [
      "Até 1.500 atendimentos/mês",
      "3 etapas de recuperação de cliente",
      "Disparo de mensagens em massa",
      "2 conexões (WhatsApp, Instagram, e-mail…)",
      "3 usuários",
      "CRM nativo",
      "Integração com Google Agenda",
    ],
  },
  {
    key: "pro",
    name: "Eva PRO",
    badge: "Mais Popular",
    badgeStyle: "gradient",
    tagline: "Para negócios em crescimento que precisam de escala e mais canais.",
    monthly: 2690,
    setup: 3950,
    popular: true,
    features: [
      "Até 3.500 atendimentos/mês",
      "7 etapas de recuperação de cliente",
      "Disparo em massa ilimitado",
      "Anti no Show (confirmação automática)",
      "5 conexões",
      "10 usuários",
      "Integração Asaas / PagarMe / Conta Azul",
      "Ligações com IA (ativa e passiva)*",
    ],
    footnote: "*Custo da IA de ligação é pós-pago conforme uso.",
  },
  {
    key: "black",
    name: "Eva BLACK",
    badge: "Máxima potência",
    badgeStyle: "dark",
    tagline: "Potência máxima, infraestrutura dedicada e suporte premium.",
    monthly: 4490,
    setup: 9800,
    features: [
      "Servidor dedicado & infraestrutura escalável",
      "Até 15.200 atendimentos/mês",
      "Suporte Premium",
      "15 etapas de recuperação de cliente",
      "Disparo em massa ilimitado",
      "10 conexões",
      "30 usuários",
      "Integração Asaas / PagarMe / Conta Azul",
      "Ligações com IA (ativa e passiva)*",
    ],
    footnote: "*Custo da IA de ligação é pós-pago conforme uso.",
  },
];

// Installment options offered in checkout
export const INSTALLMENTS = [1, 2, 3, 4, 6, 10, 12] as const;
export type Installment = typeof INSTALLMENTS[number];

// Monthly interest applied for 4+ installments (standard Brazilian credit card)
const MONTHLY_INTEREST = 0.0249;

export function calcInstallmentValue(total: number, n: Installment): number {
  if (n <= 3) return total / n;
  // PMT formula: PV * i / (1 - (1+i)^-n)
  const i = MONTHLY_INTEREST;
  return (total * i) / (1 - Math.pow(1 + i, -n));
}

export function calcInstallmentTotal(total: number, n: Installment): number {
  return calcInstallmentValue(total, n) * n;
}

export function hasInterest(n: Installment): boolean {
  return n > 3;
}

// ─── Asaas payment links ─────────────────────────────────────────────────────
// TODO: Replace "#" placeholders with real Asaas payment link URLs.
// Create one link per plan+installment combination in your Asaas dashboard,
// then paste each URL below.
export const PAYMENT_LINKS: Record<PlanKey, Record<Installment, string>> = {
  one: {
    1:  "https://www.asaas.com/c/3hrbgth0mbh6s7zy",
    2:  "https://www.asaas.com/c/djwqy8i3bpaiydds",
    3:  "https://www.asaas.com/c/djwqy8i3bpaiydds",
    4:  "https://www.asaas.com/c/djwqy8i3bpaiydds",
    6:  "https://www.asaas.com/c/djwqy8i3bpaiydds",
    10: "https://www.asaas.com/c/562mr9kl7hvn0w1h",
    12: "https://www.asaas.com/c/562mr9kl7hvn0w1h",
  },
  pro: {
    1:  "https://www.asaas.com/c/y905r2nditdqj3lj",
    2:  "https://www.asaas.com/c/rsh7gimiz2uc3ih7",
    3:  "https://www.asaas.com/c/rsh7gimiz2uc3ih7",
    4:  "https://www.asaas.com/c/rsh7gimiz2uc3ih7",
    6:  "https://www.asaas.com/c/rsh7gimiz2uc3ih7",
    10: "https://www.asaas.com/c/mwnll4pj4uhkg1rf",
    12: "https://www.asaas.com/c/mwnll4pj4uhkg1rf",
  },
  black: {
    1:  "https://www.asaas.com/c/q1p122kw6qm3arl5",
    2:  "https://www.asaas.com/c/z161yh6uex6ewnd3",
    3:  "https://www.asaas.com/c/z161yh6uex6ewnd3",
    4:  "https://www.asaas.com/c/z161yh6uex6ewnd3",
    6:  "https://www.asaas.com/c/z161yh6uex6ewnd3",
    10: "https://www.asaas.com/c/m9bperj39xuubqda",
    12: "https://www.asaas.com/c/m9bperj39xuubqda",
  },
};

export const TESTIMONIALS = [
  {
    quote: "No primeiro dia, a Eva já converteu dois clientes novos para a loja.",
    author: "Loja de Roupas",
    location: "Rio de Janeiro",
  },
  {
    quote: "Mais de 20 mil clientes atendidos com IA. Aumento de 25% nas conversões e zero tempo de espera no WhatsApp.",
    author: "Casa de Eventos",
    location: "São Paulo",
  },
  {
    quote: "Temos tranquilidade de saber que os leads dos anúncios serão respondidos e qualificados de forma profissional.",
    author: "Agência de Propaganda",
    location: "São Paulo",
  },
];

export const CHECKOUT_FAQS = [
  {
    q: "Quando minha IA fica pronta?",
    a: "Nossa equipe entrega sua IA configurada e conectada em até 7 dias. Você não precisa fazer nada técnico.",
  },
  {
    q: "Existe fidelidade ou multa de cancelamento?",
    a: "Não. Trabalhamos com mensalidade sem fidelidade obrigatória. Você fica porque quer.",
  },
  {
    q: "O setup pode ser parcelado?",
    a: "Sim. A implantação pode ser parcelada em até 12x no cartão de crédito. A mensalidade é cobrada mensalmente à parte.",
  },
  {
    q: "Posso trocar de plano depois?",
    a: "Sim. Upgrade a qualquer momento conforme seu negócio cresce — sem burocracia.",
  },
];
