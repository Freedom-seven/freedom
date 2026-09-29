import type { KbEntry } from "./types";
import { identity } from "./identity";

/**
 * The knowledge base — everything the digital stand-in may say.
 * Written from the record only. If a question isn't matched here,
 * the stand-in says so and points to email. It never improvises.
 */
export const kb: KbEntry[] = [
  {
    id: "who",
    keywords: ["who are you", "who is he", "about yourself", "about him", "introduce", "your name", "his name", "freedom"],
    asks: ["Who are you?", "Tell me about yourself."],
    answer: `I'm the digital stand-in for ${identity.name} — software engineer. This page is built from his record: shipped work, published decisions, and the costs that came with them. I can walk you through any of it. I'm not him, and I don't guess.`,
    href: "/me",
  },
  {
    id: "range",
    keywords: ["stack", "range", "frontend", "backend", "mobile", "full", "skills", "technologies", "react", "node"],
    asks: ["What does he work across?", "Is he only a front-end developer?"],
    answer:
      "The record spans web front ends (React, Next.js-era work), back ends (Node.js, Express, MongoDB at EasyParcel), mobile (React Native — Purpl Pay is listed in the legacy record), and a Solidity contract with its web3 client (Krypto Trade). Front end is where the public artifacts are strongest; it is not the whole range. No games yet — he says so himself.",
    href: "/work",
  },
  {
    id: "krypto",
    keywords: ["krypto", "web3", "blockchain", "solidity", "wallet", "ethers", "crypto"],
    asks: ["Tell me about Krypto Trade.", "What did the web3 project involve?"],
    answer:
      "Krypto Trade is a web3 front end over his own Solidity contract on testnet: connect wallet → form → eth_sendTransaction → contract call → confirmation. The decision ledger is on the unit page — including the honest one: the client structure follows a well-known tutorial, and the page says which parts are which. The weakest surface is error handling beyond the missing-wallet case.",
    href: "/work/krypto-trade",
  },
  {
    id: "covid",
    keywords: ["covid", "tracker", "dashboard", "leaflet", "map", "disease"],
    asks: ["Tell me about the Covid tracker.", "How does the dashboard work?"],
    answer:
      "A live dashboard on the disease.sh open API: one coordinated fetch governs the map, table, and stat cards; one country selection derives every view. The trade-offs are published — the single feed is a coupling, the number formatting trades precision for readability, and Leaflet's weight bought correct projections.",
    href: "/work/covid-19-tracker",
  },
  {
    id: "experience",
    keywords: ["experience", "work", "job", "company", "toddlerwalks", "easyparcel", "cotocus", "intern"],
    asks: ["Where has he worked?", "What's his experience?"],
    answer:
      "As published on the legacy record: Frontend Developer (full-time) at ToddlerWalks in 2023, Software Developer intern at EasyParcel (Malaysia) in 2023 working with Node and MongoDB, and an internship at Cotocus in 2022. The public record goes quiet after 2023 — he states that plainly instead of filling it.",
    href: "/me",
  },
  {
    id: "gap",
    keywords: ["2023", "2024", "2025", "gap", "recent", "since", "now", "current"],
    asks: ["What has he done since 2023?", "Why does the record stop in 2023?"],
    answer:
      "It stops because the public record stops. Nothing since 2023 is published on the legacy portfolio, and this site won't invent it. The gap is declared once, in plain text, on /me.",
    href: "/me",
  },
  {
    id: "site",
    keywords: ["site", "built", "how", "stack of this", "next", "portfolio", "made this"],
    asks: ["How was this site built?", "What is this site made with?"],
    answer:
      "Next.js 14 App Router, strict TypeScript, hand-rolled CSS with design tokens, no animation or UI libraries, zero external requests. Every page footer prints its real build facts — route, render mode, transferred JavaScript, build date — generated from the build output, not typed by hand. The /how page has the full disclosure.",
    href: "/how",
  },
  {
    id: "are-you-real",
    keywords: ["real", "human", "ai", "bot", "alive", "llm", "model"],
    asks: ["Are you a real person?", "Am I talking to an AI?"],
    answer:
      "I'm a digital stand-in: a curated knowledge base that answers only from the record — with an optional live mode when a key is configured. I'm not Freedom, I don't improvise, and when something isn't in the record I say so and point you to email.",
    href: "/me",
  },
  {
    id: "hire",
    keywords: ["hire", "available", "freelance", "contract", "job", "contact", "email", "reach"],
    asks: ["Is he available for work?", "How do I reach him?"],
    answer:
      "This site doesn't claim an availability status — the record doesn't establish one. The fastest route is email; he reads it. Addresses and profiles are on the contact page.",
    href: "/contact",
  },
  {
    id: "limits",
    keywords: ["weakness", "limits", "failures", "mistakes", "worst", "honest"],
    asks: ["What are his weaknesses?", "What went wrong in these projects?"],
    answer:
      "The unit pages publish costs next to every decision: Krypto Trade's window.reload() hammer and thin error surface, the Covid tracker's single-feed coupling, tutorial-derived structure where that's true. What this record doesn't have is published postmortems from production systems — that's a gap in the record, not a virtue.",
    href: "/work/krypto-trade",
  },
];

/** Suggested asks shown before any question is typed. */
export const suggestedAsks: string[] = [
  "What does he work across?",
  "Tell me about Krypto Trade.",
  "How was this site built?",
  "What has he done since 2023?",
];
