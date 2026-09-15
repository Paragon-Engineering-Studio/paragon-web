"use client";

import { useEffect, useRef, useState } from "react";

function useInViewPlay() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setPlay(true);
      },
      { threshold: 0.4 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, play };
}

function Stage({
  demo,
  children,
}: {
  demo: "grades" | "materials";
  children: React.ReactNode;
}) {
  const { ref, play } = useInViewPlay();

  return (
    <div
      ref={ref}
      className={`adeon-demo-stage tl-stage-wrap${play ? " is-playing" : ""}`}
      data-demo={demo}
      data-app="teacherslab"
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

function Cursor() {
  return (
    <span className="tl-grade-cursor">
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M4 3.2 20 14.2l-6.2.3 3.4 6.6-2.6 1.3-3.4-6.5L4 20.4V3.2z" />
      </svg>
    </span>
  );
}

const GRADES = [
  { id: "k", label: "Νηπιαγωγείο", color: "#F472B6" },
  { id: "a", label: "Α' Δημοτικού", color: "#60A5FA" },
  { id: "b", label: "Β' Δημοτικού", color: "#FB923C" },
  { id: "c", label: "Γ' Δημοτικού", color: "#2DD4BF" },
] as const;

const MATERIALS = [
  { id: "sheet", label: "Φύλλα", tag: "Νέο", color: "#93C5FD" },
  { id: "story", label: "Παραμύθια", tag: "Δημοφ.", color: "#FDBA74" },
  { id: "diy", label: "DIY", tag: "Δημιουργία", color: "#C4B5FD" },
] as const;

export function GradesDemo() {
  return (
    <Stage demo="grades">
      <div className="tl-grades">
        <p className="tl-demo-kicker">Πλοήγηση ανά τάξη</p>
        <div className="tl-grade-grid">
          {GRADES.map((grade, i) => (
            <div
              key={grade.id}
              className={`tl-grade-card tl-grade-${i + 1}`}
              style={{ "--tl-accent": grade.color } as React.CSSProperties}
            >
              <i className="tl-grade-thumb" />
              <span className="tl-grade-label">{grade.label}</span>
              <i className="tl-grade-arrow" />
            </div>
          ))}
          <Cursor />
        </div>
      </div>
    </Stage>
  );
}

export function MaterialsDemo() {
  return (
    <Stage demo="materials">
      <div className="tl-materials">
        <div className="tl-material-row">
          {MATERIALS.map((item, i) => (
            <div
              key={item.id}
              className={`tl-material-card tl-material-${i + 1}`}
              style={{ "--tl-accent": item.color } as React.CSSProperties}
            >
              <span className="tl-material-tag">{item.tag}</span>
              <i className="tl-material-img" />
              <span className="tl-material-label">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="tl-material-search">
          <i className="tl-search-bar" />
          <i className="tl-search-btn" />
        </div>
      </div>
    </Stage>
  );
}
