"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type Point = [number, number];

type Trace = {
  points: Point[];
  width: number;
  delay: number;
  color: "blue" | "violet";
};

const CHIP = { x: 52, y: 388, w: 132, h: 132 };
const PIN_LEN = 12;
const RIGHT_X = CHIP.x + CHIP.w + PIN_LEN;
const TOP_Y = CHIP.y - PIN_LEN;
const BOTTOM_Y = CHIP.y + CHIP.h + PIN_LEN;

const PIN_YS = [408, 426, 444, 462, 480, 498];
const PIN_XS = [72, 90, 108, 126, 144, 162];
const CORNER_RADIUS = 18;

/** Copper already visible at the top of the page. */
const HEAD_START = 0.08;
/** Path progress when traces reach the last approach to the chip. */
const APPROACH_FILL = 0.84;
/** Scroll progress when that approach is reached; remaining scroll is the pin connection. */
const APPROACH_SCROLL = 0.58;

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

function fillFromScroll(scroll: number) {
  const s = Math.min(1, Math.max(0, scroll));
  if (s <= APPROACH_SCROLL) {
    const t = easeOutQuad(s / APPROACH_SCROLL);
    return HEAD_START + (APPROACH_FILL - HEAD_START) * t;
  }
  const t = (s - APPROACH_SCROLL) / (1 - APPROACH_SCROLL);
  return APPROACH_FILL + (1 - APPROACH_FILL) * t;
}

function smoothDamp(
  current: number,
  target: number,
  velocity: number,
  smoothTime: number,
  dt: number,
): [number, number] {
  const time = Math.max(0.0001, smoothTime);
  const omega = 2 / time;
  const x = omega * dt;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  const change = current - target;
  const temp = (velocity + omega * change) * dt;
  const nextVelocity = (velocity - omega * temp) * exp;
  let output = target + (change + temp) * exp;

  if (target - current > 0 === output > target) {
    return [target, 0];
  }

  return [output, nextVelocity];
}

function dist(a: Point, b: Point) {
  return Math.hypot(b[0] - a[0], b[1] - a[1]);
}

function toward(from: Point, to: Point, amount: number): Point {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const len = Math.hypot(dx, dy) || 1;
  const t = Math.min(amount, len);
  return [from[0] + (dx / len) * t, from[1] + (dy / len) * t];
}

function roundedPath(points: Point[], radius = CORNER_RADIUS) {
  if (points.length < 2) return "";
  if (points.length === 2) {
    return `M${points[0][0]} ${points[0][1]} L${points[1][0]} ${points[1][1]}`;
  }

  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];
    const r = Math.min(radius, dist(prev, curr) / 2, dist(curr, next) / 2);
    const enter = toward(curr, prev, r);
    const leave = toward(curr, next, r);
    d += ` L${enter[0]} ${enter[1]} Q${curr[0]} ${curr[1]} ${leave[0]} ${leave[1]}`;
  }
  const last = points[points.length - 1];
  d += ` L${last[0]} ${last[1]}`;
  return d;
}

const TRACES: Trace[] = [
  {
    color: "blue",
    width: 4.4,
    delay: 0,
    points: [
      [PIN_XS[2], 0],
      [PIN_XS[2], TOP_Y],
    ],
  },
  {
    color: "violet",
    width: 3.8,
    delay: 0.02,
    points: [
      [320, 0],
      [320, PIN_YS[0]],
      [RIGHT_X, PIN_YS[0]],
    ],
  },
  {
    color: "blue",
    width: 4.1,
    delay: 0.04,
    points: [
      [540, 0],
      [540, 88],
      [430, 88],
      [430, PIN_YS[1]],
      [RIGHT_X, PIN_YS[1]],
    ],
  },
  {
    color: "violet",
    width: 3.7,
    delay: 0.06,
    points: [
      [980, 0],
      [980, 72],
      [1180, 72],
      [1180, 210],
      [620, 210],
      [620, PIN_YS[2]],
      [RIGHT_X, PIN_YS[2]],
    ],
  },
  {
    color: "blue",
    width: 4.4,
    delay: 0.01,
    points: [
      [PIN_XS[2], 900],
      [PIN_XS[2], BOTTOM_Y],
    ],
  },
  {
    color: "violet",
    width: 3.8,
    delay: 0.03,
    points: [
      [320, 900],
      [320, PIN_YS[5]],
      [RIGHT_X, PIN_YS[5]],
    ],
  },
  {
    color: "blue",
    width: 4.1,
    delay: 0.05,
    points: [
      [540, 900],
      [540, 812],
      [430, 812],
      [430, PIN_YS[4]],
      [RIGHT_X, PIN_YS[4]],
    ],
  },
  {
    color: "violet",
    width: 3.7,
    delay: 0.07,
    points: [
      [980, 900],
      [980, 828],
      [1180, 828],
      [1180, 690],
      [620, 690],
      [620, PIN_YS[3]],
      [RIGHT_X, PIN_YS[3]],
    ],
  },
];

const STROKE = {
  blue: "rgba(130, 160, 255, 0.7)",
  violet: "rgba(175, 145, 255, 0.62)",
};

const DIM = {
  blue: "rgba(110, 140, 255, 0.07)",
  violet: "rgba(160, 130, 255, 0.06)",
};

function ChipPins() {
  return (
    <g className="pcb-chip-pins">
      {PIN_YS.map((y) => (
        <g key={`h-${y}`}>
          <rect x={CHIP.x - PIN_LEN} y={y - 3} width={PIN_LEN} height={6} rx={1.4} />
          <rect x={CHIP.x + CHIP.w} y={y - 3} width={PIN_LEN} height={6} rx={1.4} />
        </g>
      ))}
      {PIN_XS.map((x) => (
        <g key={`v-${x}`}>
          <rect x={x - 3} y={CHIP.y - PIN_LEN} width={6} height={PIN_LEN} rx={1.4} />
          <rect x={x - 3} y={CHIP.y + CHIP.h} width={6} height={PIN_LEN} rx={1.4} />
        </g>
      ))}
    </g>
  );
}

export function PcbBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targetFromScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const scroll = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      return fillFromScroll(scroll);
    };

    let current = targetFromScroll();
    let velocity = 0;
    let last = performance.now();
    let raf = 0;
    let running = true;

    node.style.setProperty("--pcb-p", current.toFixed(5));

    const tick = (now: number) => {
      if (!running) return;

      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const target = targetFromScroll();
      [current, velocity] = smoothDamp(current, target, velocity, 0.48, dt);

      if (Math.abs(target - current) < 0.0015 && Math.abs(velocity) < 0.02) {
        current = target;
        velocity = 0;
      }

      node.style.setProperty("--pcb-p", current.toFixed(5));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, []);

  const cx = CHIP.x + CHIP.w / 2;
  const cy = CHIP.y + CHIP.h / 2;

  return (
    <div ref={ref} className="pcb-bg" aria-hidden="true">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMinYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="pcb-chip-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(110,140,255,0.16)" />
            <stop offset="60%" stopColor="rgba(160,130,255,0.06)" />
            <stop offset="100%" stopColor="rgba(110,140,255,0)" />
          </radialGradient>
          <linearGradient id="pcb-package-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#181818" />
            <stop offset="100%" stopColor="#101010" />
          </linearGradient>
          <pattern id="pcb-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(110,140,255,0.03)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="1600" height="900" fill="url(#pcb-grid)" />

        <ellipse
          className="pcb-chip-halo"
          cx={cx}
          cy={cy}
          rx="220"
          ry="190"
          fill="url(#pcb-chip-halo)"
        />

        {TRACES.map((trace, i) => (
          <path
            key={`dim-${i}`}
            d={roundedPath(trace.points)}
            stroke={DIM[trace.color]}
            strokeWidth={trace.width}
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}

        {TRACES.map((trace, i) => (
          <g
            key={`live-${i}`}
            style={{ "--delay": trace.delay, "--span": 0.88 } as CSSProperties}
          >
            <path
              className="pcb-bg-trace"
              d={roundedPath(trace.points)}
              pathLength={1}
              stroke={STROKE[trace.color]}
              strokeWidth={trace.width}
              data-delay={trace.delay}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              className="pcb-bg-current"
              d={roundedPath(trace.points)}
              pathLength={1}
              stroke={trace.color === "blue" ? "rgba(190,210,255,0.85)" : "rgba(220,200,255,0.8)"}
              strokeWidth={Math.max(1.6, trace.width * 0.4)}
              strokeLinecap="round"
              fill="none"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          </g>
        ))}

        <ChipPins />

        <g className="pcb-chip">
          <rect
            x={CHIP.x}
            y={CHIP.y}
            width={CHIP.w}
            height={CHIP.h}
            rx="8"
            fill="url(#pcb-package-grad)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.1"
          />
          <text
            x={cx}
            y={cy - 4}
            textAnchor="middle"
            fill="rgba(255,255,255,0.58)"
            fontFamily="var(--font-sans)"
            fontSize="13"
            fontWeight="700"
            letterSpacing="2.4"
          >
            PARAGON
          </text>
          <text
            x={cx}
            y={cy + 16}
            textAnchor="middle"
            fill="rgba(255,255,255,0.28)"
            fontFamily="var(--font-sans)"
            fontSize="7"
            fontWeight="500"
            letterSpacing="0.8"
          >
            engineering studio
          </text>
        </g>
      </svg>
    </div>
  );
}
