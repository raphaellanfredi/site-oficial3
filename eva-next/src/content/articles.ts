// Articles of /conteudo. Each one answers a search the segment's buyer makes
// before knowing the Eva, and leads to the segment page. Claims about the
// product map to /produtos; numbers in examples are marked as examples.
//
// Text supports **bold**. Blocks render in order; every h2 becomes an entry
// of the article's table of contents.

import type { SegmentKey } from "@/components/eden/pages/segments";

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "callout"; text: string };

export type Article = {
  slug: string;
  segment: SegmentKey;
  /** Headline on the page (H1). */
  title: string;
  /** Title tag and share title, up to about 60 characters. */
  seoTitle: string;
  description: string;
  lead: string;
  published: string;
  blocks: Block[];
  faq: { q: string; a: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "como-reduzir-faltas-de-pacientes",
    segment: "clinicas",
    title: "Como reduzir faltas de pacientes na clínica: 7 práticas que funcionam",
    seoTitle: "Como reduzir faltas de pacientes: 7 práticas · Eva",
    description:
      "Por que o paciente falta, o que fazer antes de cada consulta e quando enviar cada mensagem. Um guia prático para a agenda da clínica parar de esvaziar.",
    lead: "Toda falta é um horário que não volta. Quase sempre ela não acontece por descaso, mas por um detalhe que a clínica pode resolver antes.",
    published: "2026-10-07",
    blocks: [
      { type: "h2", text: "Por que o paciente falta" },
      {
        type: "p",
        text: "Antes de buscar uma solução, vale entender as causas. Na maior parte das clínicas, as faltas se repetem pelos mesmos motivos:",
      },
      {
        type: "list",
        items: [
          "**Esquecimento.** A consulta foi marcada há semanas e ninguém lembrou o paciente.",
          "**Distância entre marcar e consultar.** Quanto mais longe a data, maior a chance de o plano mudar.",
          "**Remarcar dá trabalho.** Se para desmarcar é preciso ligar no horário comercial, o paciente simplesmente não vem.",
          "**Falta de orientação.** O paciente chega sem o preparo do exame e precisa voltar outro dia.",
          "**Marcou em mais de um lugar.** Quem procurou três clínicas às vezes marca em duas e vai na que lembrar primeiro.",
        ],
      },
      { type: "h2", text: "7 práticas para reduzir as faltas" },
      {
        type: "steps",
        items: [
          {
            title: "Confirme na véspera e no dia",
            text: "Uma mensagem curta na véspera, pedindo que o paciente confirme, e um lembrete algumas horas antes. A confirmação transforma um compromisso esquecido em uma decisão tomada.",
          },
          {
            title: "Deixe remarcar na própria conversa",
            text: "Na mesma mensagem de confirmação, ofereça a opção de remarcar. Quem consegue trocar o horário em dois toques avisa. Quem não consegue, some.",
          },
          {
            title: "Ofereça primeiro os horários mais próximos",
            text: "Quanto menor a distância entre marcar e consultar, menor a chance de falta. Mostre primeiro os horários desta semana.",
          },
          {
            title: "Responda rápido no primeiro contato",
            text: "O paciente que espera resposta marca em outro lugar, e às vezes mantém as duas consultas. Responder na hora resolve as duas coisas.",
          },
          {
            title: "Envie as orientações de preparo com antecedência",
            text: "Jejum, documentos, exames anteriores: tudo o que o paciente precisa saber deve chegar junto com a confirmação, não na recepção.",
          },
          {
            title: "Mantenha uma lista de espera",
            text: "Quando alguém desmarca, ofereça o horário para quem pediu encaixe. A falta vira um atendimento.",
          },
          {
            title: "Meça a sua taxa de faltas",
            text: "Faltas divididas pelas consultas agendadas, vezes 100. Acompanhe por profissional, por dia da semana e por canal de origem. O que não é medido não melhora.",
          },
        ],
      },
      { type: "h2", text: "Quando enviar cada mensagem" },
      {
        type: "table",
        head: ["Momento", "Mensagem", "Objetivo"],
        rows: [
          ["Ao marcar", "Data, horário, endereço e preparo", "Começar sem dúvida"],
          ["Na véspera", "Lembrete pedindo confirmação, com opção de remarcar", "Transformar lembrança em decisão"],
          ["No dia", "Lembrete curto, algumas horas antes", "Evitar o esquecimento de última hora"],
          ["Depois de uma falta", "Convite para remarcar", "Recuperar o paciente"],
        ],
      },
      { type: "h2", text: "Como a Eva faz isso pela sua clínica" },
      {
        type: "p",
        text: "A Eva IA marca a consulta direto na agenda, integrada ao Google Agenda, e o **Anti No Show** confirma automaticamente antes do horário. Quem não pode vir remarca na própria conversa, e o follow-up chama de volta quem faltou. A recepção só confere.",
      },
      {
        type: "callout",
        text: "A Eva fica no ar em até 24 horas depois do pagamento e do formulário de onboarding. Se passar disso, a implantação é por nossa conta.",
      },
    ],
    faq: [
      {
        q: "Qual é uma taxa de faltas normal?",
        a: "Varia muito por especialidade, região e público. Mais útil do que comparar com outra clínica é medir a sua taxa todo mês e acompanhar se ela cai depois das mudanças.",
      },
      {
        q: "A mensagem de confirmação incomoda o paciente?",
        a: "Não, quando é curta, útil e chega na hora certa. O paciente costuma agradecer o lembrete, principalmente se puder confirmar ou remarcar respondendo à própria mensagem.",
      },
      {
        q: "Com quanto tempo de antecedência devo confirmar?",
        a: "O mais comum é confirmar na véspera e enviar um lembrete curto no dia. Para procedimentos com preparo, as orientações devem chegar alguns dias antes.",
      },
    ],
  },

  {
    slug: "atendimento-de-clinica-no-whatsapp-fora-do-horario",
    segment: "clinicas",
    title: "Atendimento de clínica no WhatsApp fora do horário: como não perder pacientes",
    seoTitle: "WhatsApp da clínica fora do horário: como atender · Eva",
    description:
      "O paciente escreve à noite, no almoço e no fim de semana. Compare as três formas de atender fora do horário e veja o que a IA pode e não pode responder.",
    lead: "O paciente não escolhe o horário da clínica para escrever. Escreve quando tem tempo: à noite, no almoço, no domingo. É aí que a agenda se decide.",
    published: "2026-10-07",
    blocks: [
      { type: "h2", text: "Quando o paciente escreve" },
      {
        type: "p",
        text: "Durante o expediente, o paciente está trabalhando. É depois dele, ou nos intervalos, que ele pesquisa, compara e manda mensagem. Muitas vezes para mais de uma clínica ao mesmo tempo.",
      },
      {
        type: "p",
        text: "Quando ninguém responde, a conversa esfria. No dia seguinte, a recepção responde a uma pessoa que **já marcou com quem respondeu primeiro**.",
      },
      { type: "h2", text: "As três formas de atender fora do horário" },
      {
        type: "table",
        head: ["Opção", "Como funciona", "Limite"],
        rows: [
          ["Mensagem automática de ausência", "Avisa que a clínica responde no dia seguinte", "Informa, mas não marca a consulta"],
          ["Plantão da equipe", "Alguém responde do celular à noite e no fim de semana", "Custa caro, cansa a equipe e não escala"],
          ["Agente de IA", "Responde, tira dúvidas e marca na agenda, a qualquer hora", "Precisa ser configurado com o que a clínica aprovou"],
        ],
      },
      { type: "h2", text: "O que a IA pode responder, e o que não pode" },
      {
        type: "p",
        text: "Um agente de IA bem configurado resolve a maior parte do que chega fora do horário, porque a maioria das mensagens é operacional:",
      },
      {
        type: "list",
        items: [
          "Horários disponíveis e **agendamento direto na agenda**",
          "Endereço, estacionamento, formas de pagamento e convênios aceitos",
          "Valores e preparo de exames, nas respostas que a clínica aprovou",
          "Remarcação e cancelamento",
          "Áudios: a Eva transcreve e entende a mensagem falada",
        ],
      },
      {
        type: "p",
        text: "O que **não** é papel da IA: diagnóstico, orientação clínica e qualquer avaliação de sintoma. Nesses casos, a IA é configurada para não responder e passar a conversa para a equipe. Em uma urgência, ela orienta o paciente a procurar atendimento de emergência.",
      },
      { type: "h2", text: "Checklist para configurar o atendimento fora do horário" },
      {
        type: "steps",
        items: [
          { title: "Liste as 20 perguntas mais comuns", text: "Elas costumam cobrir a grande maioria das mensagens. Cada uma ganha uma resposta aprovada." },
          { title: "Defina o que vai para a equipe", text: "Dúvidas clínicas, reclamações e casos especiais devem chegar para uma pessoa, com o histórico completo." },
          { title: "Conecte a agenda", text: "Sem a agenda conectada, a IA só promete. Com ela, marca de verdade." },
          { title: "Ative a confirmação", text: "Quem marcou às 23h precisa de um lembrete na véspera, como qualquer paciente." },
          { title: "Revise as conversas na primeira semana", text: "É aí que aparecem as perguntas que ninguém previu." },
        ],
      },
      { type: "h2", text: "Como a Eva faz isso pela sua clínica" },
      {
        type: "p",
        text: "A Eva IA atende no WhatsApp, no Instagram, no telefone e no site, 24 horas por dia, com as respostas que a clínica aprovou. Ela marca a consulta na agenda nativa, confirma no dia com o Anti No Show e, quando o assunto pede um profissional, **passa a conversa para a recepção**. Quando a equipe entra, a IA sai de cena.",
      },
    ],
    faq: [
      {
        q: "A IA responde a casos de urgência?",
        a: "Não deve tratar urgências. Ela é configurada para orientar o paciente a procurar atendimento de emergência e para avisar a equipe.",
      },
      {
        q: "O paciente sabe que está falando com uma IA?",
        a: "É uma escolha da clínica. A recomendação é ser transparente: o paciente aceita bem quando a resposta é rápida e correta, e sabe que pode pedir para falar com uma pessoa.",
      },
      {
        q: "Quem da equipe vê as conversas?",
        a: "Quem a clínica definir. Cada pessoa tem o papel de acesso que precisa, e os logs de auditoria registram o que foi feito.",
      },
    ],
  },

  {
    slug: "triagem-de-clientes-no-escritorio",
    segment: "escritorios",
    title: "Triagem de clientes no escritório: como organizar o primeiro atendimento",
    seoTitle: "Triagem de clientes no escritório: guia prático · Eva",
    description:
      "O que perguntar no primeiro contato, um roteiro por área e como distribuir cada caso para a pessoa certa. Para advocacia, contabilidade e consultoria.",
    lead: "O primeiro atendimento decide se o cliente fica. E decide também quanto tempo o especialista vai perder antes de entender o caso.",
    published: "2026-10-07",
    blocks: [
      { type: "h2", text: "Por que a triagem importa" },
      {
        type: "p",
        text: "Sem triagem, todo contato novo chega igual: uma mensagem solta, às vezes um áudio de cinco minutos. Alguém precisa ouvir, entender, perguntar o que faltou e decidir para quem mandar. Quando esse alguém é o especialista, **o tempo mais caro do escritório vira recepção**.",
      },
      { type: "h2", text: "O que perguntar no primeiro contato" },
      {
        type: "list",
        items: [
          "**Quem é:** nome, e se é pessoa física ou empresa",
          "**Qual é o assunto,** nas palavras do próprio cliente",
          "**Se há prazo:** audiência, vencimento, notificação recebida",
          "**O que já existe:** processo em andamento, contrato, documentos",
          "**Como conheceu o escritório**",
          "**Melhor horário para uma conversa**",
        ],
      },
      { type: "h2", text: "Um roteiro por área" },
      {
        type: "table",
        head: ["Área", "Perguntas que ajudam a direcionar"],
        rows: [
          ["Trabalhista", "É o empregado ou a empresa? O vínculo ainda existe? Há prazo correndo?"],
          ["Família", "Há filhos menores? Existe acordo entre as partes? Já há processo?"],
          ["Contábil e fiscal", "Qual é o regime tributário? É abertura, rotina ou regularização? Há notificação?"],
          ["Empresarial", "Qual é o porte da empresa? É contrato, sociedade ou conflito? Qual é o prazo?"],
        ],
      },
      { type: "h2", text: "Erros comuns na triagem" },
      {
        type: "list",
        items: [
          "Perguntar tudo de uma vez, num formulário longo que o cliente abandona",
          "Não registrar as respostas, e o especialista pergunta tudo de novo",
          "Distribuir por ordem de chegada, e não por área",
          "Não ter prazo de resposta definido, e o caso urgente espera na fila",
        ],
      },
      { type: "h2", text: "Como distribuir cada caso" },
      {
        type: "p",
        text: "Depois da triagem, cada conversa deve ir para a área e a pessoa certas, com o resumo e as respostas já registrados na ficha do cliente. Um **prazo de resposta (SLA)** definido para cada tipo de caso evita que o urgente espere atrás do simples.",
      },
      { type: "h2", text: "Como a Eva faz isso pelo seu escritório" },
      {
        type: "p",
        text: "A Eva IA faz as perguntas de triagem que o escritório definiu, transcreve os áudios, sugere as etiquetas e registra tudo na ficha. O **roteamento por habilidade** entrega cada conversa a quem entende do assunto, e o SLA avisa antes de o prazo de resposta estourar. Se o cliente quiser, ela já marca a reunião, com link, integrada ao Google Agenda.",
      },
      {
        type: "callout",
        text: "A Eva IA não dá parecer jurídico ou contábil. Ela organiza o primeiro atendimento, e a análise fica com a sua equipe.",
      },
    ],
    faq: [
      {
        q: "A triagem pode ser feita por IA?",
        a: "Sim, a parte de perguntar, registrar e encaminhar. A análise do caso continua com o profissional, que recebe tudo organizado.",
      },
      {
        q: "E quando o cliente manda um áudio longo?",
        a: "A Eva transcreve o áudio em segundos, entende o pedido e faz as perguntas que faltaram. A equipe lê em vez de ouvir.",
      },
      {
        q: "As perguntas são as mesmas para todo escritório?",
        a: "Não. A Eva IA monta a arquitetura com as áreas, as perguntas e as respostas do seu escritório, e especialistas validam antes de entrar no ar.",
      },
    ],
  },

  {
    slug: "atendimento-do-escritorio-no-whatsapp-o-que-automatizar",
    segment: "escritorios",
    title: "Atendimento do escritório no WhatsApp: o que automatizar e o que deixar com a equipe",
    seoTitle: "WhatsApp do escritório: o que automatizar · Eva",
    description:
      "Status, documentos, horários e agenda podem ser automáticos. Parecer, estratégia e notícia difícil ficam com pessoas. Veja como dividir e por onde começar.",
    lead: "Automatizar não é afastar o cliente. É tirar da frente da equipe o que se repete, para sobrar tempo para o que exige alguém que sabe.",
    published: "2026-10-07",
    blocks: [
      { type: "h2", text: "O que se repete todo dia" },
      {
        type: "p",
        text: "Em quase todo escritório, boa parte das mensagens tem a mesma cara:",
      },
      {
        type: "list",
        items: [
          "Recebeu meu documento?",
          "Como está o meu caso?",
          "Qual é o horário de vocês? Onde fica o escritório?",
          "Quanto custa uma consulta?",
          "Podemos marcar uma reunião?",
        ],
      },
      {
        type: "p",
        text: "Cada uma leva poucos minutos para responder. Somadas, levam horas da semana, e quase sempre de quem deveria estar no trabalho técnico.",
      },
      { type: "h2", text: "O que automatizar e o que deixar com pessoas" },
      {
        type: "table",
        head: ["Pode ser automático", "Fica com a equipe"],
        rows: [
          ["Horário, endereço e canais de contato", "Parecer jurídico ou contábil"],
          ["Confirmação de documento recebido", "Estratégia do caso"],
          ["Status consultado no seu sistema", "Negociação de honorários fora da tabela"],
          ["Agendamento de reunião", "Notícia difícil ao cliente"],
          ["Triagem e encaminhamento", "Reclamação"],
        ],
      },
      { type: "h2", text: "Os cuidados que fazem a diferença" },
      {
        type: "steps",
        items: [
          { title: "Respostas aprovadas", text: "O que não pode sair errado, como valores e prazos de resposta, tem texto aprovado pelo escritório. A IA não improvisa." },
          { title: "A IA admite o que não sabe", text: "Quando a base não cobre o assunto, ela diz que vai chamar alguém, em vez de inventar." },
          { title: "Histórico completo", text: "Quando a equipe entra na conversa, tudo o que foi dito está ali. O cliente não repete nada." },
          { title: "Acesso controlado", text: "Cada pessoa vê o que precisa, e os logs de auditoria registram cada ação." },
          { title: "Regras da sua profissão", text: "Revise com a sua equipe as regras de publicidade e comunicação da sua área, como as da OAB, antes de definir as mensagens." },
        ],
      },
      { type: "h2", text: "Por onde começar" },
      {
        type: "p",
        text: "Separe as conversas do último mês e anote as perguntas que mais se repetem. Escreva uma resposta para cada uma. Defina o que deve ir para a equipe e para quem. Essa lista é o esqueleto do atendimento automático.",
      },
      { type: "h2", text: "Como a Eva faz isso pelo seu escritório" },
      {
        type: "p",
        text: "A Eva IA atende no WhatsApp, no Instagram, no e-mail e no telefone com as respostas que o escritório aprovou. Com as **funções personalizadas**, consulta o seu sistema no meio da conversa para informar status e documentos. Quando alguém da equipe entra, a IA sai de cena. Quando sai, ela volta.",
      },
    ],
    faq: [
      {
        q: "O cliente vai sentir o atendimento mais frio?",
        a: "Em geral, o contrário. Ele recebe resposta na hora, a qualquer hora, e fala com uma pessoa quando o assunto pede. O que esfria o atendimento é a demora.",
      },
      {
        q: "A IA consegue informar o andamento do caso?",
        a: "Sim, quando o seu sistema oferece integração. As funções personalizadas deixam a IA consultar o sistema durante a conversa e responder com a informação real.",
      },
      {
        q: "Em quanto tempo fica pronto?",
        a: "Em até 24 horas depois do pagamento e do formulário de onboarding. Se passar disso, a implantação é por nossa conta.",
      },
    ],
  },

  {
    slug: "chatbot-ou-agente-de-ia",
    segment: "empresas",
    title: "Chatbot ou agente de IA: qual a diferença e qual escolher",
    seoTitle: "Chatbot ou agente de IA: qual a diferença? · Eva",
    description:
      "O chatbot de menu segue um roteiro. O agente de IA entende, consulta sistemas e resolve. Veja a diferença na prática e o que perguntar antes de contratar.",
    lead: "Os dois respondem no WhatsApp. Só um deles entende o que o cliente quis dizer.",
    published: "2026-10-07",
    blocks: [
      { type: "h2", text: "O chatbot de menu" },
      {
        type: "p",
        text: "É o atendimento do \"digite 1 para vendas, 2 para suporte\". Ele segue uma árvore de opções definida com antecedência. Funciona bem enquanto o cliente faz exatamente o que o menu espera.",
      },
      {
        type: "p",
        text: "O problema começa quando o cliente escreve do jeito dele: manda um áudio, faz duas perguntas na mesma mensagem ou pergunta algo que não está no menu. O chatbot repete as opções, e o cliente desiste.",
      },
      { type: "h2", text: "O agente de IA" },
      {
        type: "p",
        text: "Um agente de IA entende texto livre e áudio, lembra o que foi dito na conversa e responde com o conhecimento do seu negócio. Os melhores vão além de responder: **consultam o seu sistema e executam ações**, como verificar um pedido, marcar um horário ou enviar um orçamento.",
      },
      { type: "h2", text: "A diferença na prática" },
      {
        type: "table",
        head: ["", "Chatbot de menu", "Agente de IA"],
        rows: [
          ["Como o cliente escreve", "Escolhe uma opção numerada", "Escreve ou fala como quiser"],
          ["Áudio", "Não entende", "Transcreve e entende"],
          ["Pergunta fora do roteiro", "Repete o menu", "Responde, ou chama uma pessoa"],
          ["Consulta o seu sistema", "Raramente", "Sim, durante a conversa"],
          ["Agenda e orçamento", "Encaminha para alguém", "Faz na hora"],
          ["Manutenção", "Cada novo caso é um novo galho", "Aprende com a sua base de conhecimento"],
        ],
      },
      { type: "h2", text: "Quando um chatbot basta" },
      {
        type: "p",
        text: "Se o volume é pequeno, as perguntas são sempre as mesmas e quase ninguém escreve fora do horário, um menu simples pode resolver. Quando o cliente quer conversar, comprar, agendar e tirar dúvida na mesma mensagem, o menu vira obstáculo.",
      },
      { type: "h2", text: "O que perguntar antes de contratar" },
      {
        type: "list",
        items: [
          "Entende áudio?",
          "Consulta o meu sistema durante a conversa?",
          "Passa a conversa para uma pessoa da equipe, com o histórico?",
          "Admite quando não sabe, em vez de inventar?",
          "Quem monta e quem valida antes de entrar no ar?",
          "Em quanto tempo fica pronto? Tem fidelidade?",
        ],
      },
      { type: "h2", text: "Como a Eva responde a essas perguntas" },
      {
        type: "p",
        text: "A Eva IA entende texto e áudio, consulta o seu sistema com **funções personalizadas**, marca na agenda e passa para a equipe quando o assunto pede uma pessoa. Quando a base não cobre o assunto, ela admite que não sabe. A Eva IA monta a arquitetura, especialistas validam, e ela entra no ar em até 24 horas, sem fidelidade.",
      },
    ],
    faq: [
      {
        q: "Agente de IA é o mesmo que ChatGPT no WhatsApp?",
        a: "Não. Um agente de atendimento usa inteligência artificial, mas é treinado com o conhecimento do seu negócio, segue as respostas aprovadas, consulta os seus sistemas e sabe quando chamar a equipe.",
      },
      {
        q: "O agente de IA erra?",
        a: "Pode errar, como qualquer atendente. Por isso existem respostas aprovadas para o que não pode sair errado, testes antes de entrar no ar e a regra de admitir quando não sabe.",
      },
      {
        q: "Preciso abandonar o meu número de WhatsApp?",
        a: "Não. A Eva atende no número que você já usa, pela API oficial ou não oficial, no mesmo painel.",
      },
    ],
  },

  {
    slug: "atendente-ou-agente-de-ia-como-fazer-a-conta",
    segment: "empresas",
    title: "Atendente ou agente de IA: como fazer a conta",
    seoTitle: "Atendente ou agente de IA: como fazer a conta · Eva",
    description:
      "Quanto custa cada hora de atendimento coberta, quanto vale o cliente que escreve fora do horário e como dividir o trabalho entre a equipe e a IA.",
    lead: "A pergunta certa não é atendente ou IA. É quanto custa cada hora sem resposta, e quem deve cuidar de cada conversa.",
    published: "2026-10-07",
    blocks: [
      { type: "h2", text: "Quantas horas a sua equipe cobre" },
      {
        type: "p",
        text: "Uma semana tem 168 horas. Uma jornada padrão de 44 horas semanais cobre cerca de **26% delas**. Nos outros 74%, à noite, de madrugada e no fim de semana, o cliente que escreve espera.",
      },
      {
        type: "p",
        text: "Para cobrir mais horas com pessoas, é preciso mais turnos, mais gente e mais gestão. Para cada atendente, entram na conta salário, encargos, benefícios, férias, treinamento e o tempo até a pessoa conhecer o negócio.",
      },
      { type: "h2", text: "Quanto custa o cliente sem resposta" },
      {
        type: "p",
        text: "A conta que quase ninguém faz é a do lado da receita. Ela tem três números que você já tem:",
      },
      {
        type: "steps",
        items: [
          { title: "Contatos fora do horário", text: "Quantas mensagens chegam por semana fora do expediente." },
          { title: "Taxa de conversão", text: "De cada contato respondido, quantos viram cliente." },
          { title: "Ticket médio", text: "Quanto vale, em média, um cliente novo." },
        ],
      },
      {
        type: "callout",
        text: "Exemplo: 10 contatos por semana fora do horário, 1 em cada 5 vira cliente, ticket médio de R$ 1.500. São 2 clientes e R$ 3.000 por semana que dependem de uma resposta rápida. Troque pelos seus números.",
      },
      { type: "h2", text: "Quanto custa a IA" },
      {
        type: "p",
        text: "Um agente de IA tem uma mensalidade e, em geral, uma implantação. Na Eva, os planos começam em **R$ 998 por mês**, sem fidelidade, com implantação parcelável em até 12 vezes. O agente atende 24 horas, todos os dias, em vários canais ao mesmo tempo.",
      },
      { type: "h2", text: "Não é um ou outro" },
      {
        type: "table",
        head: ["Fica com a IA", "Fica com a equipe"],
        rows: [
          ["Primeira resposta, a qualquer hora", "Negociação e fechamento"],
          ["Perguntas que se repetem", "Casos especiais e reclamações"],
          ["Agenda, orçamento e status de pedido", "Relacionamento com o cliente importante"],
          ["Follow-up de quem sumiu", "Decisões que exigem alguém que sabe"],
        ],
      },
      {
        type: "p",
        text: "O melhor resultado aparece quando a IA cuida do volume e do horário, e a equipe recebe a conversa pronta para fechar.",
      },
      { type: "h2", text: "Como a Eva entra nessa conta" },
      {
        type: "p",
        text: "A Eva IA responde na hora, em oito canais, consulta os seus sistemas e deixa cada conversa classificada no funil. Quando o assunto pede uma pessoa, chama a sua equipe. E no painel você pergunta à Eva IA como foi a semana, e ela monta o relatório com os seus dados.",
      },
    ],
    faq: [
      {
        q: "A IA substitui a minha equipe?",
        a: "Não é esse o objetivo. Ela tira da equipe o que se repete e o que chega fora do horário, para que as pessoas cuidem do que exige gente.",
      },
      {
        q: "Em quanto tempo vejo resultado?",
        a: "A Eva fica no ar em até 24 horas depois do pagamento e do onboarding. A partir daí, acompanhe por 30 dias o tempo de primeira resposta, os contatos fora do horário respondidos e quantos viraram clientes.",
      },
      {
        q: "Tem fidelidade?",
        a: "Não. A mensalidade não tem fidelidade obrigatória.",
      },
    ],
  },
];

export const articleBySlug = (slug: string) => ARTICLES.find((a) => a.slug === slug);

/** What a link to an article needs; keeps full texts out of other pages' bundles. */
export type ArticleCard = { slug: string; segment: SegmentKey; title: string; description: string; minutes: number };

export const articleCard = (a: Article): ArticleCard => ({
  slug: a.slug,
  segment: a.segment,
  title: a.title,
  description: a.description,
  minutes: readingMinutes(a),
});

/** Reading time at 200 words per minute, at least one minute. */
export function readingMinutes(a: Article) {
  const text = [a.lead, ...a.blocks.flatMap((b) =>
    b.type === "list" ? b.items
    : b.type === "steps" ? b.items.flatMap((i) => [i.title, i.text])
    : b.type === "table" ? [...b.head, ...b.rows.flat()]
    : [b.text]),
    ...a.faq.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

export const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
