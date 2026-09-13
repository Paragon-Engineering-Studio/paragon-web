export function SoftMist() {
  return (
    <div className="pcb-bg soft-mist" aria-hidden="true">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMinYMid slice">
        <defs>
          <radialGradient id="mist-a" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(120,140,200,0.34)" />
            <stop offset="42%" stopColor="rgba(90,110,170,0.12)" />
            <stop offset="100%" stopColor="rgba(8,8,8,0)" />
          </radialGradient>
          <radialGradient id="mist-b" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(210,216,230,0.16)" />
            <stop offset="50%" stopColor="rgba(160,168,190,0.06)" />
            <stop offset="100%" stopColor="rgba(8,8,8,0)" />
          </radialGradient>
        </defs>

        <g>
          <ellipse cx="340" cy="290" rx="520" ry="460" fill="url(#mist-a)">
            <animate
              attributeName="cx"
              values="340;390;340"
              dur="36s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="290;250;290"
              dur="36s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.55;0.9;0.55"
              dur="36s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="520" cy="520" rx="380" ry="300" fill="url(#mist-b)">
            <animate
              attributeName="cx"
              values="520;470;520"
              dur="44s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="520;560;520"
              dur="44s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.75;0.4"
              dur="44s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
      </svg>
    </div>
  );
}
