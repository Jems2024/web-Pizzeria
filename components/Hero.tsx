'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, Utensils, MapPin, Clock, Phone, ChevronDown } from 'lucide-react';
import LogoBust from './LogoBust';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-10 overflow-hidden bg-[#0E0C0A]">
      {/* Background Photography with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        {/* TODO: reemplazar con foto real del local — pizza napolitana saliendo del horno de piedra */}
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop"
          alt="Pizza napolitana artesanal recién horneada en horno de piedra en Il Massone Barcelona"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.38] contrast-[1.15] scale-105"
        />
        {/* Radial & Gradient Overlays for High Contrast & Mood */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0E0C0A]/60 to-[#0E0C0A]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/40 to-[#0E0C0A]/80" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center flex flex-col items-center">
        
        {/* Centered Classical Logo Bust Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 relative flex flex-col items-center"
        >
          <div className="p-4 rounded-full bg-[#141210]/90 border border-[#C9A15A]/40 backdrop-blur-md shadow-2xl gold-glow-sm">
            <LogoBust variant="gold" size={76} />
          </div>

          {/* Decorative Calligraphic Line Art Detail */}
          <div className="flex items-center space-x-3 mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A15A]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A15A] font-sans font-medium">
              EST. EIXAMPLE BARCELONA
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A15A]" />
          </div>
        </motion.div>

        {/* Main H1 Title (Optimized for SEO Keywords & Body Text Match) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-[#F5F1E8] font-light leading-[1.08] mb-6"
        >
          Pizzería Italiana <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#C9A15A]">y Masa Artesanal en Barcelona</span>
        </motion.h1>

        {/* Subtitle / Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-[#F5F1E8]/90 font-sans font-light leading-relaxed mb-10 text-balance"
        >
          El rincón familiar del Eixample donde la pizza napolitana, la masa madre de fermentación de 72h, el horno de piedra y el cariño de Pina te hacen sentir como en casa.
        </motion.p>

        {/* Dual Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
        >
          {/* Primary Action Button */}
          <a
            href="https://wa.me/34936693534?text=Hola%20Il%20Massone,%20quisiera%20reservar%20una%20mesa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#C9A15A] hover:bg-[#DFB873] text-sm font-sans font-bold uppercase tracking-[0.15em] text-[#0E0C0A] transition-all duration-300 shadow-xl gold-glow-lg flex items-center justify-center space-x-3 group hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5 fill-[#0E0C0A] group-hover:rotate-12 transition-transform" />
            <span>Reservar por WhatsApp</span>
          </a>

          {/* Secondary Action Button */}
          <a
            href="#nuestra-carta"
            className="w-full sm:w-auto px-8 py-4 rounded-md border border-[#F5F1E8]/30 hover:border-[#C9A15A] bg-[#141210]/70 hover:bg-[#141210] backdrop-blur-md text-sm font-sans uppercase tracking-[0.15em] text-[#F5F1E8] hover:text-[#C9A15A] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Utensils className="w-4 h-4 text-[#C9A15A]" />
            <span>Ver la Carta</span>
          </a>
        </motion.div>
      </div>

      {/* Hero Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-4 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-6 rounded-xl bg-[#141210]/90 backdrop-blur-xl border border-[#C9A15A]/20 shadow-2xl">
          {/* Location */}
          <div className="flex items-center space-x-4 border-b md:border-b-0 md:border-r border-[#26221E] pb-3 md:pb-0 md:pr-4">
            <div className="w-10 h-10 rounded-full bg-[#C9A15A]/10 border border-[#C9A15A]/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#C9A15A]" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#C9A15A]">
                Ubicación Eixample
              </span>
              <span className="text-sm font-serif text-[#F5F1E8]">
                Carrer de Mallorca, 235, Barcelona
              </span>
            </div>
          </div>

          {/* Schedule */}
          <div className="flex items-center space-x-4 border-b md:border-b-0 md:border-r border-[#26221E] pb-3 md:pb-0 md:pr-4">
            <div className="w-10 h-10 rounded-full bg-[#C9A15A]/10 border border-[#C9A15A]/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#C9A15A]" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#C9A15A]">
                Horario Continuado
              </span>
              <span className="text-sm font-serif text-[#F5F1E8]">
                Lun–Sáb: 13:00–16:00 | 19:00–23:00
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#C9A15A]/10 border border-[#C9A15A]/30 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-[#C9A15A]" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#C9A15A]">
                Reservas Directas
              </span>
              <a
                href="tel:+34936693534"
                className="text-sm font-serif text-[#F5F1E8] hover:text-[#C9A15A] transition-colors"
              >
                +34 936 69 35 34
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#nuestra-historia"
            className="text-[#C9A15A]/70 hover:text-[#C9A15A] transition-colors animate-bounce p-2"
            aria-label="Ir a Nuestra Historia"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
