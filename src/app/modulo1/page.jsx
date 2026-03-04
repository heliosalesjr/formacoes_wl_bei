import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import Modulo1ContentSection from "@/components/Modulo1ContentSection"


export default function Modulo1() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Módulo 1"
          subtitle="O que vamos aprender nesse primeiro módulo"
          tag="Módulo 1"
          statNumber="4º e 5º anos"
          statLabel="Conteúdo"
        />
        <Modulo1ContentSection />
      </main>
      <Footer />
    </div>
  )
}

