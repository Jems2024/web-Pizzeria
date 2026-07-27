'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Sparkles, FlameKindling } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="nuestra-historia" className="relative py-24 sm:py-32 bg-[#0E0C0A] overflow-hidden border-t border-[#26221E]">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#3A1F1A]/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#C9A15A]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Photography Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Main Cellar Dining Atmosphere Photo */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-[#C9A15A]/20 shadow-2xl">
              {/* TODO: reemplazar con foto real del comedor interior al bajar las escaleras en Il Massone */}
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                alt="Interior cálido del restaurante Il Massone en el Eixample Barcelona con mesas de madera a la luz de las velas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-transparent to-transparent opacity-80" />

              {/* Floating Quote Box */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-md bg-[#141210]/90 backdrop-blur-md border border-[#C9A15A]/30 shadow-xl">
                <p className="text-sm font-serif italic text-[#F5F1E8]">
                  &ldquo;Bajas las escaleras y descubres un templo íntimo donde la masa madre se respeta y la comida se sirve con el corazón.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C9A15A]">
                    — Pina, Anfitriona & Familia
                  </span>
                  <Heart className="w-4 h-4 text-[#C9A15A] fill-[#C9A15A]" />
                </div>
              </div>
            </div>

            {/* Overlapping Detail Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 aspect-square rounded-lg overflow-hidden border-2 border-[#C9A15A]/40 shadow-2xl hidden sm:block"
            >
              {/* TODO: reemplazar con foto real del horno de piedra o amasado manual */}
              <Image
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=600&auto=format&fit=crop"
                alt="Manos artesanas preparando la masa madre napolitana en Il Massone"
                fill
                sizes="224px"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Storytelling Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1B1815] border border-[#C9A15A]/30 w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A15A]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A15A] font-sans font-medium">
                Nuestra Historia & Esencia
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F1E8] font-light leading-tight mb-6">
              Más que un restaurante, <br />
              <span className="italic font-normal text-[#C9A15A]">una casa italiana en Barcelona</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#F5F1E8]/85 font-sans font-light leading-relaxed">
              <p>
                Al caminar por el Carrer de Mallorca en el Eixample, la modesta fachada de Il Massone es solo el preludio. Al cruzar la puerta y descender por nuestras escaleras, descubres un comedor cálido, amplio e íntimo iluminado por velas y impregnado del aroma del horno de piedra.
              </p>
              <p>
                Aquí no hay protocolos ni prisa. Pina y nuestra familia reciben a cada visitante no como a un cliente, sino como a un invitado de honor a la mesa de nuestra casa en Italia.
              </p>
              <p>
                Cada pizza napolitana que sale de nuestro horno nace de una masa artesanal madurada pacientemente durante 72 horas, elaborada con harinas seleccionadas e ingredientes DOP traídos directamente de productores italianos.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#26221E]">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded bg-[#C9A15A]/10 text-[#C9A15A] shrink-0">
                  <FlameKindling className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-serif text-[#F5F1E8] font-medium">Horno de Piedra</p>
                  <p className="text-xs text-[#A69F91] mt-0.5">Cocción a alta temperatura para la textura napolitana auténtica.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded bg-[#C9A15A]/10 text-[#C9A15A] shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-serif text-[#F5F1E8] font-medium">Trato Familiar</p>
                  <p className="text-xs text-[#A69F91] mt-0.5">Barriga llena y corazón feliz en cada visita con Pina.</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
