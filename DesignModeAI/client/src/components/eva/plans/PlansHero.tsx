export function PlansHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#000000", paddingTop: "clamp(120px, 12vw, 160px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern pointer-events-none opacity-60" />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,0,128,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold"
            style={{
              background: "rgba(255,0,128,0.08)",
              border: "1px solid rgba(255,0,128,0.3)",
              borderRadius: "100px",
              color: "#FF0080",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Transparência total • Sem surpresas
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-white font-black mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Escolha o plano certo
          <br />
          para sua operação.
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto"
          style={{
            color: "#999",
            fontSize: "1.25rem",
            maxWidth: "600px",
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.6,
          }}
        >
          Implantação feita por especialistas. Você recebe sua IA
          pronta em 7 dias, conectada aos seus canais.
        </p>
      </div>
    </section>
  );
}
