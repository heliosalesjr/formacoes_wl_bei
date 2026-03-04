import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import EFContentSection from "@/components/EFContentSection"

export default function Modulo2() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Educação Financeira"
          subtitle="O valor da Educação Financeira em sala de aula, e a proposta da BEĨ Educação"
          tag="Módulo 1"
          statNumber="4º e 5º anos"
          statLabel="Conteúdo"
        />
        <EFContentSection />
      </main>
      <Footer />
    </div>
  )
}

