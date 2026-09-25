# Eva — Fase 1: estrutura de páginas e jornada do cliente

**Versão:** 25/09/2026 · **Status:** ✅ aprovada (menu sem Cases; sem páginas de cliente; entrega em 24 horas)
**Base:** `docs/JORNADA-SITE-EVA.md` + brief de 25/09/2026

Este documento fecha **o que existe, para quem, em que ordem e com qual próximo passo**. Não há visual aqui, de propósito: cor, fonte e forma são da Fase 2. O texto de cada bloco descreve a função dele, não é a copy final (a copy é da Fase 5).

---

## 1. Decisões registradas

| decisão | resposta | consequência na estrutura |
|---|---|---|
| Teste de 15 dias sem cartão | **não** | o site vende implantação paga. A implantação aparece como serviço, e a prova carrega mais peso |
| Clientes no site | **nunca nomeados.** Sem página de cases, sem logos, depoimentos anônimos por estratégia | a prova vem dos números, dos depoimentos anônimos por segmento e do processo (validação + 90 dias). `/cases` sai da arquitetura do brief |
| Prazo de entrega | **agente no ar em até 24 horas** | vira a promessa central. Site já atualizado em 25/09 |
| Menu | aprovado, **sem Cases** | — |
| CTA por página | aprovado | WhatsApp comercial como principal fora de `/planos`; checkout como principal em `/planos` |
| Analytics | GA4 no ar desde 25/09 | cada CTA tem um evento correspondente |

---

## 2. Mapa do site

17 páginas, contando checkout, onboarding e 404. ⭐ = não existe hoje.

```
/                           Home
│
├─ /produtos                Visão geral do produto
│   ├─ /produtos/ia       ⭐ O agente de IA
│   ├─ /produtos/crm      ⭐ CRM e funil
│   ├─ /produtos/automacao⭐ Automação, SLA, agenda
│   └─ /produtos/gestao   ⭐ Equipe, relatórios, app, segurança
│
├─ /eva-ia                ⭐ A inteligência e onde ela age
├─ /central-de-ajuda      ⭐ A Central de Ajuda própria do cliente
│
├─ /planos                  Planos, implantação, validação, FAQ
│   ├─ /checkout            Pagamento (fora do menu)
│   └─ /novo-cliente        Onboarding pós-compra (fora do menu e do Google)
│
├─ /sobre                 ⭐ História e levantamento próprio
├─ /eva-club                Comunidade
├─ /afiliados               Programa de afiliados (escada nova)
├─ /parceiros             ⭐ Revenda white label
├─ /suporte               ⭐ Canais, prazos, treinamento
│
└─ /404                     Página não encontrada (já existe)

Externos, mantidos: Privacidade e Termos (Central de Ajuda), Login (app.evainteligencia.com.br)
```

---

## 3. Página por etapa da jornada

| etapa | pergunta do visitante | páginas que respondem |
|---|---|---|
| **Descobre** | "o que é isso?" | `/` |
| **Entende** | "como funciona? faz o que eu preciso?" | `/produtos`, as 4 subpáginas, `/eva-ia`, `/central-de-ajuda` |
| **Acredita** | "funciona de verdade? para alguém como eu?" | números e depoimentos anônimos por segmento (espalhados nas páginas), `/sobre` |
| **Compara** | "quanto custa? qual plano é o meu?" | `/planos` |
| **Decide** | "e se der errado? o que eu recebo?" | `/planos` (implantação, validação, 90 dias, FAQ) |
| **Compra** | "como pago?" | `/checkout` |
| **Entra** | "e agora?" | `/novo-cliente`, `/suporte` |
| **Cresce** | "como tiro mais disso? posso ganhar com isso?" | `/eva-club`, `/afiliados`, `/parceiros` |

**Como provar sem nomear clientes.** Três fontes, todas já disponíveis:
1. **Números da empresa:** 300+ empresas, 20M+ atendimentos, 99,9% de precisão
2. **Depoimentos anônimos por segmento**, no formato que já funciona hoje ("Casa de Eventos em São Paulo"). O visitante se reconhece pelo segmento, e o concorrente não tem a quem abordar
3. **O processo como prova:** bateria de validação antes do go-live e 90 dias de acompanhamento depois. É verificável pelo cliente e quase nenhum concorrente oferece

---

## 4. Menu e rodapé

### 4.1 Menu no computador

```
[EVA]   Produto ▾   Eva IA   Planos   Empresa ▾        Login   [ Falar com especialista ]
```

- **Produto ▾** abre um painel com duas colunas:
  - *Plataforma:* Agente de IA · CRM · Automação · Gestão e equipe
  - *Destaques:* Central de Ajuda própria · Canais e integrações (`/produtos#canais`) · "Ver tudo" (`/produtos`)
- **Eva IA** é item de primeiro nível: é a marca da inteligência (brief 1.2) e o recurso mais vendável novo
- **Empresa ▾**: Sobre · Eva Club · Suporte · Afiliados · Parceiros (revenda)
- **Botão principal:** WhatsApp comercial, sempre visível
- "Home" sai do menu: o logo já leva para a home

### 4.2 Menu no celular
Mesmo conteúdo, em lista. Os submenus abrem como sanfona. **O botão "Falar com especialista" fica fixo no rodapé da tela** enquanto o menu está aberto, para o polegar alcançar.

### 4.3 Rodapé

| Produto | Eva IA e recursos | Empresa | Ganhe com a Eva | Contato |
|---|---|---|---|---|
| Visão geral | Eva IA | Sobre | Programa de Afiliados | WhatsApp comercial |
| Agente de IA | Central de Ajuda própria | Eva Club | Revenda (Parceiros) | WhatsApp suporte (ligação 24h) |
| CRM | App da Eva IA (`/produtos/gestao#app`) | Suporte | | E-mail de suporte |
| Automação | Canais e integrações | Planos | | Central de Ajuda (externa) |
| Gestão e equipe | | | | Instagram |

Barra inferior: © · CNPJ 62.162.039/0001-62 · Privacidade · Termos.

---

## 5. Chamada para ação (CTA) por página

**A regra:** sem teste grátis, a venda é consultiva e a implantação custa a partir de R$ 1.853. Então:
- nas páginas de **descoberta e entendimento**, o botão principal é **falar com especialista (WhatsApp comercial)**, e o secundário leva para a próxima etapa da jornada
- em **`/planos`**, o principal é **contratar (checkout)**, e o secundário é o WhatsApp para quem ainda tem dúvida
- toda mensagem de WhatsApp sai **pré-preenchida com a página de origem** ("Vim da página de CRM…"), para o comercial saber o contexto e o analytics separar a origem

| página | CTA principal | CTA secundário |
|---|---|---|
| `/` | Falar com especialista | Ver planos |
| `/produtos` e subpáginas | Falar com especialista | Ver planos |
| `/eva-ia` | Falar com especialista | Ver planos |
| `/central-de-ajuda` | Falar com especialista | Ver a Central da Eva funcionando (link externo) |
| `/planos` | **Contratar [plano]** → `/checkout?plano=` | Tirar dúvida com especialista |
| `/sobre` | Falar com especialista | Ver planos |
| `/eva-club` | Falar com especialista | Ver planos |
| `/afiliados` | Quero ser afiliado | Conhecer a revenda |
| `/parceiros` | Quero revender (WhatsApp, mensagem "parceria") | Conhecer o programa de afiliados |
| `/suporte` | Falar com o suporte (WhatsApp suporte) | Abrir a Central de Ajuda |
| `/checkout` | Pagar | Dúvida no WhatsApp |
| `/404` | Voltar para a home | Ver planos |

---

## 6. Rascunho de cada página

Cada linha é um bloco, em ordem de rolagem. Entre parênteses: a pergunta que o bloco responde ou a prova que ele traz.

### `/` Home
1. **Hero:** "Enquanto você vive, a Eva trabalha" + a promessa (funcionária treinada, **no ar em 24 horas**) + CTA duplo
2. **A cena das 23h** (a dor)
3. **4 pilares**, apresentando a Eva IA como a inteligência que atravessa tudo → cada pilar leva à subpágina de produto
4. **Como funciona em 3 etapas** (você não programa nada, recebe pronto em 24 horas)
5. **Validada antes, acompanhada depois:** bateria de testes + 90 dias (resposta ao "IA fala besteira") → `/planos#implantacao`
6. **Números:** 300+ empresas, 20M+ atendimentos, 99,9%
7. **Depoimentos anônimos por segmento** (mantidos)
8. **Eva Club:** vantagens de primeira compra, com os 50% em novos produtos → `/eva-club`
9. **CTA final**

### `/produtos` Visão geral
1. Hero: uma plataforma, uma inteligência, todos os canais
2. **4 cartões de vertical** (Agente de IA · CRM · Automação · Gestão), cada um com um parágrafo, três bullets e um link para a subpágina
3. Faixa da **Eva IA** → `/eva-ia`
4. **Os 8 canais** (âncora `#canais`, mantém os links que já existem)
5. Faixa da **Central de Ajuda própria** → `/central-de-ajuda`
6. **Integrações** (âncora `#integracoes`) + API aberta
7. Segurança em uma linha → `/produtos/gestao#seguranca`
8. CTA

### `/produtos/ia` O agente de IA
1. Hero: "não só responde, resolve"
2. Demonstração de conversa (o simulador de hoje, evoluído)
3. **Base de conhecimento alimentada pela Central de Ajuda** → `/central-de-ajuda`
4. **Funções personalizadas** (destaque: a IA consulta estoque, pedido, saldo, agenda no sistema do cliente)
5. **MCP:** conjunto de ferramentas externas
6. **Respostas aprovadas e cenários** (precisão nos fatos que não podem sair errados)
7. **Atendimento híbrido:** a IA sai quando um humano entra e volta quando ele sai (responde a "perco o controle")
8. **Copiloto do atendente** → `/eva-ia`
9. Transcrição de áudio · sugestão de etiqueta
10. **Como garantimos que ela não erra:** validação + 90 dias → `/planos#implantacao`
11. Depoimento anônimo de apoio · CTA

### `/produtos/crm` CRM
1. Hero: todo cliente, todo histórico, uma tela
2. Visão única do cliente, histórico por canal
3. Atributos personalizados · gestão B2B por empresa
4. **Funil:** checklist por etapa · automação ao entrar na etapa · notas de ciclo · relatório de tempo em cada etapa
5. Webhook por evento do funil
6. Importação com etiquetas e campos · etiquetas de interesse
7. Depoimento anônimo de apoio · CTA

### `/produtos/automacao` Automação
1. Hero: o que se repete, a Eva faz
2. **Agenda nativa** (destaque: a IA marca com link de reunião, confirma no dia e cancela) + Anti No Show
3. Follow-up e mensagem agendada
4. Regras se/então · roteamento por habilidade · macros
5. **SLA definido e medido**, com alerta antes de estourar e relatório de cumprimento
6. Campanhas segmentadas, com a nota de que o envio é cobrado por mensagem (sem banimento, sem "ilimitado")
7. Resolução automática de conversa inativa · CSAT automático
8. Depoimento anônimo de apoio · CTA

### `/produtos/gestao` Gestão e equipe
1. Hero: sua equipe no controle
2. Painel unificado · contador de não lidas
3. **Relatórios por atendente, caixa, etiqueta e time**
4. **Times, política de atribuição e limite de carga por atendente**
5. **Chat interno:** salas, tópicos, enquete, mensagem fixada
6. **App da Eva IA** no celular, sem loja (âncora `#app`)
7. Nome do atendente na mensagem
8. **Segurança** (âncora `#seguranca`): logs, papéis, SSO, roteamento geográfico
9. CTA

### `/eva-ia` A inteligência
1. Hero: uma inteligência, presente em tudo
2. **Onde ela age:** atende o cliente · ajuda o atendente · trabalha para o dono · transcreve · classifica · agenda (diagrama)
3. **Eva IA no painel** (destaque): "pergunte à sua operação", com as três perguntas de exemplo do brief
4. Relatório, tabela e gráfico exportáveis
5. **Propõe, você confirma:** nenhuma ação sem a sua confirmação (responde ao receio de "IA agindo sozinha")
6. `Alt + Shift + M` em qualquer tela · aceita arquivo, PDF e áudio
7. App da Eva IA
8. CTA

### `/central-de-ajuda` A Central do cliente
1. Hero: um trabalho, dois resultados
2. O que é: portal público com categorias, artigos e busca, com a marca do cliente
3. **O gancho:** escrever um artigo ensina o agente (diagrama: artigo → base da IA → resposta certa)
4. Exemplo real: a própria Central da Eva (link externo)
5. Para quem mais serve (clínicas, e-commerce, serviços)
6. CTA

### `/planos` Planos
1. Hero: transparência, sem surpresas
2. **Tabela dos 3 planos**, com destaque em **conexões e usuários** e o PRO marcado como recomendado; cada cartão leva a `/checkout?plano=`
3. **Qual é o meu plano?** Guia por número de pessoas na equipe e de canais (é o que de fato empurra o upgrade, brief 4.1)
4. **Implantação é serviço** (âncora `#implantacao`): as 5 etapas até o go-live **em até 24 horas**, parcelável no cartão
5. **Validada antes, acompanhada depois:** bateria de testes + 90 dias
6. **O que é e o que não é cobrado:** atendimento não é cobrado por mensagem; disparo é; ligações com IA são pós-pagas
7. Comparativo completo, recurso por recurso (sanfona, para não pesar)
8. 2 depoimentos anônimos curtos
9. **FAQ:** fidelidade · upgrade · downgrade · implantação · conexões · ligações · disparo · prazo
10. CTA duplo

### `/checkout` (mantém a estrutura; ajustes)
- Resumo da implantação em 5 etapas curtas, ao lado do pagamento
- WhatsApp de dúvida visível sem sair da página

### `/novo-cliente` (mantém; fora do Google)

### `/sobre` Sobre
1. A história
2. Os números (levantamento próprio, sem mexer)
3. Como trabalhamos: implantação em 24 horas → validação → 90 dias → Eva Club
4. Quem está por trás
5. Dados da empresa (CNPJ): confiança
6. CTA

### `/eva-club` (mantém; ajustes)
- Resposta em 1 hora, 50% em novos produtos e prazo de 24 horas já corrigidos no ar
- Vantagens de primeira compra no topo, alinhadas com a home

### `/afiliados` (mantém a narrativa; troca o motor)
- Escada nova em 6 faixas até 30% · simulador corrigido · bônus de R$ 15.000 com 100 indicações · regra dos 3 meses · cupom de 20% na implantação
- Faixa final: "quer revender com a sua marca?" → `/parceiros`

### `/parceiros` Revenda white label
1. Hero: venda a Eva com a sua marca
2. **Afiliado × parceiro** (tabela: quem indica × quem revende)
3. O que o parceiro recebe: marca própria · planos e preços próprios · cobrança recorrente em 4 gateways · suspensão e reativação automáticas · relatório de receita e de consumo de IA por conta · painel de administração
4. Como começar, em etapas
5. Para quem: agências, consultorias, integradores
6. FAQ · CTA

### `/suporte` Suporte
1. Hero: gente de verdade, rápido
2. **Canais:** WhatsApp suporte (também atende ligação 24h) · e-mail · EvaClub
3. **Prazos:** primeira resposta em até 1 hora · 15 minutos com operação parada · tabela por grau (6 h · 3 dias · 10 dias · 8 h)
4. **Treinamento ao vivo:** terça e quinta, 11h15
5. Central de Ajuda (externa) · App da Eva IA
6. CTA para o WhatsApp de suporte

### `/404`
Mensagem curta + 4 atalhos: Produto · Eva IA · Planos · Suporte.

---

## 7. Links internos: o próximo passo de cada página

Nenhuma página é beco sem saída.

| de | leva principalmente para |
|---|---|
| `/` | subpáginas de produto (pilares) · `/planos` |
| `/produtos` | 4 subpáginas · `/eva-ia` · `/central-de-ajuda` |
| subpáginas de produto | `/planos` · a subpágina vizinha |
| `/eva-ia` | `/produtos/ia` · `/planos` |
| `/central-de-ajuda` | `/produtos/ia` · `/planos` |
| `/planos` | `/checkout` · `/sobre` |
| `/checkout` | Asaas → `/novo-cliente` |
| `/novo-cliente` | `/suporte` · `/eva-club` |
| `/afiliados` ↔ `/parceiros` | um leva ao outro |
| `/sobre` | `/produtos` · `/planos` |

---

## 8. Implantação em 24 horas (decidido em 25/09)

- **As 24 horas contam a partir de dois eventos juntos:** pagamento confirmado **e** formulário de onboarding (`/novo-cliente`) preenchido
- **A arquitetura é montada pela Super-Eva**, sem reunião. O formulário substitui a reunião de arquitetura

As 5 etapas que `/planos` passa a mostrar:
1. Você contrata (pagamento)
2. Você preenche o formulário de configuração (processos, tom de voz, objeções, metas)
3. A inteligência da Eva monta a arquitetura e treina o agente com o conhecimento do seu negócio
4. Canais integrados e bateria de validação
5. Você aprova e a IA entra no ar, **em até 24 horas** depois das etapas 1 e 2

**Decidido em 25/09:**
- No site, quem monta a arquitetura é **a Eva IA**. "Super-Eva" fica como nome interno
- A frase da implantação é **"montada pela Eva IA, validada por especialistas"**, já aplicada no site

## 9. Próximo passo

Fase 2, branding, começando pela decisão de cor: o site é rosa→laranja e o app é ciano `#07DAFF`.
