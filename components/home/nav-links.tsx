"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Docs", href: "#" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-center" style={{ gap: 28, marginLeft: "auto" }}>
      {NAV_LINKS.map((item) => {
        const active = item.href !== "#" && pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`nav-link${active ? " is-active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
