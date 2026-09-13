import Link from "next/link";
import { ContactChannels } from "@/components/contact/contact-channels";
import { Reveal } from "@/components/reveal";
import { ABOUT } from "@/lib/about";

export function AboutExperience() {
  return (
    <>
      <Reveal className="services-hero about-hero">
        <div className="about-hero-copy">
          <p className="services-kicker">
            <span className="gradient-text">{ABOUT.kicker}</span>
          </p>
          <h1>
            {ABOUT.title[0]}
            <br />
            {ABOUT.title[1]}
          </h1>
          <p className="services-hero-lead">{ABOUT.lead}</p>
          <div className="services-hero-actions">
            <Link href="/#get-started" className="btn-hero-solid">
              Start a project →
            </Link>
            <Link href="/projects" className="btn-hero-outline">
              See the work
            </Link>
          </div>
        </div>
        <aside className="about-contacts">
          <p className="services-kicker">
            <span className="gradient-text">Contact</span>
          </p>
          <ContactChannels compact />
        </aside>
      </Reveal>

      <Reveal className="about-who">
        <p className="services-kicker">
          <span className="gradient-text">{ABOUT.who.title}</span>
        </p>
        <p className="about-who-body">{ABOUT.who.body}</p>
      </Reveal>

      <Reveal className="about-split">
        <section>
          <p className="services-kicker">
            <span className="gradient-text">{ABOUT.how.title}</span>
          </p>
          <p className="about-how-body">{ABOUT.how.body}</p>
        </section>
        <section>
          <p className="services-kicker">
            <span className="gradient-text">Principles</span>
          </p>
          <ol className="about-principles">
            {ABOUT.principles.map((principle) => (
              <li key={principle.title}>
                <strong>{principle.title}</strong>
                <span>{principle.body}</span>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal className="services-cta">
        <div>
          <p className="services-kicker">
            <span className="gradient-text">Next</span>
          </p>
          <h2>If that is how you want to work, start here.</h2>
          <p>Tell us what you need. We will tell you how we would build it.</p>
        </div>
        <Link href="/contact" className="btn-hero-solid">
          Talk to us →
        </Link>
      </Reveal>
    </>
  );
}
