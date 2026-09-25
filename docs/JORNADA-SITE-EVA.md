# Eva — Jornada de reconstrução do site oficial

**Versão:** 25/09/2026 · **Base:** `Eva - Brief completo para reconstrução do site` + auditoria do código em `eva-next/`

Ordem que você definiu, e que este plano respeita:

```
Fase 0  Estancar e medir          (pré-requisito, 1 semana)
Fase 1  Estrutura de páginas      + jornada do cliente
Fase 2  Branding                  (sistema visual completo)
Fase 3  Templates                 (componentes e modelos de página)
Fase 4  Motion                    (transições guiadas pela jornada)
Fase 5  Argumentação e copy       (argumento primeiro, texto depois)
Fase 6  Construção e QA
Fase 7  Deploy e pós-lançamento
```

Cada fase termina num **portão de aprovação**. A próxima só começa quando você aprova a anterior. É isso que impede de refazer trabalho: não se desenha antes de a estrutura estar fechada, e não se escreve texto final antes de o template estar definido.

---

## Ponto de partida — o que o código mostra hoje

Levantamento feito no repositório. É a linha de base para medir o "100 vezes".

| área | situação encontrada | onde |
|---|---|---|
| **Promessa proibida no ar** | "Disparo em massa ilimitado" nos cartões PRO e BLACK **e também no checkout**, que o brief não cita | `plans/PlansCards.tsx:14,27` · `checkout/checkout-data.ts:47,69` |
| **Argumento de banimento** | "Zero banimento." em Campanhas | `products/ProductsAutomation.tsx:23` |
| **Prazo de suporte errado** | "resposta em até 2h" | `eva-club/EvaClub.tsx:33` |
| **"Kanban" visível** | no texto alternativo da imagem do CRM (lido pelo Google e por leitor de tela) | `products/ProductsCRM.tsx:103` |
| **Sistema visual** | não existe. `tailwind.config.js` está vazio; cores fixas espalhadas; **mais de 300 `style={{}}` inline** | `globals.css`, componentes |
| **Identidade dividida** | site em gradiente rosa→laranja (`#FF0080 → #FF6B00`); app instalado em ciano `#07DAFF` | `globals.css` · manifest |
| **Páginas** | 7 rotas (`/`, `/produtos`, `/planos`, `/afiliados`, `/eva-club`, `/checkout`, `/novo-cliente`). A arquitetura aprovada tem 16 | `src/app/` |
| **SEO técnico** | sem `sitemap.xml`, `robots.txt`, imagem de compartilhamento (OG) nem dados estruturados. Home sem metadata própria | `src/app/` |
| **404 falso** | o nginx devolve a home com status 200 para qualquer URL inexistente (`try_files … /index.html`). O Google trata como conteúdo duplicado | `deploy/nginx.conf` |
| **HTTPS do site** | confirmado em 25/09/2026: o domínio redireciona sozinho para `https://` | `deploy/eva_site.yaml` |
| **Medição** | nenhum analytics. Não há como saber de onde vem o cliente nem onde ele desiste | — |
| **Motion** | GSAP + Lenis já instalados; histórico de correções de instabilidade no mobile | `lib/gsap.ts`, commits recentes |

**O que já está bom e fica:** Next.js com exportação estática (rápido e barato de hospedar), deploy automático no VPS, checkout com Asaas, onboarding com backup próprio, e o tom de voz.

---

## O que "100 vezes melhor" significa aqui

Sem número, "melhor" vira opinião. Estas são as metas que o site novo precisa bater. As de conversão só ganham valor real depois da Fase 0, quando existir a medição de hoje para comparar.

| dimensão | meta |
|---|---|
| **Verdade** | zero afirmação proibida pelo brief (seção 3) em qualquer página, checkout incluso. Checado por script no build |
| **Cobertura de produto** | os 5 recursos que "mais doem" (brief 5.8) com página ou seção própria; os ❌ do catálogo vendidos em algum lugar |
| **Velocidade** | Lighthouse ≥ 95 em Performance no celular; LCP < 2,0 s; CLS < 0,05; INP < 200 ms |
| **Acessibilidade** | Lighthouse Acessibilidade = 100; contraste AA em todo texto; site inteiro navegável por teclado; animação desliga com "reduzir movimento" |
| **SEO** | 16 páginas indexáveis, cada uma com título, descrição e imagem de compartilhamento próprios; 404 real; sitemap |
| **Conversão** | funil medido de ponta a ponta: visita → página de produto → planos → clique no WhatsApp ou checkout → onboarding concluído |
| **Consistência** | 0 cor ou tamanho fora dos tokens; 0 `style={{}}` para cor, espaço ou tipografia |

---

## Fase 0 — Estancar e medir

**Por que antes de tudo:** a reconstrução leva semanas, e o site atual continua vendendo durante esse tempo. Três coisas não podem esperar: o "ilimitado" cria passivo a cada venda, e sem medição você não terá como provar que o site novo converte mais.

**Entregáveis**
1. Hotfix no site atual das correções 1, 2, 3 e 8 do brief, **mais o checkout** (`checkout-data.ts`) e o texto alternativo do CRM
2. Analytics instalado com eventos: clique em cada WhatsApp (comercial e suporte, separados), início do checkout, pagamento, início e fim do onboarding, rolagem até a tabela de planos
3. Confirmar HTTPS no domínio e corrigir o 404 falso do nginx
4. Uma foto de hoje: Lighthouse de cada página, capturas de tela e duas a quatro semanas de dados de conversão rodando antes do lançamento

**Portão:** nenhuma promessa proibida no ar; eventos chegando no painel de analytics.

**Decisões suas nesta fase:** qual ferramenta de analytics (sugestão: Plausible ou GA4 com consentimento LGPD).

---

## Fase 1 — Estrutura de páginas e jornada do cliente

**Objetivo:** decidir o que existe, para quem, em que ordem e com qual próximo passo, antes de qualquer pixel.

### 1.1 Quem visita

| perfil | o que quer saber | onde deve terminar |
|---|---|---|
| **Dono de pequena e média empresa** (principal) | "isso resolve meu atendimento sem eu ter trabalho?" | WhatsApp comercial ou checkout |
| **Gestor de atendimento** | "minha equipe continua no controle? tem relatório?" | `/produtos/gestao` → planos |
| **Quem avalia tecnicamente** | "integra com meu sistema? é seguro?" | `/produtos/ia` (funções, MCP) → planos |
| **Afiliado** | "quanto ganho indicando?" | cadastro de afiliado |
| **Parceiro revendedor** | "posso vender com minha marca?" | contato de parceria |
| **Cliente atual** | "como falo com o suporte? como uso isso?" | `/suporte`, Central de Ajuda, app |

### 1.2 A jornada em oito etapas

```
DESCOBRE → ENTENDE → ACREDITA → COMPARA → DECIDE → COMPRA → ENTRA → CRESCE
   /        /produtos   /sobre     /planos    implantação  /checkout  /novo-cliente  /eva-club
            /eva-ia     números    FAQ        validação              /suporte       /afiliados
            subpáginas  depoimentos           90 dias                               /parceiros
```

Para cada etapa a Fase 1 define: a pergunta que o visitante tem na cabeça, a página que responde, a prova que sustenta, e **um único próximo passo principal**.

### 1.3 Entregáveis
1. **Mapa do site final**: as 16 rotas do brief (seção 9), mais as que já existem (`/checkout`, `/novo-cliente`) e páginas legais
2. **Menu e rodapé**: agrupamento (Produto · Eva IA · Planos · Comunidade · Empresa · Suporte), rótulos, e os dois WhatsApp identificados
3. **Wireframe de cada página**: lista ordenada de blocos, sem visual. Exemplo para `/planos`: hero → tabela (destaque em conexões e usuários) → implantação em 5 etapas → "Validada antes, acompanhada depois" → o que é e não é cobrado → FAQ → CTA
4. **Mapa de links internos**: toda página aponta para a próxima etapa da jornada; nenhum beco sem saída; nenhum `#`
5. **Plano de chamadas para ação**: o botão principal e o secundário de cada página, e para onde cada um vai

**Portão:** você aprova o mapa, o menu e os 18 wireframes em texto.

**Decisões suas nesta fase** (do brief, seção 4.3 e 12): oferecer ou não o teste de 15 dias; se a CTA principal é WhatsApp, checkout ou os dois conforme a página.

---

## Fase 2 — Branding

**Objetivo:** transformar "um site bonito" num **sistema** que qualquer página nova segue sem improviso.

### 2.1 Decisão que abre a fase
O site é rosa→laranja; o app é ciano `#07DAFF`. A Eva IA é a mesma inteligência no site, no painel e no celular (brief 1.2), então a cor precisa ser uma só. Três caminhos:
- **A.** manter rosa→laranja e trocar a cor do app
- **B.** migrar o site para o ciano do app
- **C.** paleta com os dois papéis: uma cor da marca e outra reservada para "a Eva IA está agindo aqui"

Minha recomendação é **C**: a cor da IA vira um sinal. Toda vez que o visitante vê o ciano, ele sabe que é a Eva IA trabalhando. Isso traduz visualmente a ideia de "onipresente".

### 2.2 Entregáveis
1. **Tokens de design** (em `tailwind.config.js` e variáveis CSS): cores com papéis (fundo, superfície, texto, borda, marca, IA, sucesso, alerta), tipografia (escala, pesos, altura de linha), espaçamento, raios, sombras, e os tokens de movimento que a Fase 4 usa
2. **Tipografia**: par de fontes (título e texto), com escala para celular e desktop
3. **Linguagem de ícones**: um único conjunto, mesma espessura de traço (hoje há ícones próprios em `products/icons.tsx`)
4. **Direção de imagem**: telas reais do painel em moldura padronizada, sem banco de imagem genérico
5. **Assinatura visual da Eva IA**: o elemento gráfico que aparece sempre que a IA age (brilho, pulso, cursor, onda de voz)
6. **Modo escuro**: decidir se existe; se sim, definido nos tokens desde já
7. **Guia de marca de uma página**: logo, espaço de respiro, o que não fazer

**Portão:** você aprova a paleta, as fontes e três telas de referência (home, planos, uma página de produto) aplicadas com os tokens.

---

## Fase 3 — Templates

**Objetivo:** as 18 páginas saírem de **5 modelos de página** e cerca de **25 blocos**, não de 18 desenhos diferentes.

### 3.1 Modelos de página
| modelo | usado em |
|---|---|
| **Narrativa** (conta uma história com rolagem) | `/`, `/eva-ia`, `/sobre` |
| **Produto** (recurso por recurso, com tela do painel) | `/produtos/ia`, `/crm`, `/automacao`, `/gestao`, `/central-de-ajuda` |
| **Índice** (visão geral que leva às subpáginas) | `/produtos` |
| **Oferta** (preço, comparação, FAQ, fechamento) | `/planos`, `/afiliados`, `/parceiros`, `/eva-club` |
| **Utilitário** (informação direta, pouco movimento) | `/suporte`, legais, 404, `/checkout`, `/novo-cliente` |

### 3.2 Blocos (biblioteca)
Hero (4 variações) · cena de dor · pilares · como funciona em etapas · recurso com tela · grade de recursos · canais · integrações · números · depoimento · case · tabela de planos · linha do tempo da implantação · "validada antes, acompanhada depois" · simulador de comissão · comparação · FAQ · CTA final · faixa de confiança · barra de navegação · rodapé · demonstração de conversa (o `ChatSimulator` evoluído) · demonstração da Eva IA no painel · tabela de SLA de suporte · formulário.

### 3.3 Entregáveis
1. Cada bloco como componente React, só com tokens, sem `style={{}}` de cor, espaço ou tipo
2. **Conteúdo separado do componente**: textos, planos, preços e comissões num arquivo de dados único (hoje os preços estão duplicados entre `PlansCards.tsx` e `checkout-data.ts`, e foi assim que o "ilimitado" escapou para o checkout)
3. Página interna de vitrine (não indexada) mostrando todos os blocos, para você aprovar sem precisar abrir cada página
4. Cada bloco testado em 360 px, 768 px e 1440 px

**Portão:** você aprova a vitrine de blocos.

---

## Fase 4 — Motion: transições que acompanham a jornada

**Princípio:** animação aqui não é enfeite. Cada movimento responde a uma pergunta da etapa em que o visitante está. Se não responde, sai.

### 4.1 Movimento por etapa da jornada
| etapa | intenção | exemplo |
|---|---|---|
| **Descobre** | prender em 3 segundos | hero com a conversa das 23h acontecendo ao vivo |
| **Entende** | mostrar como funciona, não contar | a mesma mensagem entrando por WhatsApp, Instagram e e-mail e caindo numa única tela de Conversas |
| **Acredita** | dar peso à prova | números contando uma vez, depoimento surgindo com calma |
| **Compara** | clareza acima de tudo | quase nenhum movimento; destaque suave em conexões e usuários ao passar o dedo |
| **Decide** | reduzir o medo | as 5 etapas da implantação preenchendo em sequência até o "no ar em 24 horas" |
| **Compra / Entra** | segurança e progresso | barra de etapas, confirmação clara, nada que distraia |

### 4.2 Transição entre páginas
Continuidade entre páginas com a **View Transitions API** (suportada no Next.js 15 como recurso experimental): o cartão do produto clicado em `/produtos` se expande e vira o topo de `/produtos/ia`; o plano escolhido em `/planos` chega destacado no `/checkout`. O visitante sente que está avançando numa trilha, não pulando entre sites. Nos navegadores sem suporte, a troca é instantânea, sem quebra.

### 4.3 Sistema de movimento (tokens da Fase 2)
- **Durações:** 150 ms (resposta ao toque) · 300 ms (entrada de elemento) · 600 ms (transição de seção) · nada acima de 900 ms
- **Curvas:** uma de entrada, uma de saída, uma para elementos que se movem juntos
- **Regras:** só `transform` e `opacity` (não custam desempenho); nada fixado com rolagem (pin) no celular abaixo de 768 px, que é a origem das instabilidades já corrigidas; tudo desliga com "reduzir movimento"; nenhuma animação atrasa o LCP

**Portão:** protótipo de três momentos (hero da home, passagem `/produtos` → `/produtos/ia`, linha do tempo da implantação) aprovado num celular real.

---

## Fase 5 — Argumentação e copy

**Por que argumento antes do texto:** a copy é a última camada. Se o argumento está certo, o texto sai rápido; se não está, reescreve-se infinitamente.

### 5.1 Argumentação
1. **Mensagem central** em uma frase, a partir do posicionamento do brief (1.4): *não é chatbot, é uma funcionária treinada, entregue pronta em 24 horas*
2. **Três pilares de prova:**
   - **Pronta:** implantação feita por especialistas, você não programa nada
   - **Não erra:** validada antes do go-live, acompanhada por 90 dias depois (brief seção 7)
   - **Resolve, não só responde:** funções personalizadas, agenda nativa, Eva IA no painel
3. **Mapa de objeções**, cada uma com a resposta e a página onde aparece:
   | objeção | resposta | onde |
   |---|---|---|
   | "IA vai falar besteira com meu cliente" | bateria de validação + admite que não sabe e escala | home, `/produtos/ia`, `/planos` |
   | "Perco o controle do atendimento" | a IA sai de cena quando um humano entra e volta quando ele sai | `/produtos/ia` |
   | "Implantação é cara" | é serviço com 5 etapas, não taxa; parcelável | `/planos` |
   | "E se eu quiser sair ou mudar de plano?" | sem fidelidade; downgrade não apaga atendente nem conexão | FAQ de `/planos` |
   | "Vou pagar por mensagem?" | atendimento não é cobrado por mensagem; só disparo é | `/planos` |
   | "Não tenho tempo de configurar" | você não programa nada, recebe pronto | home, `/planos` |
   | "E quando der problema?" | primeira resposta em até 1 hora, 15 minutos se parou | `/suporte`, `/eva-club` |
4. **Arquitetura da prova**: onde entram os números (300+ empresas, 20M+ atendimentos, 99,9%) e os depoimentos, sempre anônimos por estratégia (nenhum cliente é nomeado no site)
5. **Upgrade vendido pelo que aperta**: usuários e conexões (brief 4.1), não atendimentos

### 5.2 Copy
1. Texto de cada bloco de cada página, escrito sobre o wireframe aprovado e no tamanho que o template comporta
2. Microcopy: botões, rótulos, mensagens de erro do checkout e do onboarding, 404
3. SEO: título e descrição de cada página, texto alternativo de cada imagem
4. **Checagem automática no build**: script que falha a compilação se encontrar qualquer termo proibido do brief ("ilimitado", "banimento", "bloqueio", "Mega", "Captain", "Kanban", preço por mensagem, "2h")

**Portão:** você aprova o texto de cada página no próprio template (não em documento solto), página por página, na ordem da seção 11 do brief.

---

## Fase 6 — Construção e QA

Construção na ordem do brief (seção 11), para que o que dá dinheiro chegue primeiro:

| sprint | páginas |
|---|---|
| 1 | casca (menu, rodapé, tokens, blocos base) + **`/planos`** + checkout alinhado |
| 2 | **`/afiliados`** com a escada nova e simulador corrigido |
| 3 | **`/produtos`** + as 4 subpáginas |
| 4 | **`/eva-ia`** + **`/central-de-ajuda`** |
| 5 | **`/parceiros`** + **`/suporte`** |
| 6 | **`/sobre`** + home refeita + 404 + legais |

**QA por página, antes de sair do sprint**
- Conferência contra o brief: fatos (seção 2), proibições (seção 3), dados dos planos (seção 4)
- Lighthouse nas metas do topo, em celular
- Teste em iPhone e Android reais, Safari e Chrome
- Todos os links funcionando; eventos de analytics disparando
- Leitor de tela e navegação por teclado

---

## Fase 7 — Deploy e pós-lançamento

1. **Ambiente de homologação** num subdomínio (ex.: `novo.evainteligencia.com.br`), fora do índice do Google, para você aprovar o site inteiro antes de trocar
2. **Redirecionamentos 301** de toda URL antiga que mudar, para não perder posição no Google nem links já compartilhados
3. **SEO de lançamento**: `sitemap.xml`, `robots.txt`, dados estruturados (Organização, Produto com preços, FAQ), envio ao Google Search Console
4. **Troca** no domínio principal pelo fluxo de deploy que já existe (push na `main` → VPS)
5. **Monitoramento**: 30 dias comparando o funil novo com a linha de base da Fase 0
6. **Ciclo de melhoria**: uma revisão por mês com dados; teste A/B nas duas páginas de maior tráfego (provavelmente home e planos)

---

## Decisões que só você pode tomar

Juntei aqui para não travarem o andamento. Cada uma está marcada com a fase em que precisa estar resolvida.

| decisão | fase |
|---|---|
| Ferramenta de analytics | 0 · **decidido: GA4, no ar desde 25/09** |
| Oferecer teste de 15 dias sem cartão | 1 · **decidido: não** |
| Prazo de entrega da IA | 1 · **decidido: no ar em até 24 horas** (site atualizado em 25/09) |
| CTA principal por página: WhatsApp, checkout ou ambos | 1 · **decidido: WhatsApp fora de `/planos`, checkout em `/planos`** |
| Cor: caminho A, B ou C | 2 |
| Modo escuro: sim ou não | 2 |
| Cota de disparo por plano | 5 |
| Modelo de IA mais avançado como diferencial do BLACK | 5 |
| O que fazer com os "50% de desconto em novos produtos" do Eva Club | 5 |

---

## Próximo passo

Fase 0, item 1: o hotfix das promessas proibidas no site atual e no checkout. É pequeno, reversível, e cada dia no ar é uma venda feita com uma promessa que não se sustenta. Em paralelo, você responde as decisões da Fase 0 e da Fase 1, e eu começo o mapa do site e os wireframes em texto.
