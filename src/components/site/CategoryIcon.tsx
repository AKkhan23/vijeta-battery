type Props = {
  name: string;
  className?: string;
};

export function CategoryIcon({ name, className = "h-10 w-10" }: Props) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {name === "car" && (
        <g {...common}>
          <path d="M7 31v5h4m4 0h14m5 0h5v-5c0-2.1-1.6-3.8-3.7-3.8h-1.9L29 19.7H17.5L13 27.2H9.7C8.2 27.2 7 28.4 7 29.9V31Z" />
          <path d="M13 31.5h20M17.5 24h13" />
          <circle cx="16" cy="36" r="3.6" />
          <circle cx="34" cy="36" r="3.6" />
          <path d="M22 36h8" />
        </g>
      )}
      {name === "tractor" && (
        <g {...common}>
          <circle cx="33" cy="33" r="8" />
          <circle cx="13" cy="37" r="4" />
          <path d="M7 33h9l3.5-9H27l3.5 6H38M24 24v-8h4.5v5M20 26.5h10M33 33h2" />
          <path d="M18 41h7" />
        </g>
      )}
      {name === "rickshaw" && (
        <g {...common}>
          <path d="M7 27V18l7-7h20l7 7v9" />
          <path d="M7 27h34v6H7zM14 18h20M7 33h4m18 0h8" />
          <circle cx="16" cy="36" r="3.6" />
          <circle cx="32" cy="36" r="3.6" />
          <path d="M22 36h6" />
        </g>
      )}
      {name === "truck" && (
        <g {...common}>
          <rect x="5" y="15" width="24" height="18" rx="1.2" />
          <path d="M29 22h7l5 6v5h-4M5 33h4m8 0h10m5 0h4" />
          <circle cx="15" cy="36" r="3.8" />
          <circle cx="33" cy="36" r="3.8" />
          <path d="M10 21h14M10 26h14" />
        </g>
      )}
      {name === "industry" && (
        <g {...common}>
          <path d="M6 41V21l9 4.5V21l9 4.5V14h7v27H6Z" />
          <path d="M33 14V7h4v7M10 35h5m4 0h5m4 0h6" />
          <path d="M38 41V24" />
        </g>
      )}
      {name === "charger" && (
        <g {...common}>
          <rect x="14" y="12" width="20" height="27" rx="3" />
          <path d="M19 12V6.5h3.5V12M25.5 12V6.5H29V12M24 39v3" />
          <path d="M25.6 19 20 27h4.2l-1.3 6 6.1-8h-4.2l.8-6Z" />
        </g>
      )}
    </svg>
  );
}
