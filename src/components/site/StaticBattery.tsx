type Props = {
  className?: string;
  variant?: "blue" | "gold" | "silver";
};

export function StaticBattery({ className = "", variant = "blue" }: Props) {
  const accent =
    variant === "gold" ? "#b08a4a" : variant === "silver" ? "#5d6985" : "#1638c6";
  const accentDeep =
    variant === "gold" ? "#8c6a32" : variant === "silver" ? "#3d485f" : "#0b2385";

  return (
    <svg
      viewBox="0 0 260 350"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <ellipse cx="130" cy="326" rx="92" ry="12" fill="#070b18" opacity="0.14" />

      {/* terminals */}
      <rect x="58" y="18" width="30" height="26" rx="4" fill="#cfd5e2" />
      <rect x="58" y="18" width="30" height="7" rx="3" fill="#e8ebf3" />
      <rect x="172" y="18" width="30" height="26" rx="4" fill={accentDeep} />
      <rect x="172" y="18" width="30" height="7" rx="3" fill={accent} />

      {/* cap band */}
      <rect x="40" y="36" width="180" height="40" rx="5" fill={accent} />
      <rect x="40" y="36" width="180" height="6" rx="3" fill="#ffffff" opacity="0.28" />
      {[86, 130, 174].map((x) => (
        <rect key={x} x={x - 13} y="48" width="26" height="12" rx="2" fill="#070b18" opacity="0.28" />
      ))}

      {/* body */}
      <rect x="42" y="68" width="176" height="244" rx="7" fill="#11182b" />
      <rect x="42" y="68" width="176" height="244" rx="7" stroke="#2a3350" strokeWidth="1.5" />
      <rect x="48" y="76" width="6" height="228" rx="3" fill="#2f5cff" opacity="0.4" />

      {/* label */}
      <rect x="60" y="92" width="140" height="188" rx="3" fill="#f5f6fb" />
      <rect x="60" y="92" width="140" height="38" fill={accent} />
      <path d="M76 100h7v5h7v-5h7v-5H76v5Z" fill="#fff" opacity="0" />
      <text
        x="74"
        y="117"
        fill="#ffffff"
        fontFamily="var(--font-archivo), Arial, sans-serif"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        VIJETA
      </text>
      <path d="M175 101h10l-5 8h6l-11 15 3-11h-5l4-7-2-5Z" fill="#ffffff" />
      <text
        x="74"
        y="148"
        fill="#0a0f1e"
        fontFamily="var(--font-mono), monospace"
        fontSize="8"
        letterSpacing="1.2"
      >
        LEAD-ACID · 12V
      </text>
      <text
        x="74"
        y="178"
        fill={accent}
        fontFamily="var(--font-archivo), Arial, sans-serif"
        fontSize="30"
        fontWeight="800"
      >
        HEAVY
      </text>
      <text
        x="74"
        y="203"
        fill={accent}
        fontFamily="var(--font-archivo), Arial, sans-serif"
        fontSize="30"
        fontWeight="800"
      >
        DUTY
      </text>
      <line x1="74" y1="218" x2="186" y2="218" stroke="#c9cede" strokeWidth="1" />
      {[232, 241, 250].map((y, i) => (
        <g key={y}>
          <rect x="74" y={y} width="58" height="3" rx="1.5" fill="#d6dae6" />
          <rect x="140" y={y} width="34" height="3" rx="1.5" fill="#e2e5ee" opacity={0.9 - i * 0.1} />
        </g>
      ))}
      <rect x="74" y="262" width="46" height="4" fill="#070b18" />
      <rect x="126" y="262" width="3" height="4" fill="#070b18" />
      <rect x="134" y="262" width="6" height="4" fill="#070b18" />
      <rect x="145" y="262" width="2" height="4" fill="#070b18" />
      <rect x="152" y="262" width="8" height="4" fill="#070b18" />

      {/* base */}
      <rect x="38" y="305" width="184" height="14" rx="4" fill="#0a0f1e" />
      <rect x="38" y="305" width="184" height="4" rx="2" fill="#36405e" opacity="0.7" />
    </svg>
  );
}
