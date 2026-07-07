"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  PLANS,
  INSTALLMENTS,
  PlanKey,
  Installment,
  calcInstallmentValue,
  calcInstallmentTotal,
  hasInterest,
  PAYMENT_LINKS,
  TESTIMONIALS,
  CHECKOUT_FAQS,
} from "./checkout-data";

const ACCENT = "linear-gradient(135deg, #FF0080, #FF6B00)";
const fmt = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

/* ─── Icons ───────────────────────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="url(#cg)" />
      <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF0080" /><stop offset="1" stopColor="#FF6B00" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2" y="6" width="10" height="7" rx="1.5" stroke="#22c55e" strokeWidth="1.4" />
      <path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#FFB800">
      <path d="M7 1l1.55 3.14L12 4.64l-2.5 2.44.59 3.43L7 8.77l-3.09 1.74.59-3.43L2 4.64l3.45-.5L7 1z" />
    </svg>
  );
}

/* ─── Header ─────────────────────────────────────────────────────────────── */

function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "0 24px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a href="/" style={{ textDecoration: "none" }}>
        <span
          style={{
            background: ACCENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 800,
            fontSize: "18px",
            letterSpacing: "-0.3px",
          }}
        >
          Eva Inteligência
        </span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <LockIcon />
        <span style={{ fontSize: "13px", color: "#22c55e", fontWeight: 600 }}>
          Pagamento 100% seguro
        </span>
      </div>
    </header>
  );
}

/* ─── Plan selector tabs ─────────────────────────────────────────────────── */

function PlanTabs({
  selected,
  onChange,
}: {
  selected: PlanKey;
  onChange: (k: PlanKey) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        background: "#f4f4f4",
        padding: "6px",
        borderRadius: "14px",
        width: "fit-content",
        margin: "0 auto 32px",
      }}
    >
      {PLANS.map((p) => {
        const active = p.key === selected;
        return (
          <button
            key={p.key}
            onClick={() => onChange(p.key)}
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "14px",
              fontWeight: 700,
              transition: "all 0.2s",
              background: active ? "#fff" : "transparent",
              boxShadow: active ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
              color: active ? "#111" : "#888",
              position: "relative",
            }}
          >
            {p.name}
            {p.popular && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-4px",
                  background: ACCENT,
                  borderRadius: "99px",
                  width: "10px",
                  height: "10px",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ─── Plan detail card ───────────────────────────────────────────────────── */

function PlanDetail({ plan }: { plan: typeof PLANS[0] }) {
  return (
    <div
      style={{
        background: "#fff",
        border: `1.5px solid ${plan.popular ? "#FF0080" : "rgba(0,0,0,0.08)"}`,
        borderRadius: "16px",
        padding: "28px",
        marginBottom: "24px",
        boxShadow: plan.popular ? "0 0 40px rgba(255,0,128,0.07)" : "none",
        transition: "all 0.25s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <h3 style={{ fontWeight: 900, fontSize: "22px", color: "#111", margin: 0, letterSpacing: "-0.5px" }}>
          {plan.name}
        </h3>
        {plan.popular && (
          <span
            style={{
              background: ACCENT,
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "99px",
            }}
          >
            Mais popular
          </span>
        )}
      </div>
      <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
        {plan.tagline}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {plan.features.map((f) => (
          <div key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span style={{ flexShrink: 0, marginTop: "2px" }}><CheckIcon /></span>
            <span style={{ color: "#444", fontSize: "14px", lineHeight: 1.5 }}>{f}</span>
          </div>
        ))}
      </div>
      {plan.footnote && (
        <p style={{ color: "#aaa", fontSize: "12px", marginTop: "14px", marginBottom: 0 }}>
          {plan.footnote}
        </p>
      )}
    </div>
  );
}

/* ─── Installment picker ─────────────────────────────────────────────────── */

function InstallmentPicker({
  setupTotal,
  selected,
  onChange,
}: {
  setupTotal: number;
  selected: Installment;
  onChange: (n: Installment) => void;
}) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <p style={{ fontSize: "13px", fontWeight: 600, color: "#555", marginBottom: "12px", letterSpacing: "0.5px", textTransform: "uppercase" }}>
        Parcelar implantação em
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
        {INSTALLMENTS.map((n) => {
          const active = selected === n;
          const val = calcInstallmentValue(setupTotal, n);
          const interest = hasInterest(n);
          return (
            <button
              key={n}
              onClick={() => onChange(n)}
              style={{
                padding: "10px 6px",
                borderRadius: "10px",
                border: `1.5px solid ${active ? "#FF0080" : "rgba(0,0,0,0.1)"}`,
                background: active ? "rgba(255,0,128,0.04)" : "#fff",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.18s",
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "13px", color: active ? "#FF0080" : "#111" }}>
                {n}x
              </div>
              <div style={{ fontSize: "11px", color: "#888", marginTop: "2px", lineHeight: 1.3 }}>
                {fmt(val)}
                {interest && (
                  <span style={{ display: "block", color: "#bbb", fontSize: "10px" }}>c/ juros</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Order summary ─────────────────────────────────────────────────────── */

function OrderSummary({
  plan,
  installments,
  onCheckout,
}: {
  plan: typeof PLANS[0];
  installments: Installment;
  onCheckout: () => void;
}) {
  const installmentVal = calcInstallmentValue(plan.setup, installments);
  const setupTotal = calcInstallmentTotal(plan.setup, installments);
  const interest = hasInterest(installments);
  const paymentLink = PAYMENT_LINKS[plan.key][installments];
  const linksConfigured = paymentLink !== "#";

  return (
    <div
      style={{
        background: "#fff",
        border: "1.5px solid rgba(0,0,0,0.08)",
        borderRadius: "20px",
        padding: "28px",
        position: "sticky",
        top: "80px",
      }}
    >
      {/* Urgency banner */}
      <div
        style={{
          background: "rgba(255,0,128,0.05)",
          border: "1px solid rgba(255,0,128,0.15)",
          borderRadius: "10px",
          padding: "10px 14px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "14px" }}>🔥</span>
        <span style={{ fontSize: "13px", color: "#FF0080", fontWeight: 600 }}>
          Onboarding com especialistas incluso — sua IA operando em até 7 dias
        </span>
      </div>

      {/* Plan name */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "11px", color: "#aaa", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "4px" }}>
          Plano selecionado
        </p>
        <p style={{ fontWeight: 900, fontSize: "20px", color: "#111", letterSpacing: "-0.5px", margin: 0 }}>
          {plan.name}
        </p>
      </div>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "20px", marginBottom: "20px" }}>
        {/* Monthly */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px" }}>
          <span style={{ fontSize: "14px", color: "#666" }}>Mensalidade</span>
          <span style={{ fontWeight: 700, fontSize: "18px", color: "#111" }}>
            {fmt(plan.monthly)}<span style={{ fontSize: "13px", fontWeight: 400, color: "#aaa" }}>/mês</span>
          </span>
        </div>

        {/* Setup */}
        <div style={{ marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontSize: "14px", color: "#666" }}>Implantação</span>
            <span style={{ fontWeight: 700, fontSize: "18px", color: "#111" }}>
              {installments}× {fmt(installmentVal)}
            </span>
          </div>
          {interest && (
            <p style={{ textAlign: "right", fontSize: "11px", color: "#bbb", margin: "2px 0 0" }}>
              Total: {fmt(setupTotal)} (juros 2,49% a.m.)
            </p>
          )}
          {!interest && installments > 1 && (
            <p style={{ textAlign: "right", fontSize: "11px", color: "#22c55e", fontWeight: 600, margin: "2px 0 0" }}>
              Sem juros
            </p>
          )}
        </div>
      </div>

      {/* CTA */}
      <a
        href={linksConfigured ? paymentLink : undefined}
        onClick={linksConfigured ? undefined : (e) => { e.preventDefault(); onCheckout(); }}
        style={{
          display: "block",
          width: "100%",
          padding: "16px",
          borderRadius: "12px",
          background: ACCENT,
          color: "#fff",
          fontFamily: "inherit",
          fontWeight: 800,
          fontSize: "16px",
          textAlign: "center",
          textDecoration: "none",
          cursor: "pointer",
          border: "none",
          letterSpacing: "-0.2px",
          boxShadow: "0 4px 20px rgba(255,0,128,0.25)",
          transition: "opacity 0.2s, transform 0.2s",
          marginBottom: "16px",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "0.92";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "1";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        Comprar agora
      </a>

      {/* Security */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginBottom: "12px" }}>
        <LockIcon />
        <span style={{ fontSize: "12px", color: "#22c55e", fontWeight: 600 }}>Ambiente 100% seguro</span>
      </div>

      {/* Payment methods */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <span style={{ fontSize: "12px", color: "#bbb" }}>Pix · Cartão de crédito · Boleto</span>
      </div>

      {/* Cancel policy */}
      <p
        style={{
          fontSize: "12px",
          color: "#aaa",
          textAlign: "center",
          lineHeight: 1.6,
          margin: 0,
          borderTop: "1px solid rgba(0,0,0,0.05)",
          paddingTop: "14px",
        }}
      >
        Sem fidelidade. Cancele quando quiser, sem multa.
      </p>
    </div>
  );
}

/* ─── Social proof strip ─────────────────────────────────────────────────── */

function SocialProof() {
  const stats = [
    { value: "300+", label: "empresas ativas" },
    { value: "20M+", label: "atendimentos com IA" },
    { value: "7 dias", label: "para sua IA ficar pronta" },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "12px",
        marginBottom: "24px",
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            background: "#f8f8f8",
            borderRadius: "12px",
            padding: "16px 12px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontWeight: 900,
              fontSize: "20px",
              letterSpacing: "-0.5px",
              background: ACCENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "4px",
            }}
          >
            {s.value}
          </div>
          <div style={{ fontSize: "11px", color: "#888", lineHeight: 1.4 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── Testimonial ────────────────────────────────────────────────────────── */

function TestimonialStrip({ index }: { index: number }) {
  const t = TESTIMONIALS[index % TESTIMONIALS.length];
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: "14px",
        padding: "20px",
        marginBottom: "24px",
      }}
    >
      <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
        {[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} />)}
      </div>
      <p style={{ fontSize: "14px", color: "#444", lineHeight: 1.7, fontStyle: "italic", marginBottom: "10px" }}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <p style={{ fontSize: "12px", color: "#aaa", fontWeight: 700, margin: 0 }}>
        — {t.author} · {t.location}
      </p>
    </div>
  );
}

/* ─── Mini FAQ ───────────────────────────────────────────────────────────── */

function MiniFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ marginBottom: "32px" }}>
      <p style={{ fontSize: "13px", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
        Dúvidas frequentes
      </p>
      {CHECKOUT_FAQS.map((faq, i) => (
        <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              textAlign: "left",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "14px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
              fontFamily: "inherit",
              fontSize: "14px",
              fontWeight: 600,
              color: "#111",
            }}
          >
            {faq.q}
            <span
              style={{
                flexShrink: 0,
                fontSize: "18px",
                fontWeight: 300,
                color: open === i ? "#FF0080" : "#888",
                transform: open === i ? "rotate(45deg)" : "none",
                transition: "transform 0.2s",
                display: "inline-block",
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: open === i ? "160px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <p style={{ color: "#888", fontSize: "13px", lineHeight: 1.7, paddingBottom: "14px", margin: 0 }}>
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Not-configured notice ──────────────────────────────────────────────── */

function LinksNotConfiguredBanner() {
  return (
    <div
      style={{
        background: "rgba(255,184,0,0.08)",
        border: "1px solid rgba(255,184,0,0.3)",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "24px",
        fontSize: "13px",
        color: "#b45309",
        lineHeight: 1.6,
      }}
    >
      <strong>Links de pagamento não configurados.</strong> Abra{" "}
      <code style={{ background: "rgba(0,0,0,0.05)", padding: "1px 6px", borderRadius: "4px", fontSize: "12px" }}>
        src/components/checkout/checkout-data.ts
      </code>{" "}
      e substitua os <code style={{ background: "rgba(0,0,0,0.05)", padding: "1px 6px", borderRadius: "4px", fontSize: "12px" }}>&quot;#&quot;</code>{" "}
      pelos links gerados no seu painel Asaas.
    </div>
  );
}

/* ─── Main checkout page ─────────────────────────────────────────────────── */

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const paramPlan = searchParams.get("plano") as PlanKey | null;
  const valid: PlanKey[] = ["one", "pro", "black"];
  const initialPlan: PlanKey = valid.includes(paramPlan!) ? paramPlan! : "pro";

  const [planKey, setPlanKey] = useState<PlanKey>(initialPlan);
  const [installments, setInstallments] = useState<Installment>(1);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [linksConfigured, setLinksConfigured] = useState(false);

  const plan = PLANS.find((p) => p.key === planKey)!;

  useEffect(() => {
    const anyConfigured = PLANS.some((p) =>
      Object.values(p).length > 0 &&
      Object.values(PAYMENT_LINKS[p.key]).some((v) => v !== "#")
    );
    setLinksConfigured(anyConfigured);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  function handleCheckout() {
    window.open(`https://wa.me/5511961163777?text=Olá! Quero contratar o ${plan.name}.`, "_blank");
  }

  return (
    <>
      <Header />

      <main style={{ maxWidth: "1080px", margin: "0 auto", padding: "40px 20px 80px" }}>
        {/* Page headline */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h1
            style={{
              fontFamily: "Inter",
              fontWeight: 900,
              fontSize: "clamp(28px, 4vw, 40px)",
              letterSpacing: "-1.5px",
              color: "#111",
              marginBottom: "10px",
              lineHeight: 1.1,
            }}
          >
            Escolha seu plano e{" "}
            <span
              style={{
                background: ACCENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              comece em 7 dias
            </span>
          </h1>
          <p style={{ color: "#888", fontSize: "16px", margin: 0 }}>
            Implantação feita por especialistas. Zero programação.
          </p>
        </div>

        {/* Plan tabs */}
        <PlanTabs selected={planKey} onChange={(k) => { setPlanKey(k); setInstallments(1); }} />

        {/* Layout: left content + right summary */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "24px",
          }}
          className="checkout-grid"
        >
          {/* Left column */}
          <div>
            {!linksConfigured && <LinksNotConfiguredBanner />}
            <PlanDetail plan={plan} />
            <InstallmentPicker
              setupTotal={plan.setup}
              selected={installments}
              onChange={setInstallments}
            />
            <SocialProof />
            <TestimonialStrip index={testimonialIdx} />
            <MiniFAQ />
          </div>

          {/* Right column — order summary */}
          <div className="checkout-summary">
            <OrderSummary
              plan={plan}
              installments={installments}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </main>

      {/* Sticky mobile CTA */}
      <div className="mobile-sticky-cta">
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid rgba(0,0,0,0.07)",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: "12px", color: "#888", margin: 0 }}>
              {plan.name} · {fmt(plan.monthly)}/mês
            </p>
            <p style={{ fontSize: "11px", color: "#aaa", margin: 0 }}>
              + implantação {installments}× {fmt(calcInstallmentValue(plan.setup, installments))}
            </p>
          </div>
          <a
            href={PAYMENT_LINKS[planKey][installments] !== "#" ? PAYMENT_LINKS[planKey][installments] : undefined}
            onClick={
              PAYMENT_LINKS[planKey][installments] !== "#"
                ? undefined
                : (e) => { e.preventDefault(); handleCheckout(); }
            }
            style={{
              background: ACCENT,
              color: "#fff",
              fontFamily: "inherit",
              fontWeight: 700,
              fontSize: "14px",
              padding: "12px 20px",
              borderRadius: "10px",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Comprar agora
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .checkout-grid {
            grid-template-columns: 1fr 380px !important;
          }
          .mobile-sticky-cta {
            display: none;
          }
        }
        @media (max-width: 767px) {
          .checkout-summary {
            display: none;
          }
          .mobile-sticky-cta {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 40;
          }
        }
      `}</style>
    </>
  );
}
