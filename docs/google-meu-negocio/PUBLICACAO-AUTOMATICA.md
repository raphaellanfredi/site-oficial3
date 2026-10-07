# Publicação automática dos posts no Google (com aprovação)

## Como funciona

1. **Segunda, 8h52:** a rotina escreve o post e salva em `fila/AAAA-MM-DD.json` com `"status": "pendente"`. Você recebe o texto na conversa.
2. **Você responde "aprovado"**, ou pede ajustes. Com a aprovação, o arquivo passa para `"status": "aprovado"`.
3. **O GitHub Actions**, que roda no servidor, envia o post aprovado para o webhook do n8n.
4. **O n8n publica** no Perfil da Empresa no Google.

Nada é publicado sem o seu "aprovado".

---

## Passo 1: pedir acesso à API do Perfil da Empresa (Google Cloud)

O Google só libera essa API depois de um pedido. Até lá, a cota é zero e nada funciona.

1. Entre em **console.cloud.google.com** com a conta dona do projeto que o n8n já usa (o mesmo do Google Agenda).
2. No topo, confira o projeto e anote o **número do projeto**: **Painel → Informações do projeto → Número do projeto**.
3. Abra a página de pré-requisitos da API: pesquise no Google por **"Google Business Profile API prerequisites"**. Na página da documentação oficial, use o link **"Request access to the API"** (ou **"GBP API contact form"**) e escolha a opção **"Application for Basic API Access"**.
4. Preencha:
   - **Número do projeto:** o do passo 2
   - **E-mail:** o da conta que é proprietária do Perfil da Empresa da Eva
   - **Site:** `https://www.evainteligencia.com.br`
   - **Uso:** *"Publicar posts semanais no Perfil da Empresa da própria empresa (Eva Inteligência), a partir de um fluxo interno com aprovação humana."*
5. Envie e aguarde o e-mail do Google. Costuma levar alguns dias.

**Depois da aprovação**, em **APIs e serviços → Biblioteca**, ative:
- **My Business Account Management API**
- **My Business Business Information API**
- **Google My Business API**, a que publica posts

Conferência: em **APIs e serviços → Cotas**, a cota dessas APIs deixa de ser 0.

## Passo 2: credencial OAuth no Google Cloud

Se o projeto já tem um Client ID OAuth usado pelo n8n, aproveite o mesmo.

1. **Google Auth Platform → Público-alvo:** confira se a conta dona do perfil está como usuário de teste, ou se o app está publicado.
2. **Google Auth Platform → Acesso a dados → Adicionar escopo:** `https://www.googleapis.com/auth/business.manage`
3. **Clientes → seu Client ID (Aplicativo da Web) → URIs de redirecionamento autorizados:** adicione, sem remover os que já existem:
   ```
   https://n8n.evainteligencia.com.br/rest/oauth2-credential/callback
   ```
4. Copie o **Client ID** e o **Client Secret**.

## Passo 3: fluxo no n8n

1. No n8n: **Workflows → Importar do arquivo** e escolha `docs/google-meu-negocio/n8n-publicar-post.json`.
2. **Nó "Recebe post aprovado" (Webhook):**
   - Em **Authentication → Header Auth**, crie uma credencial com **Name** `X-Eva-Token` e **Value** igual a uma senha longa que você inventar. Guarde essa senha para o passo 4.
   - Copie a **Production URL** do webhook.
3. **Nó "Publica no Perfil da Empresa" (Google Business Profile → Post → Create):**
   - Credencial **Google Business Profile OAuth2 API**, com o Client ID e o Client Secret do passo 2. Clique em **Connect** e entre com a conta dona do perfil.
   - **Account** e **Location:** escolha a Eva Inteligência nas listas.
   - **Summary:** `{{ $json.body.texto }}`
   - Em **Additional Fields**, adicione o botão (**Call to Action**) com o tipo `{{ $json.body.botao }}` e a URL `{{ $json.body.link }}`. Se o nó tiver um campo de mídia, use `{{ $json.body.imagem }}`.
   - Os nomes exatos dos campos podem variar com a versão do n8n. Confira na tela. Se o nó não tiver o campo de imagem, me avise que eu troco por uma chamada HTTP com a mesma credencial.
4. **Ative** o fluxo (botão no canto superior direito).

## Passo 4: segredos no GitHub

No repositório **raphaellanfredi/site-oficial3**: **Settings → Secrets and variables → Actions → New repository secret**. Crie dois:

| Nome | Valor |
|---|---|
| `GBP_WEBHOOK_URL` | a Production URL do webhook (passo 3) |
| `GBP_WEBHOOK_TOKEN` | a senha do Header Auth (passo 3) |

Não mande esses valores pela conversa: eles ficam só no GitHub.

## Passo 5: teste

Me avise quando os passos 1 a 4 estiverem prontos. Eu coloco um post de teste na fila. Você aprova, e conferimos juntos se ele apareceu no perfil.
