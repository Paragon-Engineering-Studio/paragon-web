export const ADEON_HERO = {
  src: "/projects/adeon/hero.jpg",
  alt: "Adeon next to TEE’s Ε-Άδειες — waiting for a date sort",
};

export const ADEON_GALLERY = [
  {
    id: "settings",
    src: "/projects/adeon/settings.png",
    alt: "Adeon settings — connection, download folder, and run options",
  },
  {
    id: "home",
    src: "/projects/adeon/home.png",
    alt: "Adeon home — start a run and watch activity",
  },
  {
    id: "history",
    src: "/projects/adeon/history.png",
    alt: "Adeon history — previous runs and license results",
  },
  {
    id: "running",
    src: "/projects/adeon/running.png",
    alt: "Adeon mid-run — licenses downloading with a live activity log",
  },
] as const;

export const ADEON_STEPS = [
  {
    id: "date",
    n: "01",
    title: "Pick the date",
    body: "Choose the day Adeon should pull licenses for. That date is the start of every run.",
  },
  {
    id: "download",
    n: "02",
    title: "Download and file",
    body: "Adeon connects to TEE’s Ε-Άδειες service, downloads the licenses, and sorts them into folders.",
  },
  {
    id: "history",
    n: "03",
    title: "Keep the history",
    body: "Every run stays on record — when it ran, what came back, and whether it finished clean.",
  },
] as const;
