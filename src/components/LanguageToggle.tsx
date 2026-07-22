"use client";

import { Languages } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function LanguageToggle({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const { lang, toggle } = useLang();
  const next = lang === "en" ? "ES" : "EN";
  const label = lang === "en" ? "Cambiar a español" : "Switch to English";

  return (
    <button
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
        tone === "light"
          ? "border-cream/25 text-cream hover:bg-cream hover:text-ink"
          : "border-ink/20 text-ink hover:bg-ink hover:text-cream"
      } ${className}`}
    >
      <Languages className="h-3.5 w-3.5" aria-hidden="true" />
      {next}
    </button>
  );
}
