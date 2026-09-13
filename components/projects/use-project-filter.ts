"use client";

import { useMemo, useState } from "react";
import {
  filterProjects,
  tagsForDiscipline,
  type DisciplineTab,
  type Project,
  type ProjectTag,
} from "@/lib/projects";

export function useProjectFilter(projects: Project[]) {
  const [discipline, setDiscipline] = useState<DisciplineTab>("all");
  const [tag, setTag] = useState<ProjectTag | null>(null);

  const visibleTags = useMemo(
    () => tagsForDiscipline(projects, discipline),
    [projects, discipline],
  );

  const visibleProjects = useMemo(
    () => filterProjects(projects, discipline, tag),
    [projects, discipline, tag],
  );

  const selectDiscipline = (next: DisciplineTab) => {
    setDiscipline(next);
    setTag(null);
  };

  const selectTag = (next: ProjectTag) => {
    setTag((current) => (current === next ? null : next));
  };

  return {
    discipline,
    tag,
    visibleTags,
    visibleProjects,
    selectDiscipline,
    selectTag,
  };
}
