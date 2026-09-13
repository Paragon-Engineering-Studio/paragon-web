import type { CSSProperties } from "react";
import { TAG_LABELS, type Project } from "@/lib/projects";

function ThumbArt({ accent, title, id }: { accent: string; title: string; id: string }) {
  const gridId = `project-thumb-grid-${id}`;

  return (
    <svg
      viewBox="0 0 400 220"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <rect width="400" height="220" fill="#101010" />
      <rect width="400" height="220" fill={`url(#${gridId})`} opacity="0.45" />
      <path
        d="M0 48 H400 M0 172 H400 M72 0 V220 M328 0 V220"
        stroke={accent}
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <path
        d="M24 24 H140 V86 H220"
        fill="none"
        stroke={accent}
        strokeOpacity="0.55"
        strokeWidth="1.6"
      />
      <path
        d="M376 196 H260 V134 H180"
        fill="none"
        stroke={accent}
        strokeOpacity="0.4"
        strokeWidth="1.6"
      />
      <rect
        x="168"
        y="78"
        width="64"
        height="64"
        rx="6"
        fill="#161616"
        stroke={accent}
        strokeOpacity="0.7"
        strokeWidth="1.4"
      />
      <text
        x="200"
        y="116"
        textAnchor="middle"
        fill={accent}
        fontSize="11"
        fontFamily="var(--font-sans)"
        fontWeight="700"
        letterSpacing="1.4"
      >
        {title.slice(0, 3).toUpperCase()}
      </text>
      <defs>
        <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" />
        </pattern>
      </defs>
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-hover project-card">
      <div className="project-thumb">
        <ThumbArt id={project.id} accent={project.accent} title={project.title} />
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-tags">
          {project.disciplines.map((discipline) => (
            <span
              key={discipline}
              className="tech-pill"
              style={{ "--pill-color": project.accent, textTransform: "capitalize" } as CSSProperties}
            >
              {discipline}
            </span>
          ))}
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="tech-pill"
              style={{ "--pill-color": project.accent } as CSSProperties}
            >
              {TAG_LABELS[tag]}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
