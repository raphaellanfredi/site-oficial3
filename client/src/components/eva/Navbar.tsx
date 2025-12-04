import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import logo from "@assets/1024X1024PX_(1)_(1)_1764775236671.png";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <img src={logo} alt="Eva Logo" className="h-10 w-10 object-contain transition-transform group-hover:scale-105" />
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3B3B4F]">
          <Link href="/">
             <a className="hover:text-[#FF1CF7] transition-colors">Home</a>
          </Link>
          <a href="#" className="hover:text-[#FF1CF7] transition-colors">Produtos</a>
          <a href="#" className="hover:text-[#FF1CF7] transition-colors">Soluções</a>
          <Link href="/plans">
            <a className={`transition-colors ${location === "/plans" ? "text-[#FF1CF7]" : "hover:text-[#FF1CF7]"}`}>
              Preços
            </a>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://app.evainteligencia.com.br/" className="hidden md:block text-sm font-medium text-[#3B3B4F] hover:text-[#FF1CF7] transition-colors">
            Login
          </a>
          <Button 
            className="hidden md:flex bg-[#050816] text-white hover:bg-[#3B3B4F] rounded-full px-6"
            onClick={() => window.open("https://wa.me/5511961163777", "_blank")}
          >
            Agendar Demo
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
