import { useEffect, useRef } from "react";
import type { Testimony } from "../types";
import { useRecord } from "./RecordContext";

/**
 * useInspect binds a DOM element to its testimony.
 *
 * Laws:
 * - Hover reveals only while the lens is armed (a deliberate discovery layer).
 * - Keyboard focus always reveals, armed or not — accessibility is not a mode.
 * - The chip closes when the element leaves the viewport.
 *
 * The record's setters are stable, so effects depend on identity (key) only.
 */
export function useInspect(testimony: Testimony, key: string) {
  const ref = useRef<HTMLElement | null>(null);
  const { active, setActive, lensOn } = useRecord();
  const isActive = active?.label === key;

  /** Freshest values without re-binding listeners. */
  const tRef = useRef(testimony);
  tRef.current = testimony;
  const lensRef = useRef(lensOn);
  lensRef.current = lensOn;

  /* Native hover listeners, bound once per element. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const open = () => {
      if (lensRef.current) {
        setActive({ label: key, testimony: tRef.current, source: el });
      }
    };
    const close = () => {
      if (
        lensRef.current &&
        document.activeElement !== el &&
        document.activeElement?.parentElement !== el &&
        document.activeElement?.closest?.(".case") !== el
      ) {
        setActive(null);
      }
    };

    /* Native focusin/focusout: focus reveals testimony regardless of mode.
       (More dependable across environments than synthetic delegation.) */
    const focusOpen = () => {
      setActive({ label: key, testimony: tRef.current, source: el });
    };
    const focusClose = (e: FocusEvent) => {
      const next = e.relatedTarget as Node | null;
      if (next && el.contains(next)) return; // still inside: not a leave
      if (el.contains(document.activeElement)) return;
      setActive(null);
    };

    el.addEventListener("pointerenter", open);
    el.addEventListener("pointerleave", close);
    el.addEventListener("focusin", focusOpen);
    el.addEventListener("focusout", focusClose);
    return () => {
      el.removeEventListener("pointerenter", open);
      el.removeEventListener("pointerleave", close);
      el.removeEventListener("focusin", focusOpen);
      el.removeEventListener("focusout", focusClose);
    };
  }, [key, setActive]);

  /* While active: close when the element scrolls out of view. */
  useEffect(() => {
    if (!isActive) return;
    const el = ref.current;
    if (!el) return;

    const onMove = () => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -60 || rect.top > window.innerHeight + 60) {
        setActive(null);
      }
    };
    window.addEventListener("scroll", onMove, { passive: true });
    window.addEventListener("resize", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onMove);
      window.removeEventListener("resize", onMove);
    };
  }, [isActive, key, setActive]);

  return {
    ref,
    isActive,
    handlers: {
      onFocus: () => {
        if (ref.current) {
          setActive({ label: key, testimony: tRef.current, source: ref.current });
        }
      },
      onBlur: () => {
        if (active?.label === key) setActive(null);
      },
      onClick: () => {
        if (ref.current) {
          setActive({ label: key, testimony: tRef.current, source: ref.current });
        }
      },
    },
  };
}
