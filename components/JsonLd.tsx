export default function JsonLd() {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Il Massone Ristorante & Pizzeria',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',
    '@id': 'https://ilmassone.es',
    url: 'https://ilmassone.es',
    telephone: '+34936693534',
    priceRange: '€€',
    servesCuisine: ['Italian', 'Pizza', 'Pasta', 'Mediterranean'],
    acceptsReservations: 'True',
    paymentAccepted: 'Cash, Bizum',
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer de Mallorca, 235',
      addressLocality: 'Barcelona',
      addressRegion: 'Cataluña',
      postalCode: '08008',
      addressCountry: 'ES',
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
        name: '¿Se puede pagar con tarjeta bancaria en Il Massone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En Il Massone aceptamos únicamente pago en efectivo y Bizum. Recomendamos llevar efectivo o disponer de Bizum configurado.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Hace falta reservar mesa antes de ir a Il Massone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No es obligatorio, pero sí muy recomendable especialmente para las cenas de viernes y sábados. Se puede reservar escribiendo por WhatsApp o llamando al +34 936 69 35 34.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Tienen menú del mediodía en Il Massone Barcelona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, de lunes a viernes de 13:00 a 16:00 ofrecemos un menú del mediodía con pizza o pasta artesanal, bebida y postre casero.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Hay opciones vegetarianas en la pizzería Il Massone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, contamos con opciones vegetarianas como la Pizza Vegetariana, 4 Quesos, Margherita, Gnocchi 4 Quesos y Burrata fresca.',
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
