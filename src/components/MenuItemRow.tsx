"use client";

import type { MenuItem } from "@/lib/data/menu";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/dict";

export default function MenuItemRow({ item }: { item: MenuItem }) {
  const { lang } = useLang();
  const t = useT();
  const description =
    lang === "en" ? item.description : item.descriptionEs ?? item.description;

  return (
    <li className="border-b border-terracotta/12 py-5 sm:py-6">
      <div className="flex items-baseline gap-3">
        <h4 className="font-display text-xl font-semibold text-ink sm:text-[1.35rem]">
          {item.name}
        </h4>
        {item.weekendOnly && (
          <span className="eyebrow shrink-0 border border-cilantro/25 px-2 py-0.5 text-[0.52rem] text-cilantro">
            {t.status.weekend}
          </span>
        )}
        <span
          aria-hidden="true"
          className="mx-1 hidden flex-1 translate-y-[-3px] border-b border-dotted border-terracotta/40 sm:block"
        />
        <span className="ml-auto shrink-0 font-display font-bold text-terracotta sm:ml-0">
          {item.price ??
            (item.priceSmall && item.priceLarge
              ? `${item.priceSmall} · ${item.priceLarge}`
              : item.priceSmall ?? "")}
        </span>
      </div>

      {item.nameEn && (
        <p className="mt-0.5 text-xs uppercase tracking-wide text-ink/40">
          {item.nameEn}
        </p>
      )}
      {description && (
        <p className="mt-1 max-w-prose text-sm text-ink/65">{description}</p>
      )}
      {item.variations && (
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {item.variations.map((v) => (
            <li
              key={v}
              className="border-l border-terracotta/35 px-2.5 py-0.5 text-xs font-semibold text-terracotta"
            >
              {v}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
