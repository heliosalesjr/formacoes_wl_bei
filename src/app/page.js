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
          tag="Apresentação"
          statNumber="4º e 5º anos"
          statLabel="Conteúdo"
        />
        <ContentSection />
      </main>
      <Footer />
    </div>
  )
}

