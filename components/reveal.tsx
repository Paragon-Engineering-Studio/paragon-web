"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

export function Reveal({
  children,
  className = "",
  style,
  id,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      id={id}
      className={`${visible ? "section-visible" : "section-hidden"} ${className}`.trim()}
      style={style}
    >
      {children}
    </section>
  );
}
