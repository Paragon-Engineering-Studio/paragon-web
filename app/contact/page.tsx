import type { Metadata } from "next";
import { ContactExperience } from "@/components/contact/contact-experience";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { SoftMist } from "@/components/soft-mist";

export const metadata: Metadata = {
  title: "Contact — PARAGON",
  description:
    "Write PARAGON — email, WhatsApp, Instagram, and the other channels we actually read.",
};

export default function ContactPage() {
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
        <ContactExperience />
        <Footer />
      </div>
    </div>
  );
}
