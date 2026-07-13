'use client'

import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image'
import { FaPlus, FaArrowLeft, FaSearchPlus, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Mat6 = () => {
  const [expanded, setExpanded] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('mat-6');
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
      ref={ref} 
      id="mat-6" 
      layout
      className="relative scroll-mt-20 w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
      transition={{ duration: 1.2 }}
    >
      {/* Versão Azul com texto */}
      <AnimatePresence>
        {!expanded && (
          <>
            <motion.div
              className="absolute inset-0 bg-blue-600 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-3xl">
                <a
                  href="https://padlet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-8 bg-white rounded-lg px-4 py-2"
                  aria-label="Acessar o site do Padlet"
                >
                  <Image
                    src="/padlet-logo.png"
                    alt="Logo Padlet"
                    width={200}
                    height={62}
                    className="h-12 md:h-14 w-auto mx-auto"
                  />
                </a>
                <p className="text-sm md:text-base text-slate-100 leading-relaxed">
                  Uma <span className="bg-white text-blue-800 px-2 py-1 rounded font-semibold">ferramenta útil</span> para esse registro é o{" "}
                  <a
                    href="https://padlet.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-800 px-2 py-1 rounded font-semibold underline hover:bg-blue-50 transition-colors"
                  >
                    PADLET
                  </a>
                  , que funciona como um <span className="bg-white text-blue-800 px-2 py-1 rounded font-semibold">organizador virtual de tarefas</span>.
                  Ele permite criar e gerenciar murais em diversos formatos, <span className="bg-white text-blue-800 px-2 py-1 rounded font-semibold">promovendo a curiosidade, a criação e a comunicação</span> entre os estudantes.
                  O Padlet facilita a interação e a socialização, <span className="bg-white text-blue-800 px-2 py-1 rounded font-semibold">enriquecendo o processo de ensino-aprendizagem</span>.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Versão Expandida com fundo verde e imagem */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-white bg-green-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <button
              type="button"
              onClick={() => setShowImageModal(true)}
              className="group relative w-full max-w-4xl h-64 sm:h-80 md:h-96 mb-4 cursor-zoom-in"
              aria-label="Ampliar imagem do exemplo de Padlet"
            >
              <Image
                src="/padlet_exemplo.png"
                alt="Exemplo Padlet"
                fill
                className="object-contain"
                priority
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg">
                <FaSearchPlus className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </button>
            <p className="text-sm md:text-base max-w-xl font-medium text-white">
              Sugerimos que você crie um Padlet de registro para suas turmas ou escola. 
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Flutuante */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-4 right-4 z-30 bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full p-3 shadow-xl transition-all"
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
            aria-label="Imagem ampliada do exemplo de Padlet"
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
              src="/padlet_exemplo.png"
              alt="Exemplo Padlet ampliado"
              width={1600}
              height={900}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

export default Mat6