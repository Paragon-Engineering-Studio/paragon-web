import { Reveal } from "@/components/reveal";

const TERM_LINE = "paragon build --target stm32f4 --release";

export function Hero() {
  return (
    <Reveal
      style={{
        padding: "100px 24px 80px",
        textAlign: "center",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 100,
          padding: "5px 14px",
          marginBottom: 32,
          fontSize: 12,
          color: "rgba(255,255,255,0.45)",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#4F6BFF",
            display: "inline-block",
            animation: "pulse-dot 2s ease-in-out infinite",
          }}
        />
        Paragon OS 2.0 — now shipping
      </div>

      <h1
        style={{
          fontSize: "clamp(40px, 7vw, 76px)",
          fontWeight: 900,
          letterSpacing: "-0.045em",
          lineHeight: 1.04,
          margin: "0 0 24px",
          color: "#fff",
        }}
      >
        Engineering from <span className="gradient-text">silicon to screen</span> — without
        compromise.
      </h1>

      <p
        style={{
          fontSize: 17,
          color: "rgba(255,255,255,0.45)",
          maxWidth: 520,
          margin: "0 auto 40px",
          lineHeight: 1.7,
          letterSpacing: "-0.01em",
        }}
      >
        Web applications, PCB layouts, embedded firmware, and industrial automation — every layer of
        the stack, precision-engineered.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 48 }}>
        <a href="#get-started" className="btn-hero-solid">
          Start a project →
        </a>
        <a href="#" className="btn-hero-outline">
          Read the docs
        </a>
      </div>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 6,
          padding: "10px 18px",
        }}
      >
        <span
          style={{
            color: "rgba(79,107,255,0.9)",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
          }}
        >
          $
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {TERM_LINE}
        </span>
        <span className="blink-cursor" />
      </div>
    </Reveal>
  );
}
