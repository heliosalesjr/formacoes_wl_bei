"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSidebar } from "@/contexts/SidebarContext";
import { Calculator, Compass, BarChart3 } from "lucide-react";
import { titleFont } from "@/lib/fonts";

const perguntasDecisao = [
  "É necessário agora?",
  "As parcelas cabem no orçamento?",
  "Há opção mais econômica?",
];

const EF3b = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("ef-3b");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div
      ref={ref}
      id="ef-3b"
      className="scroll-mt-20 bg-white dark:bg-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl"
    >
      {/* Cabeçalho */}
      <div className="text-center mb-10">
        <h1 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-200 mb-2 py-4`}>
          O mesmo problema, duas lentes
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
          A compra de um celular pode ser analisada de formas complementares.
        </p>
      </div>

      {/* Texto de abertura */}
      <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6 max-w-3xl mx-auto">
        Matemática financeira e educação financeira andam juntas, mas não são a mesma coisa. A{" "}
        <strong>matemática financeira</strong> dá as ferramentas de cálculo: porcentagem, juros, parcelas,
        comparação de valores. A <strong>educação financeira</strong> usa essas ferramentas para decidir,
        olhando para objetivos, orçamento, contexto e consequências.
      </p>

      <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6 max-w-3xl mx-auto">
        Um exemplo: um celular custa R$ 1.200 à vista ou 12 parcelas de R$ 125. Pela lente da
        matemática financeira, o estudante calcula que 12 × R$ 125 dá R$ 1.500. Isso é R$ 300 a mais,
        25% acima do preço à vista, com juros embutidos de cerca de 3,6% ao mês.
      </p>

      <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
        Pela lente da educação financeira, as perguntas mudam. Preciso de um celular novo agora?
        R$ 125 por mês cabe no orçamento da família por um ano, junto com as outras contas? O que
        deixo de fazer com esses R$ 300? Vale juntar e comprar à vista? Quem está me incentivando a
        comprar agora, e por quê?
      </p>

      {/* As duas lentes lado a lado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Matemática Financeira */}
        <div className="rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 flex flex-col">
          <div className="h-2 bg-blue-500" />
          <div className="bg-slate-50 dark:bg-slate-900/40 p-6 flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                <Calculator className="h-5 w-5 text-blue-600 dark:text-blue-300" />
              </span>
              <div>
                <h2 className={`${titleFont.className} text-xl font-bold text-slate-800 dark:text-slate-100`}>
                  Matemática Financeira
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Calcula o custo da compra</p>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 dark:bg-blue-900/30 p-4 text-center mb-5">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                À vista: R$ 1.200 | 12 parcelas de R$ 125
              </p>
              <p className={`${titleFont.className} text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-300 my-2`}>
                12 × R$ 125 = R$ 1.500
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                R$ 300 a mais, 25% acima do preço à vista
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Juros embutidos de cerca de 3,6% ao mês
              </p>
            </div>

            <p className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">Pergunta-chave</p>
            <p className="text-slate-700 dark:text-slate-200">Quanto será pago ao final?</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              O cálculo revela o valor total das parcelas.
            </p>
          </div>
        </div>

        {/* Educação Financeira */}
        <div className="rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 flex flex-col">
          <div className="h-2 bg-green-500" />
          <div className="bg-slate-50 dark:bg-slate-900/40 p-6 flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                <Compass className="h-5 w-5 text-green-600 dark:text-green-300" />
              </span>
              <div>
                <h2 className={`${titleFont.className} text-xl font-bold text-slate-800 dark:text-slate-100`}>
                  Educação Financeira
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Ajuda a avaliar e decidir</p>
              </div>
            </div>

            <div className="rounded-lg bg-green-50 dark:bg-green-900/30 p-4 text-center mb-5">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Considera a vida financeira como um todo
              </p>
              <p className={`${titleFont.className} text-xl md:text-2xl font-bold text-green-700 dark:text-green-300 my-2`}>
                Cabe no orçamento?
              </p>
            </div>

            <p className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Perguntas para decidir</p>
            <ul className="space-y-2">
              {perguntasDecisao.map((pergunta, index) => (
                <li key={index} className="flex gap-2 text-slate-700 dark:text-slate-200">
                  <span className="text-green-600 dark:text-green-400 shrink-0">•</span>
                  <span>{pergunta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Fechamento */}
      <div className="rounded-xl bg-blue-50 dark:bg-blue-900/30 p-6 text-center mb-10">
        <p className={`${titleFont.className} text-lg font-bold text-blue-800 dark:text-blue-200`}>
          A conta dá base para a escolha. A escolha dá sentido à conta.
        </p>
        <p className="text-slate-600 dark:text-slate-300 mt-2 max-w-2xl mx-auto">
          A conta sozinha não decide a compra, e a decisão sem a conta fica no escuro. Por isso, nos
          materiais da BEĨ, as duas lentes aparecem juntas: o cálculo dá base para a escolha, e a
          escolha dá sentido ao cálculo.
        </p>
      </div>

      {/* Infográfico */}
      <div>
        <div className="flex items-center justify-center gap-3 mb-6">
          <BarChart3 className="h-7 w-7 text-indigo-600" />
          <h2 className={`${titleFont.className} text-2xl font-semibold text-slate-800 dark:text-slate-200`}>
            Infográfico
          </h2>
        </div>
        <div className="flex justify-center">
          <Image
            src="/infografico-duas-lentes.png"
            alt="Infográfico: O mesmo problema, duas lentes. Um celular custa R$ 1.200 à vista ou 12 parcelas de R$ 125. Pela matemática financeira (quanto custa?): 12 × R$ 125 = R$ 1.500, R$ 300 a mais, 25% acima do preço à vista, juros de cerca de 3,6% ao mês. Pela educação financeira (vale a pena?): preciso de um celular novo agora? R$ 125 por mês cabe no orçamento por um ano? Dá para juntar e comprar à vista? A conta dá base para a escolha. A escolha dá sentido à conta."
            width={539}
            height={722}
            className="w-full h-auto max-w-xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EF3b;
