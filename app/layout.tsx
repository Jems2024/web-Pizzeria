import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Il Massone | Pizzería Italiana Artesanal en el Eixample, Barcelona',
  description:
    'Auténtica pizzería & trattoria italiana en Barcelona (Carrer de Mallorca 235). Masa de 72h, horno de piedra, ambiente familiar y trato cálido de Pina. Reservas por WhatsApp.',
  keywords: [
    'pizzería italiana Barcelona',
    'pizza artesanal Eixample',
    'restaurante italiano cerca Passeig de Gràcia',
    'pizzería Provença Barcelona',
    'Il Massone Barcelona',
    'pizza napolitana horno de piedra',
    'trattoria familiar Barcelona',
    'menú mediodía Eixample',
  ],
  authors: [{ name: 'Il Massone Ristorante & Pizzeria' }],
  creator: 'Il Massone',
  publisher: 'Il Massone',
  metadataBase: new URL('https://ilmassone.es'),
  openGraph: {
    title: 'Il Massone | Pizzería Italiana Artesanal en el Eixample, Barcelona',
    description:
      'El secreto mejor guardado del Eixample: masa madre de 72h, horno de piedra volcánica y ambiente acogedor de velas con Pina. ¡Haz tu reserva!',
    url: 'https://ilmassone.es',
    siteName: 'Il Massone Ristorante & Pizzeria',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Pizza napolitana artesanal recién horneada en horno de piedra en Il Massone Barcelona',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Il Massone | Pizzería Italiana Artesanal en Barcelona',
    description:
      'Masa artesanal 72h, horno de piedra y trattoria familiar en Carrer de Mallorca 235, Eixample.',
    images: ['https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${plusJakartaSans.variable} h-full antialiased dark`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#0E0C0A] text-[#F5F1E8] selection:bg-[#C9A15A] selection:text-[#0E0C0A]">
        <SmoothScroll>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
