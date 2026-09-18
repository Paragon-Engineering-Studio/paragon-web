import { Reveal } from "@/components/reveal";
import { Logo } from "@/components/home/logo";

function ConnectorLines() {
  const W = 500;
  const H = 160;
  const paths = [
    "M 100 0 C 100 80, 250 120, 250 160",
    "M 250 0 L 250 160",
    "M 400 0 C 400 80, 250 120, 250 160",
  ];

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      className="mx-auto"
      style={{ maxWidth: "100%" }}
      aria-hidden
    >
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
          <path
            d={d}
            stroke="url(#grad-line)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: "40 560",
              animation: "travel-light 2.8s ease-in-out infinite",
              animationDelay: `${i * 0.9}s`,
            }}
          />
        </g>
      ))}
      <defs>
        <linearGradient
          id="grad-line"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#4F6BFF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Infrastructure() {
  return (
    <Reveal
      id="systems"
      style={{
        padding: "80px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 12,
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Infrastructure
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 38px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: "0 0 56px",
            lineHeight: 1.1,
          }}
        >
          Built on a unified
          <br />
          engineering core.
        </h2>

        <ConnectorLines />

        <div
          className="float-badge"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 100,
            padding: "10px 22px",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(8px)",
            margin: "-8px auto 0",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Logo size={18} gradientId="pill-grad" />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>
            Powered by Paragon
          </span>
        </div>
      </div>
    </Reveal>
  );
}
