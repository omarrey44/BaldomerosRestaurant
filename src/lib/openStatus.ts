import {
  restaurant,
  DAY_ORDER,
  DAY_LABELS,
  type DayKey,
} from "@/lib/data/restaurant";
import type { Lang } from "@/lib/i18n/LanguageProvider";

export interface OpenStatus {
  isOpen: boolean;
  label: string;
  detail: string;
}

const DAY_LABELS_ES: Record<DayKey, string> = {
  mon: "el lunes",
  tue: "el martes",
  wed: "el miércoles",
  thu: "el jueves",
  fri: "el viernes",
  sat: "el sábado",
  sun: "el domingo",
};

function fmtTime(minutes: number): string {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const period = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${period}`;
}

function getLocalParts(now: Date): { dayKey: DayKey; minutes: number } {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: restaurant.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const wd = get("weekday").toLowerCase();
  const map: Record<string, DayKey> = {
    mon: "mon",
    tue: "tue",
    wed: "wed",
    thu: "thu",
    fri: "fri",
    sat: "sat",
    sun: "sun",
  };
  const dayKey = map[wd.slice(0, 3)] ?? "mon";
  let hour = parseInt(get("hour"), 10);
  if (hour === 24) hour = 0;
  const minutes = hour * 60 + parseInt(get("minute"), 10);
  return { dayKey, minutes };
}

export function computeOpenStatus(now: Date, lang: Lang = "en"): OpenStatus {
  const { dayKey, minutes } = getLocalParts(now);
  const today = restaurant.hours[dayKey];
  const en = lang === "en";
  const openNow = en ? "Open now" : "Abierto ahora";
  const closedNow = en ? "Closed now" : "Cerrado ahora";

  if (today.open !== null && today.close !== null) {
    if (minutes < today.open) {
      return {
        isOpen: false,
        label: closedNow,
        detail: en
          ? `Opens today at ${fmtTime(today.open)}`
          : `Abre hoy a las ${fmtTime(today.open)}`,
      };
    }
    if (minutes < today.close) {
      return {
        isOpen: true,
        label: openNow,
        detail: en
          ? `Closes at ${fmtTime(today.close)}`
          : `Cierra a las ${fmtTime(today.close)}`,
      };
    }
  }

  const startIdx = DAY_ORDER.indexOf(dayKey);
  for (let i = 1; i <= 7; i++) {
    const key = DAY_ORDER[(startIdx + i) % 7];
    const h = restaurant.hours[key];
    if (h.open !== null) {
      const whenEn = i === 1 ? "tomorrow" : DAY_LABELS[key];
      const whenEs = i === 1 ? "mañana" : DAY_LABELS_ES[key];
      return {
        isOpen: false,
        label: closedNow,
        detail: en
          ? `Opens ${whenEn} at ${fmtTime(h.open)}`
          : `Abre ${whenEs} a las ${fmtTime(h.open)}`,
      };
    }
  }

  return { isOpen: false, label: closedNow, detail: "" };
}
