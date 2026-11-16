import Link from "next/link";

type Props = {
  light?: boolean;
  compact?: boolean;
  className?: string;
};

export function Logo({ light = false, compact = false, className = "" }: Props) {
  return (
    <Link
      href="/"
      aria-label="VIJETA Batteries — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="relative block h-10 w-9 shrink-0">
        <svg
          viewBox="0 0 40 44"
          fill="none"
          aria-hidden="true"
          className="h-full w-full"
        >
          <rect x="8" y="2" width="7" height="9" rx="1.5" fill={light ? "#FFFFFF" : "#1638C6"} />
          <rect x="25" y="2" width="7" height="9" rx="1.5" fill={light ? "#FFFFFF" : "#1638C6"} />
          <rect
            x="1.5"
            y="9.5"
            width="37"
            height="33"
            rx="4.5"
            fill={light ? "#FFFFFF" : "#1638C6"}
          />
          <path
            d="M23.4 15.5 13.2 27.1h6.1l-2.2 9.2 10.3-12.2h-6.2l2.2-8.6Z"
            fill={light ? "#1638C6" : "#FFFFFF"}
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-extrabold tracking-[-0.045em] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          VIJETA
        </span>
        {!compact && (
          <span
            className={`mt-1 font-mono text-[0.5rem] font-medium uppercase tracking-[0.3em] ${
              light ? "text-white/55" : "text-ink/50"
            }`}
          >
            Batteries · Est. 1988
          </span>
        )}
      </span>
    </Link>
  );
}
