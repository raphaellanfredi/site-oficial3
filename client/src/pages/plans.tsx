import { Navbar } from "@/components/eva/Navbar";
import { Footer } from "@/components/eva/Footer";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle, Info } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type BillingCycle = "monthly" | "semiannual" | "annual";

const plans = [
  {
    name: "Eva One",
    description: "Ideal para quem está começando e quer profissionalizar o atendimento.",
    features: [
      "Até 1500 atendimentos por mês",
      "3 etapas de recuperação de cliente (follow up)",
      "Disparo de mensagens em massa com segmentação",
      "2 conexões (Whatsapp, Instagram, email, etc)",
      "3 usuários",
      "CRM nativo",
      "Integração com Google Agenda",
    ],
    pricing: {
      monthly: { setup: "3.500", monthly: "1.592" },
      semiannual: { setup: "2.510", monthly: "1.295" },
      annual: { setup: "1.853", monthly: "998" },
    },
    highlight: false,
  },
  {
    name: "Eva PRO",
    description: "Para negócios em crescimento que precisam de escala e mais canais.",
    features: [
      "Até 3500 atendimentos por mês",
      "7 etapas de recuperação de cliente",
      "Disparo em massa ilimitado",
      "Anti no Show (confirmação automática)",
      "5 conexões",
      "10 usuários",
      "Integração Asaas / PagarMe / Conta Azul",
      "Ligações com IA (ativa e passiva)*",
    ],
    pricing: {
      monthly: { setup: "5.300", monthly: "3.500" },
      semiannual: { setup: "4.490", monthly: "3.230" },
      annual: { setup: "3.950", monthly: "2.690" },
    },
    highlight: true,
    note: "*Custo da IA de ligação é pós-pago conforme uso.",
  },
  {
    name: "Eva BLACK",
    description: "Potência máxima, infraestrutura dedicada e suporte premium.",
    features: [
      "Servidor dedicado & Infraestrutura escalável",
      "Até 15.200 atendimentos por mês",
      "Suporte Premium",
      "15 etapas de recuperação de cliente",
      "Disparo em massa ilimitado",
      "10 conexões",
      "30 usuários",
      "Integração Asaas / PagarMe / Conta Azul",
      "Ligações com IA (ativa e passiva)*",
    ],
    pricing: {
      monthly: { setup: "15.200", monthly: "5.300" },
      semiannual: { setup: "12.500", monthly: "4.850" },
      annual: { setup: "9.800", monthly: "4.490" },
    },
    highlight: false,
    note: "*Custo da IA de ligação é pós-pago conforme uso.",
  },
];

export default function Plans() {
  const [billing, setBilling] = useState<BillingCycle>("annual");

  return (
    <div className="min-h-screen bg-white font-sans text-[#050816]">
      <Navbar />
      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-[#050816]">
              Escolha o plano ideal para sua escala
            </h1>
            <p className="text-xl text-[#3B3B4F]">
              Comece com um setup profissional e escale com segurança.
              <br />
              <span className="text-[#FF1CF7] font-medium text-base block mt-2">
                Membros do Eva Club possuem 50% de desconto em todos os produtos.
              </span>
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center p-1 bg-[#F7F7FB] border border-gray-200 rounded-full">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billing === "monthly"
                    ? "bg-white text-[#050816] shadow-sm"
                    : "text-[#6E6E80] hover:text-[#3B3B4F]"
                }`}
              >
                Mensal (Sem fidelidade)
              </button>
              <button
                onClick={() => setBilling("semiannual")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billing === "semiannual"
                    ? "bg-white text-[#050816] shadow-sm"
                    : "text-[#6E6E80] hover:text-[#3B3B4F]"
                }`}
              >
                Semestral
              </button>
              <button
                onClick={() => setBilling("annual")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billing === "annual"
                    ? "bg-white text-[#050816] shadow-sm"
                    : "text-[#6E6E80] hover:text-[#3B3B4F]"
                }`}
              >
                Anual <span className="ml-1 text-[#FF1CF7] text-xs">(Melhor preço)</span>
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative flex flex-col rounded-[32px] overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  plan.highlight 
                    ? "border-[#FF1CF7] shadow-lg shadow-[#FF1CF7]/10 z-10 scale-[1.02]" 
                    : "border-transparent shadow-md bg-white hover:border-gray-100"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF1CF7] to-[#FF8A3C]" />
                )}
                
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{plan.name}</span>
                    {plan.highlight && (
                      <Badge className="bg-gradient-to-r from-[#FF1CF7] to-[#FF8A3C] border-0 text-white">
                        Mais Popular
                      </Badge>
                    )}
                  </CardTitle>
                  <p className="text-[#6E6E80] text-sm mt-2 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="p-8 pt-4 flex-1 flex flex-col">
                  <div className="mb-8 p-6 bg-[#F7F7FB] rounded-2xl space-y-4">
                    <div>
                      <p className="text-sm text-[#6E6E80] font-medium uppercase tracking-wider">Mensalidade</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-[#3B3B4F]">R$</span>
                        <span className="text-4xl font-bold text-[#050816]">{plan.pricing[billing].monthly}</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-[#6E6E80] font-medium uppercase tracking-wider mb-1">Implantação (Setup)</p>
                      <div className="flex items-baseline gap-2">
                         <span className="text-xl font-semibold text-[#3B3B4F]">R$ {plan.pricing[billing].setup}</span>
                         <span className="text-xs text-[#6E6E80] bg-white px-2 py-0.5 rounded-full border border-gray-200">
                           até 12x no cartão
                         </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 rounded-full bg-[#FF1CF7]/10 p-0.5">
                          <Check className="h-3.5 w-3.5 text-[#FF1CF7]" />
                        </div>
                        <span className="text-sm text-[#3B3B4F] font-medium leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.note && (
                     <p className="text-xs text-[#6E6E80] italic mb-4">{plan.note}</p>
                  )}

                  <Button 
                    className={`w-full h-12 rounded-full font-bold text-base shadow-lg transition-all ${
                      plan.highlight 
                        ? "bg-gradient-to-r from-[#FF1CF7] to-[#FF8A3C] text-white hover:shadow-[#FF1CF7]/25 hover:brightness-110" 
                        : "bg-[#050816] text-white hover:bg-[#3B3B4F]"
                    }`}
                    onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
                  >
                    Contratar {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-[#6E6E80] mb-6">
              Precisa de um plano personalizado ou tem dúvidas sobre o setup?
            </p>
            <Button 
              variant="outline" 
              className="h-12 rounded-full px-8 border-gray-200 text-[#050816] hover:bg-gray-50"
              onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
            >
              Falar com um especialista
            </Button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
