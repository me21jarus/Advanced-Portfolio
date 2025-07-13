"use client";
import * as React from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ExternalLink, Github, X } from "lucide-react";

const { useEffect, useId, useRef, useState } = React;

export function ExpandableCardDemo({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);
  const id = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const Modal = () => (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center p-4 transition-opacity duration-300 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setActive(null)}
      />

      <div
        ref={ref}
        className={`relative w-full max-w-5xl max-h-[95vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all duration-300 ${
          active ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          onClick={() => setActive(null)}
          className="absolute top-4 right-4 z-50 p-2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full transition-all duration-200 backdrop-blur-sm border border-gray-200 dark:border-gray-600 shadow-lg"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="overflow-y-auto max-h-[95vh] scrollbar-thin">
          <div className="relative h-64 md:h-80">
            <img
              src={active?.src}
              alt={active?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                    {active?.title}
                  </h3>
                  <p className="text-gray-200 text-lg drop-shadow-md">
                    {active?.description}
                  </p>
                </div>

                <a
                  href={active?.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-lg backdrop-blur-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  {active?.ctaText}
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-white dark:bg-gray-900">
            <div className="text-gray-700 dark:text-gray-300 space-y-6">
              {active && active.content()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Compact Grid Layout with Aceternity Hover Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {cards.map((card, index) => (
          <div
            key={card.title}
            onClick={() => setActive(card)}
            className="group relative p-6 h-64 w-full rounded-xl bg-white dark:bg-black/[0.96] border border-transparent dark:border-white/[0.2] cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
              e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
            }}
          >
            {/* Spotlight Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.15] via-neutral-500/[0.15] to-purple-500/[0.15] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Radial Gradient on Hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.1), transparent 40%)`,
              }}
            />

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 p-px">
              <div className="h-full w-full rounded-xl bg-white dark:bg-black" />
            </div>

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2">
                    {card.description}
                  </p>
                </div>

                <button className="mt-4 px-4 py-2 text-sm font-medium bg-neutral-100 dark:bg-neutral-800 hover:bg-blue-500 hover:text-white text-neutral-700 dark:text-neutral-300 rounded-lg transition-all duration-200 transform group-hover:scale-105">
                  {card.ctaText}
                </button>
              </div>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500 pointer-events-none bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
          </div>
        ))}
      </div>

      {mounted && active && createPortal(<Modal />, document.body)}
    </>
  );
}

export type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};
