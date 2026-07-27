'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

const galleryPhotos = [
  {
    id: 1,
    title: 'Comedor Íntimo al Descender',
    subtitle: 'Ambiente de velas & mesas de madera',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-2',
    aspect: 'aspect-[4/3] md:aspect-auto h-full',
  },
  {
    id: 2,
    title: 'Horno de Piedra Volcánica',
    subtitle: 'Llamas a viva voz',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 3,
    title: 'Amasado Manual & Tradición',
    subtitle: '72h de fermentación previa',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 4,
    title: 'Ingredientes Frescos DOP',
    subtitle: 'Burrata de la Puglia & Tomate San Marzano',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 5,
    title: 'El Toque Final',
    subtitle: 'Albahaca fresca & AOVE',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-1',
    aspect: 'aspect-[16/9]',
  },
];

export default function GalleryMosaic() {
  return (
    <section id="ambiente" className="py-24 sm:py-32 bg-[#141210] relative overflow-hidden border-t border-[#26221E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1C1814] border border-[#C9A15A]/30 mb-3">
              <Camera className="w-3.5 h-3.5 text-[#C9A15A]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A15A] font-sans font-medium">
                Atmósfera & Detrás de Escena
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F1E8] font-light">
              El Ambiente de Il Massone
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#A69F91] font-sans">
              Luces cálidas, aromas inolvidables y momentos compartidos en el Eixample.
            </p>
          </div>

          <a
            href="https://instagram.com/il_massone_"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#1C1814] border border-[#C9A15A]/40 text-xs font-sans uppercase tracking-widest text-[#F5F1E8] hover:text-[#C9A15A] hover:border-[#C9A15A] transition-all w-fit"
          >
            <InstagramIcon className="w-4 h-4 text-[#C9A15A]" />
            <span>@il_massone_ en Instagram</span>
          </a>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {galleryPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative rounded-xl overflow-hidden group border border-[#26221E] hover:border-[#C9A15A]/40 ${photo.span}`}
            >
              {/* TODO: reemplazar con foto real del local Il Massone — {photo.title} */}
              <Image
                src={photo.image}
                alt={`${photo.title} - Il Massone trattoria pizzería Barcelona`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
              />

              {/* Overlay Gradient & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A15A]">
                  {photo.subtitle}
                </span>
                <h3 className="text-lg font-serif text-[#F5F1E8] font-medium">
                  {photo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
