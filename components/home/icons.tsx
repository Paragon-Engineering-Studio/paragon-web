export function IconWeb() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect
        x="4"
        y="8"
        width="40"
        height="32"
        rx="2"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <rect
        x="4"
        y="8"
        width="40"
        height="8"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      <circle cx="11" cy="12" r="1.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="17" cy="12" r="1.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="23" cy="12" r="1.5" fill="rgba(255,255,255,0.3)" />
      {[20, 26, 32].map((y, i) => (
        <rect
          key={y}
          x="10"
          y={y}
          width={i === 1 ? 20 : 28}
          height="2"
          rx="1"
          fill={`rgba(79,107,255,${i === 0 ? 0.7 : 0.3})`}
          style={{
            transformOrigin: "left center",
            animation: `pcb-trace ${1.5 + i * 0.4}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </svg>
  );
}

export function IconPCB() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="6" y="6" width="36" height="36" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="14" y="14" width="20" height="20" stroke="rgba(79,107,255,0.4)" strokeWidth="1" />
      <circle cx="24" cy="24" r="3" fill="none" stroke="rgba(79,107,255,0.7)" strokeWidth="1.2" />
      <path d="M6 18 H14" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" className="pcb-trace" />
      <path
        d="M6 30 H14"
        stroke="rgba(79,107,255,0.6)"
        strokeWidth="1.5"
        className="pcb-trace"
        style={{ animationDelay: "0.3s" }}
      />
      <path
        d="M34 18 H42"
        stroke="rgba(139,92,246,0.6)"
        strokeWidth="1.5"
        className="pcb-trace"
        style={{ animationDelay: "0.6s" }}
      />
      <path
        d="M34 30 H42"
        stroke="rgba(79,107,255,0.6)"
        strokeWidth="1.5"
        className="pcb-trace"
        style={{ animationDelay: "0.9s" }}
      />
      <path
        d="M18 6 V14"
        stroke="rgba(79,107,255,0.5)"
        strokeWidth="1.5"
        className="pcb-trace"
        style={{ animationDelay: "0.15s" }}
      />
      <path
        d="M30 6 V14"
        stroke="rgba(139,92,246,0.5)"
        strokeWidth="1.5"
        className="pcb-trace"
        style={{ animationDelay: "0.45s" }}
      />
      <path
        d="M18 34 V42"
        stroke="rgba(79,107,255,0.5)"
        strokeWidth="1.5"
        className="pcb-trace"
        style={{ animationDelay: "0.75s" }}
      />
      <path
        d="M30 34 V42"
        stroke="rgba(139,92,246,0.5)"
        strokeWidth="1.5"
        className="pcb-trace"
        style={{ animationDelay: "1.05s" }}
      />
      {[
        [14, 18],
        [14, 30],
        [34, 18],
        [34, 30],
        [18, 14],
        [30, 14],
        [18, 34],
        [30, 34],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="2"
          fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  );
}

export function IconMicro() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      style={{ overflow: "visible" }}
      aria-hidden
    >
      <ellipse
        cx="24"
        cy="24"
        rx="18"
        ry="7"
        stroke="rgba(79,107,255,0.25)"
        strokeWidth="1"
        fill="none"
        style={{ animation: "spin-slow 10s linear infinite", transformOrigin: "24px 24px" }}
      />
      <ellipse
        cx="24"
        cy="24"
        rx="13"
        ry="5"
        stroke="rgba(139,92,246,0.4)"
        strokeWidth="1"
        fill="none"
        style={{ animation: "spin-reverse 7s linear infinite", transformOrigin: "24px 24px" }}
      />
      <ellipse
        cx="24"
        cy="24"
        rx="8"
        ry="3"
        stroke="rgba(79,107,255,0.6)"
        strokeWidth="1"
        fill="none"
        style={{ animation: "spin-slow 4s linear infinite", transformOrigin: "24px 24px" }}
      />
      <circle cx="24" cy="24" r="3.5" fill="rgba(79,107,255,0.9)" />
      <circle cx="24" cy="24" r="1.5" fill="white" />
      {[0, 120, 240].map((deg, i) => (
        <circle
          key={i}
          cx={24 + 18 * Math.cos((deg * Math.PI) / 180)}
          cy={24 + 7 * Math.sin((deg * Math.PI) / 180)}
          r="1.5"
          fill="rgba(79,107,255,0.8)"
          style={{ animation: "spin-slow 10s linear infinite", transformOrigin: "24px 24px" }}
        />
      ))}
    </svg>
  );
}

export function IconFirmware() {
  const lines = ["0xFE 0x12 0xA4", "IRQ → 0x0020", "WRITE REG 0x03", "ACK 0xFF", "BOOT OK"];
  return (
    <div style={{ height: 48, overflow: "hidden", position: "relative" }} aria-hidden>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          animation: "data-stream 3s linear infinite",
        }}
      >
        {lines.concat(lines).map((l, i) => (
          <div
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: i % 2 === 0 ? "rgba(79,107,255,0.8)" : "rgba(255,255,255,0.3)",
              lineHeight: "9.6px",
              whiteSpace: "nowrap",
              marginBottom: 1,
            }}
          >
            {l}
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, #0d0d0d 0%, transparent 20%, transparent 80%, #0d0d0d 100%)",
        }}
      />
    </div>
  );
}

export function IconAutomation() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <g style={{ animation: "spin-slow 6s linear infinite", transformOrigin: "16px 16px" }}>
        <circle cx="16" cy="16" r="7" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" fill="none" />
        <circle cx="16" cy="16" r="3" fill="rgba(79,107,255,0.6)" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
          <rect
            key={i}
            x="15"
            y="7"
            width="2"
            height="3"
            rx="0.5"
            fill="rgba(255,255,255,0.25)"
            style={{ transformOrigin: "16px 16px", transform: `rotate(${a}deg)` }}
          />
        ))}
      </g>
      <g style={{ animation: "spin-reverse 4s linear infinite", transformOrigin: "31px 30px" }}>
        <circle cx="31" cy="30" r="10" stroke="rgba(139,92,246,0.3)" strokeWidth="1.2" fill="none" />
        <circle cx="31" cy="30" r="4" fill="rgba(139,92,246,0.5)" />
        {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((a, i) => (
          <rect
            key={i}
            x="30"
            y="18"
            width="2"
            height="4"
            rx="0.5"
            fill="rgba(255,255,255,0.2)"
            style={{ transformOrigin: "31px 30px", transform: `rotate(${a}deg)` }}
          />
        ))}
      </g>
      <path d="M22 19 L23 23" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  );
}

export function IconCloud() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      {[10, 20, 30].map((y, i) => (
        <g key={y}>
          <rect
            x="8"
            y={y}
            width="32"
            height="7"
            rx="1"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            fill="rgba(255,255,255,0.02)"
          />
          <circle
            cx="13"
            cy={y + 3.5}
            r="1.5"
            fill={i === 1 ? "rgba(79,107,255,0.8)" : "rgba(255,255,255,0.15)"}
            style={{
              animation: `pulse-dot ${1 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
          <rect
            x="18"
            y={y + 2}
            width={8 + i * 4}
            height="3"
            rx="0.5"
            fill={`rgba(79,107,255,${0.2 + i * 0.1})`}
          />
        </g>
      ))}
    </svg>
  );
}
