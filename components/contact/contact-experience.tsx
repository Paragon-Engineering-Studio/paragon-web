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
          Any channel.
        </h1>
        <p className="services-hero-lead">
          Email, WhatsApp, Instagram — pick the one you already use. We read all of them.
        </p>
      </Reveal>

      <Reveal>
        <ContactChannels />
      </Reveal>
    </>
  );
}
