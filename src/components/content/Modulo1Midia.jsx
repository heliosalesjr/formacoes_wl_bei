"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { ExternalLink, TrendingDown, HeartPulse, Building2, GraduationCap, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { titleFont } from "@/lib/fonts";

const noticiasEndividamento = [
  {
    titulo: "Endividamento das famílias atinge novos patamares",
    fonte: "UOL Economia",
    url: "https://economia.uol.com.br/noticias/redacao/2025/05/26/endividamento.htm",
  },
  {
    titulo: "Endividamento das famílias sobe para 77,6% em abril",
    fonte: "CNN Brasil",
    url: "https://www.cnnbrasil.com.br/economia/endividamento-das-familias-sobe-para-776-em-abril-diz-cnc/",
  },
  {
    titulo: "Empresas alertam governo sobre alto endividamento dos trabalhadores",
    fonte: "Correio Braziliense",
    url: "https://blogs.correiobraziliense.com.br/capital-sa/2025/05/22/empresas-alertam-governo-sobre-alto-endividamento-dos-trabalhadores/",
  },
  {
    titulo: "Recorde de endividados revela fraturas no crescimento econômico",
    fonte: "Veja",
    url: "https://veja.abril.com.br/economia/recorde-de-endividados-revela-fraturas-no-crescimento-economico-do-brasil/",
  },
  {
    titulo: "64% dos trabalhadores tiveram saúde mental afetada por problemas financeiros",
    fonte: "Exame",
    url: "https://exame.com/carreira/setembro-amarelo-64-dos-trabalhadores-tiveram-a-saude-mental-afetada-por-problemas-financeiros/",
  },
  {
    titulo: "Educação financeira contribui para a saúde mental",
    fonte: "Sicredi",
    url: "https://www.sicredi.com.br/coop/celeiro-mtrr/noticias/educacao/educacao-financeira-contribui-para-a-saude-mental/",
  },
  {
    titulo: "Quase metade dos brasileiros está inadimplente",
    fonte: "Valor Econômico",
    url: "https://valor.globo.com/brasil/noticia/2025/05/19/quase-metade-dos-brasileiros-esta-inadimplente.ghtml",
  },
];

export default function Modulo1Midia() {
  const ref = useRef();
  const { markAsViewed } = useSidebar();
  const [showNoticiasModal, setShowNoticiasModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("modulo-1-midia");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  useEffect(() => {
    if (!showNoticiasModal) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowNoticiasModal(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showNoticiasModal]);

  return (
    <div
      ref={ref}
      id="modulo-1-midia"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-10 shadow-2xl border border-slate-100 dark:border-slate-700"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Cabeçalho */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
            Educação Financeira na Mídia
          </h2>
        </div>

        {/* Bloco 1 – Endividamento */}
        <section className="bg-white/80 dark:bg-slate-800/80 p-8 rounded-xl shadow-md border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="h-7 w-7 text-blue-600" />
            <h3 className={`${titleFont.className} text-2xl font-semibold text-slate-800 dark:text-slate-200`}>Endividamento das Famílias</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
            O endividamento das famílias brasileiras alcança níveis preocupantes e vem se agravando progressivamente. 
            Em abril de 2025, por exemplo, <strong>77,6% das famílias</strong> já se declaravam endividadas, segundo dados da CNC — 
            representando o terceiro mês seguido de aumento. 
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
            Segundo artigo da{" "}
            <a
              href="https://www.cnnbrasil.com.br/economia/endividamento-das-familias-sobe-para-776-em-abril-diz-cnc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              CNN Brasil <ExternalLink className="h-4 w-4" />
            </a>
            , esse cenário evidencia uma fragilidade crescente no orçamento doméstico, especialmente considerando 
            que parcela significativa dessas dívidas está em atraso, com inadimplência atingindo aproximadamente 29,1% no mesmo período.
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Em agosto de 2025, o índice de inadimplência bateu 30,4%, confirmando o maior patamar da série histórica da CNC. 
            Quase metade dos brasileiros encontra-se inadimplente — uma situação que revela profundas{" "}
            <em>“fraturas no crescimento econômico”</em> do país, como destacou o{" "}
            <a
              href="https://economia.uol.com.br/noticias/redacao/2025/05/26/endividamento.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              UOL Economia <ExternalLink className="h-4 w-4" />
            </a>.
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            Leia mais notícias{" "}
            <button
              type="button"
              onClick={() => setShowNoticiasModal(true)}
              className="text-blue-600 font-medium hover:underline"
            >
              aqui
            </button>
            .
          </p>
        </section>

        {/* Bloco 2 – Saúde emocional */}
        <section className="bg-white/80 dark:bg-slate-800/80 p-8 rounded-xl shadow-md border-l-4 border-l-pink-500 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <HeartPulse className="h-7 w-7 text-pink-600" />
            <h3 className={`${titleFont.className} text-2xl font-semibold text-slate-800 dark:text-slate-200`}>Saúde Mental e Finanças</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
            Esse quadro financeiro adverso não afeta apenas as finanças materiais — ele tem 
            repercussões diretas na <strong>saúde emocional</strong> das pessoas. Problemas financeiros são reconhecidos como fortes gatilhos 
            de ansiedade, estresse e depressão, comprometendo o bem-estar e o desempenho profissional.
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Programas de educação financeira surgem como ferramentas eficazes para mitigar esses impactos. 
            Segundo o{" "}
            <a
              href="https://www.sicredi.com.br/site/blog/educacao-financeira/saude-mental-financas-voce-precisa-saber/?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              Sicredi <ExternalLink className="h-4 w-4" />
            </a>
            , aprender a gerir recursos é uma estratégia que auxilia também no cuidado com a saúde mental, 
            promovendo engajamento e produtividade.
          </p>
        </section>

        {/* Bloco 3 – Impacto social */}
        <section className="bg-white/80 dark:bg-slate-800/80 p-8 rounded-xl shadow-md border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-7 w-7 text-green-600" />
            <h3 className={`${titleFont.className} text-2xl font-semibold text-slate-800 dark:text-slate-200`}>Impacto Social e Econômico</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            O impacto social e econômico do alto endividamento não é negligenciável. Empresas e sindicatos já vêm alertando o governo sobre o alto endividamento dos trabalhadores, que limita o consumo interno e amplia vulnerabilidades sociais. 

          </p>

          <p className="text-slate-700 dark:text-slate-200 leading-relaxed pt-6">
            Diante desse panorama, a educação financeira emerge como intervenção estratégica, capaz de articular conhecimento técnico e atitudes sustentáveis no uso do crédito. O curso que você está desenvolvendo pode mostrar caminhos para romper esse ciclo: Se capacitar para estimular o protagonismo de seus estudantes e fortalecer a cultura do planejamento financeiro na escola. Ao revelar que finanças conscientes e bem-estar emocional andam juntos, promovemos não apenas cidadãos mais competentes, mas também comunidades mais saudáveis e resilientes.

          </p>
        </section>

        {/* Bloco 4 – Conclusão */}
        <section className="bg-white/80 dark:bg-slate-800/80 p-8 rounded-xl shadow-md border-l-4 border-l-yellow-500 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-7 w-7 text-yellow-600" />
            <h3 className={`${titleFont.className} text-2xl font-semibold text-slate-800 dark:text-slate-200`}>Educação Financeira e Bem-Estar</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
            Promover a saúde financeira é, portanto, investir em bem-estar, autonomia e cidadania. Ao compreender que finanças conscientes e equilíbrio emocional caminham juntos, formamos não apenas cidadãos mais competentes, mas também comunidades mais saudáveis, resilientes e solidárias  pilares essenciais para um país mais equilibrado e próspero.
          </p>
          
        </section>
      </div>

      <AnimatePresence>
        {showNoticiasModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowNoticiasModal(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-xl bg-white dark:bg-slate-800 p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Mais notícias sobre endividamento das famílias"
            >
              <button
                type="button"
                onClick={() => setShowNoticiasModal(false)}
                aria-label="Fechar"
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <h3 className={`${titleFont.className} text-2xl font-bold text-slate-800 dark:text-white mb-6 pr-8`}>
                Mais notícias sobre endividamento das famílias
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                {noticiasEndividamento.map((noticia, index) => (
                  <a
                    key={index}
                    href={noticia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block bg-slate-50 dark:bg-slate-700/60 p-5 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-l-4 ${
                      index % 2 === 0 ? "border-l-blue-500" : "border-l-green-500"
                    } group`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className={`${titleFont.className} text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-1`}>
                          {noticia.titulo}
                        </h4>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                          {noticia.fonte}
                        </p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 flex-shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
