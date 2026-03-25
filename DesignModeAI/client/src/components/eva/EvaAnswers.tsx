import { Send, Bot, User } from "lucide-react";

export function EvaAnswers() {
  const suggestions = [
    "Quantos leads qualificados a Eva gerou esta semana?",
    "Quais atendentes estão perdendo mais oportunidades?",
    "Como está a taxa de resposta do meu WhatsApp?"
  ];

  return (
    <section className="py-24 bg-[#F7F7FB]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-[#050816] sm:text-4xl mb-4">
            Você tem demandas complexas.
            <br />
            A Eva responde com precisão.
          </h2>
        </div>

        {/* Chat UI Card */}
        <div className="mx-auto max-w-4xl rounded-[24px] bg-white border border-gray-200 shadow-xl overflow-hidden">
          
          {/* Header */}
          <div className="border-b border-gray-100 p-6 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#FF1CF7] to-[#FF8A3C] flex items-center justify-center text-white">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#050816]">Eva Assistant</h3>
              <p className="text-sm text-[#6E6E80]">Pergunte qualquer coisa sobre suas conversas, leads e funil de vendas.</p>
            </div>
          </div>

          {/* Chat Area */}
          <div className="p-6 md:p-10 space-y-8 bg-white">
            
            {/* User Message */}
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4 text-gray-500" />
              </div>
              <div className="mt-1">
                <p className="text-[#050816] font-medium">Como está a performance do time de vendas hoje?</p>
              </div>
            </div>

            {/* Bot Response */}
            <div className="flex gap-4 justify-end">
               <div className="relative bg-[#FFF5FA] rounded-2xl rounded-tr-sm p-6 max-w-2xl border border-[#FF1CF7]/10">
                  <p className="text-[#050816] mb-4">Hoje o time converteu 15% a mais que a média da semana passada.</p>
                  <p className="text-[#050816] font-semibold mb-2">Destaques:</p>
                  <ul className="space-y-2 text-[#3B3B4F] list-disc pl-4">
                    <li>Julia fechou 4 contratos (+2 que a meta)</li>
                    <li>Tempo médio de resposta caiu para 2 minutos</li>
                    <li>32 novos leads qualificados entraram no funil</li>
                  </ul>
                  
                  {/* Floating Icon */}
                  <div className="absolute -right-4 -top-4 h-8 w-8 rounded-full bg-gradient-to-br from-[#FF1CF7] to-[#FF8A3C] flex items-center justify-center text-white shadow-lg">
                    <Bot className="h-4 w-4" />
                  </div>
               </div>
            </div>

            {/* Suggestions */}
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              {suggestions.map((text, i) => (
                <button 
                  key={i}
                  className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-[#3B3B4F] text-sm hover:border-[#FF1CF7] hover:text-[#FF1CF7] transition-colors shadow-sm"
                >
                  {text}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="relative pt-4">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Pergunte à Eva..." 
                  className="w-full h-14 rounded-full bg-white border border-gray-300 pl-8 pr-14 text-[#050816] placeholder:text-gray-400 focus:outline-none focus:border-[#FF1CF7] transition-colors"
                  readOnly
                />
                <button className="absolute right-2 top-2 h-10 w-10 rounded-full bg-gradient-to-br from-[#FF1CF7] to-[#FF8A3C] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
