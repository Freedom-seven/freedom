# freedom — The Shipped Build

A portfolio that behaves like one shipping build: it presents 28 shipped
units as the legacy site published them, prints its own real build facts at
the foot of every page, and publishes the cost of every engineering decision
next to the decision.

The legacy CRA app is quarantined intact under `legacy/` as the factual
record. It is never built again. This branch (`rebuild/portfolio-v2`) is the
rebuild.

## Run it

```bash
yarn install
yarn dev        # http://localhost:3000 — ledger prints "dev" honestly
yarn build      # production build; ledger + /how print real numbers after this
yarn start      # serve the production build
yarn check      # typecheck + tests + lint
```

## The system

- `src/content/` — the whole record, typed. Identity facts live in exactly
  one file (`identity.ts`); 28 units in `units.ts` (4 audited with
  decisions+costs, 24 listed at record depth); the build log, the curated
  knowledge base, and the verified experience record.
- `src/lib/ledger.ts` — reads Next's real build output
  (`.next/app-build-manifest.json`), gzips the actual chunks with zlib, and
  reports per-route and shared JS. In dev it says "dev" instead of guessing.
- `src/app/how` — the disclosure page: budget table generated from the same
  manifest the ledger reads, stack reasons, content-engine counts, API
  guardrails.
- `src/app/api/ask` — the only server code. Curated mode (default) answers
  from the shipped knowledge base with no provider and no key. Live-LLM mode
  exists behind `LIVE_MODE=on` + `ASK_API_KEY` (see `.env.example`) with
  per-IP hourly/daily caps; the provider call is a marked stub — wire your
  provider there when you choose one.
- Every page ends in its own `<Ledger route renderMode />` because a footer
  that guesses the route would print a lie.

## Editing your record

- Fix any personal fact in `src/content/identity.ts` — nothing else holds
  personal facts.
- Add a project: append a typed unit to `src/content/units.ts`. The test
  suite (`yarn test`) fails the build if a unit has no evidence link, if an
  audited unit lacks decisions-with-costs, or if a listed unit grows
  unverifiable prose.
- Add a build-log entry in `src/content/log.ts` when work actually ships.
  The Atom feed picks it up automatically (`/feed.xml`).

## Budgets (measured, not assumed)

| Metric | Budget | Build |
|---|---|---|
| Shared first-load JS | ≤ 130 KB | ~87.3 KB |
| Heaviest route first-load | ≤ 160 KB | ~100.4 KB |
| External requests | 0 | 0 |
| Fonts | 2, self-hosted | 2 via next/font |

The `/how` page prints the current real numbers from the build manifest —
if this table and the page ever disagree, the page is right.

## Docs

`docs/00` through `docs/14` are the design record: post-mortem, research,
content inventory, the approved concept, and the specs the build followed
(where the build deviated, the doc was updated in the same commit and the
deviation is listed in the final build report).
