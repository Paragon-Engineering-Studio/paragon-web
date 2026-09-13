import type { Metadata } from "next";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { ServicesBackground } from "@/components/services/services-background";
import { ServicesExperience } from "@/components/services/services-experience";

export const metadata: Metadata = {
  title: "Services — PARAGON",
  description:
    "Software, custom hardware, full-stack products, and legacy revival — if you can describe it, PARAGON can build it.",
};

export default function ServicesPage() {
  return (
    <div
      style={{
        background: "#080808",
        minHeight: "100vh",
        color: "#f0f0f0",
        position: "relative",
      }}
    >
      <ServicesBackground />
      <div className="site-fg" style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <ServicesExperience />
        <Footer />
      </div>
    </div>
  );
}
