"use client";

import { useEffect, useRef } from "react";

/**
 * The ship-line sweep — the site's single opening flourish, and the
 * first thing every visitor sees: the hero's rule draws itself to 100%
 * like a build filling a progress rail. ~700ms, runs once on mount.
 *
 * The server renders the line UNDRAWN with the numeric meter already
 * printed beside it. This component only animates the registered
 * custom property --sweep toward numbers that are already there:
 * - No JS: a <noscript> style prints the line fully drawn.
 * - Reduced motion: the line prints drawn, instantly.
 * The moment lands on every visit, with or without script.
 */
export function ShipLine() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("hero__line--fallback");
      return;
    }

    const anim = el.animate([{ ["--sweep" as string]: 0 }, { ["--sweep" as string]: 100 }], {
      duration: 700,
      delay: 150,
      easing: "cubic-bezier(0.2, 0, 0, 1)",
      fill: "forwards",
    });
    anim.finished
      .then(() => el.classList.add("hero__line--fallback"))
      .catch(() => {
        /* cancelled — the fallback class prints the settled state */
        el.classList.add("hero__line--fallback");
      });
  }, []);

  return <div ref={ref} className="hero__line" aria-hidden="true" />;
}
