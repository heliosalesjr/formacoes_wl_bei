"use client"
import { useEffect, useRef, useState  } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { FaChevronDown, FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa'
import { titleFont } from '@/lib/fonts'

const referencias = [
  {
    autores: 'BEĨ EDUCAÇÃO.',
    texto: 'Coleção Aprendendo a lidar com dinheiro: materiais do estudante e do educador para o 4º e o 5º ano. [S. l.]: BEĨ Educação, [s. d.].',
  },
  {
    autores: 'BENDER, William N.',
    texto: 'Aprendizagem baseada em projetos: educação diferenciada para o século XXI. Tradução de Fernando de Siqueira Rodrigues. Porto Alegre: Penso, 2014.',
  },
  {
    autores: 'BRASIL.',
    texto: 'Ministério da Educação. Base Nacional Comum Curricular. Brasília, DF: MEC, 2018.',
    link: 'https://basenacionalcomum.mec.gov.br/images/BNCC_20dez_site.pdf',
  },
  {
    autores: 'DESIDÉRIO, Mariana.',
    texto: 'Com renda curta e crédito ruim, brasileiro volta às dívidas após Desenrola. UOL Economia, 26 maio 2025.',
    link: 'https://economia.uol.com.br/noticias/redacao/2025/05/26/endividamento.htm',
  },
  {
    autores: 'DUARTE, Rafael.',
    texto: 'Tutorial de Padlet para professores e alunos. YouTube, [s. d.].',
    link: 'https://www.youtube.com/watch?v=WzPqHeUq6z8',
  },
  {
    autores: 'FERREIRA, Eduardo.',
    texto: 'O que é um diário de bordo e como usá-lo na Educação Infantil? Diálogos Embalados, 25 out. 2023.',
    link: 'https://dialogosembalados.com.br/blog/o-que-e-um-diario-de-bordo-e-como-usa-lo-na-educacao-infantil/',
  },
  {
    autores: 'LUNA, Denise.',
    texto: 'Endividamento das famílias sobe para 77,6% em abril, diz CNC. CNN Brasil, 7 maio 2025.',
    link: 'https://www.cnnbrasil.com.br/economia/endividamento-das-familias-sobe-para-776-em-abril-diz-cnc/',
  },
  {
    autores: 'ORGANIZAÇÃO PARA A COOPERAÇÃO E DESENVOLVIMENTO ECONÔMICO – OCDE.',
    texto: 'Improving financial literacy: analysis of issues and policies. Paris: OECD Publishing, 2005.',
    link: 'https://www.oecd.org/en/publications/improving-financial-literacy_9789264012578-en.html',
  },
  {
    autores: 'PADLET.',
    texto: 'Padlet: ferramenta digital de colaboração e organização de conteúdos. [S. l.], [s. d.].',
    link: 'https://padlet.com/',
  },
  {
    autores: 'POR QUÊ?',
    texto: 'Endividamento: Guetonomia #27. 23 ago. 2019.',
    link: 'https://porque.com.br/endividamento-guetonomia-27',
  },
  {
    autores: 'POR QUÊ?',
    texto: 'Endividamento excessivo: Papo Reto. 26 ago. 2019.',
    link: 'https://porque.com.br/endividamento-excessivo-papo-reto',
  },
  {
    autores: 'SICREDI.',
    texto: 'Saúde mental e finanças: o que você precisa saber. Blog do Sicredi, 10 set. 2024.',
    link: 'https://www.sicredi.com.br/site/blog/educacao-financeira/saude-mental-financas-voce-precisa-saber/',
  },
  {
    autores: 'TRANSFORMANDO.COM.VC.',
    texto: 'O que é um diário de bordo e como usar na Educação Infantil? 5 jan. 2022.',
    link: 'https://transformando.com.vc/o-que-e-um-diario-de-bordo-e-como-usar-na-educacao-infantil/',
  },
  {
    autores: 'TV CULTURA.',
    texto: 'Juliana Inhasz sobre endividamento de brasileiros: “É uma questão cultural que se arrasta”. YouTube, [s. d.].',
    link: 'https://www.youtube.com/watch?v=srOQ8l_ps0o',
  },
];

const Mat8 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('mat-8');
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
    <div ref={ref} id="mat-8" className="scroll-mt-20 bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-6 md:p-10 space-y-8 text-center">
      {/* Título */}
      <h2 className={`${titleFont.className} text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-200`}>
        Encerrando o Módulo 1
      </h2>

      {/* Subtítulo */}
      <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg max-w-3xl mx-auto">
        Chegamos ao final do primeiro módulo da nossa trilha de aprendizagem. Assista a seguir um vídeo com um resumo dos conteúdos abordados:
      </p>

      {/* Vídeo */}
      <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/6QVRbZvtHfw"
          title="Resumo Módulo 1"
          allowFullScreen
        ></iframe>
      </div>

      {/* Accordion de Referências */}
      <div className="text-left max-w-3xl mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="referencias-lista"
          className={`w-full flex justify-between items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-slate-700 dark:hover:to-slate-700 transition-all rounded-xl ${isOpen ? 'rounded-b-none' : ''} px-6 py-4 shadow border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold`}
        >
          <span className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 dark:bg-blue-700 text-white shadow-sm">
              <FaBookOpen className="w-4 h-4" />
            </span>
            <span>Acesse aqui as Referências Gerais de nosso conteúdo</span>
          </span>
          <FaChevronDown
            className={`text-slate-600 dark:text-slate-400 flex-shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        <div
          id="referencias-lista"
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <ol className="bg-white dark:bg-slate-800 border border-t-0 border-slate-200 dark:border-slate-700 rounded-b-xl px-6 py-5 divide-y divide-slate-100 dark:divide-slate-700/60 text-sm text-slate-700 dark:text-slate-300">
              {referencias.map(({ autores, texto, link }, index) => (
                <li key={index} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                    {index + 1}
                  </span>
                  <div className="leading-relaxed">
                    <strong className="dark:text-slate-100">{autores}</strong> {texto}
                    {link && (
                      <>
                        {' '}Disponível em:{' '}
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-baseline gap-1 text-blue-600 dark:text-blue-400 hover:underline break-all"
                        >
                          <span>{link}</span>
                          <FaExternalLinkAlt className="w-2.5 h-2.5 flex-shrink-0" />
                        </a>
                        .
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mat8
