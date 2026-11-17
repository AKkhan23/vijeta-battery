type Props = {
  name: string;
  className?: string;
};

/**
 * A matched family of pictograms drawn on one 32px grid with a single stroke
 * weight. Straight geometry, one diagonal where the subject needs it — no
 * decorative interior lines.
 */
export function CategoryIcon({ name, className = "h-10 w-10" }: Props) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      {name === "car" && (
        <g {...common}>
          <path d="M3.5 22.5v-3.1c0-1.1.9-2 2-2h2.7l3.9-6c.3-.5 1-.9 1.7-.9h6.4c.7 0 1.4.4 1.7.9l3.9 6h2.7c1.1 0 2 .9 2 2v3.1" />
          <path d="M8.6 17.4h14.8" />
          <circle cx="9.5" cy="22.5" r="3.2" />
          <circle cx="22.5" cy="22.5" r="3.2" />
        </g>
      )}

      {name === "tractor" && (
        <g {...common}>
          <path d="M3.5 19.8V15.4h8" />
          <path d="M11.5 19.8V15.4h-8" />
          <path d="M11.5 15.4V9.6h9.5v4.6" />
          <circle cx="22.2" cy="19.6" r="5.4" />
          <circle cx="7.6" cy="22.2" r="2.8" />
        </g>
      )}

      {name === "rickshaw" && (
        <g {...common}>
          <path d="M3.5 21v-4.2c0-.5.1-.9.4-1.3l5.6-7.6c.4-.5.9-.8 1.6-.8h12.4c1.1 0 2 .9 2 2V21" />
          <path d="M3.5 21h25" />
          <circle cx="8.8" cy="21.4" r="2.9" />
          <circle cx="22.4" cy="21.4" r="3.1" />
        </g>
      )}

      {name === "truck" && (
        <g {...common}>
          <path d="M3.5 21.5V8.5h15.5v13" />
          <path d="M19 13.5h4.6l4.4 5.4v2.6h-9" />
          <path d="M21.2 14.2h2.4l2.4 3.1h-4.8z" />
          <circle cx="9" cy="21.5" r="3.3" />
          <circle cx="24" cy="21.5" r="3.3" />
        </g>
      )}

      {name === "industry" && (
        <g {...common}>
          <path d="M3.5 24.5V15.4l6.6 3.3v-3.3l6.6 3.3v-3.3l6.6 3.3v5.8" />
          <path d="M3.5 24.5h25" />
          <path d="M13.4 24.5V20h5.2v4.5" />
        </g>
      )}

      {name === "charger" && (
        <g {...common}>
          <rect x="8.5" y="7.5" width="15" height="17" rx="3" />
          <path d="M13 7.5V3.5M19 7.5V3.5" />
          <path d="m16.6 11.6-2.8 5h2.4l-.8 4.2 3.9-5.7h-2.4l.7-3.5Z" />
        </g>
      )}
    </svg>
  );
}
