"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'
import { titleFont } from '@/lib/fonts'

const PageApresentacao1 = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('apresentacao-1');
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
    <div ref={ref} id="apresentacao-1" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-8">
      <div className="grid gap-8 md:grid-cols-2 items-stretch">
        {/* Conteúdo - metade da largura */}
        <div className="space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
            <h2 className={`${titleFont.className} text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
              Apresentação do Curso
            </h2>
          </div>
          
          
          
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Este curso sobre a aplicação da Coleção aprendendo a lidar com Dinheiro integra as ações de acompanhamento pedagógico promovidas pela BEĨ Educação, voltadas aos educadores e às educadoras da [rede/escola parceira] que lecionam Matemática para as turmas de [anos/etapas atendidos]. Desenvolvido pela equipe pedagógica da BEĨ Educação em parceria com [a rede parceira], o curso é oferecido no formato autoinstrucional — sem a presença de tutores —, permitindo aprender no seu próprio ritmo, de forma prática e acessível.
          </p>
          
        </div>
        
        {/* Imagem - metade da largura */}
        <div className="flex items-center justify-center h-full">
          <div className="relative overflow-hidden rounded-xl w-full h-full min-h-96 bg-transparent">
            <Image
              src="/books_4_5.png"
              alt="Imagem ilustrativa"
              fill
              className="object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Seção do Vídeo */}
      <div className="space-y-6 items-center">
        
         
          <h3 className={`${titleFont.className} text-3xl font-bold text-slate-700 dark:text-slate-200 justify-center text-center py-8`}>
            Vídeo de Apresentação
          </h3>
       
        
        <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/42BVLPl0xw8"
            title="Resumo Módulo 1"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default PageApresentacao1