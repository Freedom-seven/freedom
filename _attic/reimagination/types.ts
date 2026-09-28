/** The shapes this document is made of. Content is data; the page is a view of it. */

export interface WorkLink {
  label: string;
  href: string;
}

/** A case file: one piece of work, presented as evidence rather than a card. */
export interface CaseFile {
  id: string;
  exhibit: string;
  name: string;
  kind: string;
  year: string;
  /** Honest state of the artifact today. */
  status: "deployed" | "source-only";
  premise: string;
  constraints: string;
  /** Real decisions, each with its stated trade-off. */
  decisions: { made: string; cost: string }[];
  links: WorkLink[];
  stack: string[];
}

/** The archive: everything else, stated bluntly and honestly. */
export interface ArchiveEntry {
  name: string;
  note: string;
  href?: string;
  /** The honest classification the site applies without apology. */
  kind: "study" | "clone" | "client" | "tool" | "experiment";
}

export interface ExperienceEntry {
  org: string;
  role: string;
  span: string;
  lines: string[];
  /** Where the record breaks off. */
  gap?: boolean;
}

export interface VoiceEntry {
  name: string;
  relation: string;
  quote: string;
  /** Permissions note for the record. */
  consent: string;
}

export interface FieldIndexEntry {
  technology: string;
  evidence: string;
  href?: string;
  /** Where this sits in the honest timeline. */
  span: string;
}

export interface Testimony {
  label: string;
  what: string;
  why: string;
  cost: string;
  where?: string;
  /** Runtime-truth slot: measured live against the inspected element. */
  measure?: (el: Element) => string;
}
