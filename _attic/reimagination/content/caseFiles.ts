import type { CaseFile } from "../types";

/**
 * Case files. Every factual claim in these files was verified against the
 * public repositories and live deployments before being written. Where the
 * record is thin, the text says so. Nothing here is aspirational.
 */

export const caseFiles: CaseFile[] = [
  {
    id: "krypto",
    exhibit: "A",
    name: "Krypto Trade",
    kind: "Web3 front end over a smart contract",
    year: "2022",
    status: "deployed",
    premise:
      "A web application that talks to the blockchain: connect a wallet, read on-chain state, send transactions — the full Web3 loop in one interface.",
    constraints:
      "The contract speaks in hex and wei; users do not. The client had to make wallet state, network state and transaction state legible at the same time, on a free test network.",
    decisions: [
      {
        made: "Built the client on Vite + React with Tailwind, structured around a TransactionContext holding all wallet and contract state.",
        cost: "One context owns everything web3 — simple to follow, easy to tangle as it grows.",
      },
      {
        made: "Wired the full loop for real: connect wallet → form → eth_sendTransaction → contract call → wait for confirmation.",
        cost: "The success path ends in a window.reload() — a hammer from 2022.",
      },
      {
        made: "Detected the missing-wallet case up front and said so.",
        cost: "Only that case. Wrong network and rejected transactions land in a console log — the error surface is the weakest part of this artifact, and this file will not pretend otherwise.",
      },
      {
        made: "The client structure follows a well-known Web3 tutorial; the deployment, contract, and debugging are mine.",
        cost: "It is not an original architecture. Learning by building along is still building — this document says which parts are which.",
      },
    ],
    links: [
      { label: "Deployment", href: "https://kryptotrade.netlify.app" },
      { label: "Source", href: "https://github.com/Freedom-seven/web3.0" },
    ],
    stack: ["React", "Vite", "ethers.js", "Solidity", "Tailwind CSS"],
  },
  {
    id: "covid",
    exhibit: "B",
    name: "Covid-19 Tracker",
    kind: "Live-data dashboard",
    year: "2021",
    status: "deployed",
    premise:
      "A pandemic dashboard: worldwide and per-country case data, drawn live from the disease.sh open API, with a Leaflet world map.",
    constraints:
      "The API was free, unauthenticated and fast-moving; the map is data-heavy; the numbers are large and differences matter. Clarity under churn was the whole job.",
    decisions: [
      {
        made: "Derived view state (map center, zoom, table) from a single country selection rather than fetching piecemeal.",
        cost: "One fetch governs everything — a wrong assumption is visible everywhere at once.",
      },
      {
        made: "Formatted the giant numbers down to human scale (2.4M, not 2,400,000) at the view layer.",
        cost: "Precision traded for readability on every stat.",
      },
      {
        made: "Leaned on Leaflet for the map instead of building a choropleth from scratch.",
        cost: "A heavier dependency; bought correctness of projection and interaction.",
      },
    ],
    links: [
      { label: "Deployment", href: "https://covvid19tracker.netlify.app" },
      { label: "Source", href: "https://github.com/Freedom-seven/covid-19-tracker" },
    ],
    stack: ["React", "Leaflet", "disease.sh API", "MUI"],
  },
  {
    id: "fruity",
    exhibit: "C",
    name: "Fruity",
    kind: "E-commerce storefront",
    year: "2023",
    status: "deployed",
    premise:
      "A produce storefront: browse the catalogue, fill a cart, check out. The largest single front-end codebase in the record (~100KB of source across components and state).",
    constraints:
      "Real commerce shape: catalogue → cart → checkout, each state affecting the next. The interface had to stay responsive while the cart state churned.",
    decisions: [
      {
        made: "Componentized the catalogue, cart and checkout as isolated units with props contracts.",
        cost: "More files, more discipline — the price of state that stays debuggable.",
      },
      {
        made: "Kept product imagery as bundled SVG icons rather than remote images.",
        cost: "Less photographic richness; instant loads and no broken images.",
      },
    ],
    links: [
      { label: "Deployment", href: "https://fruitymart.netlify.app" },
      { label: "Source", href: "https://github.com/Freedom-seven/fruity" },
    ],
    stack: ["React", "React Router", "FontAwesome"],
  },
  {
    id: "quizmaster",
    exhibit: "D",
    name: "Qizz Master",
    kind: "Quiz engine",
    year: "2023",
    status: "deployed",
    premise:
      "A quiz application on the Open Trivia Database: category selection, scoring, and the full question lifecycle — the smallest first-party source in the featured set (~12KB).",
    constraints:
      "Small on purpose: one person, one weekend-scale scope, no state library. The whole lifecycle — fetch, decode, ask, score, replay — had to fit in that budget.",
    decisions: [
      {
        made: "Kept first-party source at ~12KB even with React and a router in the build.",
        cost: "No room for flourish; every feature had to earn its lines.",
      },
      {
        made: "Fetched questions live from the Open Trivia DB with category filtering instead of shipping a static bank.",
        cost: "Depends on an external service staying up.",
      },
      {
        made: "Decoded the API's HTML-escaped question text in the view layer rather than rendering entities raw.",
        cost: "One more dependency (html-entities) for text that reads correctly.",
      },
    ],
    links: [
      { label: "Deployment", href: "https://quizzmasters.netlify.app" },
      { label: "Source", href: "https://github.com/Freedom-seven/quizmaster" },
    ],
    stack: ["React", "React Router", "Open Trivia DB", "html-entities"],
  },
  {
    id: "tabs",
    exhibit: "E",
    name: "Smart Tab Organizer",
    kind: "Browser extension",
    year: "2023",
    status: "source-only",
    premise:
      "A Chrome extension that groups and restores tab sets. Built to learn the extension surface: background workers, storage permissions, and UI inside the browser's own chrome.",
    constraints:
      "The manifest, permissions model and lifecycle of a browser extension are stricter than a web page's.",
    decisions: [
      {
        made: "React inside the extension surface, against plain DOM everywhere else.",
        cost: "A framework in a space where vanilla is the norm.",
      },
      {
        made: "Shipped source-only — never published to the store.",
        cost: "The artifact stays unproven in the wild; the learning did happen.",
      },
    ],
    links: [{ label: "Source", href: "https://github.com/Freedom-seven/smart-tab-organizer" }],
    stack: ["React", "Chrome Extension APIs", "Manifest V3"],
  },
  {
    id: "toggle",
    exhibit: "F",
    name: "Toggle Buttons",
    kind: "Interaction study",
    year: "2023",
    status: "deployed",
    premise:
      "A study of toggle states: the same control examined across on, off, loading, disabled, and focus — the states that separate a crafted control from a styled one.",
    constraints:
      "One component, many states, no framework — CSS is the entire argument.",
    decisions: [
      {
        made: "No framework; the study is pure CSS so every state is auditable by reading the stylesheet.",
        cost: "No component API; it is a document, not a library.",
      },
    ],
    links: [
      { label: "Deployment", href: "https://delightful-tarsier-fd7d23.netlify.app" },
      { label: "Source", href: "https://github.com/Freedom-seven/Toggle-btn" },
    ],
    stack: ["CSS", "HTML"],
  },
];
