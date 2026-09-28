# 05 · The Inspector System

## Testimony schema

```ts
interface Testimony {
  label: string;                 // shown in the chip head and the bar's "reading:"
  what: string;                  // authored, honest description
  why: string;                   // the decision, in plain language
  cost: string;                  // what the decision gave up — always present
  where?: string;                // outward evidence link
  measure?: (el: Element) => string;  // RUNTIME truth slot, measured on open
}
```

The chip renders `what` prefixed by the live measurement when `measure`
exists: *"3 decisions each stated with its cost; 2 evidence links; block
measured 812px just now — A case file: premise, constraints…"*.

## Runtime truth slots in production

| Slot | Technique |
|---|---|
| Active grid columns | `getComputedStyle(el).gridTemplateColumns` |
| Overflow check | `scrollWidth <= innerWidth` |
| Band position / document height | `getBoundingClientRect` + `scrollHeight` |
| Token resolution | `getPropertyValue('--paper' / '--ink' / '--verdict' / '--rule')` on the element, falling back to `:root` |
| Type voice | computed `fontFamily` / `fontSize` of the inspected `h1` |
| Case-file shape | counts of `.case-decisions li` and `.case-links a`, block width |
| Archive / index size | counts of `.archive-row` / `.field-row` |
| Inspectable population | count of `[data-inspectable]` |
| Session line | the record's own rendered text, quoted back |

Resize the window and the testimonies change, truthfully, because the page is
measuring itself — that is the difference between annotation and instrument.

## Reflexivity — exactly one level

The loupe's testimony (`id="loupe"`) describes the loupe, measures its own
arming tab, and states its cost ("≈4KB of JavaScript and your attention").
There is no second-order inspection; infinite meta is a gimmick, per the
approved concept.

## Interaction rules

1. **Arming**: `I` toggles the lens (skipped while typing in inputs). The
   arming tab is a real `<button aria-pressed>`. Armed state: verdict border.
2. **Hover** (armed only): native `pointerenter`/`pointerleave` open and close.
3. **Focus** (always, armed or not): native `focusin`/`focusout`. Moving focus
   to a child link does not close the parent's testimony.
4. **Click/tap**: opens testimony; `stopPropagation` makes the innermost
   inspectable win; buttons and links never trigger their wrappers.
5. **Escape**: closes. **Close button**: closes and disarms — the lens is a
   deliberate act, not a sticky mode.
6. **Out of view**: scroll/resize closes when the element leaves the viewport.
7. **Reduced motion**: durations collapse to 1ms; testimonies persist as
   content, movement disappears.

## Accessibility model

- Structural testimonies are `tabbable` (`tabIndex=0`, `role=button`,
  `aria-label="Inspect: …"`) and join the tab order; inline ones don't.
- The chip is `role="dialog"` with `aria-label`.
- The session record and form status are `aria-live="polite"`.
- Skip link → `#main`. Focus outlines are verdict green and survive resets.
- The mobile sheet is a fixed overlay with a veil; placement is owned by the
  viewport, not the document.

## Counters and honesty

`readings` counts **distinct** testimonies (re-reads don't inflate); `heard`
keeps the last four labels. Both are displayed in the colophon and stored
nowhere.
