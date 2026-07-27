'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoBust from './LogoBust';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if intro has already been displayed during this session
    const hasSeenIntro = sessionStorage.getItem('il_massone_intro_seen');
    if (hasSeenIntro) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    // Auto dismiss after 2.9 seconds
    const timer = setTimeout(() => {
      handleSkip();
    }, 2900);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem('il_massone_intro_seen', 'true');
    setIsVisible(false);
  };

  if (isVisible === null || !isVisible) return null;

  const brandTitle = "IL MASSONE".split("");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleSkip}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0E0C0A] cursor-pointer select-none overflow-hidden"
          role="button"
          aria-label="Saltar animación de introducción"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#C9A15A]/10 blur-3xl pointer-events-none animate-pulse" />

          <div className="relative flex flex-col items-center justify-center p-6 text-center z-10">
            {/* 2D Engraved Pizza Illustration with the exact Logo Bust in the center */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8 flex items-center justify-center"
            >
              {/* Rotating Pizza Line Art */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full text-[#C9A15A] filter drop-shadow-[0_0_12px_rgba(201,161,90,0.3)]"
              >
                {/* Outer Crust Circles & Dashes */}
                <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 3" />
                <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="2" />
                <circle cx="100" cy="100" r="76" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

                {/* Pizza Slice Division Lines */}
                <line x1="100" y1="12" x2="100" y2="188" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                <line x1="12" y1="100" x2="188" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                <line x1="38" y1="38" x2="162" y2="162" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                <line x1="162" y1="38" x2="38" y2="162" stroke="currentColor" strokeWidth="1" opacity="0.4" />

                {/* Artisanal Toppings Line Art (Basil Leaves, Mozzarella Swirls) */}
                <path d="M75 55 Q90 45 85 65 Q70 70 75 55 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M125 145 Q140 135 135 155 Q120 160 125 145 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M140 70 Q155 75 145 90 Q130 80 140 70 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />

                {/* Mozzarella & Tomato Sauce Ornaments */}
                <circle cx="60" cy="120" r="12" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2" />
                <circle cx="140" cy="120" r="10" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2" />
                <circle cx="110" cy="55" r="12" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2" />

                {/* Center Emblem Ring */}
                <circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="34" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
              </motion.svg>

              {/* Exact Company Logo Bust Centered inside the Pizza */}
              <div className="relative z-10 p-2 rounded-full bg-[#0E0C0A]/90 backdrop-blur-sm border border-[#C9A15A]/40 flex items-center justify-center shadow-2xl">
                <LogoBust variant="gold" size={68} />
              </div>
            </motion.div>

            {/* Decorative Calligraphic Fine Line Divider */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#C9A15A] to-transparent mb-4" />

            {/* Brand Name Typography Reveal (Letter by Letter Fade + Blur) */}
            <motion.h1 className="flex items-center justify-center space-x-1.5 sm:space-x-3 text-3xl sm:text-5xl font-serif tracking-[0.25em] text-[#F5F1E8] font-light">
              {brandTitle.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={char === " " ? "w-2 sm:w-4" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-3 text-xs sm:text-sm font-sans tracking-[0.3em] uppercase text-[#C9A15A]"
            >
              Trattoria & Pizzeria Artigianale • Barcelona
            </motion.p>
          </div>

          {/* Skip Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 text-xs tracking-widest text-[#F5F1E8] font-mono uppercase"
          >
            Haz clic en cualquier lugar para saltar
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
