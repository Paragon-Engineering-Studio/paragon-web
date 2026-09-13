export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  footer?: boolean;
};

export const CONTACTS: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: "hello@paragon.engineering",
    href: "mailto:hello@paragon.engineering",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Message the studio",
    href: "https://wa.me/",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@paragon.engineering",
    href: "https://instagram.com/paragon.engineering",
    external: true,
    footer: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "PARAGON",
    href: "https://www.linkedin.com/",
    external: true,
    footer: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/paragon",
    href: "https://github.com/paragon",
    external: true,
    footer: true,
  },
  {
    id: "x",
    label: "X",
    value: "@paragon",
    href: "https://x.com/paragon",
    external: true,
    footer: true,
  },
];
