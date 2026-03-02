"use client";
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSidebar } from '@/contexts/SidebarContext';

const navigation = {
  'Apresentação': {
    path: '/',
    components: [
      { id: 'apresentacao-1', title: 'Apresentação do Curso' },
      { id: 'apresentacao-2', title: 'Autonomia' },
      { id: 'estrutura',      title: 'Estrutura do Curso' },
      { id: 'objetivos-formacao', title: 'Objetivos da Formação' },
      { id: 'apresentacao-4', title: 'Módulos' },
    ]
  },
  'Módulo 1': {
    path: '/modulo1',
    components: [
      { id: 'modulo-1-intro',    title: 'O Módulo 1' },
      { id: 'modulo-1-objetivos', title: 'Objetivos do Módulo' },
      { id: 'modulo-1-situacao', title: 'Situação e Importância' },
      { id: 'modulo-1-midia',    title: 'Educação Financeira na Mídia' },
      { id: 'modulo-1-video',    title: 'A situação financeira dos Brasileiros' },
    ]
  },
  'Educação Financeira': {
    path: '/educacaofinanceira',
    components: [
      { id: 'ef-intro', title: 'Introdução' },
      { id: 'ef-2',     title: 'Ed. Financeira no Ensino Fundamental' },
      { id: 'ef-3',     title: 'Matemática Financeira vs Ed. Financeira' },
      { id: 'ef-4',     title: 'O programa da BEĨ Educação' },
      { id: 'ef-5',     title: 'Mais sobre o programa' },
    ]
  },
  'Metodologias': {
    path: '/metodologias',
    components: [
      { id: 'met-1', title: 'Metodologias Ativas' },
      { id: 'met-2', title: 'Aprendizagem Baseada em Projetos' },
      { id: 'met-3', title: 'ABP - Resumo' },
      { id: 'met-4', title: 'Pequenos Projetos Didáticos Ativos' },
      { id: 'met-5', title: 'Fator de Mobilização' },
      { id: 'met-6', title: 'Mais sobre mobilização' },
    ]
  },
  'Material Didático': {
    path: '/material',
    components: [
      { id: 'mat-1',   title: 'Estrutura do Livro do Estudante' },
      { id: 'mat-2',   title: 'Estrutura do Caderno do Educador' },
      { id: 'mat-3',   title: 'Como iniciar a aplicação' },
      { id: 'mat-444', title: 'Diagnóstico do perfil da turma' },
      { id: 'mat-5',   title: 'Diário de Bordo' },
      { id: 'mat-6',   title: 'Padlet' },
      { id: 'mat-7',   title: 'Saiba Mais - Links' },
    ]
  },
  'Encerramento': {
    path: '/encerramento',
    components: [
      { id: 'mat-8', title: 'Encerramento do Módulo 1' },
      { id: 'what',  title: 'O que aprendi?' },
    ]
  },
};

export default function Sidebar({ forceOpen, onToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isViewed } = useSidebar();
  const router   = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (forceOpen !== undefined) setIsOpen(forceOpen);
  }, [forceOpen]);

  const toggleSidebar = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (onToggle) onToggle(next);
  };

  const scrollToComponent = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (path, componentId = null) => {
    if (componentId) {
      if (window.location.pathname === path) {
        scrollToComponent(componentId);
      } else {
        router.push(`${path}#${componentId}`);
      }
    } else {
      router.push(path);
    }
    if (forceOpen === undefined) setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => { if (forceOpen === undefined) setIsOpen(false); }}
        />
      )}

      {/* Sidebar panel */}
      <div
        className={`fixed left-0 top-0 h-full z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="w-72 h-full bg-white dark:bg-[#0f172a] shadow-2xl flex flex-col">

          {/* Header */}
          <div className="px-5 py-5 border-b border-slate-200 dark:border-white/10 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-700 dark:text-slate-300">
              Conteúdo do Curso
            </span>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5
            [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-slate-200
            dark:[&::-webkit-scrollbar-thumb]:bg-white/10
            [&::-webkit-scrollbar-thumb]:rounded-full">

            {Object.entries(navigation).map(([pageName, pageData]) => {
              const isCurrentPage = pathname === pageData.path;
              return (
                <div key={pageName}>
                  {/* Section header */}
                  <button
                    onClick={() => handleNavigation(pageData.path)}
                    className={`w-full text-left flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      isCurrentPage
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span className={`h-px w-4 rounded-full flex-shrink-0 transition-colors duration-200 ${
                      isCurrentPage ? 'bg-blue-500 dark:bg-blue-400' : 'bg-slate-300 dark:bg-white/20'
                    }`} />
                    {pageName}
                  </button>

                  {/* Sub-items */}
                  <div className="mt-1 ml-3 pl-3 border-l border-slate-200 dark:border-white/10 space-y-0.5">
                    {pageData.components.map((component) => {
                      const viewed = isViewed(component.id);
                      return (
                        <button
                          key={component.id}
                          onClick={() => handleNavigation(pageData.path, component.id)}
                          className="w-full text-left flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-150"
                        >
                          {/* Viewed indicator */}
                          {viewed ? (
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          ) : (
                            <span className="flex-shrink-0 w-4 h-4 rounded-full border border-slate-300 dark:border-white/10" />
                          )}
                          {component.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-5 py-4 border-t border-slate-200 dark:border-white/10">
            <p className="text-xs text-slate-500 dark:text-slate-400 tracking-wide">BEĨ Educação © 2026</p>
          </div>

        </div>
      </div>

      {/* Toggle tab */}
      <button
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        className={`fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-in-out
          ${isOpen ? 'left-72' : 'left-0'}
          bg-white dark:bg-[#0f172a] hover:bg-slate-50 dark:hover:bg-[#1e293b] text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white
          border border-slate-200 dark:border-white/10 shadow-xl
          px-2 py-4 rounded-r-xl
        `}
      >
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
}
