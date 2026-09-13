"use client";

import { DemoStage } from "@/components/projects/adeon/adeon-demos";

function PullDemo() {
  return (
    <DemoStage demo="pull" app="arcus">
      <div className="arcus-pull">
        <div className="arcus-hub">
          <i className="arcus-ring" />
          <span className="arcus-hub-core" />
        </div>
        <div className="arcus-track">
          <span className="arcus-path" />
          <i className="arcus-bit arcus-bit-1" />
          <i className="arcus-bit arcus-bit-2" />
          <i className="arcus-bit arcus-bit-3" />
        </div>
        <div className="arcus-inbox">
          <span className="arcus-inbox-fill" />
        </div>
      </div>
    </DemoStage>
  );
}

function FileDemo() {
  return (
    <DemoStage demo="file" app="arcus">
      <div className="arcus-sort">
        <span className="arcus-drop arcus-drop-1" />
        <span className="arcus-drop arcus-drop-2" />
        <span className="arcus-drop arcus-drop-3" />
        <div className="arcus-bins">
          <div className="arcus-bin arcus-bin-1">
            <i className="arcus-bin-tab" />
            <i className="arcus-bin-chip" />
          </div>
          <div className="arcus-bin arcus-bin-2">
            <i className="arcus-bin-tab" />
            <i className="arcus-bin-chip" />
          </div>
          <div className="arcus-bin arcus-bin-3">
            <i className="arcus-bin-tab" />
            <i className="arcus-bin-chip" />
          </div>
        </div>
      </div>
    </DemoStage>
  );
}

function AssignDemo() {
  return (
    <DemoStage demo="assign" app="arcus">
      <div className="arcus-assign">
        <div className="arcus-deck">
          <i />
          <i />
          <i />
        </div>
        <span className="arcus-card arcus-card-1" />
        <span className="arcus-card arcus-card-2" />
        <span className="arcus-card arcus-card-3" />
        <div className="arcus-people">
          <span className="arcus-person">
            <b />
          </span>
          <span className="arcus-person">
            <b />
          </span>
          <span className="arcus-person">
            <b />
          </span>
        </div>
      </div>
    </DemoStage>
  );
}

function RunsDemo() {
  return (
    <DemoStage demo="runs" app="arcus">
      <div className="arcus-timeline">
        <span className="arcus-spine" />
        <div className="arcus-run arcus-run-1 is-new">
          <i />
          <em />
        </div>
        <div className="arcus-run arcus-run-2">
          <i />
          <em />
        </div>
        <div className="arcus-run arcus-run-3">
          <i />
          <em />
        </div>
        <div className="arcus-run arcus-run-4">
          <i />
          <em />
        </div>
      </div>
    </DemoStage>
  );
}

export function ArcusDemo({ id }: { id: "pull" | "file" | "assign" | "runs" }) {
  if (id === "pull") return <PullDemo />;
  if (id === "file") return <FileDemo />;
  if (id === "assign") return <AssignDemo />;
  return <RunsDemo />;
}
