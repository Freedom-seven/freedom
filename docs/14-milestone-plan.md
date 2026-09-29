# 14 · Milestone plan (Phase 5–8 execution)

> Gate: **M0 requires the user's explicit approval of the concept + plan.**
> No build work before it (the post-mortem's rule #1).

## M0 — Approval gate
**Exit:** user says go (and answers doc 02's questions, or defers some
explicitly — identity facts gate content, not design).

## M1 — Foundation (design system live)
Scaffold clean Next.js + TS on `rebuild/portfolio-v2`; tokens; header rail;
ledger footer with real build numbers; `/` built to doc 07's spec; deploy
smoke test (host decision per risk 5).
**Accept:** two designed surfaces (home + one unit page) exist and match doc
06 on the real screen; budget table green; **screenshots presented to the
user for a feel-check before scaling.**

## M2 — Content engine + work routes
Typed content modules + invariant tests; `/work` with stream filter; unit
pages from real record data.
**Accept:** every unit renders with decisions+costs+evidence; tests fail the
build on any thin unit; mobile layout done, not shrunk.

## M3 — Disclosure layer
`/how` (generated numbers) + `/log` (dated real entries, feed).
**Accept:** budget table on /how matches manifest; log entries are real work
items with dates.

## M4 — Digital me, curated
`/me` with bio, verified experience, gap paragraph; ask console in curated
mode; FAQ fallback; per-page suggested questions.
**Accept:** console answers from KB with zero network; refusal path designed;
keyboard-complete; SR labels verified.

## M5 — Contact, 404, SEO surfaces
`/contact`; "not shipped" 404; `og/[slug]` build sheets; sitemap; robots;
JSON-LD; per-route metadata.
**Accept:** every route has title/description/OG; social preview renders
correctly.

## M6 — Live mode (optional, needs user key)
`/api/ask` + provider adapter; guardrails from doc 09; caps.
**Accept:** streaming works; caps enforced; curated fallback verified by
killing the key at runtime.

## M7 — Craft pass
Timing, easing, focus states, loading/empty/error states at every seam;
copy audit against doc 10; slow-network run; real-device pass.
**Accept:** the doc 08 micro-interaction list is complete and nothing
else on the site moves.

## M8 — Quality gate
Lighthouse ≥95/100 (perf/a11y), axe clean, keyboard + SR walkthroughs,
320–1440 screenshots, external-request audit, ledger-vs-manifest match,
fresh-eyes review against the brief's quality bar (doc 00 post-mortem
questions asked again, out loud).
**Accept:** every budget green; the six quality-bar questions answered
"honestly yes" in writing.

## M9 — Ship
Merge to master readable-commit by readable-commit; deploy; post-ship
Lighthouse on production; log entry that the build shipped.

**Cadence:** working, deployable state after every milestone (brief §9.6);
each milestone ends with a short written status + screenshots in the
conversation.
