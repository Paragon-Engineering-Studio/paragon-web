import { ContactIcon } from "@/components/contact/contact-icons";
import { CONTACTS } from "@/lib/contacts";

export function ContactChannels({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`contact-list${compact ? " is-compact" : ""}`}>
      {CONTACTS.map((channel) => (
        <a
          key={channel.id}
          className="contact-row"
          href={channel.href}
          {...(channel.external ? { target: "_blank", rel: "noreferrer" } : undefined)}
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
