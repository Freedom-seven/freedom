# 05 · Information architecture & sitemap

## Routes

| Route | Name | Job |
|---|---|---|
| `/` | The Build | One-screen orientation: who, what's running, three entrances. The only page allowed a headline moment. |
| `/work` | Release history | All shipped units, grouped by stream (web / mobile / contracts), newest first. Filters by stream; no percentages, no logo walls. |
| `/work/[slug]` | Unit page | One project as a shipped unit: premise, constraints, decisions **with costs**, stack by layer, evidence links (repo + deployment), honest status. |
| `/how` | How this is built | The site's own disclosure page: stack, budgets, render modes, what runs where, what it costs to run, known trade-offs. The page engineers will screenshot. |
| `/log` | Build log | Dated changelog of the site itself (v2 entries as they happen) — proves the shipping discipline live. |
| `/me` | The engineer | Digital self surface + plain-text bio, experience and education (verified only), the declared 2023→present gap, contact paths. |
| `/contact` | Contact | Direct routes: email, GitHub, LinkedIn, X. No form unless an email endpoint exists (legacy EmailJS is not assumed). |
| `/api/ask` | — | Server route backing the digital self (streaming; strictly server-side keys). |
| `404` | — | In-world: a "not shipped" page that suggests where the visitor probably meant to go. |
| `og/[slug]` | — | Generated OG images via `next/og` (edge) — on-concept: each page's image is a build sheet. |

## Entry intents (how real visitors arrive)

- **Recruiter, 60 seconds** → `/` → `/work` → one unit page → `/contact`. Every
  step answers one question: can this person ship, and how do I reach him.
- **Engineer, evaluating** → `/how` directly (it is linked in the header rail
  from every page), then unit pages for the decisions.
- **Person with a problem to solve** → `/me`, asks the digital self a real
  question; it routes to the closest unit page or says plainly what he has not
  done (e.g., games) rather than implying otherwise.
- **Curious stranger from social** → lands on any deep link; every page carries
  full chrome and a one-line orientation.

## Navigation rules

- Persistent header rail on every route: name, the four real destinations
  (Work / How / Log / Me), availability state. Nothing hidden behind hover.
- Breadcrumb inside `/work/[slug]` only; no mega-menus.
- Footer on every page: the self-measuring ledger (route, render mode,
  transferred JS of the current page, build id) + contact shortcut.
- Keyboard: rail is a real link list; skip link to content; focus order follows
  reading order. Mobile: same four destinations, no hamburger-only navigation.

## Content model

Typed TS modules in `src/content/` (single source of truth, imported at build —
no runtime CMS until the user asks for one): `identity`, `streams`, `units`
(projects), `decisions`, `log`, `bio`, `kb` (digital-self knowledge base).
Every unit requires: premise, constraints, ≥1 decision with cost, ≥1 evidence
link, status. Content that fails these invariants fails the build (enforced by
a unit test) — the discipline is mechanical, not aspirational.
