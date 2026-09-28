# 04 · Architecture

## Stack (and why)

| Choice | Reason |
|---|---|
| Vite 5 + React 18 + TypeScript (strict) | Fast, typed, no framework lock beyond React itself. |
| Plain CSS (`tokens.css` + per-domain sheets) | The design system *is* the deliverable; the page inspects its own CSSOM. CSS Modules would hide the very tokens the loupe reads. |
| No animation library | Dropped framer-motion during the build: every motion need was met with CSS transitions and a `grid-template-rows` disclosure, for ~30KB less JavaScript. The 190ms system does not need an engine. |
| `@emailjs/browser` (only runtime dep beyond React) | Preserved from the legacy site per instruction; the form degrades to an honest "delivery not configured here" note when env vars are absent. |

Final production bundle: **60.9KB JS gzipped + 3.7KB CSS**. React itself is
most of the JS. Zero webfonts, zero images, zero external requests after load.

## Component map

```
src/
  main.tsx, App.tsx          shell: RecordProvider, loupe wrap, sheet, chapters
  types.ts                   CaseFile, ArchiveEntry, ExperienceEntry, Testimony…
  styles/                    tokens · sheet · masthead · notes · casefiles ·
                             experience · fieldindex · archive · voices ·
                             contact · colophon · loupe
  record/
    RecordContext.tsx        single-slice state; stable setters; bail-out updates
    useInspect.ts            native pointerenter/leave + focusin/focusout binding
  loupe/
    Inspectable.tsx          wrapper: id, testimony, tabbability, innermost-wins
    Loupe.tsx                arming bar (I key) + the testimony chip
  content/
    caseFiles.ts             six featured artifacts (verified)
    archive.ts               30 honest entries
    record.ts                experience, education, voices, field index
    testimonies.ts           the testimony registry (what/why/cost + measure(el))
  components/                Chapter, Masthead, FieldNotes, CaseFiles,
                             Experience, FieldIndex, Archive, Voices,
                             Contact, Colophon
```

## The inspector (the load-bearing system)

- `Testimony` = `{ label, what, why, cost, where?, measure?(el) }`.
  `measure` receives the inspected element and returns a string computed
  **now** — CSSOM reads, `getBoundingClientRect`, `matchMedia`, DOM counts.
- `Inspectable` binds an element to its testimony. Native listeners are used
  for hover and focus (more dependable across environments than synthetic
  delegation). Click and focus stop propagation so the **innermost**
  inspectable wins over ancestor chapters. Interactive children (buttons,
  links) speak for themselves and never trigger the wrapper.
- `RecordContext` keeps one state slice (`active`, `lensOn`, `readings`,
  `heard`) with stable `useCallback` setters and functional updates that
  bail out when nothing changed — this killed a real re-render loop found
  during keyboard testing.
- The chip positions in **document coordinates** on desktop (flipping above
  when the element sits low) and becomes a **fixed bottom sheet** below 46rem,
  where the viewport owns placement.

## Unusual decisions, and why

1. **`all: unset` buttons** — the document's controls are typographic, not
   chrome; focus was re-declared with `!important` to survive the reset.
2. **Session record in React state** — deliberately dies with the tab; the
   claim "nothing was stored" is verifiable in the network tab.
3. **The chapter factory** — every chapter carries structural testimony with
   a live band measurement, generated from one function to avoid drift.
4. **Content as typed data** — every fact on the page lives in `src/content/`
   and passes a compiler check; nothing factual is hardcoded in JSX.
