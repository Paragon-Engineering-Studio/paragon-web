import { Reveal } from "@/components/reveal";
import {
  IconAutomation,
  IconFirmware,
  IconMicro,
  IconPCB,
  IconWeb,
} from "@/components/home/icons";

const FEATURES = [
  {
    icon: <IconWeb />,
    title: "Web Development",
    desc: "Full-stack platforms engineered for performance. APIs, interfaces, and infrastructure shipped to production.",
    accent: false,
  },
  {
    icon: <IconPCB />,
    title: "PCB Design",
    desc: "From schematic capture to DFM-ready Gerbers. High-density, multi-layer boards for demanding environments.",
    accent: false,
  },
  {
    icon: <IconMicro />,
    title: "Microcontrollers",
    desc: "Embedded firmware for ARM, RISC-V, and AVR. Real-time OS integration, peripheral drivers, and bare-metal code.",
    accent: true,
  },
  {
    icon: <IconFirmware />,
    title: "Firmware & BSP",
    desc: "Board support packages, bootloaders, and RTOS configurations optimized for each silicon target.",
    accent: false,
  },
  {
    icon: <IconAutomation />,
    title: "Automation",
    desc: "Industrial PLC logic, SCADA integration, and workflow automation that eliminates manual overhead.",
    accent: false,
  },
];

export function Features() {
  return (
    <Reveal
      id="services"
      style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div style={{ marginBottom: 48 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          <span className="gradient-text">What we build</span>
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            margin: 0,
            color: "#fff",
            maxWidth: 480,
            lineHeight: 1.1,
          }}
        >
          Every discipline,
          <br />
          one standard.
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 1,
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="card-hover"
            style={{
              padding: "28px 24px",
              border: "1px solid rgba(255,255,255,0.07)",
              background: f.accent ? "rgba(13,13,13,0.9)" : "#0d0d0d",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
            }}
          >
            {f.accent && (
              <div
                className="dot-grid-bg"
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  opacity: 0.5,
                }}
              />
            )}

            {f.accent && (
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 28,
                  height: 28,
                  border: "1px solid rgba(79,107,255,0.4)",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(79,107,255,0.08)",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(79,107,255,0.9)"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            )}

            <div style={{ marginBottom: 16, position: "relative", zIndex: 1 }}>{f.icon}</div>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#fff",
                margin: "0 0 8px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.65,
                margin: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              {f.desc}
            </p>

            {f.accent && (
              <div
                style={{
                  marginTop: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(79,107,255,0.12)",
                  border: "1px solid rgba(79,107,255,0.25)",
                  borderRadius: 100,
                  padding: "3px 10px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    color: "rgba(79,107,255,0.9)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  v2.0.1
                </span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
                  latest stable
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
