"use client";
import React, { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { FileText, Search, CircleCheckBig } from "lucide-react";
import { titleFont } from "@/lib/fonts";

const comparacao = [
  {
    rotulo: "O cenário",
    destaque: true,
    atividade: "Fazer um cartaz sobre economizar água.",
    projeto: "Investigar quanto de água a escola consome.",
  },
  {
    rotulo: "O que o aluno faz",
    atividade: "Recebe informações e produz um material de conscientização.",
    projeto: "Coleta e analisa dados reais da escola.",
  },
  {
    rotulo: "O foco",
    atividade: "Está na produção e na aprendizagem do conteúdo.",
    projeto: "Está na investigação de um problema real e na busca de soluções.",
  },
  {
    rotulo: "Resultado",
    atividade: "Um cartaz.",
    projeto: "Uma proposta de intervenção.",
  },
  {
    rotulo: "Exemplo",
    atividade: "“Economize água!”",
    projeto:
      "“Descobrimos quanto a escola gasta e propomos à direção ações para reduzir o consumo e a conta.”",
  },
];

const perguntas = [
  "Havia uma pergunta ou problema real para investigar?",
  "Os alunos precisavam coletar/analisar informações ou dados?",
  "Houve uma decisão, proposta, intervenção ou ação a partir do que descobriram?",
];

const Met2b = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("met-2b");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div
      ref={ref}
      id="met-2b"
      className="scroll-mt-20 bg-white dark:bg-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl"
    >
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-200 mb-2 py-4`}>
          Atividade ou projeto? O que muda na prática?
        </h2>
      </div>

      <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-3xl mx-auto mb-10">
        Trabalhar um tema em sala não significa, necessariamente, desenvolver um projeto. Uma
        atividade pode ser importante e significativa, mas um projeto envolve{" "}
        <strong>investigação, análise de uma situação concreta, tomada de decisões</strong> e,
        geralmente, a construção de uma proposta ou intervenção.
      </p>

      {/* Comparação lado a lado */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="md:grid md:grid-cols-[8.5rem_1fr_1fr]">
          {/* Cabeçalhos */}
          <div className="hidden md:block" />
          <div className="flex items-center justify-center gap-3 bg-blue-600 p-4">
            <FileText className="h-6 w-6 text-white/90 shrink-0" />
            <h3 className={`${titleFont.className} text-lg md:text-xl font-bold uppercase tracking-wide text-white`}>
              Atividade
            </h3>
          </div>
          <div className="flex items-center justify-center gap-3 bg-green-600 p-4">
            <Search className="h-6 w-6 text-white/90 shrink-0" />
            <h3 className={`${titleFont.className} text-lg md:text-xl font-bold uppercase tracking-wide text-white`}>
              Projeto
            </h3>
          </div>

          {/* Linhas */}
          {comparacao.map((linha) => (
            <React.Fragment key={linha.rotulo}>
              {/* Rótulo da linha */}
              <div className="flex items-center justify-center border-t border-slate-200 px-3 py-3 dark:border-slate-700 md:py-5">
                <span className={`${titleFont.className} inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-center text-[0.7rem] font-bold uppercase leading-tight tracking-wider text-slate-500 shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300`}>
                  {linha.rotulo}
                </span>
              </div>

              {/* Atividade */}
              <div
                className={`group border-t border-slate-200 p-4 transition-colors duration-300 dark:border-slate-700 md:p-5 ${
                  linha.destaque
                    ? "bg-blue-100/70 dark:bg-blue-900/30"
                    : "bg-blue-50/50 hover:bg-blue-100/60 dark:bg-blue-900/10 dark:hover:bg-blue-900/25"
                }`}
              >
                <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300 md:hidden">
                  Atividade
                </span>
                <p
                  className={`text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-200 ${
                    linha.destaque ? `${titleFont.className} font-bold` : ""
                  }`}
                >
                  {linha.atividade}
                </p>
              </div>

              {/* Projeto */}
              <div
                className={`group border-t border-slate-200 p-4 transition-colors duration-300 dark:border-slate-700 md:p-5 ${
                  linha.destaque
                    ? "bg-green-100/70 dark:bg-green-900/30"
                    : "bg-green-50/50 hover:bg-green-100/60 dark:bg-green-900/10 dark:hover:bg-green-900/25"
                }`}
              >
                <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-green-700 dark:text-green-300 md:hidden">
                  Projeto
                </span>
                <p
                  className={`text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-200 ${
                    linha.destaque ? `${titleFont.className} font-bold` : ""
                  }`}
                >
                  {linha.projeto}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Frase-síntese */}
      <p className={`${titleFont.className} mt-10 text-center text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100`}>
        A diferença não está no tema, mas no que os alunos fazem com ele.
      </p>

      {/* Três perguntas */}
      <div className="mt-10 max-w-3xl mx-auto">
        <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
          Um projeto pode começar com uma atividade, mas vai além dela: envolve{" "}
          <strong>pergunta, investigação, análise, tomada de decisão e ação</strong>. Com 3 perguntas
          rápidas, podemos definir se é uma atividade ou um projeto:
        </p>

        <ol className="space-y-3">
          {perguntas.map((pergunta, index) => (
            <li
              key={index}
              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900/40"
            >
              <span className={`${titleFont.className} flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-green-600 text-sm font-bold text-white`}>
                {index + 1}
              </span>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">{pergunta}</p>
            </li>
          ))}
        </ol>

        {/* Conclusão */}
        <div className="mt-6 flex items-start gap-4 rounded-xl bg-green-50 dark:bg-green-900/20 p-6 shadow-sm">
          <CircleCheckBig className="h-7 w-7 shrink-0 text-green-600 dark:text-green-400" />
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Se a resposta for <strong>sim para as três</strong>, provavelmente está descrevendo um{" "}
            <strong>projeto</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Met2b;
