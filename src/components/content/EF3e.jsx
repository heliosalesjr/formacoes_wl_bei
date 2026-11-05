"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import {
  FaClipboardList,
  FaRightLeft,
  FaPercent,
  FaCalculator,
  FaArrowTrendUp,
  FaCartShopping,
  FaPiggyBank,
  FaUmbrella,
  FaCreditCard,
  FaArrowsRotate,
  FaLayerGroup,
  FaMagnifyingGlassDollar,
  FaTriangleExclamation,
  FaLightbulb,
  FaGamepad,
  FaRotateLeft,
  FaXmark,
} from "react-icons/fa6";
import { titleFont } from "@/lib/fonts";

// Cada cor precisa existir por extenso para o Tailwind gerar as classes
const paleta = {
  amber: { chip: "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300", frente: "bg-amber-600" },
  sky: { chip: "bg-sky-100 text-sky-600 dark:bg-sky-900/40 dark:text-sky-300", frente: "bg-sky-600" },
  rose: { chip: "bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-300", frente: "bg-rose-600" },
  teal: { chip: "bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-300", frente: "bg-teal-600" },
  violet: { chip: "bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-300", frente: "bg-violet-600" },
  orange: { chip: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300", frente: "bg-orange-600" },
  pink: { chip: "bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300", frente: "bg-pink-600" },
  emerald: { chip: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300", frente: "bg-emerald-600" },
  blue: { chip: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300", frente: "bg-blue-600" },
  red: { chip: "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300", frente: "bg-red-600" },
  indigo: { chip: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300", frente: "bg-indigo-600" },
  cyan: { chip: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-300", frente: "bg-cyan-700" },
  yellow: { chip: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-300", frente: "bg-yellow-600" },
  lime: { chip: "bg-lime-100 text-lime-600 dark:bg-lime-900/40 dark:text-lime-300", frente: "bg-lime-700" },
};

const termos = [
  {
    termo: "Orçamento",
    icone: FaClipboardList,
    cor: "amber",
    definicao:
      "O registro de quanto entra e quanto sai de dinheiro num período, geralmente o mês. Serve para planejar antes de gastar, e não só para anotar depois.",
  },
  {
    termo: "Receita e despesa",
    icone: FaRightLeft,
    cor: "sky",
    definicao:
      "Receita é o dinheiro que entra (salário, mesada, venda). Despesa é o que sai. A despesa fixa se repete todo mês, como aluguel e luz. A variável muda, como lazer e roupa.",
  },
  {
    termo: "Juros",
    icone: FaPercent,
    cor: "rose",
    definicao:
      "O preço de usar um dinheiro que não é seu. Quem pega emprestado paga juros, e quem empresta ou investe recebe.",
  },
  {
    termo: "Juros simples",
    icone: FaCalculator,
    cor: "teal",
    definicao:
      "Calculados sempre sobre o valor inicial. Se você deve 100 com 10% ao mês, paga 10 de juros todo mês.",
  },
  {
    termo: "Juros compostos",
    icone: FaArrowTrendUp,
    cor: "violet",
    definicao:
      'Calculados sobre o valor que já inclui os juros anteriores, os "juros sobre juros". É o que faz uma dívida de cartão crescer tão rápido, e também o que faz um investimento render ao longo do tempo.',
  },
  {
    termo: "Inflação",
    icone: FaCartShopping,
    cor: "orange",
    definicao:
      "O aumento geral dos preços. Com inflação, o mesmo dinheiro compra menos coisa do que comprava antes.",
  },
  {
    termo: "Poupança e investimento",
    icone: FaPiggyBank,
    cor: "pink",
    definicao:
      "Poupar é guardar parte do que entra. Investir é colocar esse dinheiro guardado em algum lugar onde ele rende.",
  },
  {
    termo: "Reserva de emergência",
    icone: FaUmbrella,
    cor: "emerald",
    definicao:
      "Um dinheiro guardado só para imprevisto, como perda de emprego, doença ou conserto. Costuma-se falar em algo entre três e seis meses das despesas da casa.",
  },
  {
    termo: "Crédito",
    icone: FaCreditCard,
    cor: "blue",
    definicao:
      "Dinheiro emprestado, que vai ter que ser devolvido com juros. Cartão, empréstimo, financiamento e cheque especial são formas de crédito.",
  },
  {
    termo: "Crédito rotativo",
    icone: FaArrowsRotate,
    cor: "red",
    definicao:
      "O que acontece quando a pessoa paga só parte da fatura do cartão. O resto vira dívida com um dos juros mais altos do mercado.",
  },
  {
    termo: "Parcelamento",
    icone: FaLayerGroup,
    cor: "indigo",
    definicao:
      "Dividir uma compra em várias vezes. Pode ser com ou sem juros, e o que importa é o valor total pago no fim.",
  },
  {
    termo: "CET (Custo Efetivo Total)",
    icone: FaMagnifyingGlassDollar,
    cor: "cyan",
    definicao:
      "Quanto um empréstimo custa de verdade, somando juros, tarifas, seguros e impostos. É o número que deve ser comparado entre uma oferta e outra.",
  },
  {
    termo: "Endividamento e inadimplência",
    icone: FaTriangleExclamation,
    cor: "yellow",
    definicao:
      "Estar endividado é ter contas a pagar no futuro, como parcela ou financiamento. Estar inadimplente é estar com conta atrasada, sem pagar no prazo.",
  },
  {
    termo: "Consumo consciente",
    icone: FaLightbulb,
    cor: "lime",
    definicao:
      "Comprar pensando se precisa mesmo, quanto aquilo custa no orçamento e qual o impacto da compra, e não só no desejo do momento.",
  },
];

const EF3e = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();
  const [modoJogo, setModoJogo] = useState(false);
  const [reveladas, setReveladas] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("ef-3e");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  const alternarJogo = () => {
    setModoJogo((atual) => !atual);
    setReveladas([]);
  };

  const virarCarta = (termo) => {
    setReveladas((atuais) =>
      atuais.includes(termo) ? atuais.filter((t) => t !== termo) : [...atuais, termo]
    );
  };

  return (
    <div
      ref={ref}
      id="ef-3e"
      className="scroll-mt-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl"
    >
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-200 mb-2 py-4`}>
          Glossário
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
          Alguns dos termos que são apresentados nos livros da coleção Aprendendo a Lidar com
          Dinheiro.
        </p>

        {/* Botão do jogo */}
        <button
          type="button"
          onClick={alternarJogo}
          aria-pressed={modoJogo}
          className={`${titleFont.className} mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${
            modoJogo
              ? "bg-slate-700 hover:bg-slate-800 dark:bg-slate-600"
              : "bg-gradient-to-r from-blue-600 to-green-600"
          }`}
        >
          {modoJogo ? <FaXmark /> : <FaGamepad />}
          {modoJogo ? "Sair do Modo Jogo" : "Modo Jogo"}
        </button>
      </div>

      {/* Instruções do jogo */}
      {modoJogo && (
        <div className="mx-auto mb-8 max-w-3xl rounded-2xl border-l-4 border-l-green-500 bg-green-50 p-5 text-center shadow-sm dark:bg-green-900/20">
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Mostre a carta a alguém e pergunte o significado, depois clique na carta para revelar a
            definição. <strong>Quantas cartas vocês conseguiram definir?</strong>
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              {reveladas.length} de {termos.length} reveladas
            </span>
            {reveladas.length > 0 && (
              <button
                type="button"
                onClick={() => setReveladas([])}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <FaRotateLeft /> Virar todas de volta
              </button>
            )}
          </div>
        </div>
      )}

      {/* Cards */}
      {modoJogo ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {termos.map(({ termo, icone: Icone, cor, definicao }) => {
            const virada = reveladas.includes(termo);
            return (
              <button
                key={termo}
                type="button"
                onClick={() => virarCarta(termo)}
                aria-expanded={virada}
                aria-label={`Carta ${termo}. ${virada ? "Esconder" : "Revelar"} a definição.`}
                className="group h-72 w-full text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40 rounded-2xl"
                style={{ perspective: "1200px" }}
              >
                <div
                  className="relative h-full w-full transition-transform duration-700 ease-out"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: virada ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Frente: ícone + termo */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl p-6 text-center shadow-lg transition-shadow duration-300 group-hover:shadow-xl ${paleta[cor].frente}`}
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                  >
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-4xl text-white">
                      <Icone />
                    </span>
                    <span className={`${titleFont.className} text-xl font-bold text-white`}>
                      {termo}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      Clique para revelar
                    </span>
                  </div>

                  {/* Verso: definição */}
                  <div
                    className="absolute inset-0 flex flex-col overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <span
                      className={`mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${paleta[cor].chip}`}
                      aria-hidden="true"
                    >
                      <Icone />
                    </span>
                    <span className={`${titleFont.className} mb-2 text-lg font-bold text-slate-800 dark:text-slate-100`}>
                      {termo}
                    </span>
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {definicao}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {termos.map(({ termo, icone: Icone, cor, definicao }) => (
            <div
              key={termo}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <span
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${paleta[cor].chip}`}
                aria-hidden="true"
              >
                <Icone />
              </span>
              <dt className={`${titleFont.className} text-lg font-bold text-slate-800 dark:text-slate-100 mb-2`}>
                {termo}
              </dt>
              <dd className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {definicao}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
};

export default EF3e;
