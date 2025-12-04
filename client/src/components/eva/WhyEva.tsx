import { ShieldCheck, Sparkles, Handshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WhyEva() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#050816] sm:text-4xl mb-4">
            Por que a Eva é diferente de qualquer chatbot que você já viu?
          </h2>
          <p className="text-xl text-[#3B3B4F]">
            Cada detalhe foi pensado para dar ao seu negócio Controle, Perfeição e Confiança na adoção de IA.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 - Controle */}
          <Card className="group border-gray-100 bg-white shadow-sm hover:shadow-eva-hover transition-all duration-300 hover:-translate-y-1 rounded-[24px]">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF1CF7]/10 to-[#FF8A3C]/10 text-[#FF1CF7]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-[#050816]">Controle absoluto da operação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#6E6E80] leading-relaxed">
                Nada se perde. Cada lead, conversa e oportunidade é rastreada. Tenha visão total da performance da sua equipe e da Eva em tempo real.
              </p>
              <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-[#3B3B4F]">
                Nunca mais seja traído pelos dados.
              </div>
            </CardContent>
          </Card>

          {/* Card 2 - Perfeição */}
          <Card className="group border-gray-100 bg-white shadow-sm hover:shadow-eva-hover transition-all duration-300 hover:-translate-y-1 rounded-[24px]">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF1CF7]/10 to-[#FF8A3C]/10 text-[#FF1CF7]">
                <Sparkles className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-[#050816]">Atendimento padrão ouro, sem falhas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#6E6E80] leading-relaxed">
                A Eva atende 24/7 com consistência, script perfeito e tom profissional — sem improvisos ou respostas medianas.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 - Confiança */}
          <Card className="group border-gray-100 bg-white shadow-sm hover:shadow-eva-hover transition-all duration-300 hover:-translate-y-1 rounded-[24px]">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF1CF7]/10 to-[#FF8A3C]/10 text-[#FF1CF7]">
                <Handshake className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-[#050816]">Setup feito por especialistas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#6E6E80] leading-relaxed">
                Nós configuramos tudo por você. A implantação em 3 etapas garante um funil pronto, sem você passar vergonha com uma IA mal treinada.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
