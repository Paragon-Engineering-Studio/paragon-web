"use client";

import type { ReactNode } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectFilters } from "@/components/projects/project-filters";
import { ProjectsBackground } from "@/components/projects/projects-background";
import { useProjectFilter } from "@/components/projects/use-project-filter";
import { Reveal } from "@/components/reveal";
import { PROJECTS } from "@/lib/projects";

export function ProjectsExperience({
  header,
  footer,
}: {
  header: ReactNode;
  footer: ReactNode;
}) {
  const {
    discipline,
    tag,
    visibleTags,
    visibleProjects,
    selectDiscipline,
    selectTag,
  } = useProjectFilter(PROJECTS);

  return (
    <>
      <ProjectsBackground tab={discipline} />
      <div className="site-fg" style={{ position: "relative", zIndex: 1 }}>
        {header}
        <Reveal
          id="projects"
          className="projects-main"
          style={{ padding: "80px 24px 120px", maxWidth: 1200, margin: "0 auto" }}
        >
          <div style={{ marginBottom: 48 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              <span className="gradient-text">Work</span>
            </p>
            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                margin: "0 0 16px",
                color: "#fff",
                maxWidth: 560,
                lineHeight: 1.1,
              }}
            >
              Projects from silicon
              <br />
              to screen.
            </h1>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                maxWidth: 480,
                margin: 0,
              }}
            >
              Boards, firmware, apps, and the products they become. Filter by discipline, then by
              the kind of work.
            </p>
          </div>

          <ProjectFilters
            discipline={discipline}
            tag={tag}
            visibleTags={visibleTags}
            onSelectDiscipline={selectDiscipline}
            onSelectTag={selectTag}
          />

          <div
            id="project-results"
            role="tabpanel"
            aria-labelledby={`project-tab-${discipline}`}
            className="project-results"
            key={`${discipline}-${tag ?? "all"}`}
          >
            {visibleProjects.length === 0 ? (
              <p className="project-empty">
                {PROJECTS.length === 0
                  ? "Real projects will land here one by one."
                  : "No projects match this filter."}
              </p>
            ) : (
              <div className="project-grid">
                {visibleProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </Reveal>
        {footer}
      </div>
    </>
  );
}
