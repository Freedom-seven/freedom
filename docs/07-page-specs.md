# 07 · Page-by-page spec (with acceptance criteria)

## `/` — The Build

Above the fold: name; one-sentence positioning ("Software engineer. I ship
web, mobile, and the systems underneath them."); availability state; three
entrances (Work / How / Me) as plain, strong links. Below: the three newest
shipped units as plates; the site's own live facts (routes count, build id,
last deployed date). No hero image, no headline gimmick.

**Accept:** answers "who/what/next step" in 5 seconds · ledger footer prints
real numbers · every link keyboard-reachable in reading order.

## `/work` — Release history

Grouped by stream: Web / Mobile / Contracts & systems. Each unit row: name,
year, kind, status seal (deployed / source-only), stream tags, evidence pair.
Filters by stream (client-side, no layout shift). Clones and dead links are
labeled as what they are (learning artifacts / offline), never removed
quietly — and never featured.

**Accept:** all units from the verified inventory render from typed content ·
filter keeps focus and announces changes · zero fabricated metrics.

## `/work/[slug]` — Unit page (the core artifact)

Order: name + status + year → premise → constraints → **decisions with
costs** (the ledger rows; each decision cites the layer it touched) → stack by
layer (interface / service / data / platform — honest labels, e.g. Krypto's
CONTRACT layer says testnet) → evidence links (repo, deployment) → what it
did not do (per-unit "limits" field — e.g. Covid tracker's single-feed
assumption). Static-rendered; per-route metadata + generated OG build sheet.

**Accept:** every unit has ≥1 decision with cost and ≥1 evidence link (build
fails otherwise) · tutorial-derived structure is disclosed where true (Krypto)
· no invented metrics anywhere.

## `/how` — How this is built

The disclosure page: stack list with why-chosen, budget table (current
actuals vs targets), render modes per route, what runs at the edge vs static,
the ask API's guardrails and cost caps, dependency list with justification,
known trade-offs. Written like a design doc, maintained like one.

**Accept:** numbers are generated from the real build (script reads
build-manifest) · no stale hand-typed stats.

## `/log` — Build log

Dated entries for the v2 rebuild itself (migration off CRA, each milestone).
Entry shape: date · what shipped · what broke · what changed. RSS/Atom feed.

**Accept:** entries are real dated work items only · feed validates.

## `/me` — The engineer

Digital self surface (the Ask console) at top; plain bio, experience
(ToddlerWalks 2023, EasyParcel 2023, Cotocus 2022 — as verified), education,
the declared gap ("The public record goes quiet after 2023. I'd rather tell
you where it goes than fill it."), then contact paths. The console works
without an LLM key: curated answers only (see 09).

**Accept:** gap is declared in copy, not styled as a motif · experience claims
match the legacy record exactly · console degrades to designed offline state.

## `/contact` — Contact

Email (verified address), GitHub, LinkedIn, X, and the résumé link — each with
what-it's-for. No form in v1 (no working backend endpoint is verified; a form
that pretends is worse than an address).

**Accept:** every link real and labeled · copy-to-clipboard with confirmation
for the email.

## Cross-route

`404` = "Not shipped" + suggestions · `og/[slug]` build-sheet images ·
per-route `metadata` titles/descriptions · sitemap.xml · robots.txt ·
structured data (Person + WebSite JSON-LD on `/`).
