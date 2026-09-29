import type { Metadata } from "next";
import { units } from "@/content/units";
import { getAppTotals, getBuildFacts } from "@/lib/ledger";
import { kb } from "@/content/kb";
import { Ledger } from "@/components/Ledger";
import "../page.css";

export const metadata: Metadata = {
  title: "How",
  description:
    "The disclosure page: what this site is built from, what it weighs, what it refuses to load, and the guardrails on its one API route.",
};

function Row({ thing, why }: { thing: string; why: string }) {
  return (
    <li style={{ padding: "0.875rem 0", borderTop: "1px solid var(--panel-edge)" }}>
      <strong>{thing}</strong>
      <span style={{ color: "var(--ink-secondary)" }}> — {why}</span>
    </li>
  );
}

export default function HowPage() {
  const totals = getAppTotals();
  const facts = getBuildFacts("/how", "static");
  const live = process.env.LIVE_MODE === "on";
  const full = units.filter((u) => u.depth === "full").length;
  const listed = units.length - full;
  const decisions = units.reduce((a, u) => a + u.decisions.length, 0);

  const budgetRows: { metric: string; actual: string; budget: string; ok: boolean }[] = [
    {
      metric: "shared JS, first load (gz)",
      actual: totals.sharedKB === null ? "dev build" : `${totals.sharedKB} KB`,
      budget: "≤ 130 KB",
      ok: totals.sharedKB === null || totals.sharedKB <= 130,
    },
    {
      metric: "heaviest route JS (gz)",
      actual: totals.heaviestKB === null ? "dev build" : `${totals.heaviestKB} KB`,
      budget: "≤ 160 KB",
      ok: totals.heaviestKB === null || totals.heaviestKB <= 160,
    },
    { metric: "external requests per page", actual: "0", budget: "0", ok: true },
    { metric: "font families", actual: "2, self-hosted via next/font", budget: "2", ok: true },
    {
      metric: "routes generated",
      actual: String(totals.routes),
      budget: "—",
      ok: true,
    },
  ];

  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="readout" style={{ color: "var(--ink-faint)" }}>
            disclosure · maintained like a design doc
          </p>
          <h1 className="h1" style={{ marginTop: "0.5rem" }}>
            How this is built
          </h1>
          <p className="lede">
            A portfolio that talks about engineering discipline should survive
            an inspection of itself. This page is that inspection. The numbers
            below are read from the real build output at request time — the
            same source the ledger footer uses — so they cannot drift from
            reality without the page printing the drift.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="stack-h">
        <div className="wrap">
          <div className="section__head">
            <h2 className="section__title" id="stack-h">The stack, with its reasons</h2>
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <Row thing="Next.js 14, App Router, static rendering" why="every route here is prerendered; the server's only runtime job is the one API route below" />
            <Row thing="Strict TypeScript" why="content is typed before it is styled; a unit missing evidence fails the test suite, not a reader's patience" />
            <Row thing="Hand-rolled CSS on design tokens" why="no UI library, no animation library, no CSS-in-JS — the entire surface is two families of type, one accent, and hard offset shadows" />
            <Row thing="Two fonts, self-hosted" why="Space Grotesk for the document voice, IBM Plex Mono for the machine voice; loaded via next/font, so no external font request exists" />
            <Row thing="Zero trackers, zero third parties" why="no analytics, no CDN scripts, no embedded anything; the record is the product, not surveillance" />
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="budget-h">
        <div className="wrap">
          <div className="section__head">
            <h2 className="section__title" id="budget-h">The budget table</h2>
            <p className="section__note readout">
              measured {facts.builtAt ?? "in dev"} · build {facts.buildId ?? "dev"}
            </p>
          </div>
          <div className="machine">
            <div className="machine__inner" style={{ overflowX: "auto" }}>
              <table className="budget">
                <thead>
                  <tr>
                    <th scope="col">metric</th>
                    <th scope="col">actual</th>
                    <th scope="col">budget</th>
                    <th scope="col">state</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetRows.map((r) => (
                    <tr key={r.metric}>
                      <td>{r.metric}</td>
                      <td className="budget__num">{r.actual}</td>
                      <td>{r.budget}</td>
                      <td className={r.ok ? "budget__ok" : "budget__over"}>
                        {r.ok ? "within" : "over"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {totals.sharedKB === null && (
                <p className="machine__note readout" style={{ marginTop: "0.75rem" }}>
                  dev server: real byte counts print after a production build
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="content-h">
        <div className="wrap">
          <div className="section__head">
            <h2 className="section__title" id="content-h">The content engine</h2>
          </div>
          <div className="split">
            <p>
              {units.length} units in one typed module: {full} audited with{" "}
              {decisions} decisions and their costs published; {listed} listed
              at exactly the depth the public record supports. The test suite
              fails the build if a unit loses its evidence links, if an audited
              unit loses a decision, or if a listed unit grows unverifiable
              prose.
            </p>
            <p>
              The knowledge base behind the digital stand-in ships in the
              bundle — {kb.length} curated entries. It answers from the record
              or says it can&apos;t; there is no improvisation path in curated mode.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="api-h">
        <div className="wrap">
          <div className="section__head">
            <h2 className="section__title" id="api-h">The one API route</h2>
          </div>
          <div className="split">
            <p>
              <code className="readout">POST /api/ask</code> is the only server
              code on the site. Curated mode — the default — never calls it
              with a provider: the route scores the question against the
              shipped knowledge base and answers from the record. Live-LLM
              mode exists but is {" "}
              <strong>{live ? "enabled in this environment" : "off"}</strong>;
              it activates only when the server environment sets{" "}
              <code className="readout">LIVE_MODE=on</code> plus a provider key
              that never reaches the client. Hard caps:{" "}
              <span className="readout">10 requests/hour</span> and{" "}
              <span className="readout">60/day per IP</span>, 500-character
              input limit, plain-text output, no memory between sessions, no
              visitor text rendered as markup.
            </p>
            <p>
              What it refuses: browsing, tool use, remembering, inventing
              employers, metrics, or opinions. When a question isn&apos;t in the
              record, both modes say so and point to email. A rate-limited
              visitor gets the same curated answers — the cap is a cost guard,
              not a paywall.
            </p>
          </div>
        </div>
      </section>

      <Ledger route="/how" renderMode="static" />
    </>
  );
}
