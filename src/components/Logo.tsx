import Image from "next/image";
import { restaurant } from "@/lib/data/restaurant";

export default function Logo({
  size = 56,
  className = "",
  priority = false,
  variant = "full",
}: {
  size?: number;
  className?: string;
  priority?: boolean;
  variant?: "full" | "mark";
}) {
  if (variant === "mark") {
    return (
      <span className={`relative block shrink-0 overflow-hidden rounded-full bg-cream ring-1 ring-terracotta/25 ${className}`} style={{ width: size, height: size }}>
        <Image src="/images/brand/logo.webp" alt="" fill priority={priority} sizes={`${size}px`} className="scale-[1.7] object-cover object-top" aria-hidden="true" />
      </span>
    );
  }
  return (
    <Image
      src="/images/brand/logo.webp"
      alt={`Logo de ${restaurant.name}`}
      width={size}
      height={size}
      priority={priority}
      className={`rounded-full ring-1 ring-terracotta/20 ${className}`}
    />
  );
}
