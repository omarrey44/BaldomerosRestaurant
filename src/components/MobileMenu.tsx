"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/lib/data/navigation";
import { restaurant } from "@/lib/data/restaurant";
import { EASE } from "@/lib/motion";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT, navLabels } from "@/lib/i18n/dict";
import Logo from "./Logo";
import OpenStatus from "./OpenStatus";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lang, toggle } = useLang(); const t = useT(); const pathname = usePathname();
  useEffect(() => { if (!open) return; const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose(); document.addEventListener("keydown", onKey); document.body.style.overflow = "hidden"; return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; }; }, [open, onClose]);
  return <AnimatePresence>{open && <motion.div className="fixed inset-0 z-[70] lg:hidden" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} role="dialog" aria-modal="true" aria-label="Menú de navegación">
    <button className="absolute inset-0 bg-charcoal/72 backdrop-blur-sm" onClick={onClose} aria-label="Cerrar" />
    <motion.div className="background-ember absolute right-0 top-0 flex h-full w-[90%] max-w-md flex-col overflow-hidden border-l border-cream/10 text-cream" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:.38,ease:EASE}}>
      <div className="flex items-center justify-between border-b border-cream/10 px-6 py-5"><div className="flex items-center gap-3"><Logo variant="mark" size={44}/><span className="font-display text-xl">Baldomeros <i className="text-orange">#2</i></span></div><button onClick={onClose} aria-label="Cerrar menú" className="border border-cream/20 p-2.5 hover:bg-cream hover:text-ink"><X className="h-5 w-5"/></button></div>
      <nav className="flex-1 px-6 py-7">{navLinks.map((link,i)=>{const active=link.href==="/"?pathname==="/":link.href.includes("#")?pathname==="/":pathname.startsWith(link.href);return <motion.div key={link.href} initial={{opacity:0,x:25}} animate={{opacity:1,x:0}} transition={{delay:.06+i*.045}}><Link href={link.href} onClick={onClose} className={`flex items-baseline justify-between border-b border-cream/10 py-3 font-display text-[1.7rem] ${active?"text-orange":"text-cream/85"}`}><span>{navLabels[link.key][lang]}</span><small className="font-sans text-[.6rem] tracking-[.18em] text-cream/25">0{i+1}</small></Link></motion.div>})}</nav>
      <div className="border-t border-cream/10 p-6"><div className="mb-4 flex items-center justify-between"><OpenStatus className="text-sm text-cream/75"/><button onClick={toggle} className="text-xs font-bold tracking-widest text-orange">{lang==="en"?"ESPAÑOL":"ENGLISH"}</button></div><div className="grid grid-cols-2 gap-2"><a href={`tel:${restaurant.phone.tel}`} className="btn btn-ghost !rounded-none"><Phone className="h-4 w-4"/>{t.mobileBar.call}</a><a href={restaurant.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !rounded-none"><MapPin className="h-4 w-4"/>{t.mobileBar.directions}</a></div></div>
    </motion.div>
  </motion.div>}</AnimatePresence>;
}
