import { AdeonDemo } from "@/components/projects/adeon/adeon-demos";
import { CaseExperience } from "@/components/projects/case-study";
import { ADEON_GALLERY, ADEON_HERO, ADEON_STEPS } from "@/lib/adeon";
import type { Project } from "@/lib/projects";

export function AdeonExperience({ project }: { project: Project }) {
  return (
    <CaseExperience
      project={project}
      hero={ADEON_HERO}
      steps={ADEON_STEPS}
      gallery={ADEON_GALLERY}
      mark="ADE"
      renderDemo={(id) => <AdeonDemo id={id as "date" | "download" | "history"} />}
    />
  );
}
