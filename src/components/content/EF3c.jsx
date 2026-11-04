"use client";
import React, { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { BookOpen, LineChart } from "lucide-react";
import { titleFont } from "@/lib/fonts";

const etapas = [
  {
    nome: "Anos iniciais",
    intervalo: "1º ao 5º ano",
    badge: "bg-blue-600 text-white",
    chip: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200",
    card: "border-blue-100 bg-blue-50/60 dark:border-blue-900/40 dark:bg-blue-900/20",
    rotulo: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200",
    habilidades: [
      {
        ano: "1º",
        tema: "Sistema monetário",
        codigo: "EF01MA19",
        descricao:
          "Reconhecer e relacionar valores de moedas e cédulas do sistema monetário brasileiro em situações simples do cotidiano.",
      },
      {
        ano: "2º",
        tema: "Sistema monetário",
        codigo: "EF02MA20",
        descricao:
          "Estabelecer equivalência de valores entre moedas e cédulas do sistema monetário brasileiro para resolver situações cotidianas.",
      },
      {
        ano: "3º",
        tema: "Sistema monetário",
        codigo: "EF03MA24",
        descricao:
          "Resolver e elaborar problemas envolvendo comparação e equivalência de valores monetários em situações de compra, venda e troca.",
      },
      {
        ano: "4º",
        tema: "Dinheiro, compra, venda e desconto",
        codigo: "EF04MA25",
        descricao:
          "Resolver e elaborar problemas envolvendo situações de compra e venda e formas de pagamento, incluindo troco e desconto.",
      },
      {
        ano: "5º",
        tema: "Porcentagem e educação financeira",
        codigo: "EF05MA06",
        descricao:
          "Calcular porcentagens como 10%, 25%, 50%, 75% e 100%, inclusive em contextos de educação financeira.",
      },
    ],
  },
  {
    nome: "Anos finais",
    intervalo: "6º ao 9º ano",
    badge: "bg-indigo-600 text-white",
    chip: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200",
    card: "border-indigo-100 bg-indigo-50/60 dark:border-indigo-900/40 dark:bg-indigo-900/20",
    rotulo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200",
    habilidades: [
      {
        ano: "6º",
        tema: "Porcentagem",
        codigo: "EF06MA13",
        descricao:
          "Resolver e elaborar problemas envolvendo porcentagens, com base na proporcionalidade, em contextos de educação financeira.",
      },
      {
        ano: "7º",
        tema: "Porcentagem e acréscimos/descontos",
        codigo: "EF07MA02",
        descricao:
          "Resolver e elaborar problemas que envolvam porcentagens, utilizando estratégias diversas.",
      },
      {
        ano: "8º",
        tema: "Porcentagem e situações financeiras",
        codigo: "EF08MA04",
        descricao:
          "Resolver e elaborar problemas, envolvendo cálculo de porcentagens, incluindo o uso de tecnologias digitais.",
      },
      {
        ano: "9º",
        tema: "Percentuais sucessivos e educação financeira",
        codigo: "EF09MA05",
        descricao:
          "Resolver e elaborar problemas envolvendo percentuais sucessivos e determinação de taxas percentuais, no contexto da educação financeira.",
      },
    ],
  },
];

// Página 2 do documento: leitura e interpretação de tabelas e gráficos
const habilidadesGraficos = [
  {
    ano: "1º",
    codigo: "EF01MA21",
    descricao: "Ler dados expressos em tabelas e gráficos de colunas simples.",
  },
  {
    ano: "2º",
    codigo: "EF02MA22",
    descricao: "Comparar informações apresentadas em tabelas e gráficos.",
  },
  {
    ano: "3º",
    codigo: "EF03MA27",
    descricao: "Ler, interpretar e comparar dados apresentados em tabelas e gráficos.",
  },
  {
    ano: "4º",
    codigo: "EF04MA27",
    descricao: "Analisar dados apresentados em tabelas e gráficos.",
  },
  {
    ano: "5º",
    codigo: "EF05MA24",
    descricao: "Interpretar dados estatísticos apresentados em textos, tabelas e gráficos.",
  },
  {
    ano: "6º",
    codigo: "EF06MA31",
    descricao: "Identificar e interpretar informações apresentadas em diferentes tipos de gráficos.",
  },
  {
    ano: "7º",
    codigo: "EF07MA37",
    descricao:
      "Identificar as variáveis e suas frequências e os elementos constitutivos (título, eixos, legendas, fontes e datas) em diferentes tipos de gráfico.",
  },
  {
    ano: "8º",
    codigo: "EF08MA23",
    descricao: "Avaliar informações apresentadas em diferentes tipos de gráficos.",
  },
  {
    ano: "9º",
    codigo: "EF09MA22",
    descricao: "Escolher e construir o gráfico mais adequado para representar um conjunto de dados.",
  },
];

const corDoAno = (ano) =>
  Number(ano.replace("º", "")) <= 5
    ? { badge: "bg-blue-600 text-white", chip: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200" }
    : { badge: "bg-indigo-600 text-white", chip: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200" };

const EF3c = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("ef-3c");
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
      id="ef-3c"
      className="scroll-mt-20 bg-white dark:bg-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl"
    >
      {/* Cabeçalho */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-2 py-4">
          <BookOpen className="h-8 w-8 text-blue-600 shrink-0" />
          <h1 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-200`}>
            Onde este tema aparece na BNCC?
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
          Veja algumas habilidades de Matemática relacionadas à Educação Financeira, desenvolvidas
          progressivamente do 1º ao 9º ano.
        </p>
      </div>

      {/* Linha do tempo das habilidades */}
      <div className="max-w-3xl mx-auto space-y-10">
        {etapas.map((etapa) => (
          <div key={etapa.nome}>
            <div className="flex items-center gap-3 mb-5">
              <span className={`${titleFont.className} rounded-full px-3 py-1 text-sm font-bold ${etapa.rotulo}`}>
                {etapa.nome}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{etapa.intervalo}</span>
              <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            </div>

            <ol>
              {etapa.habilidades.map((habilidade, index) => (
                <li key={habilidade.codigo} className="flex gap-4 md:gap-5">
                  {/* Trilha com o ano */}
                  <div className="flex flex-col items-center">
                    <span
                      className={`${titleFont.className} flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold shadow-sm ${etapa.badge}`}
                    >
                      {habilidade.ano}
                    </span>
                    {index < etapa.habilidades.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 pb-6">
                    <div
                      className={`rounded-xl border p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${etapa.card}`}
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                        <span className={`rounded-md px-2 py-0.5 text-xs font-bold tracking-wide ${etapa.chip}`}>
                          {habilidade.codigo}
                        </span>
                        <h3 className={`${titleFont.className} text-base md:text-lg font-bold text-slate-800 dark:text-slate-100`}>
                          {habilidade.tema}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                        {habilidade.descricao}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {/* Ponte para a segunda lista */}
      <div className="max-w-3xl mx-auto mt-4 rounded-xl border-l-4 border-l-green-500 bg-green-50 dark:bg-green-900/20 p-6 shadow-sm">
        <div className="flex gap-4">
          <LineChart className="h-7 w-7 text-green-600 dark:text-green-400 shrink-0" />
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Isso é particularmente interessante porque o tema financeiro não trabalha apenas dinheiro
            e porcentagem. O estudante também precisa{" "}
            <strong>ler, interpretar e comparar informações apresentadas em tabelas e gráficos</strong>.
          </p>
        </div>
      </div>

      {/* Tabela: habilidades de leitura de tabelas e gráficos */}
      <div className="max-w-3xl mx-auto mt-10">
        <p className={`${titleFont.className} text-lg font-bold text-slate-700 dark:text-slate-200 mb-4`}>
          Podemos apresentar, por exemplo:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <caption className="sr-only">
              Habilidades da BNCC de leitura e interpretação de tabelas e gráficos, do 1º ao 9º ano
            </caption>
            <thead>
              <tr className="bg-blue-500 text-white">
                <th scope="col" className={`${titleFont.className} w-24 px-4 py-4 text-center text-sm md:text-base font-bold`}>
                  Ano
                </th>
                <th scope="col" className={`${titleFont.className} px-4 py-4 text-sm md:text-base font-bold`}>
                  Habilidade relacionada
                </th>
              </tr>
            </thead>
            <tbody>
              {habilidadesGraficos.map((habilidade) => {
                const cor = corDoAno(habilidade.ano);
                return (
                  <tr
                    key={habilidade.codigo}
                    className="border-t border-slate-200 dark:border-slate-700 odd:bg-white even:bg-slate-50 dark:odd:bg-slate-800 dark:even:bg-slate-900/40 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                  >
                    <th scope="row" className="px-4 py-4 align-top text-center">
                      <span
                        className={`${titleFont.className} inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold shadow-sm ${cor.badge}`}
                      >
                        {habilidade.ano}
                      </span>
                      <span className="mt-1 block text-xs font-medium text-slate-500 dark:text-slate-400">ano</span>
                    </th>
                    <td className="px-4 py-4 align-top">
                      <span className={`mb-2 inline-block rounded-md px-2 py-0.5 text-xs font-bold tracking-wide ${cor.chip}`}>
                        {habilidade.codigo}
                      </span>
                      <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                        {habilidade.descricao}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Legenda das etapas */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {etapas.map((etapa) => (
            <div key={etapa.nome} className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${etapa.badge}`} aria-hidden="true" />
              <span className="text-sm text-slate-600 dark:text-slate-300">
                {etapa.nome} <span className="text-slate-400 dark:text-slate-500">({etapa.intervalo})</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EF3c;
