# 03 · Concepts — six directions, scored honestly

> Rule from the post-mortem: any vocabulary or device from a rejected attempt
> (loupe, testimony, exhibit, record, plate, verdict, seal, bench, colophon,
> honesty-as-motif, paper/serif editorial warmth) is banned DNA. Each concept
> below was checked against that list.

## The six

### 1. FLIGHT RECORDER *(seed A, remixed)*
**Pitch.** The portfolio is a flight-data recorder from a production incident.
Each project is a replayable timeline: logs, traces, decisions, and mistakes at
each moment, outcome at the end. Credibility through honest failure.
**Mood.** Crash-lab dark, phosphor readouts, mono everything.
**Navigation.** Scrub timelines; incidents are the sitemap.
**Signature moment.** Scrubbing to the exact second a real decision went wrong.
**Risks.** Fabricates incident drama that the public record does not contain —
no real production incidents, logs, or traces exist in the record. The honest
material cannot fill the metaphor; it would require invention. **Scores well on
honesty, fails on content truth. REJECTED — the record cannot supply its fuel.**

### 2. THE LIVING SYSTEM *(seed B, remixed)*
**Pitch.** The site is a running distributed system drawn as a map: edge, API,
queue, store, mobile client. A visitor's own visit visibly travels the
architecture; the portfolio proves backend/mobile claims by *running* them.
**Mood.** Instrument-dense, live, always moving.
**Navigation.** Move through the topology.
**Signature moment.** Watching your own request traverse the map.
**Risks.** Needs real server infrastructure the hosting record does not show;
the "map of the site" risks becoming a diagram of diagrams. Strong, but the
verified record (static Netlify deploys) cannot yet prove it runs. **KEPT AS
A COMPONENT — its "prove it by running it" layer appears in the selected
direction at smaller, honest scale.**

### 3. THE WORKBENCH *(seed C)*
**Pitch.** A tactile desk; each project an object you pick up and disassemble
into exploded layers — backend, web, mobile stacked like hardware.
**Verdict.** This is the previous attempt's concept (banned DNA: bench, plates,
cross-sections). **REJECTED — recycles rejected DNA directly.**

### 4. THE FIELD GUIDE *(seed D)*
**Pitch.** Radical editorial print; projects catalogued like specimens with
classification codes and marginalia.
**Verdict.** Closest cousin to attempt 1's paper world (banned DNA: paper,
editorial warmth, classification plates). **REJECTED — recycles rejected DNA.**

### 5. THE CONVERSATION *(seed E, remixed)*
**Pitch.** No menu; the site opens as a conversation with a digital self; the
screen reshapes around topics.
**Risks.** Depends entirely on a third-party LLM at runtime; when the API
fails, the site must fall back to a fully designed conventional navigation —
meaning the fallback is the real site and the conversation is decoration.
Conversation-first also fails recruiters on time-to-information. **KEPT AS A
LAYER — the digital self appears in the selected direction, but never as the
only path.**

### 6. THE SPECIFIC MACHINE — "ONE BUILD, FULLY SHIPPED" ★ SELECTED
**Pitch.** The portfolio stops *describing* engineering and starts *being one
shipping build*: the site is presented the way a serious engineer ships a
product — with a public build log, a live status surface, a real changelog,
per-page "how this is built" disclosures (bundle size, route, render mode
printed in the footer of each page), and a digital self that guides visitors
through it. Projects appear not as cards but as **shipped units inside one
continuous release history**: what shipped, why, what it cost, what broke,
what the next release fixed. Frontend, backend, and mobile are visible as
the *release streams* of one engineer's output, not departments.
**Mood.** Machine-shop precision at instrument grade: cool daylight ground,
machined elevation, oxide accent used only for state and pins. Function-first
typography; every mark has a job.
**Navigation.** Conventional and strong (routes, keyboard, mobile) — the
recent lesson is that an unusual interaction must sit *on top of* a complete
site, never replace it.
**Signature moment.** The build ledger: each page footer prints its own real
bundle weight and render mode, and the digital self can be asked "what did
this cost you?" about any visible decision — and answers with the recorded
cost, or refuses.
**Why nobody's looks like this.** Portfolios imitate *products* (hero, cards)
or *artifacts* (editorial, paper). Almost none imitate **the shipping
discipline of engineering itself** — and none of the six concepts above can
be filled by the verified record as completely as this one: every project has
a real repo, a real deployment, and auditable source. Honesty here is not a
motif; it is the material, and it is already true.
**Scored against the brief.** Inspectable: yes (every page discloses itself).
Signature moment: the ledger + digital self. Full-stack proof: release streams
by layer, Krypto's contract layer, EasyParcel's Node/Mongo, React Native row.
Fallback-proof: the conventional site IS the site. Content truth: zero
invention required — the strongest property, and the reason it beats 1, 2, 5.
