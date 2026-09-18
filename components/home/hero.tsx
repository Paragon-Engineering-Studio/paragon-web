import { Reveal } from "@/components/reveal";

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

      <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
        <a href="#get-started" className="btn-hero-solid">
          Start a project →
        </a>
        <a href="/docs" className="btn-hero-outline">
          Read the docs
        </a>
      </div>
    </Reveal>
  );
}
