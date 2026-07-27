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

// TODO: cambiar metadataBase a https://ilmassone.es cuando el dominio esté conectado
export const metadata: Metadata = {
  title: 'Il Massone | Pizzería Italiana en Barcelona',
  description:
    'Pizzería italiana en el Eixample de Barcelona. Masa artesanal de 72h, horno de piedra y recetas tradicionales. Reservas WhatsApp: +34 936 69 35 34.',
  keywords: [
    'pizzería italiana Barcelona',
    'pizza artesanal Eixample',
    'restaurante italiano Barcelona',
    'pizzería Provença',
    'Il Massone Barcelona',
    'pizza napolitana horno piedra',
    'trattoria familiar Barcelona',
  ],
  // TODO: cambiar metadataBase a https://ilmassone.es cuando el dominio esté conectado
  metadataBase: new URL('https://web-pizzeria-self.vercel.app'),
  alternates: {
    canonical: 'https://web-pizzeria-self.vercel.app',
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  authors: [{ name: 'Il Massone Ristorante & Pizzeria' }],
  creator: 'Il Massone',
  publisher: 'Il Massone',
  openGraph: {
    title: 'Il Massone | Pizzería Italiana en Barcelona',
    description:
      'Pizzería italiana en el Eixample de Barcelona. Masa artesanal de 72h, horno de piedra y recetas tradicionales.',
    url: 'https://web-pizzeria-self.vercel.app',
    siteName: 'Il Massone Ristorante & Pizzeria',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1200&auto=format&fit=crop',
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
    title: 'Il Massone | Pizzería Italiana en Barcelona',
    description:
      'Pizzería italiana en el Eixample de Barcelona. Masa artesanal de 72h y horno de piedra.',
    images: ['https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1200&auto=format&fit=crop'],
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
        <link rel="apple-touch-icon" href="/logo.jpg" />
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
