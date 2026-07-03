export default function Pricing() {
  return (
    <section id="preco" className="section-light py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-serif font-light text-primary/50 text-sm tracking-[0.15em] uppercase mb-2">
          Investimento
        </p>
        <div className="w-12 h-px bg-accent mx-auto mb-10" />

        <p className="font-serif font-light text-primary/60 text-base mb-2">
          De{" "}
          <span className="line-through text-primary/40">R$1.068</span>{" "}
          por apenas 12x de
        </p>

        <div className="flex items-baseline justify-center gap-2 mb-3">
          <span className="font-serif font-bold text-primary text-2xl">R$</span>
          <span className="font-serif font-black text-primary text-8xl leading-none tracking-tighter">
            77
          </span>
        </div>

        <p className="font-serif font-light text-primary/60 text-base mb-12">
          ou <strong className="font-bold text-primary">R$770</strong> à vista
        </p>

        <a
          href="https://pay.hub.la/Bx8I7wO9zk0DmaF1OUEP"
          target="_blank"
          className="inline-block bg-accent text-primary font-bold text-[10px] tracking-[0.15em] uppercase px-3.5 py-1.5 hover:bg-accent/90 transition-colors mb-10 lg:text-sm lg:tracking-[0.2em] lg:px-16 lg:py-5"
        >
          Clique e Matricule-se
        </a>

        {/* Security badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-primary/10">
          <div className="flex items-center gap-2 text-primary/50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="font-serif font-light text-sm">Compra 100% segura</span>
          </div>
          <div className="flex items-center gap-2 text-primary/50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span className="font-serif font-light text-sm">15 dias de garantia</span>
          </div>
          <div className="flex items-center gap-2 text-primary/50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="4" width="22" height="16" rx="2" />
              <path d="M1 10h22" />
            </svg>
            <span className="font-serif font-light text-sm">Parcelamento sem juros</span>
          </div>
        </div>
      </div>
    </section>
  );
}
