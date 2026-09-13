import Link from "next/link";
import { Reveal } from "@/components/reveal";
import {
  LightsDemo,
  MixDemo,
} from "@/components/projects/choropoulos/choropoulos-demos";
import { WebStill } from "@/components/projects/choropoulos/web-still";
import {
  CHOROPOULOS,
  CHOROPOULOS_HERO,
  CHOROPOULOS_SHOTS,
} from "@/lib/choropoulos";
import { TAG_LABELS, type Project } from "@/lib/projects";

export function ChoropoulosExperience({ project }: { project: Project }) {
  return (
    <article className="adeon-page">
      <Reveal className="adeon-hero">
        <Link href="/projects" className="adeon-back">
          ← Projects
        </Link>
        <p className="services-kicker">
          <span className="gradient-text">Software · Website</span>
        </p>
        <h1>{project.title}</h1>
        <p className="adeon-hero-lead">{project.description}</p>
        <div className="adeon-hero-tags">
          {project.disciplines.map((discipline) => (
            <span key={discipline} className="tech-pill">
              {discipline}
            </span>
          ))}
          {project.tags.map((tag) => (
            <span key={tag} className="tech-pill">
              {TAG_LABELS[tag]}
            </span>
          ))}
        </div>
        <div className="web-hero-actions">
          <a
            href={CHOROPOULOS.url}
            className="btn-hero-solid"
            target="_blank"
            rel="noreferrer"
          >
            Visit the site
          </a>
          <span className="web-hero-url">djchoropoulos.com</span>
        </div>
        <div className="adeon-hero-media is-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CHOROPOULOS_HERO.src}
            alt={CHOROPOULOS_HERO.alt}
            className="adeon-hero-img"
          />
        </div>
      </Reveal>

      <Reveal className="adeon-step">
        <div className="adeon-step-copy">
          <p className="adeon-step-n">
            <span className="gradient-text">01</span>
          </p>
          <h2>The thought</h2>
          <p>
            {CHOROPOULOS.person} needed a quiet room on the internet. Not another
            feed that scrolls away — a page that holds the name, the work, and
            the number. Minimal, modern, and still. The nights stay loud. The
            site stays put.
          </p>
        </div>
        <WebStill
          src={CHOROPOULOS_SHOTS.about.src}
          alt={CHOROPOULOS_SHOTS.about.alt}
        />
      </Reveal>

      <Reveal className="adeon-step is-flip">
        <div className="adeon-step-copy">
          <p className="adeon-step-n">
            <span className="gradient-text">02</span>
          </p>
          <h2>The mix</h2>
          <p>
            The craft is DJing. Two decks, a room, and the next track already in
            the headphones. Read the floor. Keep the night moving. The site is
            in Greek. The job is the same everywhere.
          </p>
        </div>
        <MixDemo />
      </Reveal>

      <Reveal className="web-break">
        <WebStill
          src={CHOROPOULOS_SHOTS.services.src}
          alt={CHOROPOULOS_SHOTS.services.alt}
          className="is-wide"
        />
        <p className="web-break-cap">
          Weddings, baptisms, parties, karaoke, live music — the offerings sit
          on one page, not across five social profiles.
        </p>
      </Reveal>

      <Reveal className="adeon-step">
        <div className="adeon-step-copy">
          <p className="adeon-step-n">
            <span className="gradient-text">03</span>
          </p>
          <h2>The lights</h2>
          <p>
            Light is the other half. Beams, color, and haze that turn a hall
            into a room people remember. The illustrations are the work — not a
            drawing of the website.
          </p>
        </div>
        <LightsDemo />
      </Reveal>

      <Reveal className="adeon-step is-flip">
        <div className="adeon-step-copy">
          <p className="adeon-step-n">
            <span className="gradient-text">04</span>
          </p>
          <h2>A place people can find</h2>
          <p>
            Phone, email, a pin in {CHOROPOULOS.place}. When someone wants a
            wedding or a baptism, they should not have to hunt a story that
            already disappeared.
          </p>
        </div>
        <WebStill
          src={CHOROPOULOS_SHOTS.contact.src}
          alt={CHOROPOULOS_SHOTS.contact.alt}
        />
      </Reveal>
    </article>
  );
}
