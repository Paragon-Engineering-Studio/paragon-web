export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  points: string[];
  accent?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "software",
    eyebrow: "Software",
    title: "Web, apps, and automation",
    lead: "Anything that lives on a screen or in a workflow. Sites, products, internal tools, and the software that runs the rest of the business.",
    points: ["Websites and marketing sites", "Web apps and dashboards", "Desktop and mobile applications", "Automation and operations software"],
  },
  {
    id: "hardware",
    eyebrow: "Hardware",
    title: "Custom PCBs and devices",
    lead: "Boards and hardware built for the job — not a catalog part with a sticker on it. Schematic to fabrication, enclosure to field unit.",
    points: ["Custom PCB design and layout", "Embedded controllers and sensors", "Prototypes through production", "Hardware for farms, shops, and products"],
  },
  {
    id: "full-stack",
    eyebrow: "Full-stack products",
    title: "The board and the software, together",
    lead: "When the thing in the field and the thing on the screen have to be one product. We design both sides so they ship as a system, not two vendors waving at each other.",
    points: ["Device plus cloud or app in one engagement", "Firmware, uplink, and the operator interface", "One team from silicon to screen"],
    accent: true,
  },
  {
    id: "revival",
    eyebrow: "Legacy revival",
    title: "Restore old codebases",
    lead: "The project still matters. The repo is a mess, the last engineer left, or it never quite shipped. We read what is there, make it build, and bring it back to life.",
    points: ["Revive abandoned or inherited projects", "Modernize stacks that still earn money", "Document, stabilize, then extend"],
  },
];
