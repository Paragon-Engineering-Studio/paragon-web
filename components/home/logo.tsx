export function Logo({
  size = 22,
  gradientId,
}: {
  size?: number;
  gradientId: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden>
      <polygon
        points="11,1 21,6 21,16 11,21 1,16 1,6"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="11" cy="11" r="3" fill={`url(#${gradientId})`} />
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F6BFF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
