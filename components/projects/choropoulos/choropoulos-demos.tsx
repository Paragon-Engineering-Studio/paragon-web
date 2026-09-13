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
  demo: "mix" | "lights";
  children: React.ReactNode;
}) {
  const { ref, play } = useInViewPlay();

  return (
    <div
      ref={ref}
      className={`adeon-demo-stage dj-stage-wrap${play ? " is-playing" : ""}`}
      data-demo={demo}
      data-app="choropoulos"
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function MixDemo() {
  return (
    <Stage demo="mix">
      <div className="dj-mix">
        <div className="dj-wave">
          {Array.from({ length: 18 }, (_, i) => (
            <i key={i} style={{ "--i": i } as React.CSSProperties} />
          ))}
        </div>
        <div className="dj-deck">
          <div className="dj-platter is-left">
            <i className="dj-ring" />
            <i className="dj-disc" />
            <i className="dj-label" />
            <i className="dj-arm" />
          </div>
          <div className="dj-mixer">
            <div className="dj-knobs">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="dj-faders">
              <span>
                <b className="dj-f1" />
              </span>
              <span>
                <b className="dj-f2" />
              </span>
              <span>
                <b className="dj-f3" />
              </span>
              <span>
                <b className="dj-f4" />
              </span>
            </div>
            <div className="dj-cross">
              <b />
            </div>
          </div>
          <div className="dj-platter is-right">
            <i className="dj-ring" />
            <i className="dj-disc" />
            <i className="dj-label" />
          </div>
        </div>
        <div className="dj-phones">
          <i />
          <i />
        </div>
      </div>
    </Stage>
  );
}

export function LightsDemo() {
  return (
    <Stage demo="lights">
      <div className="dj-lights">
        <div className="dj-haze" />
        <div className="dj-truss">
          <span className="dj-head dj-head-1">
            <i className="dj-can" />
            <i className="dj-beam" />
          </span>
          <span className="dj-head dj-head-2">
            <i className="dj-can" />
            <i className="dj-beam" />
          </span>
          <span className="dj-head dj-head-3">
            <i className="dj-can" />
            <i className="dj-beam" />
          </span>
        </div>
        <div className="dj-floor">
          <i />
          <i />
          <i />
        </div>
      </div>
    </Stage>
  );
}
