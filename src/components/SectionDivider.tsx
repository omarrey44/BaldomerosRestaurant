// Divisores decorativos entre secciones. Cada uno tiene identidad propia.
// pointer-events:none, sin overflow horizontal, se reducen solos en móvil (viewBox escala).

type Variant = "plate" | "papel" | "jalisco" | "paperEdge" | "steam";

export default function SectionDivider({
  variant,
  className = "",
  flip = false,
  fill = "var(--color-cream)",
}: {
  variant: Variant;
  className?: string;
  flip?: boolean;
  fill?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative w-full leading-[0] ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      {variant === "plate" && (
        // Arco inspirado en el borde de un plato de barro
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="block h-[6vw] max-h-[90px] min-h-[42px] w-full"
        >
          <path
            d="M0,90 L0,44 C240,4 480,4 720,34 C960,64 1200,64 1440,26 L1440,90 Z"
            fill={fill}
          />
        </svg>
      )}

      {variant === "steam" && (
        // Ondas de vapor suaves
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-[5vw] max-h-[80px] min-h-[36px] w-full"
        >
          <path
            d="M0,80 L0,40 C180,70 360,10 540,40 C720,70 900,10 1080,40 C1260,70 1350,30 1440,44 L1440,80 Z"
            fill={fill}
          />
        </svg>
      )}

      {variant === "jalisco" && (
        // Silueta de montañas de Jalisco (línea de paisaje)
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-[7vw] max-h-[120px] min-h-[54px] w-full"
        >
          <path
            d="M0,120 L0,86 L180,40 L340,90 L520,28 L700,86 L900,44 L1120,96 L1300,52 L1440,84 L1440,120 Z"
            fill={fill}
          />
        </svg>
      )}

      {variant === "paperEdge" && (
        // Borde irregular de papel artesanal
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="block h-[3vw] max-h-[40px] min-h-[20px] w-full"
        >
          <path
            d="M0,40 L0,18 L60,22 L120,12 L200,20 L280,10 L360,22 L440,14 L520,24 L620,12 L720,22 L820,10 L920,22 L1020,14 L1120,24 L1220,12 L1320,22 L1400,14 L1440,20 L1440,40 Z"
            fill={fill}
          />
        </svg>
      )}

      {variant === "papel" && (
        // Papel picado abstracto y monocromático (banda calada)
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="xMidYMid slice"
          className="block h-[34px] w-full"
        >
          <g fill={fill}>
            {Array.from({ length: 24 }).map((_, i) => {
              const x = i * 60 + 30;
              return (
                <g key={i}>
                  <path d={`M${x - 22},0 L${x + 22},0 L${x},46 Z`} opacity="0.9" />
                  <circle cx={x} cy="18" r="6" fill="var(--color-cream)" />
                </g>
              );
            })}
          </g>
        </svg>
      )}
    </div>
  );
}
