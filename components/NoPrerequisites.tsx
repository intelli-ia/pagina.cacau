const skills = [
  {
    number: "01",
    title: "Categorizar o Caos",
    text: "Sinais e sintomas deixam de ser uma lista solta e viram um mapa lógico.",
  },
  {
    number: "02",
    title: "Antecipar Condutas",
    text: "Entendendo a origem fisiopatológica, a conduta se torna óbvia, não decorada.",
  },
  {
    number: "03",
    title: "Memorização Aguda",
    text: "O que é desenhado e estruturado no quadro é fixado 10x mais rápido que um texto de livro.",
  },
];

export default function NoPrerequisites() {
  return (
    <section className="section-dark py-14 lg:py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-center lg:translate-x-20">

        {/* Left: Text Content */}
        <div className="text-left">
          <h2 className="font-serif font-bold text-secondary text-[1.5rem] sm:text-2xl lg:text-[2.1rem] leading-[1.25] mb-4 lg:mb-6">
            Pare de acumular informações e comece a{" "}
            <em className="text-accent not-italic">organizar</em> o seu
            raciocínio.
          </h2>

          <div className="w-12 h-px bg-accent mb-4 lg:mb-6" />

          <p className="font-serif font-light text-secondary/70 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8">
            A faculdade te entrega os tijolos (o conteúdo), mas não te
            entrega a planta (a lógica). O resultado é um médico que sabe a
            teoria, mas trava na hora de decidir a conduta diante do
            paciente.
          </p>

          <p className="font-serif font-bold text-secondary text-base sm:text-lg lg:text-xl leading-snug mb-8 lg:mb-10">
            O Método do Quadro é o atalho prático para você nunca mais se
            sentir perdido. Através de esquemas visuais e mnemônicos
            estruturais, vou te ensinar a:
          </p>

          <a
            href="#preco"
            className="inline-block bg-accent text-primary font-bold text-[10px] tracking-[0.15em] uppercase px-3.5 py-1.5 hover:bg-accent/60 transition-colors lg:text-xs lg:tracking-[0.18em] lg:px-7 lg:py-2.5"
          >
            Clique e Matricule-se
          </a>
        </div>

        {/* Right: Cards empilhados */}
        <div className="flex flex-col">
          {skills.map((item, i) => (
            <div key={i}>
              {i > 0 && <div className="w-16 h-px bg-secondary/10" />}
              <div className="py-6 lg:py-8 flex flex-col gap-2 lg:gap-3 text-left">
                <span className="font-serif font-bold text-accent/40 text-3xl lg:text-4xl leading-none">
                  {item.number}
                </span>
                <h3 className="font-serif font-bold text-secondary text-lg lg:text-xl leading-snug max-w-xs">
                  {item.title}
                </h3>
                <p className="font-serif font-light text-secondary/60 text-sm lg:text-base leading-relaxed max-w-xs">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
