"use client";

import { useEffect, useState } from "react";

export type CaseShot = {
  id: string;
  src: string | null;
  alt: string;
};

function Shot({
  item,
  mark,
  onOpen,
}: {
  item: CaseShot;
  mark: string;
  onOpen: () => void;
}) {
  return (
    <button type="button" className="adeon-shot" onClick={onOpen}>
      {item.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.src} alt={item.alt} className="adeon-shot-img" />
      ) : (
        <span className="adeon-shot-ph">
          <span className="adeon-shot-ph-mark">{mark}</span>
          <span>{item.alt}</span>
        </span>
      )}
    </button>
  );
}

export function CaseGallery({
  items,
  mark,
  label,
}: {
  items: readonly CaseShot[];
  mark: string;
  label: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = items.find((item) => item.id === openId) ?? null;

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="adeon-reel" aria-label={label}>
        <div className="adeon-reel-track">
          {[0, 1].map((copy) =>
            items.map((item) => (
              <Shot
                key={`${item.id}-${copy}`}
                item={item}
                mark={mark}
                onOpen={() => setOpenId(item.id)}
              />
            )),
          )}
        </div>
      </div>

      {open ? (
        <div
          className="adeon-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          onClick={() => setOpenId(null)}
        >
          <div className="adeon-lightbox-frame" onClick={(event) => event.stopPropagation()}>
            {open.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={open.src} alt={open.alt} className="adeon-lightbox-img" />
            ) : (
              <div className="adeon-shot-ph is-large">
                <span className="adeon-shot-ph-mark">{mark}</span>
                <span>{open.alt}</span>
                <em>Image coming soon</em>
              </div>
            )}
            <button
              type="button"
              className="adeon-lightbox-close"
              onClick={() => setOpenId(null)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
