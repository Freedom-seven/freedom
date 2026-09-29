# 04 · Vision — "The Shipped Build"

> Selected direction (from 03): the portfolio stops describing engineering and
> becomes one shipping build, presented with the discipline of a real product
> release — public build log, live status surface, per-page self-disclosure,
> a digital self that answers from a curated knowledge base, and projects
> presented as shipped units in one continuous release history.

## The one-sentence concept

A portfolio that behaves like the work of an engineer who ships: it declares
what it is, shows what it costs, runs on what it claims, and answers
questions without pretending to be human.

## Why this concept wins for *this* engineer

1. **The record supports it completely.** Every project has a real repo, a real
   deployment, and auditable source. No other concept can be filled this way
   without inventing material. Truth is the material — and it happens to be true.
2. **It makes the full range structural, not decorative.** Work is organized by
   release streams (web / mobile / contracts) rather than a flat grid, so
   backend, frontend, and mobile are the architecture of the site, not
   subsections of a skills list.
3. **It is inspectable by construction.** Each page prints its own build
   facts (route, render mode, transferred JS) in a ledger footer. Other
   engineers — the audience that matters most — can verify claims on the page.
4. **It has a built-in signature moment** (the self-measuring ledger + a
   digital self that answers "what did this cost?" from recorded decisions)
   without depending on spectacle or a third-party service to function.

## The emotional arc for a visitor

1. **0–5s** — "This is not a portfolio template." Precision registers before
   content does.
2. **5–60s** — "This person ships." Every unit has evidence links; every claim
   sits next to what it cost.
3. **1–5min** — "There is so much thought in this." The digital self answers
   hard questions honestly; the build log shows the site's own history.
4. **After** — they remember the page that measured itself, and the engineer
   who published the costs.

## Governing principles

1. **Nothing is claimed that is not shown.** Evidence links beside every claim;
   costs beside every decision.
2. **The site runs on its own claims.** Server features used by the site (the
   ask API, generated OG images, streaming) are the backend proof.
3. **Spectacle is earned by function.** Motion communicates state changes only;
   if it can be cut without losing meaning, it is cut.
4. **The plain path is the real path.** Every feature has a designed
   no-JS/no-network/slow-path equivalent. The site is excellent before any
   enhancement loads.
5. **One level of self-reference, then stop.** The ledger discloses the page;
   the "how" page discloses the site. The site does not inspect itself
   recursively — that failed before.
6. **The digital self never improvises a fact.** It answers from the curated
   knowledge base or it says "I don't know — ask him."
