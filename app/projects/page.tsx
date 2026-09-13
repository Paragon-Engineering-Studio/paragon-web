import type { Metadata } from "next";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { ProjectsExperience } from "@/components/projects/projects-experience";

export const metadata: Metadata = {
  title: "Projects — PARAGON",
  description:
    "Software, hardware, and product work from PARAGON — web apps, embedded boards, and shipped systems.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProjectsPage() {
  return (
    <div
      style={{
        background: "#080808",
        minHeight: "100vh",
        color: "#f0f0f0",
        position: "relative",
      }}
    >
      <ProjectsExperience header={<Navbar />} footer={<Footer />} />
    </div>
  );
}
