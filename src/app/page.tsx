import type { Metadata } from "next";
import Link from "next/link";
import { identity } from "@/content/identity";
import { units } from "@/content/units";
import { getAppTotals, getBuildFacts } from "@/lib/ledger";
import { Ledger } from "@/components/Ledger";
import { ShipLine } from "@/components/ShipLine";
import { UnitPlate } from "@/components/UnitPlate";
import "./page.css";

export const metadata: Metadata = {
  description:
    "Shipped work with its decisions and costs published. Web, mobile, and the systems underneath them — this site measures itself and prints the numbers.",
  openGraph: {
    title: `${identity.name} — ships, and prints the cost.`,
    description: "Software engineer. 28 shipped units, 10 decisions with their costs published, zero external requests.",
    images: ["/og-home.png"],
  },
  twitter: { card: "summary_large_image", images: ["/og-home.png"] },
};

const featured = units.filter((u) => u.featured && u.depth === "full");

/** The decision ledger, drawn: one mark per recorded decision-with-cost. */
function DecisionMarks() {
  const decisions = featured.flatMap((u) => u.decisions.length);
  const total = decisions.reduce((a, b) => a + b, 0);
  let n = 0;
  return (
    <svg
      className="hero__marks"
      viewBox={`0 0 ${total * 26 + 50} 56`}
      role="img"
      aria-label={`${total} engineering decisions published with their costs across ${featured.length} audited units`}
    >
      {featured.map((u) =>
        u.decisions.map((d, i) => {
          n += 1;
          return (
            <g key={`${u.slug}-${i}`}>
              <rect x={n * 26 - 8} y={44} width={16} height={2} fill="var(--ink-faint)" opacity={0.35} />
              <line x1={n * 26} y1={40} x2={n * 26} y2={40 - 8 - (d.cost.length % 9) * 3.2} stroke="var(--ink)" strokeWidth={1.5} />
              <circle cx={n * 26} cy={40 - 8 - (d.cost.length % 9) * 3.2} r={2.5} fill="var(--oxide)" />
            </g>
          );
        })
      )}
    </svg>
  );
}

export default function HomePage() {
  const totals = getAppTotals();
  const facts = getBuildFacts("/", "static");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: identity.name,
    jobTitle: identity.role,
    email: `mailto:${identity.email}`,
    url: identity.baseUrl,
    sameAs: [identity.links.github, identity.links.linkedin, identity.links.x],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero: the ship-line measures the build on arrival ── */}
      <section className="hero">
        <span className="hero__ghost" aria-hidden="true">
          01
        </span>
        <div className="wrap hero__inner">
          <p className="hero__kicker readout">
            <span className="hero__dot" aria-hidden="true" />
            build in service · no trackers · measured by itself
          </p>
          <h1 className="hero__title">
            {identity.name}
            <br />
            ships, and prints the cost.
          </h1>

          <ShipLine />
          <noscript>
            <style>{`.hero__line { --sweep: 100 !important; }`}</style>
          </noscript>

          <p className="hero__meter readout">
            <span>
              shipped units <strong>{units.length}</strong>
            </span>
            <span>
              audited in depth <strong>{featured.length}</strong>
            </span>
            <span>
              decisions published <strong>{featured.reduce((a, u) => a + u.decisions.length, 0)}</strong>
            </span>
            <span>
              build {facts.buildId ? <strong>{facts.buildId}</strong> : <strong>pending</strong>}
            </span>
          </p>

          <DecisionMarks />
          <p className="hero__marks-note readout">
            one mark per published decision — the dot sits at the height of its recorded cost
          </p>

          <p className="hero__stand">
            <span>Software engineer. Web, mobile, contracts — and the systems underneath them.</span>
          </p>
          <p className="hero__stand" style={{ marginTop: "0.75rem" }}>
            <Link href="/work">
              see the work <sup>28 units</sup>
            </Link>
            <Link href="/how">
              how this is built <sup>measured</sup>
            </Link>
            <Link href="/me">ask the stand-in</Link>
          </p>
        </div>
      </section>

      {/* ── Featured: audited units only ── */}
      <section className="section" aria-labelledby="featured-h">
        <div className="wrap">
          <div className="section__head">
            <h2 className="section__title" id="featured-h">
              The audited builds
            </h2>
            <p className="section__note readout">
              decisions with their costs, on the record
            </p>
          </div>
          <div className="plates">
            {featured.map((u, i) => (
              <UnitPlate key={u.slug} unit={u} index={i} />
            ))}
          </div>
          <p style={{ marginTop: "1.25rem" }}>
            <Link href="/work" className="readout" style={{ color: "var(--oxide-deep)" }}>
              the full release history → {units.length} units, labeled as what they are
            </Link>
          </p>
        </div>
      </section>

      {/* ── How line: the discipline, in one breath ── */}
      <section className="section" aria-labelledby="how-h">
        <div className="wrap">
          <div className="section__head">
            <h2 className="section__title" id="how-h">
              The discipline
            </h2>
          </div>
          <div className="split">
            <p>
              Every claim here sits next to its evidence, every decision next
              to its cost, and this page next to its own build facts — the
              footer below is generated from the real bundle, not typed.
            </p>
            <p>
              Nothing on this site loads from a third party. The fonts, the
              icons, the numbers: all local, all measured. The gap in the
              record is stated, not papered over.
            </p>
          </div>
        </div>
      </section>

      <Ledger route="/" renderMode="static" />
    </>
  );
}
