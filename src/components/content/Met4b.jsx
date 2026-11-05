"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/contexts/SidebarContext";
import { Droplets, UtensilsCrossed, Tags, Megaphone } from "lucide-react";
import { titleFont } from "@/lib/fonts";

const projetos = [
  {
    titulo: "Quanto custa o consumo de água da escola?",
    curto: "Água da escola",
    etapa: "Anos iniciais e finais",
    icone: Droplets,
    imagem: "/custo_agua.png",
    largura: 431,
    altura: 585,
    fizeram: "Levantaram dados de consumo, observaram hábitos e calcularam os gastos.",
    resultado: "Elaboraram propostas para reduzir o consumo e apresentaram à direção.",
    aba: "data-[ativo=true]:bg-sky-600 data-[ativo=true]:text-white",
    tinta: "text-sky-600 dark:text-sky-400",
    fundo: "bg-sky-50 dark:bg-sky-900/20",
    borda: "border-l-sky-500",
    selo: "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-200",
  },
  {
    titulo: "Quanto custa uma merenda?",
    curto: "Merenda",
    etapa: "Anos iniciais",
    icone: UtensilsCrossed,
    imagem: "/custo_merenda.png",
    largura: 439,
    altura: 592,
    fizeram: "Pesquisaram preços dos ingredientes e calcularam o custo das refeições.",
    resultado: "Compararam preços e discutiram planejamento e desperdício.",
    aba: "data-[ativo=true]:bg-amber-600 data-[ativo=true]:text-white",
    tinta: "text-amber-600 dark:text-amber-400",
    fundo: "bg-amber-50 dark:bg-amber-900/20",
    borda: "border-l-amber-500",
    selo: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-200",
  },
  {
    titulo: "O preço das escolhas",
    curto: "Preço das escolhas",
    etapa: "Anos finais",
    icone: Tags,
    imagem: "/preco_escolhas.png",
    largura: 453,
    altura: 608,
    fizeram:
      "Compararam preços, formas de pagamento, descontos e compras à vista ou parceladas.",
    resultado: "Identificaram como juros e condições de pagamento alteram o custo final.",
    aba: "data-[ativo=true]:bg-violet-600 data-[ativo=true]:text-white",
    tinta: "text-violet-600 dark:text-violet-400",
    fundo: "bg-violet-50 dark:bg-violet-900/20",
    borda: "border-l-violet-500",
    selo: "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-200",
  },
  {
    titulo: "Publicidade que vende",
    curto: "Publicidade",
    etapa: "Anos finais",
    icone: Megaphone,
    imagem: "/publicidade_que_vende.png",
    largura: 457,
    altura: 611,
    fizeram: "Analisaram propagandas e estratégias usadas para estimular o consumo.",
    resultado:
      "Criaram critérios para diferenciar necessidade, desejo e influência da publicidade.",
    aba: "data-[ativo=true]:bg-rose-600 data-[ativo=true]:text-white",
    tinta: "text-rose-600 dark:text-rose-400",
    fundo: "bg-rose-50 dark:bg-rose-900/20",
    borda: "border-l-rose-500",
    selo: "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-200",
  },
];

const Met4b = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();
  const [ativo, setAtivo] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("met-4b");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  const projeto = projetos[ativo];
  const Icone = projeto.icone;

  return (
    <div
      ref={ref}
      id="met-4b"
      className="scroll-mt-20 bg-white dark:bg-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl"
    >
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-200 mb-2 py-4`}>
          Projetos que saem da sala de aula e chegam à realidade
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          A educação financeira pode partir de situações reais vivenciadas pelos estudantes,
          transformando conteúdos em <strong>investigação, tomada de decisão e ação</strong>.
          Conheça alguns projetos já realizados em diferentes etapas de ensino.
        </p>
      </div>

      {/* Abas dos projetos */}
      <div role="tablist" aria-label="Projetos realizados" className="flex flex-wrap justify-center gap-3 mb-8">
        {projetos.map((item, index) => {
          const IconeAba = item.icone;
          const selecionado = index === ativo;
          return (
            <button
              key={item.titulo}
              role="tab"
              id={`met-4b-aba-${index}`}
              aria-selected={selecionado}
              aria-controls={`met-4b-painel-${index}`}
              data-ativo={selecionado}
              onClick={() => setAtivo(index)}
              className={`${titleFont.className} inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold shadow-sm transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 ${
                selecionado
                  ? `border-transparent shadow-md ${item.aba}`
                  : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-300"
              }`}
            >
              <IconeAba className="h-4 w-4 shrink-0" />
              {item.curto}
            </button>
          );
        })}
      </div>

      {/* Painel do projeto selecionado */}
      <AnimatePresence mode="wait">
        <motion.div
          key={ativo}
          id={`met-4b-painel-${ativo}`}
          role="tabpanel"
          aria-labelledby={`met-4b-aba-${ativo}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid items-center gap-8 md:grid-cols-[minmax(0,22rem)_1fr]"
        >
          {/* Infográfico */}
          <div className="flex justify-center">
            <Image
              src={projeto.imagem}
              alt={`Infográfico do projeto ${projeto.titulo}. Etapa: ${projeto.etapa}. O que os estudantes fizeram: ${projeto.fizeram} Resultado: ${projeto.resultado}`}
              width={projeto.largura}
              height={projeto.altura}
              className="w-full h-auto max-w-sm rounded-xl shadow-lg"
            />
          </div>

          {/* Conteúdo */}
          <div>
            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${projeto.selo}`}>
              <Icone className="h-4 w-4" />
              {projeto.etapa}
            </span>

            <h3 className={`${titleFont.className} mt-3 mb-6 text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100`}>
              {projeto.titulo}
            </h3>

            <div className={`mb-4 rounded-xl border-l-4 p-5 shadow-sm ${projeto.borda} ${projeto.fundo}`}>
              <p className={`${titleFont.className} mb-1 text-xs font-bold uppercase tracking-wider ${projeto.tinta}`}>
                O que os estudantes fizeram
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">{projeto.fizeram}</p>
            </div>

            <div className={`rounded-xl border-l-4 p-5 shadow-sm ${projeto.borda} ${projeto.fundo}`}>
              <p className={`${titleFont.className} mb-1 text-xs font-bold uppercase tracking-wider ${projeto.tinta}`}>
                Resultado
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                {projeto.resultado}
              </p>
            </div>

            {/* Indicador de posição */}
            <div className="mt-6 flex items-center gap-2">
              {projetos.map((item, index) => (
                <span
                  key={item.titulo}
                  aria-hidden="true"
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === ativo
                      ? "w-8 bg-slate-700 dark:bg-slate-200"
                      : "w-3 bg-slate-300 dark:bg-slate-600"
                  }`}
                />
              ))}
              <span className="ml-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                {ativo + 1} de {projetos.length}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Met4b;
