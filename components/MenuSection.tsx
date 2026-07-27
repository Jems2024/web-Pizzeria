'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Info, Leaf, Sparkles, LayoutGrid, SlidersHorizontal } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  category: 'pizzas' | 'pastas' | 'antipasti' | 'postres' | 'bebidas';
  description: string;
  price: string;
  image: string;
  isVegetarian?: boolean;
  isPopular?: boolean;
}

const menuItems: MenuItem[] = [
  // PIZZAS
  {
    id: 'margherita',
    name: 'Pizza Margherita',
    category: 'pizzas',
    description: 'Tomate San Marzano DOP, mozzarella fior di latte, albahaca fresca y aceite de oliva virgen extra de primera prensa.',
    price: '11,50 €',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 'diavola',
    name: 'Pizza Diavola',
    category: 'pizzas',
    description: 'Tomate San Marzano, mozzarella fior di latte, salami picante de Calabria y un toque sutil de chile fresco infusionado.',
    price: '14,20 €',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 'prosciutto-burrata',
    name: 'Prosciutto Crudo & Burrata',
    category: 'pizzas',
    description: 'Masa madre de 72h coronada con burrata fresca entera de la Puglia, prosciutto di Parma 24 meses y rúcula selvática.',
    price: '15,50 €',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 'trufa-champinones',
    name: 'Pizza de Champiñones & Trufa',
    category: 'pizzas',
    description: 'Base de crema artesanal de trufa negra, mozzarella di bufala campana, champiñones silvestres salteados y pimienta negra de molino.',
    price: '15,90 €',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
  },
  {
    id: 'capricciosa',
    name: 'Pizza Capricciosa',
    category: 'pizzas',
    description: 'Tomate San Marzano, mozzarella, jamón cocido italiano, corazón de alcachofas romanas, champiñones y aceitunas negras.',
    price: '13,90 €',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4quesos',
    name: 'Pizza 4 Quesos',
    category: 'pizzas',
    description: 'Armonía de mozzarella, gorgonzola cremoso DOP, provolone ahumado y lascas finas de parmigiano reggiano madurado.',
    price: '13,90 €',
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
  },
  {
    id: 'vegetariana',
    name: 'Pizza Vegetariana',
    category: 'pizzas',
    description: 'Verduras de huerto de temporada asadas a la piedra: berenjenas, calabacín, pimientos amarillos y pesto de albahaca casero.',
    price: '13,50 €',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
  },
  {
    id: 'aceitunas-alcachofas',
    name: 'Pizza Aceitunas & Alcachofas',
    category: 'pizzas',
    description: 'Base bianca con mozzarella fior di latte, alcachofas romanas confitadas, aceitunas kalamata y brotes de albahaca fresca.',
    price: '13,80 €',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
  },

  // PASTAS & RISOTTOS
  {
    id: 'carbonara',
    name: 'Espaguetis a la Carbonara',
    category: 'pastas',
    description: 'La auténtica receta romana sin nata: yema de huevo de granja, guanciale de cerdo crujiente y abundante Pecorino Romano.',
    price: '13,50 €',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 'spaghetti-trufado',
    name: 'Espaguetis Trufados',
    category: 'pastas',
    description: 'Pasta fresca elaborada a mano, salteada con manteca de trufa negra del Piamonte y Parmigiano Reggiano 24 meses.',
    price: '15,50 €',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281273?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 'gnocchi-4quesos',
    name: 'Gnocchi Cuatro Quesos',
    category: 'pastas',
    description: 'Gnocchi artesanales de patata gratinados suavemente al horno en salsa aterciopelada de cuatro quesos italianos.',
    price: '13,90 €',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
  },
  {
    id: 'pasta-pistacho',
    name: 'Pasta Fresca Romanesco & Pistacho',
    category: 'pastas',
    description: 'Pasta artesanal con pesto casero de pistachos de Bronte, romanesco salteado y virutas de queso curado.',
    price: '14,50 €',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
  },
  {
    id: 'lasana-casera',
    name: 'Lasaña Casera della Casa',
    category: 'pastas',
    description: 'Láminas de pasta fresca intercaladas con ragù boloñés de ternera estofada a fuego lento y bechamel aromática.',
    price: '13,50 €',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bolonesa',
    name: 'Espaguetis a la Boloñesa',
    category: 'pastas',
    description: 'Ragù tradicional estofado durante 6 horas con sofrito de verduras, carne seleccionada, tomate y aromáticas.',
    price: '12,90 €',
    image: 'https://images.unsplash.com/photo-1598866594230-a7c12756597f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'risotto-dia',
    name: 'Risotto del Día',
    category: 'pastas',
    description: 'Arroz Carnaroli mantecado al momento según la sugerencia diaria del chef con caldo de verduras de temporada.',
    price: '14,80 €',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=800&auto=format&fit=crop',
  },

  // ANTIPASTI
  {
    id: 'burrata',
    name: 'Burrata de la Puglia',
    category: 'antipasti',
    description: 'Burrata de 150g sobre cama de tomates cherry macerados en hierbas, pesto de albahaca y focaccia crujiente.',
    price: '12,50 €',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 'focaccia',
    name: 'Focaccia Artesanal al Romero',
    category: 'antipasti',
    description: 'Horneada al momento sobre piedra con romero silvestre, sal de flor Maldon y aceite de oliva virgen extra.',
    price: '6,50 €',
    image: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
  },
  {
    id: 'mejillones',
    name: 'Mejillones al Vino Blanco',
    category: 'antipasti',
    description: 'Mejillones de roca frescos salteados con ajo, perejil, caldo suave de vino blanco italiano y guindilla sutil.',
    price: '11,80 €',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'antipasto-misto',
    name: 'Antipasto Misto Italiano',
    category: 'antipasti',
    description: 'Tabla de charcutería artesanal y quesos importados: Prosciutto di Parma, Mortadella con pistacho, Provolone y aceitunas.',
    price: '14,90 €',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop',
  },

  // POSTRES
  {
    id: 'tiramisu',
    name: 'Tiramisù Casero de Pina',
    category: 'postres',
    description: 'Elaborado cada mañana con Savoiardi italianos empapados en espresso, crema de mascarpone fresco y cacao amargo.',
    price: '6,50 €',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 'cheesecake',
    name: 'Tarta de Queso Artesanal',
    category: 'postres',
    description: 'Textura cremosa y horneada al horno de piedra con coulis casero de frutos rojos de temporada.',
    price: '6,50 €',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop',
  },

  // BEBIDAS
  {
    id: 'vino-casa',
    name: 'Vino de la Casa (Tinto / Blanco)',
    category: 'bebidas',
    description: 'Selección exclusiva de pequeñas bodegas italianas. Disponible por copa o botella entera.',
    price: '4,00 € / 16,00 €',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'limoncello',
    name: 'Limoncello Artesanal',
    category: 'bebidas',
    description: 'Digestivo artesanal congelado, elaborado con corteza de limones de la costa napolitana.',
    price: '4,50 €',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cerveza',
    name: 'Cerveza Italiana (Birra Moretti / Peroni)',
    category: 'bebidas',
    description: 'Cerveza rubia tradicional de malta muy helada.',
    price: '3,80 €',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'espresso',
    name: 'Café Espresso Italiano',
    category: 'bebidas',
    description: 'Tueste italiano intenso servido con crema espesa y perfumada.',
    price: '2,00 €',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<'pizzas' | 'pastas' | 'antipasti' | 'postres' | 'bebidas'>('pizzas');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'pizzas', name: 'Pizzas Artesanales' },
    { id: 'pastas', name: 'Pastas & Risottos' },
    { id: 'antipasti', name: 'Antipasti' },
    { id: 'postres', name: 'Postres Caseros' },
    { id: 'bebidas', name: 'Vinos & Bebidas' },
  ];

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -460 : 460;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="nuestra-carta" className="py-28 sm:py-36 bg-[#0E0C0A] relative overflow-hidden border-t border-[#26221E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#1B1815] border border-[#C9A15A]/30 mb-4">
              <Sparkles className="w-4 h-4 text-[#C9A15A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A15A] font-sans font-medium">
                La Carta de Il Massone
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#F5F1E8] font-light tracking-tight leading-[1.1]">
              Nuestra Selección Gastronómica
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#A69F91] font-sans font-light max-w-2xl leading-relaxed">
              Platos elaborados al momento sin prisa, con materias primas importadas directamente de Italia y la devoción de la cocina artesanal.
            </p>
          </div>

          {/* View Toggle & Carousel Nav Controls */}
          <div className="flex items-center space-x-4 shrink-0">
            {/* View Mode Selector */}
            <div className="hidden sm:flex items-center p-1 rounded-full bg-[#141210] border border-[#2B2621]">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-sans uppercase tracking-widest transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-[#C9A15A] text-[#0E0C0A] font-bold shadow'
                    : 'text-[#A69F91] hover:text-[#F5F1E8]'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Carrusel</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-sans uppercase tracking-widest transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#C9A15A] text-[#0E0C0A] font-bold shadow'
                    : 'text-[#A69F91] hover:text-[#F5F1E8]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Lista Carta</span>
              </button>
            </div>

            {/* Carousel Buttons */}
            {viewMode === 'carousel' && (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => scrollCarousel('left')}
                  className="p-3.5 rounded-full bg-[#141210] border border-[#2B2621] hover:border-[#C9A15A] text-[#F5F1E8] hover:text-[#C9A15A] transition-all focus:outline-none shadow-md"
                  aria-label="Anterior plato"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  className="p-3.5 rounded-full bg-[#141210] border border-[#2B2621] hover:border-[#C9A15A] text-[#F5F1E8] hover:text-[#C9A15A] transition-all focus:outline-none shadow-md"
                  aria-label="Siguiente plato"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filter Category Tabs (Spacious & Clean) */}
        <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar pb-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-7 py-3 rounded-full text-xs sm:text-sm font-sans uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#C9A15A] text-[#0E0C0A] font-bold shadow-xl gold-glow-sm scale-105'
                  : 'bg-[#141210]/90 text-[#A69F91] border border-[#26221E] hover:border-[#C9A15A]/50 hover:text-[#F5F1E8]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dynamic Display Mode: Carousel or Spacious Editorial Grid */}
        <AnimatePresence mode="wait">
          {viewMode === 'carousel' ? (
            /* Carousel View - Large, Spacious Editorial Cards */
            <motion.div
              key="carousel-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              ref={carouselRef}
              className="flex space-x-8 overflow-x-auto no-scrollbar scroll-smooth pb-12 snap-x snap-mandatory pt-2"
            >
              {filteredItems.map((dish) => (
                <div
                  key={dish.id}
                  className="w-[320px] sm:w-[420px] md:w-[460px] shrink-0 snap-start rounded-2xl bg-[#141210] border border-[#26221E] hover:border-[#C9A15A]/50 overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-[#C9A15A]/10 flex flex-col justify-between"
                >
                  <div>
                    {/* Dish Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0E0C0A]">
                      {/* TODO: reemplazar con foto real del plato — {dish.name} */}
                      <Image
                        src={dish.image}
                        alt={`${dish.name} en Il Massone pizzería Barcelona`}
                        fill
                        sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 460px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/10 to-transparent opacity-80" />

                      {/* Badges Overlay */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {dish.isPopular && (
                          <span className="px-3 py-1.5 rounded-full bg-[#C9A15A] text-[#0E0C0A] text-[11px] font-sans font-bold uppercase tracking-widest shadow-md">
                            Especialidad
                          </span>
                        )}
                        {dish.isVegetarian && (
                          <span className="px-3 py-1.5 rounded-full bg-[#0E0C0A]/90 border border-emerald-500/40 text-emerald-400 text-[11px] font-sans font-medium flex items-center space-x-1.5 backdrop-blur-md">
                            <Leaf className="w-3.5 h-3.5" />
                            <span>Vegetariano</span>
                          </span>
                        )}
                      </div>

                      {/* Price Badge */}
                      <div className="absolute bottom-4 right-4 px-4 py-2 rounded-lg bg-[#0E0C0A]/90 border border-[#C9A15A]/40 text-base font-serif font-semibold text-[#C9A15A] backdrop-blur-md shadow-lg">
                        {dish.price}
                      </div>
                    </div>

                    {/* Dish Text Content (Spacious & Minimalist Typography) */}
                    <div className="p-8 sm:p-10 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F1E8] font-light group-hover:text-[#C9A15A] transition-colors leading-tight">
                          {dish.name}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-[#A69F91] font-sans font-light leading-relaxed tracking-wide">
                        {dish.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer Note */}
                  <div className="px-8 sm:px-10 pb-8 pt-4 flex items-center justify-between border-t border-[#1C1814] text-xs text-[#615B52]">
                    <span className="flex items-center space-x-2 text-[#A69F91]/80">
                      <Info className="w-3.5 h-3.5 text-[#C9A15A]" />
                      <span className="font-sans">Elaborado al momento en el horno de piedra</span>
                    </span>
                    <span className="font-mono text-[#C9A15A]/80 text-[11px]">[confirmar precio]</span>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* Spacious Editorial Grid List View */
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-4"
            >
              {filteredItems.map((dish) => (
                <div
                  key={dish.id}
                  className="p-8 sm:p-10 rounded-2xl bg-[#141210] border border-[#26221E] hover:border-[#C9A15A]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between border-b border-[#26221E] pb-4">
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F1E8] font-light group-hover:text-[#C9A15A] transition-colors">
                        {dish.name}
                      </h3>
                      <span className="text-xl font-serif text-[#C9A15A] font-light ml-4 shrink-0">
                        {dish.price}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#A69F91] font-sans font-light leading-relaxed tracking-wide pt-1">
                      {dish.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#1C1814] text-xs text-[#615B52]">
                    <div className="flex items-center space-x-2">
                      {dish.isPopular && (
                        <span className="px-2.5 py-0.5 rounded bg-[#C9A15A]/10 border border-[#C9A15A]/30 text-[#C9A15A] text-[10px] font-mono uppercase tracking-widest">
                          Especialidad
                        </span>
                      )}
                      {dish.isVegetarian && (
                        <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase tracking-widest">
                          Vegetariano
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[#C9A15A]/70 text-[11px]">[confirmar precio]</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Menu Card Navigation (Spacious Editorial Layout inspired by La Balmesina) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#141210] border border-[#2B2621] flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C9A15A]">Lunes a Viernes</span>
              <h4 className="text-xl font-serif text-[#F5F1E8] font-light mt-1">Menú del Mediodía</h4>
              <p className="text-sm text-[#A69F91] font-sans leading-relaxed mt-2">
                Pizza o pasta artesanal + bebida + postre casero de 13:00 a 16:00.
              </p>
            </div>
            <span className="px-4 py-2 rounded-full bg-[#1C1814] border border-[#C9A15A]/30 text-[#C9A15A] text-xs font-mono w-fit">
              Consultar plato del día
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-[#141210] border border-[#2B2621] flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C9A15A]">Servicio en Casa</span>
              <h4 className="text-xl font-serif text-[#F5F1E8] font-light mt-1">Para Llevar / Take Away</h4>
              <p className="text-sm text-[#A69F91] font-sans leading-relaxed mt-2">
                Encarga tu pizza recién horneada y recógela lista para disfrutar.
              </p>
            </div>
            <a
              href="tel:+34936693534"
              className="text-xs font-sans uppercase font-bold text-[#C9A15A] hover:underline flex items-center space-x-2"
            >
              <span>Pedir por teléfono (+34 936 69 35 34)</span>
            </a>
          </div>

          <div className="p-8 rounded-2xl bg-[#141210] border border-[#2B2621] flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C9A15A]">Dietas Especiales</span>
              <h4 className="text-xl font-serif text-[#F5F1E8] font-light mt-1">Opciones Sin Gluten & Veganas</h4>
              <p className="text-sm text-[#A69F91] font-sans leading-relaxed mt-2">
                Adaptamos varios platos de la carta a tus necesidades alimentarias.
              </p>
            </div>
            <span className="text-xs font-mono text-[#A69F91]">Consulta con nuestro equipo al pedir</span>
          </div>
        </div>

      </div>
    </section>
  );
}
