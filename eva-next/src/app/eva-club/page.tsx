import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import EvaClub from "@/components/eva-club/EvaClub";

export const metadata = {
  title: "Eva Club — Eva Inteligência",
  description: "O clube exclusivo de empresários que levam a IA a sério. Todo cliente Eva é membro.",
};

export default function EvaClubPage() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <EvaClub />
      <Footer />
    </div>
  );
}
