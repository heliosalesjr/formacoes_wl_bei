'use client'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import React, { useState } from 'react'
import Image from 'next/image'
import { FaPlus, FaArrowLeft, FaSearchPlus, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { titleFont } from '@/lib/fonts'

const Met5b = () => {
  const [expanded, setExpanded] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('met-5b');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  useEffect(() => {
    if (!showImageModal) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowImageModal(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showImageModal]);

  return (
    <>
    <motion.div
      ref={ref} id="met-5b"
      layout
      className={`scroll-mt-20 relative w-full rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 ${expanded ? 'h-auto min-h-[70vh]' : 'h-[70vh]'}`}
      transition={{ duration: 1.2 }}

    >
      {/* Imagem e camada escura */}
      <AnimatePresence>
        {!expanded && (
          <>
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/handsz.jpg"
                alt="Fator de Mobilização"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-black/50 z-10" />
            </motion.div>

            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-3xl">
                <h2 className={`${titleFont.className} text-2xl md:text-3xl font-bold mb-4`}>
                  Fator de Mobilização
                </h2>
                <p className="text-sm md:text-base text-slate-100">
                  Refere-se ao que desafia, motiva e desperta o interesse da turma a partir do conteúdo trabalhado naquela seção, que vai definir o escopo dos projetos.
                  Esse desafio pode ser, por exemplo, algo a ser construído, uma habilidade a ser desenvolvida, uma apresentação a ser organizada ou um evento a ser planejado e organizado pelos estudantes.
                  É aquilo que a turma pode colocar em prática a partir do conhecimento teórico adquirido.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Texto alternativo com fundo azul */}
      <AnimatePresence>
      {expanded && (
        <motion.div
            className="relative z-20 w-full min-h-[70vh] flex flex-col items-center justify-center px-6 py-10 text-center text-white bg-emerald-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
        >
            <div className="max-w-3xl">
            <p className="text-base md:text-lg font-medium text-white mb-6">
                A ideia é que ao longo do livro do estudante, sejam propostos projetos, como nesse caso do 7o ano, em que propomos projetos que chamamos de PPDA. As orientações de como dinamizar estas atividades estão no Caderno do Educador.
            </p>
            <div className="w-full flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowImageModal(true)}
                  className="group relative w-full max-w-xl cursor-zoom-in"
                  aria-label="Ampliar imagem do exemplo de projeto"
                >
                  <Image
                  src="/exemplo.png"
                  alt="Exemplo de projeto"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg">
                    <FaSearchPlus className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </button>
            </div>
            </div>
        </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante com efeito bounce */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-4 right-4 z-30 bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-slate-600 rounded-full p-3 shadow-xl transition-all"
        aria-label={expanded ? 'Voltar' : 'Expandir'}
      >
        {expanded ? <FaArrowLeft className="text-lg" /> : <FaPlus className="text-lg" />}
      </motion.button>
    </motion.div>

    {/* Modal com a imagem ampliada */}
    <AnimatePresence>
      {showImageModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowImageModal(false)}
        >
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Imagem ampliada do exemplo de projeto"
          >
            <button
              type="button"
              onClick={() => setShowImageModal(false)}
              aria-label="Fechar"
              className="absolute -top-10 right-0 text-white hover:text-slate-300 transition-colors"
            >
              <FaTimes className="h-6 w-6" />
            </button>
            <Image
              src="/exemplo.png"
              alt="Exemplo de projeto ampliado"
              width={1600}
              height={800}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

export default Met5b
