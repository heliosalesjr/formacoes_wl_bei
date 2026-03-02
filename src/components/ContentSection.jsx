
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "./FadeInWhenVisible"
import PageApresentacao1 from "./content/PageApresentacao1"
import PageApresentacao2 from "./content/PageApresentacao2"
import PageApresentacao4 from "./content/PageApresentacao4"
import PageApresentacao5 from "./content/PageApresentacao5"
import PageApresentacaoObj from "./content/PageApresentacaoObj"


export default function ContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* First Component - Two columns */}
         
            <PageApresentacao1 />
          
          

          <FadeInWhenVisible>
            <PageApresentacao2 />
          </FadeInWhenVisible>
          
          <FadeInWhenVisible>
            <PageApresentacao4 />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <PageApresentacaoObj />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <PageApresentacao5 />
          </FadeInWhenVisible>
         
          
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/modulo1">Próxima Página: Módulo 1</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

