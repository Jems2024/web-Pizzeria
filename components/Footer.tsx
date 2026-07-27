'use client';

import { Phone, MapPin, Heart } from 'lucide-react';
import LogoBust from './LogoBust';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0908] text-[#F5F1E8] border-t border-[#1C1814] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#1C1814]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A15A]/40 flex items-center justify-center bg-[#141210] p-1 shadow-md">
                <LogoBust variant="gold" size={32} />
              </div>
              <span className="font-serif tracking-[0.2em] text-xl text-[#F5F1E8]">
                IL MASSONE
              </span>
            </div>

            <p className="text-xs text-[#A69F91] font-sans leading-relaxed max-w-sm">
              Trattoria y pizzería italiana familiar en el corazón del Eixample de Barcelona. Masa artesanal de 72h de fermentación, horno de piedra y el cariño incondicional de Pina.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <a
                href="https://instagram.com/il_massone_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#141210] border border-[#2B2621] hover:border-[#C9A15A] text-[#C9A15A] transition-colors"
                aria-label="Instagram de Il Massone"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="tel:+34936693534"
                className="p-2.5 rounded-full bg-[#141210] border border-[#2B2621] hover:border-[#C9A15A] text-[#C9A15A] transition-colors"
                aria-label="Llamar a Il Massone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#C9A15A]">Navegación</h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#A69F91]">
              <li><a href="#nuestra-historia" className="hover:text-[#C9A15A] transition-colors">Nuestra Historia</a></li>
              <li><a href="#proceso" className="hover:text-[#C9A15A] transition-colors">Proceso Artesanal</a></li>
              <li><a href="#nuestra-carta" className="hover:text-[#C9A15A] transition-colors">La Carta de Platos</a></li>
              <li><a href="#ambiente" className="hover:text-[#C9A15A] transition-colors">Ambiente & Galería</a></li>
              <li><a href="#resenas" className="hover:text-[#C9A15A] transition-colors">Reseñas de Clientes</a></li>
              <li><a href="#faq" className="hover:text-[#C9A15A] transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#ubicacion" className="hover:text-[#C9A15A] transition-colors">Ubicación & Contacto</a></li>
            </ul>
          </div>

          {/* Location & Hours Summary */}
          <div className="md:col-span-4 space-y-3 text-xs text-[#A69F91]">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#C9A15A]">Contacto & Horario</h4>
            <p className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#C9A15A] shrink-0 mt-0.5" />
              <span>Carrer de Mallorca, 235, 08008 Barcelona</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#C9A15A] shrink-0" />
              <a href="tel:+34936693534" className="hover:text-[#F5F1E8]">+34 936 69 35 34</a>
            </p>
            <div className="pt-2 text-[11px] space-y-1">
              <p>Lun – Jue: 13:00–16:00 | 19:00–23:00</p>
              <p>Vie – Sáb: 13:00–16:00 | 19:00–23:30</p>
              <p className="text-amber-500/80">Domingo cerrado</p>
            </div>
            <p className="text-[11px] text-[#C9A15A] pt-2">
              * Aceptamos únicamente efectivo y Bizum.
            </p>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#615B52] space-y-4 sm:space-y-0">
          <p>© {currentYear} Il Massone Ristorante & Pizzeria. Todos los derechos reservados.</p>
          <p className="flex items-center space-x-1">
            <span>Hecho con</span>
            <Heart className="w-3 h-3 text-[#C9A15A] fill-[#C9A15A]" />
            <span>para amantes de la pizza artesanal en Barcelona</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
