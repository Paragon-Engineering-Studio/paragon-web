import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type TeamLogo = {
  name: string;
  mark: ReactNode;
  style: CSSProperties;
};

function AxionMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M11 2 L20 19 H2 Z" stroke="#7DD3FC" strokeWidth="1.4" fill="rgba(125,211,252,0.08)" />
      <path d="M11 8 L15 17 H7 Z" fill="#7DD3FC" opacity="0.85" />
    </svg>
  );
}

function VortexMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="8" stroke="#A78BFA" strokeWidth="1.3" />
      <path d="M11 3 A8 8 0 0 1 19 11" stroke="#C4B5FD" strokeWidth="1.6" />
      <circle cx="11" cy="11" r="2.2" fill="#A78BFA" />
    </svg>
  );
}

function NeolightMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M11 2 V20 M4 11 H18" stroke="#FDE68A" strokeWidth="1.2" />
      <circle cx="11" cy="11" r="4" fill="rgba(253,230,138,0.2)" stroke="#FDE68A" strokeWidth="1.2" />
    </svg>
  );
}

function HelixMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M7 3 C16 6, 6 11, 15 14 C6 17, 16 19, 7 21" stroke="#34D399" strokeWidth="1.5" fill="none" />
      <path d="M15 3 C6 6, 16 11, 7 14 C16 17, 6 19, 15 21" stroke="#6EE7B7" strokeWidth="1.2" opacity="0.7" fill="none" />
    </svg>
  );
}

function OrbitalMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <ellipse cx="11" cy="11" rx="9" ry="4" stroke="#60A5FA" strokeWidth="1.2" />
      <ellipse cx="11" cy="11" rx="4" ry="9" stroke="#93C5FD" strokeWidth="1.2" />
      <circle cx="11" cy="11" r="2" fill="#60A5FA" />
    </svg>
  );
}

function StrataMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="3" y="4" width="16" height="3" rx="0.6" fill="#F8FAFC" opacity="0.9" />
      <rect x="5" y="9.5" width="12" height="3" rx="0.6" fill="#CBD5E1" opacity="0.8" />
      <rect x="7" y="15" width="8" height="3" rx="0.6" fill="#94A3B8" opacity="0.7" />
    </svg>
  );
}

function FerrumMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="3" y="3" width="16" height="16" stroke="#F97316" strokeWidth="1.4" />
      <path d="M7 15 V7 H11.5 C14.5 7 14.5 12 11.5 12 H7" stroke="#FDBA74" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function BeaconMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M11 3 L13.5 8 H8.5 Z" fill="#FB7185" />
      <path d="M11 8 V16" stroke="#FB7185" strokeWidth="1.4" />
      <path d="M6 12 H16 M4 16 H18" stroke="#FDA4AF" strokeWidth="1.2" />
      <rect x="9" y="16" width="4" height="3" fill="#FB7185" />
    </svg>
  );
}

const TEAM_LOGOS: TeamLogo[] = [
  {
    name: "AXION",
    mark: <AxionMark />,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      letterSpacing: "0.22em",
      fontSize: 13,
      color: "#E0F2FE",
    },
  },
  {
    name: "vortex",
    mark: <VortexMark />,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontStyle: "italic",
      letterSpacing: "0.04em",
      fontSize: 16,
      color: "#DDD6FE",
    },
  },
  {
    name: "NEOLIGHT",
    mark: <NeolightMark />,
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 400,
      letterSpacing: "0.28em",
      fontSize: 11,
      color: "#FEF3C7",
    },
  },
  {
    name: "Helix",
    mark: <HelixMark />,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      letterSpacing: "-0.02em",
      fontSize: 18,
      color: "#A7F3D0",
    },
  },
  {
    name: "ORBITAL.io",
    mark: <OrbitalMark />,
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "0.02em",
      fontSize: 13,
      color: "#BFDBFE",
    },
  },
  {
    name: "STRATA",
    mark: <StrataMark />,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      letterSpacing: "0.16em",
      fontSize: 14,
      color: "#F1F5F9",
    },
  },
  {
    name: "FERRUM",
    mark: <FerrumMark />,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      letterSpacing: "0.08em",
      fontSize: 14,
      color: "#FFEDD5",
    },
  },
  {
    name: "beacon",
    mark: <BeaconMark />,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      letterSpacing: "0.18em",
      fontSize: 13,
      color: "#FECDD3",
      textTransform: "lowercase",
    },
  },
];

function LogoItem({ logo }: { logo: TeamLogo }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 22px",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}
    >
      {logo.mark}
      <span style={logo.style}>{logo.name}</span>
    </div>
  );
}

export function LogoStrip() {
  const row = [...TEAM_LOGOS, ...TEAM_LOGOS];

  return (
    <Reveal style={{ padding: "24px 24px 80px" }}>
      <div className="panel-box" style={{ padding: "48px 0 40px", overflow: "hidden" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Trusted by teams at
        </p>
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: "linear-gradient(to right, #0d0d0d, transparent)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: "linear-gradient(to left, #0d0d0d, transparent)",
              zIndex: 2,
            }}
          />
          <div className="scroll-strip" style={{ display: "flex", gap: 36, width: "max-content" }}>
            {row.map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
