# 10 · Content & voice guide

## The voice

A sharp, honest engineer who ships. Short sentences. Concrete details.
Occasional dryness; no jokes that age. Confident without adjectives. The unit
of the voice is the **claim + its evidence**, and where a claim has a cost,
the cost ships next to it.

**Banned outright:** passionate · innovative · cutting-edge · leverage ·
seamless · crafting digital experiences · results-driven · "in today's
fast-paced world" · "touch of magic" · "brighter future" · any emoji in copy ·
any exclamation-mark enthusiasm · any stat that isn't verifiable.

## Before / after (real samples from the legacy record)

**Meta description.**
Before: *"I'm a passionate Software Engineer with a love for creating elegant
and efficient solutions to complex problems…"*
After: *"Freedom Nanewortor — software engineer. I ship web front ends,
mobile apps, and the systems underneath them. This site discloses its own
build the way I'd want any system of mine inspected."*

**OG title.** Before: *"Freedom — Crafting Digital Experiences"*
After: *"Freedom Nanewortor · Software engineer · Shipped work, published
decisions"*

**Hero.** Before: *"I'm a Software developer" + "Hire Me" button.*
After: *"Software engineer. Web, mobile, and the systems underneath them."*
Availability stated as a fact line ("Open to full-time and contract work" —
pending user confirmation), not a button that begs.

**Stats counters.** Before: *"198 Project completed · 427 Satisfied clients ·
35 Nominees winner"* (template fiction).
After: the real ledger — routes, build size, last ship date. The site counts
only what it can prove.

**Project card title.** Before: *"Tesla Clone — Web."*
After: *"Tesla Clone — a learning build of Tesla's landing flow (2021).
Source only. Not represented as production work."* Clones stay visible and
labeled, never featured.

**Contact.** Before: *"Let's talk about everything!"*
After: *"The fastest route is email. I read it daily."*

## Structural writing rules

- Unit pages follow: **premise → constraints → decisions with costs →
  stack by layer → evidence → limits**. No section exists without content
  in every field (enforced by tests).
- One idea per sentence where possible. Numbers written as digits.
- The 2023→present gap: one plain paragraph, stated once, on `/me`. Never
  styled as a motif, never repeated as decoration.
- The digital self's writing = this voice, slightly more terse. It says
  "I don't have that in the record" — never "As an AI…"

## Content pipeline

Everything ships from `src/content/` typed modules + this guide. Adding a
project = one module + evidence links; a test fails the build if any unit
lacks premise, a decision-with-cost, evidence, and status. The user can
extend the site without touching components.
