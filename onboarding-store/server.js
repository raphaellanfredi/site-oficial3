const express = require("express");
const Database = require("better-sqlite3");

const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || "/data/submissions.db";
const API_KEY = process.env.API_KEY || "";
const ADMIN_USER = process.env.ADMIN_USER || "";
const ADMIN_PASS = process.env.ADMIN_PASS || "";

const db = new Database(DB_PATH);
db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    submitted_at TEXT NOT NULL,
    nome_empresa TEXT,
    nome_agente TEXT,
    email TEXT,
    brief_text TEXT,
    raw_json TEXT NOT NULL,
    received_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);

const app = express();
app.use(express.json({ limit: "1mb" }));

app.get("/health", (req, res) => res.json({ ok: true }));

app.post("/submit", (req, res) => {
  if (!API_KEY || req.headers["x-api-key"] !== API_KEY) {
    return res.status(401).json({ error: "unauthorized" });
  }
  const { submittedAt, brief, data } = req.body || {};
  if (!data) return res.status(400).json({ error: "missing data" });

  db.prepare(
    `INSERT INTO submissions (submitted_at, nome_empresa, nome_agente, email, brief_text, raw_json)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).run(
    submittedAt || new Date().toISOString(),
    data.nome_empresa || "",
    data.nome_agente || "",
    data.email || "",
    brief || "",
    JSON.stringify(req.body)
  );

  res.json({ ok: true });
});

function checkBasicAuth(req, res, next) {
  const auth = req.headers.authorization;
  const fail = () => {
    res.set("WWW-Authenticate", 'Basic realm="Eva Onboarding Admin"');
    return res.status(401).send("Autenticação necessária");
  };
  if (!auth || !auth.startsWith("Basic ")) return fail();
  const [user, pass] = Buffer.from(auth.slice(6), "base64").toString().split(":");
  if (!ADMIN_USER || user !== ADMIN_USER || pass !== ADMIN_PASS) return fail();
  next();
}

function escapeHtml(str) {
  return String(str || "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

app.get("/admin", checkBasicAuth, (req, res) => {
  const rows = db.prepare("SELECT id, received_at, nome_empresa, nome_agente, email FROM submissions ORDER BY id DESC").all();
  const rowsHtml = rows
    .map(
      (r) => `<tr>
        <td>${r.id}</td>
        <td>${escapeHtml(r.received_at)}</td>
        <td>${escapeHtml(r.nome_empresa)}</td>
        <td>${escapeHtml(r.nome_agente)}</td>
        <td>${escapeHtml(r.email)}</td>
        <td><a href="/admin/${r.id}/brief">ver brief</a></td>
      </tr>`
    )
    .join("\n");

  res.send(`<!doctype html>
<html lang="pt-br">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Eva — Onboarding Submissions</title>
<style>
  body { font-family: -apple-system, Inter, sans-serif; background: #fafafa; color: #111; margin: 0; padding: 24px; }
  h1 { font-size: 1.25rem; margin-bottom: 4px; }
  p.sub { color: #666; margin-top: 0; margin-bottom: 20px; font-size: 0.9rem; }
  table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
  th, td { padding: 10px 14px; text-align: left; border-bottom: 1px solid #eee; font-size: 0.9rem; }
  th { background: #111; color: #fff; font-weight: 600; }
  tr:last-child td { border-bottom: none; }
  a { color: #FF0080; font-weight: 600; }
  .count { font-weight: 700; color: #FF0080; }
</style>
</head>
<body>
  <h1>Eva — Respostas de Onboarding</h1>
  <p class="sub">Cópia direta e independente do webhook — <span class="count">${rows.length}</span> registros salvos.</p>
  <table>
    <thead><tr><th>ID</th><th>Recebido em (UTC)</th><th>Empresa</th><th>Agente</th><th>E-mail</th><th></th></tr></thead>
    <tbody>${rowsHtml || '<tr><td colspan="6">Nenhuma resposta ainda.</td></tr>'}</tbody>
  </table>
</body>
</html>`);
});

app.get("/admin/:id/brief", checkBasicAuth, (req, res) => {
  const row = db.prepare("SELECT brief_text FROM submissions WHERE id = ?").get(req.params.id);
  if (!row) return res.status(404).send("Não encontrado");
  res.type("text/plain; charset=utf-8").send(row.brief_text);
});

app.listen(PORT, () => console.log(`eva-onboarding-store listening on ${PORT}`));
