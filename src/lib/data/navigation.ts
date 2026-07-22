export interface NavLink {
  /** i18n key — see navLabels in @/lib/i18n/dict */
  key: string;
  href: string;
}

// Main navigation. Hash links (#) point to home-page sections.
export const navLinks: NavLink[] = [
  { key: "home", href: "/" },
  { key: "menu", href: "/menu" },
  { key: "story", href: "/#story" },
  { key: "gallery", href: "/gallery" },
  { key: "reviews", href: "/#reviews" },
  { key: "visit", href: "/visit" },
];
