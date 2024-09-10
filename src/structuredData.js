const structuredData = {
    "@context": "https://schema.org",
    "@type": "Yoga Sud Etampes",
    "name": "Yoga Arc-en-Ciel",
    "description": "Découvrez notre approche du Hatha-Yoga près d'Etampes, adaptée aux occidentaux et revisitée par la Méthode DE GASQUET®. Une pratique douce, progressive et respectueuse du corps.",
    "url": "https://www.yoga-arcenciel-etampes.fr/",
    "telephone": "+33 6 85 47 57 64", 
    "email": "yoga_arc-en-ciel@orange.fr", 
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chalou-Moulineux",
      "postalCode": "91740",
      "addressCountry": "FR"
    },
    "openingHours": [
      "Tu 09:30-11:30",
      "Tu 18:30-20:30",
      "We 17:30-19:30",
      "Th 09:30-11:30"
    ],
    "priceRange": "20€ - 450€",
    "offers": [
      {
        "@type": "Offer",
        "name": "Forfait annuel",
        "price": "450.00",
        "priceCurrency": "EUR",
        "description": "Pour une séance hebdomadaire de 2H00"
      },
      {
        "@type": "Offer",
        "name": "Séance supplémentaire",
        "price": "20.00",
        "priceCurrency": "EUR",
        "description": "Dans le cadre d'un forfait annuel"
      },
      {
        "@type": "Offer",
        "name": "Séance hors forfait",
        "price": "20.00",
        "priceCurrency": "EUR"
      }
    ]
  };

export default structuredData;