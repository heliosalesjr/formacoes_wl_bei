import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MatContentSection from "@/components/MatContentSection"

export default function Modulo4() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Material Didático"
          subtitle="Conhecendo os livros do estudante e educador, e o início das atividades"
          tag="Módulo 4"
          statNumber="9"
          statLabel="Atividades"
        />
        <MatContentSection />
      </main>
      <Footer />
    </div>
  )
}

