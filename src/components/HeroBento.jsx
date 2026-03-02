"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroBento({
  title,
  subtitle,
  tag,
  tagLabel = "BEĨ Educação",
  statNumber,
  statLabel,
  buttonText,
  buttonHref = "#content",
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="w-full px-4 pt-24 pb-4 flex justify-center">
      {/* Outer "floating box" */}
      <div
        className={`w-full max-w-5xl rounded-3xl bg-[#0f172a] p-3 shadow-2xl transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Bento grid: 4 cols × 3 rows on desktop, single col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 md:h-[500px] gap-3">

          {/* ── Cell 1: Title ── col 1-3, row 1-2 */}
          <div className="relative md:col-span-3 md:row-span-2 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-7 flex flex-col justify-between min-h-[200px]">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />
            {/* Dot grid ornament */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Tag above title */}
            {tag && (
              <span className="relative z-10 inline-block text-xs font-semibold tracking-widest uppercase text-blue-200 bg-white/10 border border-white/20 rounded-full px-3 py-1 w-fit mb-4">
                {tag}
              </span>
            )}

            {/* Title */}
            <h1
              className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight uppercase tracking-wide drop-shadow-2xl"
              style={{ fontFamily: "Rustica, sans-serif" }}
            >
              {title}
            </h1>
          </div>

          {/* ── Cell 2: Tag badge ── col 4, row 1 */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl bg-[#1e293b] p-5 flex flex-col justify-between min-h-[100px]">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">
              {tagLabel}
            </span>
            <div className="flex items-center gap-2 mt-2">
              {/* Pulsing green dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-slate-300 font-medium">Ao vivo</span>
            </div>
          </div>

          {/* ── Cell 3: Stat ── col 4, row 2 */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl bg-emerald-500 p-5 flex flex-col justify-between min-h-[100px]">
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-900/70">
              {statLabel || "Total"}
            </span>
            <span className="text-5xl font-bold text-white leading-none mt-1">
              {statNumber || "—"}
            </span>
          </div>

          {/* ── Cell 4: Subtitle ── col 1-2, row 3 */}
          <div className="md:col-span-2 md:row-span-1 rounded-2xl bg-[#1e293b] p-5 flex flex-col justify-center min-h-[100px]">
            {subtitle ? (
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {subtitle}
              </p>
            ) : (
              <p className="text-slate-500 text-sm italic">
                Formação de educadores BEĨ
              </p>
            )}
          </div>

          {/* ── Cell 5: Image mock ── col 3, row 3 */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden relative min-h-[100px] bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 flex items-center justify-center">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* Camera icon placeholder */}
            <svg
              className="relative z-10 w-10 h-10 text-white/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          {/* ── Cell 6: CTA ── col 4, row 3 */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl bg-[#1e293b] border border-white/10 p-5 flex flex-col items-center justify-center min-h-[100px]">
            {buttonText ? (
              <Link
                href={buttonHref}
                className="w-full text-center bg-white text-[#0f172a] font-semibold text-sm rounded-xl px-4 py-3 hover:bg-slate-100 transition-colors duration-200"
              >
                {buttonText}
              </Link>
            ) : (
              <Link
                href={buttonHref}
                className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-7 h-7 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="text-xs tracking-widest uppercase">
                  Ver conteúdo
                </span>
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
