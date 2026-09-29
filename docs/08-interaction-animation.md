# 08 · Interaction & animation spec

## Model

Progressive disclosure over a complete static document. Every page is fully
readable with zero JS; JS adds the machine layer (filters, the ask console,
the ledger's live numbers, copy buttons). This is the resilience rule made
architecture.

## The ledger footer (signature system)

Every page footer prints: route · render mode · transferred JS of that page ·
build id. Numbers come from the build (generated manifest → server component)
and are real; a mismatch with `/how`'s budget table is a build failure.
Built as built: the ledger prints statically (no count-up). The site's single
flourish is the hero ship-line sweep, which animates once on arrival and
prints fully drawn for no-JS and reduced-motion visitors.

## Micro-interactions (the complete list — nothing else moves)

- Nav pin: oxide underline slides to the active route (160ms transform).
- Stream filter on `/work`: rows reorder via transform (180ms), aria-live
  announces "Showing 14 units — Web".
- Evidence links: hairline underline grows 0→100% on hover (160ms).
- Copy email: button swaps label to "copied" for 1.2s; announced.
- Unit cards: 2px offset shadow appears on hover/focus-within only (120ms).
- Ask console: streamed tokens appear without animation (streaming IS the
  animation); status dot handles state.
- 404: no motion; dry copy ("Nothing shipped at this address.").
- Hero ship-line sweep on `/`: the only once-per-load flourish on the site.

## Loading & empty states

- Next.js route transitions: instant (static pages); no skeleton theater.
- Ask console states, all designed: idle (suggested questions), streaming
  (cursor), offline/key-missing (curated-answers mode, visually identical
  system, explicit one-line notice), rate-limited (plain-language cap notice),
  error (apology + direct email link). Empty is impossible by construction —
  the curated KB ships in the bundle.

## Keyboard map

Tab order = reading order everywhere. Enter activates; Escape closes nothing
that isn't a dialog (the console is an inline surface, not a modal). Skip link
first in DOM. No traps. Focus visible via 2px oxide ring at 2px offset.

## Reduced motion

`prefers-reduced-motion: reduce` disables count-up, reorders snap, underlines
resolve instantly, streaming still works (opacity only). Verified in the
quality gate on real OS settings.
