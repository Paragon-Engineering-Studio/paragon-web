import type { Metadata } from "next";
import { DocsExperience } from "@/components/docs/docs-experience";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { SoftMist } from "@/components/soft-mist";

export const metadata: Metadata = {
  title: "Docs — PARAGON",
  description: "PARAGON documentation — guides and references from the engineering studio.",
};

export default function DocsPage() {
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
        <DocsExperience />
        <Footer />
      </div>
    </div>
  );
}
