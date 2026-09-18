export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  footer?: boolean;
};

export const EMAIL_ADDRESS = "info@paragon-engineering";

export function mailtoHref(
  address: string,
  options?: { subject?: string; body?: string },
): string {
  const params = new URLSearchParams();
  if (options?.subject) params.set("subject", options.subject);
  if (options?.body) params.set("body", options.body);
  const query = params.toString();
  return `mailto:${address}${query ? `?${query}` : ""}`;
}

export const CONTACTS: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: EMAIL_ADDRESS,
    href: mailtoHref(EMAIL_ADDRESS, {
      subject: "Message for PARAGON",
    }),
  },
  {
    id: "github",
    label: "GitHub",
    value: "Paragon-Engineering-Studio",
    href: "https://github.com/Paragon-Engineering-Studio",
    external: true,
    footer: true,
  },
];
