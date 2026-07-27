'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CreditCard, CalendarCheck, Utensils, Leaf, MapPin } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon: any;
  highlight?: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Se puede pagar con tarjeta bancaria?',
    answer:
      'En Il Massone aceptamos únicamente pago en efectivo y Bizum. Recomendamos llevar algo de efectivo o disponer de Bizum configurado en tu móvil para evitar inconvenientes al momento de abonar la cuenta.',
    icon: CreditCard,
    highlight: 'Aviso de Pago: Solo Efectivo y Bizum',
  },
  {
    question: '¿Hace falta reservar mesa antes de ir?',
    answer:
      'No es estrictamente obligatorio, pero es muy recomendable reservar, especialmente para las cenas de viernes y sábados o si venís en grupo. Podéis reservar fácilmente escribiéndonos directamente por WhatsApp o llamándonos por teléfono al +34 936 69 35 34.',
    icon: CalendarCheck,
  },
  {
    question: '¿Ofrecen menú del mediodía?',
    answer:
      '¡Sí! De lunes a viernes en horario de comida (13:00 a 16:00) contamos con un excelente menú del mediodía que incluye platos de pasta artesanal o pizza recién horneada, bebida y postre casero.',
    icon: Utensils,
  },
  {
    question: '¿Tienen opciones vegetarianas y veganas?',
    answer:
      'Por supuesto. Contamos con una amplia variedad de opciones vegetariana como la Pizza Vegetariana, Pizza 4 Quesos, Pizza de Champiñones y Trufa, Gnocchi 4 Quesos, Pasta Fresca con Pesto de Pistacho y Burrata fresca. También podemos adaptar ciertas pizzas sin queso para veganos.',
    icon: Leaf,
  },
  {
    question: '¿Dónde está exactamente el restaurante y cómo llegar?',
    answer:
      'Nos encontramos en Carrer de Mallorca, 235 (08008 Barcelona), en pleno corazón del Eixample. Estamos a escasos minutos a pie de la estación FGC Provença y muy cerca de Passeig de Gràcia.',
    icon: MapPin,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#141210] relative overflow-hidden border-t border-[#26221E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1C1814] border border-[#C9A15A]/30 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C9A15A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A15A] font-sans font-medium">
              Información Útil para el Visitante
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F1E8] font-light">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A69F91] font-sans">
            Todo lo que necesitas saber antes de visitarnos en el Eixample.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const Icon = faq.icon;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1C1814] border-[#C9A15A]/50 shadow-xl'
                    : 'bg-[#141210] border-[#26221E] hover:border-[#C9A15A]/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2.5 rounded-lg shrink-0 ${isOpen ? 'bg-[#C9A15A] text-[#0E0C0A]' : 'bg-[#0E0C0A] text-[#C9A15A] border border-[#2B2621]'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      {faq.highlight && (
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-[#C9A15A] mb-1">
                          {faq.highlight}
                        </span>
                      )}
                      <h3 className="text-base sm:text-lg font-serif text-[#F5F1E8] font-medium">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-[#C9A15A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-[#26221E] text-sm sm:text-base text-[#A69F91] font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
