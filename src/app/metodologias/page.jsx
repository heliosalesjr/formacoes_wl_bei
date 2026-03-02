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
          tag="Módulo 3"
          statNumber="6"
          statLabel="Metodologias"
        />
        <MetContentSection />
      </main>
      <Footer />
    </div>
  )
}
