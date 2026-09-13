const GLYPHS = "01";

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const COLUMNS = Array.from({ length: 38 }, (_, i) => {
  const rng = mulberry32(i * 997 + 13);
  return {
    x: 12 + i * 42,
    delay: (i % 12) * 0.022,
    duration: 10 + rng() * 8,
    startY: -40 - rng() * 120,
    glyphs: Array.from({ length: 32 }, () => GLYPHS[Math.floor(rng() * GLYPHS.length)] ?? "0"),
  };
});

export function SoftwareMatrix() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMinYMid slice" aria-hidden>
      {COLUMNS.map((col, i) => (
        <g
          key={i}
          className="matrix-col"
          style={{
            ["--delay" as string]: col.delay,
            animationDuration: `${col.duration}s`,
            animationDelay: `${-col.duration * (0.18 + i * 0.02)}s`,
          }}
        >
          {col.glyphs.map((glyph, gi) => {
            const head = gi === col.glyphs.length - 1;
            const near = gi >= col.glyphs.length - 5;
            return (
              <text
                key={gi}
                x={col.x}
                y={col.startY + gi * 16}
                fill={
                  head
                    ? "rgba(220,255,236,0.95)"
                    : near
                      ? "rgba(90,235,150,0.7)"
                      : "rgba(48,190,110,0.42)"
                }
                fontFamily="var(--font-mono)"
                fontSize={head ? 11 : 9}
                fontWeight={head ? 600 : 400}
              >
                {glyph}
              </text>
            );
          })}
        </g>
      ))}
    </svg>
  );
}
