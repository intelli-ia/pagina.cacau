"use client";

import { useState } from "react";

const faqs = [
  {
    question: "O curso é apenas para estudantes de medicina?",
    answer:
      "Não. Embora seja um divisor de águas para alunos do 3º ao 6º ano que sofrem com o método PBL, o CGS é altamente recomendado para médicos recém-formados que buscam mais segurança e organização mental para seus plantões e visitas de enfermaria.",
  },
  {
    question: "As aulas são muito teóricas?",
    answer:
      "Pelo contrário. O objetivo do Cacau é a praticidade aguda. O quadro serve para simplificar temas complexos e torná-los aplicáveis imediatamente no seu próximo caso clínico.",
  },
  {
    question: 'Como funciona o "Curso Vivo"?',
    answer:
      'Ao adquirir o CGS, você não recebe um pacote estático de aulas. O curso é alimentado paulatinamente. Sempre que um novo tema relevante surge na prática do Cacau, ele pode se transformar em um novo "Raciocínio no Quadro" adicionado à plataforma.',
  },
  {
    question: "Emite certificado?",
    answer:
      "O CGS não é um curso credencialista. O foco é o aprendizado e o desenvolvimento do raciocínio clínico, não um papel. Não emitimos certificado.",
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "1 ano de acesso para acompanhar as atualizações do curso vivo.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-dark py-14 lg:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif font-bold text-accent text-3xl sm:text-4xl lg:text-[2.9rem] text-center mb-8 lg:mb-14 leading-snug">
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col divide-y divide-secondary/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex justify-between items-center py-5 text-left gap-6 group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-serif font-light text-secondary/90 text-base lg:text-xl group-hover:text-secondary transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-6 h-6 border border-accent/50 flex items-center justify-center text-accent text-lg leading-none font-light">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div className="pb-6 pr-12">
                  <p className="font-serif font-light text-secondary/60 text-sm lg:text-2xl leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 lg:gap-4 lg:mt-16">
          <a
            href="https://wa.me/5571983477264"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-[10px] tracking-[0.15em] uppercase py-2 px-4 hover:bg-[#1ebe5d] transition-colors lg:text-xs lg:tracking-[0.18em] lg:py-5 lg:gap-2.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="lg:w-[18px] lg:h-[18px]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Tenho dúvidas ainda!
          </a>
          <a
            href="https://pay.hub.la/Bx8I7wO9zk0DmaF1OUEP"
            target="_blank"
            className="flex-1 bg-accent text-primary font-bold text-[10px] tracking-[0.15em] uppercase py-1.5 px-3.5 text-center hover:bg-accent/60 transition-colors lg:text-xs lg:tracking-[0.18em] lg:py-5"
          >
            Clique e Matricule-se
          </a>
        </div>
      </div>
    </section>
  );
}
