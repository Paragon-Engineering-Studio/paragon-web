import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdeonExperience } from "@/components/projects/adeon/adeon-experience";
import { ArcusExperience } from "@/components/projects/arcus/arcus-experience";
import { ChoropoulosExperience } from "@/components/projects/choropoulos/choropoulos-experience";
import { TeachersLabExperience } from "@/components/projects/teacherslab/teacherslab-experience";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { SoftMist } from "@/components/soft-mist";
import { getProject, PROJECTS } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project — PARAGON" };
  }

  return {
    title: `${project.title} — PARAGON`,
    description: project.description,
    robots: { index: false, follow: false },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <div
      style={{
        background: "#080808",
        minHeight: "100vh",
        color: "#f0f0f0",
        position: "relative",
      }}
    >
      <SoftMist />
      <div className="site-fg" style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        {slug === "adeon" ? (
          <AdeonExperience project={project} />
        ) : slug === "arcus" ? (
          <ArcusExperience project={project} />
        ) : slug === "choropoulos" ? (
          <ChoropoulosExperience project={project} />
        ) : slug === "teacherslab" ? (
          <TeachersLabExperience project={project} />
        ) : (
          notFound()
        )}
        <Footer />
      </div>
    </div>
  );
}
