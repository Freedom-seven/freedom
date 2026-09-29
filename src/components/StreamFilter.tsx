"use client";

import { useState } from "react";

const STREAMS = ["all", "web", "contracts", "mobile", "experiments"] as const;

/**
 * Client-side stream filter for /work. Hides stream groups by data
 * attribute (no layout theater), announces the result via aria-live,
 * and works fully without JS — the page renders all streams server-side.
 */
export function StreamFilter() {
  const [active, setActive] = useState<(typeof STREAMS)[number]>("all");

  function apply(next: (typeof STREAMS)[number]) {
    setActive(next);
    document.querySelectorAll<HTMLElement>(".stream").forEach((el) => {
      el.hidden = next !== "all" && el.dataset.stream !== next;
    });
    const visible = document.querySelectorAll<HTMLElement>(
      `.stream:not([hidden]) .plate`
    ).length;
    setNotice(`Showing ${visible} ${visible === 1 ? "unit" : "units"} — ${next}`);
  }

  const [notice, setNotice] = useState(`Showing 28 units — all`);

  return (
    <>
      <div className="streams" role="group" aria-label="Filter units by stream">
        {STREAMS.map((s) => (
          <button
            key={s}
            type="button"
            className={`stream-btn${active === s ? " is-on" : ""}`}
            aria-pressed={active === s}
            onClick={() => apply(s)}
          >
            {s}
          </button>
        ))}
      </div>
      <p className="readout" aria-live="polite" style={{ color: "var(--ink-faint)", marginTop: "-1.25rem", marginBottom: "2rem" }}>
        {notice}
      </p>
    </>
  );
}
