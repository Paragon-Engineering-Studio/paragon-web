import { ContactChannels } from "@/components/contact/contact-channels";
import { Reveal } from "@/components/reveal";

export function ContactExperience() {
  return (
    <>
      <Reveal className="services-hero">
        <p className="services-kicker">
          <span className="gradient-text">Contact</span>
        </p>
        <h1>
          Write us.
          <br />
          Directly.
        </h1>
        <p className="services-hero-lead">
          Email for a conversation, GitHub for the work — both go to the studio.
        </p>
      </Reveal>

      <Reveal>
        <ContactChannels />
      </Reveal>
    </>
  );
}
