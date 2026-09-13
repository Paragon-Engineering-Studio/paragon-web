"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

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

function Cursor() {
  return (
    <span className="adeon-cursor">
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M4 3.2 20 14.2l-6.2.3 3.4 6.6-2.6 1.3-3.4-6.5L4 20.4V3.2z" />
      </svg>
    </span>
  );
}

function Monitor({ children }: { children: ReactNode }) {
  return (
    <div className="adeon-imac">
      <div className="adeon-imac-bezel">
        <div className="adeon-imac-screen">{children}</div>
      </div>
      <div className="adeon-imac-chin" />
      <div className="adeon-imac-neck" />
      <div className="adeon-imac-foot" />
    </div>
  );
}

function FlatBrowser({ children }: { children: ReactNode }) {
  return (
    <div className="adeon-flat">
      <div className="adeon-flat-bar">
        <i />
        <i />
        <i />
        <span className="adeon-flat-url" />
      </div>
      <div className="adeon-flat-body">{children}</div>
    </div>
  );
}

export function DemoStage({
  demo,
  app,
  children,
}: {
  demo: string;
  app?: string;
  children: ReactNode;
}) {
  const { ref, play } = useInViewPlay();

  return (
    <div
      ref={ref}
      className={`adeon-demo-stage${play ? " is-playing" : ""}`}
      data-demo={demo}
      data-app={app}
      aria-hidden="true"
    >
      <div className="adeon-demo-zoom">
        <Monitor>{children}</Monitor>
        <Cursor />
      </div>
    </div>
  );
}

function DateDemo() {
  return (
    <DemoStage demo="date">
      <FlatBrowser>
        <div className="adeon-flat-field" />
        <div className="adeon-flat-cal">
          <span className="adeon-flat-cal-head" />
          <div className="adeon-flat-cal-grid">
            {Array.from({ length: 21 }, (_, i) => (
              <i key={i} className={i === 10 ? "is-pick" : undefined} />
            ))}
          </div>
        </div>
      </FlatBrowser>
    </DemoStage>
  );
}

function DownloadDemo() {
  return (
    <DemoStage demo="download">
      <div className="adeon-flat-split">
        <FlatBrowser>
          <div className="adeon-flat-lines">
            <i />
            <i />
            <i />
          </div>
          <span className="adeon-flat-sheet adeon-flat-sheet-1" />
          <span className="adeon-flat-sheet adeon-flat-sheet-2" />
          <span className="adeon-flat-sheet adeon-flat-sheet-3" />
        </FlatBrowser>
        <div className="adeon-flat-folder">
          <span className="adeon-flat-folder-tab" />
          <span className="adeon-flat-folder-body" />
        </div>
      </div>
    </DemoStage>
  );
}

function HistoryDemo() {
  return (
    <DemoStage demo="history">
      <FlatBrowser>
        <div className="adeon-flat-rows">
          <i className="is-new" />
          <i />
          <i />
          <i />
        </div>
      </FlatBrowser>
    </DemoStage>
  );
}

export function AdeonDemo({ id }: { id: "date" | "download" | "history" }) {
  if (id === "date") return <DateDemo />;
  if (id === "download") return <DownloadDemo />;
  return <HistoryDemo />;
}
