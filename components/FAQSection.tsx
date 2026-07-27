'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, CreditCard, CalendarCheck, Utensils, Leaf, MapPin } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon: any;
  highlight?: string;
}

export const faqs: FAQItem[] = [
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
      'Sí, recomendamos reservar los fines de semana por WhatsApp o llamada, especialmente para grupos de 4 o más personas.',
    icon: CalendarCheck,
  },
  {
    question: '¿Ofrecen menú del mediodía?',
    answer:
      'Sí, de lunes a viernes de 13:00 a 16:00, pizza o pasta + bebida + postre casero.',
    icon: Utensils,
  },
  {
    question: '¿Tienen opciones vegetarianas y veganas?',
    answer:
      'Sí, adaptamos varios platos de la carta, consúltalo al pedir.',
    icon: Leaf,
  },
  {
    question: '¿Dónde está exactamente el restaurante y cómo llegar?',
    answer:
      'En Carrer de Mallorca, 235, Eixample, a pocos pasos de Passeig de Gràcia y la estación FGC Provença — bajas unas escaleras y ahí está la entrada.',
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

        {/* FAQ Accordion List - Always Rendered in DOM for SEO Crawlers */}
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
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none min-h-[44px]"
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

                {/* CSS Accordion Container: ALWAYS present in DOM for SEO, visually toggled with CSS max-height/opacity */}
                <div
                  className={`transition-all duration-300 ease-in-out border-t border-[#26221E] ${
                    isOpen
                      ? 'max-h-96 opacity-100 p-6 pt-4'
                      : 'max-h-0 opacity-0 p-0 overflow-hidden border-t-0'
                  }`}
                >
                  <p className="text-sm sm:text-base text-[#A69F91] font-sans leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
