'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';
import LogoBust from './LogoBust';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const mins = now.getMinutes();
      const currentMinutes = hour * 60 + mins;

      if (day === 0) {
        setIsOpenNow(false);
        return;
      }

      const maxDinner = (day === 5 || day === 6) ? 1410 : 1380;
      const isLunch = currentMinutes >= 780 && currentMinutes < 960;
      const isDinner = currentMinutes >= 1140 && currentMinutes < maxDinner;

      setIsOpenNow(isLunch || isDinner);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Clean, short & spacious nav links (Inspired by Da Nanni luxury minimalism)
  const navLinks = [
    { name: 'Historia', href: '#nuestra-historia' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'La Carta', href: '#nuestra-carta' },
    { name: 'Ambiente', href: '#ambiente' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0E0C0A]/92 backdrop-blur-md border-b border-[#C9A15A]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0E0C0A]/95 via-[#0E0C0A]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a
            href="#"
            className="flex items-center space-x-3.5 group focus:outline-none focus:ring-1 focus:ring-[#C9A15A] rounded-sm p-1 shrink-0"
          >
            {/* Classic Line Art Logo Bust Emblem */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C9A15A]/40 flex items-center justify-center bg-[#141210] group-hover:border-[#C9A15A] transition-colors p-1 shadow-md">
              <LogoBust variant="gold" size={32} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.25em] text-lg sm:text-xl text-[#F5F1E8] font-light group-hover:text-[#C9A15A] transition-colors leading-none">
                IL MASSONE
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#C9A15A] uppercase font-sans font-medium mt-1">
                Ristorante & Pizzeria
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Spacious, Single-Line, Uncrowded) */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12 mx-auto" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-sans font-light text-[#F5F1E8]/80 hover:text-[#C9A15A] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A15A] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Right Actions (Sleek & Uncluttered) */}
          <div className="hidden sm:flex items-center space-x-4 shrink-0">
            {/* Live Status Pill */}
            <div className="hidden xl:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#141210] border border-[#2B2621] text-[11px] font-sans text-[#A69F91]">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'}`} />
              <span>{isOpenNow ? 'Abierto' : 'Cerrado'}</span>
            </div>

            {/* Direct Action Button */}
            <a
              href="https://wa.me/34936693534?text=Hola%20Il%20Massone,%20quisiera%20consultar%20una%20reserva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-md bg-[#C9A15A] hover:bg-[#DFB873] text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#0E0C0A] transition-all gold-glow-sm hover:scale-[1.02] whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#0E0C0A]" />
              <span>Reservar</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#F5F1E8] hover:text-[#C9A15A] focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0E0C0A]/95 border-b border-[#C9A15A]/20 backdrop-blur-xl"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              <div className="flex items-center space-x-2 pb-3 border-b border-[#26221E] text-xs text-[#A69F91]">
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-600'}`} />
                <span>{isOpenNow ? 'Abierto ahora hasta 23:00' : 'Cerrado ahora • Horario 13:00-16:00 / 19:00-23:00'}</span>
              </div>

              <div className="flex flex-col space-y-3 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-[0.2em] text-[#F5F1E8] hover:text-[#C9A15A] transition-colors py-2 border-b border-[#1C1814]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 grid grid-cols-2 gap-3">
                <a
                  href="tel:+34936693534"
                  className="flex items-center justify-center space-x-2 py-3 rounded-md border border-[#C9A15A]/40 text-xs font-semibold text-[#F5F1E8] bg-[#141210]"
                >
                  <Phone className="w-4 h-4 text-[#C9A15A]" />
                  <span>Llamar</span>
                </a>
                <a
                  href="https://wa.me/34936693534?text=Hola%20Il%20Massone,%20quisiera%20reservar%20una%20mesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 rounded-md bg-[#C9A15A] text-xs font-semibold text-[#0E0C0A]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
