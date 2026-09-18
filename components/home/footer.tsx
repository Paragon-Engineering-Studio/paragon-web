import Link from "next/link";
import { ParagonWordmark } from "@/components/brand/paragon-wordmark";
import { CONTACTS } from "@/lib/contacts";

const COLUMNS = [
  { h: "Company", links: [
    { l: "About", href: "/about" },
    { l: "Contact", href: "/contact" },
  ] },
  { h: "Services", links: [
    { l: "Software", href: "/services#software" },
    { l: "Hardware", href: "/services#hardware" },
    { l: "Full-stack products", href: "/services#full-stack" },
    { l: "Legacy revival", href: "/services#revival" },
  ] },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "56px 24px 40px",
        background: "#080808",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-grid">
          <div>
            <div
              style={{
                marginBottom: 16,
                color: "#fff",
              }}
            >
              <ParagonWordmark height={12} />
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.7,
                maxWidth: 220,
                margin: 0,
              }}
            >
              Engineering from silicon to screen. Web, PCB, firmware, automation.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.h}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 16,
                }}
              >
                {col.h}
              </div>
              {col.links.map((l) => (
                <Link key={l.l} href={l.href} className="footer-link">
                  {l.l}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Paragon Engineering Studio. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {CONTACTS.filter((channel) => channel.footer).map((channel) => (
              <a
                key={channel.id}
                href={channel.href}
                className="footer-social"
                {...(channel.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : undefined)}
              >
                {channel.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
