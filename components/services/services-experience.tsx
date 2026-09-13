import type { ReactNode } from "react";
import Link from "next/link";
import { IconPCB, IconWeb } from "@/components/home/icons";
import { Reveal } from "@/components/reveal";
import { SERVICES, type Service } from "@/lib/services";

function IconRevive() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M14 18 V12 H34 V18"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.4"
      />
      <rect x="10" y="18" width="28" height="20" rx="2" stroke="rgba(255,255,255,0.2)" />
      <path
        d="M18 32 H22 M26 28 H32"
        stroke="rgba(79,107,255,0.75)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M30 10 A10 10 0 1 1 20 8"
        stroke="rgba(139,92,246,0.7)"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M20 8 L18 4 L24 7 Z" fill="rgba(139,92,246,0.8)" />
    </svg>
  );
}

function IconStack() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="8" y="10" width="20" height="16" rx="1.5" stroke="rgba(255,255,255,0.2)" />
      <rect x="20" y="22" width="20" height="16" rx="1.5" stroke="rgba(79,107,255,0.55)" />
      <path d="M12 16 H24 M12 20 H20" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
      <circle cx="30" cy="30" r="2.2" stroke="rgba(79,107,255,0.85)" />
      <path d="M28 30 H22" stroke="rgba(139,92,246,0.7)" strokeWidth="1.3" />
    </svg>
  );
}

const ICONS: Record<Service["id"], ReactNode> = {
  software: <IconWeb />,
  hardware: <IconPCB />,
  "full-stack": <IconStack />,
  revival: <IconRevive />,
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      id={service.id}
      className={`service-card${service.accent ? " is-accent" : ""}`}
    >
      <div className="service-card-icon">{ICONS[service.id]}</div>
      <p className="service-card-eyebrow">
        <span className="gradient-text">{service.eyebrow}</span>
      </p>
      <h2>{service.title}</h2>
      <p className="service-card-lead">{service.lead}</p>
      <ul>
        {service.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export function ServicesExperience() {
  const pair = SERVICES.filter((s) => s.id === "software" || s.id === "hardware");
  const compiled = SERVICES.find((s) => s.id === "full-stack");
  const revival = SERVICES.find((s) => s.id === "revival");

  return (
    <>
      <Reveal className="services-hero">
        <p className="services-kicker">
          <span className="gradient-text">Services</span>
        </p>
        <h1>
          You describe it.
          <br />
          We <span className="gradient-text">build it</span>.
        </h1>
        <p className="services-hero-lead">
          A site, a board, a factory tool, a product that does not exist yet — if you can picture
          it, we can engineer it. Software, hardware, or both in one team.
        </p>
        <div className="services-hero-actions">
          <Link href="/#get-started" className="btn-hero-solid">
            Start a project →
          </Link>
          <Link href="/projects" className="btn-hero-outline">
            See the work
          </Link>
        </div>
      </Reveal>

      <Reveal className="services-grid-wrap">
        <div className="services-pair">
          {pair.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        {compiled ? <ServiceCard service={compiled} /> : null}
        {revival ? <ServiceCard service={revival} /> : null}
      </Reveal>

      <Reveal className="services-cta">
        <div>
          <p className="services-kicker">
            <span className="gradient-text">Next</span>
          </p>
          <h2>Bring the idea. We take it from there.</h2>
          <p>
            Tell us what you need — a new product, a board, a rewrite of something that still
            matters. We will tell you how we would build it.
          </p>
        </div>
        <Link href="/contact" className="btn-hero-solid">
          Talk to us →
        </Link>
      </Reveal>
    </>
  );
}
