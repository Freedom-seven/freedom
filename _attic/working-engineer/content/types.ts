/**
 * The shapes of the record. Content is data; pages are views of it.
 * Every factual string in src/content traces to the audit:
 * public repositories, live deployments, the legacy site's own copy.
 */

/** One layer of a system's cross-section. */
export interface Layer {
  /** Machine-facing plate name: INTERFACE, SERVICE, DATA, PLATFORM, CONTRACT. */
  plate: string;
  /** What this layer actually is, in this system. One or two sentences. */
  what: string;
  /** Technologies genuinely exercised on this layer. */
  tech: string[];
}

/** A decision, pinned where it was made. Ownership shown, not claimed. */
export interface Decision {
  /** What was done, plainly. */
  made: string;
  /** What it cost. Every real decision costs something. */
  cost: string;
  /** Which layer(s) it concerns — ties the pin to the cross-section. */
  on: string[];
}

/** Evidence links for a system. Only real, verified artifacts. */
export interface EvidenceLink {
  label: string;
  href: string;
}

/** A system on the bench. A work, presented as a layered cross-section. */
export interface System {
  id: string;
  name: string;
  /** One-line classification. */
  kind: string;
  year: string;
  status: "deployed" | "source-only";
  /** What problem existed. */
  premise: string;
  /** What constrained the work. */
  constraints: string;
  layers: Layer[];
  decisions: Decision[];
  evidence: EvidenceLink[];
  stack: string[];
}

/** One turn of the bench presence: a scripted, truthful orientation voice. */
export interface PresenceLine {
  /** Order of delivery. */
  order: number;
  /** The line itself, in the owner's plain register. */
  text: string;
  /** Optional route the line points to (rendered as its affordance). */
  go?: { label: string; href: string };
  /** Optional anchor link within the bench page. */
  anchor?: { label: string; href: string };
}

/** Experience / education entry. */
export interface RecordEntry {
  org: string;
  role: string;
  span: string;
  lines: string[];
  /** Marks the deliberate, visible gap. */
  gap?: boolean;
}

/** A testimonial with its consent state printed. */
export interface Voice {
  name: string;
  relation: string;
  quote: string;
  consent: string;
}

/** Field index row: technology → the artifact that exercises it. */
export interface FieldIndexEntry {
  technology: string;
  evidence: string;
  href?: string;
  span: string;
}

/** An archive entry: everything else in the record, stated bluntly. */
export interface ArchiveEntry {
  name: string;
  note: string;
  href?: string;
  kind: "study" | "clone" | "experiment" | "tool" | "experiment-mobile";
}

/** One desk mode: an intention, and the assembly of evidence that serves it. */
export interface DeskMode {
  id: string;
  /** The visitor's need, in their words. */
  need: string;
  /** The honest answer, naming what the record actually contains. */
  answer: string;
  /** What the mode shows — each item points at real evidence. */
  shows: { label: string; href: string; note: string }[];
  /** The record's honest boundary for this need. */
  boundary: string;
}

/** The identity plate. Verified facts only. */
export interface Identity {
  name: string;
  role: string;
  location: string;
  email: string;
  links: EvidenceLink[];
  availability: string;
}
