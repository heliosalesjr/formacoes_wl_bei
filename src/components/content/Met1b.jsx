"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSidebar } from "@/contexts/SidebarContext";
import { PlayCircle, BookOpen, Globe, LayoutGrid, ExternalLink } from "lucide-react";
import { titleFont } from "@/lib/fonts";

const videos = [
  {
    id: "VYK_t-OwcRU",
    titulo: "Metodologias Ativas — Introdução",
    autor: "José Moran",
    tema: "ABP",
    descricao:
      "Uma introdução às metodologias ativas pelo próprio José Moran, no canal dele.",
  },
  {
    id: "1d-UnyZu_II",
    titulo: "Ensino híbrido: rotação por estações",
    autor: "CIEB",
    tema: "Rotação por estações",
    descricao:
      "Como organizar a turma em estações de trabalho com atividades diferentes e complementares.",
  },
];

const leituras = [
  {
    icone: BookOpen,
    cor: "text-blue-600 dark:text-blue-400",
    fundo: "bg-blue-50 dark:bg-blue-900/20",
    borda: "border-l-blue-500",
    titulo: "Metodologias ativas para uma educação inovadora",
    autoria: "Lilian Bacich e José Moran (orgs.) — Penso, 2018",
    descricao: "Leitura de aprofundamento, disponível na Minha Biblioteca.",
    link: "https://minhabiblioteca.com.br/catalogo/livro/79078/metodologias-ativas-para-uma-educa-o-inovadora/",
    rotuloLink: "Acessar na Minha Biblioteca",
  },
  {
    icone: Globe,
    cor: "text-green-600 dark:text-green-400",
    fundo: "bg-green-50 dark:bg-green-900/20",
    borda: "border-l-green-500",
    titulo: "Textos de José Moran",
    autoria: "moran.eca.usp.br",
    descricao:
      "O site reúne artigos e textos que o autor publica sobre educação e metodologias ativas.",
    link: "https://moran.eca.usp.br/",
    rotuloLink: "Visitar o site",
  },
];

const Met1b = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("met-1b");
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
      id="met-1b"
      className="scroll-mt-20 bg-white dark:bg-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl"
    >
      {/* Cabeçalho */}
      <div className="text-center mb-10">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-200 mb-2 py-4`}>
          Recursos para aprofundar
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
          Vídeos, leituras e materiais de apoio para continuar explorando as metodologias ativas.
        </p>
      </div>

      {/* Vídeos */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <PlayCircle className="h-7 w-7 text-purple-600 shrink-0" />
          <h3 className={`${titleFont.className} text-2xl font-semibold text-slate-800 dark:text-slate-200`}>
            Vídeos
          </h3>
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full pb-[56.25%] h-0 bg-slate-900">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.titulo}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <span className="inline-block rounded-md bg-purple-100 px-2 py-0.5 text-xs font-bold tracking-wide text-purple-700 dark:bg-purple-900/50 dark:text-purple-200">
                  {video.tema}
                </span>
                <h4 className={`${titleFont.className} mt-2 text-lg font-bold text-slate-800 dark:text-slate-100`}>
                  {video.titulo}
                </h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">{video.autor}</p>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                  {video.descricao}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Assistir no YouTube <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leituras */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-7 w-7 text-blue-600 shrink-0" />
          <h3 className={`${titleFont.className} text-2xl font-semibold text-slate-800 dark:text-slate-200`}>
            Para ler
          </h3>
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {leituras.map((leitura) => {
            const Icone = leitura.icone;
            return (
              <div
                key={leitura.titulo}
                className={`rounded-xl border-l-4 ${leitura.borda} ${leitura.fundo} p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
              >
                <div className="flex gap-4">
                  <Icone className={`h-7 w-7 shrink-0 ${leitura.cor}`} />
                  <div>
                    <h4 className={`${titleFont.className} text-lg font-bold text-slate-800 dark:text-slate-100`}>
                      {leitura.titulo}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                      {leitura.autoria}
                    </p>
                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                      {leitura.descricao}
                    </p>
                    <a
                      href={leitura.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium hover:underline inline-flex items-center gap-1 ${leitura.cor}`}
                    >
                      {leitura.rotuloLink} <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Infográfico */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <LayoutGrid className="h-7 w-7 text-indigo-600 shrink-0" />
          <h3 className={`${titleFont.className} text-2xl font-semibold text-slate-800 dark:text-slate-200`}>
            Infográfico
          </h3>
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        </div>

        <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6 max-w-3xl">
          Os sete elementos de um bom projeto, segundo o{" "}
          <a
            href="https://www.pblworks.org/what-is-pbl/gold-standard-project-design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline inline-flex items-center gap-1"
          >
            Gold Standard PBL, do PBLWorks <ExternalLink className="h-4 w-4" />
          </a>
          .
        </p>

        <div className="flex justify-center">
          <Image
            src="/infografico-gold-standard.png"
            alt="Infográfico: Aprendizagem Baseada em Projetos — os 7 elementos de um bom projeto. No centro, o que o estudante precisa aprender: conhecimentos-chave, compreensão e habilidades para a vida. Em volta: 1. Problema ou pergunta desafiadora; 2. Investigação contínua; 3. Autenticidade; 4. Voz e escolha do estudante; 5. Reflexão; 6. Crítica e revisão; 7. Produto público. Baseado no Gold Standard PBL, PBLWorks (Larmer, Mergendoller e Boss, 2015). Adaptação: BEĨ Educação."
            width={536}
            height={724}
            className="w-full h-auto max-w-xl rounded-lg shadow-lg"
          />
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-4 max-w-2xl mx-auto">
          Baseado em LARMER, J.; MERGENDOLLER, J.; BOSS, S. <em>Setting the Standard for Project
          Based Learning</em>. ASCD, 2015. Adaptação: BEĨ Educação.
        </p>
      </section>
    </div>
  );
};

export default Met1b;
