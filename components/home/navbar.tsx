import Link from "next/link";
import { ParagonWordmark } from "@/components/brand/paragon-wordmark";
import { NavLinks } from "@/components/home/nav-links";

export function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(8,8,8,0.96)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}
      >
        <Link
          href="/"
          aria-label="PARAGON engineering studio"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            flexShrink: 0,
            color: "#fff",
          }}
        >
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              lineHeight: 1,
            }}
          >
            <ParagonWordmark height={18} />
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.42)",
              }}
            >
              engineering studio
            </span>
          </span>
        </Link>

        <NavLinks />

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: 24 }}>
          <div
            className="nav-search"
            style={{
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "5px 10px",
              borderRadius: 4,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              aria-hidden
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.2)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Search...
            </span>
            <span
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 3,
                padding: "1px 5px",
              }}
            >
              ⌘K
            </span>
          </div>
          <Link href="#" className="btn-outline">
            Sign in
          </Link>
          <Link href="/#get-started" className="btn-solid">
            Get started
          </Link>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "7px 16px",
          textAlign: "center",
          fontSize: 12,
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.01em",
          background: "rgba(79,107,255,0.06)",
        }}
      >
        📣 Paragon is still a startup
      </div>
    </header>
  );
}
