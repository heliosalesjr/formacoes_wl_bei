import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import ContentSection from "@/components/ContentSection"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Formação Material de Educação Financeira"
          tag="Módulo 1"
          statNumber="4º e 5º anos"
          statLabel="Conteúdo"
          subtitle="Este é o curso autoinstrucional da BEĨ Educação sobre a aplicação da coleção Aprendendo a Lidar com Dinheiro"
        />
        <ContentSection />
      </main>
      <Footer />
    </div>
  )
}

