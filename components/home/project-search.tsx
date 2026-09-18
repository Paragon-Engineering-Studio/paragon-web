"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import { PROJECTS, TAG_LABELS, type Project } from "@/lib/projects";

function matchProjects(query: string): Project[] {
  const q = query.trim().toLowerCase();
  if (!q) return PROJECTS;

  return PROJECTS.filter((project) => {
    const tagText = project.tags.map((tag) => TAG_LABELS[tag]).join(" ");
    const haystack = [
      project.title,
      project.description,
      project.id,
      ...project.disciplines,
      tagText,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(q);
  });
}

function SearchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function ProjectSearch() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => matchProjects(query), [query]);
  const trimmedQuery = query.trim();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const toggle = useCallback(() => {
    setOpen((current) => {
      if (current) {
        setQuery("");
        setActive(0);
      }
      return !current;
    });
  }, []);

  const openProject = useCallback(
    (project: Project) => {
      close();
      router.push(`/projects/${project.id}`);
    },
    [close, router],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        toggle();
        return;
      }

      if (!open) return;

      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActive((index) => (results.length ? (index + 1) % results.length : 0));
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActive((index) =>
          results.length ? (index - 1 + results.length) % results.length : 0,
        );
        return;
      }

      if (event.key === "Enter" && results.length > 0) {
        event.preventDefault();
        const project = results[active];
        if (project) openProject(project);
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, close, open, openProject, results, toggle]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    document.body.classList.add("search-open");
    return () => {
      document.body.classList.remove("search-open");
    };
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const node = resultsRef.current?.querySelector(".search-palette-item.is-active");
    node?.scrollIntoView({ block: "nearest" });
  }, [active, open, results.length]);

  const onInputKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Tab") {
      event.preventDefault();
      close();
    }
  };

  const palette = open ? (
    <div className="search-palette" role="dialog" aria-modal="true" aria-label="Search projects">
      <button
        type="button"
        className="search-palette-backdrop"
        aria-label="Close search"
        onClick={close}
      />
      <div className="search-palette-panel">
        <div className="search-palette-input-wrap">
          <span className="search-palette-input-icon">
            <SearchIcon />
          </span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="Search projects by name, tag, or discipline..."
            className="search-palette-input"
            aria-label="Search projects"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="search-palette-esc">Esc</kbd>
        </div>

        <div className="search-palette-head">
          <span className="search-palette-head-label">Projects</span>
          <span className="search-palette-head-count">
            {results.length} {results.length === 1 ? "result" : "results"}
          </span>
        </div>

        <div ref={resultsRef} className="search-palette-results">
          {results.length === 0 ? (
            <div className="search-palette-empty">
              <p>No projects match &ldquo;{trimmedQuery}&rdquo;</p>
              <span>Try a title, tag, or discipline like software or websites.</span>
            </div>
          ) : (
            results.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`search-palette-item${index === active ? " is-active" : ""}`}
                onClick={(event) => {
                  event.preventDefault();
                  openProject(project);
                }}
                onMouseEnter={() => setActive(index)}
              >
                <span className="search-palette-thumb">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.image} alt="" />
                  ) : (
                    <span
                      className="search-palette-thumb-fallback"
                      style={{ background: project.accent }}
                    />
                  )}
                </span>
                <span className="search-palette-copy">
                  <span className="search-palette-title-row">
                    <span className="search-palette-title">{project.title}</span>
                    {index === active ? (
                      <kbd className="search-palette-enter">Enter ↵</kbd>
                    ) : null}
                  </span>
                  <span className="search-palette-desc">{project.description}</span>
                  <span className="search-palette-tags">
                    {project.disciplines.map((discipline) => (
                      <span key={discipline} className="search-palette-tag">
                        {discipline}
                      </span>
                    ))}
                    {project.tags.map((tag) => (
                      <span key={tag} className="search-palette-tag">
                        {TAG_LABELS[tag]}
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            ))
          )}
        </div>

        <div className="search-palette-foot">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> open
          </span>
          <span>
            <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        className="nav-search"
        onClick={toggle}
        aria-label="Search projects"
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <SearchIcon size={14} />
        <span className="nav-search-label">Search projects</span>
        <span className="nav-search-kbd">⌘K</span>
      </button>

      {mounted && palette ? createPortal(palette, document.body) : null}
    </>
  );
}
