import type { PowerVisualKind } from "@/lib/homePower";

type Props = {
  kind: PowerVisualKind;
  uid?: string;
  className?: string;
  title?: string;
};

/** Vijeta-palette product illustration. Swap for photography via series.image. */
export function PowerVisual({ kind, uid = kind, className = "", title }: Props) {
  const body = `pv-body-${uid}`;
  const dark = `pv-dark-${uid}`;
  const blue = `pv-blue-${uid}`;
  const floor = `pv-floor-${uid}`;

  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={body} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#f3f6ff" />
          <stop offset="1" stopColor="#d5dff8" />
        </linearGradient>
        <linearGradient id={dark} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#121828" />
          <stop offset="1" stopColor="#080b14" />
        </linearGradient>
        <linearGradient id={blue} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3d6bff" />
          <stop offset="1" stopColor="#1436c8" />
        </linearGradient>
        <radialGradient id={floor} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#1436c8" stopOpacity="0.22" />
          <stop offset="1" stopColor="#1436c8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="240" cy="322" rx="166" ry="18" fill={`url(#${floor})`} />

      {kind === "inverter" && (
        <g>
          <rect x="68" y="92" width="344" height="204" rx="16" fill="#0a1f86" opacity="0.08" transform="translate(0 8)" />
          <rect x="68" y="92" width="344" height="200" rx="16" fill={`url(#${body})`} stroke="#1436c8" strokeOpacity="0.28" />
          <rect x="68" y="92" width="10" height="200" rx="5" fill={`url(#${blue})`} />
          <rect x="104" y="124" width="132" height="76" rx="8" fill={`url(#${dark})`} />
          <path d="M116 162c9-22 19-22 28 0s19 22 28 0 19-22 28 0 19 22 28 0" fill="none" stroke="#7ea5ff" strokeWidth="2.6" strokeLinecap="round" />
          <text x="116" y="143" fill="#9fb8f7" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="2">OUTPUT · SINE</text>
          <circle cx="268" cy="132" r="5" fill="#3d6bff" />
          <circle cx="288" cy="132" r="5" fill="#b0853f" opacity="0.75" />
          <circle cx="308" cy="132" r="5" fill="#9aa2b6" opacity="0.6" />
          {[0, 1, 2, 3, 4].map((row) => (
            <g key={row}>
              <rect x="266" y={156 + row * 14} width="118" height="4" rx="2" fill="#1436c8" opacity="0.18" />
              <rect x="266" y={156 + row * 14} width={44 + (row % 3) * 24} height="4" rx="2" fill="#1436c8" opacity="0.1" />
            </g>
          ))}
          <text x="104" y="254" fill="#1436c8" fontFamily="Arial, sans-serif" fontSize="21" fontWeight="700" letterSpacing="3">VIJETA</text>
          <text x="392" y="254" fill="#9aa2b6" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="1.5" textAnchor="end">HOME UPS</text>
          <rect x="328" y="216" width="32" height="18" rx="3" fill={`url(#${blue})`} opacity="0.85" />
        </g>
      )}

      {kind === "battery" && (
        <g>
          <rect x="138" y="74" width="204" height="245" rx="16" fill="#0a1f86" opacity="0.08" transform="translate(0 8)" />
          <rect x="176" y="44" width="18" height="26" rx="4" fill="#1436c8" />
          <rect x="286" y="44" width="18" height="26" rx="4" fill="#b0853f" />
          <path d="M212 58c0-18 14-28 28-28s28 10 28 28" fill="none" stroke="#121828" strokeWidth="7" strokeLinecap="round" />
          <rect x="150" y="62" width="180" height="26" rx="7" fill={`url(#${blue})`} />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={159 + i * 33} y="68" width="22" height="12" rx="3" fill="#ffffff" opacity="0.28" />
          ))}
          <rect x="138" y="84" width="204" height="235" rx="16" fill={`url(#${body})`} stroke="#1436c8" strokeOpacity="0.28" />
          <rect x="138" y="84" width="10" height="235" rx="5" fill={`url(#${blue})`} />
          <rect x="168" y="112" width="144" height="52" rx="6" fill="#ffffff" stroke="#1436c8" strokeOpacity="0.14" />
          <text x="240" y="145" fill="#1436c8" fontFamily="Arial, sans-serif" fontSize="19" fontWeight="700" letterSpacing="2.5" textAnchor="middle">VIJETA</text>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={166} y={184 + i * 18} width="148" height="5" rx="2.5" fill="#1436c8" opacity={i % 2 ? 0.1 : 0.17} />
          ))}
          <text x="240" y="302" fill="#9aa2b6" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="2" textAnchor="middle">TUBULAR · DEEP CYCLE</text>
        </g>
      )}

      {kind === "lithium" && (
        <g>
          <rect x="156" y="58" width="168" height="258" rx="14" fill="#0a1f86" opacity="0.08" transform="translate(0 8)" />
          <rect x="156" y="58" width="168" height="258" rx="14" fill={`url(#${body})`} stroke="#1436c8" strokeOpacity="0.3" />
          <rect x="156" y="58" width="168" height="46" rx="14" fill={`url(#${dark})`} />
          <rect x="156" y="88" width="168" height="16" fill="#080b14" />
          <circle cx="180" cy="81" r="4" fill="#3d6bff" />
          <text x="194" y="85" fill="#c8d6ff" fontFamily="Arial, sans-serif" fontSize="10" letterSpacing="2">SMART BMS</text>
          <rect x="180" y="128" width="120" height="54" rx="7" fill="#ffffff" stroke="#1436c8" strokeOpacity="0.14" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={190 + i * 27} y={166 - (i + 1) * 8} width="19" height={(i + 1) * 8} rx="2" fill="#3d6bff" opacity={0.55 + i * 0.1} />
          ))}
          <text x="190" y="147" fill="#1436c8" fontFamily="Arial, sans-serif" fontSize="10" letterSpacing="1.5">STATE OF CHARGE</text>
          <text x="240" y="220" fill="#1436c8" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" letterSpacing="2.5" textAnchor="middle">VIJETA</text>
          <text x="240" y="240" fill="#9aa2b6" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="2" textAnchor="middle">LiFePO₄ · 12.8 – 51.2 V</text>
          <rect x="180" y="262" width="120" height="3" rx="1.5" fill="#1436c8" opacity="0.16" />
          <rect x="180" y="272" width="82" height="3" rx="1.5" fill="#1436c8" opacity="0.1" />
          <rect x="180" y="282" width="104" height="3" rx="1.5" fill="#1436c8" opacity="0.07" />
        </g>
      )}

      {kind === "combo" && (
        <g>
          <rect x="70" y="120" width="198" height="166" rx="13" fill="#0a1f86" opacity="0.08" transform="translate(0 6)" />
          <rect x="70" y="120" width="198" height="162" rx="13" fill={`url(#${body})`} stroke="#1436c8" strokeOpacity="0.28" />
          <rect x="70" y="120" width="8" height="162" rx="4" fill={`url(#${blue})`} />
          <rect x="94" y="144" width="84" height="48" rx="6" fill={`url(#${dark})`} />
          <path d="M102 169c6-14 12-14 18 0s12 14 18 0 12-14 18 0" fill="none" stroke="#7ea5ff" strokeWidth="2" strokeLinecap="round" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x="194" y={148 + i * 16} width="56" height="4" rx="2" fill="#1436c8" opacity="0.18" />
          ))}
          <text x="94" y="258" fill="#1436c8" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" letterSpacing="2">VIJETA</text>

          <rect x="276" y="82" width="132" height="200" rx="12" fill="#0a1f86" opacity="0.08" transform="translate(0 6)" />
          <rect x="286" y="62" width="12" height="20" rx="3" fill="#b0853f" />
          <rect x="366" y="62" width="12" height="20" rx="3" fill="#1436c8" />
          <rect x="276" y="82" width="132" height="200" rx="12" fill={`url(#${body})`} stroke="#1436c8" strokeOpacity="0.28" />
          <rect x="276" y="82" width="8" height="200" rx="4" fill={`url(#${blue})`} />
          <rect x="298" y="106" width="88" height="40" rx="6" fill="#ffffff" stroke="#1436c8" strokeOpacity="0.14" />
          <text x="342" y="131" fill="#1436c8" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" letterSpacing="1.6" textAnchor="middle">VIJETA</text>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="298" y={166 + i * 18} width="88" height="5" rx="2.5" fill="#1436c8" opacity={i % 2 ? 0.1 : 0.17} />
          ))}
          <text x="342" y="258" fill="#9aa2b6" fontFamily="Arial, sans-serif" fontSize="8" letterSpacing="1.4" textAnchor="middle">LITHIUM PACK</text>
        </g>
      )}
    </svg>
  );
}
