import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecord } from "../record/RecordContext";
import "../styles/loupe.css";

/**
 * The loupe — the site's capacity to answer questions about itself.
 * Press I to arm. Hover (when armed), click, or focus anything with testimony.
 */

export function LoupeBar() {
  const { lensOn, setLensOn, active } = useRecord();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        !!target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (typing) return;
      if (e.key === "i" || e.key === "I") {
        e.preventDefault();
        setLensOn(!lensOn);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lensOn, setLensOn]);

  return (
    <div className="loupe-bar">
      <div className="loupe-bar-inner" data-armed={lensOn ? "true" : "false"}>
        <button
          type="button"
          className="arm"
          aria-pressed={lensOn}
          onClick={() => setLensOn(!lensOn)}
        >
          {lensOn ? "lens armed" : "arm the lens"}
        </button>
        <span aria-hidden="true">
          <kbd>I</kbd>
        </span>
        {active && (
          <span className="record loupe-reading" aria-hidden="true">
            reading: {active.testimony.label}
          </span>
        )}
      </div>
    </div>
  );
}

export function Chip() {
  const { active, setActive, lensOn, setLensOn } = useRecord();

  /* Escape closes; focus returns to the inspected element. */
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        active.source.focus?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, setActive]);

  const chipRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);
  const [measured, setMeasured] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && matchMedia("(max-width: 46rem)").matches
  );

  useEffect(() => {
    const mq = matchMedia("(max-width: 46rem)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* Position in document coordinates and re-measure on any movement. */
  useLayoutEffect(() => {
    if (!active) {
      setPos(null);
      setMeasured(null);
      return;
    }

    const update = () => {
      if (isMobile) {
        /* Bottom sheet: the viewport owns placement on small screens. */
        setPos(null);
      } else {
        const el = active.source;
        const rect = el.getBoundingClientRect();
        const chipW = Math.min(336, window.innerWidth - 32);
        const margin = 16;
        let left = rect.left + rect.width / 2 - chipW / 2 + window.scrollX;
        left = Math.max(
          margin + window.scrollX,
          Math.min(left, window.innerWidth - chipW - margin + window.scrollX)
        );
        let top = rect.bottom + window.scrollY + 10;
        if (rect.bottom + 250 > window.innerHeight) {
          top = rect.top + window.scrollY - 244;
        }
        setPos({ left, top });
      }

      const m = active.testimony.measure;
      setMeasured(m ? m(active.source) : null);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [active, isMobile]);

  /* On mobile the sheet owns placement; on desktop we require a position. */
  if (!active || (!isMobile && !pos)) return null;
  const { testimony } = active;
  const style = isMobile ? undefined : { left: pos!.left, top: pos!.top };

  return (
    <div
      className="chip"
      data-open="true"
      role="dialog"
      aria-label={`Testimony: ${testimony.label}`}
      ref={chipRef}
      style={style}
    >
      <div className="chip-head">
        <span>{testimony.label}</span>
        <button
          type="button"
          className="chip-close"
          aria-label="Close testimony"
          onClick={() => {
            setActive(null);
            if (lensOn) setLensOn(false);
          }}
        >
          close ✕
        </button>
      </div>

      <dl>
        <dt>what</dt>
        <dd>
          {measured !== null && <span className="measured">{measured} — </span>}
          {testimony.what}
        </dd>
        <dt>why</dt>
        <dd>{testimony.why}</dd>
        <dt>cost</dt>
        <dd>{testimony.cost}</dd>
        {testimony.where && (
          <>
            <dt>where</dt>
            <dd className="chip-where">
              <a href={testimony.where} target="_blank" rel="noreferrer">
                see the evidence
              </a>
            </dd>
          </>
        )}
      </dl>
    </div>
  );
}
