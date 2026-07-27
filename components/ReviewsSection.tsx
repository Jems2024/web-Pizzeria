'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Marc Rosselló',
    role: 'Cliente habitual de Eixample',
    rating: 5,
    date: 'Hace 2 semanas',
    highlight: 'La calidez de Pina y la mejor masa artesanal de Barcelona',
    comment:
      'Al bajar las escaleras te encuentras con un comedor super acogedor. Pina te atiende como si fueras de la familia. La masa de la pizza diavola es increíblemente ligera y sabrosa. ¡El tiramisú casero es obligatorio!',
  },
  {
    id: 2,
    author: 'Elena & Matteo',
    role: 'Reseña en Google Maps (4.5★)',
    rating: 5,
    date: 'Hace 1 mes',
    highlight: 'Auténtica trattoria italiana, nada de trampas para turistas',
    comment:
      'Llegamos por casualidad cerca de la estación Provença y nos sorprendió gratamente. La burrata con focaccia recién horneada y la pizza de trufa son de 10. Relación calidad-precio inmejorable en el Eixample.',
  },
  {
    id: 3,
    author: 'David Fernández',
    role: 'Guía Local de Google',
    rating: 5,
    date: 'Hace 3 semanas',
    highlight: 'Menú del mediodía fabuloso y trato inmejorable',
    comment:
      'El menú de mediodía vale muchísimo la pena. La pizza con borde cornicione crujiente hecha al horno de piedra se nota que tiene horas de fermentación. Solo aceptan efectivo y Bizum, aviso para despistados, pero vale cada céntimo.',
  },
  {
    id: 4,
    author: 'Giulia Bianchi',
    role: 'Turista Italiana en Barcelona',
    rating: 5,
    date: 'Hace 2 meses',
    highlight: 'Mi siento come a casa mia a Napoli',
    comment:
      'Como italiana viviendo fuera, encontrar una pizza que me recuerde a casa no es fácil. Il Massone lo logra. La pasta a la carbonara sin nata y la pizza margherita son auténticamente napolitanas.',
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[currentIndex];

  return (
    <section id="resenas" className="py-24 sm:py-32 bg-[#0E0C0A] relative overflow-hidden border-t border-[#26221E]">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A15A]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Google Summary Badge */}
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-[#141210] border border-[#C9A15A]/30 mb-4 shadow-lg">
            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#F5F1E8] font-sans">
              4.5 ★ en Google Reviews
            </span>
            <span className="text-[10px] text-[#A69F91] font-mono">
              (+350 opiniones reales)
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F1E8] font-light">
            Lo que Dicen Nuestros Comensales
          </h2>
          <p className="mt-3 text-base text-[#A69F91] font-sans">
            La mejor recompensa es ver a nuestros clientes volver semana tras semana.
          </p>
        </div>

        {/* Testimonial Card Display */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-12 rounded-2xl bg-[#141210] border border-[#26221E] shadow-2xl relative"
            >
              <Quote className="absolute top-6 right-8 w-16 h-16 text-[#C9A15A]/10" />

              <div className="flex items-center space-x-1 text-amber-400 mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-[#C9A15A] font-medium mb-4">
                &ldquo;{current.highlight}&rdquo;
              </h3>

              <p className="text-base sm:text-lg text-[#F5F1E8]/90 font-sans font-light leading-relaxed mb-8">
                {current.comment}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-[#26221E]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A15A]/20 border border-[#C9A15A]/40 flex items-center justify-center font-serif text-[#C9A15A] font-bold">
                    {current.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-serif text-[#F5F1E8] font-medium flex items-center space-x-1.5">
                      <span>{current.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <span className="text-xs text-[#A69F91] font-sans">{current.role} • {current.date}</span>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevReview}
                    className="p-2.5 rounded-full bg-[#1C1814] border border-[#332D27] hover:border-[#C9A15A] text-[#F5F1E8] hover:text-[#C9A15A] transition-colors"
                    aria-label="Opinión anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-2.5 rounded-full bg-[#1C1814] border border-[#332D27] hover:border-[#C9A15A] text-[#F5F1E8] hover:text-[#C9A15A] transition-colors"
                    aria-label="Siguiente opinión"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-[#C9A15A] w-8' : 'bg-[#26221E] hover:bg-[#A69F91]'
                }`}
                aria-label={`Ir a opinión ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
