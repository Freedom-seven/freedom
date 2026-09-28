# Inspection Copy

The portfolio of Nanewortor Patrick Freedom, issued as an inspection copy of
itself: a document that can be asked about its own construction and answers
with testimony **measured at runtime** — real CSS tokens, real geometry, real
counts — never recited claims.

Arm the lens (`I`, or the arming tab) and hover, click, or focus anything.
Keyboard focus always reveals testimony; the lens is optional. The session
record at the end of the document counts what you heard and keeps it in
memory only — verify in the network tab: after load, the page is silent.

## Stack

Vite · React 18 · TypeScript (strict) · hand-written CSS · `@emailjs/browser`
(the only runtime dependency beyond React). No animation library, no webfonts,
no images, no trackers.

Production bundle: ~61KB JS gzipped, ~3.7KB CSS.

## Develop

```bash
yarn install
yarn dev        # local dev server
yarn build      # typecheck + production build
yarn preview    # serve the production build
```

## Configuration

Copy `.env.example` to `.env` and fill in the EmailJS keys to enable the
contact form. Without them, the form honestly reports itself unconfigured and
the email address becomes the primary route.

## Content model

All facts live in typed modules under `src/content/`:

- `caseFiles.ts` — the six featured case files (premise, constraints,
  decisions with costs, evidence links)
- `archive.ts` — everything else, kept and honestly labeled
- `record.ts` — experience (with a deliberate content gap), education,
  voices, field index
- `testimonies.ts` — the testimony registry (`what` / `why` / `cost` /
  `where?` / `measure(el)`)

## Documentation

See `docs/reimagination/` — creative vision, direction selection, design
system, architecture, the inspector system, and the content-gap /
pre-launch checklist that must be resolved before going live.
