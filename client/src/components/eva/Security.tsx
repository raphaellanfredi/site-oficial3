import { CheckCircle2 } from "lucide-react";

export function Security() {
  const items = [
    "Infraestrutura com padrões de segurança corporativa.",
    "Fluxos validados em centenas de operações reais.",
    "Setup guiado em 3 etapas para evitar qualquer sensação de amadorismo.",
    "Suporte humano + IA para não deixar você travado."
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-white z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#FFE6F5_1px,transparent_1px)] [background-size:20px_20px] opacity-30 z-0" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-[#FFF4E5] to-transparent opacity-40 blur-3xl pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Left Column: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#050816] sm:text-4xl lg:text-5xl">
              Seus dados e sua reputação em boas mãos
            </h2>
            <p className="text-xl text-[#3B3B4F] leading-relaxed max-w-md">
              Eva Inteligência foi pensada para negócios que não podem se dar ao luxo de errar. Segurança técnica e segurança de imagem caminham juntas.
            </p>
          </div>

          {/* Right Column: Pill Stack */}
          <div className="flex flex-col gap-4">
            {items.map((item, idx) => (
              <div 
                key={idx}
                className="group flex items-center gap-4 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 p-4 pr-8 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-[#FF1CF7]/20"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F7F7FB] text-[#FF1CF7] group-hover:bg-[#FF1CF7] group-hover:text-white transition-colors">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="text-lg font-medium text-[#3B3B4F]">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
