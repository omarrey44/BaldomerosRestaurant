// Patrones decorativos sutiles (Talavera / azulejo / agave). pointer-events:none.
// Se usan como fondos con baja opacidad. SVG inline, sin imágenes pesadas.

export function TalaveraPattern({
  className = "",
  color = "var(--color-terracotta)",
  opacity = 0.06,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="talavera"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <g fill="none" stroke={color} strokeWidth="2">
            <circle cx="40" cy="40" r="14" />
            <path d="M40 6 L48 26 L40 40 L32 26 Z" fill={color} stroke="none" />
            <path d="M40 74 L48 54 L40 40 L32 54 Z" fill={color} stroke="none" />
            <path d="M6 40 L26 32 L40 40 L26 48 Z" fill={color} stroke="none" />
            <path d="M74 40 L54 32 L40 40 L54 48 Z" fill={color} stroke="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#talavera)" />
    </svg>
  );
}

export function TilePattern({
  className = "",
  color = "var(--color-cream)",
  opacity = 0.08,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
    >
      <defs>
        <pattern id="azulejo" width="64" height="64" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1.5">
            <rect x="0" y="0" width="64" height="64" />
            <path d="M0 32 Q32 0 64 32 Q32 64 0 32 Z" />
            <path d="M32 0 Q64 32 32 64 Q0 32 32 0 Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#azulejo)" />
    </svg>
  );
}

// Ilustración lineal de agave (detalle decorativo)
export function AgaveLine({
  className = "",
  color = "var(--color-cream)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={`pointer-events-none ${className}`}
      fill="none"
      stroke={color}
      strokeWidth="2.4"
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M100 190 C100 140 96 90 100 40" />
        <path d="M100 150 C70 130 50 96 44 60" />
        <path d="M100 150 C130 130 150 96 156 60" />
        <path d="M100 140 C82 118 74 86 74 52" />
        <path d="M100 140 C118 118 126 86 126 52" />
        <path d="M100 130 C60 120 34 100 22 78" />
        <path d="M100 130 C140 120 166 100 178 78" />
        <path d="M100 120 C100 90 100 60 100 24" />
      </g>
    </svg>
  );
}
