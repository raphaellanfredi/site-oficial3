export type ScheduleValue = { dias: string; inicio: string; fim: string };
export type ToggleState = Record<number, boolean>;
export type FormData = Record<string, string | ScheduleValue | ToggleState | undefined>;

export type FieldOption = { value: string; label?: string; icon?: string; name?: string; desc?: string };

export type FieldConfig = {
  key: string;
  label: string;
  req: boolean;
  type: "text" | "email" | "textarea" | "auto-draft" | "role" | "chips" | "pills" | "schedule" | "toggle-list";
  placeholder?: string;
  hint?: string;
  options?: FieldOption[];
  presetGroup?: "in_scope" | "out_scope" | "routing_rules" | "escalation_triggers";
  showWhen?: { key: string; equals: string };
  autoComplete?: string;
};

export type StepConfig = {
  id: string;
  badge: string;
  title: string;
  desc: string;
  fields: FieldConfig[];
};

export const PRESETS: Record<string, Record<string, string[]>> = {
  sdr: {
    in_scope: [
      "Responder dúvidas sobre produtos e serviços",
      "Coletar dados do lead (nome, contato, necessidade)",
      "Qualificar o interesse do lead",
      "Agendar uma conversa com um consultor/vendedor",
      "Encaminhar para atendimento humano quando necessário",
    ],
    out_scope: [
      "Fechar vendas ou negociar valores diretamente",
      "Citar ou comparar com concorrentes",
      "Prometer descontos não autorizados",
      "Falar sobre assuntos fora do negócio",
      "Inventar informações não fornecidas no cadastro",
    ],
    routing_rules: [
      'Mensagem genérica ("oi", "boa tarde") → inicia o fluxo de boas-vindas normalmente',
      "Pergunta sobre preço antes da qualificação → responde de forma geral e segue o fluxo",
      "Assunto totalmente fora do escopo → recusa educadamente e oferece redirecionamento",
      "Mensagem em outro idioma → responde sempre em português",
    ],
    escalation_triggers: [
      "Cliente pede para falar com um atendente humano",
      "Reclamação ou insatisfação explícita",
      "Lead qualificado e pronto para proposta/fechamento",
      "Pergunta técnica que o agente não tem informação para responder",
    ],
  },
  suporte: {
    in_scope: [
      "Responder dúvidas frequentes sobre o produto/serviço",
      "Ajudar o cliente a resolver problemas simples",
      "Coletar informações para abertura de chamado",
      "Informar status de pedidos/solicitações já cadastrados",
      "Encaminhar para atendimento humano quando necessário",
    ],
    out_scope: [
      "Fazer reembolsos ou alterações financeiras diretamente",
      "Dar diagnósticos técnicos fora do que foi autorizado",
      "Prometer prazos não confirmados pela empresa",
      "Falar sobre assuntos fora do negócio",
      "Inventar informações não fornecidas no cadastro",
    ],
    routing_rules: [
      "Mensagem genérica → inicia o fluxo de atendimento normalmente",
      "Reclamação direta → reconhece o problema e segue para escalonamento se necessário",
      "Assunto totalmente fora do escopo → recusa educadamente e oferece redirecionamento",
      "Mensagem em outro idioma → responde sempre em português",
    ],
    escalation_triggers: [
      "Cliente pede para falar com um atendente humano",
      "Reclamação ou insatisfação explícita",
      "Problema que exige acesso a sistemas internos",
      "Após duas tentativas sem conseguir resolver",
    ],
  },
  agendamento: {
    in_scope: [
      "Responder dúvidas sobre horários e disponibilidade",
      "Coletar dados para agendamento (nome, contato, serviço desejado)",
      "Confirmar, reagendar ou cancelar agendamentos",
      "Informar valores e serviços listados no cadastro",
      "Encaminhar para atendimento humano quando necessário",
    ],
    out_scope: [
      "Dar diagnósticos médicos, jurídicos ou técnicos",
      "Citar ou comparar com concorrentes",
      "Prometer descontos não autorizados",
      "Confirmar horários sem checar disponibilidade real",
      "Inventar informações não fornecidas no cadastro",
    ],
    routing_rules: [
      "Mensagem genérica → inicia o fluxo de agendamento normalmente",
      "Pergunta sobre preço antes de agendar → responde com os valores cadastrados",
      "Assunto totalmente fora do escopo → recusa educadamente e oferece redirecionamento",
      "Mensagem em outro idioma → responde sempre em português",
    ],
    escalation_triggers: [
      "Cliente pede para falar com um atendente humano",
      "Reclamação ou insatisfação explícita",
      "Caso urgente ou sensível mencionado pelo cliente",
      "Horário desejado indisponível e cliente insiste",
    ],
  },
  outro: {
    in_scope: [
      "Responder dúvidas sobre o negócio com base no cadastro",
      "Coletar dados de contato do cliente",
      "Encaminhar para atendimento humano quando necessário",
    ],
    out_scope: [
      "Falar sobre assuntos fora do negócio",
      "Inventar informações não fornecidas no cadastro",
      "Prometer condições não autorizadas",
    ],
    routing_rules: [
      "Mensagem genérica → inicia o fluxo normalmente",
      "Assunto totalmente fora do escopo → recusa educadamente e oferece redirecionamento",
      "Mensagem em outro idioma → responde sempre em português",
    ],
    escalation_triggers: [
      "Cliente pede para falar com um atendente humano",
      "Reclamação ou insatisfação explícita",
    ],
  },
};

export const OBJECTIVE_LABELS: Record<string, string> = {
  sdr: "SDR (Qualificação de Leads)",
  suporte: "Suporte ao Cliente",
  agendamento: "Agendamento",
  outro: "Outro",
};

export const STEPS: StepConfig[] = [
  {
    id: "cadastro",
    badge: "Cadastro",
    title: "Crie sua conta Eva",
    desc: "Essas informações identificam você na plataforma. O tipo de acesso define o que você pode controlar e visualizar.",
    fields: [
      { key: "nome_usuario", label: "Seu nome completo", req: true, type: "text", placeholder: "Ex: Raphael Souza", autoComplete: "name" },
      { key: "email", label: "E-mail de cadastro", req: true, type: "email", placeholder: "seu@email.com", autoComplete: "email" },
      {
        key: "tipo_acesso",
        label: "Tipo de acesso",
        req: true,
        type: "role",
        options: [
          { value: "user", name: "User", desc: "Acesso padrão. Cria e gerencia seus próprios agentes." },
          { value: "admin", name: "Admin", desc: "Controle total. Gerencia agentes, usuários e todas as configurações da conta." },
        ],
      },
    ],
  },
  {
    id: "business",
    badge: "Negócio",
    title: "Sobre o seu negócio",
    desc: "Descreva o que a empresa faz e o que o agente pode dizer com certeza.",
    fields: [
      { key: "nome_empresa", label: "Nome da empresa ou marca", req: true, type: "text", placeholder: "Ex: Petiatria, SaúdeMax, Grupo SS Consultoria..." },
      {
        key: "descricao_negocio",
        label: "O que a empresa faz?",
        req: true,
        type: "textarea",
        placeholder:
          "Descreva o negócio, o segmento de atuação e o público-alvo. Inclua cidade/região se relevante.\n\nEx: Clínica veterinária e pet shop localizada em São José do Rio Preto. Atende cães e gatos com consultas, vacinação, banho e tosa.",
        hint: "Pense como se estivesse explicando seu negócio para alguém que nunca ouviu falar dele.",
      },
      {
        key: "conhecimento_produto",
        label: "O que a Eva pode dizer com certeza?",
        req: true,
        type: "textarea",
        placeholder:
          "Liste preços, planos, horários, endereço, convênios, políticas, promoções — tudo que a Eva pode falar de cabeça, sem inventar.\n\nEx: Consulta R$120. Aberto seg-sáb das 8h às 18h. Aceita Pix, cartão e dinheiro.",
        hint: 'Diferença simples: a pergunta anterior é "o que vocês fazem". Esta aqui é "o que a Eva pode literalmente falar em voz alta para um cliente". Se um fato não estiver aqui, a Eva não vai mencioná-lo.',
      },
    ],
  },
  {
    id: "objetivo",
    badge: "Objetivo",
    title: "Missão e identidade do agente",
    desc: "Escolha o que esse agente vai fazer no dia a dia e como ele deve se comportar.",
    fields: [
      {
        key: "objetivo_principal",
        label: "Qual a missão principal deste agente?",
        req: true,
        type: "chips",
        options: [
          { value: "sdr", label: "SDR — Qualificar Leads" },
          { value: "suporte", label: "Suporte ao Cliente" },
          { value: "agendamento", label: "Agendamento" },
          { value: "outro", label: "Outro" },
        ],
      },
      {
        key: "objetivo_outro_detalhe",
        label: "Descreva a missão deste agente",
        req: false,
        type: "text",
        placeholder: "Ex: Tirar dúvidas sobre o curso e indicar a matrícula.",
        showWhen: { key: "objetivo_principal", equals: "outro" },
      },
      { key: "nome_agente", label: "Nome do agente", req: true, type: "text", placeholder: "Ex: Carolina, Mia, Dra. Ana, Nanda..." },
      {
        key: "tom_personalidade",
        label: "Tom e personalidade",
        req: true,
        type: "textarea",
        placeholder:
          "Descreva como o agente deve se comunicar.\n\nEx: Warm e consultivo. Fala como uma atendente experiente — próxima, mas profissional. Gênero feminino (fala em primeira pessoa no feminino).",
        hint: "Inclua o gênero gramatical (feminino/masculino) para a concordância correta em português.",
      },
      {
        key: "canal",
        label: "Onde o agente vai atender?",
        req: true,
        type: "pills",
        options: [
          { value: "whatsapp", label: "WhatsApp" },
          { value: "instagram", label: "Instagram Direct" },
        ],
      },
      {
        key: "horario_atendimento",
        label: "Horário de atendimento humano",
        req: true,
        type: "schedule",
        hint: "É só para a Eva saber quando ela pode te transferir para um humano de verdade — fora desse horário, ela mesma avisa o cliente.",
      },
    ],
  },
  {
    id: "regras",
    badge: "Regras padrão",
    title: "Confirme as regras padrão da Eva",
    desc: "Estes itens já vêm marcados com o padrão Eva para a missão escolhida. Desmarque apenas o que não se aplica ao seu negócio — você não precisa escrever nada.",
    fields: [
      { key: "in_scope", label: "O que a Eva PODE fazer", req: true, type: "toggle-list", presetGroup: "in_scope" },
      { key: "out_scope", label: "O que a Eva NUNCA deve fazer", req: true, type: "toggle-list", presetGroup: "out_scope" },
      { key: "routing_rules", label: "Como a Eva reage a mensagens comuns", req: true, type: "toggle-list", presetGroup: "routing_rules" },
      { key: "escalation_triggers", label: "Quando a Eva chama um humano", req: true, type: "toggle-list", presetGroup: "escalation_triggers" },
    ],
  },
  {
    id: "abertura",
    badge: "Mensagem final",
    title: "Como a conversa começa",
    desc: "A primeira mensagem que o cliente recebe, e o roteiro de conversa — já rascunhado para você revisar.",
    fields: [
      {
        key: "msg_abertura",
        label: "Mensagem de abertura exata",
        req: true,
        type: "textarea",
        placeholder: "Ex:\nOlá! Sou a Carolina, assistente virtual da SaúdeMax 😊\n\nPosso te ajudar a encontrar a melhor opção para você!",
        hint: "No WhatsApp, use linhas em branco para separar blocos — cada bloco vira uma mensagem separada.",
      },
      {
        key: "fluxo_principal",
        label: "Roteiro de conversa (rascunho automático — edite se quiser)",
        req: true,
        type: "auto-draft",
        hint: "Geramos este rascunho a partir da missão, canal e descrição do negócio que você já preencheu. Ajuste o texto livremente.",
      },
      {
        key: "notas_adicionais",
        label: "Algo mais que a Eva precise saber?",
        req: false,
        type: "textarea",
        placeholder: "Opcional. Qualquer regra ou contexto extra que não se encaixou nas perguntas anteriores.\n\nEx: Mencionar a promoção de julho só se o cliente perguntar.",
      },
    ],
  },
];
