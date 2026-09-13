import type { Metadata } from "next";
import { AboutExperience } from "@/components/about/about-experience";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { SoftMist } from "@/components/soft-mist";

export const metadata: Metadata = {
  title: "About — PARAGON",
  description:
    "PARAGON is an engineering studio. One team from the board to the screen — software, custom hardware, and the products that need both.",
};

export default function AboutPage() {
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
        <AboutExperience />
        <Footer />
      </div>
    </div>
  );
}
