"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSidebar } from "@/contexts/SidebarContext";
import { titleFont } from "@/lib/fonts";

const condicoes = [
  "Renda",
  "Custo de vida",
  "Acesso ao crédito",
  "Taxas de juros",
  "Inflação",
  "Publicidade",
  "Consumo por impulso",
  "Apostas on-line",
];

const EF3d = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();
  const [imagemDisponivel, setImagemDisponivel] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("ef-3d");
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
      id="ef-3d"
      className="scroll-mt-20 overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-2xl"
    >
      {/* Imagem em destaque */}
      <div className="relative w-full h-[55vh] min-h-[340px] md:h-[65vh]">
        {imagemDisponivel ? (
          <Image
            src="/rua1.jpg"
            alt="Rua comercial movimentada, com pessoas passando entre lojas cobertas de cartazes de crediário, empréstimo fácil e parcelamento em 12x sem juros"
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover object-center"
            priority
            onError={() => setImagemDisponivel(false)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-blue-900" />
        )}

        {/* Camada de leitura para o título */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs md:text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              Educação Financeira
            </span>
            <h1 className={`${titleFont.className} mt-3 text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg`}>
              Educação financeira também é compreender o contexto
            </h1>
          </div>
        </div>
      </div>

      {/* Texto */}
      <div className="p-6 md:p-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
            Educação financeira <strong>não deve ser entendida como uma responsabilização individual
            pela pobreza ou pelo endividamento</strong>. As escolhas de cada um importam, mas elas
            acontecem dentro de contextos concretos, marcados por renda, custo de vida, acesso ao
            crédito, taxas de juros, inflação, publicidade, consumo por impulso e novas formas de
            risco financeiro, como as apostas on-line.
          </p>

          {/* Condições que atravessam as escolhas */}
          <div className="my-8">
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
              Condições que atravessam as escolhas
            </p>
            <div className="flex flex-wrap gap-2">
              {condicoes.map((condicao) => (
                <span
                  key={condicao}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200"
                >
                  {condicao}
                </span>
              ))}
            </div>
          </div>

          <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
            A proposta da BEĨ Educação busca desenvolver não apenas conhecimentos para tomar decisões
            mais conscientes, mas também a capacidade de{" "}
            <strong>ler criticamente as condições que influenciam essas decisões</strong>.
          </p>

          {/* Fecho em destaque */}
          <blockquote className="mt-8 rounded-xl border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-900/20 p-6">
            <p className={`${titleFont.className} text-lg md:text-xl font-semibold leading-relaxed text-blue-900 dark:text-blue-100`}>
              Educação financeira é aprender a fazer escolhas possíveis e responsáveis, ao mesmo tempo
              em que se compreende que nem todas as situações financeiras são resultado exclusivamente
              de escolhas individuais.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default EF3d;
