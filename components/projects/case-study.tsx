import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CaseGallery, type CaseShot } from "@/components/projects/case-gallery";
import { TAG_LABELS, type Project } from "@/lib/projects";

export type CaseStep = {
  id: string;
  n: string;
  title: string;
  body: string;
};

export function CaseExperience({
  project,
  hero,
  steps,
  gallery,
  mark,
  renderDemo,
}: {
  project: Project;
  hero: { src: string | null; alt: string };
  steps: readonly CaseStep[];
  gallery: readonly CaseShot[];
  mark: string;
  renderDemo: (id: string) => ReactNode;
}) {
  return (
    <article className="adeon-page">
      <Reveal className="adeon-hero">
        <Link href="/projects" className="adeon-back">
          ← Projects
        </Link>
        <p className="services-kicker">
          <span className="gradient-text">Software · App</span>
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

        <div className="adeon-hero-media">
          {hero.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={hero.src} alt={hero.alt} className="adeon-hero-img" />
          ) : (
            <div className="adeon-hero-ph">
              <span className="adeon-hero-ph-mark">{mark}</span>
              <span>Hero image coming soon</span>
            </div>
          )}
        </div>
      </Reveal>

      {steps.map((step, index) => (
        <Reveal
          key={step.n}
          className={`adeon-step${index % 2 === 1 ? " is-flip" : ""}`}
        >
          <div className="adeon-step-copy">
            <p className="adeon-step-n">
              <span className="gradient-text">{step.n}</span>
            </p>
            <h2>{step.title}</h2>
            <p>{step.body}</p>
          </div>
          {renderDemo(step.id)}
        </Reveal>
      ))}

      <Reveal className="adeon-gallery">
        <div className="adeon-gallery-head">
          <p className="services-kicker">
            <span className="gradient-text">From the app</span>
          </p>
          <h2>Screenshots</h2>
          <p>
            {gallery.some((shot) => shot.src)
              ? "Frames keep moving. Click any one to open it."
              : "Frames keep moving. Screenshots land here next."}
          </p>
        </div>
        <CaseGallery items={gallery} mark={mark} label={`${project.title} screenshots`} />
      </Reveal>
    </article>
  );
}
