"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Count-up enhancement for ledger numbers. The server renders the final
 * value; JS only animates toward what is already there (no-JS = final value;
 * reduced motion = final value immediately). Runs once, on first view.
 */
export function LedgerCount({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(`${value}${suffix}`);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();

        const t0 = performance.now();
        const dur = 800;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(`${(value * eased).toFixed(1)}${suffix}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, suffix]);

  return <span ref={ref}>{display}</span>;
}
