# 00 · Post-mortem — the rejected rebuild attempts

> Status: both attempts are rejected. Nothing below is a style reference.
> Source of record: tag `archive/rebuild-attempt-1` (commit `d21a576`, pushed to origin),
> which preserves both attempts' full working state: 162 files, `_attic/reimagination/`,
> `_attic/working-engineer/`, `_attic/legacy-src/`.
> Facts quoted here come from the attempts' own direction docs, read off that tag.

## Attempt 1 — "Inspection Copy"

**What it was.** A Vite + React single-page "self-annotating paper ledger." Warm paper
palette (`#F2EEE3`), verdict green, Iowan serif + mono, ruled chapter bands, exhibit
letters, dashed "content gap" boxes, and a session-record colophon. The signature
interaction was **the loupe**: press `I` to arm a lens, then hover/focus any element to
open a "testimony chip" with four fields — *what* (with live runtime measurement),
*why*, *cost*, *where* (evidence links). The loupe could inspect itself, once, then stop.

**What was genuinely good.** The truth-audit discipline. It caught three factual
inaccuracies in its own drafts (an overstated error-handling claim, a "vanilla JS" claim
contradicted by the project's own package.json, a dead deployment link) and corrected
them in the copy. Costs-published-alongside-decisions is a real senior signal.

**Why it failed.**

1. **The signature interaction was opt-in.** The best idea on the page hid behind an
   arming action. A visitor who never pressed `I` got a decent editorial portfolio —
   which is the problem, not the mitigation. A signature moment cannot be an easter egg.
2. **One level of self-reference, and it was the whole personality.** "The site can be
   asked about itself" is a device, not a world. Remove the loupe and the residue was a
   paper-styled resume with exhibits — a costume, not a system.
3. **Static and single-page.** No routes, no architecture, nothing running. For an
   engineer whose range is the point, the site itself did nothing. A portfolio that
   performs its claims beats one that asserts them.
4. **It optimized for the author's taste in typography, not for the visitor's need.**
   Exhibit letters and colophons serve the maker. Nobody outside gets anything out of them.

## Attempt 2 — "The Working Engineer"

**What it was.** A Next.js App Router concept, correctly chosen stack: the portfolio as a
well-kept engineering bench in daylight. Machined plates for systems, cross-sections with
layer plates (INTERFACE / SERVICE / DATA / PLATFORM / CONTRACT), decisions pinned where
they happened with their costs, three entrances (Bench / Desk / Record), honest status
seals, a declared 2023→present gap. Scaffolded: 13 routes, typed content modules, build
green at 87.3KB shared first-load JS — but only the Bench page had any visual identity,
and that identity was typeset, not designed. It never got past text on a calm surface.

**Why it stopped.**

1. **It inherited attempt 1's DNA while claiming a fresh start.** Same honesty-as-
   aesthetic, same mono/serif editorial pairing, recycled vocabulary — "record,"
   "exhibit," "plate," "testimony." Vocabulary is DNA. A true reset changes what the site
   *does*, not what it is called.
2. **The concept's best property — "the site is a running thing" — was never built.**
   Cross-sections were diagrams *about* systems. Nothing executed. The one idea that
   could have made it alien got skipped in favor of typing content modules first.
3. **"Honest gaps" became a design crutch.** Declaring what is unknown is right;
   making the declaration a visual motif of every page is self-indulgent. Once is
   integrity. Twice is decoration.
4. **Daylight-workbench warmth, again.** Editorial print warmth in a different hue is
   still editorial print. The comfort zone was never actually left.

## Process failures — the never-repeat list

1. **Built before the checkpoint.** Both attempts wrote code without the user approving
   a concept. The brief has a hard STOP; both runs blew through it. This run does not.
2. **No visual prototype before commitment.** Neither attempt produced two or three
   designed screens to judge the feel before scaling. Type was mistaken for design.
3. **Vocabulary recycled across rejections.** Any word that appeared in a rejected
   attempt's UI (record, exhibit, plate, testimony, loupe, bench as a page name, verdict,
   seal) is banned DNA going forward.
4. **"Honesty about gaps" treated as an aesthetic.** It is a content rule, not a motif.
5. **Identity facts never verified — yet written into content files.** The most serious
   failure. Across the archive, the person's name, email, and GitHub/LinkedIn handles
   appear in at least three mutually inconsistent spellings. None was ever confirmed
   against the user. A portfolio whose first content file contains unverified identity
   facts has failed the brief's core rule before it has a design.

## What survives (facts and method only, all pending re-verification)

- The **content-truth audit method** (verify every claim against the public record
  before it ships) — the only unambiguously good process idea.
- The **verified-claims worksheet**: public repos, live deployments, years, stacks —
  to be re-derived from the legacy source and the GitHub profile, then confirmed.
- The **legacy source** (`_attic/legacy-src/` in the tag): projects, resume data,
  links, assets. Content source only.
- The stack decision: Next.js App Router + TypeScript. Both attempts converged on it
  independently; the reasoning stands.

## Open items carried into Phase 1

- Identity facts: legal/display name, email, handles — **must come from the user**.
- 2023→present history: absent from every source; will be declared as a gap, never filled.
- Testimonials: none verified; none will be invented.
