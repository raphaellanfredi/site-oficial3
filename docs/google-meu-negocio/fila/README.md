# Fila de posts do Google

Um arquivo por post, com o nome `AAAA-MM-DD.json` (data do post):

```json
{
  "status": "pendente",
  "data": "2026-10-12",
  "texto": "Texto do post, até 1.500 caracteres.",
  "botao": "LEARN_MORE",
  "link": "https://www.evainteligencia.com.br/?utm_source=google&utm_medium=organic&utm_campaign=perfil_empresa&utm_content=post_2026-10-12",
  "imagem": "https://www.evainteligencia.com.br/gbp/post-2-garantia.png"
}
```

- `status`: `pendente` (aguardando aprovação do Raphael) → `aprovado` (sai na hora) ou `recusado`.
- Quando um arquivo com `"status": "aprovado"` chega na `main`, o workflow
  `.github/workflows/publish-google-post.yml` envia o post ao n8n, que
  publica no Perfil da Empresa. Cada post é enviado uma vez só.
- `imagem` precisa ser um endereço público: as imagens de `eva-next/public/gbp/`
  e `eva-next/public/og/` ficam em `https://www.evainteligencia.com.br/gbp/…` e `/og/…`.
- `botao`: `LEARN_MORE` (Saiba mais), `CALL` (Ligar agora), `BOOK` (Reservar),
  `ORDER`, `SHOP` ou `SIGN_UP`. Com `CALL`, o link é ignorado.
