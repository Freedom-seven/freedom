# 13 · Risk register

| # | Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|
| 1 | Identity/contact facts unverified (name form, email, location, availability) | **Certain (open)** | High — wrong name on a portfolio is disqualifying | Blocking questions in doc 02; content modules carry placeholder-free gaps until answered; design work proceeds without them | User → me |
| 2 | 2023→present gap misread by visitors as hiding something | Medium | Medium | One plain declaration on /me; gap named in voice, not styled | Me |
| 3 | LLM live mode: cost overrun / abuse | Medium | Medium | Curated mode is the default and the floor; per-IP caps; $ ceiling set at provider; no IP retention | Me |
| 4 | Provider key never supplied | Medium | Low | Curated mode ships regardless (doc 09 option D); live mode is additive | Me |
| 5 | Netlify Next runtime mismatch (route handlers/og) | Medium | Medium | Decision gate at M1 deploy test; Vercel is the fallback; either way static core is portable | Me |
| 6 | Scope creep on signature moments | High | High | Ledger scope frozen in doc 08's complete micro-interaction list; anything new requires cutting something equal | Me |
| 7 | Session/tooling instability corrupts repo state | **Observed this session** | High | Archive tag pushed; small atomic commands; commit after every milestone; destructive ops re-verified twice | Me |
| 8 | "How" page numbers go stale | Medium | Medium | Numbers generated from build manifest; mismatch fails build | Me |
| 9 | Testimonials unusable (unverifiable) | Likely | Low | Drop rather than fabricate; list as open question | User → me |
| 10 | OG image generation quirks at edge | Low | Low | Static fallback OG per route if gen fails | Me |

**Standing rule from the post-mortem:** any feature that cannot survive the
"every external service failed" test ships as an enhancement, never a
dependency.
