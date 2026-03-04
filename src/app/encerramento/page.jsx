import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import DiagnosticoContentSection from "@/components/DiagnosticoContentSection"

export default function Diagnostico() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Encerramento"
          subtitle="Concluir o Módulo 1 e revisar o que aprendemos até aqui"
          tag="Encerramento"
          statNumber="4º e 5º anos"
          statLabel="Conteúdo"
        />
        <DiagnosticoContentSection />
      </main>
      <Footer />
    </div>
  )
}
