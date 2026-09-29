import type { LogEntry } from "./types";

/**
 * The build log — dated entries for real work on this site.
 * v1's history lives in the git history of this repository; this log
 * starts where the rebuild starts. Entries are added as work ships.
 */
export const log: LogEntry[] = [
  {
    date: "2026-09-28",
    title: "Quarantined the legacy app, scaffolded v2",
    body: "The CRA source moved intact to legacy/ — kept as the factual record, never built again. Next.js 14 with strict TypeScript took its place. Two earlier rebuild attempts were rejected and archived under the tag archive/rebuild-attempt-1 before this line was written.",
  },
  {
    date: "2026-09-28",
    title: "Typed the whole record",
    body: "All 28 units from the legacy grid are now typed content: 4 audited in depth with decisions and their costs, 24 presented as listed rows because the public record holds nothing deeper. The build fails if any unit loses its evidence links.",
  },
  {
    date: "2026-09-29",
    title: "The site started measuring itself",
    body: "Every route now ends in the ledger: route, render mode, transferred JS, and build id, all read from Next's real build output and gzipped for real. Dev mode says 'dev' instead of inventing numbers. /how prints the budget table from the same source, so a budget breach shows up on the page that publishes the budget.",
  },
];
