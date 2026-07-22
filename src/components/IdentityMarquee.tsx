// Marquesina de identidad. Movimiento lento; se detiene con reduced-motion (globals.css).
const words = [
  "Birria de Chivo",
  "Receta Tradicional",
  "Estilo Tlaquepaque",
  "Desde 1970",
  "Los Ángeles",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display px-6 text-2xl font-medium text-cream/90 sm:text-4xl">
            {w}
          </span>
          <span className="text-xl text-orange sm:text-3xl" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function IdentityMarquee() {
  return (
    <div className="grain relative overflow-hidden border-y border-cream/10 bg-terracotta py-5">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
      {/* Fades laterales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-terracotta to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-terracotta to-transparent" />
    </div>
  );
}
