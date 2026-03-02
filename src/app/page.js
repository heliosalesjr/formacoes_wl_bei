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
          statNumber="6"
          statLabel="Módulos"
        />
        <ContentSection />
      </main>
      <Footer />
    </div>
  )
}

