export default function JsonLd() {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Il Massone Ristorante & Pizzeria',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1200&auto=format&fit=crop',
    '@id': 'https://web-pizzeria-self.vercel.app',
    url: 'https://web-pizzeria-self.vercel.app',
    telephone: '+34 936 69 35 34',
    priceRange: '€€',
    servesCuisine: 'Italian',
    acceptsReservations: true,
    paymentAccepted: 'Cash, Bizum',
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer de Mallorca 235',
      addressLocality: 'Barcelona',
      addressRegion: 'Cataluña',
      postalCode: '08008',
      addressCountry: 'España',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.3892099951888,
      longitude: 2.1558988766155624,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '13:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '19:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '13:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '19:00',
        closes: '23:30',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '350',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Se puede pagar con tarjeta bancaria?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En Il Massone aceptamos únicamente pago en efectivo y Bizum. Recomendamos llevar algo de efectivo o disponer de Bizum configurado en tu móvil para evitar inconvenientes al momento de abonar la cuenta.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Hace falta reservar mesa antes de ir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, recomendamos reservar los fines de semana por WhatsApp o llamada, especialmente para grupos de 4 o más personas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Ofrecen menú del mediodía?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, de lunes a viernes de 13:00 a 16:00, pizza o pasta + bebida + postre casero.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Tienen opciones vegetarianas y veganas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, adaptamos varios platos de la carta, consúltalo al pedir.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Dónde está exactamente el restaurante y cómo llegar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En Carrer de Mallorca, 235, Eixample, a pocos pasos de Passeig de Gràcia y la estación FGC Provença — bajas unas escaleras y ahí está la entrada.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
