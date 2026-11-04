"use client";
import React, { useEffect, useRef } from "react";
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
} from "react-icons/fa6";
import { titleFont } from "@/lib/fonts";

const termos = [
  {
    termo: "Orçamento",
    icone: FaClipboardList,
    cor: "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300",
    definicao:
      "O registro de quanto entra e quanto sai de dinheiro num período, geralmente o mês. Serve para planejar antes de gastar, e não só para anotar depois.",
  },
  {
    termo: "Receita e despesa",
    icone: FaRightLeft,
    cor: "bg-sky-100 text-sky-600 dark:bg-sky-900/40 dark:text-sky-300",
    definicao:
      "Receita é o dinheiro que entra (salário, mesada, venda). Despesa é o que sai. A despesa fixa se repete todo mês, como aluguel e luz. A variável muda, como lazer e roupa.",
  },
  {
    termo: "Juros",
    icone: FaPercent,
    cor: "bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-300",
    definicao:
      "O preço de usar um dinheiro que não é seu. Quem pega emprestado paga juros, e quem empresta ou investe recebe.",
  },
  {
    termo: "Juros simples",
    icone: FaCalculator,
    cor: "bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-300",
    definicao:
      "Calculados sempre sobre o valor inicial. Se você deve 100 com 10% ao mês, paga 10 de juros todo mês.",
  },
  {
    termo: "Juros compostos",
    icone: FaArrowTrendUp,
    cor: "bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-300",
    definicao:
      'Calculados sobre o valor que já inclui os juros anteriores, os "juros sobre juros". É o que faz uma dívida de cartão crescer tão rápido, e também o que faz um investimento render ao longo do tempo.',
  },
  {
    termo: "Inflação",
    icone: FaCartShopping,
    cor: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300",
    definicao:
      "O aumento geral dos preços. Com inflação, o mesmo dinheiro compra menos coisa do que comprava antes.",
  },
  {
    termo: "Poupança e investimento",
    icone: FaPiggyBank,
    cor: "bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300",
    definicao:
      "Poupar é guardar parte do que entra. Investir é colocar esse dinheiro guardado em algum lugar onde ele rende.",
  },
  {
    termo: "Reserva de emergência",
    icone: FaUmbrella,
    cor: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300",
    definicao:
      "Um dinheiro guardado só para imprevisto, como perda de emprego, doença ou conserto. Costuma-se falar em algo entre três e seis meses das despesas da casa.",
  },
  {
    termo: "Crédito",
    icone: FaCreditCard,
    cor: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300",
    definicao:
      "Dinheiro emprestado, que vai ter que ser devolvido com juros. Cartão, empréstimo, financiamento e cheque especial são formas de crédito.",
  },
  {
    termo: "Crédito rotativo",
    icone: FaArrowsRotate,
    cor: "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300",
    definicao:
      "O que acontece quando a pessoa paga só parte da fatura do cartão. O resto vira dívida com um dos juros mais altos do mercado.",
  },
  {
    termo: "Parcelamento",
    icone: FaLayerGroup,
    cor: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300",
    definicao:
      "Dividir uma compra em várias vezes. Pode ser com ou sem juros, e o que importa é o valor total pago no fim.",
  },
  {
    termo: "CET (Custo Efetivo Total)",
    icone: FaMagnifyingGlassDollar,
    cor: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-300",
    definicao:
      "Quanto um empréstimo custa de verdade, somando juros, tarifas, seguros e impostos. É o número que deve ser comparado entre uma oferta e outra.",
  },
  {
    termo: "Endividamento e inadimplência",
    icone: FaTriangleExclamation,
    cor: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-300",
    definicao:
      "Estar endividado é ter contas a pagar no futuro, como parcela ou financiamento. Estar inadimplente é estar com conta atrasada, sem pagar no prazo.",
  },
  {
    termo: "Consumo consciente",
    icone: FaLightbulb,
    cor: "bg-lime-100 text-lime-600 dark:bg-lime-900/40 dark:text-lime-300",
    definicao:
      "Comprar pensando se precisa mesmo, quanto aquilo custa no orçamento e qual o impacto da compra, e não só no desejo do momento.",
  },
];

const EF3e = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

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

  return (
    <div
      ref={ref}
      id="ef-3e"
      className="scroll-mt-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl"
    >
      {/* Cabeçalho */}
      <div className="text-center mb-10">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-200 mb-2 py-4`}>
          Glossário
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
          Alguns dos termos que são apresentados nos livros da coleção Aprendendo a Lidar com
          Dinheiro.
        </p>
      </div>

      {/* Cards */}
      <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {termos.map(({ termo, icone: Icone, cor, definicao }) => (
          <div
            key={termo}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <span
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${cor}`}
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
    </div>
  );
};

export default EF3e;
