# 06 · Content Truth Audit & Pre-Launch Checklist

The audit compared every claim in the content modules against primary
evidence (live repositories via the GitHub API, live deployments, the legacy
codebase). Results below.

## Corrections made during the audit (the system working)

1. **Krypto Trade failure modes** — draft claimed handling of "wrong network
   and rejected transactions." Reading `TransactionContext.jsx` showed only
   the missing-wallet case is handled; other errors hit `console.log`, and
   `window.reload()` closes the success path. **Also disclosed:** the client
   structure follows a well-known Web3 tutorial; deployment, contract
   wiring, and debugging are his. Both facts are now in the case file.
2. **Qizz Master "vanilla JS"** — the repo's own `package.json` lists React,
   React Router, and html-entities. Corrected in the case file, the field
   index, and the field note that leaned on it.
3. **Purpl Pay repository** — returns 404; source is not currently public.
   Kept in the archive with exactly that note; excluded from the featured set.

## Verified facts (evidence basis)

- Six featured case files: repos exist; four deployments answer live
  (kryptotrade, covvid19tracker, fruitymart, quizzmasters); Toggle Buttons
  deployment answers; smart-tab-organizer is source-only with a boilerplate
  README (stated as such).
- Krypto Trade: `client/` (Vite, React 17, Tailwind, ethers 5) +
  `smart_contract/` (Solidity) verified via repo tree and source.
- Covid-19 Tracker: disease.sh fetches, Leaflet, MUI, numeral verified in
  `App.js`.
- Fruity: ~97KB JS + ~40KB CSS, React Router, FontAwesome verified.
- smart-tab-organizer: React 18 + CRA manifest verified.
- Field index rows: each resolves to a repo that exercises the technology.
- Archive: 30 entries; links carried from the legacy data; deployments from
  2022–23 may no longer resolve (the archive says so on its face).

## Content gaps — MUST resolve before launch (owner: the portfolio's author)

- [ ] **Career 2023 → present.** The record suspends after ToddlerWalks /
      EasyParcel (2023). The site ships with a visible `CONTENT GAP —
      awaiting confirmation` block and a "record suspended" timeline entry.
      Fill with verified roles/dates; then remove the gap block, the gap
      testimony, and the timeline placeholder in `src/content/record.ts`.
- [ ] **Testimonial consent.** Three voices carry `consent pending
      re-confirmation before launch`. Re-confirm with Emmanuel, Isaac, and
      Mr. Francis — or delete the quotes. The consent note renders publicly.
- [ ] **Blog content** — none shipped (legacy blog was external images and
      dead links). Add writing only if real posts exist.
- [ ] **Résumé PDF** — `public/resume.pdf` is the legacy 2-page file from
      ~2023; refresh it before linking it in production.
- [ ] **EmailJS env vars** — set `VITE_EMAILJS_SERVICE_ID`,
      `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` (see
      `.env.example`). Without them the form honestly reports itself
      unconfigured and shows the email route.
- [ ] **Location** — omitted entirely per instruction. Revisit only if the
      author wants it published.
- [ ] **Deploy target** — update `og:url` in `index.html` if the domain
      changes from freedomintech.netlify.app.

## Known limitations

- Loude hover requires arming by design; some visitors will never arm it —
  accepted, the surface read is complete without it.
- The loupe bar hides on scroll by design (it belongs to the top of the
  document); `I` and the corner button on mobile remain reachable.
- Programmatic `.focus()` in some automated Chromium contexts does not fire
  React's synthetic focus — native `focusin` binding covers real keyboards;
  Enter/Space also open testimony on tabbable inspectables.
- GitHub API rate limits could someday break the *links* (never the page —
  no content is fetched at runtime).
