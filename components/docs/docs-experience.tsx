import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function DocsExperience() {
  return (
    <>
      <Reveal className="services-hero">
        <p className="services-kicker">
          <span className="gradient-text">Docs</span>
        </p>
        <h1>
          Documentation
          <br />
          for the stack.
        </h1>
        <p className="services-hero-lead">
          Guides, references, and notes from the studio — written as we ship.
        </p>
      </Reveal>

      <Reveal className="docs-empty-wrap">
        <div className="docs-empty-stage" aria-hidden="true">
          <div className="docs-empty-glow" />
          <div className="docs-empty-stack">
            <div className="docs-empty-sheet docs-empty-sheet-3" />
            <div className="docs-empty-sheet docs-empty-sheet-2" />
            <div className="docs-empty-sheet docs-empty-sheet-1">
              <div className="docs-empty-bar">
                <i />
                <i />
                <i />
              </div>
              <div className="docs-empty-lines">
                <i className="docs-line docs-line-1" />
                <i className="docs-line docs-line-2" />
                <i className="docs-line docs-line-3" />
                <i className="docs-line docs-line-4" />
                <i className="docs-line docs-line-5" />
              </div>
              <span className="docs-empty-cursor" />
            </div>
          </div>
          <div className="docs-empty-orbit">
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="docs-empty-copy">
          <h2>Nothing here yet</h2>
          <p>
            The first pages are still being drafted — architecture notes, setup guides,
            and project walkthroughs. Check back soon, or browse the work that is already
            live.
          </p>
          <Link href="/projects" className="btn-hero-outline">
            See projects →
          </Link>
        </div>
      </Reveal>
    </>
  );
}
