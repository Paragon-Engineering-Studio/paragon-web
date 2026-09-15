import Link from "next/link";
import { Reveal } from "@/components/reveal";
import {
  GradesDemo,
  MaterialsDemo,
} from "@/components/projects/teacherslab/teacherslab-demos";
import { WebStill } from "@/components/projects/choropoulos/web-still";
import {
  TEACHERSLAB,
  TEACHERSLAB_HERO,
  TEACHERSLAB_SHOTS,
} from "@/lib/teacherslab";
import { TAG_LABELS, type Project } from "@/lib/projects";

export function TeachersLabExperience({ project }: { project: Project }) {
  return (
    <article className="adeon-page" data-project="teacherslab">
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
            href={TEACHERSLAB.url}
            className="btn-hero-solid"
            target="_blank"
            rel="noreferrer"
          >
            Visit the site
          </a>
        </div>
        <div className="adeon-hero-media is-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={TEACHERSLAB_HERO.src}
            alt={TEACHERSLAB_HERO.alt}
            className="adeon-hero-img"
          />
        </div>
      </Reveal>

      <Reveal className="adeon-step">
        <div className="adeon-step-copy">
          <p className="adeon-step-n">
            <span className="gradient-text">01</span>
          </p>
          <h2>The classroom</h2>
          <p>
            Teachers and parents need more than scattered PDFs and forgotten
            bookmarks. TeachersLab is a digital space for the Greek primary
            education community — structured material, ready for the classroom
            or the kitchen table.
          </p>
        </div>
        <WebStill
          src={TEACHERSLAB_SHOTS.grades.src}
          alt={TEACHERSLAB_SHOTS.grades.alt}
        />
      </Reveal>

      <Reveal className="adeon-step is-flip">
        <div className="adeon-step-copy">
          <p className="adeon-step-n">
            <span className="gradient-text">02</span>
          </p>
          <h2>By grade</h2>
          <p>
            From kindergarten through every year of primary school — pick the
            level, find what fits. No digging through folders that were never
            meant to be folders.
          </p>
        </div>
        <GradesDemo />
      </Reveal>

      <Reveal className="web-break">
        <WebStill
          src={TEACHERSLAB_SHOTS.services.src}
          alt={TEACHERSLAB_SHOTS.services.alt}
          className="is-wide"
        />
        <p className="web-break-cap">
          Pick the level — from kindergarten through every year of primary
          school, each with its own curated material.
        </p>
      </Reveal>

      <Reveal className="adeon-step">
        <div className="adeon-step-copy">
          <p className="adeon-step-n">
            <span className="gradient-text">03</span>
          </p>
          <h2>The material</h2>
          <p>
            Language and maths worksheets, learning fairy tales that teach
            values through story, and step-by-step DIY for little inventors.
            Content that earns its place on the page.
          </p>
        </div>
        <MaterialsDemo />
      </Reveal>

      <Reveal className="adeon-step is-flip">
        <div className="adeon-step-copy">
          <p className="adeon-step-n">
            <span className="gradient-text">04</span>
          </p>
          <h2>A place to reach out</h2>
          <p>
            When someone has a question — a teacher planning next week, a parent
            looking for something to do on a rainy afternoon — they should not
            have to hunt for a way to ask.
          </p>
        </div>
        <WebStill
          src={TEACHERSLAB_SHOTS.contact.src}
          alt={TEACHERSLAB_SHOTS.contact.alt}
        />
      </Reveal>
    </article>
  );
}
