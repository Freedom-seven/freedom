import type { System } from "./types";

/**
 * The systems on the bench. Every claim traces to the public record:
 * source audited file-by-file, deployments answered, dates from the repos.
 * Where the record is thin, the text says so.
 */
export const systems: System[] = [
  {
    id: "krypto-trade",
    name: "Krypto Trade",
    kind: "Web3 front end over a smart contract",
    year: "2022",
    status: "deployed",
    premise:
      "A web application that talks to the blockchain: connect a wallet, read on-chain state, send transactions — the full Web3 loop in one interface.",
    constraints:
      "The contract speaks in hex and wei; users do not. Wallet state, network state and transaction state had to be legible at the same time, on a free test network.",
    layers: [
      {
        plate: "INTERFACE",
        what: "React + Tailwind. Connect form, transaction form, live transaction list.",
        tech: ["React", "Tailwind CSS"],
      },
      {
        plate: "STATE",
        what: "One TransactionContext owns all wallet and contract state for the app.",
        tech: ["React Context"],
      },
      {
        plate: "CONTRACT",
        what: "Solidity contract — storage, retrieval and transfer of transactions, deployed to testnet.",
        tech: ["Solidity"],
      },
      {
        plate: "WALLET",
        what: "ethers.js bridges the interface and the chain: account access, signing, calls.",
        tech: ["ethers.js"],
      },
    ],
    decisions: [
      {
        made: "Built the client on Vite + React, structured around a single TransactionContext holding all wallet and contract state.",
        cost: "One context owns everything web3 — simple to follow, easy to tangle as it grows.",
        on: ["STATE"],
      },
      {
        made: "Wired the full loop for real: connect wallet → form → eth_sendTransaction → contract call → wait for confirmation.",
        cost: "The success path ends in a window.reload() — a hammer from 2022.",
        on: ["WALLET", "CONTRACT"],
      },
      {
        made: "Detected the missing-wallet case up front and said so in the interface.",
        cost: "Only that case. Wrong network and rejected transactions land in a console log — the error surface is the weakest part of this artifact, and this record will not pretend otherwise.",
        on: ["INTERFACE"],
      },
      {
        made: "The client structure follows a well-known Web3 tutorial; the deployment, contract debugging, and running system are mine.",
        cost: "It is not an original architecture. Learning by building along is still building — this record says which parts are which.",
        on: ["STATE", "WALLET"],
      },
    ],
    evidence: [
      { label: "Deployment", href: "https://kryptotrade.netlify.app" },
      { label: "Source", href: "https://github.com/Freedom-seven/web3.0" },
    ],
    stack: ["React", "Vite", "ethers.js", "Solidity", "Tailwind CSS"],
  },
  {
    id: "covid-19-tracker",
    name: "Covid-19 Tracker",
    kind: "Live-data dashboard",
    year: "2021",
    status: "deployed",
    premise:
      "A pandemic dashboard: worldwide and per-country case data, drawn live from the disease.sh open API, with a Leaflet world map.",
    constraints:
      "The API was free, unauthenticated and fast-moving; the map is data-heavy; the numbers are large and their differences matter. Clarity under churn was the whole job.",
    layers: [
      {
        plate: "INTERFACE",
        what: "Stat cards, country table, and a Leaflet map as the centerpiece.",
        tech: ["React", "Leaflet", "MUI"],
      },
      {
        plate: "SERVICE",
        what: "Single coordinated fetch against disease.sh governs map, table and cards.",
        tech: ["disease.sh API"],
      },
      {
        plate: "STATE",
        what: "One country selection derives every view: map center, zoom, table sort.",
        tech: ["React Context"],
      },
    ],
    decisions: [
      {
        made: "Derived view state (map center, zoom, table) from a single country selection rather than fetching piecemeal.",
        cost: "One fetch governs everything — a wrong assumption is visible everywhere at once.",
        on: ["STATE", "SERVICE"],
      },
      {
        made: "Formatted the large numbers down to human scale (2.4M, not 2,400,000) at the view layer.",
        cost: "Precision traded for readability on every stat.",
        on: ["INTERFACE"],
      },
      {
        made: "Leaned on Leaflet for the map instead of building a choropleth from scratch.",
        cost: "A heavier dependency; bought correctness of projection and interaction.",
        on: ["INTERFACE"],
      },
    ],
    evidence: [
      { label: "Deployment", href: "https://covvid19tracker.netlify.app" },
      { label: "Source", href: "https://github.com/Freedom-seven/covid-19-tracker" },
    ],
    stack: ["React", "Leaflet", "disease.sh API", "MUI"],
  },
  {
    id: "fruity",
    name: "Fruity",
    kind: "E-commerce storefront",
    year: "2023",
    status: "deployed",
    premise:
      "A produce storefront: browse the catalogue, fill a cart, check out. The largest single front-end codebase in the record (~100KB of source across components and state).",
    constraints:
      "Real commerce shape: catalogue → cart → checkout, each state affecting the next. The interface had to stay responsive while the cart state churned.",
    layers: [
      {
        plate: "INTERFACE",
        what: "Catalogue, product, cart and checkout views, componentized with props contracts.",
        tech: ["React", "FontAwesome"],
      },
      {
        plate: "STATE",
        what: "Cart state churns as items enter and leave; kept debuggable by isolation.",
        tech: ["React Router"],
      },
    ],
    decisions: [
      {
        made: "Componentized the catalogue, cart and checkout as isolated units with props contracts.",
        cost: "More files, more discipline — the price of state that stays debuggable.",
        on: ["INTERFACE", "STATE"],
      },
      {
        made: "Kept product imagery as bundled SVG icons rather than remote images.",
        cost: "Less photographic richness; instant loads and no broken images.",
        on: ["INTERFACE"],
      },
    ],
    evidence: [
      { label: "Deployment", href: "https://fruitymart.netlify.app" },
      { label: "Source", href: "https://github.com/Freedom-seven/fruity" },
    ],
    stack: ["React", "React Router", "FontAwesome"],
  },
  {
    id: "quizmaster",
    name: "Qizz Master",
    kind: "Quiz engine",
    year: "2023",
    status: "deployed",
    premise:
      "A quiz application on the Open Trivia Database: category selection, scoring, and the full question lifecycle — the smallest first-party source in the featured set (~12KB).",
    constraints:
      "Small on purpose: one person, a weekend-scale scope, no state library. The whole lifecycle — fetch, decode, ask, score, replay — had to fit in that budget.",
    layers: [
      {
        plate: "INTERFACE",
        what: "Category select, question flow, score, replay — nothing else.",
        tech: ["React", "React Router"],
      },
      {
        plate: "SERVICE",
        what: "Live fetch from the Open Trivia DB with category filtering.",
        tech: ["Open Trivia DB"],
      },
      {
        plate: "STATE",
        what: "Question queue, index, score — plain component state.",
        tech: ["React"],
      },
    ],
    decisions: [
      {
        made: "Kept first-party source at ~12KB even with React and a router in the build.",
        cost: "No room for flourish; every feature had to earn its lines.",
        on: ["INTERFACE", "STATE"],
      },
      {
        made: "Fetched questions live from the Open Trivia DB with category filtering instead of shipping a static bank.",
        cost: "Depends on an external service staying up.",
        on: ["SERVICE"],
      },
      {
        made: "Decoded the API's HTML-escaped question text in the view layer rather than rendering entities raw.",
        cost: "One more dependency (html-entities) for text that reads correctly.",
        on: ["INTERFACE"],
      },
    ],
    evidence: [
      { label: "Deployment", href: "https://quizzmasters.netlify.app" },
      { label: "Source", href: "https://github.com/Freedom-seven/quizmaster" },
    ],
    stack: ["React", "React Router", "Open Trivia DB", "html-entities"],
  },
  {
    id: "smart-tab-organizer",
    name: "Smart Tab Organizer",
    kind: "Browser extension",
    year: "2023",
    status: "source-only",
    premise:
      "A Chrome extension that groups and restores tab sets. Built to learn the extension surface: background workers, storage permissions, and UI inside the browser's own chrome.",
    constraints:
      "The manifest, permissions model and lifecycle of a browser extension are stricter than a web page's.",
    layers: [
      {
        plate: "INTERFACE",
        what: "React inside the extension surface — the popup the user touches.",
        tech: ["React"],
      },
      {
        plate: "PLATFORM",
        what: "Manifest V3: background workers, storage permissions, browser lifecycle.",
        tech: ["Chrome Extension APIs", "Manifest V3"],
      },
    ],
    decisions: [
      {
        made: "React inside the extension surface, against plain DOM everywhere else.",
        cost: "A framework in a space where vanilla is the norm.",
        on: ["INTERFACE"],
      },
      {
        made: "Shipped source-only — never published to the store.",
        cost: "The artifact stays unproven in the wild; the learning did happen.",
        on: ["PLATFORM"],
      },
    ],
    evidence: [
      { label: "Source", href: "https://github.com/Freedom-seven/smart-tab-organizer" },
    ],
    stack: ["React", "Chrome Extension APIs", "Manifest V3"],
  },
  {
    id: "toggle-buttons",
    name: "Toggle Buttons",
    kind: "Interaction study",
    year: "2023",
    status: "deployed",
    premise:
      "A study of toggle states: the same control examined across on, off, loading, disabled, and focus — the states that separate a crafted control from a styled one.",
    constraints:
      "One component, many states, no framework — CSS is the entire argument.",
    layers: [
      {
        plate: "INTERFACE",
        what: "One control, every state: on, off, loading, disabled, focus.",
        tech: ["CSS", "HTML"],
      },
    ],
    decisions: [
      {
        made: "No framework; the study is pure CSS so every state is auditable by reading the stylesheet.",
        cost: "No component API; it is a document, not a library.",
        on: ["INTERFACE"],
      },
    ],
    evidence: [
      { label: "Deployment", href: "https://delightful-tarsier-fd7d23.netlify.app" },
      { label: "Source", href: "https://github.com/Freedom-seven/Toggle-btn" },
    ],
    stack: ["CSS", "HTML"],
  },
];

/** Quick lookup for the cross-section routes. */
export function getSystem(id: string): System | undefined {
  return systems.find((s) => s.id === id);
}
