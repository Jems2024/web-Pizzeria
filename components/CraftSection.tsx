'use client';

import { motion } from 'framer-motion';
import { Timer, Flame, Wheat, Award } from 'lucide-react';

export default function CraftSection() {
  const craftSteps = [
    {
      icon: Timer,
      number: '01',
      title: 'Masa Madre & 72h de Fermentación',
      subtitle: 'Ligereza y Digeribilidad',
      description:
        'No hay atajos. Nuestra masa reposa pacientemente durante 72 horas para lograr una fermentación natural. El resultado es una pizza extremadamente ligera, aireada y de fácil digestión.',
    },
    {
      icon: Flame,
      number: '02',
      title: 'Horno de Piedra a 480°C',
      subtitle: 'El Secreto Napolitano',
      description:
        'Cada pizza se hornea sobre piedra volcánica a altas temperaturas durante apenas 90 segundos, sellando la jugosidad del tomate y logrando el mítico cornicione dorado y crujiente.',
    },
    {
      icon: Wheat,
      number: '03',
      title: 'Ingredientes DOP Seleccionados',
      subtitle: 'Pureza de Origen Italiano',
      description:
        'Harina de fuerza tipo 00, tomate San Marzano de las faldas del Vesubio, mozzarella de búfala campana y aceite de oliva virgen extra. Ingredientes reales sin artificios.',
    },
  ];

  return (
    <section id="proceso" className="py-24 sm:py-32 bg-[#141210] relative overflow-hidden border-t border-[#26221E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1C1814] border border-[#C9A15A]/30 mb-4">
            <Award className="w-3.5 h-3.5 text-[#C9A15A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A15A] font-sans font-medium">
              El Secreto de Nuestra Cocina
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F1E8] font-light leading-tight">
            El Arte del Proceso Artesanal
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A69F91] font-sans font-light">
            Respetamos los tiempos de la tradición napolitana para que cada bocado sea un viaje sensorial directo a Italia.
          </p>
        </div>

        {/* Craft Cards Grid - Strict H3 Heading Hierarchy under H2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {craftSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group relative p-8 rounded-xl bg-[#1B1815] border border-[#2B2621] hover:border-[#C9A15A]/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-light text-[#C9A15A]/40 group-hover:text-[#C9A15A] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#0E0C0A] border border-[#C9A15A]/20 flex items-center justify-center text-[#C9A15A] group-hover:border-[#C9A15A] group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Titles */}
                  <span className="block text-xs uppercase tracking-widest text-[#C9A15A] font-sans font-medium mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-serif text-[#F5F1E8] font-medium mb-4 group-hover:text-[#C9A15A] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#A69F91] font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="mt-8 pt-4 border-t border-[#26221E] flex items-center justify-between text-[11px] font-mono text-[#615B52] uppercase tracking-wider group-hover:text-[#C9A15A]/80 transition-colors">
                  <span>Il Massone Craft</span>
                  <span>100% Tradizione</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Golden Banner Quote */}
        <div className="mt-16 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#1B1815] via-[#2A1F17] to-[#1B1815] border border-[#C9A15A]/30 text-center">
          <p className="text-lg sm:text-xl font-serif italic text-[#F5F1E8]">
            &ldquo;Masa crujiente por fuera, tierna por dentro. En Il Massone la prisa no existe.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
