import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@assets/generated_images/businesswoman_feeling_free_with_automated_social_media_icons.png";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white pt-20 pb-16 lg:pt-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow-hero opacity-60 blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-start justify-between">
          
          {/* Left Column: Content */}
          <div className="flex flex-col justify-start space-y-8 pt-4">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-[#050816] sm:text-5xl xl:text-6xl text-balance leading-[1.1]">
                O primeiro agente de IA profissional para o seu atendimento
              </h1>
              <p className="max-w-[600px] text-lg text-[#3B3B4F] md:text-xl leading-relaxed text-balance">
                A Eva coloca uma IA realmente inteligente na linha de frente do seu WhatsApp, Instagram e site — criando um funil de atendimento e vendas padrão Amazon, sem você precisar programar nada.
              </p>
            </div>

            <ul className="space-y-4 text-[#3B3B4F]">
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F7F7FB] text-[#FF1CF7]">
                  <Check className="h-4 w-4" />
                </div>
                <span className="font-medium">Funil de atendimento pronto em 3 etapas</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F7F7FB] text-[#FF1CF7]">
                  <Check className="h-4 w-4" />
                </div>
                <span className="font-medium">Omnichannel: WhatsApp, Instagram e site</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F7F7FB] text-[#FF1CF7]">
                  <Check className="h-4 w-4" />
                </div>
                <span className="font-medium">Recupere o controle em 7 dias</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="h-14 rounded-full bg-gradient-eva-primary px-8 text-base font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
              >
                Agendar uma demonstração
              </Button>
              <Link href="/plans">
                <Button 
                  variant="outline" 
                  className="h-14 rounded-full border-gray-200 px-8 text-base font-medium text-[#3B3B4F] hover:bg-gray-50 w-full sm:w-auto"
                >
                  Ver planos e setups
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] aspect-square animate-in fade-in zoom-in duration-1000">
               <img 
                src={heroImage} 
                alt="Businesswoman Free with Automation" 
                className="w-full h-full object-contain drop-shadow-2xl transform transition-transform hover:scale-[1.02] duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
