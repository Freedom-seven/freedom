/**
 * Content types. Every factual string traces to the legacy record
 * (legacy/components/portfolio/Menu.jsx, legacy/components/resume/Data.jsx)
 * or the public audit of repos/deployments. Where the record is thin,
 * status says so. Nothing here is aspirational.
 */

export type Stream = "web" | "contracts" | "mobile" | "experiments";

/**
 * Audit state, printed honestly on every unit:
 * - "verified-live": deployment answered + source audited this cycle.
 * - "linked":        legacy site published a deployment link; not re-checked
 *                    this cycle. Stated as-is.
 * - "source-only":   repo exists, no live deployment.
 * - "offline":       legacy published a deployment that no longer answers.
 * - "unavailable":   legacy listed it, source not publicly reachable.
 */
export type UnitStatus =
  | "verified-live"
  | "linked"
  | "source-only"
  | "offline"
  | "unavailable";

export interface EvidenceLink {
  label: string;
  href: string;
}

/** One engineering decision, always paired with its cost. */
export interface Decision {
  made: string;
  cost: string;
  layer?: string;
}

/** A shipped unit: one piece of work presented with its discipline. */
export interface Unit {
  slug: string;
  name: string;
  stream: Stream;
  /**
   * Record depth:
   * - "full": premise, constraints, decisions-with-costs audited.
   * - "listed": legacy published title + links only. Shown as a ledger row;
   *   no decisions are written because none are on record. Never faked.
   */
  depth: "full" | "listed";
  /** One-line classification, e.g. "Live-data dashboard". */
  kind: string;
  /** Year as evidenced; "?" when the record doesn't date it. */
  year: string;
  status: UnitStatus;
  premise: string;
  /** Required for depth "full"; omitted for "listed". */
  constraints?: string;
  decisions: Decision[];
  /** Stack grouped by real layer — honest labels only. */
  stack: { layer: string; items: string[] }[];
  evidence: EvidenceLink[];
  /** What it did not do / does not claim. Ships on every unit page. */
  limits?: string;
  /** Legacy grid order (1–28) — used for release ordering only. */
  legacyId: number;
  /** Verified-live flagships surface on the home plate and /work top. */
  featured?: boolean;
}

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  note: string;
}

export interface EducationEntry {
  program: string;
  note: string;
}

export interface LogEntry {
  date: string;
  title: string;
  body: string;
}

/** Digital-me knowledge base: curated intents the stand-in may answer from. */
export interface KbEntry {
  id: string;
  /** Trigger keywords (lowercase, normalized at match time). */
  keywords: string[];
  /** Question phrasings shown as suggested asks. */
  asks: string[];
  answer: string;
  /** Optional deep link when the answer has a home. */
  href?: string;
}

export interface Identity {
  name: string;
  role: string;
  email: string;
  location: null;
  availableForWork: boolean;
  links: { github: string; linkedin: string; x: string };
  resume: { href: string; label: string };
  testimonials: null;
  purplPayEnabled: boolean;
  baseUrl: string;
}
