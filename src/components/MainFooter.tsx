"use client";

import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { restaurant } from "@/lib/data/restaurant";
import { navLinks } from "@/lib/data/navigation";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT, navLabels } from "@/lib/i18n/dict";
import Logo from "./Logo";

// Íconos de marca (lucide-react ya no incluye logos de marca) — SVG simple
function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

// Ícono de Yelp (no está en lucide) — SVG simple
function YelpIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.3 2.4c1 .2 3.3 1 3.7 1.6.1.2.2.5.2.8-.1.4-4.2 6.9-4.2 6.9s-.6.9-1.2.6c-.6-.2-.5-1.3-.5-1.3s.2-7.6.3-8c.1-.4.4-.7.8-.8.4-.1 1 .1 1.1.2zM9.1 12.9c.5.4.1 1.1.1 1.1s-.4.6-3.7 4.9c-.2.3-.5.4-.8.4-.5 0-1.9-1.8-2.1-2.9-.1-.3 0-.6.1-.8.3-.5 5.2-2.6 5.2-2.6s.7-.3 1.2-.1zm-.2-2.4c-.1.5-1 .6-1 .6s-6.3-.5-6.7-.7c-.3-.1-.5-.4-.6-.8 0-.6.6-2.5 1.3-3.2.2-.2.5-.3.8-.2.5.1 5.5 3.4 5.5 3.4s.8.5.7 1zm4.6 5.2c.5-.2 1 .5 1 .5s3.6 5.3 3.7 5.7c.1.3 0 .6-.2.9-.4.5-2.3 1.1-3.2 1-.3 0-.6-.2-.7-.5-.2-.5-1-6.4-1-6.4s-.1-.9.6-1.2zm4.5-2.6c.3 0 6.1 1.7 6.4 1.9.3.2.4.5.4.8-.1.6-1.2 2.2-2 2.7-.3.2-.6.2-.9 0-.4-.2-4-5-4-5s-.6-.7-.2-1.2c.3-.5 1.2-.4 1.3-.4z" />
    </svg>
  );
}

export default function MainFooter() {
  const { lang } = useLang();
  const t = useT();
  const year = 2026; // fixed to avoid hydration mismatch; update as needed

  return (
    <footer
      id="site-footer"
      className="grain relative overflow-hidden bg-charcoal pb-24 pt-16 text-cream/80 md:pb-16"
    >
      {/* Línea decorativa inspirada en los cuernos del logo */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 flex justify-center overflow-hidden"
      >
        <svg viewBox="0 0 200 24" className="h-6 w-64 text-orange" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0 22 C40 22 60 4 100 4 C140 4 160 22 200 22" strokeLinecap="round" />
          <path d="M100 4 C90 12 84 18 70 20" strokeLinecap="round" opacity="0.6" />
          <path d="M100 4 C110 12 116 18 130 20" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <Logo size={56} className="ring-2 ring-orange/40" />
              <div>
                <p className="font-display text-xl font-semibold leading-tight text-cream">
                  Birriería Baldomeros #2
                </p>
                <p className="eyebrow text-orange">{t.footer.style}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-cream/60">{t.footer.blurb}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={restaurant.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Birriería Baldomeros"
                className="rounded-full border border-cream/20 p-2.5 text-cream transition-colors hover:bg-orange hover:text-charcoal"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={restaurant.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp de Birriería Baldomeros"
                className="rounded-full border border-cream/20 p-2.5 text-cream transition-colors hover:bg-orange hover:text-charcoal"
              >
                <YelpIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label={t.footer.navHeading}>
            <p className="eyebrow mb-4 text-cream/50">{t.footer.navHeading}</p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-orange">
                    {navLabels[l.key][lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-4 text-cream/50">{t.footer.findHeading}</p>
            <address className="space-y-3 text-sm not-italic">
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-colors hover:text-orange"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <span>
                  {restaurant.address.street}
                  <br />
                  {restaurant.address.city}, {restaurant.address.state}{" "}
                  {restaurant.address.zip}
                </span>
              </a>
              <a
                href={`tel:${restaurant.phone.tel}`}
                className="flex items-center gap-2.5 transition-colors hover:text-orange"
              >
                <Phone className="h-4 w-4 shrink-0 text-orange" />
                {restaurant.phone.display}
              </a>
            </address>
            <p className="mt-4 text-xs text-cream/50">
              {t.footer.hoursLine}
              <br />
              {t.footer.closedLine}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {restaurant.legalName}. {t.footer.rights}
          </p>
          <Link href="/privacy" className="transition-colors hover:text-orange">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
