"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { restaurant, DAY_ORDER } from "@/lib/data/restaurant";
import { useT } from "@/lib/i18n/dict";
import { TilePattern } from "./MexicanPattern";
import OpenStatus from "./OpenStatus";
import Reveal from "./Reveal";

function formatHour(min: number): string {
  const h = Math.floor(min / 60);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12} ${period}`;
}

export default function VisitSection({
  as: Heading = "h2",
}: {
  /** Use "h1" when this section is the page's primary heading (e.g. /visit) */
  as?: "h1" | "h2";
}) {
  const t = useT();
  return (
    <section
      id="visit"
      className="background-clay grain relative overflow-hidden py-20 text-cream sm:py-28"
    >
      <TilePattern color="var(--color-cream)" opacity={0.07} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="section-kicker text-cream/75">{t.visit.eyebrow}</p>
            <Heading className="editorial-heading font-display mt-5 text-h2 font-semibold">
              {t.visit.title}
            </Heading>
            <p className="mt-4 text-cream/80">{t.visit.desc}</p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal direction="right">
            <div className="rounded-3xl bg-cream p-7 text-ink shadow-2xl sm:p-9">
              <OpenStatus className="mb-6 rounded-full bg-blush px-4 py-2 text-sm" />

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" />
                  <div>
                    <p className="eyebrow text-ink/50">{t.visit.address}</p>
                    <p className="font-display text-lg font-semibold">
                      {restaurant.address.street}
                    </p>
                    <p className="text-ink/70">
                      {restaurant.address.city}, {restaurant.address.state}{" "}
                      {restaurant.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" />
                  <div>
                    <p className="eyebrow text-ink/50">{t.visit.phone}</p>
                    <a
                      href={`tel:${restaurant.phone.tel}`}
                      className="font-display text-lg font-semibold hover:text-terracotta"
                    >
                      {restaurant.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" />
                  <div className="w-full">
                    <p className="eyebrow text-ink/50">{t.visit.hours}</p>
                    <ul className="mt-1 space-y-1 text-sm">
                      {DAY_ORDER.map((d) => {
                        const h = restaurant.hours[d];
                        return (
                          <li
                            key={d}
                            className="flex justify-between gap-4 border-b border-terracotta/10 py-1 last:border-0"
                          >
                            <span className="text-ink/70">{t.days[d]}</span>
                            <span className="font-semibold">
                              {h.open === null || h.close === null ? (
                                <span className="text-terracotta">{t.visit.closed}</span>
                              ) : (
                                `${formatHour(h.open)} – ${formatHour(h.close)}`
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <p className="mt-2 text-xs text-ink/50">{t.visit.menudoNote}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1"
                >
                  <MapPin className="h-4 w-4" /> {t.visit.openInMaps}
                </a>
                <a href={`tel:${restaurant.phone.tel}`} className="btn btn-dark flex-1">
                  <Phone className="h-4 w-4" /> {t.visit.callNow}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="h-full min-h-[340px] overflow-hidden rounded-3xl border-4 border-cream/20 shadow-2xl">
              <iframe
                title={`${t.visit.mapTitle} ${restaurant.name}`}
                src={restaurant.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[340px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
