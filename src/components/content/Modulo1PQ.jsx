"use client";
import React from 'react'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image'
import Link from 'next/link'
import { FaLink } from 'react-icons/fa'
import { titleFont } from '@/lib/fonts'

const Modulo1PQ = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-1-pq');
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
    <div
      ref={ref}
      id="modulo-1-pq"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-10 shadow-2xl border border-slate-100 dark:border-slate-700"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Cabeçalho */}
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/pq-logo.png"
            alt="Logo Por Quê"
            width={200}
            height={71}
            className="h-16 w-auto"
          />
        </div>

        {/* Resumo */}
        <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-center max-w-3xl mx-auto">
          O{" "}
          <Link className="text-blue-600 dark:text-blue-400 font-medium underline" href="https://porque.com.br/" target="_blank" rel="noopener noreferrer">
            Por Quê?
          </Link>{" "}
          é um portal de Economia ligado à{" "}
          <Link className="font-bold underline" href="https://www.beieducacao.com.br" target="_blank" rel="noopener noreferrer">
            BEĨ Educação
          </Link>{" "}
          que traduz temas financeiros complexos em reportagens acessíveis,
          ajudando o público a compreender o cenário econômico do país e seus impactos no dia a dia das famílias brasileiras.
        </p>

        {/* Cards com links */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 text-left">
          {/* Card 1 */}
          <a
            href="https://porque.com.br/endividamento-excessivo-papo-reto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors rounded-lg p-6 shadow hover:shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-4">
              <FaLink className="text-blue-600 text-2xl" />
              <div>
                <h4 className={`${titleFont.className} text-lg font-bold text-slate-900 dark:text-white`}>Riscos do Endividamento Excessivo</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Descubra como o descontrole financeiro pode levar ao endividamento crítico e entenda os impactos sociais e pessoais dessa situação.</p>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="https://porque.com.br/endividamento-guetonomia-27"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors rounded-lg p-6 shadow hover:shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-4">
              <FaLink className="text-green-600 text-2xl" />
              <div>
                <h4 className={`${titleFont.className} text-lg font-bold text-slate-900 dark:text-white`}>Realidade do Endividamento nas Periferias</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Uma análise sensível e crítica sobre como a desigualdade econômica influencia o endividamento nas regiões periféricas.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Modulo1PQ
