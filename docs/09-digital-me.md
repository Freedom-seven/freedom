# 09 · Digital-me spec — "The Engineer's Stand-in"

## What it is (and refuses to be)

A wayfinding and Q&A layer that can speak about the record: guide a visitor to
the right unit, explain a recorded decision, answer common interview-style
questions, help someone think through a technical problem — always from a
curated knowledge base, never improvising. It presents itself honestly: a
digital stand-in, built from the record, not a live person.

**Refuses:** fake personality, invented achievements, "live me" pretense,
generic corporate assistant voice, autoplaying audio, chat-bubble cosplay.

## Presence (woven, not bolted)

- Lives in the ask console: a dark machine panel (the design system's
  "machine surface") that appears on `/me` by default and can be opened from
  the header rail on any page ("Ask").
- Context-aware: the console's opening line names the current page
  ("You're on Krypto Trade's unit page — ask me about the wallet loop."),
  and suggested questions are per-page, drawn from that page's decisions.
- Voice: text-first. Speech is opt-in per message via browser-native
  `speechSynthesis` (zero cost, no API, off by default, keyboard operable,
  labeled "browser voice"). No cloud TTS in v1. No STT in v1 (typed input
  only) — honest scope beats half-working mic UX.

## Two modes, one component

1. **Curated mode (default, no key needed).** The typed question is matched
   against the knowledge base (normalized keyword/intent scoring, all client-
   or edge-side). Exact knowledge, instant, free, unbreakable. Any question it
   can't match returns: "I don't have that in the record — email him." This
   mode is the resilience guarantee: the site is never worse than this.
2. **Live mode (optional, when the user supplies a key).** Same UI; requests
   hit `/api/ask` (Node runtime, server-side key only, streaming response).
   System prompt: "Answer only from the provided record. If it isn't in the
   record, say so and point to email. Never invent employers, metrics, or
   opinions." Retrieved context = the KB + the current page's content, injected
   server-side (visitor text never concatenated before the system prompt;
   visitor input is escaped and never rendered as HTML/markdown-injectable).

## Provider options (decided at build; key is the user's)

| Option | Model | Rough cost per 1k questions | Notes |
|---|---|---|---|
| A (recommended) | Anthropic Haiku-class via API | ~$0.01–0.04 | cheap, fast, streaming; strict system prompt |
| B | OpenAI mini-class | ~$0.02–0.05 | equivalent capability |
| C | local/OSS via edge+small host | compute-bound | only if user refuses paid APIs; weaker quality |
| D | none — curated only | $0 | ships regardless; the fallback IS this |

## Guardrails (non-negotiable)

- Keys strictly server-side; no provider SDK in the client bundle.
- Rate limit: per-IP token bucket (e.g. 10/min, 60/day) via in-memory +
  edge cache; hard monthly cap configured at the provider key (user sets $5
  ceiling); console degrades to curated mode with a one-line notice when hit.
- Prompt injection: record-only system prompt, input length cap (500 chars),
  output rendered as plain text (no markdown link injection), no tool use,
  no browsing, no memory across sessions.
- Logging: request timestamps + coarse tokens in/out, no IPs retained, no
  conversation stored. A privacy line on `/me` states exactly this.
- Abuse: profanity is not moderated (it's an open feed to a model with a
  system prompt); the cap is the real defense; provider-side abuse filters on.

## Knowledge base (curated, written with the user)

`src/content/kb/`: identity · how-the-site-works (mirrors /how) · one entry
per unit (premise, decisions+costs, limits) · experience/education (verified
only) · working style (written together in Phase 5, user-approved word-for-
word) · boundaries (what it won't answer: personal life, private work).
Every entry dated. The KB is the product; the model is optional garnish.

## Fallback ladder (tested at the quality gate)

1. No key / provider down → curated mode (identical UI, honest notice).
2. Rate-limited → notice + curated mode; suggests email for anything else.
3. JS disabled → the KB renders as an FAQ section on `/me` (same content,
   document form). The console is an enhancement of a document, never a gate.
