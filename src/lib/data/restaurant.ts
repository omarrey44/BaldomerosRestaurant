// ============================================================
// Datos centrales del negocio — EDITABLE
// Fuente: sitio actual birrieriabaldomero2.com + Google/Yelp (Jul 2026)
// No inventar datos. Lo no verificado se marca con TODO.
// ============================================================

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export interface DayHours {
  /** Minutos desde medianoche. null = cerrado ese día */
  open: number | null;
  close: number | null;
}

export const restaurant = {
  name: "Birriería Baldomeros #2",
  legalName: "Birrieria Baldomeros No. 2",
  tagline: "Tlaquepaque-style birria in Los Angeles",

  // TODO: confirmar año de fundación con el propietario.
  // "Desde 1970" es una referencia narrativa provista por el cliente,
  // no verificada en fuentes públicas.
  foundedYear: 1970,

  phone: {
    display: "(323) 482-7355",
    tel: "+13234827355",
  },
  email: "birrieria.baldomero.2@gmail.com",

  address: {
    street: "3104 Maple Ave",
    city: "Los Angeles",
    state: "CA",
    zip: "90011",
    country: "US",
    full: "3104 Maple Ave, Los Angeles, CA 90011",
  },

  // Coordenadas aproximadas (para JSON-LD). El botón de mapa usa la dirección.
  // TODO: confirmar coordenadas exactas.
  geo: { lat: 34.0146, lng: -118.256 },

  timezone: "America/Los_Angeles",

  // Horario (24h en minutos). Fuente: Google. Menudo solo Sáb y Dom.
  hours: {
    mon: { open: 8 * 60, close: 16 * 60 },
    tue: { open: 8 * 60, close: 16 * 60 },
    wed: { open: null, close: null }, // Cerrado
    thu: { open: 8 * 60, close: 16 * 60 },
    fri: { open: 8 * 60, close: 16 * 60 },
    sat: { open: 6 * 60, close: 16 * 60 },
    sun: { open: 6 * 60, close: 16 * 60 },
  } as Record<DayKey, DayHours>,

  social: {
    facebook: "https://www.facebook.com/birrieriabaldomero2",
    yelp: "https://www.yelp.com/biz/birrieria-baldomeros-no-2-los-angeles",
    // TODO: confirmar Instagram u otras redes si existen.
  },

  get mapsUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${restaurant.name} ${restaurant.address.full}`
    )}`;
  },
  get mapsEmbedUrl() {
    return `https://maps.google.com/maps?q=${encodeURIComponent(
      restaurant.address.full
    )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  },
} as const;

export const DAY_LABELS: Record<DayKey, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

export const DAY_ORDER: DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
