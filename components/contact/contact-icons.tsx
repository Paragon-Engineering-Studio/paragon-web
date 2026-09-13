import type { ReactNode } from "react";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const ICONS: Record<string, ReactNode> = {
  email: (
    <Icon>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </Icon>
  ),
  whatsapp: (
    <Icon>
      <path d="M4.8 19.2 6 15.6A8 8 0 1 1 8.4 18Z" />
      <path d="M9.2 10.2c.2 1.8 2.2 3.8 4 4" />
    </Icon>
  ),
  instagram: (
    <Icon>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </Icon>
  ),
  linkedin: (
    <Icon>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 11v6 M8 8.2v.02 M12 17v-3.6a2 2 0 0 1 4 0V17" />
    </Icon>
  ),
  github: (
    <Icon>
      <path d="M9 19c-4 1.3-4-2-6-2.2 M16 21v-3.4a3 3 0 0 0-.8-2.3c2.6-.3 5.4-1.3 5.4-5.8A4.5 4.5 0 0 0 19 6.2 4.2 4.2 0 0 0 18.9 3S17.8 2.7 15 4.6a10 10 0 0 0-6 0C6.2 2.7 5.1 3 5.1 3A4.2 4.2 0 0 0 5 6.2 4.5 4.5 0 0 0 3.4 9.5c0 4.5 2.8 5.5 5.4 5.8A3 3 0 0 0 8 17.6V21" />
    </Icon>
  ),
  x: (
    <Icon>
      <path d="M5 5l14 14 M19 5 5 19" />
    </Icon>
  ),
};

export function ContactIcon({ id }: { id: string }) {
  return ICONS[id] ?? ICONS.email;
}
