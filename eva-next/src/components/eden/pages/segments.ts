// Copy of the segment landing pages (/para-clinicas, /para-escritorios,
// /para-empresas). Every claim maps to a feature listed on /produtos.

import type { ChatStep } from "./Demos";

export type SegmentKey = "clinicas" | "escritorios" | "empresas";

export type Segment = {
  key: SegmentKey;
  path: string;
  /** Short name for links between segments and the footer. */
  label: string;
  kicker: string;
  title: string;
  fruit: string;
  sub: string;
  strong: string;
  prove: string;
  pain: { verse: string; body: string; strong: string };
  day: { title: string; items: { time: string; what: string; text: string }[] };
  features: { tag: string; title: string; text: string }[];
  chat: { name: string; label: string; steps: ChatStep[] };
  harvest: string;
  faq: { q: string; a: string }[];
  final: string;
};

const READY = {
  q: "Em quanto tempo a Eva fica pronta?",
  a: "Em até 24 horas depois do pagamento e do formulário de onboarding preenchido. A Eva IA monta a arquitetura, especialistas validam, e ela entra no ar. Se passar de 24 horas, a implantação é por nossa conta.",
};

const PRICE = {
  q: "Quanto custa?",
  a: "Os planos começam em R$ 998 por mês, sem fidelidade, e a implantação pode ser parcelada em até 12 vezes. Na primeira compra há vantagens exclusivas. Os detalhes estão na página de planos.",
};

export const SEGMENTS: Record<SegmentKey, Segment> = {
  clinicas: {
    key: "clinicas",
    path: "/para-clinicas/",
    label: "Clínicas",
    kicker: "Eva para clínicas",
    title: "Nenhum paciente sem",
    fruit: "resposta.",
    sub: "A Eva IA atende o paciente no WhatsApp, no Instagram e no telefone, marca a consulta na agenda e confirma no dia.",
    strong: " A qualquer hora, inclusive às 23h.",
    prove: "Olá! Tenho uma clínica e quero provar a Eva.",
    pain: {
      verse: "O paciente que espera, marca em outro lugar.",
      body: "Quem procura uma clínica quase nunca pergunta a um lugar só. Manda mensagem para três e marca com quem responde primeiro. No almoço, depois do expediente, no sábado: é aí que a agenda esvazia sem ninguém perceber.",
      strong: "A Eva responde na hora, e a consulta fica marcada.",
    },
    day: {
      title: "Um dia na clínica.",
      items: [
        { time: "07h12", what: "Antes da recepção abrir", text: "Três pacientes pedem horário. A Eva mostra os horários livres e marca direto na agenda." },
        { time: "10h40", what: "Confirmação", text: "O Anti No Show confirma as consultas da tarde. Quem não pode vir remarca na própria conversa." },
        { time: "12h30", what: "No almoço", text: "Uma paciente manda um áudio de dois minutos. A Eva transcreve, entende e responde." },
        { time: "19h05", what: "Depois do expediente", text: "Alguém pergunta sobre o preparo de um exame. A resposta foi aprovada pela clínica, sem improviso." },
        { time: "23h07", what: "Enquanto todos dormem", text: "Mais uma consulta marcada. De manhã, a recepção só confere." },
      ],
    },
    features: [
      { tag: "Destaque", title: "Agenda nativa", text: "Marca, remarca e cancela a consulta de verdade, com confirmação no dia. Integrada ao Google Agenda." },
      { tag: "Menos faltas", title: "Anti No Show", text: "Confirmação automática antes do horário, para a agenda não ficar vazia." },
      { tag: "Precisão", title: "Respostas aprovadas", text: "Valores, preparo de exame, endereço, formas de pagamento: o que não pode sair errado tem a resposta que a clínica aprovou." },
      { tag: "Equipe", title: "Sabe a hora de chamar alguém", text: "Quando o assunto pede um profissional, a conversa vai para a recepção. Quando a equipe entra, a IA sai de cena." },
      { tag: "Retorno", title: "Follow-up no tempo certo", text: "Lembra o paciente do retorno e retoma quem pediu orçamento e não respondeu." },
      { tag: "Uma tela", title: "Todos os canais, uma ficha", text: "WhatsApp, Instagram, telefone e site, com o histórico de cada paciente num lugar só." },
    ],
    chat: {
      name: "Eva · Clínica",
      label: "Exemplo de conversa: a Eva IA consulta a agenda e marca uma avaliação",
      steps: [
        { kind: "in", text: "Oi! Queria marcar uma avaliação. Tem horário amanhã?" },
        { kind: "fn", text: "Agenda nativa · horários livres amanhã" },
        { kind: "result", text: "livres: 09h30 · 14h00 · 16h30" },
        { kind: "out", text: "Tenho amanhã às 9h30, 14h ou 16h30. Qual fica melhor para você?" },
        { kind: "in", text: "14h!" },
        { kind: "out", text: "Marcado para amanhã às 14h. Te mando uma confirmação no dia. Até lá! 😊" },
      ],
    },
    harvest: "Amanhã, a sua recepção já tem reforço.",
    faq: [
      {
        q: "A Eva IA dá diagnóstico ou orientação médica?",
        a: "Não. Ela é configurada para atender, agendar, confirmar e responder o que a clínica aprovou, como preparo de exame, endereço e formas de pagamento. Dúvidas clínicas vão para a equipe.",
      },
      {
        q: "Ela funciona com a agenda que eu já uso?",
        a: "A agenda nativa da Eva é integrada ao Google Agenda. Se a clínica usa outro sistema e ele oferece integração, as funções personalizadas deixam a IA consultar esse sistema durante a conversa.",
      },
      {
        q: "E se o paciente quiser falar com uma pessoa?",
        a: "A conversa passa para a equipe na hora. Enquanto alguém da clínica atende, a IA fica em silêncio, e volta quando a equipe sai.",
      },
      READY,
      PRICE,
    ],
    final: "A agenda cheia começa por uma resposta.",
  },

  escritorios: {
    key: "escritorios",
    path: "/para-escritorios/",
    label: "Escritórios",
    kicker: "Eva para escritórios",
    title: "Cada pedido no",
    fruit: "lugar certo.",
    sub: "A Eva IA recebe o cliente, entende o que ele precisa e encaminha para quem entende do assunto.",
    strong: " Advocacia, contabilidade e consultoria, com o histórico de cada cliente à mão.",
    prove: "Olá! Tenho um escritório e quero provar a Eva.",
    pain: {
      verse: "Quem sabe não devia ser a recepção.",
      body: "No escritório, o tempo mais caro é o de quem sabe. E é justamente ele que para o trabalho para responder se o documento chegou, qual é o prazo, quanto custa uma consulta.",
      strong: "A Eva responde o que se repete e entrega o resto organizado.",
    },
    day: {
      title: "Um dia no escritório.",
      items: [
        { time: "08h03", what: "Antes do expediente", text: "Um novo contato explica o caso num áudio longo. A Eva transcreve, faz as perguntas de triagem e registra tudo na ficha." },
        { time: "09h30", what: "Distribuição", text: "Cada área recebe o que é dela. O roteamento por habilidade entrega a conversa a quem entende do assunto." },
        { time: "14h15", what: "Documentos", text: "O cliente pergunta se o documento chegou. Com as funções personalizadas, a Eva consulta o seu sistema e responde, sem tirar ninguém do trabalho." },
        { time: "17h50", what: "Prazos", text: "Nenhuma conversa esquecida: o SLA avisa antes de o prazo de resposta estourar." },
        { time: "21h40", what: "Fora do horário", text: "O cliente é atendido e já sai com a reunião marcada para o dia seguinte, com link." },
      ],
    },
    features: [
      { tag: "Destaque", title: "Triagem com IA", text: "Faz as perguntas certas e entrega o caso resumido, com as etiquetas sugeridas e a ficha preenchida." },
      { tag: "Distribuição", title: "Roteamento por habilidade", text: "Cada conversa para a área e a pessoa certas, com limite de carga por atendente." },
      { tag: "Agenda", title: "Reunião marcada", text: "Agenda com link de reunião e confirma no dia. Integrada ao Google Agenda." },
      { tag: "Cliente", title: "Ficha única", text: "Histórico de todos os canais, campos personalizados e contatos agrupados por empresa." },
      { tag: "Prazos", title: "SLA medido", text: "Alerta antes de estourar o prazo e relatório de cumprimento por pessoa e por time." },
      { tag: "Controle", title: "Cada um vê o que precisa", text: "Papéis de acesso granulares e logs de auditoria de tudo o que foi feito." },
    ],
    chat: {
      name: "Eva · Escritório",
      label: "Exemplo de conversa: a Eva IA faz a triagem e encaminha para a área certa",
      steps: [
        { kind: "in", text: "Boa tarde, preciso de ajuda com uma rescisão." },
        { kind: "out", text: "Claro! Para encaminhar para a pessoa certa: você é o empregado ou a empresa?" },
        { kind: "in", text: "Sou a empresa." },
        { kind: "fn", text: "Roteamento · área trabalhista" },
        { kind: "result", text: "etiquetas: rescisão · empresa · novo contato" },
        { kind: "out", text: "Obrigada! Seu caso já está com a nossa área trabalhista. Quer marcar uma reunião? Tenho amanhã às 10h ou às 15h." },
      ],
    },
    harvest: "Amanhã, o seu escritório já atende melhor.",
    faq: [
      {
        q: "A Eva IA dá parecer jurídico ou contábil?",
        a: "Não. Ela recebe, faz a triagem, agenda e responde o que o escritório aprovou. Qualquer análise técnica fica com a equipe.",
      },
      {
        q: "Serve para advocacia, contabilidade e consultoria?",
        a: "Sim. A Eva IA monta a arquitetura para o seu escritório: as perguntas de triagem, as áreas e as respostas são as suas, validadas por especialistas antes de entrar no ar.",
      },
      {
        q: "Quem da equipe vê as conversas?",
        a: "Quem você definir. Cada pessoa tem o papel de acesso que precisa, e os logs de auditoria registram o que foi feito.",
      },
      READY,
      PRICE,
    ],
    final: "Deixe a Eva na porta. Fique com o que só você sabe fazer.",
  },

  empresas: {
    key: "empresas",
    path: "/para-empresas/",
    label: "Empresas",
    kicker: "Eva para empresários",
    title: "O braço direito que",
    fruit: "não tira férias.",
    sub: "A Eva IA atende, vende, cobra e agenda no WhatsApp, no Instagram e no telefone.",
    strong: " Você volta a cuidar do que só você pode fazer.",
    prove: "Olá! Tenho uma empresa e quero provar a Eva.",
    pain: {
      verse: "Você não abriu uma empresa para responder mensagem.",
      body: "O dono que responde tudo vira o gargalo do próprio negócio. A mensagem das 22h fica para amanhã, o orçamento esfria, e o cliente fecha com quem respondeu antes.",
      strong: "A Eva responde na hora e deixa o funil pronto para a sua equipe fechar.",
    },
    day: {
      title: "Um dia na sua empresa.",
      items: [
        { time: "06h50", what: "Antes de você acordar", text: "Dois orçamentos respondidos e um cliente de volta, porque recebeu o follow-up na hora certa." },
        { time: "11h20", what: "No meio da reunião", text: "Um cliente pergunta do pedido. A Eva consulta o seu sistema e responde com o status real." },
        { time: "15h00", what: "No funil", text: "Cada conversa chega classificada. Quem pediu preço já está na etapa certa, com a tarefa criada." },
        { time: "18h30", what: "Fim do dia", text: "Você pergunta à Eva IA no painel como foi a semana. Ela monta o relatório com os seus dados." },
        { time: "23h07", what: "Enquanto você vive", text: "Mais uma venda encaminhada. A Eva trabalha." },
      ],
    },
    features: [
      { tag: "O maior diferencial", title: "Funções personalizadas", text: "Durante a conversa, a IA consulta estoque, pedido, saldo e disponibilidade no seu sistema. Ela não só responde. Resolve." },
      { tag: "Atendimento", title: "Atende e vende", text: "Responde com o conhecimento do seu negócio, em oito canais, 24 horas por dia." },
      { tag: "Funil", title: "O funil anda sozinho", text: "Mudou de etapa, a ação acontece: mensagem, tarefa, etiqueta." },
      { tag: "Recuperação", title: "Follow-up", text: "O cliente que sumiu recebe a mensagem certa, na hora certa." },
      { tag: "Para o dono", title: "Eva IA no painel", text: "Pergunte à sua operação e receba relatório, tabela e gráfico com dados reais." },
      { tag: "Controle", title: "A decisão é sua", text: "A IA propõe ações que só acontecem depois da sua confirmação. Quando a equipe entra na conversa, ela sai de cena." },
    ],
    chat: {
      name: "Eva · Sua empresa",
      label: "Exemplo de conversa: a Eva IA consulta o estoque e envia o orçamento",
      steps: [
        { kind: "in", text: "Oi! Vocês entregam em Campinas? Preciso de 20 unidades." },
        { kind: "fn", text: "Função personalizada · consultar_estoque(20)" },
        { kind: "result", text: "disponível: 34 un. · entrega Campinas: 2 dias úteis" },
        { kind: "out", text: "Entregamos sim! Temos as 20 unidades, e elas chegam em 2 dias úteis. Quer que eu mande o orçamento agora?" },
        { kind: "in", text: "Quero!" },
        { kind: "out", text: "Pronto, orçamento enviado aqui. Já avisei a nossa equipe comercial. 😊" },
      ],
    },
    harvest: "Amanhã, você já tem um braço direito.",
    faq: [
      {
        q: "Serve para o meu tipo de negócio?",
        a: "A Eva atende do comércio aos serviços. A Eva IA monta a arquitetura com o conhecimento do seu negócio, e especialistas validam antes de entrar no ar.",
      },
      {
        q: "Preciso ter equipe para usar?",
        a: "Não. Ela atende sozinha e chama você quando o assunto pede uma pessoa. Se você tem equipe, cada conversa vai para quem entende do assunto.",
      },
      {
        q: "Ela se conecta aos sistemas que eu já uso?",
        a: "Sim, por funções personalizadas, API aberta e integrações como Google Agenda, Asaas, PagarMe, Conta Azul, Shopify, WooCommerce, n8n e Zapier.",
      },
      READY,
      PRICE,
    ],
    final: "Enquanto você vive, a Eva trabalha.",
  },
};

export const SEGMENT_LIST = [SEGMENTS.empresas, SEGMENTS.clinicas, SEGMENTS.escritorios];
