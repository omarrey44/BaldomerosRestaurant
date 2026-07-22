// Vapor sutil sobre la comida. CSS puro, se detiene con prefers-reduced-motion.
export default function SmokeEffect({ className = "" }: { className?: string }) {
  const wisps = [
    { left: "22%", delay: "0s", dur: "6s", w: 26 },
    { left: "42%", delay: "1.4s", dur: "7s", w: 32 },
    { left: "60%", delay: "0.7s", dur: "6.5s", w: 24 },
    { left: "74%", delay: "2.1s", dur: "7.5s", w: 30 },
  ];
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {wisps.map((w, i) => (
        <span
          key={i}
          className="absolute bottom-[38%] block rounded-full bg-cream/50 blur-md"
          style={{
            left: w.left,
            width: w.w,
            height: w.w * 2.4,
            animation: `steam-rise ${w.dur} ease-in-out ${w.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
