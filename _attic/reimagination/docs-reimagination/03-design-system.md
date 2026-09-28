# 03 · Design System

## Material

One ground, one ink, one verdict color. Defined in `src/styles/tokens.css`.

| Token | Value | Role |
|---|---|---|
| `--paper` | `#F2EEE3` | the ground. Warm paper, not white — white reads as an app. |
| `--paper-hi` | `#F8F5EC` | raised paper (bars, boxes) |
| `--paper-shade` | `#E9E3D3` | recessed paper |
| `--paper-dim` | `#B7AD93` | printed metadata on dark chip |
| `--ink` | `#232019` | warm near-black body ink |
| `--ink-soft` | `#5C5544` | secondary text |
| `--ink-faint` | `#6F664E` | metadata (darkened in review to hold WCAG AA at small sizes) |
| `--verdict` | `#1E7A35` | **the only color.** Marks what the document vouches for. |
| `--rule` / `--rule-strong` | ink at 18% / 42% | hairline rulings |

The verdict green is spent exclusively on verification surfaces: the
"deployed" seal, the seal stamp, the runtime measurement text, focus outlines,
the armed loupe border. It never decorates.

## Type

Two voices, zero webfonts:

- **Document serif** — `"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif` — the page speaks in it.
- **Record mono** — `ui-monospace, "SF Mono", "Cascadia Mono", Menlo, Consolas` — measurements, records, and metadata speak in it.

Fluid scale, clamp-bounded, seven steps (`--step--1` … `--step-5`). Body copy
is capped at a 64ch measure (`--measure`). Long chapter titles wrap with
`hyphens: auto` like print documents.

## Space and grid

One spacing scale (`--sp-1`…`--sp-7`), a document margin
(`clamp(1.25rem, 4vw, 4rem)`), and a max width of 76rem. Chapters are ruled
bands on an asymmetric two-column grid: a 170–250px title column and the body
column. Below 46rem the document becomes one column and the chapter head
wraps to a baseline row — the same world, re-set, not a shrunk desktop.

## Surfaces and rules

No shadows. No gradients anywhere in the codebase. Depth is expressed with
paper shifts (`--paper-hi`, `--paper-shade`) and 1px rulings. The archive's
disclosure animates via `grid-template-rows` — no transforms, no JS
measurement.

## Interaction states

- **Focus**: 2px verdict outline, offset 3px, declared `!important` so it
  survives the `all: unset` resets on buttons.
- **Armed loupe**: the arming tab's border turns verdict green — the page is
  listening.
- **Deployed vs source-only**: green outline seal vs. faint gray seal. Honest
  status is a first-class visual state.
- **Hover**: rulings and verdict color; never shadows, never scale.

## Motion law

One duration token (`--t: 190ms`), one curve (`--ease`). Chip transitions
opacity only. `prefers-reduced-motion` collapses all durations to 1ms and
disables smooth scrolling — testimonies still open, nothing travels.
