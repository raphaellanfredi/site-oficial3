import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function CTA() {
  const bullets = [
    "Setup de implantação para tirar o peso da configuração do seu time",
    "Eva One atende, qualifica e agenda seus compromissos 24 horas por dia.",
    "Ferramentas como a Prospecção Infinita para acelerar suas vendas.",
    "Membros do Eva Club possuem 50% de desconto em todos os produtos."
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#FF1CF7] via-[#FF8A3C] to-[#7C3AED] px-6 py-16 md:px-16 md:py-20 shadow-2xl text-white">
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-10 leading-tight">
              Comece com um setup que entrega sua IA pronta em 7 dias.
            </h2>

            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 text-left max-w-3xl mx-auto mb-12">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-white/20 p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-white/90 text-lg font-medium">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="h-14 rounded-full bg-white text-[#050816] hover:bg-gray-100 px-8 text-lg font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
              >
                Agendar conversa com o time
              </Button>
              <Button 
                variant="outline" 
                className="h-14 rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 text-lg font-medium backdrop-blur-sm w-full sm:w-auto"
                onClick={() => window.open("/apresentacao_eva.pdf", "_blank")}
              >
                Baixar apresentação completa
              </Button>
            </div>
          </div>

          {/* Decor */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
