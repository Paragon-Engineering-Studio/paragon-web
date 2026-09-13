import { Features } from "@/components/home/features";
import { Footer } from "@/components/home/footer";
import { GetStarted } from "@/components/home/get-started";
import { Hero } from "@/components/home/hero";
import { Infrastructure } from "@/components/home/infrastructure";
import { LogoStrip } from "@/components/home/logo-strip";
import { Navbar } from "@/components/home/navbar";
import { PcbBackground } from "@/components/home/pcb-background";

export default function Home() {
  return (
    <div
      style={{
        background: "#080808",
        minHeight: "100vh",
        color: "#f0f0f0",
        position: "relative",
      }}
    >
      <PcbBackground />
      <div className="site-fg" style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Features />
        <Infrastructure />
        <GetStarted />
        <LogoStrip />
        <Footer />
      </div>
    </div>
  );
}
