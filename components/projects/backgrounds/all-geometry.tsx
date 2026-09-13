"use client";

import { useEffect, useRef } from "react";
import { PARAGON_LETTERS } from "@/lib/paragon-mark";

const FILL = "rgba(238,242,250,0.9)";
const GHOST = "rgba(238,242,250,0.1)";
const SLOT = 94;
// How far off the page each line starts, in slot units. The wordmark sits in the left
// gutter, so the runway has to come from the right.
const RUN = 700;
// Thickness of the line while it is still out on the page.
const PEN = 13;
// Pen that paints the letter; wide enough to cover the letterform through the mask.
const INK = 46;
// Visible trail behind the pen, as a fraction of the runway.
const TRAIL = 0.3;
const TRAVEL = 0.28;
const DRAW = 0.95;
// One linear run: the tip covers the runway in TRAVEL, then the trail
// continues at the same speed until it is gone.
const LINE_DUR = TRAVEL * (1 + TRAIL);

// Row the line comes in on: the letter's own starting point, pulled far enough inside the
// letter that the line's full thickness has letterform to land against.
function entryRow(write: string, minY: number, height: number) {
  const start = /^M\s*-?[\d.]+[\s,]+(-?[\d.]+)/.exec(write.trim());
  const y = start ? Number(start[1]) : minY + height / 2;
  const inset = PEN / 2 + 1;
  return Math.min(Math.max(y, minY + inset), minY + height - inset);
}

export function AllGeometry() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const running: Animation[] = [];

    root.querySelectorAll("svg").forEach((svg) => {
      const shape = svg.querySelector<SVGPathElement>("[data-shape]");
      const ink = svg.querySelector<SVGPathElement>("[data-ink]");
      const line = svg.querySelector<SVGPathElement>("[data-line]");
      const gate = svg.querySelector<SVGRectElement>("[data-gate]");
      const solid = svg.querySelector<SVGPathElement>("[data-solid]");
      if (!shape || !ink || !line || !gate || !solid) return;

      // Walk in from the outer edge of the slot until the letterform is actually under the
      // line, so the line lands flush against the letter instead of the slot boundary.
      const row = Number(line.dataset.row);
      const edge = Number(line.dataset.edge);
      let contact = edge;
      for (let x = edge; x > edge - SLOT; x -= 0.5) {
        if (shape.isPointInFill(new DOMPoint(x, row))) {
          contact = x;
          break;
        }
      }

      line.setAttribute("d", `M ${contact + RUN} ${row} L ${contact} ${row}`);
      // Half a unit of overlap so the contact has no hairline seam.
      gate.setAttribute("x", `${contact - 0.5}`);

      running.push(
        line.animate(
          [{ strokeDashoffset: `${TRAIL}` }, { strokeDashoffset: "-1" }],
          { duration: LINE_DUR * 1000, easing: "linear", fill: "forwards" },
        ),
        // The pen only inks the letterform, so the run in leaves no stripe across it.
        ink.animate([{ strokeDashoffset: "1" }, { strokeDashoffset: "0" }], {
          duration: DRAW * 1000,
          delay: TRAVEL * 1000,
          easing: "linear",
          fill: "forwards",
        }),
        solid.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 240,
          delay: (TRAVEL + DRAW) * 1000 - 160,
          fill: "forwards",
        }),
      );
    });

    return () => running.forEach((animation) => animation.cancel());
  }, []);

  return (
    <div ref={ref} className="paragon-spine">
      {PARAGON_LETTERS.map((letter, i) => {
        const [minX, minY, width, height] = letter.viewBox.split(" ").map(Number);
        const slotX = minX - (SLOT - width) / 2;
        const insideId = `paragon-inside-${letter.id}-${i}`;
        const runwayId = `paragon-runway-${letter.id}-${i}`;
        const row = entryRow(letter.write, minY, height);
        const edge = minX + width;

        return (
          <svg
            key={insideId}
            viewBox={`${slotX} ${minY} ${SLOT} ${height}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <mask
              id={insideId}
              maskUnits="userSpaceOnUse"
              x={slotX}
              y={minY}
              width={SLOT}
              height={height}
            >
              <path d={letter.d} fill="#fff" />
            </mask>
            {/* The line only exists out on the runway; the wordmark swallows it. */}
            <mask
              id={runwayId}
              maskUnits="userSpaceOnUse"
              x={slotX - 20}
              y={minY - 20}
              width={SLOT + RUN + 60}
              height={height + 40}
            >
              <rect
                data-gate
                x={edge}
                y={minY - 20}
                width={RUN + 40}
                height={height + 40}
                fill="#fff"
              />
            </mask>

            <path data-shape d={letter.d} fill={GHOST} />
            <path
              data-ink
              d={letter.write}
              fill="none"
              stroke={FILL}
              strokeWidth={INK}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1}
              mask={`url(#${insideId})`}
            />
            <path data-solid d={letter.d} fill={FILL} opacity={0} />
            <path
              data-line
              data-row={row}
              data-edge={edge}
              d={`M ${edge + RUN} ${row} L ${edge} ${row}`}
              fill="none"
              stroke="rgba(232,238,250,0.92)"
              strokeWidth={PEN}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              // Gap wider than the path so no second dash appears near the start.
              strokeDasharray={`${TRAIL} 2`}
              strokeDashoffset={TRAIL}
              mask={`url(#${runwayId})`}
            />
          </svg>
        );
      })}
    </div>
  );
}
