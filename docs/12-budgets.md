# 12 · Performance & accessibility budgets

## Performance budget (measured on the real build, enforced in CI)

| Metric | Budget | Notes |
|---|---|---|
| First-load shared JS (gzip) | ≤ 130KB | framework included |
| Per-page first-load JS (gzip) | ≤ 160KB | ask console code only where used |
| LCP (mid-range phone, throttled 4G) | < 2.5s | text-led pages make this easy; verified in lab |
| CLS | < 0.1 | no late-loading layout contributors by design |
| INP | < 200ms | no long tasks; filters are reorder-only |
| Fonts | 2 families, ≤ 60KB total, self-hosted | zero external font requests |
| Images | ≤ 120KB per page where present | next/image only; site is text-led |
| External requests (document) | 0 | nothing loads from third parties |
| External requests (with live ask) | 1 stream | user-initiated only |

**Method:** numbers come from `next build` output + Lighthouse CI runs on
PRs; the /how budget table is generated from the same manifest — a mismatch
fails the build.

## Accessibility budget (the floor, not the goal)

- Full keyboard operability: every action reachable and executable by
  keyboard; skip link; focus order = reading order; no traps; visible
  focus (2px oxide ring, 2px offset) everywhere.
- Semantics: one `h1` per page, logical heading tree, landmarks, real
  buttons/links (no click-divs), form labels, `aria-live` for filter counts
  and console status.
- Contrast ≥ 4.5:1 body, ≥ 3:1 large text and UI edges — including the
  faintest labels and the dark machine surfaces.
- `prefers-reduced-motion`: everything resolves instantly; streaming
  remains (opacity-only).
- Screen reader pass on the three core flows (evaluate, ask, contact)
  with a real SR before sign-off.
- Mobile: designed at 320px first, not shrunk from desktop; touch targets
  ≥ 44px; the console is bottom-anchored as a sheet on small screens.

## Resilience budget

- With JS disabled: every page fully readable; the KB renders as an FAQ on
  /me; contact links work. 
- With the ask API down: curated mode, identical UI, one-line notice.
- With the network offline after load: static shell still navigates
  (client router) and displays; no spinner dead-ends.

## Quality gate (Phase 8 checklist)

Lighthouse ≥ 95 perf / 100 a11y · axe clean · keyboard walkthrough
recorded · SR walkthrough recorded · 320/390/768/1024/1440 screenshots ·
copy audit against doc 10's banned list · ledger numbers match build
manifest · external-request audit clean.
