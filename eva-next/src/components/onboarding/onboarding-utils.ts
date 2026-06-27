import { FormData, OBJECTIVE_LABELS, PRESETS, ScheduleValue, ToggleState } from "./onboarding-data";

export function asString(v: FormData[string]): string {
  return typeof v === "string" ? v : "";
}

export function asSchedule(v: FormData[string]): ScheduleValue {
  if (v && typeof v === "object" && "dias" in v) return v as ScheduleValue;
  return { dias: "Segunda a sexta", inicio: "08:00", fim: "18:00" };
}

export function asToggleState(v: FormData[string]): ToggleState {
  if (v && typeof v === "object" && !("dias" in v)) return v as ToggleState;
  return {};
}

export function deriveFlowDraft(data: FormData): string {
  const obj = asString(data.objetivo_principal);
  const canalLabel = asString(data.canal)
    .split(",")
    .filter(Boolean)
    .map((c) => (c === "whatsapp" ? "WhatsApp" : c === "instagram" ? "Instagram Direct" : c))
    .join(" e ");
  const empresa = asString(data.nome_empresa) || "a empresa";
  const agente = asString(data.nome_agente) || "o agente";

  const openers: Record<string, string> = {
    sdr: `1. ${agente} se apresenta e entende o interesse do lead\n2. Coleta nome e contato\n3. Faz 2-3 perguntas para entender a necessidade\n4. Indica o produto/serviço mais adequado\n5. Propõe agendar uma conversa com um consultor`,
    suporte: `1. ${agente} se apresenta e pergunta como pode ajudar\n2. Identifica o tipo de problema/dúvida\n3. Responde com base no que foi cadastrado\n4. Confirma se a dúvida foi resolvida\n5. Se não resolver, encaminha para atendimento humano`,
    agendamento: `1. ${agente} se apresenta e pergunta o que o cliente deseja agendar\n2. Coleta nome, contato e serviço desejado\n3. Apresenta horários disponíveis (ou direciona para confirmação humana)\n4. Confirma o agendamento\n5. Reforça local/horário e se despede`,
    outro: `1. ${agente} se apresenta e explica como pode ajudar\n2. Coleta nome e contato\n3. Responde dúvidas com base no que foi cadastrado\n4. Encaminha para o próximo passo combinado\n5. Encerra ou transfere para um humano se necessário`,
  };

  return `Canal: ${canalLabel || "a definir"}\nNegócio: ${empresa}\n\n${openers[obj] || openers.outro}\n\n(Este é um rascunho — edite livremente para refletir como ${empresa} realmente conversa com clientes.)`;
}

export function buildHandoffMessages(data: FormData) {
  const empresa = asString(data.nome_empresa) || "nossa equipe";
  const sched = asSchedule(data.horario_atendimento);
  const horario = sched.dias ? `${sched.dias}, das ${sched.inicio} às ${sched.fim}` : "nosso horário comercial";
  return {
    dentro: "Entendido! Vou te conectar com um de nossos atendentes agora. Um momento 😊",
    fora: `Nosso atendimento humano funciona em ${horario}. Vou registrar seu contato e alguém de ${empresa} vai te responder assim que possível 😊`,
  };
}

export function getPresetItems(data: FormData, presetGroup: string): string[] | null {
  const obj = asString(data.objetivo_principal);
  if (!obj || !PRESETS[obj]) return null;
  return PRESETS[obj][presetGroup];
}

export function toggleListToBullets(data: FormData, key: string, presetGroup: string): string {
  const obj = asString(data.objetivo_principal) && PRESETS[asString(data.objetivo_principal)] ? asString(data.objetivo_principal) : "outro";
  const items = PRESETS[obj][presetGroup];
  const state = asToggleState(data[key]);
  const kept = items.filter((_, idx) => state[idx] !== false);
  return kept.length ? kept.map((i) => "— " + i).join("\n") : "— (nenhum item selecionado)";
}

export function buildOutput(data: FormData): string {
  const canalMap: Record<string, string> = { whatsapp: "WhatsApp", instagram: "Instagram Direct" };
  const canais = asString(data.canal)
    .split(",")
    .filter(Boolean)
    .map((c) => canalMap[c] || c)
    .join(" + ");
  const accessLabel = asString(data.tipo_acesso) === "admin" ? "ADMIN — controle total" : "USER — acesso padrão";
  const objetivoLabel = OBJECTIVE_LABELS[asString(data.objetivo_principal)] || "—";
  const objetivoDetalhe = asString(data.objetivo_principal) === "outro" ? asString(data.objetivo_outro_detalhe) : "";
  const sched = asSchedule(data.horario_atendimento);
  const horarioStr = sched.dias ? `${sched.dias}, das ${sched.inicio || "—"} às ${sched.fim || "—"}` : "—";
  const handoff = buildHandoffMessages(data);

  return `╔══════════════════════════════════════════════════════════════╗
  EVA INTELIGÊNCIA — AGENT ONBOARDING BRIEF
╚══════════════════════════════════════════════════════════════╝

━━━ [CADASTRO / REGISTRATION] ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nome do usuário : ${asString(data.nome_usuario) || "—"}
E-mail          : ${asString(data.email) || "—"}
Nível de acesso : ${accessLabel}

━━━ [DATA POINT 1 — BUSINESS / SERVICE] ━━━━━━━━━━━━━━━━━━━━
Empresa : ${asString(data.nome_empresa) || "—"}
Descrição:
${asString(data.descricao_negocio) || "—"}

━━━ [DATA POINT 2 — PRIMARY GOAL] ━━━━━━━━━━━━━━━━━━━━━━━━━━
${objetivoLabel}${objetivoDetalhe ? " — " + objetivoDetalhe : ""}

━━━ [DATA POINT 3 — CHANNEL] ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${canais || "—"}

━━━ [DATA POINT 4 — PERSONA] ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nome do agente : ${asString(data.nome_agente) || "—"}
Tom e personalidade:
${asString(data.tom_personalidade) || "—"}

━━━ [DATA POINT 5 — OUT OF SCOPE] ━━━━━━━━━━━━━━━━━━━━━━━━━
${toggleListToBullets(data, "out_scope", "out_scope")}

━━━ [DATA POINT 6 — FLOWS & BUSINESS RULES] ━━━━━━━━━━━━━━━━

IN SCOPE:
${toggleListToBullets(data, "in_scope", "in_scope")}

MAIN FLOW:
${asString(data.fluxo_principal) || "—"}

ROUTING RULES:
${toggleListToBullets(data, "routing_rules", "routing_rules")}

OPENING MESSAGE:
${asString(data.msg_abertura) || "—"}

━━━ [DATA POINT 7 — ESCALATION CONDITIONS] ━━━━━━━━━━━━━━━━
Gatilhos de escalada:
${toggleListToBullets(data, "escalation_triggers", "escalation_triggers")}

Horário de atendimento: ${horarioStr}

Mensagem (dentro do horário):
${handoff.dentro}

Mensagem (fora do horário):
${handoff.fora}

━━━ [PRODUCT KNOWLEDGE — AUTHORIZED FACTS ONLY] ━━━━━━━━━━━
${asString(data.conhecimento_produto) || "—"}

━━━ [ADDITIONAL NOTES] ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${asString(data.notas_adicionais) || "Nenhuma."}

══════════════════════════════════════════════════════════════
  FIM DO BRIEF — PRONTO PARA GERAÇÃO DO PROMPT EVA
══════════════════════════════════════════════════════════════`;
}

export function slugify(str: string | undefined): string {
  return (
    String(str || "cliente")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase() || "cliente"
  );
}

const ONBOARDING_WEBHOOK_URL = "https://webhookn8n.evainteligencia.com.br/webhook/onboarding-eva";

export async function sendBriefToWebhook(data: FormData, text: string): Promise<void> {
  try {
    await fetch(ONBOARDING_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: new Date().toISOString(),
        brief: text,
        data,
      }),
    });
  } catch (err) {
    console.error("Falha ao enviar brief para o webhook de onboarding", err);
  }
}

export function autoDownloadBrief(data: FormData, text: string): void {
  const today = new Date().toISOString().slice(0, 10);
  const filename = `Eva-Brief_${slugify(asString(data.nome_empresa))}_${slugify(asString(data.nome_agente))}_${today}.txt`;
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
