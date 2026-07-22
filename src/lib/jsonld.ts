import { restaurant, DAY_ORDER, type DayKey } from "@/lib/data/restaurant";

// TODO: cambiar por el dominio final del sitio cuando se publique.
export const SITE_URL = "https://www.birrieriabaldomeros.com";

const SCHEMA_DAY: Record<DayKey, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

function hhmm(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}

export function restaurantJsonLd() {
  const openingHours = DAY_ORDER.filter(
    (d) => restaurant.hours[d].open !== null
  ).map((d) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: SCHEMA_DAY[d],
    opens: hhmm(restaurant.hours[d].open as number),
    closes: hhmm(restaurant.hours[d].close as number),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: restaurant.name,
    description:
      "Auténtica birria de chivo, menudo y especialidades mexicanas estilo Tlaquepaque en Los Ángeles.",
    servesCuisine: ["Mexican", "Birria"],
    priceRange: "$",
    url: SITE_URL,
    telephone: restaurant.phone.tel,
    email: restaurant.email,
    image: `${SITE_URL}/images/hero/birria-hero.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city,
      addressRegion: restaurant.address.state,
      postalCode: restaurant.address.zip,
      addressCountry: restaurant.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurant.geo.lat,
      longitude: restaurant.geo.lng,
    },
    openingHoursSpecification: openingHours,
    hasMenu: `${SITE_URL}/menu`,
    sameAs: [restaurant.social.facebook, restaurant.social.yelp],
    // Nota: no se incluye aggregateRating porque no se ha verificado.
  };
}
