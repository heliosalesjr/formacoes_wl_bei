"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'
import { titleFont } from '@/lib/fonts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

const images = ['em.png', 'ef1.png', 'ef2.png']

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
      <div className="space-y-6 w-full">
        <h2 className={`${titleFont.className} text-4xl font-bold text-center bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          Apresentação do Curso
        </h2>

        <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
          Este curso sobre a aplicação da Coleção aprendendo a lidar com Dinheiro integra as ações de acompanhamento pedagógico promovidas pela BEĨ Educação, voltadas aos educadores e às educadoras da <strong>[rede/escola parceira]</strong> que lecionam Matemática para as turmas de <strong>[anos/etapas atendidos]</strong>. Desenvolvido pela equipe pedagógica da BEĨ Educação em parceria com <strong>[a rede parceira]</strong>, o curso é oferecido no formato autoinstrucional — sem a presença de tutores —, permitindo aprender no seu próprio ritmo, de forma prática e acessível.
        </p>

        {/* Carrossel de imagens */}
        <div className="relative w-full h-[50vh] overflow-hidden rounded-xl shadow-lg">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            className="w-full h-full"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx} className="relative">
                <Image
                  src={`/${img}`}
                  alt={`Slide ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover object-center"
                />
              </SwiperSlide>
            ))}
          </Swiper>
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