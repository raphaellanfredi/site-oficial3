import { Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "@assets/1024X1024PX_(1)_(1)_1764775236671.png";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Eva Logo" className="h-8 w-8 object-contain" />
            </div>
            <div className="space-y-2 text-sm text-[#6E6E80] max-w-[200px]">
              <p>Seu primeiro agente de IA profissional.</p>
              <p>Controle, Perfeição e Confiança para o seu negócio.</p>
            </div>
            <div className="flex gap-4 text-[#6E6E80]">
              <a href="#" className="hover:text-[#FF1CF7] transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/eva.inteligencia.art/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF1CF7] transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#FF1CF7] transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#050816]">Produtos</h4>
            <ul className="space-y-2 text-sm text-[#6E6E80]">
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Eva One</a></li>
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Eva Pro</a></li>
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Eva Black</a></li>
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Gestor de Condomínios</a></li>
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Prospecção Infinita</a></li>
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Resumidor de Grupos</a></li>
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Gerador de Contratos</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#050816]">Empresa</h4>
            <ul className="space-y-2 text-sm text-[#6E6E80]">
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Resources (Kept as extra or removed if not needed, but user didn't explicitly say to delete, just listed changes for Products and Company. I will keep Resources as it fits the layout, unless conflicts) 
             User said: "Na aba Empresa, alterar para: ...". Didn't say delete Resources. I'll keep it for balance.
          */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#050816]">Recursos</h4>
            <ul className="space-y-2 text-sm text-[#6E6E80]">
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Base de Conhecimento</a></li>
              <li><a href="#" className="hover:text-[#FF1CF7] transition-colors">Blog</a></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 border-t border-gray-100 pt-8 text-center text-sm text-[#6E6E80]">
          © 2026 Eva Inteligência. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
