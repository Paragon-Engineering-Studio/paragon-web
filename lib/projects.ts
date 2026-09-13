export const DISCIPLINES = ["software", "hardware", "products"] as const;
export type Discipline = (typeof DISCIPLINES)[number];
export type DisciplineTab = "all" | Discipline;

export const PROJECT_TAGS = [
  "apps",
  "web-apps",
  "websites",
  "pcb-embedded",
  "agriculture",
  "other",
] as const;
export type ProjectTag = (typeof PROJECT_TAGS)[number];

export type Project = {
  id: string;
  title: string;
  description: string;
  disciplines: Discipline[];
  tags: ProjectTag[];
  accent: string;
  image?: string;
};

export const DISCIPLINE_TABS: { id: DisciplineTab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "software", label: "Software" },
  { id: "hardware", label: "Hardware" },
  { id: "products", label: "Products" },
];

export const TAG_LABELS: Record<ProjectTag, string> = {
  apps: "Apps",
  "web-apps": "Web Apps",
  websites: "Websites",
  "pcb-embedded": "PCB/Embedded",
  agriculture: "Agriculture",
  other: "Other",
};

export const PROJECTS: Project[] = [
  {
    id: "adeon",
    title: "Adeon",
    description:
      "App that automates downloading licenses from TEE’s Πληροφοριακό Σύστημα Ε-Άδειες, files them into folders, and keeps a history of every run.",
    disciplines: ["software"],
    tags: ["apps"],
    accent: "#4F6BFF",
    image: "/projects/adeon/running.png",
  },
  {
    id: "arcus",
    title: "Arcus",
    description:
      "App that automates Irida — downloads the files, sorts them into folders, assigns entries to people, and keeps a history of every run.",
    disciplines: ["software"],
    tags: ["apps"],
    accent: "#8B5CF6",
    image: "/projects/arcus/card.png",
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}

export function filterProjects(
  projects: Project[],
  discipline: DisciplineTab,
  tag: ProjectTag | null,
): Project[] {
  return projects.filter((project) => {
    const matchesDiscipline =
      discipline === "all" || project.disciplines.includes(discipline);
    const matchesTag = tag === null || project.tags.includes(tag);
    return matchesDiscipline && matchesTag;
  });
}

export function tagsForDiscipline(
  projects: Project[],
  discipline: DisciplineTab,
): ProjectTag[] {
  const scoped =
    discipline === "all"
      ? projects
      : projects.filter((project) => project.disciplines.includes(discipline));

  const present = new Set<ProjectTag>();
  for (const project of scoped) {
    for (const tag of project.tags) present.add(tag);
  }

  return PROJECT_TAGS.filter((tag) => present.has(tag));
}
