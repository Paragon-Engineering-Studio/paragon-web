"use client";

import type { KeyboardEvent } from "react";
import {
  DISCIPLINE_TABS,
  TAG_LABELS,
  type DisciplineTab,
  type ProjectTag,
} from "@/lib/projects";

type ProjectFiltersProps = {
  discipline: DisciplineTab;
  tag: ProjectTag | null;
  visibleTags: ProjectTag[];
  onSelectDiscipline: (discipline: DisciplineTab) => void;
  onSelectTag: (tag: ProjectTag) => void;
};

export function ProjectFilters({
  discipline,
  tag,
  visibleTags,
  onSelectDiscipline,
  onSelectTag,
}: ProjectFiltersProps) {
  const activeIndex = DISCIPLINE_TABS.findIndex((tab) => tab.id === discipline);

  const moveTo = (index: number) => {
    const tab = DISCIPLINE_TABS[index];
    if (!tab) return;
    onSelectDiscipline(tab.id);
    requestAnimationFrame(() => {
      document.getElementById(`project-tab-${tab.id}`)?.focus();
    });
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = DISCIPLINE_TABS.length - 1;
    let next = activeIndex;

    if (event.key === "ArrowRight") next = activeIndex === last ? 0 : activeIndex + 1;
    else if (event.key === "ArrowLeft") next = activeIndex === 0 ? last : activeIndex - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    moveTo(next);
  };

  return (
    <div className="project-filters">
      <div
        role="tablist"
        aria-label="Project discipline"
        className="project-tablist"
      >
        {DISCIPLINE_TABS.map((tab) => {
          const selected = tab.id === discipline;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`project-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls="project-results"
              tabIndex={selected ? 0 : -1}
              className={`project-tab${selected ? " is-active" : ""}`}
              onClick={() => onSelectDiscipline(tab.id)}
              onKeyDown={onTabKeyDown}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {visibleTags.length > 0 && (
        <div className="project-taglist" role="group" aria-label="Project tags">
          {visibleTags.map((item) => {
            const pressed = tag === item;
            return (
              <button
                key={item}
                type="button"
                className={`project-chip${pressed ? " is-active" : ""}`}
                aria-pressed={pressed}
                onClick={() => onSelectTag(item)}
              >
                {TAG_LABELS[item]}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
