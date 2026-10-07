// Articles of /conteudo. Each one targets one main search of the segment's
// buyer (in the title, the lead and the first heading) and its related
// searches (in the headings and the FAQ). Structure for search: a short
// definition first, then steps, tables, ready-to-copy message templates and
// an FAQ in the "people also ask" format, with links between articles.
//
// Claims about the product map to /produtos and /planos; numbers in examples
// are marked as examples. Text supports **bold** and [links](/path/).

import type { SegmentKey } from "@/components/eden/pages/segments";

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "callout"; text: string }
  /** A message the reader can copy. Line breaks are kept. */
  | { type: "template"; title: string; text: string };

export type Article = {
  slug: string;
  segment: SegmentKey;
  /** The search this article is written to rank for. */
  keyword: string;
  /** Headline on the page (H1). */
  title: string;
  /** Title tag and share title, up to about 60 characters. */
  seoTitle: string;
  description: string;
  lead: string;
  published: string;
  updated: string;
  blocks: Block[];
  faq: { q: string; a: string }[];
};

const LINK = {
  faltas: "/conteudo/como-reduzir-faltas-de-pacientes/",
  foraDoHorario: "/conteudo/atendimento-de-clinica-no-whatsapp-fora-do-horario/",
  triagem: "/conteudo/triagem-de-clientes-no-escritorio/",
  automatizar: "/conteudo/atendimento-do-escritorio-no-whatsapp-o-que-automatizar/",
  chatbot: "/conteudo/chatbot-ou-agente-de-ia/",
  custo: "/conteudo/atendente-ou-agente-de-ia-como-fazer-a-conta/",
};

const READY_24H =
  "A Eva fica no ar em até 24 horas depois do pagamento e do formulário de onboarding. Se passar disso, a implantação é por nossa conta.";

export const ARTICLES: Article[] = [
  // ───────────────────────────────────────────────────────────── Clínicas
  {
    slug: "como-reduzir-faltas-de-pacientes",
    segment: "clinicas",
    keyword: "como reduzir faltas de pacientes",
    title: "Como reduzir faltas de pacientes na clínica: guia completo com modelos de mensagem",
    seoTitle: "Como reduzir faltas de pacientes: guia e modelos · Eva",
    description:
      "Como calcular a taxa de faltas, por que o paciente falta, 9 práticas que funcionam e modelos prontos de mensagem de confirmação de consulta pelo WhatsApp.",
    lead: "Toda falta é um horário que não volta. Quase sempre ela não acontece por descaso, mas por um detalhe que a clínica pode resolver antes. Este guia mostra como medir, onde agir e o que escrever.",
    published: "2026-10-07",
    updated: "2026-10-07",
    blocks: [
      { type: "h2", text: "O que é a taxa de faltas e como calcular" },
      {
        type: "p",
        text: "**Taxa de faltas**, também chamada de **no-show** ou **absenteísmo**, é a porcentagem de consultas agendadas em que o paciente não comparece e não avisa. A conta é simples: número de faltas dividido pelo número de consultas agendadas, vezes 100.",
      },
      {
        type: "callout",
        text: "Exemplo: em um mês com 400 consultas agendadas e 48 faltas, a taxa é 48 ÷ 400 × 100 = **12%**.",
      },
      {
        type: "p",
        text: "O número total diz pouco. O que mostra onde agir é a taxa separada por **profissional, especialidade, dia da semana, horário, canal de origem** e **tempo entre marcar e consultar**. É comum descobrir que as faltas se concentram em um tipo de consulta ou em agendamentos feitos com muita antecedência.",
      },
      { type: "h2", text: "Quanto custa uma falta para a clínica" },
      {
        type: "p",
        text: "Um horário vago tem o mesmo custo de um horário ocupado: a estrutura, a equipe e o profissional estão lá. A diferença é que ele não gera receita, e esse tempo não volta. Além disso, o paciente que falta atrasa o próprio tratamento e o retorno.",
      },
      {
        type: "p",
        text: "Para saber o tamanho do problema na sua clínica, multiplique as faltas do mês pelo valor médio da consulta.",
      },
      {
        type: "callout",
        text: "Exemplo: 48 faltas × R$ 250 de valor médio = **R$ 12.000 por mês** que deixaram de entrar. Troque pelos números da sua clínica.",
      },
      {
        type: "p",
        text: "E essa conta ainda não inclui o encaixe que não aconteceu porque o horário parecia ocupado até o último minuto.",
      },
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
          "**Falta de orientação.** O paciente chega sem o preparo do exame e precisa voltar outro dia, ou nem vem por insegurança.",
          "**Marcou em mais de um lugar.** Quem procurou três clínicas às vezes marca em duas e vai na que lembrar primeiro.",
          "**Horário escolhido por falta de opção.** O paciente aceitou um horário ruim porque não lhe ofereceram outro.",
        ],
      },
      { type: "h2", text: "9 práticas para reduzir as faltas de pacientes" },
      {
        type: "steps",
        items: [
          {
            title: "Confirme tudo no momento do agendamento",
            text: "Data, horário, profissional, endereço e preparo, por escrito, na mesma conversa. Uma mensagem clara no início evita metade das dúvidas que viram falta.",
          },
          {
            title: "Peça confirmação na véspera",
            text: "Uma mensagem curta, com uma pergunta direta: o paciente confirma ou prefere remarcar? A confirmação transforma um compromisso esquecido em uma decisão tomada.",
          },
          {
            title: "Envie um lembrete no dia",
            text: "Algumas horas antes, uma linha basta. É o lembrete que salva quem confirmou na véspera e esqueceu de manhã.",
          },
          {
            title: "Deixe remarcar na própria conversa",
            text: "Quem consegue trocar o horário em dois toques avisa. Quem precisa ligar no horário comercial, some. Remarcar fácil transforma falta em reagendamento.",
          },
          {
            title: "Ofereça primeiro os horários mais próximos",
            text: "Quanto menor a distância entre marcar e consultar, menor a chance de falta. Mostre primeiro os horários desta semana.",
          },
          {
            title: "Responda rápido no primeiro contato",
            text: "O paciente que espera resposta marca em outro lugar, e às vezes mantém as duas consultas. Responder na hora resolve as duas coisas. Veja [como atender fora do horário](" + LINK.foraDoHorario + ").",
          },
          {
            title: "Mantenha uma lista de espera",
            text: "Quando alguém desmarca, ofereça o horário para quem pediu encaixe. A falta vira um atendimento.",
          },
          {
            title: "Recupere quem faltou no mesmo dia",
            text: "Uma mensagem gentil oferecendo um novo horário traz de volta boa parte de quem faltou por imprevisto. Sem cobrança no tom.",
          },
          {
            title: "Deixe a regra clara desde o início",
            text: "Se a clínica tem uma regra para faltas, como limite de remarcações ou cobrança, ela precisa estar escrita e ser informada no agendamento. Antes de adotar cobrança, consulte as normas do seu conselho profissional e um advogado.",
          },
        ],
      },
      { type: "h2", text: "Modelos de mensagem de confirmação de consulta" },
      {
        type: "p",
        text: "Adapte ao tom da sua clínica. As mensagens que funcionam melhor são curtas, têm todas as informações e terminam com uma ação clara.",
      },
      {
        type: "template",
        title: "Ao marcar a consulta",
        text: "Olá, {nome}! Sua consulta com {profissional} está marcada para {dia}, às {hora}.\n\nEndereço: {endereço}\nPreparo: {orientações}\n\nSe precisar remarcar, é só responder esta mensagem.",
      },
      {
        type: "template",
        title: "Confirmação na véspera",
        text: "Oi, {nome}! Passando para lembrar da sua consulta amanhã, {dia}, às {hora}, com {profissional}.\n\nVocê confirma a presença? Se preferir, posso ver outro horário para você.",
      },
      {
        type: "template",
        title: "Lembrete no dia",
        text: "Bom dia, {nome}! Te esperamos hoje às {hora}. Se puder, chegue 10 minutos antes. Até já!",
      },
      {
        type: "template",
        title: "Depois de uma falta",
        text: "Oi, {nome}, sentimos sua falta hoje. Imprevistos acontecem! Quer que eu veja um novo horário para você ainda esta semana?",
      },
      {
        type: "template",
        title: "Horário liberado para a lista de espera",
        text: "Oi, {nome}! Abriu um horário amanhã às {hora} com {profissional}. Quer que eu reserve para você?",
      },
      { type: "h2", text: "Quando enviar cada mensagem" },
      {
        type: "table",
        head: ["Momento", "Mensagem", "Objetivo"],
        rows: [
          ["Ao marcar", "Data, horário, endereço e preparo", "Começar sem dúvida"],
          ["Alguns dias antes", "Orientações de preparo, se houver", "Evitar a consulta perdida por falta de preparo"],
          ["Na véspera", "Pedido de confirmação, com opção de remarcar", "Transformar lembrança em decisão"],
          ["No dia", "Lembrete curto, algumas horas antes", "Evitar o esquecimento de última hora"],
          ["Quando alguém desmarca", "Oferta do horário para a lista de espera", "Ocupar o horário vago"],
          ["Depois de uma falta", "Convite para remarcar", "Recuperar o paciente"],
        ],
      },
      { type: "h2", text: "Erros que aumentam as faltas" },
      {
        type: "list",
        items: [
          "Confirmar só por ligação, no horário em que o paciente está trabalhando",
          "Mandar mensagens longas, sem uma pergunta clara no final",
          "Não oferecer a opção de remarcar na própria mensagem",
          "Abrir a agenda para datas muito distantes sem nenhum lembrete intermediário",
          "Receber a confirmação e não atualizar a agenda, perdendo o encaixe",
          "Não medir a taxa de faltas e decidir no achismo",
        ],
      },
      { type: "h2", text: "Como acompanhar os resultados" },
      {
        type: "p",
        text: "Meça por 30 dias antes de mudar o processo e por 30 dias depois. Estes são os números que mostram se está funcionando:",
      },
      {
        type: "list",
        items: [
          "**Taxa de faltas**, geral e por profissional",
          "**Taxa de confirmação**: quantos pacientes responderam à mensagem da véspera",
          "**Remarcações**: faltas que viraram novo agendamento",
          "**Horários recuperados** pela lista de espera",
          "**Tempo da primeira resposta** a quem procura a clínica",
        ],
      },
      { type: "h2", text: "Primeira consulta, retorno e procedimento: cada um falta de um jeito" },
      {
        type: "p",
        text: "Separar a taxa por tipo de atendimento costuma mostrar padrões diferentes, e cada um pede uma ação diferente:",
      },
      {
        type: "table",
        head: ["Tipo", "Por que falta", "O que ajuda"],
        rows: [
          ["Primeira consulta", "Marcou em mais de um lugar ou ainda está comparando", "Resposta rápida, confirmação na véspera e todas as informações no agendamento"],
          ["Retorno", "Melhorou e achou que não precisava voltar", "Lembrar por que o retorno importa, nas palavras do profissional"],
          ["Procedimento com preparo", "Insegurança ou dúvida sobre o preparo", "Orientações alguns dias antes e um canal fácil para tirar dúvidas"],
          ["Agendado com muita antecedência", "O plano mudou no caminho", "Lembrete intermediário e opção de remarcar sem burocracia"],
        ],
      },
      { type: "h2", text: "Como treinar a recepção para reduzir faltas" },
      {
        type: "steps",
        items: [
          { title: "Ofereça horários, não pergunte", text: "\"Tenho terça às 9h ou quarta às 14h\" funciona melhor que \"qual horário você prefere?\". Duas opções próximas aceleram a decisão." },
          { title: "Confirme os dados na hora", text: "Nome completo, telefone com WhatsApp e convênio. Sem isso, a confirmação não chega." },
          { title: "Explique a confirmação", text: "Avise que o paciente vai receber uma mensagem na véspera e que pode remarcar por ela." },
          { title: "Registre o motivo das faltas", text: "Quando o paciente remarca ou volta, anote por que faltou. Em poucas semanas aparecem os padrões." },
          { title: "Use a lista de espera de verdade", text: "Quem pede encaixe entra na lista com o horário que prefere. Horário liberado é horário oferecido." },
        ],
      },
      { type: "h2", text: "Checklist rápido" },
      {
        type: "list",
        items: [
          "A taxa de faltas é medida todo mês, por profissional e por tipo de consulta",
          "Todo agendamento recebe data, horário, endereço e preparo por escrito",
          "A confirmação sai na véspera, com opção de remarcar",
          "O lembrete sai no dia, algumas horas antes",
          "Quem desmarca libera o horário para a lista de espera",
          "Quem falta recebe um convite para remarcar no mesmo dia",
          "O paciente recebe resposta rápida no primeiro contato, inclusive fora do horário",
        ],
      },
      { type: "h2", text: "Como a Eva faz isso pela sua clínica" },
      {
        type: "p",
        text: "A Eva IA marca a consulta direto na agenda, integrada ao Google Agenda, e o **Anti No Show** confirma automaticamente antes do horário. Quem não pode vir remarca na própria conversa, e o follow-up chama de volta quem faltou. A recepção só confere. Veja tudo o que a [Eva faz para clínicas](/para-clinicas/).",
      },
      { type: "callout", text: READY_24H },
    ],
    faq: [
      {
        q: "Qual é uma taxa de faltas normal em clínicas?",
        a: "Varia muito por especialidade, região, público e tempo entre marcar e consultar. Mais útil do que comparar com outra clínica é medir a sua taxa todo mês e acompanhar se ela cai depois das mudanças.",
      },
      {
        q: "A mensagem de confirmação incomoda o paciente?",
        a: "Não, quando é curta, útil e chega na hora certa. O paciente costuma agradecer o lembrete, principalmente se puder confirmar ou remarcar respondendo à própria mensagem.",
      },
      {
        q: "Com quanto tempo de antecedência devo confirmar a consulta?",
        a: "O mais comum é pedir a confirmação na véspera e enviar um lembrete curto no dia. Para procedimentos com preparo, as orientações devem chegar alguns dias antes.",
      },
      {
        q: "É melhor confirmar por WhatsApp ou por ligação?",
        a: "Para a maioria dos pacientes, o WhatsApp é mais prático: ele responde quando pode e remarca na mesma conversa. A ligação fica para casos especiais, como pacientes que não usam o aplicativo.",
      },
      {
        q: "Posso cobrar pela falta do paciente?",
        a: "É uma decisão da clínica, que precisa estar escrita e ser informada no agendamento. Antes de adotar, consulte as normas do seu conselho profissional e um advogado. Na prática, confirmação e facilidade de remarcar costumam reduzir as faltas antes de qualquer cobrança.",
      },
      {
        q: "A confirmação automática funciona com a agenda que eu já uso?",
        a: "A agenda nativa da Eva é integrada ao Google Agenda. Se a clínica usa outro sistema e ele oferece integração, as funções personalizadas deixam a IA consultar esse sistema durante a conversa.",
      },
    ],
  },

  {
    slug: "atendimento-de-clinica-no-whatsapp-fora-do-horario",
    segment: "clinicas",
    keyword: "whatsapp para clínicas",
    title: "WhatsApp para clínicas: como atender pacientes fora do horário e marcar mais consultas",
    seoTitle: "WhatsApp para clínicas: atender fora do horário · Eva",
    description:
      "Quando o paciente escreve, quanto custa a mensagem sem resposta, as 4 formas de atender fora do horário, o que a IA pode responder e modelos de mensagem para clínicas.",
    lead: "O paciente não escolhe o horário da clínica para escrever. Escreve quando tem tempo: à noite, no almoço, no domingo. É aí que a agenda se decide, e é aí que a maioria das clínicas está fechada.",
    published: "2026-10-07",
    updated: "2026-10-07",
    blocks: [
      { type: "h2", text: "Quando o paciente procura a clínica" },
      {
        type: "p",
        text: "Durante o expediente, o paciente está trabalhando. É depois dele, ou nos intervalos, que ele pesquisa, compara e manda mensagem. E raramente para uma clínica só: ele escreve para algumas e marca com **quem responde primeiro**.",
      },
      {
        type: "p",
        text: "Quando ninguém responde, a conversa esfria. No dia seguinte, a recepção responde a uma pessoa que já marcou em outro lugar. A mensagem não foi perdida por falta de interesse, mas por falta de resposta.",
      },
      { type: "h2", text: "Quanto custa a mensagem sem resposta" },
      {
        type: "p",
        text: "Para saber quanto o horário fechado custa, você precisa de três números: quantas mensagens chegam fora do expediente por semana, quantas costumam virar consulta e o valor médio da consulta.",
      },
      {
        type: "callout",
        text: "Exemplo: 15 mensagens por semana fora do horário, 1 em cada 3 vira consulta, valor médio de R$ 250. São 5 consultas e **R$ 1.250 por semana** que dependem de alguém responder. Troque pelos seus números.",
      },
      {
        type: "p",
        text: "Para descobrir o primeiro número, filtre as conversas do último mês pelo horário da primeira mensagem. O resultado costuma surpreender.",
      },
      { type: "h2", text: "As 4 formas de atender fora do horário" },
      {
        type: "table",
        head: ["Opção", "Como funciona", "Ponto forte", "Limite"],
        rows: [
          ["Mensagem de ausência", "Avisa que a clínica responde no dia seguinte", "Simples e gratuita", "Informa, mas não marca a consulta"],
          ["Plantão da equipe", "Alguém responde do celular à noite e no fim de semana", "Atendimento humano", "Custa caro, cansa a equipe e não escala"],
          ["Central de atendimento terceirizada", "Uma equipe externa atende em nome da clínica", "Cobre mais horas", "Custo por atendente e menos conhecimento da clínica"],
          ["Agente de IA", "Responde, tira dúvidas e marca na agenda, a qualquer hora", "Atende sempre, ao mesmo tempo, em vários canais", "Precisa ser configurado com o que a clínica aprovou"],
        ],
      },
      { type: "h2", text: "O que é uma secretária virtual com IA" },
      {
        type: "p",
        text: "Uma **secretária virtual com IA** é um agente de inteligência artificial que atende os pacientes pelo WhatsApp e por outros canais, responde dúvidas com as informações aprovadas pela clínica e **marca consultas direto na agenda**, a qualquer hora. Quando o assunto pede um profissional, ela passa a conversa para a equipe.",
      },
      {
        type: "p",
        text: "Ela é diferente de um robô de menu, aquele do \"digite 1 para agendar\". O agente de IA entende o que o paciente escreve com as próprias palavras, e também áudio. Veja a [diferença entre chatbot e agente de IA](" + LINK.chatbot + ").",
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
          "Remarcação e cancelamento",
          "Endereço, estacionamento, formas de pagamento e convênios aceitos",
          "Valores e preparo de exames, nas respostas que a clínica aprovou",
          "Áudios: a Eva transcreve e entende a mensagem falada",
        ],
      },
      {
        type: "p",
        text: "O que **não** é papel da IA: diagnóstico, orientação clínica, avaliação de sintomas e interpretação de exames. Nesses casos, ela é configurada para não responder e passar a conversa para a equipe. Em uma urgência, orienta o paciente a procurar atendimento de emergência.",
      },
      { type: "h2", text: "Como configurar o atendimento fora do horário, passo a passo" },
      {
        type: "steps",
        items: [
          { title: "Liste as 20 perguntas mais comuns", text: "Olhe as conversas do último mês. As mesmas perguntas se repetem e costumam cobrir a grande maioria das mensagens." },
          { title: "Escreva uma resposta aprovada para cada uma", text: "Valores, convênios, preparo e endereço precisam sair sempre iguais. A IA usa exatamente o que a clínica aprovou." },
          { title: "Defina o que vai para a equipe", text: "Dúvidas clínicas, reclamações e casos especiais devem chegar para uma pessoa, com o histórico completo e o prazo de retorno." },
          { title: "Conecte a agenda", text: "Sem a agenda conectada, a IA só promete. Com ela, marca de verdade, sem conflito de horário." },
          { title: "Ative a confirmação", text: "Quem marcou às 23h precisa de um lembrete na véspera, como qualquer paciente. Veja [como reduzir as faltas](" + LINK.faltas + ")." },
          { title: "Defina a apresentação", text: "Como a assistente se apresenta, o tom das mensagens e como o paciente pede para falar com uma pessoa." },
          { title: "Revise as conversas na primeira semana", text: "É aí que aparecem as perguntas que ninguém previu. Cada uma vira uma nova resposta aprovada." },
        ],
      },
      { type: "h2", text: "Modelos de mensagem para o WhatsApp da clínica" },
      {
        type: "template",
        title: "Primeira resposta, a qualquer hora",
        text: "Olá! Aqui é a assistente da {clínica}. Posso te ajudar a marcar uma consulta, tirar dúvidas sobre valores e convênios ou deixar seu recado para a equipe. Como posso ajudar?",
      },
      {
        type: "template",
        title: "Oferecendo horários",
        text: "Tenho estes horários com {profissional}:\n\n• amanhã, às 9h30\n• amanhã, às 14h\n• quinta, às 16h30\n\nQual fica melhor para você?",
      },
      {
        type: "template",
        title: "Quando a dúvida é clínica",
        text: "Essa é uma dúvida para a nossa equipe de saúde. Já deixei seu recado com eles, e você recebe o retorno em {prazo}.\n\nSe for uma urgência, procure o pronto-socorro mais próximo ou ligue 192.",
      },
      {
        type: "template",
        title: "Mensagem de ausência (se a clínica ainda não usa IA)",
        text: "Olá! Nosso atendimento é de {dias}, das {hora} às {hora}. Recebemos sua mensagem e respondemos assim que abrirmos. Se for uma urgência, procure o pronto-socorro mais próximo ou ligue 192.",
      },
      { type: "h2", text: "Como a IA marca uma consulta, do início ao fim" },
      {
        type: "steps",
        items: [
          { title: "O paciente escreve", text: "Às 22h, ele pergunta se há horário para uma avaliação nesta semana. Pode ser texto ou áudio." },
          { title: "A IA entende e consulta a agenda", text: "Ela identifica o tipo de consulta, verifica os horários livres do profissional e oferece as opções mais próximas." },
          { title: "O paciente escolhe", text: "A consulta é marcada direto na agenda, sem conflito com outro paciente." },
          { title: "A IA envia as informações", text: "Data, horário, endereço e preparo, com as respostas que a clínica aprovou." },
          { title: "A confirmação acontece na véspera", text: "O paciente confirma ou remarca na mesma conversa. A recepção chega de manhã com a agenda atualizada." },
        ],
      },
      { type: "h2", text: "E o Instagram da clínica?" },
      {
        type: "p",
        text: "Muitos pacientes conhecem a clínica pelo Instagram e mandam a primeira mensagem pelo Direct ou num comentário. Se o Instagram é atendido por uma pessoa e o WhatsApp por outra, as conversas se perdem entre os dois. O ideal é que **todos os canais caiam na mesma tela**, com o histórico de cada paciente numa ficha só, e que a mesma assistente responda em todos eles.",
      },
      { type: "h2", text: "Como medir se o atendimento fora do horário está funcionando" },
      {
        type: "list",
        items: [
          "**Mensagens fora do horário respondidas** em até alguns minutos",
          "**Consultas marcadas** fora do expediente, por semana",
          "**Taxa de faltas** dessas consultas, comparada às demais",
          "**Conversas passadas para a equipe**, e o motivo de cada uma",
          "**Perguntas sem resposta aprovada**, que viram novas respostas",
        ],
      },
      { type: "h2", text: "Boas práticas de WhatsApp para clínicas" },
      {
        type: "list",
        items: [
          "Use uma **conta comercial**, com endereço, horário e site preenchidos",
          "Mensagens curtas, uma pergunta por vez",
          "Peça só os dados necessários para o agendamento",
          "Trate os dados de saúde com o cuidado que a **LGPD** exige: cada pessoa da equipe vê só o que precisa",
          "Mantenha o histórico de cada paciente em uma ficha única, de todos os canais",
          "Deixe sempre claro como falar com uma pessoa",
        ],
      },
      { type: "h2", text: "Como a Eva faz isso pela sua clínica" },
      {
        type: "p",
        text: "A Eva IA atende no WhatsApp, no Instagram, no telefone e no site, 24 horas por dia, com as respostas que a clínica aprovou. Ela marca a consulta na agenda nativa, confirma no dia com o Anti No Show e, quando o assunto pede um profissional, **passa a conversa para a recepção**. Quando a equipe entra, a IA sai de cena. Veja a [Eva para clínicas](/para-clinicas/).",
      },
      { type: "callout", text: READY_24H },
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
        q: "Funciona no número de WhatsApp que a clínica já usa?",
        a: "Sim. A Eva atende no número que você já tem, pela API oficial ou não oficial, no mesmo painel.",
      },
      {
        q: "E as mensagens do Instagram?",
        a: "A Eva atende Direct, comentários e respostas a Stories, além de WhatsApp, e-mail, telefone e chat do site, tudo numa única tela.",
      },
      {
        q: "Quem da equipe vê as conversas?",
        a: "Quem a clínica definir. Cada pessoa tem o papel de acesso que precisa, e os logs de auditoria registram o que foi feito.",
      },
      {
        q: "Quanto custa uma secretária virtual com IA?",
        a: "Na Eva, os planos começam em R$ 998 por mês, sem fidelidade, e a implantação pode ser parcelada em até 12 vezes. Os detalhes estão na página de planos.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────── Escritórios
  {
    slug: "triagem-de-clientes-no-escritorio",
    segment: "escritorios",
    keyword: "triagem de clientes escritório de advocacia",
    title: "Triagem de clientes no escritório de advocacia e contabilidade: roteiro completo do primeiro atendimento",
    seoTitle: "Triagem de clientes no escritório: roteiro completo · Eva",
    description:
      "O que é a triagem de clientes, as perguntas essenciais do primeiro contato, roteiros por área e modelos de mensagem para organizar o atendimento do escritório.",
    lead: "O primeiro atendimento decide se o cliente fica. E decide também quanto tempo o especialista vai perder antes de entender o caso. Uma boa triagem resolve as duas coisas.",
    published: "2026-10-07",
    updated: "2026-10-07",
    blocks: [
      { type: "h2", text: "O que é a triagem de clientes" },
      {
        type: "p",
        text: "**Triagem de clientes** é o processo de receber o primeiro contato, entender o que a pessoa precisa, registrar as informações essenciais e encaminhar o caso para a área e o profissional certos. Ela não é a consulta: é o que vem antes dela, para que a consulta comece do ponto certo.",
      },
      { type: "h2", text: "Por que a triagem importa" },
      {
        type: "p",
        text: "Sem triagem, todo contato novo chega igual: uma mensagem solta, às vezes um áudio de cinco minutos. Alguém precisa ouvir, entender, perguntar o que faltou e decidir para quem mandar. Quando esse alguém é o especialista, **o tempo mais caro do escritório vira recepção**.",
      },
      {
        type: "list",
        items: [
          "**O cliente é respondido mais rápido**, e sente que foi ouvido",
          "**O especialista recebe o caso pronto**, com o resumo e as informações básicas",
          "**O urgente não espera atrás do simples**, porque o prazo é perguntado logo no início",
          "**Casos fora da área** são identificados antes de ocupar a agenda",
          "**O escritório aprende** de onde vêm os clientes e quais casos mais chegam",
        ],
      },
      { type: "h2", text: "As 6 perguntas essenciais do primeiro contato" },
      {
        type: "steps",
        items: [
          { title: "Quem é", text: "Nome, e se é pessoa física ou empresa. Para empresas, o nome da empresa e o cargo de quem está falando." },
          { title: "Qual é o assunto", text: "Nas palavras do próprio cliente. É daqui que sai a área do caso." },
          { title: "Se há prazo", text: "Audiência marcada, vencimento, notificação recebida, prazo de defesa. Esta pergunta separa o urgente do resto." },
          { title: "O que já existe", text: "Processo em andamento, contrato, documentos, conversas anteriores com outro profissional." },
          { title: "Como conheceu o escritório", text: "Indicação, busca no Google, Instagram. Mostra quais canais trazem clientes." },
          { title: "Melhor horário para conversar", text: "Para marcar a reunião sem idas e vindas." },
        ],
      },
      { type: "h2", text: "Roteiro de triagem por área" },
      {
        type: "p",
        text: "Depois das perguntas gerais, poucas perguntas específicas por área ajudam a direcionar o caso. Adapte às áreas do seu escritório:",
      },
      {
        type: "table",
        head: ["Área", "Perguntas que ajudam a direcionar"],
        rows: [
          ["Trabalhista", "É o empregado ou a empresa? O vínculo ainda existe? Quando terminou? Há prazo correndo?"],
          ["Previdenciário", "Qual benefício? Já fez o pedido no INSS? Recebeu resposta ou indeferimento?"],
          ["Família", "Há filhos menores? Existe acordo entre as partes? Já há processo?"],
          ["Consumidor", "Qual empresa? Quando aconteceu? Tem protocolo, nota fiscal ou conversas guardadas?"],
          ["Contábil e fiscal", "Qual é o regime tributário? É abertura, rotina ou regularização? Recebeu alguma notificação?"],
          ["Empresarial", "Qual é o porte da empresa? É contrato, sociedade ou conflito? Qual é o prazo?"],
        ],
      },
      { type: "h2", text: "Como fazer as perguntas sem cansar o cliente" },
      {
        type: "steps",
        items: [
          { title: "Uma ou duas perguntas por vez", text: "Um formulário longo no primeiro contato é abandonado. Uma conversa, não." },
          { title: "Deixe o cliente contar primeiro", text: "Comece perguntando como pode ajudar. Muitas respostas já vêm no relato." },
          { title: "Aceite áudio", text: "Muita gente explica melhor falando. O importante é transformar o áudio em texto para a equipe." },
          { title: "Resuma e confirme", text: "Antes de encaminhar, devolva um resumo curto e peça a confirmação. Evita mal-entendido e mostra cuidado." },
          { title: "Diga o próximo passo e o prazo", text: "O cliente precisa saber quem vai falar com ele e quando." },
        ],
      },
      { type: "h2", text: "Modelos de mensagem para a triagem pelo WhatsApp" },
      {
        type: "template",
        title: "Abertura",
        text: "Olá! Aqui é a assistente do {escritório}. Para eu te encaminhar para a pessoa certa, me conta em poucas palavras como podemos ajudar? Se preferir, pode mandar um áudio.",
      },
      {
        type: "template",
        title: "Identificando a área (exemplo trabalhista)",
        text: "Entendi. Para seguir: você é o empregado ou a empresa? E existe algum prazo correndo, como audiência ou notificação?",
      },
      {
        type: "template",
        title: "Resumo para confirmação",
        text: "Deixa eu confirmar: você é a empresa, o assunto é a rescisão de um funcionário e não há prazo correndo. Está certo?",
      },
      {
        type: "template",
        title: "Encaminhamento",
        text: "Obrigada! Seu caso já está com a nossa área {área}. Você recebe o retorno em até {prazo}.\n\nSe quiser, já marcamos uma reunião: tenho {dia} às {hora} ou às {hora}.",
      },
      { type: "h2", text: "Triagem por WhatsApp, telefone ou formulário: qual usar" },
      {
        type: "table",
        head: ["Canal", "Ponto forte", "Limite"],
        rows: [
          ["WhatsApp", "O cliente responde quando pode, manda documentos e áudios", "Sem roteiro, vira conversa solta e sem registro"],
          ["Telefone", "Contato humano imediato", "Exige alguém disponível e não deixa registro automático"],
          ["Formulário no site", "Respostas organizadas", "Muita gente abandona no meio, principalmente no celular"],
        ],
      },
      {
        type: "p",
        text: "Na prática, o WhatsApp com um roteiro de conversa reúne o melhor dos três: é o canal que o cliente já usa, e as respostas ficam registradas na ficha, como num formulário.",
      },
      { type: "h2", text: "Quando o caso não é da área do escritório" },
      {
        type: "p",
        text: "Uma triagem bem feita identifica cedo os casos que o escritório não atende, antes de ocupar a agenda de alguém. Responder com cuidado e, se fizer sentido, indicar um caminho preserva a imagem do escritório.",
      },
      {
        type: "template",
        title: "Caso fora da área",
        text: "Obrigada por explicar, {nome}. Esse assunto não está entre as áreas que atendemos, e não queremos que você perca tempo. {orientação ou indicação, se houver}. Se precisar de algo em {áreas do escritório}, estamos por aqui.",
      },
      { type: "h2", text: "A triagem também mostra de onde vêm os clientes" },
      {
        type: "p",
        text: "Quando a pergunta \"como conheceu o escritório?\" é registrada em todo primeiro contato, em poucas semanas você sabe quais canais trazem casos e quais trazem contratos: indicação, Google, Instagram, parceiros. É a informação que mostra onde vale investir tempo e dinheiro.",
      },
      { type: "h2", text: "Como distribuir cada caso" },
      {
        type: "p",
        text: "Depois da triagem, cada conversa deve ir para a área e a pessoa certas, com o resumo e as respostas já registrados na ficha do cliente.",
      },
      {
        type: "list",
        items: [
          "**Por área**, e não por ordem de chegada",
          "**Com limite de carga** por pessoa, para ninguém acumular casos enquanto outro está livre",
          "**Com prazo de resposta (SLA)** por tipo de caso, para o urgente não esperar",
          "**Com o histórico completo**, para o cliente não repetir nada",
        ],
      },
      { type: "h2", text: "Indicadores da triagem" },
      {
        type: "list",
        items: [
          "**Tempo até a primeira resposta**",
          "**Triagens completas**: quantos contatos chegaram ao especialista com todas as informações",
          "**Tempo até a reunião**, desde o primeiro contato",
          "**Conversão**: quantas consultas viraram contrato",
          "**Origem** dos clientes que fecharam",
        ],
      },
      { type: "h2", text: "Erros comuns na triagem" },
      {
        type: "list",
        items: [
          "Perguntar tudo de uma vez, num formulário longo que o cliente abandona",
          "Não registrar as respostas, e o especialista pergunta tudo de novo",
          "Distribuir por ordem de chegada, e não por área",
          "Não perguntar sobre prazo, e o caso urgente espera na fila",
          "Não dizer ao cliente qual é o próximo passo",
        ],
      },
      { type: "h2", text: "Como a Eva faz isso pelo seu escritório" },
      {
        type: "p",
        text: "A Eva IA faz as perguntas de triagem que o escritório definiu, transcreve os áudios, sugere as etiquetas e registra tudo na ficha. O **roteamento por habilidade** entrega cada conversa a quem entende do assunto, e o SLA avisa antes de o prazo de resposta estourar. Se o cliente quiser, ela já marca a reunião, com link, integrada ao Google Agenda. Veja a [Eva para escritórios](/para-escritorios/) e [o que mais dá para automatizar](" + LINK.automatizar + ").",
      },
      {
        type: "callout",
        text: "A Eva IA não dá parecer jurídico ou contábil. Ela organiza o primeiro atendimento, e a análise fica com a sua equipe.",
      },
    ],
    faq: [
      {
        q: "A triagem de clientes pode ser feita por IA?",
        a: "Sim, a parte de perguntar, registrar e encaminhar. A análise do caso continua com o profissional, que recebe tudo organizado.",
      },
      {
        q: "E quando o cliente manda um áudio longo?",
        a: "A Eva transcreve o áudio em segundos, entende o pedido e faz as perguntas que faltaram. A equipe lê em vez de ouvir.",
      },
      {
        q: "As perguntas de triagem são as mesmas para todo escritório?",
        a: "Não. A Eva IA monta a arquitetura com as áreas, as perguntas e as respostas do seu escritório, e especialistas validam antes de entrar no ar.",
      },
      {
        q: "E se o cliente não quiser responder às perguntas?",
        a: "A conversa vai direto para a equipe, com o que o cliente já contou. A triagem existe para ajudar, não para ser uma barreira.",
      },
      {
        q: "A triagem substitui a consulta?",
        a: "Não. Ela organiza o caso para que a consulta comece do ponto certo, sem perder tempo com o básico.",
      },
      {
        q: "Existem cuidados para escritórios de advocacia?",
        a: "Sim. A triagem é atendimento a quem procurou o escritório, mas as mensagens devem seguir as regras de publicidade e de conduta da profissão. Revise os textos com a sua equipe antes de colocar no ar.",
      },
    ],
  },

  {
    slug: "atendimento-do-escritorio-no-whatsapp-o-que-automatizar",
    segment: "escritorios",
    keyword: "automação de atendimento whatsapp escritório",
    title: "Automação de atendimento no WhatsApp para escritórios: o que automatizar e o que deixar com a equipe",
    seoTitle: "Automação de WhatsApp para escritórios: guia · Eva",
    description:
      "O que pode ser automático no atendimento de escritórios de advocacia, contabilidade e consultoria, o que fica com pessoas, modelos de mensagem e um plano de 7 dias.",
    lead: "Automatizar não é afastar o cliente. É tirar da frente da equipe o que se repete, para sobrar tempo para o que exige alguém que sabe.",
    published: "2026-10-07",
    updated: "2026-10-07",
    blocks: [
      { type: "h2", text: "O que é automação de atendimento" },
      {
        type: "p",
        text: "**Automação de atendimento** é usar tecnologia para responder, organizar e encaminhar as mensagens dos clientes sem que uma pessoa precise fazer cada etapa à mão. No escritório, ela cuida do que é repetitivo, como confirmar o recebimento de um documento ou marcar uma reunião, e entrega para a equipe o que exige análise.",
      },
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
          "Qual é o prazo para eu enviar os documentos do mês?",
        ],
      },
      {
        type: "callout",
        text: "Exemplo: se cada uma dessas perguntas leva 3 minutos e chegam 30 por dia, são 90 minutos por dia, ou **7 horas e meia por semana**, quase sempre de quem deveria estar no trabalho técnico.",
      },
      { type: "h2", text: "O que automatizar e o que deixar com pessoas" },
      {
        type: "table",
        head: ["Pode ser automático", "Fica com a equipe"],
        rows: [
          ["Horário, endereço e canais de contato", "Parecer jurídico ou contábil"],
          ["Confirmação de documento recebido", "Estratégia do caso"],
          ["Status consultado no seu sistema", "Negociação de honorários fora da tabela"],
          ["Agendamento e lembrete de reunião", "Notícia difícil ao cliente"],
          ["Triagem e encaminhamento", "Reclamação"],
          ["Pedido de documento pendente", "Decisão sobre aceitar ou não um caso"],
        ],
      },
      { type: "h2", text: "Automação para escritórios de contabilidade" },
      {
        type: "list",
        items: [
          "**Lembretes de envio de documentos** nas datas combinadas com cada cliente",
          "**Confirmação automática** de notas e documentos recebidos",
          "**Dúvidas de rotina**, com as respostas que o escritório aprovou",
          "**Pedido de documentos pendentes**, com follow-up até chegarem",
          "**Encaminhamento** de novos clientes para a área certa: abertura, rotina ou regularização",
        ],
      },
      { type: "h2", text: "Automação para escritórios de advocacia" },
      {
        type: "list",
        items: [
          "**Triagem** do primeiro contato, com as perguntas de cada área. Veja o [roteiro completo de triagem](" + LINK.triagem + ")",
          "**Agendamento** da consulta e lembrete na véspera",
          "**Confirmação** de documentos recebidos",
          "**Status do caso** consultado no sistema do escritório, quando ele oferece integração",
          "**Encaminhamento** para o advogado responsável, com o histórico completo",
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
          { title: "Linguagem simples", text: "Nada de termos técnicos nas mensagens automáticas. O cliente precisa entender de primeira." },
          { title: "Regras da sua profissão", text: "Revise com a sua equipe as regras de publicidade e comunicação da sua área, como as da OAB, antes de definir as mensagens." },
        ],
      },
      { type: "h2", text: "Modelos de mensagem para escritórios" },
      {
        type: "template",
        title: "Documento recebido",
        text: "Olá, {nome}! Recebemos o documento {documento}. Já está com {responsável}. Se precisarmos de mais alguma coisa, avisamos por aqui.",
      },
      {
        type: "template",
        title: "Pedido de documento pendente",
        text: "Oi, {nome}! Para seguirmos com {assunto}, ainda falta {documento}. Pode enviar por aqui mesmo, em foto ou PDF.",
      },
      {
        type: "template",
        title: "Lembrete de reunião",
        text: "Oi, {nome}! Lembrando da nossa reunião amanhã, {dia}, às {hora}, com {responsável}. O link é este: {link}. Você confirma?",
      },
      {
        type: "template",
        title: "Status do caso",
        text: "Oi, {nome}! O andamento mais recente do seu caso é: {status}. Se quiser conversar sobre isso, posso marcar um horário com {responsável}.",
      },
      {
        type: "template",
        title: "Fora do horário",
        text: "Olá! Recebi sua mensagem. Posso te ajudar com documentos, agendamento e informações gerais agora mesmo. Se for um assunto para o seu advogado, deixo o recado e você recebe o retorno em {prazo}.",
      },
      { type: "h2", text: "O que nunca deve ser automático" },
      {
        type: "p",
        text: "Automatizar demais é tão ruim quanto não automatizar. Algumas situações pedem sempre uma pessoa, desde a primeira mensagem:",
      },
      {
        type: "list",
        items: [
          "**Notícias sobre o resultado do caso**, boas ou ruins",
          "**Cliente irritado ou reclamando**: a IA reconhece e passa para a equipe",
          "**Pedidos de opinião técnica**, mesmo que pareçam simples",
          "**Assuntos sensíveis**, como família, saúde ou questões pessoais delicadas",
        ],
      },
      { type: "h2", text: "WhatsApp, Instagram e e-mail na mesma tela" },
      {
        type: "p",
        text: "O cliente não escolhe o canal pensando no escritório: manda documento por e-mail, pergunta no WhatsApp e comenta no Instagram. Quando cada canal fica com uma pessoa diferente, as informações se perdem. Centralizar tudo numa única tela, com a **ficha única do cliente**, é o que permite automatizar sem perder o histórico.",
      },
      { type: "h2", text: "Como escolher uma ferramenta de automação" },
      {
        type: "list",
        items: [
          "Entende áudio e texto livre, ou só menus?",
          "Consulta o sistema do escritório durante a conversa?",
          "Passa para a equipe com o histórico, e sai de cena quando alguém entra?",
          "Tem papéis de acesso e logs de auditoria?",
          "Quem configura: você, sozinho, ou uma equipe que entrega pronto?",
          "Tem fidelidade? Em quanto tempo fica no ar?",
        ],
      },
      {
        type: "p",
        text: "Se ainda está em dúvida sobre o tipo de ferramenta, veja a [diferença entre chatbot e agente de IA](" + LINK.chatbot + ").",
      },
      { type: "h2", text: "Por onde começar: um plano de 7 dias" },
      {
        type: "steps",
        items: [
          { title: "Dia 1: levante as perguntas", text: "Separe as conversas do último mês e anote as que mais se repetem." },
          { title: "Dia 2: escreva as respostas", text: "Uma resposta aprovada para cada pergunta, em linguagem simples." },
          { title: "Dia 3: defina os encaminhamentos", text: "O que vai para a equipe, para quem e em quanto tempo." },
          { title: "Dia 4: conecte agenda e sistema", text: "Agenda para marcar reuniões, sistema para consultar status e documentos." },
          { title: "Dia 5: teste com a equipe", text: "Cada pessoa faz o papel de cliente e tenta as perguntas mais difíceis." },
          { title: "Dia 6: entre no ar", text: "Comece pelo WhatsApp, que concentra a maior parte das mensagens." },
          { title: "Dia 7: revise", text: "Leia as conversas da semana e transforme cada pergunta nova em resposta aprovada." },
        ],
      },
      {
        type: "callout",
        text: "Com a Eva, você não precisa fazer esse plano sozinho: a Eva IA monta a arquitetura com o conhecimento do seu escritório, especialistas validam, e ela entra no ar em até 24 horas.",
      },
      { type: "h2", text: "Como medir o resultado" },
      {
        type: "list",
        items: [
          "**Tempo da primeira resposta**, dentro e fora do horário",
          "**Mensagens resolvidas sem a equipe**",
          "**Horas da equipe** liberadas por semana",
          "**Reuniões marcadas** pelo atendimento automático",
          "**Satisfação**, com uma pesquisa curta ao fim do atendimento",
        ],
      },
      { type: "h2", text: "Como a Eva faz isso pelo seu escritório" },
      {
        type: "p",
        text: "A Eva IA atende no WhatsApp, no Instagram, no e-mail e no telefone com as respostas que o escritório aprovou. Com as **funções personalizadas**, consulta o seu sistema no meio da conversa para informar status e documentos. Quando alguém da equipe entra, a IA sai de cena. Quando sai, ela volta. Veja a [Eva para escritórios](/para-escritorios/).",
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
        q: "Serve para escritório de contabilidade?",
        a: "Sim. Lembretes de documentos, confirmação de recebimento, dúvidas de rotina e encaminhamento por área são alguns dos usos mais comuns.",
      },
      {
        q: "Posso usar o mesmo número de WhatsApp do escritório?",
        a: "Sim. A Eva atende no número que você já usa, pela API oficial ou não oficial.",
      },
      {
        q: "Quem decide o que a IA responde?",
        a: "O escritório. As respostas sobre valores, prazos e procedimentos são aprovadas por vocês, e o que não está na base vai para a equipe.",
      },
      {
        q: "Em quanto tempo fica pronto?",
        a: "Em até 24 horas depois do pagamento e do formulário de onboarding. Se passar disso, a implantação é por nossa conta.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────── Empresas
  {
    slug: "chatbot-ou-agente-de-ia",
    segment: "empresas",
    keyword: "chatbot ou agente de ia",
    title: "Chatbot ou agente de IA: diferenças, exemplos e qual escolher para o WhatsApp",
    seoTitle: "Chatbot ou agente de IA: diferenças e qual escolher · Eva",
    description:
      "O que é um chatbot, o que é um agente de IA, a diferença na prática com exemplos de conversa, quando cada um faz sentido e 10 perguntas antes de contratar.",
    lead: "Os dois respondem no WhatsApp. Só um deles entende o que o cliente quis dizer. Veja a diferença na prática e como escolher.",
    published: "2026-10-07",
    updated: "2026-10-07",
    blocks: [
      { type: "h2", text: "A diferença em uma frase" },
      {
        type: "callout",
        text: "O **chatbot** segue um roteiro de opções. O **agente de IA** entende o que o cliente escreve ou fala, consulta os seus sistemas e resolve, e chama uma pessoa quando precisa.",
      },
      { type: "h2", text: "O que é um chatbot" },
      {
        type: "p",
        text: "Um **chatbot** é um programa que conversa seguindo regras definidas com antecedência. O tipo mais comum é o de menu: \"digite 1 para vendas, 2 para suporte\". Cada opção leva a outra mensagem, como os galhos de uma árvore.",
      },
      {
        type: "p",
        text: "Ele funciona bem enquanto o cliente faz exatamente o que o menu espera. O problema começa quando o cliente escreve do jeito dele: manda um áudio, faz duas perguntas na mesma mensagem ou pergunta algo que não está no roteiro.",
      },
      { type: "h2", text: "O que é um agente de IA" },
      {
        type: "p",
        text: "Um **agente de IA** é um assistente de inteligência artificial que entende linguagem natural, em texto e em áudio, lembra o que foi dito na conversa e responde com o conhecimento do seu negócio. Os melhores vão além de responder: **consultam o seu sistema e executam ações**, como verificar um pedido, marcar um horário ou enviar um orçamento.",
      },
      { type: "h2", text: "A mesma conversa nos dois" },
      {
        type: "template",
        title: "Com um chatbot de menu",
        text: "Cliente: Oi, vocês entregam em Campinas? Preciso de 20 unidades.\n\nChatbot: Olá! Escolha uma opção:\n1. Vendas\n2. Suporte\n3. Financeiro\n\nCliente: Quero saber se entregam em Campinas.\n\nChatbot: Não entendi. Escolha uma opção:\n1. Vendas\n2. Suporte\n3. Financeiro",
      },
      {
        type: "template",
        title: "Com um agente de IA",
        text: "Cliente: Oi, vocês entregam em Campinas? Preciso de 20 unidades.\n\nAgente: Entregamos sim! Consultei aqui: temos as 20 unidades, e a entrega em Campinas leva 2 dias úteis. Quer que eu mande o orçamento agora?\n\nCliente: Quero!\n\nAgente: Pronto, orçamento enviado. Já avisei a nossa equipe comercial.",
      },
      { type: "h2", text: "Comparação lado a lado" },
      {
        type: "table",
        head: ["", "Chatbot de menu", "Agente de IA"],
        rows: [
          ["Como o cliente escreve", "Escolhe uma opção numerada", "Escreve ou fala como quiser"],
          ["Áudio", "Não entende", "Transcreve e entende"],
          ["Duas perguntas na mesma mensagem", "Responde só ao que está no menu", "Responde às duas"],
          ["Pergunta fora do roteiro", "Repete o menu", "Responde, ou chama uma pessoa"],
          ["Consulta o seu sistema", "Raramente", "Sim, durante a conversa"],
          ["Agenda e orçamento", "Encaminha para alguém", "Faz na hora"],
          ["Manutenção", "Cada novo caso é um novo galho", "Aprende com a sua base de conhecimento"],
          ["Experiência do cliente", "Sente que fala com uma máquina", "Sente que foi entendido"],
        ],
      },
      { type: "h2", text: "Quando um chatbot basta" },
      {
        type: "list",
        items: [
          "O volume de mensagens é pequeno",
          "As perguntas são sempre as mesmas e cabem num menu curto",
          "Quase ninguém escreve fora do horário",
          "O objetivo é só direcionar a conversa para a pessoa certa",
        ],
      },
      { type: "h2", text: "Quando você precisa de um agente de IA" },
      {
        type: "list",
        items: [
          "Os clientes escrevem do jeito deles, e mandam áudio",
          "Muita gente escreve à noite e no fim de semana",
          "Você quer **vender, agendar e tirar dúvidas** na mesma conversa",
          "A resposta depende de informações do seu sistema: estoque, pedido, agenda",
          "A equipe gasta horas com perguntas repetidas. Veja [como fazer a conta](" + LINK.custo + ")",
        ],
      },
      { type: "h2", text: "Agente de IA não é ChatGPT solto no WhatsApp" },
      {
        type: "p",
        text: "Colocar um modelo de linguagem genérico para responder clientes é arriscado: ele pode inventar preços, prometer o que a empresa não faz ou responder sobre assuntos que não deveria. Um agente de atendimento profissional tem:",
      },
      {
        type: "list",
        items: [
          "**Base de conhecimento** com as informações do seu negócio",
          "**Respostas aprovadas** para o que não pode sair errado",
          "**Limites claros** do que pode e não pode responder",
          "**Testes antes de entrar no ar**: roteamento, fatos, recusa e limites",
          "**Passagem para a equipe**, com o histórico, quando o assunto pede uma pessoa",
        ],
      },
      { type: "h2", text: "Como um agente de IA funciona por dentro" },
      {
        type: "steps",
        items: [
          { title: "Base de conhecimento", text: "Tudo o que o agente sabe sobre o seu negócio: produtos, serviços, preços, políticas, perguntas frequentes. Na Eva, cada artigo publicado na sua Central de Ajuda vira conhecimento da IA." },
          { title: "Cenários", text: "Cada intenção do cliente, como comprar, agendar, reclamar ou tirar dúvida, tem o seu roteiro e as suas ferramentas." },
          { title: "Respostas aprovadas", text: "Fatos que não podem sair errados, como preços e prazos, têm texto fixo, aprovado pela empresa." },
          { title: "Funções", text: "Ações que o agente executa no meio da conversa: consultar um pedido, ver horários, gerar um orçamento." },
          { title: "Passagem para a equipe", text: "Regras de quando chamar uma pessoa, e para quem, com o histórico da conversa." },
        ],
      },
      { type: "h2", text: "Exemplos por tipo de negócio" },
      {
        type: "table",
        head: ["Negócio", "O que o cliente pede", "O que o agente de IA faz"],
        rows: [
          ["Loja", "Status do pedido, prazo de entrega, troca", "Consulta o pedido no sistema e responde com o status real"],
          ["Clínica", "Horário, valor, preparo de exame", "Marca na agenda, envia o preparo e confirma na véspera"],
          ["Escritório", "Atendimento sobre um caso novo", "Faz a triagem, registra na ficha e encaminha para a área certa"],
          ["Serviços", "Orçamento e disponibilidade", "Consulta a agenda, envia o orçamento e faz o follow-up"],
        ],
      },
      {
        type: "p",
        text: "Veja exemplos detalhados para [clínicas](" + LINK.foraDoHorario + ") e para [escritórios](" + LINK.triagem + ").",
      },
      { type: "h2", text: "10 perguntas para fazer antes de contratar" },
      {
        type: "steps",
        items: [
          { title: "Entende áudio?", text: "No Brasil, boa parte das mensagens de WhatsApp chega em áudio." },
          { title: "Consulta o meu sistema durante a conversa?", text: "É o que separa responder de resolver." },
          { title: "Marca na minha agenda?", text: "De verdade, sem conflito de horário, com confirmação." },
          { title: "Passa para uma pessoa da equipe, com o histórico?", text: "E sai de cena quando alguém entra na conversa?" },
          { title: "Admite quando não sabe?", text: "Ou inventa uma resposta?" },
          { title: "Atende em quais canais?", text: "WhatsApp, Instagram, e-mail, telefone, site, todos na mesma tela?" },
          { title: "Quem monta e quem valida?", text: "Você vai configurar sozinho ou recebe pronto?" },
          { title: "Em quanto tempo fica pronto?", text: "Dias, semanas ou meses?" },
          { title: "Tem fidelidade?", text: "E o que acontece se você quiser sair?" },
          { title: "Como é o suporte?", text: "Quanto tempo leva a primeira resposta quando algo precisa de ajuste?" },
        ],
      },
      { type: "h2", text: "Como a Eva responde a essas perguntas" },
      {
        type: "p",
        text: "A Eva IA entende texto e áudio, consulta o seu sistema com **funções personalizadas**, marca na agenda e passa para a equipe quando o assunto pede uma pessoa. Quando a base não cobre o assunto, ela admite que não sabe. Atende oito canais numa tela só. A Eva IA monta a arquitetura, especialistas validam, e ela entra no ar em até 24 horas, sem fidelidade, com suporte que responde em até 1 hora. Veja a [Eva para empresas](/para-empresas/).",
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
        q: "Chatbot é mais barato que agente de IA?",
        a: "O chatbot de menu costuma custar menos para começar, mas cada novo caso exige um novo galho, e os clientes que não cabem no menu desistem. A conta certa compara o custo com as vendas e os atendimentos que cada um resolve.",
      },
      {
        q: "Preciso abandonar o meu número de WhatsApp?",
        a: "Não. A Eva atende no número que você já usa, pela API oficial ou não oficial, no mesmo painel.",
      },
      {
        q: "O cliente percebe que está falando com uma IA?",
        a: "Depende da configuração. A recomendação é ser transparente: o cliente aceita bem quando a resposta é rápida e correta, e sabe que pode pedir para falar com uma pessoa.",
      },
      {
        q: "Dá para começar com chatbot e migrar depois?",
        a: "Dá, mas o trabalho do menu não se aproveita. Se o seu cliente já escreve do jeito dele e manda áudio, começar pelo agente de IA economiza a migração.",
      },
    ],
  },

  {
    slug: "atendente-ou-agente-de-ia-como-fazer-a-conta",
    segment: "empresas",
    keyword: "quanto custa um agente de ia",
    title: "Atendente ou agente de IA: quanto custa e como calcular o retorno",
    seoTitle: "Atendente ou agente de IA: quanto custa? · Eva",
    description:
      "O custo real de um atendente, quanto custa um agente de IA, quanto vale o cliente que escreve fora do horário e um modelo de conta para decidir.",
    lead: "A pergunta certa não é atendente ou IA. É quanto custa cada hora sem resposta, e quem deve cuidar de cada conversa. Este guia mostra a conta, passo a passo.",
    published: "2026-10-07",
    updated: "2026-10-07",
    blocks: [
      { type: "h2", text: "A conta em uma frase" },
      {
        type: "callout",
        text: "Compare o custo de cada opção com a **receita que depende de uma resposta rápida**. A IA se paga quando recupera uma parte do que hoje fica sem resposta.",
      },
      { type: "h2", text: "Quantas horas a sua equipe cobre" },
      {
        type: "p",
        text: "Uma semana tem 168 horas. Uma jornada padrão de 44 horas semanais cobre cerca de **26% delas**. Nos outros 74%, à noite, de madrugada e no fim de semana, o cliente que escreve espera.",
      },
      {
        type: "p",
        text: "Mesmo dentro do horário, a equipe não responde na hora o tempo todo: tem almoço, reunião, outra conversa aberta, pico de mensagens. O tempo da primeira resposta cresce justamente quando há mais clientes escrevendo.",
      },
      { type: "h2", text: "O custo real de um atendente" },
      {
        type: "p",
        text: "O salário é só a parte mais visível. Para ter a conta completa, inclua:",
      },
      {
        type: "list",
        items: [
          "**Salário**",
          "**Encargos e benefícios**, que somam uma parte relevante do salário. Peça o número exato ao seu contador",
          "**Férias e 13º**, e quem cobre a pessoa nesses períodos",
          "**Faltas e afastamentos**",
          "**Treinamento** até a pessoa conhecer o negócio",
          "**Gestão**: o tempo de quem acompanha e corrige",
          "**Rotatividade**: recrutar e treinar de novo quando alguém sai",
        ],
      },
      {
        type: "p",
        text: "Para cobrir mais horas com pessoas, a conta se multiplica: são mais turnos, mais gente e mais gestão.",
      },
      { type: "h2", text: "Quanto custa um agente de IA" },
      {
        type: "p",
        text: "Um agente de IA costuma ter uma **mensalidade** e uma **implantação**. Na Eva, os planos começam em **R$ 998 por mês**, sem fidelidade, e a implantação começa em R$ 1.853, parcelável em até 12 vezes. O agente atende 24 horas, todos os dias, em vários canais ao mesmo tempo.",
      },
      {
        type: "p",
        text: "Vale perguntar sempre pelos custos variáveis. Na Eva, eles são dois e estão descritos nos planos: os **disparos em massa** são cobrados por mensagem, e as **ligações com IA** são pós-pagas conforme o uso.",
      },
      { type: "h2", text: "Quanto vale o cliente sem resposta" },
      {
        type: "p",
        text: "A conta que quase ninguém faz é a do lado da receita. Ela tem três números que você já tem:",
      },
      {
        type: "steps",
        items: [
          { title: "Contatos fora do horário", text: "Quantas mensagens chegam por semana fora do expediente. Filtre as conversas do último mês pelo horário da primeira mensagem." },
          { title: "Taxa de conversão", text: "De cada contato respondido, quantos viram cliente." },
          { title: "Ticket médio", text: "Quanto vale, em média, um cliente novo." },
        ],
      },
      {
        type: "callout",
        text: "Exemplo: 10 contatos por semana fora do horário, 1 em cada 5 vira cliente, ticket médio de R$ 1.500. São 2 clientes e **R$ 3.000 por semana**, cerca de R$ 12.000 por mês, que dependem de uma resposta rápida. Troque pelos seus números.",
      },
      { type: "h2", text: "Modelo de conta para decidir" },
      {
        type: "p",
        text: "Preencha com os números da sua empresa:",
      },
      {
        type: "table",
        head: ["Linha", "Como calcular"],
        rows: [
          ["A. Contatos fora do horário por mês", "Contatos por semana × 4"],
          ["B. Taxa de conversão", "Clientes ÷ contatos respondidos"],
          ["C. Ticket médio", "Receita de clientes novos ÷ número de clientes novos"],
          ["D. Receita em jogo por mês", "A × B × C"],
          ["E. Custo mensal da IA", "Mensalidade + parcela da implantação"],
          ["F. Resultado", "Se D for maior que E, a conta fecha mesmo que a IA recupere só parte de D"],
        ],
      },
      {
        type: "p",
        text: "Some ainda as **horas da equipe** liberadas das perguntas repetidas. Elas não viram dinheiro direto, mas viram tempo para vender, atender melhor e fechar.",
      },
      { type: "h2", text: "A conta preenchida, com números de exemplo" },
      {
        type: "table",
        head: ["Linha", "Exemplo"],
        rows: [
          ["A. Contatos fora do horário por mês", "10 por semana × 4 = 40"],
          ["B. Taxa de conversão", "1 em cada 5 = 20%"],
          ["C. Ticket médio", "R$ 1.500"],
          ["D. Receita em jogo por mês", "40 × 20% × R$ 1.500 = R$ 12.000"],
          ["E. Custo mensal da IA (Eva One)", "R$ 998 + R$ 1.853 ÷ 12 ≈ R$ 1.152"],
          ["F. Resultado", "Recuperar 1 em cada 10 desses clientes já paga a conta"],
        ],
      },
      {
        type: "p",
        text: "Os números acima são um exemplo. A conta só vale com os números da sua empresa, e é por isso que medir os contatos fora do horário é o primeiro passo.",
      },
      { type: "h2", text: "Os custos que não aparecem na planilha" },
      {
        type: "list",
        items: [
          "**Avaliações ruins** de quem esperou demais por uma resposta",
          "**Indicações perdidas**: o cliente mal atendido não indica",
          "**Equipe sobrecarregada**, que responde com pressa e erra mais",
          "**Dono no celular** à noite e no fim de semana, respondendo o que poderia ser automático",
        ],
      },
      { type: "h2", text: "Quando contratar mais atendentes faz sentido" },
      {
        type: "list",
        items: [
          "Quando as conversas exigem negociação, empatia e decisão, e não respostas repetidas",
          "Quando a IA já cuida do volume e a equipe atual não dá conta dos casos que exigem gente",
          "Quando o relacionamento pessoal é o diferencial do seu negócio",
        ],
      },
      {
        type: "p",
        text: "Nesses casos, a IA e a equipe se somam: a IA filtra, organiza e resolve o repetitivo, e cada pessoa contratada trabalha no que gera mais valor.",
      },
      { type: "h2", text: "Não é um ou outro: como dividir o trabalho" },
      {
        type: "table",
        head: ["Fica com a IA", "Fica com a equipe"],
        rows: [
          ["Primeira resposta, a qualquer hora", "Negociação e fechamento"],
          ["Perguntas que se repetem", "Casos especiais e reclamações"],
          ["Agenda, orçamento e status de pedido", "Relacionamento com o cliente importante"],
          ["Follow-up de quem sumiu", "Decisões que exigem alguém que sabe"],
          ["Classificar e organizar o funil", "Estratégia e melhoria do atendimento"],
        ],
      },
      {
        type: "p",
        text: "O melhor resultado aparece quando a IA cuida do volume e do horário, e a equipe recebe a conversa pronta para fechar. Veja também a [diferença entre chatbot e agente de IA](" + LINK.chatbot + ").",
      },
      { type: "h2", text: "Como medir o retorno nos primeiros 30 dias" },
      {
        type: "list",
        items: [
          "**Tempo da primeira resposta**, antes e depois",
          "**Contatos fora do horário respondidos**",
          "**Clientes que vieram desses contatos**",
          "**Agendamentos e orçamentos** feitos pela IA",
          "**Horas da equipe** liberadas por semana",
          "**Clientes recuperados** pelo follow-up",
        ],
      },
      { type: "h2", text: "Como a Eva entra nessa conta" },
      {
        type: "p",
        text: "A Eva IA responde na hora, em oito canais, consulta os seus sistemas e deixa cada conversa classificada no funil. Quando o assunto pede uma pessoa, chama a sua equipe. E no painel você pergunta à Eva IA como foi a semana, e ela monta o relatório com os seus dados. Veja a [Eva para empresas](/para-empresas/) e os [planos](/planos/).",
      },
      { type: "callout", text: READY_24H },
    ],
    faq: [
      {
        q: "A IA substitui a minha equipe?",
        a: "Não é esse o objetivo. Ela tira da equipe o que se repete e o que chega fora do horário, para que as pessoas cuidem do que exige gente.",
      },
      {
        q: "Quanto custa um agente de IA para WhatsApp?",
        a: "Na Eva, os planos começam em R$ 998 por mês, sem fidelidade, e a implantação começa em R$ 1.853, parcelável em até 12 vezes. Disparos em massa e ligações com IA são cobrados à parte, conforme o uso.",
      },
      {
        q: "Em quanto tempo vejo resultado?",
        a: "A Eva fica no ar em até 24 horas depois do pagamento e do onboarding. A partir daí, acompanhe por 30 dias o tempo de primeira resposta, os contatos fora do horário respondidos e quantos viraram clientes.",
      },
      {
        q: "Quantos atendimentos estão incluídos?",
        a: "Depende do plano: até 1.500 atendimentos por mês no Eva One, 3.500 no Eva PRO e 15.200 no Eva BLACK. Os detalhes estão na página de planos.",
      },
      {
        q: "Preciso ter equipe para usar um agente de IA?",
        a: "Não. Ela atende sozinha e chama você quando o assunto pede uma pessoa. Se você tem equipe, cada conversa vai para quem entende do assunto.",
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
  const text = [
    a.lead,
    ...a.blocks.flatMap((b) =>
      b.type === "list"
        ? b.items
        : b.type === "steps"
          ? b.items.flatMap((i) => [i.title, i.text])
          : b.type === "table"
            ? [...b.head, ...b.rows.flat()]
            : b.type === "template"
              ? [b.title, b.text]
              : [b.text],
    ),
    ...a.faq.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

export const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
