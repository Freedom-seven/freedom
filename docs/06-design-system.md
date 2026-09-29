# 06 · Design system

> Banned DNA from both rejected attempts: warm paper palettes, serif+mono
> editorial pairing as identity, verdict-green stamps, dashed "gap" boxes,
> machined-plate metaphors as page furniture. The system below shares zero
> tokens or devices with them.

## Ground and ink

- **Ground:** near-white with a cool cast (`#F4F5F7`), not paper-warm, not
  dark-mode. The site is readable in daylight by default — the anti-cliché move.
- **Ink:** `#14181D` for text, `#5A6472` for secondary, `#9AA3AE` for the
  faintest allowed label (still ≥4.5:1 on ground at label sizes).
- **Accent, single, structural: oxide orange `#C2410C`.** Used only for state:
  active nav pin, focus rings, live indicators, the ledger's measured numbers.
  Never for decoration, never at rest on text.
- **Dark ground exists only inside machine surfaces** (status tiles, the ask
  console, code/ledger readouts) — machine reads dark, document reads light.
  This split is the system's signature, not a theme toggle.

## Type

Two voices, both self-hosted via `next/font` (zero external font requests):

- **Voice 1 — a characterful grotesk** for document reading and display.
  Candidate: **Space Grotesk** (distinct, engineered personality, not
  Inter/Roboto-adjacent). Weights 400/500/700, latin subset only.
- **Voice 2 — a workhorse mono** for everything machine: the ledger, status
  surfaces, the ask console, code. Candidate: **IBM Plex Mono** (readable at
  small sizes, engineered heritage). Weights 400/600.

Scale (desktop → mobile): 56/44 display · 28/24 h2 · 20/18 h3 · 17/16 body ·
14 labels · 12.5 mono readouts. Line-height 1.55 body, 1.05 display. No font
below 12px anywhere.

## Grid and space

- 12-column grid, 72px gutters desktop / 20px mobile, max 1160px content.
- 4px base spacing scale; section rhythm 96px desktop / 56px mobile.
- Hairline rules (`#D8DCE1`) to separate structural bands — used sparingly;
  separation is done with space first, rules second.

## Depth and texture

Flat by default. Elevation is a **1px edge + 2px offset shadow** (hard, not
blurred) reserved for interactive machine surfaces only. No glass, no blur,
no gradients. Texture comes from typography and alignment, not ornament.

## Motion principles

- One language: **transform + opacity only, 160–220ms, cubic-bezier(0.2, 0, 0, 1)**.
- Motion always communicates a state change (nav pin moves, ledger counts up
  once on first view, stream filter reorders). Nothing loops; nothing bounces;
  nothing parallax.
- `prefers-reduced-motion`: all transitions resolve instantly; the ledger
  prints without counting. No JS animation library in v1 — CSS covers every
  case (rejected attempts proved the point by shipping without one).

## Sound

None by default. The ask console may add a user-initiated keystroke click only
if it survives the craft pass — silence is the default instrument.

## Components (v1 set)

Header rail · Ledger footer (self-measuring) · Unit plate (work index row) ·
Decision ledger row (decision ↔ cost pairing) · Stream filter · Status tile
(deployed/source-only) · Ask console (digital self surface, dark machine
panel) · Evidence link pair · Build-log entry · OG build-sheet generator ·
Skip link · 404 "not shipped" state.

Every component: visible `:focus-visible` (2px oxide ring, 2px offset), AA
contrast at rest, usable at 320px width, no JS required to be legible.
