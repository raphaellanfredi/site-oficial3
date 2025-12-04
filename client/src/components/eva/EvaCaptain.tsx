import { Check, Bot, LifeBuoy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function EvaCaptain() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Column 1 - EVA */}
          <Card className="border-0 shadow-lg rounded-[24px] overflow-hidden relative group hover:shadow-xl transition-shadow">
            {/* Top Gradient Border */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#FF1CF7] to-[#FF8A3C]" />
            
            <CardContent className="p-8 md:p-12">
              <div className="mb-6">
                <Bot className="h-8 w-8 text-[#050816] mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#050816] mb-6 leading-tight">
                  EVA: sua superinteligência de atendimento e vendas
                </h2>
              </div>
              
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-3 w-3 text-[#050816]" />
                  </div>
                  <span className="text-[#3B3B4F] leading-relaxed">Atende em múltiplos canais (WhatsApp, Instagram, site).</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-3 w-3 text-[#050816]" />
                  </div>
                  <span className="text-[#3B3B4F] leading-relaxed">Segmenta leads, qualifica oportunidades e dispara rotinas automáticas.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-3 w-3 text-[#050816]" />
                  </div>
                  <span className="text-[#3B3B4F] leading-relaxed">Entrega uma experiência de alto padrão para seus clientes — mesmo com equipe enxuta.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Column 2 - Captain */}
          <Card className="border-0 shadow-lg rounded-[24px] overflow-hidden relative group hover:shadow-xl transition-shadow">
            {/* Top Gradient Border */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]" />
            
            <CardContent className="p-8 md:p-12">
              <div className="mb-6">
                <div className="h-8 w-8 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-6">
                   <LifeBuoy className="h-5 w-5 text-[#7C3AED]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#050816] mb-6 leading-tight">
                  Captain: a IA que apoia você e sua equipe
                </h2>
              </div>

              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="h-5 w-5 rounded-full bg-[#F3E8FF] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-3 w-3 text-[#7C3AED]" />
                  </div>
                  <span className="text-[#3B3B4F] leading-relaxed">Central de ajuda inteligente para sua operação.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-5 w-5 rounded-full bg-[#F3E8FF] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-3 w-3 text-[#7C3AED]" />
                  </div>
                  <span className="text-[#3B3B4F] leading-relaxed">Responde dúvidas sobre configurações, fluxos e integrações da Eva.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-5 w-5 rounded-full bg-[#F3E8FF] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-3 w-3 text-[#7C3AED]" />
                  </div>
                  <span className="text-[#3B3B4F] leading-relaxed">Garante ordem, documentação viva e onboarding contínuo.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
