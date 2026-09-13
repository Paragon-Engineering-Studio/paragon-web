import { ArcusDemo } from "@/components/projects/arcus/arcus-demos";
import { CaseExperience } from "@/components/projects/case-study";
import { ARCUS_GALLERY, ARCUS_HERO, ARCUS_STEPS } from "@/lib/arcus";
import type { Project } from "@/lib/projects";

export function ArcusExperience({ project }: { project: Project }) {
  return (
    <CaseExperience
      project={project}
      hero={ARCUS_HERO}
      steps={ARCUS_STEPS}
      gallery={ARCUS_GALLERY}
      mark="ARC"
      renderDemo={(id) => <ArcusDemo id={id as "pull" | "file" | "assign" | "runs"} />}
    />
  );
}
