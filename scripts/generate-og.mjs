/**
 * Generates the OG build sheets as static PNGs in public/.
 *
 * Why static: Next 14's runtime image routes (next/og) crash on Windows —
 * the bundled @vercel/og mangles its default-font path (ERR_INVALID_URL)
 * and its satori build hits an undefined weight lookup. This script uses
 * real satori + resvg directly, once, at authoring time; the committed
 * PNGs then serve from / like any static file. Zero runtime image code.
 *
 * The sheet copy here mirrors src/content/units.ts (name · stream · kind ·
 * year · status · decision count). Regenerate when the record changes:
 *
 *   node scripts/generate-og.mjs
 */
import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const fontData = fs.readFileSync(
  path.join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/noto-sans-v27-latin-regular.ttf")
);

const fonts = [
  { name: "og", data: fontData, weight: 400, style: "normal" },
  { name: "og", data: fontData, weight: 700, style: "normal" },
];

const identity = {
  name: "Nanewortor Patrick Freedom",
  role: "Software engineer",
};

const DIM = "#9ba3ab";
const ACCENT = "#ff8a4c";
const LIVE = "#3fae74";

// Keep in sync with src/content/units.ts. Only the 4 audited units get
// sheets; listed units inherit the home sheet on social previews.
const units = [
  { slug: "covid-19-tracker", name: "Covid-19 Tracker", stream: "web", meta: "Live-data dashboard · 2021", decisions: 4, live: true },
  { slug: "krypto-trade", name: "Krypto Trade", stream: "contracts", meta: "Web3 front end over a Solidity contract · 2022", decisions: 4, live: true },
  { slug: "fruity", name: "Fruity", stream: "web", meta: "Product front end · ?", decisions: 3, live: true },
  { slug: "qizz-master", name: "Qizz Master", stream: "web", meta: "Quiz application · ?", decisions: 3, live: true },
];

function Sheet({ kicker, title, sub, left, right, accentRight }) {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#101418",
        color: "#e8eaed",
        padding: "64px",
        fontFamily: "og",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", justifyContent: "space-between", fontSize: 22, color: DIM },
            children: [
              { type: "span", props: { children: kicker } },
              { type: "span", props: { style: { color: accentRight ? LIVE : DIM }, children: right } },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: 14 },
            children: [
              { type: "div", props: { style: { fontSize: 68, fontWeight: 700, color: "#ffffff", letterSpacing: "-2px" }, children: title } },
              { type: "div", props: { style: { fontSize: 28, color: ACCENT }, children: sub } },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", justifyContent: "space-between", fontSize: 24, color: DIM },
            children: [
              { type: "span", props: { children: left } },
              { type: "span", props: { style: { color: ACCENT }, children: "" } },
            ],
          },
        },
      ],
    },
  };
}

const sheets = [
  {
    file: "og-home.png",
    element: Sheet({
      kicker: "build sheet · og / 1200×630",
      right: "measured",
      title: identity.name,
      sub: "ships, and prints the cost.",
      left: `${identity.role} · no trackers · zero external requests`,
    }),
  },
  ...units.map((u) => ({
    file: `og-${u.slug}.png`,
    element: Sheet({
      kicker: `unit sheet · ${u.stream}`,
      right: u.live ? "live" : "recorded",
      accentRight: u.live,
      title: u.name,
      sub: u.meta,
      left: `${u.decisions} decisions, costs published`,
    }),
  })),
];

const opts = { width: 1200, height: 630, fonts };

for (const s of sheets) {
  const svg = await satori(s.element, opts);
  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: opts.width },
    font: { fontFiles: [], loadSystemFonts: false },
  }).render().asPng();
  fs.writeFileSync(path.join(process.cwd(), "public", s.file), png);
  console.log("wrote public/" + s.file, fs.statSync(path.join(process.cwd(), "public", s.file)).size, "bytes");
}
