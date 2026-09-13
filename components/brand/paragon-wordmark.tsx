import { PARAGON_WORDMARK_D, PARAGON_WORDMARK_VIEWBOX } from "@/lib/paragon-mark";

export function ParagonWordmark({
  height = 14,
  className,
}: {
  height?: number;
  className?: string;
}) {
  const width = (648.2 / 98.1) * height;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={PARAGON_WORDMARK_VIEWBOX}
      aria-hidden
    >
      <path d={PARAGON_WORDMARK_D} fill="currentColor" />
    </svg>
  );
}
