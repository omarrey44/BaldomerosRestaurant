import Image from "next/image";
import { restaurant } from "@/lib/data/restaurant";

export default function Logo({
  size = 56,
  className = "",
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/brand/logo.webp"
      alt={`Logo de ${restaurant.name}`}
      width={size}
      height={size}
      priority={priority}
      className={`rounded-full ${className}`}
    />
  );
}
