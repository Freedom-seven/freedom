# 02 · Content inventory (Phase 1 — Discovery)

> Every fact below was read from the legacy repo itself (`src/` at `962bfa8`, tip of
> `master`). Items marked **VERIFIED** were confirmed against the live public record in
> an earlier audit pass (GitHub repos read file-by-file; deployments answered).
> Items marked **UNVERIFIED** must not ship until you answer.
> This document is the only source the new site's content modules may draw from.

## 1. Identity

| Fact | Value | Source | Status |
|---|---|---|---|
| Display name | "Nanewortor Patrick Freedom" | legacy hero | UNVERIFIED — two orderings exist; git author says "FREEDOM". Need your call. |
| Email | freewhynane62@gmail.com | contact mailto link | VERIFIED as published address; confirm still wanted |
| GitHub | github.com/Freedom-seven | legacy socials | VERIFIED |
| LinkedIn | /in/freedom-patrick-nanewortor-a22235212 | legacy socials | VERIFIED URL; profile content unchecked |
| Twitter/X | @FreedomWhyte | legacy socials | VERIFIED URL; account liveness unchecked |
| Site (old) | freedomintech.netlify.app | og:url | VERIFIED |
| Location | Ghana | — | UNVERIFIED — appears only in a rejected attempt's file, never confirmed |
| Role | "Software developer" / "Software Engineer" (meta) | legacy | UNVERIFIED framing; brief says: full-stack + mobile, not frontend-boxed |
| Availability | "Hire Me" button only | legacy | UNVERIFIED — open to work? full-time/contract? |

## 2. Projects — 28 entries in the legacy grid

**Flagships (VERIFIED live + source-audited in the earlier pass):**

| Project | Year | Deployment | Repo | Stack (from source audit) |
|---|---|---|---|---|
| Covid-19 Tracker | 2021 | covvid19tracker.netlify.app | covid-19-tracker | React, Leaflet, MUI, disease.sh |
| Krypto Trade | 2022 | kryptotrade.netlify.app | web3.0 | Vite, React, ethers.js, Solidity (testnet), Tailwind |
| Qizz Master | — | quizzmasters.netlify.app | quizmaster | JS app; its own package.json lists React, React Router, MUI |
| Fruity | — | fruitymart.netlify.app | fruity | larger JS app (~57KB) |

**Web, deployments not re-checked this run (list as-is from legacy):**
Chezz Food, Brownies Hotel, BeeTech, Elite Homes, Flower Boutique, Tulip Restaurant,
The Fitness Club, Oganic Foods, Trip Hub, Netflix Clone, Resort Hotel, Tesla Clone,
Amazon Clone, Timeless Tour.

**Design/interaction experiments:** Toggle Buttons, Balance, Bouncing Cycles, Creadit
Card, Glow Animation, Hot Cup of Tea, Lamp Animation, Product Card, Flying Plane.

**Problem entries:**
- **Purpl Pay** (Mobile, React Native) — listed with GitHub link only, no deployment.
  The earlier audit found the repo 404s. Need your call: drop, or archive honestly.
- The three "clones" (Netflix/Tesla/Amazon) — keep as honest learning artifacts or prune.

## 3. Experience & education (legacy resume data)

| Role | Org | Year | Notes |
|---|---|---|---|
| Frontend Developer (full-time) | ToddlerWalks | 2023 | mentoring mentioned |
| Software Developer (intern) | EasyParcel Sdn. Bhd. (Malaysia) | 2023 | JS, React, Node, MongoDB |
| Software Developer (intern) | Cotocus | 2022 | |

Education: **CodeTrain** (program: HTML/CSS/JS, React, React Native, MongoDB, Express,
Node), **Coursera** (DSA, full-stack courses), **Udacity** (Front-End Nanodegree).
Years are commented out in the source — UNVERIFIED.

## 4. Testimonials

Three entries: Emmanuel (team mate), Isacc (team mate), Mr. Francis (client).
**UNVERIFIED and suspect**: two entries share the same stock avatar file, one avatar
appears twice for different people. Will not ship without your confirmation of the
people and the quotes.

## 5. Banned legacy facts — never carry forward

- The stats counters ("198 projects", "5670 cup of coffee", "427 satisfied clients",
  "35 nominees winner") — template fiction, contradicted by the 28-project reality.
- Copy: "Crafting Digital Experiences", "passionate Software Engineer", "touch of
  magic", "code a brighter future, one line at a time", "Let's talk about everything!".
- Font Awesome kit + icon-font decoration.

## 6. Assets

`public/resume.pdf` (keep — confirm current), favicon set, avatar, 28 work screenshots
(screenshots only; the new site will not reuse this visual language — assets may be
re-shot or dropped).

## 7. The gap (declared, not hidden)

Public record shows 2024–2025 activity (TypeScript work, creative-credits-frontend)
but **no employment history after 2023**. The new site declares this gap plainly and
never invents it.

## 8. Questions for you (blockers for content, not for design work)

1. Display name — "Nanewortor Patrick Freedom" or another form?
2. Publish freewhynane62@gmail.com?
3. Ghana — OK to show?
4. Availability right now — open to full-time, contract, both, neither?
5. Dead links: I'll re-check all 24 non-flagship deployments; anything you already know
   is dead (or repos you want kept private) — tell me now.
6. Purpl Pay — keep as an honest archive row or drop?
7. Testimonials — real people? Quotes approved by them? Their roles?
8. Education years for CodeTrain / Coursera / Udacity?
9. Is `public/resume.pdf` current?
10. Custom domain planned, or netlify.app?
11. For the digital-you feature later: which LLM provider (and key) can you supply?
