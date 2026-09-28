# Rebirth · Creative Direction

> Status: SELECTED AND IN BUILD. This document records the concept exploration
> required before implementation (Steps 4–11 of the build process).

## What was rejected, and why it cannot leak

The previous direction ("Inspection Copy" — a self-annotating paper ledger)
was rejected in full. Its **facts** survive the audit (repos, deployments,
dates, honest gaps). Its **design DNA** must not: warm paper `#F2EEE3`,
verdict green, Iowan serif + mono pairing, ruled chapter bands, the loupe /
testimony-chip interaction, exhibit letters, dashed "content gap" boxes, the
colophon session record — all quarantined in `_attic/reimagination/` and
excluded from the new world by explicit rule below.

## Research base (outside the portfolio category)

Principles extracted, visuals not copied:

1. **Museum exhibition design** — visitors arrive with intentions; orient them
   in one gesture; narrative flow from attraction → orientation → depth;
   reward the visitor who stays longer.
2. **The Pudding / scrollytelling** — guided but free: a narrator structure
   with branches the reader may leave and rejoin; craftsmanship lives in the
   join points.
3. **Architectural case studies** — a work is presented as a *decision
   narrative*: what existed, what problem, what constraint, what decision,
   what was built, what it became. Buildings are never shown without their
   problem.
4. **Diegetic game UI** — the strongest interfaces are world objects: the
   interface belongs to the fiction (Dead Space's spinal health bar), needs no
   chrome, and teaches itself.
5. **Interactive fiction** — branches must reconverge; choice without
   consequence is decoration; structure the graph, then craft the joins.

## Concept A — "The Interview"

**Central idea.** The portfolio *is* a job interview, staged honestly: you
arrive as the interviewer; the site behaves like a candidate who has prepared
— and who hands you the transcript at the end.

**Visitor journey.** The site greets you as an interviewer ("You're here to
evaluate me. I've prepared."). You proceed through rooms: opening statement,
work examined under questioning, cross-examination on hard decisions, your
notes accumulate, and the site compiles a printable evaluation packet —
evidence you selected, quotes, the résumé — as a closing gift.

**Visual world.** Interrogation-room stillness: a table, a lamp, manila
folders, stamped documents.

**Interaction model.** Question-driven; you choose what to ask next.

**Risks.** A gimmick with a short shelf life; interviews imply the visitor
holds power the site keeps pretending to surrender; tone collapses into
theater fast; the "notes" mechanic risks feeling like surveillance.

**Why it communicates engineering.** Cross-examination is a natural home for
constraints and trade-offs. **Leadership:** answering hard questions directly.
**Craft:** the transcript artifact. **Verdict: rejected** — the metaphor
expires after one visit and the fiction outruns the evidence (no real
interviews were staged).

## Concept B — "The Systems Atlas"

**Central idea.** The portfolio is an **atlas of systems** — not a list of
projects, but a navigable territory where each work is a system shown in
cross-section: its layers (interface, API, data, platform), the terrain of
decisions, and the routes between them. Frontend, backend, mobile and
architecture appear as *regions of the same map*, not departments — directly
serving the brief's demand that the engineer not be boxed as frontend.

**Visitor journey.** You enter through an orientation plate ("Every system
has layers. Here, so does this portfolio."). The atlas index lets you enter
by **region** (what you need: an interface problem, a mobile product, a data
problem, a whole system) or by **artifact** (the six works). Each artifact is
a cross-section: an exploded diagram of its real layers with the decisions
pinned where they happened. Traces connect artifacts to the technologies
they exercise.

**Visual world.** Cartographic: paper maps, contour lines, graticules, legend
plates, compass roses reduced to their logic. Light, technical, precise.

**Interaction model.** Zoom as narrative: index → region → cross-section →
decision. Every layer of an artifact can be isolated; decisions live *on*
the layer they concern.

**Risks.** Maps flirt with decoration (compass roses that do nothing);
"atlas" can become a folder of diagrams; risk of chrome-heavy HUD feel.

**Why it communicates engineering.** Cross-sections are honest: a system's
layers are really there. **Leadership:** decisions pinned to layers read as
ownership. **Craft:** cartographic discipline (graticules that align,
legends that match reality) is verifiable. **Verdict: strong runner-up** —
but its spatial language risks becoming wallpaper: maps about work, not work
itself.

## Concept C — "The Working Engineer" (SELECTED)

**Central idea.** The portfolio is a **window onto a working practice**. Not
a gallery of finished work and not a self-inspecting document: a *practice
room* where engineering is shown as an ongoing activity — a bench with the
current work on it, the systems laid open in layers, the problems being
worked, and a presence that greets you and answers. The metaphor is the
engineer's own desk, not a museum and not a courtroom: this is where work
*happens*, so this is where you evaluate it.

**Visitor journey.** You arrive at the bench. A voice — the engineer's,
plainly — orients you in one breath: who works here, what's on the bench,
and the three ways through. You may read linearly (the practice, top to
bottom), enter by need (I have a problem like X), or open any system on the
bench and walk its layers. Every system shows its cross-section: the layers
that really exist in it, the decisions pinned where they were made, the
honest state of the artifact today.

**Visual world.** The world the work actually happens in: light, precise,
instrument-like — the atmosphere of a well-kept engineering bench. Surfaces
are calm; the *content* is the intensity. Color is structural (state, not
decoration).

**Interaction model.** Three entrances, one truth:
1. **The read** — a linear tour, top to bottom, guided.
2. **The desk** — enter by what you need (a frontend problem, a mobile
   product, a full system, an evaluation).
3. **The bench** — open any artifact and walk its real layers.

**Narrative structure.** Branches that reconverge: every entrance reaches
the same artifacts; the entrances differ in *ordering and framing*, not in
facts. Craft lives in the joins.

**Technical opportunities.** Layered cross-sections are a natural fit for
declarative layer isolation (CSS, not WebGL); the "voice" is a scripted,
truthful guide (see the presence, below); multi-page routes make the three
entrances real.

**Risks and mitigations.** "Working desk" metaphors can get cluttered —
mitigated by instrument-grade restraint (calm surfaces, intense content).
A "virtual me" can slide into gimmick — mitigated by making the presence a
**scripted voice, never improvised**: it only ever says things verified in
the record, it never pretends to think, and its job is orientation, not
performance. (This is the faithful interpretation of Section 9: a genuine
digital representation — it speaks only what the owner has vouched for,
which is exactly what a truthful representation can do.)

## Step 8–11 · Architecture of the world

### Information architecture (multi-page, routes with intent)

- `/` — **The Bench.** Presence orients you; the systems sit on the bench as
  openable objects; the three entrances are offered.
- `/desk` — **Enter by need.** Intention modes: a frontend problem · a mobile
  product · a data/API problem · a whole system · evaluating for a role.
  Each mode is a curated assembly of the same evidence, re-framed.
- `/bench/[system]` — **Cross-sections.** One route per system: its real
  layers as parallel plates, decisions pinned on the layer they concern,
  honest status, evidence links.
- `/record` — **The record.** Experience, training, the archive, the
  2023→present gap — verified, with gaps marked.
- `/contact` — **Correspondence.**

### Visual language

World: a well-kept engineering bench in daylight — cool, luminous,
instrument-grade. Not warm paper (banned DNA), not dark-tech (cliché).

- **Ground:** cool near-white `#F3F4F1`; panels `#FFFFFF`; depth as machined
  steps, not blur shadows. One elevation device: a hard 2px offset (a plate
  lifted off the bench), never a soft glow.
- **Ink:** slate `#1B2226`; secondaries by lightness only.
- **Structural accent:** oxide red `#B3402A` — machine enamel, the color of
  switches and measurement marks. It marks *state and pin*, nothing else.
- **Type:** the grotesque leads (instruments, not novels): system sans stack;
  mono is the record voice. Inverted emphasis from the rejected world.
- **Form:** square (machined), hairline edges, an 8px base grid, visible
  alignment. The signature composition is the **cross-section**: parallel
  plates (INTERFACE / STATE / DATA / PLATFORM / CONTRACT) with decisions
  pinned where they were made.
- **Motion:** reveal-once on entry, ≤240ms, one curve; plates isolate on
  hover/focus (siblings recede); nothing loops, nothing follows the cursor.

### Interaction model

Three entrances, one truth: the read (linear), the desk (by need), the bench
(by system). Inside a cross-section, layers are isolable — hover/focus dims
siblings and surfaces that layer's decision pins; arrow keys walk plates.
The **presence** is a scripted orientation voice on the bench page: it says
only what the record vouches for, never improvises, never performs — a
truthful digital representation whose job is wayfinding, not cosplay.

### Technical architecture

- **Next.js (App Router) + TypeScript** — multi-page routes with intent,
  static generation for cross-sections, metadata per route, no client-side
  data fetching anywhere.
- **Hand-written CSS** with custom properties (tokens in `globals.css`);
  co-located class families; the design system is inspectable source.
- **Zero runtime deps beyond Next/React.** No animation library (CSS reveals
  via a tiny IntersectionObserver), no icons package (inline SVG marks), no
  fonts downloaded (system stacks).
- **Budgets:** ≤130KB first-load JS gzipped, ≤20KB CSS, zero images, zero
  network calls after load, LCP < 1.5s on the entry route.

**Why it communicates engineering across the stack.** The bench displays
systems in layers: interface, service, data, platform — and the works span
those layers *in reality* (Solidity contract, RN mobile app, full MERN
exercises, Chrome extension, production front ends). Layered presentation
makes the range structural, not rhetorical.

**Why it communicates leadership.** Ownership is shown as what sits *on the
bench*: systems the engineer carried end-to-end, decisions with names on
them, mentoring and collaboration evidenced in the record.

**Why it demonstrates craftsmanship.** The bench's calm is the
craftsmanship: instrument-grade typography, alignment, state-as-color, and
the discipline that nothing appears without evidence.

## Selected: Concept C — reasoning

- The Interview expires after one visit and outruns the evidence.
- The Systems Atlas is honest but its spatial language risks becoming
  decoration; its cross-section insight is absorbed into C.
- The Working Engineer is the only concept where **the visitor's evaluation
  and the engineer's reality are the same object**: the bench. It frames
  full-stack range structurally (layers, not lists), gives the "virtual
  version of me" a non-gimmick role (orientation voice bound to verified
  facts), supports three entrances without fiction, and its world (a
  practice, not a museum) is the one the evidence actually supports — a
  working engineer with public artifacts.
