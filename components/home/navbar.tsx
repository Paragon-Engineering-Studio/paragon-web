import Link from "next/link";
import { ParagonWordmark } from "@/components/brand/paragon-wordmark";
import { MobileMenu } from "@/components/home/mobile-menu";
import { NavLinks } from "@/components/home/nav-links";
import { ProjectSearch } from "@/components/home/project-search";

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
        overflow: "visible",
      }}
    >
      <div className="site-header-bar">
        <Link
          href="/"
          aria-label="PARAGON engineering studio"
          className="site-logo"
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

        <div className="site-header-tools">
          <ProjectSearch />
        </div>
        <MobileMenu />
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
