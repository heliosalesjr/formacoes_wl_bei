"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { titleFont } from "@/lib/fonts"

export default function CourseStructure() {
  const modules = [
    {
      title: "MÓDULO 1 - Compreender: Conheça os fundamentos da Educação Financeira e a metodologia da coleção.",
      topics: [
        "Educação Financeira na sala de aula",
        "O programa da BEĨ Educação",
          "Metodologias Ativas",
          "O material didático",
          "Iniciando a aplicação - Diagnóstico"
      ],
    },
    {
      title: "MÓDULO 2 - Planejar: Organize estratégias, projetos e atividades para sua turma.",
      topics: [
        "Projetos sugeridos nos livros",
        "Matriz de habilidades",
        "Metas SMART: um modelo para aperfeiçoar suas metas",
        "Ferramenta 5W2H: um modelo de plano de ação"
      ],
    },
    {
      title: "MÓDULO 3 - Acompanhar: Utilize ferramentas de monitoramento e avaliação para acompanhar as aprendizagens.",
      topics: [
        "A importância de monitorar as atividades",
        "Erro como pista para ajustar a mediação da aprendizagem",
        "Tipos de Avaliação",
        "Rubrica Avaliativa: Ferramenta que envolve os estudantes"
      ],
    },
    {
      title: "MÓDULO 4 - Refletir e Compartilhar: Analise resultados, registre experiências e valorize as conquistas dos estudantes.",
      topics: [
        "Autoavaliação e Avaliação em Pares",
        "Culminância do Projeto: Valor e Sugestões práticas",
        "Uso dos Registros na Culminância",
        "Conclusão"
      ],
    },
  ]

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('apresentacao-4');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <section ref={ref} id="apresentacao-4" className="w-full scroll-mt-20">
      <div className="container max-w-6xl bg-white dark:bg-slate-800 p-6 rounded-lg shadow-2xl">
        <h2 className={`${titleFont.className} mb-4 text-4xl text-center font-bold text-slate-600 dark:text-white`}>Módulos</h2>
        <Accordion type="single" collapsible className="w-ful mx-4">
          {modules.map((module, index) => (
            <AccordionItem key={index} value={`module-${index}`} className="text-2xl">
              <AccordionTrigger className={`${titleFont.className} dark:text-white`}>{module.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-4 space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
