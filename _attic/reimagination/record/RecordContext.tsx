import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Testimony } from "../types";

/**
 * The record: the loupe's shared state.
 * Nothing in this file ever leaves the browser — no storage, no network.
 *
 * Setters are stable (useCallback with no deps) and updates are functional
 * with an explicit bail-out, so consumers can depend on them safely.
 */

export interface ActiveTestimony {
  label: string;
  testimony: Testimony;
  /** The inspected element itself, so the chip can re-anchor while scrolling. */
  source: HTMLElement;
}

interface RecordSlice {
  active: ActiveTestimony | null;
  lensOn: boolean;
  /** Distinct testimonies heard this visit — the session record's count. */
  readings: number;
  /** Last testimonies heard, in order, in-memory only. */
  heard: string[];
}

export interface RecordState extends RecordSlice {
  setActive: (t: ActiveTestimony | null) => void;
  setLensOn: (on: boolean) => void;
}

const RecordContext = createContext<RecordState | null>(null);

const INITIAL: RecordSlice = {
  active: null,
  lensOn: false,
  readings: 0,
  heard: [],
};

export function RecordProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<RecordSlice>(INITIAL);
  /** Labels already counted, so re-reads don't inflate the record. */
  const counted = useRef<Set<string>>(new Set());

  const setActive = useCallback((t: ActiveTestimony | null) => {
    setState((s) => {
      let readings = s.readings;
      let heard = s.heard;
      if (t) {
        const human = t.testimony.label;
        if (!counted.current.has(human)) {
          counted.current.add(human);
          readings = s.readings + 1;
          heard =
            s.heard.length < 4 ? [...s.heard, human] : [...s.heard.slice(1), human];
        }
      }
      /* Bail out when nothing changed — kills re-render loops at the source. */
      if (s.active === t && s.readings === readings && s.heard === heard) return s;
      return { ...s, active: t, readings, heard };
    });
  }, []);

  const setLensOn = useCallback((on: boolean) => {
    setState((s) => {
      if (s.lensOn === on) return s;
      return { ...s, lensOn: on, active: on ? s.active : null };
    });
  }, []);

  const value = useMemo<RecordState>(
    () => ({
      active: state.active,
      lensOn: state.lensOn,
      readings: state.readings,
      heard: state.heard,
      setActive,
      setLensOn,
    }),
    [state.active, state.lensOn, state.readings, state.heard, setActive, setLensOn]
  );

  return (
    <RecordContext.Provider value={value}>{children}</RecordContext.Provider>
  );
}

export function useRecord(): RecordState {
  const ctx = useContext(RecordContext);
  if (!ctx) throw new Error("useRecord must be used inside RecordProvider");
  return ctx;
}
