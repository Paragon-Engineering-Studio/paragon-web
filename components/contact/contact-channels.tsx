"use client";

import { ContactIcon } from "@/components/contact/contact-icons";
import { CONTACTS } from "@/lib/contacts";

function openMailClient(href: string) {
  window.location.href = href;
}

export function ContactChannels({
  compact = false,
  only,
}: {
  compact?: boolean;
  only?: string[];
}) {
  const channels = only
    ? CONTACTS.filter((channel) => only.includes(channel.id))
    : CONTACTS;

  return (
    <div className={`contact-list${compact ? " is-compact" : ""}`}>
      {channels.map((channel) => (
        <a
          key={channel.id}
          className="contact-row"
          href={channel.href}
          {...(channel.external ? { target: "_blank", rel: "noreferrer" } : undefined)}
          {...(channel.id === "email"
            ? {
                onClick: (event) => {
                  event.preventDefault();
                  openMailClient(channel.href);
                },
              }
            : undefined)}
        >
          <span className="contact-icon">
            <ContactIcon id={channel.id} />
          </span>
          <span className="contact-copy">
            <span className="contact-label">{channel.label}</span>
            <span className="contact-value">{channel.value}</span>
          </span>
          {compact ? null : (
            <span className="contact-go" aria-hidden>
              →
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
