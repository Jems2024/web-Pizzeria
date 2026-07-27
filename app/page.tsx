import IntroAnimation from '@/components/IntroAnimation';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import CraftSection from '@/components/CraftSection';
import MenuSection from '@/components/MenuSection';
import GalleryMosaic from '@/components/GalleryMosaic';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0E0C0A] text-[#F5F1E8] overflow-hidden">
      {/* Intro SVG Animation (Plays on initial session load) */}
      <IntroAnimation />

      {/* Hero Section */}
      <Hero />

      {/* Nuestra Historia (Storytelling Block) */}
      <StorySection />

      {/* Proceso Artesanal (72h Masa, Horno de Piedra, Ingredientes) */}
      <CraftSection />

      {/* La Carta / Nuestros Platos (Interactive Dish Carousel & Tabs) */}
      <MenuSection />

      {/* Ambiente & Galería (Editorial Asymmetric Photo Grid) */}
      <GalleryMosaic />

      {/* Reseñas de Clientes (Google 4.5★ Reviews Carousel) */}
      <ReviewsSection />

      {/* Preguntas Frecuentes (FAQ Accordion with Schema Markup) */}
      <FAQSection />

      {/* Ubicación & Contacto (Map Embed, Address NAP, Schedule & Actions) */}
      <ContactSection />
    </main>
  );
}
