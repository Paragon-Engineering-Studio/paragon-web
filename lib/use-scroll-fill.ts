"use client";

import { useEffect, useRef } from "react";

const HEAD_START = 0.08;
const APPROACH_FILL = 0.84;
const APPROACH_SCROLL = 0.58;

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

export function fillFromScroll(scroll: number) {
  const s = Math.min(1, Math.max(0, scroll));
  if (s <= APPROACH_SCROLL) {
    const t = easeOutQuad(s / APPROACH_SCROLL);
    return HEAD_START + (APPROACH_FILL - HEAD_START) * t;
  }
  const t = (s - APPROACH_SCROLL) / (1 - APPROACH_SCROLL);
  return APPROACH_FILL + (1 - APPROACH_FILL) * t;
}

function smoothDamp(
  current: number,
  target: number,
  velocity: number,
  smoothTime: number,
  dt: number,
): [number, number] {
  const time = Math.max(0.0001, smoothTime);
  const omega = 2 / time;
  const x = omega * dt;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  const change = current - target;
  const temp = (velocity + omega * change) * dt;
  const nextVelocity = (velocity - omega * temp) * exp;
  let output = target + (change + temp) * exp;

  if (target - current > 0 === output > target) {
    return [target, 0];
  }

  return [output, nextVelocity];
}

export function useScrollFill<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targetFromScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const scroll = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      return fillFromScroll(scroll);
    };

    let current = targetFromScroll();
    let velocity = 0;
    let last = performance.now();
    let raf = 0;
    let running = true;

    node.style.setProperty("--pcb-p", current.toFixed(5));

    const tick = (now: number) => {
      if (!running) return;

      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const target = targetFromScroll();
      [current, velocity] = smoothDamp(current, target, velocity, 0.48, dt);

      if (Math.abs(target - current) < 0.0015 && Math.abs(velocity) < 0.02) {
        current = target;
        velocity = 0;
      }

      node.style.setProperty("--pcb-p", current.toFixed(5));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}
