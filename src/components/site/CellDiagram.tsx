type Highlight = "terminals" | "plates" | "case" | "all";

type Props = {
  highlight: Highlight;
};

const dim = (active: boolean) => (active ? 1 : 0.5);

export function CellDiagram({ highlight }: Props) {
  const all = highlight === "all";
  const on = (key: Highlight) => all || highlight === key;

  return (
    <svg
      viewBox="0 0 420 520"
      fill="none"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="term" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2f5fb" />
          <stop offset="1" stopColor="#9da9c0" />
        </linearGradient>
        <linearGradient id="lid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3f6bff" />
          <stop offset="1" stopColor="#1433b8" />
        </linearGradient>
        <linearGradient id="plateA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6d8cff" />
          <stop offset="1" stopColor="#2a4de0" />
        </linearGradient>
        <linearGradient id="plateB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9aa6bd" />
          <stop offset="1" stopColor="#5d6a85" />
        </linearGradient>
        <linearGradient id="case" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1c2740" />
          <stop offset="1" stopColor="#0c1322" />
        </linearGradient>
      </defs>

      {/* alignment axis */}
      <line
        x1="195"
        y1="48"
        x2="195"
        y2="494"
        stroke="#ffffff"
        strokeOpacity="0.14"
        strokeDasharray="2 5"
      />

      {/* corner ticks */}
      {[
        [22, 34],
        [398, 34],
        [22, 498],
        [398, 498],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`} stroke="#ffffff" strokeOpacity="0.2">
          <line x1={x - 4} y1={y} x2={x + 4} y2={y} />
          <line x1={x} y1={y - 4} x2={x} y2={y + 4} />
        </g>
      ))}

      {/* TERMINALS */}
      <g
        opacity={dim(on("terminals"))}
        style={{
          transition: "opacity 500ms ease",
          filter: on("terminals")
            ? "drop-shadow(0 8px 20px rgba(47,92,255,0.45))"
            : "none",
        }}
      >
        <rect
          x="134"
          y="64"
          width="20"
          height="30"
          rx="3"
          fill="url(#term)"
          stroke="#c3ccdd"
        />
        <rect
          x="137"
          y="61"
          width="14"
          height="7"
          rx="2"
          fill="#eef2f9"
          stroke="#c3ccdd"
        />
        <rect
          x="226"
          y="64"
          width="20"
          height="30"
          rx="3"
          fill="url(#term)"
          stroke="#c3ccdd"
        />
        <rect
          x="229"
          y="61"
          width="14"
          height="7"
          rx="2"
          fill="#2f5cff"
          stroke="#8ba2ff"
        />
        <line
          x1="144"
          y1="96"
          x2="144"
          y2="108"
          stroke="#ffffff"
          strokeOpacity="0.3"
        />
        <line
          x1="236"
          y1="96"
          x2="236"
          y2="108"
          stroke="#ffffff"
          strokeOpacity="0.3"
        />
      </g>

      {/* LID */}
      <g opacity={dim(on("case"))} style={{ transition: "opacity 500ms ease" }}>
        <rect x="96" y="112" width="186" height="28" rx="4" fill="url(#lid)" />
        <rect
          x="96"
          y="112"
          width="186"
          height="5"
          rx="2.5"
          fill="#ffffff"
          fillOpacity="0.28"
        />
        {[134, 164, 194, 224, 254].map((x) => (
          <rect
            key={x}
            x={x}
            y="121"
            width="14"
            height="9"
            rx="1.5"
            fill="#050a16"
            fillOpacity="0.55"
          />
        ))}
        <line
          x1="112"
          y1="140"
          x2="266"
          y2="140"
          stroke="#ffffff"
          strokeOpacity="0.18"
          strokeDasharray="2 4"
        />
      </g>

      {/* PLATES */}
      <g
        opacity={dim(on("plates"))}
        style={{
          transition: "opacity 500ms ease",
          filter: on("plates")
            ? "drop-shadow(0 14px 24px rgba(47,92,255,0.4))"
            : "none",
        }}
      >
        <rect x="104" y="168" width="170" height="12" rx="2" fill="#2f5cff" />
        <rect
          x="104"
          y="168"
          width="170"
          height="3"
          rx="1.5"
          fill="#ffffff"
          fillOpacity="0.28"
        />
        {Array.from({ length: 7 }).map((_, i) => (
          <g key={i}>
            <rect
              x={110 + i * 23}
              y={182}
              width="15"
              height="152"
              rx="1"
              fill={i % 2 === 0 ? "url(#plateA)" : "url(#plateB)"}
            />
            <rect
              x={110 + i * 23}
              y={182}
              width="15"
              height="6"
              rx="1"
              fill="#050a16"
              fillOpacity="0.35"
            />
            <line
              x1={117.5 + i * 23}
              y1="192"
              x2={117.5 + i * 23}
              y2="328"
              stroke="#ffffff"
              strokeOpacity={i % 2 === 0 ? 0.22 : 0.32}
              strokeWidth="1"
            />
          </g>
        ))}
        <line
          x1="104"
          y1="340"
          x2="274"
          y2="340"
          stroke="#ffffff"
          strokeOpacity="0.16"
          strokeDasharray="2 4"
        />
      </g>

      {/* CASE */}
      <g opacity={dim(on("case"))} style={{ transition: "opacity 500ms ease" }}>
        <rect
          x="92"
          y="378"
          width="192"
          height="104"
          rx="6"
          fill="url(#case)"
          stroke="#566480"
          strokeWidth="1.5"
        />
        <rect x="102" y="392" width="172" height="14" rx="2" fill="#2b3852" />
        <rect
          x="102"
          y="392"
          width="172"
          height="4"
          rx="2"
          fill="#ffffff"
          fillOpacity="0.14"
        />
        {[412, 428, 444, 460].map((y) => (
          <line
            key={y}
            x1="110"
            y1={y}
            x2="266"
            y2={y}
            stroke="#ffffff"
            strokeOpacity="0.08"
          />
        ))}
        <rect
          x="88"
          y="482"
          width="200"
          height="10"
          rx="3"
          fill="#8e9bb5"
          fillOpacity="0.45"
        />
      </g>

      {/* callouts */}
      <g
        fontFamily="var(--font-manrope), sans-serif"
        fontSize="8"
        letterSpacing="1.4"
        fill="#b9c4dc"
        style={{ transition: "opacity 400ms ease" }}
      >
        <g opacity={on("terminals") ? 1 : 0.55}>
          <line
            x1="252"
            y1="76"
            x2="306"
            y2="76"
            stroke="#7183a5"
            strokeWidth="0.8"
          />
          <text x="312" y="79" fill={on("terminals") ? "#ffffff" : "#b9c4dc"}>
            TERMINALS
          </text>
        </g>
        <g opacity={on("case") ? 1 : 0.55}>
          <line
            x1="282"
            y1="124"
            x2="306"
            y2="124"
            stroke="#7183a5"
            strokeWidth="0.8"
          />
          <text x="312" y="127" fill={on("case") ? "#ffffff" : "#b9c4dc"}>
            LID / SEAL
          </text>
        </g>
        <g opacity={on("plates") ? 1 : 0.55}>
          <line
            x1="282"
            y1="250"
            x2="306"
            y2="250"
            stroke="#7183a5"
            strokeWidth="0.8"
          />
          <text x="312" y="253" fill={on("plates") ? "#ffffff" : "#b9c4dc"}>
            PLATES
          </text>
        </g>
        <g opacity={on("case") ? 1 : 0.55}>
          <line
            x1="292"
            y1="430"
            x2="310"
            y2="430"
            stroke="#7183a5"
            strokeWidth="0.8"
          />
          <text x="316" y="433" fill={on("case") ? "#ffffff" : "#b9c4dc"}>
            CASE
          </text>
        </g>
      </g>

      {/* dimension */}
      <g
        stroke="#ffffff"
        strokeOpacity="0.22"
        fontFamily="var(--font-manrope), sans-serif"
        fill="#8d9ab4"
        fontSize="7"
        letterSpacing="1"
      >
        <line x1="62" y1="112" x2="62" y2="482" />
        <line x1="58" y1="112" x2="66" y2="112" />
        <line x1="58" y1="482" x2="66" y2="482" />
        <text x="40" y="300" transform="rotate(-90 40 300)" textAnchor="middle">
          12V / 6 CELL
        </text>
      </g>

      {all && (
        <g transform="rotate(-11 312 352)">
          <circle
            cx="312"
            cy="352"
            r="36"
            stroke="#6d8cff"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            fill="#2f5cff"
            fillOpacity="0.12"
          />
          <circle
            cx="312"
            cy="352"
            r="29"
            stroke="#6d8cff"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="m303 352 6 6 12-13"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="312"
            y="378"
            textAnchor="middle"
            fontFamily="var(--font-manrope), sans-serif"
            fontSize="7"
            letterSpacing="1.6"
            fill="#ffffff"
          >
            LOAD TESTED
          </text>
        </g>
      )}

      <text
        x="22"
        y="508"
        fontFamily="var(--font-manrope), sans-serif"
        fontSize="7"
        letterSpacing="1.4"
        fill="#7f8ba3"
      >
        FIG. 01 — EXPLODED CELL / NOT TO SCALE
      </text>
    </svg>
  );
}
