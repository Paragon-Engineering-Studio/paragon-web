type Point = [number, number];

function pathFrom(points: Point[]) {
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`).join(" ");
}

function Chip({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label?: string }) {
  const pins = 5;
  const gap = (h - 16) / (pins - 1);
  return (
    <g>
      {Array.from({ length: pins }, (_, i) => {
        const py = y + 8 + i * gap;
        return (
          <g key={i}>
            <rect x={x - 8} y={py - 2} width={8} height={4} rx="0.6" fill="rgba(200,190,120,0.45)" />
            <rect x={x + w} y={py - 2} width={8} height={4} rx="0.6" fill="rgba(200,190,120,0.45)" />
          </g>
        );
      })}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="3"
        fill="#141414"
        stroke="rgba(160,210,170,0.4)"
        strokeWidth="1"
      />
      {label && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 3}
          textAnchor="middle"
          fill="rgba(180,230,190,0.45)"
          fontSize="8"
          fontFamily="var(--font-mono)"
          letterSpacing="1.2"
        >
          {label}
        </text>
      )}
    </g>
  );
}

function Passives({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width={18} height={6} rx="1" fill="rgba(60,90,50,0.9)" stroke="rgba(180,160,80,0.35)" />
      <rect x={x + 28} y={y} width="10" height="10" rx="1" fill="rgba(40,70,50,0.8)" stroke="rgba(140,180,150,0.3)" />
      <rect x={x + 48} y={y + 1} width="14" height="6" rx="1" fill="rgba(90,50,40,0.75)" />
    </g>
  );
}

function Board({
  x,
  y,
  w,
  h,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
}) {
  const holes: Point[] = [
    [x + 10, y + 10],
    [x + w - 10, y + 10],
    [x + 10, y + h - 10],
    [x + w - 10, y + h - 10],
  ];

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill="#102418" stroke="rgba(70,160,110,0.38)" strokeWidth="1.2" />
      <rect
        x={x + 6}
        y={y + 6}
        width={w - 12}
        height={h - 12}
        rx="5"
        fill="none"
        stroke="rgba(50,120,80,0.18)"
      />
      {holes.map(([hx, hy]) => (
        <circle key={`${hx}-${hy}`} cx={hx} cy={hy} r="3.2" fill="#080808" stroke="rgba(180,200,160,0.25)" />
      ))}
    </g>
  );
}

const TRACES: Point[][] = [
  [
    [268, 360],
    [340, 360],
    [340, 230],
    [548, 230],
  ],
  [
    [268, 400],
    [400, 400],
    [400, 430],
    [708, 430],
  ],
  [
    [268, 440],
    [360, 440],
    [360, 600],
    [508, 600],
  ],
  [
    [188, 320],
    [188, 200],
    [560, 200],
  ],
];

export function HardwarePcb() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMinYMid slice" aria-hidden>
      <defs>
        <radialGradient id="hw-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(70,180,110,0.16)" />
          <stop offset="100%" stopColor="rgba(70,180,110,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="240" cy="390" rx="280" ry="220" fill="url(#hw-halo)" className="pcb-chip-halo" />

      <Board x={80} y={260} w={280} h={240} />
      <Chip x={168} y={332} w={92} h={92} label="MCU" />
      <Passives x={110} y={290} />
      <Passives x={110} y={456} />
      <rect x={270} y={290} width="54" height="22" rx="2" fill="#1a1a1a" stroke="rgba(160,210,170,0.28)" />

      <Board x={540} y={170} w={150} h={110} />
      <Chip x={582} y={198} w={64} h={52} label="RF" />
      <Passives x={558} y={252} />

      <Board x={700} y={370} w={170} h={120} />
      <Chip x={748} y={400} w={72} h={56} label="PWR" />
      <Passives x={720} y={462} />

      <Board x={500} y={540} w={150} h={100} />
      <Chip x={542} y={564} w={64} h={50} label="I/O" />
      <Passives x={518} y={616} />

      {TRACES.map((points, i) => (
        <path
          key={`dim-${i}`}
          d={pathFrom(points)}
          fill="none"
          stroke="rgba(70,160,110,0.1)"
          strokeWidth="3.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ))}

      {TRACES.map((points, i) => (
        <g key={`live-${i}`}>
          <path
            className="pcb-bg-trace projects-hw-trace"
            d={pathFrom(points)}
            pathLength={1}
            fill="none"
            stroke="rgba(110,220,150,0.62)"
            strokeWidth="3.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            className="pcb-bg-current"
            d={pathFrom(points)}
            pathLength={1}
            fill="none"
            stroke="rgba(180,255,200,0.85)"
            strokeWidth="1.4"
            strokeLinecap="round"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
