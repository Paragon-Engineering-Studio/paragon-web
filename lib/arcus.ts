export const ARCUS_HERO = {
  src: "/projects/arcus/hero.png",
  alt: "Arcus next to Irida — a run in progress",
};

export const ARCUS_GALLERY = [
  {
    id: "settings",
    src: "/projects/arcus/settings.png",
    alt: "Arcus settings — Irida login, download folder, and assignee names",
  },
  {
    id: "home",
    src: "/projects/arcus/home.png",
    alt: "Arcus home — a run in progress with a live activity log",
  },
  {
    id: "history",
    src: "/projects/arcus/history.png",
    alt: "Arcus history — previous runs and document counts",
  },
  {
    id: "run",
    src: "/projects/arcus/run.png",
    alt: "Arcus run detail — documents assigned to people",
  },
  {
    id: "irida",
    src: "/projects/arcus/irida.png",
    alt: "Arcus next to Irida while a download is running",
  },
] as const;

export const ARCUS_STEPS = [
  {
    id: "pull" as const,
    n: "01",
    title: "Pull from Irida",
    body: "Arcus connects to Irida and starts the download. One run, the files come in.",
  },
  {
    id: "file" as const,
    n: "02",
    title: "File into folders",
    body: "What lands is sorted — not a dump. Documents go into the folders they belong in.",
  },
  {
    id: "assign" as const,
    n: "03",
    title: "Assign the work",
    body: "Entries get handed to the right people. The run is not done until someone owns each one.",
  },
  {
    id: "runs" as const,
    n: "04",
    title: "Keep the history",
    body: "Every run stays on record — what came in, who it went to, and whether it finished clean.",
  },
] as const;
