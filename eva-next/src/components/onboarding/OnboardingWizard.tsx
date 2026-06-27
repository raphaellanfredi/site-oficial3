"use client";

import { useEffect, useMemo, useState } from "react";
import { FieldConfig, FormData, STEPS } from "./onboarding-data";
import {
  asSchedule,
  asString,
  asToggleState,
  autoDownloadBrief,
  buildOutput,
  deriveFlowDraft,
  getPresetItems,
  sendBriefToWebhook,
} from "./onboarding-utils";

const STORAGE_KEY = "eva-onboarding-draft";

const ACCENT = "linear-gradient(135deg, #FF0080, #FF6B00)";

function fieldVisible(field: FieldConfig, data: FormData): boolean {
  if (!field.showWhen) return true;
  return data[field.showWhen.key] === field.showWhen.equals;
}

function loadDraft(): { current: number; data: FormData } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveDraft(current: number, data: FormData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ current, data }));
  } catch {
    /* ignore */
  }
}

function clearDraft() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export default function OnboardingWizard() {
  const [booted, setBooted] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [resumeStep, setResumeStep] = useState(0);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState<FormData>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    const draft = loadDraft();
    if (draft && draft.data && Object.keys(draft.data).length > 0) {
      setResumeStep(draft.current || 0);
      setShowResume(true);
    }
    setBooted(true);
  }, []);

  const step = STEPS[current];
  const isLast = current === STEPS.length - 1;

  // Initialize auto-draft field value once its step is reached.
  useEffect(() => {
    if (!step) return;
    step.fields.forEach((f) => {
      if (f.type === "auto-draft" && data[f.key] === undefined) {
        setData((d) => ({ ...d, [f.key]: deriveFlowDraft(d) }));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  function resumeDraft() {
    const draft = loadDraft();
    if (draft) {
      setData(draft.data || {});
      setCurrent(draft.current || 0);
    }
    setShowResume(false);
  }

  function startFresh() {
    clearDraft();
    setData({});
    setCurrent(0);
    setShowResume(false);
  }

  function setField(key: string, value: FormData[string]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function clearError(key: string) {
    setErrors((e) => {
      if (!(key in e)) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  }

  function validateStep(): boolean {
    const nextErrors: Record<string, string> = {};
    step.fields.forEach((f) => {
      if (!fieldVisible(f, data)) return;
      const value = data[f.key];

      if (f.type === "role" || f.type === "chips") {
        if (f.req && !asString(value)) nextErrors[f.key] = "Selecione uma opção para continuar.";
      } else if (f.type === "pills") {
        if (f.req && !asString(value)) nextErrors[f.key] = "Selecione ao menos uma opção.";
      } else if (f.type === "schedule" || f.type === "toggle-list") {
        // always considered filled (has sensible defaults)
      } else {
        if (f.req && !asString(value).trim()) nextErrors[f.key] = "Este campo é obrigatório.";
      }
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function goNext() {
    if (!validateStep()) return;
    if (isLast) {
      const output = buildOutput(data);
      autoDownloadBrief(data, output);
      void sendBriefToWebhook(data, output);
      clearDraft();
      setDone(true);
      return;
    }
    const next = current + 1;
    setCurrent(next);
    saveDraft(next, data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    if (current === 0) return;
    const prev = current - 1;
    setCurrent(prev);
    saveDraft(prev, data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const progress = useMemo(
    () =>
      STEPS.map((_, i) => (i < current ? "done" : i === current ? "active" : "pending")),
    [current]
  );

  if (!booted) return null;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        padding: "32px 16px 64px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "640px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ marginBottom: "20px" }}>
            <span
              className="gradient-text"
              style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.3px" }}
            >
              Eva Inteligência
            </span>
          </div>
          {!done && (
            <>
              <h1 style={{ fontSize: "26px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "8px", color: "#111" }}>
                Configuração do seu agente
              </h1>
              <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6 }}>
                Responda as perguntas abaixo. Seu brief será gerado automaticamente no padrão Eva.
              </p>
            </>
          )}
        </div>

        {!done && (
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "28px" }}>
            {progress.map((state, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: "4px",
                  borderRadius: "99px",
                  background: state === "pending" ? "rgba(0,0,0,0.1)" : undefined,
                  backgroundImage: state !== "pending" ? ACCENT : undefined,
                  opacity: state === "active" ? 1 : state === "done" ? 0.8 : 1,
                  transition: "background 0.3s",
                }}
              />
            ))}
            <span style={{ fontSize: "12px", color: "#888", whiteSpace: "nowrap", marginLeft: "4px" }}>
              {current + 1} / {STEPS.length}
            </span>
          </div>
        )}

        {done ? (
          <SuccessCard nome={asString(data.nome_usuario)} />
        ) : showResume ? (
          <ResumeCard total={STEPS.length} stepIndex={resumeStep} onResume={resumeDraft} onFresh={startFresh} />
        ) : (
          <>
            <StepCard step={step} data={data} errors={errors} setField={setField} clearError={clearError} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", gap: "12px" }}>
              <button
                onClick={goBack}
                disabled={current === 0}
                className="cursor-pointer"
                style={{
                  padding: "13px 22px",
                  borderRadius: "10px",
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: 600,
                  border: "1px solid rgba(0,0,0,0.12)",
                  background: "transparent",
                  color: current === 0 ? "rgba(0,0,0,0.25)" : "#555",
                  minHeight: "48px",
                  opacity: current === 0 ? 0.5 : 1,
                  cursor: current === 0 ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                }}
              >
                ← Voltar
              </button>
              <button
                onClick={goNext}
                className="cta-primary cursor-pointer"
                style={{ flex: 1, minHeight: "48px", fontSize: "15px", animation: "none" }}
              >
                {isLast ? "Gerar brief" : "Continuar →"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Step card + field rendering ──────────────────────────────── */

function StepCard({
  step,
  data,
  errors,
  setField,
  clearError,
}: {
  step: (typeof STEPS)[number];
  data: FormData;
  errors: Record<string, string>;
  setField: (key: string, value: FormData[string]) => void;
  clearError: (key: string) => void;
}) {
  return (
    <div
      className="glass-card p-5 sm:p-8"
      style={{ backgroundColor: "#fafafa" }}
    >
      <span
        style={{
          display: "inline-flex",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FF0080",
          marginBottom: "14px",
        }}
      >
        {step.badge}
      </span>
      <h2 style={{ fontSize: "19px", fontWeight: 800, marginBottom: "6px", color: "#111", letterSpacing: "-0.3px" }}>
        {step.title}
      </h2>
      <p style={{ fontSize: "13px", color: "#888", marginBottom: "26px", lineHeight: 1.6 }}>{step.desc}</p>

      {step.fields.map((f) =>
        fieldVisible(f, data) ? (
          <Field
            key={f.key}
            field={f}
            value={data[f.key]}
            data={data}
            error={errors[f.key]}
            onChange={(v) => {
              setField(f.key, v);
              clearError(f.key);
            }}
          />
        ) : null
      )}
    </div>
  );
}

function FieldLabel({ field }: { field: FieldConfig }) {
  return (
    <label
      htmlFor={field.key}
      style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "8px" }}
    >
      {field.label}
      {field.req ? (
        <span style={{ color: "#FF0080", marginLeft: "2px" }}>*</span>
      ) : (
        <span style={{ color: "#aaa", fontWeight: 400, marginLeft: "4px", fontSize: "11px" }}>opcional</span>
      )}
    </label>
  );
}

function Hint({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div
      style={{
        fontSize: "12px",
        color: "#777",
        marginBottom: "8px",
        lineHeight: 1.5,
        background: "rgba(255,0,128,0.05)",
        borderLeft: "2px solid #FF0080",
        padding: "8px 12px",
        borderRadius: "0 6px 6px 0",
      }}
    >
      {text}
    </div>
  );
}

const inputBaseStyle: React.CSSProperties = {
  width: "100%",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.12)",
  borderRadius: "10px",
  color: "#111",
  fontFamily: "inherit",
  fontSize: "16px",
  padding: "13px 14px",
  outline: "none",
  WebkitAppearance: "none",
};

function Field({
  field,
  value,
  data,
  error,
  onChange,
}: {
  field: FieldConfig;
  value: FormData[string];
  data: FormData;
  error?: string;
  onChange: (v: FormData[string]) => void;
}) {
  return (
    <div style={{ marginBottom: "22px" }}>
      <FieldLabel field={field} />
      <Hint text={field.hint} />
      <FieldInput field={field} value={value} data={data} onChange={onChange} />
      {error && <div style={{ fontSize: "12px", color: "#E0334F", marginTop: "6px" }}>{error}</div>}
    </div>
  );
}

function FieldInput({
  field,
  value,
  data,
  onChange,
}: {
  field: FieldConfig;
  value: FormData[string];
  data: FormData;
  onChange: (v: FormData[string]) => void;
}) {
  if (field.type === "text" || field.type === "email") {
    return (
      <input
        id={field.key}
        type={field.type}
        inputMode={field.type === "email" ? "email" : "text"}
        autoComplete={field.autoComplete}
        placeholder={field.placeholder}
        value={asString(value)}
        onChange={(e) => onChange(e.target.value)}
        className="eva-input"
        style={inputBaseStyle}
      />
    );
  }

  if (field.type === "textarea" || field.type === "auto-draft") {
    return (
      <textarea
        id={field.key}
        placeholder={field.placeholder}
        value={asString(value)}
        onChange={(e) => onChange(e.target.value)}
        className="eva-input"
        style={{ ...inputBaseStyle, minHeight: "110px", lineHeight: 1.6, resize: "vertical" }}
      />
    );
  }

  if (field.type === "role") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {field.options?.map((o) => {
          const checked = asString(value) === o.value;
          return (
            <label
              key={o.value}
              className="cursor-pointer"
              style={{
                display: "block",
                padding: "18px 16px",
                background: checked ? "rgba(255,0,128,0.05)" : "#fff",
                border: `1.5px solid ${checked ? "#FF0080" : "rgba(0,0,0,0.12)"}`,
                borderRadius: "10px",
                transition: "all 0.2s",
              }}
            >
              <input
                type="radio"
                name={field.key}
                value={o.value}
                checked={checked}
                onChange={() => onChange(o.value)}
                style={{ display: "none" }}
              />
              <div style={{ fontSize: "15px", fontWeight: 700, marginBottom: "5px", color: checked ? "#FF0080" : "#111" }}>
                {o.name}
              </div>
              <div style={{ fontSize: "12px", color: checked ? "#d6006b" : "#888", lineHeight: 1.5 }}>{o.desc}</div>
            </label>
          );
        })}
      </div>
    );
  }

  if (field.type === "chips") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {field.options?.map((o) => {
          const checked = asString(value) === o.value;
          return (
            <label
              key={o.value}
              className="cursor-pointer"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "14px 16px",
                minHeight: "48px",
                background: checked ? "rgba(255,0,128,0.05)" : "#fff",
                border: `1.5px solid ${checked ? "#FF0080" : "rgba(0,0,0,0.12)"}`,
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.2s",
                fontSize: "14px",
                fontWeight: 600,
                color: checked ? "#FF0080" : "#333",
              }}
            >
              <input
                type="radio"
                name={field.key}
                value={o.value}
                checked={checked}
                onChange={() => onChange(o.value)}
                style={{ display: "none" }}
              />
              {o.label}
            </label>
          );
        })}
      </div>
    );
  }

  if (field.type === "pills") {
    const selected = asString(value).split(",").filter(Boolean);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {field.options?.map((o) => {
          const checked = selected.includes(o.value);
          return (
            <label
              key={o.value}
              className="cursor-pointer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "11px 18px",
                minHeight: "44px",
                background: checked ? "rgba(255,0,128,0.05)" : "#fff",
                border: `1px solid ${checked ? "#FF0080" : "rgba(0,0,0,0.12)"}`,
                borderRadius: "99px",
                fontSize: "14px",
                fontWeight: 500,
                color: checked ? "#FF0080" : "#666",
                transition: "all 0.2s",
              }}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                  const next = checked ? selected.filter((v) => v !== o.value) : [...selected, o.value];
                  onChange(next.join(","));
                }}
                style={{ display: "none" }}
              />
              {o.label}
            </label>
          );
        })}
      </div>
    );
  }

  if (field.type === "schedule") {
    const sched = asSchedule(value);
    return (
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <select
          value={sched.dias}
          onChange={(e) => onChange({ ...sched, dias: e.target.value })}
          className="eva-input"
          style={{ ...inputBaseStyle, flex: "1.4" }}
        >
          <option value="Segunda a sexta">Segunda a sexta</option>
          <option value="Segunda a sábado">Segunda a sábado</option>
          <option value="Todos os dias">Todos os dias</option>
        </select>
        <div className="flex items-center gap-3">
          <input
            type="time"
            value={sched.inicio}
            onChange={(e) => onChange({ ...sched, inicio: e.target.value })}
            className="eva-input"
            style={{ ...inputBaseStyle, width: "auto", flex: 1 }}
          />
          <span style={{ color: "#888", fontSize: "13px" }}>até</span>
          <input
            type="time"
            value={sched.fim}
            onChange={(e) => onChange({ ...sched, fim: e.target.value })}
            className="eva-input"
            style={{ ...inputBaseStyle, width: "auto", flex: 1 }}
          />
        </div>
      </div>
    );
  }

  if (field.type === "toggle-list") {
    const items = field.presetGroup ? getPresetItems(data, field.presetGroup) : null;
    if (!items) {
      return (
        <div
          style={{
            fontSize: "13px",
            color: "#888",
            padding: "18px",
            textAlign: "center",
            background: "#fff",
            border: "1px dashed rgba(0,0,0,0.15)",
            borderRadius: "10px",
          }}
        >
          Escolha uma missão na etapa anterior para ver as regras padrão.
        </div>
      );
    }
    const state = asToggleState(value);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item, idx) => {
          const checked = state[idx] !== undefined ? state[idx] : true;
          return (
            <label
              key={idx}
              className="cursor-pointer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "10px",
                padding: "13px 14px",
                minHeight: "44px",
              }}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onChange({ ...state, [idx]: !checked })}
                style={{ display: "none" }}
              />
              <span style={{ fontSize: "13px", color: "#222", lineHeight: 1.45 }}>{item}</span>
              <span style={{ position: "relative", width: "44px", height: "26px", flexShrink: 0 }}>
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: checked ? "#FF0080" : "rgba(0,0,0,0.15)",
                    borderRadius: "99px",
                    transition: "background 0.2s",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "3px",
                    left: checked ? "23px" : "3px",
                    width: "20px",
                    height: "20px",
                    background: "#fff",
                    borderRadius: "50%",
                    transition: "left 0.2s",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
                  }}
                />
              </span>
            </label>
          );
        })}
      </div>
    );
  }

  return null;
}

/* ── Resume / Success screens ─────────────────────────────────── */

function ResumeCard({
  total,
  stepIndex,
  onResume,
  onFresh,
}: {
  total: number;
  stepIndex: number;
  onResume: () => void;
  onFresh: () => void;
}) {
  return (
    <div className="glass-card p-6 sm:p-10" style={{ textAlign: "center", backgroundColor: "#fafafa" }}>
      <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px", color: "#111" }}>
        Continuar de onde parou?
      </h2>
      <p style={{ fontSize: "13px", color: "#888", marginBottom: "24px", lineHeight: 1.6 }}>
        Encontramos um cadastro em andamento na etapa {stepIndex + 1} de {total}.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onFresh}
          className="cursor-pointer"
          style={{
            flex: 1,
            padding: "13px 20px",
            borderRadius: "10px",
            fontFamily: "inherit",
            fontSize: "14px",
            fontWeight: 600,
            border: "1px solid rgba(0,0,0,0.15)",
            background: "transparent",
            color: "#666",
            minHeight: "48px",
          }}
        >
          Começar novo
        </button>
        <button onClick={onResume} className="cta-primary cursor-pointer" style={{ flex: 1, minHeight: "48px", animation: "none" }}>
          Continuar →
        </button>
      </div>
    </div>
  );
}

function SuccessCard({ nome }: { nome: string }) {
  return (
    <div className="glass-card gradient-border p-7 sm:p-12" style={{ textAlign: "center", backgroundColor: "#fafafa" }}>
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: ACCENT,
          margin: "0 auto 20px",
        }}
      />
      <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "10px", color: "#111" }}>
        Obrigado{nome ? `, ${nome}` : ""}!
      </h2>
      <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7, marginBottom: "6px" }}>
        Seu cadastro foi concluído com sucesso.
      </p>
      <p style={{ fontSize: "13px", color: "#999" }}>
        Nossa equipe já recebeu as informações e vai entrar em contato em breve para finalizar a configuração do seu agente.
      </p>
    </div>
  );
}
