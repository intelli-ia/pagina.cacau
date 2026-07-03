"use client";

import { useEffect, useState } from "react";

export default function StickyBuyBar() {
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-end-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !footerVisible;

  return (
    <div
      className={`fixed bottom-4 lg:bottom-6 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-4 bg-primary border border-accent/20 rounded-full shadow-xl shadow-black/30 px-4 py-2.5 lg:px-6 lg:py-3">
        <span className="hidden sm:block font-serif font-light text-secondary/70 text-sm lg:text-base whitespace-nowrap">
          Domine o Raciocínio Clínico.
        </span>
        <a
          href="#preco"
          className="text-center bg-accent text-primary font-bold text-[10px] tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full hover:bg-accent/90 transition-colors lg:text-xs lg:tracking-[0.18em] lg:px-7 lg:py-3 whitespace-nowrap"
        >
          Quero garantir meu acesso agora
        </a>
      </div>
    </div>
  );
}
