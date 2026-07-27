'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Banknote } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="ubicacion" className="py-24 sm:py-32 bg-[#0E0C0A] relative overflow-hidden border-t border-[#26221E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#141210] border border-[#C9A15A]/30 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#C9A15A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A15A] font-sans font-medium">
              Encuéntranos en Barcelona
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F1E8] font-light">
            Ubicación & Contacto
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A69F91] font-sans">
            En el corazón del Eixample, a pocos pasos de Passeig de Gràcia y FGC Provença.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column - Contact Details & Operating Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-[#141210] border border-[#26221E] shadow-2xl space-y-8"
          >
            <div>
              <p className="text-2xl font-serif text-[#F5F1E8] font-medium mb-6 pb-4 border-b border-[#26221E]">
                Información del Restaurante
              </p>

              {/* Address */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-[#0E0C0A] border border-[#C9A15A]/30 text-[#C9A15A] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <address className="not-italic">
                  <span className="block text-xs font-mono uppercase tracking-widest text-[#C9A15A]">Dirección NAP</span>
                  <span className="text-base font-serif text-[#F5F1E8]">Carrer de Mallorca, 235</span>
                  <span className="block text-xs text-[#A69F91] mt-0.5">08008 Barcelona (Eixample), España</span>
                  <span className="block text-[11px] text-[#C9A15A]/80 mt-1 font-sans">Cerca de estación FGC Provença</span>
                </address>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-[#0E0C0A] border border-[#C9A15A]/30 text-[#C9A15A] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-widest text-[#C9A15A]">Teléfono de Reservas</span>
                  <a
                    href="tel:+34936693534"
                    className="text-lg font-serif text-[#F5F1E8] hover:text-[#C9A15A] transition-colors"
                  >
                    +34 936 69 35 34
                  </a>
                  <span className="block text-xs text-[#A69F91]">Atención telefónica durante horario comercial</span>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-[#0E0C0A] border border-[#C9A15A]/30 text-[#C9A15A] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-widest text-[#C9A15A]">Horario de Apertura</span>
                  <div className="text-xs text-[#F5F1E8] space-y-1 mt-1">
                    <p className="flex justify-between space-x-4">
                      <span className="text-[#A69F91]">Lun – Jue:</span>
                      <span>13:00–16:00 | 19:00–23:00</span>
                    </p>
                    <p className="flex justify-between space-x-4">
                      <span className="text-[#A69F91]">Vie – Sáb:</span>
                      <span>13:00–16:00 | 19:00–23:30</span>
                    </p>
                    <p className="flex justify-between space-x-4 text-amber-500/90 font-medium">
                      <span>Domingo:</span>
                      <span>Cerrado</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Methods Notice */}
              <div className="p-4 rounded-xl bg-[#1B1815] border border-[#C9A15A]/30 flex items-center space-x-3">
                <div className="p-2 rounded bg-[#C9A15A]/10 text-[#C9A15A]">
                  <Banknote className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-[#F5F1E8]">Métodos de Pago Aceptados</span>
                  <span className="text-[#C9A15A]">Solo Efectivo y Bizum</span>
                  <span className="text-[#A69F91] block text-[11px]">(No aceptamos tarjeta bancaria)</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#26221E]">
              <a
                href="https://wa.me/34936693534?text=Hola%20Il%20Massone,%20quisiera%20reservar%20una%20mesa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-lg bg-[#C9A15A] hover:bg-[#DFB873] text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#0E0C0A] transition-all flex items-center justify-center space-x-2 gold-glow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-[#0E0C0A]" />
                <span>Escribir por WhatsApp</span>
              </a>

              <a
                href="tel:+34936693534"
                className="w-full py-3 rounded-lg border border-[#C9A15A]/40 text-xs font-sans font-semibold uppercase tracking-wider text-[#F5F1E8] hover:text-[#C9A15A] hover:border-[#C9A15A] bg-[#0E0C0A] transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#C9A15A]" />
                <span>Llamar Ahora</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Interactive Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative min-h-[420px] rounded-2xl overflow-hidden border border-[#26221E] shadow-2xl flex flex-col"
          >
            <iframe
              title="Mapa de ubicación de Il Massone en Barcelona"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.3056891040336!2d2.1558988766155624!3d41.3892099951888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a28f73111111%3A0x123456789abcdef!2sCarrer%20de%20Mallorca%2C%20235%2C%2008008%20Barcelona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(90%) contrast(110%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px] flex-1"
            />

            {/* Floating Navigation Button */}
            <div className="absolute bottom-4 right-4 z-10">
              <a
                href="https://maps.google.com/?q=Carrer+de+Mallorca,+235,+08008+Barcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#141210]/90 backdrop-blur-md border border-[#C9A15A]/40 text-xs font-sans uppercase tracking-widest text-[#F5F1E8] hover:text-[#C9A15A] flex items-center space-x-2 shadow-xl"
              >
                <Navigation className="w-4 h-4 text-[#C9A15A]" />
                <span>Abrir en Google Maps</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
