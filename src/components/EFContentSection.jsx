import { Button } from "@/components/ui/button"
import FadeInWhenVisible from "./FadeInWhenVisible"
import Link from "next/link"
import EFIntro from "./content/EFIntro"
import EF2 from "./content/EF2"
import EF3 from "./content/EF3"
import EF3b from "./content/EF3b"
import EF3c from "./content/EF3c"
import EF3d from "./content/EF3d"
import EF3e from "./content/EF3e"
import EF4 from "./content/EF4"
import EF5 from "./content/EF5"

export default function EFContentSection() {
    return (
      <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">

            <FadeInWhenVisible>
              <EFIntro />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF2 />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF3 />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF3b />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF3c />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF3d />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF3e />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF4 />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF5 />
            </FadeInWhenVisible>
     
            
            <div className="flex justify-center mt-8">
              <Button asChild size="lg">
                <Link href="/metodologias">Próxima Página: Metodologias</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  