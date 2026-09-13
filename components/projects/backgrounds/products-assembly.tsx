type Point = [number, number];

function pathFrom(points: Point[]) {
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`).join(" ");
}

const ORBITS = [
  "M 220 450 A 210 140 0 1 1 219.9 450",
  "M 220 450 A 300 200 0 1 0 220.1 450",
];

const LINKS: Point[][] = [
  [
    [220, 360],
    [220, 220],
    [420, 180],
    [520, 180],
  ],
  [
    [290, 450],
    [480, 450],
    [480, 520],
    [640, 520],
  ],
  [
    [220, 540],
    [220, 680],
    [400, 720],
    [520, 720],
  ],
  [
    [150, 400],
    [80, 320],
    [80, 200],
    [140, 140],
  ],
];

function Sku({
  x,
  y,
  label,
}: {
  x: number;
  y: number;
  label: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="88"
        height="36"
        rx="18"
        fill="rgba(18,14,10,0.72)"
        stroke="rgba(232,201,154,0.32)"
      />
      <text
        x={x + 44}
        y={y + 22}
        textAnchor="middle"
        fill="rgba(232,201,154,0.55)"
        fontSize="9"
        fontFamily="var(--font-sans)"
        fontWeight="600"
        letterSpacing="1.6"
      >
        {label}
      </text>
    </g>
  );
}

export function ProductsAssembly() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMinYMid slice" aria-hidden>
      <defs>
        <radialGradient id="prod-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(232,201,154,0.14)" />
          <stop offset="100%" stopColor="rgba(232,201,154,0)" />
        </radialGradient>
        <linearGradient id="prod-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
      </defs>

      <ellipse cx="220" cy="450" rx="340" ry="260" fill="url(#prod-halo)" className="pcb-chip-halo" />

      {ORBITS.map((d, i) => (
        <path
          key={`orbit-${i}`}
          className="pcb-bg-trace projects-prod-trace"
          d={d}
          pathLength={1}
          fill="none"
          stroke="rgba(232,201,154,0.16)"
          strokeWidth="1.1"
        />
      ))}

      {LINKS.map((points, i) => (
        <path
          key={`dim-${i}`}
          d={pathFrom(points)}
          fill="none"
          stroke="rgba(232,201,154,0.07)"
          strokeWidth="1.6"
        />
      ))}

      {LINKS.map((points, i) => (
        <g key={`live-${i}`}>
          <path
            className="pcb-bg-trace projects-prod-trace"
            d={pathFrom(points)}
            pathLength={1}
            fill="none"
            stroke="rgba(232,201,154,0.5)"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="pcb-bg-current"
            d={pathFrom(points)}
            pathLength={1}
            fill="none"
            stroke="rgba(255,230,190,0.8)"
            strokeWidth="1.1"
            strokeLinecap="round"
            style={{ animationDelay: `${i * 0.45}s` }}
          />
        </g>
      ))}

      <g className="product-stack">
        <g className="product-layer product-layer-pcb">
          <rect x="148" y="368" width="144" height="164" rx="18" fill="#16120e" stroke="rgba(232,201,154,0.22)" />
          <rect x="168" y="392" width="104" height="72" rx="4" fill="#1c1814" stroke="rgba(110,220,150,0.2)" />
        </g>
        <g className="product-layer product-layer-body">
          <rect x="152" y="352" width="136" height="196" rx="22" fill="#1a1612" stroke="rgba(232,201,154,0.4)" />
        </g>
        <g className="product-layer product-layer-glass">
          <rect x="164" y="372" width="112" height="156" rx="14" fill="url(#prod-glass)" stroke="rgba(255,255,255,0.12)" />
          <circle cx="220" cy="548" r="5" fill="rgba(232,201,154,0.28)" />
        </g>
      </g>

      <Sku x={520} y={162} label="APP" />
      <Sku x={640} y={502} label="CLOUD" />
      <Sku x={520} y={702} label="CASE" />
      <Sku x={120} y={122} label="BOARD" />
    </svg>
  );
}
