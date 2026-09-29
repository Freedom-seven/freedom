# 11 · Technical architecture

## Stack (every choice justified)

- **Next.js 14 App Router + TypeScript (strict).** Multi-route static core,
  server route for the ask API, `next/font` self-hosting, `next/og` image
  generation, per-route metadata — all first-party. (14.2.x patched line;
  already proven installable in this repo.)
- **No UI framework.** Hand-rolled CSS modules per surface + design tokens
  in `globals.css`. Tailwind rejected: its utility dialect would *become* the
  design language; this concept needs its own.
- **No animation library.** CSS transitions cover every motion in doc 08.
  framer-motion rejected (dead weight; rejected attempt shipped without it
  and proved the point). Motion-for-motion is banned by the brief anyway.
- **Content as typed modules** in `src/content/`, validated by an invariant
  test at build. No CMS until the user asks; adding content = editing a
  module. (Content/presentation separation achieved structurally.)
- **/api/ask**: Node runtime, streaming. Provider behind one adapter
  interface (`ask(record, question) → ReadableStream`) so Anthropic/OpenAI/
  none is a config swap. Key from env only, server-side.
- **Tests where they earn keep:** content invariants, the ask adapter,
  ledger-number generation. Vitest. No component-snapshot theater.
- **CI (GitHub Actions):** typecheck → lint → content-invariant tests →
  build → Lighthouse budget check on PRs.

## Rendering map

| Surface | Mode | Why |
|---|---|---|
| `/`, `/work`, unit pages, `/log`, `/contact`, 404 | Static (SSG) | instant, unbreakable, free |
| `/me` | Static + client console | document first, console enhances |
| `og/[slug]` | Edge (next/og) | generated build-sheet images |
| `/api/ask` | Node, streaming | optional live mode |
| ledger numbers | Build-generated manifest | real, never hand-typed |

## Data flow of the ask console (curated mode)

Question (≤500 chars) → normalize → score against KB intents (keyword +
synonym map, runs client-side) → best match above threshold → answer from
record → below threshold → designed refusal + email path. No network in
curated mode. Live mode adds the server round-trip; failure at any step
falls back to curated with a one-line notice.

## Repository shape

```
src/
  app/            # routes only; thin
  components/     # design-system components
  content/        # typed record: identity, units, log, bio, kb
  lib/            # ask adapter, ledger generator, scoring
  styles/         # tokens + per-surface css
docs/             # this planning set (ships on the site's /how, distilled)
```

## Deployment

Target: keep the user's existing host (Netlify) if its Next runtime holds;
otherwise Vercel (decision made at M1 deploy test — noted in the risk
register). Domain: pending user answer (inventory Q10).

## Dependency budget

Runtime deps target ≤6 (next, react, react-dom, + at most a provider SDK,
+ vitest as devDep). Anything else needs a written justification in /how.
