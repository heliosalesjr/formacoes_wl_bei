"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { titleFont } from "@/lib/fonts"

export default function CourseStructure() {
  const modules = [
    {
      label: "Módulo 1",
      title: "Compreender: Conheça os fundamentos da Educação Financeira e a metodologia da coleção.",
      topics: [
        "Educação Financeira na sala de aula",
        "O programa da BEĨ Educação",
          "Metodologias Ativas",
          "O material didático",
          "Iniciando a aplicação - Diagnóstico"
      ],
    },
    {
      label: "Módulo 2",
      title: "Planejar: Organize estratégias, projetos e atividades para sua turma.",
      topics: [
        "Projetos sugeridos nos livros",
        "Matriz de habilidades",
        "Metas SMART: um modelo para aperfeiçoar suas metas",
        "Ferramenta 5W2H: um modelo de plano de ação"
      ],
    },
    {
      label: "Módulo 3",
      title: "Acompanhar: Utilize ferramentas de monitoramento e avaliação para acompanhar as aprendizagens.",
      topics: [
        "A importância de monitorar as atividades",
        "Erro como pista para ajustar a mediação da aprendizagem",
        "Tipos de Avaliação",
        "Rubrica Avaliativa: Ferramenta que envolve os estudantes"
      ],
    },
    {
      label: "Módulo 4",
      title: "Refletir e Compartilhar: Analise resultados, registre experiências e valorize as conquistas dos estudantes.",
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
    <section
      ref={ref}
      id="apresentacao-4"
      className="w-full scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-8"
    >
      <h2 className={`${titleFont.className} mb-4 text-4xl text-center font-bold text-slate-600 dark:text-white`}>
        Módulos
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {modules.map((module, index) => (
          <AccordionItem
            key={index}
            value={`module-${index}`}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 shadow-sm hover:shadow-md transition-shadow duration-300 px-5"
          >
            <AccordionTrigger className={`${titleFont.className} text-left text-lg md:text-xl font-normal text-slate-700 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-200 hover:font-normal hover:no-underline`}>
              <span>
                <span className="font-bold">{module.label}</span>
                {" — "}
                {module.title}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                {module.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
