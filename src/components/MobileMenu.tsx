"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/lib/data/navigation";
import { restaurant } from "@/lib/data/restaurant";
import { EASE } from "@/lib/motion";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT, navLabels } from "@/lib/i18n/dict";
import Logo from "./Logo";
import OpenStatus from "./OpenStatus";
import LanguageToggle from "./LanguageToggle";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = useT();

  // Cerrar con Escape + bloquear scroll de fondo
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            className="grain absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ink text-cream"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: EASE }}
          >
            <div className="flex items-center justify-between border-b border-cream/10 px-6 py-4">
              <Logo size={44} />
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <button
                  onClick={onClose}
                  aria-label={lang === "en" ? "Close menu" : "Cerrar menú"}
                  className="rounded-full border border-cream/20 p-2 text-cream transition-colors hover:bg-cream hover:text-ink"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-6 py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-display block py-3 text-3xl text-cream transition-colors hover:text-orange"
                  >
                    {navLabels[link.key][lang]}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="space-y-3 border-t border-cream/10 px-6 py-6">
              <OpenStatus className="text-sm text-cream/80" />
              <div className="flex gap-3">
                <a href={`tel:${restaurant.phone.tel}`} className="btn btn-ghost flex-1">
                  <Phone className="h-4 w-4" /> {t.mobileBar.call}
                </a>
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1"
                >
                  <MapPin className="h-4 w-4" /> {t.mobileBar.directions}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
