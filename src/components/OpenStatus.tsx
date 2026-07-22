"use client";

import { useEffect, useState } from "react";
import { computeOpenStatus, type OpenStatus as Status } from "@/lib/openStatus";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/dict";

/** Hook: computes status on the client to avoid hydration mismatches. */
function useOpenStatus(): Status | null {
  const { lang } = useLang();
  const [status, setStatus] = useState<Status | null>(null);
  useEffect(() => {
    const update = () => setStatus(computeOpenStatus(new Date(), lang));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [lang]);
  return status;
}

export default function OpenStatus({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "compact" | "dot";
  className?: string;
}) {
  const status = useOpenStatus();
  const t = useT();

  // Neutral placeholder while mounting (avoids flashing wrong content)
  if (!status) {
    return (
      <span
        className={`inline-flex items-center gap-2 ${className}`}
        aria-hidden="true"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-current opacity-30" />
        <span className="opacity-40">{t.status.checking}</span>
      </span>
    );
  }

  const dot = (
    <span className="relative flex h-2.5 w-2.5">
      {status.isOpen && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cilantro opacity-75" />
      )}
      <span
        className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
          status.isOpen ? "bg-cilantro" : "bg-terracotta"
        }`}
      />
    </span>
  );

  if (variant === "dot") return <span className={className}>{dot}</span>;

  if (variant === "compact") {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        {dot}
        <span className="font-semibold">{status.label}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 ${className}`}>
      {dot}
      <span className="font-semibold">{status.label}</span>
      {status.detail && (
        <span className="opacity-70">· {status.detail}</span>
      )}
    </span>
  );
}
