"use client";

import type { ReactNode } from "react";
import type { DisciplineTab } from "@/lib/projects";
import { useScrollFill } from "@/lib/use-scroll-fill";
import { AllGeometry } from "@/components/projects/backgrounds/all-geometry";
import { HardwarePcb } from "@/components/projects/backgrounds/hardware-pcb";
import { ProductsAssembly } from "@/components/projects/backgrounds/products-assembly";
import { SoftwareMatrix } from "@/components/projects/backgrounds/software-matrix";

const SCENES: Record<DisciplineTab, { className: string; node: ReactNode }> = {
  all: { className: "projects-bg-all", node: <AllGeometry /> },
  software: { className: "projects-bg-software", node: <SoftwareMatrix /> },
  hardware: { className: "projects-bg-hardware", node: <HardwarePcb /> },
  products: { className: "projects-bg-products", node: <ProductsAssembly /> },
};

export function ProjectsBackground({ tab }: { tab: DisciplineTab }) {
  const ref = useScrollFill<HTMLDivElement>();
  const scene = SCENES[tab];

  return (
    <div ref={ref} className={`pcb-bg projects-bg ${scene.className}`} aria-hidden="true">
      <div key={tab} className="projects-bg-scene">
        {scene.node}
      </div>
    </div>
  );
}
