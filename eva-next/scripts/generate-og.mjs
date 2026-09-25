// Generates the social share images (public/og/*.png, 1200x630) in the
// Gênesis style: the same particle shapes as the site's WebGL scene, the
// site's fonts and logo.
//
// Run after `npm run build` (it reads the fonts from out/), with Playwright
// available:  node scripts/generate-og.mjs
// Uses Node's built-in TypeScript type stripping to import shapes.ts.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { apple, tree, clock } from "../src/components/eden/shapes.ts";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, "public/og");
fs.mkdirSync(outDir, { recursive: true });

const css = fs
  .readdirSync(path.join(root, "out/_next/static/css"))
  .map((f) => fs.readFileSync(path.join(root, "out/_next/static/css", f), "utf8"))
  .join("");

// Pick the latin font files the build produced for each family.
function fontFaces() {
  const faces = [];
  for (const m of css.matchAll(/@font-face\{([^}]*)\}/g)) {
    const b = m[1];
    const family = /font-family:([^;]*)/.exec(b)?.[1].replace(/"/g, "");
    if (!family || /Fallback/.test(family)) continue;
    const range = /unicode-range:([^;]*)/.exec(b)?.[1] ?? "";
    if (!/u\+00\?\?|u\+0100-02ba/.test(range)) continue;
    const url = /url\(([^)]*)\)/.exec(b)[1];
    const file = fs.readFileSync(path.join(root, "out", url));
    const style = /font-style:([^;]*)/.exec(b)?.[1] ?? "normal";
    const weight = /font-weight:([^;]*)/.exec(b)?.[1] ?? "400";
    faces.push(
      `@font-face{font-family:"${family}";font-style:${style};font-weight:${weight};unicode-range:${range};src:url(data:font/woff2;base64,${file.toString("base64")}) format("woff2");}`,
    );
  }
  return faces.join("\n");
}

const logo = `data:image/webp;base64,${fs.readFileSync(path.join(root, "public/logo-eva.webp")).toString("base64")}`;

const N = 7000;
const SHAPES = { apple: apple(N), tree: tree(N), clock: clock(N) };
const pack = (s) => ({ p: Array.from(s.positions), c: Array.from(s.colors), z: Array.from(s.sizes) });

const PAGES = [
  { slug: "home", shape: "apple", kicker: "Eva · Inteligência artificial de atendimento", title: "Enquanto você vive,", fruit: "a Eva trabalha.", sub: "No ar em 24 horas, ou a implantação é por nossa conta." },
  { slug: "produtos", shape: "apple", kicker: "Produto", title: "Uma inteligência. Todos os canais.", fruit: "Uma tela.", sub: "Agente de IA, CRM, automação e gestão em oito canais." },
  { slug: "planos", shape: "tree", kicker: "Planos", title: "Escolha o tamanho do seu", fruit: "jardim.", sub: "A partir de R$ 998/mês · sem fidelidade · implantação em até 12x" },
  { slug: "eva-ia", shape: "apple", kicker: "Eva IA", title: "Pergunte à sua", fruit: "operação.", sub: "A inteligência que atende, ajuda a equipe e trabalha para você." },
  { slug: "central-de-ajuda", shape: "tree", kicker: "Central de Ajuda própria", title: "Um trabalho,", fruit: "dois resultados.", sub: "Cada artigo que você publica ensina a sua IA." },
  { slug: "afiliados", shape: "tree", kicker: "Programa de Afiliados", title: "Plante uma indicação.", fruit: "Colha todo mês.", sub: "Comissão recorrente de 5% a 30%." },
  { slug: "eva-club", shape: "tree", kicker: "Eva Club", title: "O clube de quem leva a IA", fruit: "a sério no negócio.", sub: "Todo cliente Eva é membro." },
  { slug: "suporte", shape: "clock", kicker: "Suporte", title: "Gente de verdade,", fruit: "rápido.", sub: "Primeira resposta em até 1 hora. Em 15 minutos se a operação parar." },
  { slug: "sobre", shape: "apple", kicker: "Sobre a Eva · desde 2024", title: "O assistente perfeito,", fruit: "enfim realizado.", sub: "8 anos de experiência · clientes em 5 países" },
];

const html = (page) => `<!doctype html><html><head><meta charset="utf-8"><style>
${fontFaces()}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;background:#050806;color:#F2F4F1;font-family:Inter,sans-serif;position:relative}
.glow{position:absolute;inset:0;background:radial-gradient(520px circle at 900px 300px,rgba(255,0,128,.18),transparent 60%),radial-gradient(420px circle at 120px 600px,rgba(7,218,255,.10),transparent 60%)}
canvas{position:absolute;right:0;top:0}
.copy{position:absolute;left:72px;top:64px;bottom:60px;width:640px;display:flex;flex-direction:column}
.logo{width:96px;aspect-ratio:3/1.15;overflow:hidden}.logo img{width:100%;height:100%;object-fit:cover}
.kicker{margin-top:auto;font-size:15px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#07DAFF}
h1{margin-top:18px;font-family:Sora,sans-serif;font-weight:700;font-size:64px;line-height:1.02;letter-spacing:-.045em}
.fruit{display:block;background:linear-gradient(120deg,#FF0080 10%,#FF6B00 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.sub{margin-top:24px;font-size:22px;line-height:1.4;color:#A7B5AD}
.url{margin-top:auto;font-family:"Instrument Serif",serif;font-style:italic;font-size:26px;color:#F2F4F1}
</style></head><body><div class="glow"></div><canvas id="c" width="1120" height="1260" style="width:560px;height:630px"></canvas>
<div class="copy"><div class="logo"><img src="${logo}"></div><p class="kicker">${page.kicker}</p><h1>${page.title}<span class="fruit">${page.fruit}</span></h1><p class="sub">${page.sub}</p><p class="url">evainteligencia.com.br</p></div>
<script>
(() => {
const S=${JSON.stringify(pack(SHAPES[page.shape]))};
const cv=document.getElementById("c"),g=cv.getContext("2d");
g.globalCompositeOperation="lighter";
const ry=${page.shape === "clock" ? 0.35 : 0.6},rx=-0.12,cy=Math.cos(ry),sy=Math.sin(ry),cx=Math.cos(rx),sx=Math.sin(rx);
const scale=${page.shape === "tree" ? 300 : page.shape === "clock" ? 330 : 400},ox=560,oy=${page.shape === "tree" ? 640 : 660};
for(let i=0;i<S.z.length;i++){
  let x=S.p[i*3],y=S.p[i*3+1],z=S.p[i*3+2];
  let x1=x*cy+z*sy,z1=-x*sy+z*cy; let y1=y*cx-z1*sx,z2=y*sx+z1*cx;
  const k=6.5/(6.5-z2), X=ox+x1*scale*k*0.9, Y=oy-y1*scale*k*0.9, r=Math.max(1.2,S.z[i]*2.6*k);
  const col="rgb("+Math.round(S.c[i*3]*255)+","+Math.round(S.c[i*3+1]*255)+","+Math.round(S.c[i*3+2]*255)+")";
  const gr=g.createRadialGradient(X,Y,0,X,Y,r*2.2); gr.addColorStop(0,col); gr.addColorStop(1,"rgba(0,0,0,0)");
  g.globalAlpha=0.55+0.45*Math.random(); g.fillStyle=gr; g.beginPath(); g.arc(X,Y,r*2.2,0,Math.PI*2); g.fill();
}
})();
</script></body></html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
tab.on("pageerror", (e) => console.error("page error:", e.message));
tab.on("console", (m) => m.type() === "error" && console.error("console:", m.text()));
for (const page of PAGES) {
  await tab.setContent(html(page), { waitUntil: "load" });
  await tab.evaluate(() => document.fonts.ready);
  await tab.waitForTimeout(200);
  await tab.screenshot({ path: path.join(outDir, `${page.slug}.png`) });
  console.log("og/" + page.slug + ".png");
}
await browser.close();
