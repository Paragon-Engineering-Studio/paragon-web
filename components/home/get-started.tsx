import type { CSSProperties } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const INTEGRATIONS = [
  { label: "React", color: "#61DAFB" },
  { label: "Rust", color: "#F46623" },
  { label: "KiCad", color: "#2966A3" },
  { label: "FreeRTOS", color: "#4F6BFF" },
  { label: "MQTT", color: "#8B5CF6" },
  { label: "Docker", color: "#2496ED" },
  { label: "Modbus", color: "#888" },
  { label: "JTAG", color: "#555" },
];

function StackedMockup() {
  return (
    <div style={{ position: "relative", width: 380, height: 280, margin: "0 auto", maxWidth: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          right: -16,
          bottom: -16,
          background: "#0d0d0d",
          border: "1px solid rgba(255,255,255,0.06)",
          transform: "rotate(2.5deg)",
          borderRadius: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          right: -8,
          bottom: -8,
          background: "#111",
          border: "1px solid rgba(255,255,255,0.08)",
          transform: "rotate(1deg)",
          borderRadius: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#151515",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                display: "inline-block",
              }}
            />
          ))}
          <span
            style={{
              marginLeft: 8,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "rgba(255,255,255,0.2)",
            }}
          >
            paragon.dev / dashboard
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", height: "calc(100% - 33px)" }}>
          <div style={{ borderRight: "1px solid rgba(255,255,255,0.05)", padding: "12px 0" }}>
            {["Overview", "Boards", "Firmware", "Deploys", "Settings"].map((s, i) => (
              <div
                key={s}
                style={{
                  padding: "5px 12px",
                  fontSize: 11,
                  color: i === 0 ? "#fff" : "rgba(255,255,255,0.3)",
                  background: i === 0 ? "rgba(79,107,255,0.12)" : "transparent",
                  borderLeft: i === 0 ? "2px solid #4F6BFF" : "2px solid transparent",
                }}
              >
                {s}
              </div>
            ))}
          </div>
          <div style={{ padding: 12 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(255,255,255,0.8)",
                marginBottom: 10,
              }}
            >
              Overview
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 6,
                marginBottom: 10,
              }}
            >
              {[
                ["Boards", "14"],
                ["Uptime", "99.9%"],
                ["Deploys", "38"],
              ].map(([l, v]) => (
                <div
                  key={l}
                  style={{
                    border: "1px solid rgba(255,255,255,0.07)",
                    padding: "6px 8px",
                    borderRadius: 2,
                  }}
                >
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>
                    {l}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2 }}>
              {[
                { t: "09:41", m: "PCB-07 passed DRC", c: "rgba(79,107,255,0.9)" },
                { t: "09:38", m: "Firmware v1.4.3 flashed", c: "rgba(255,255,255,0.4)" },
                { t: "09:33", m: "Automation trigger fired", c: "rgba(139,92,246,0.9)" },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 8,
                    padding: "5px 8px",
                    borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    fontSize: 9,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }}>{r.t}</span>
                  <span style={{ color: r.c }}>{r.m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GetStarted() {
  return (
    <Reveal id="get-started" style={{ padding: "80px 24px" }}>
      <div className="panel-box card-hover" style={{ padding: "48px 40px" }}>
        <div className="started-grid">
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              <span className="gradient-text">Get started</span>
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#fff",
                margin: "0 0 16px",
                lineHeight: 1.1,
              }}
            >
              Every project,
              <br />
              one platform.
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                marginBottom: 28,
                maxWidth: 360,
              }}
            >
              From a single embedded device to a full cloud-connected product — Paragon handles the
              engineering so you can focus on the outcome.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {INTEGRATIONS.map(({ label, color }) => (
                <div
                  key={label}
                  className="tech-pill"
                  style={{ "--pill-color": color } as CSSProperties}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: color,
                      display: "inline-block",
                    }}
                  />
                  {label}
                </div>
              ))}
            </div>

            <Link href="#" className="btn-cta">
              Start your project →
            </Link>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <StackedMockup />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
