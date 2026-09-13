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
    id: "fieldsense",
    title: "FieldSense Monitor",
    description:
      "Soil and microclimate sensing board for row crops — schematic to enclosure, with LoRa uplink and a grower-facing readout.",
    disciplines: ["hardware", "products"],
    tags: ["pcb-embedded", "agriculture"],
    accent: "#4F6BFF",
  },
  {
    id: "paragon-console",
    title: "Paragon Console",
    description:
      "Internal engineering dashboard for boards, firmware, and deploys. One view across silicon, CI, and field units.",
    disciplines: ["software"],
    tags: ["web-apps"],
    accent: "#8B5CF6",
  },
  {
    id: "studio-site",
    title: "Studio Marketing Site",
    description:
      "The public face of the studio — performance-first pages, case studies, and a contact flow that actually gets used.",
    disciplines: ["software"],
    tags: ["websites"],
    accent: "#61DAFB",
  },
  {
    id: "harvestlink",
    title: "HarvestLink",
    description:
      "Mobile ops app for farm crews: tasking, irrigation windows, and live status from in-field controllers.",
    disciplines: ["software", "products"],
    tags: ["apps", "agriculture"],
    accent: "#34D399",
  },
  {
    id: "drivecore",
    title: "DriveCore",
    description:
      "Four-layer STM32 motor driver with current sensing, gate-drive protection, and a FreeRTOS control loop.",
    disciplines: ["hardware"],
    tags: ["pcb-embedded"],
    accent: "#F46623",
  },
  {
    id: "aqualine",
    title: "AquaLine Controller",
    description:
      "Irrigation product: valve driver PCB, weather-aware firmware, and a cloud schedule that farmers actually keep.",
    disciplines: ["hardware", "products"],
    tags: ["pcb-embedded", "agriculture"],
    accent: "#2496ED",
  },
  {
    id: "bay-inventory",
    title: "Bay Inventory",
    description:
      "Progressive web app for shop-floor parts, kits, and serialized boards — offline-capable, barcode first.",
    disciplines: ["software"],
    tags: ["web-apps", "apps"],
    accent: "#A78BFA",
  },
  {
    id: "jigforge",
    title: "JigForge",
    description:
      "Custom bed-of-nails fixture and test firmware for a production run. Not a product — the thing that makes the product ship.",
    disciplines: ["hardware"],
    tags: ["other"],
    accent: "#888888",
  },
  {
    id: "orbit-fleet",
    title: "Orbit Fleet",
    description:
      "Device fleet console: provisioning, OTA, and health for a family of connected controllers in the field.",
    disciplines: ["software", "products"],
    tags: ["web-apps"],
    accent: "#4F6BFF",
  },
  {
    id: "line-site",
    title: "LineSite",
    description:
      "Product microsite for a hardware SKU — specs, downloads, and a configurator that feeds the sales pipeline.",
    disciplines: ["software", "products"],
    tags: ["websites"],
    accent: "#8B5CF6",
  },
];

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
