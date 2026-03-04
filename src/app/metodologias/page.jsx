import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MetContentSection from "@/components/MetContentSection"

export default function Metodologias() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Metodologias Ativas"
          subtitle='Como funciona o programa "Aprendendo a lidar com dinheiro" da BEĨ Educação e a metodologia de aplicação do material'
          tag="Módulo 1"
          statNumber="4º e 5º anos"
          statLabel="Conteúdo"
        />
        <MetContentSection />
      </main>
      <Footer />
    </div>
  )
}
