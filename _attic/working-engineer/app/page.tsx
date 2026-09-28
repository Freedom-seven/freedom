import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { identity } from "@/content/identity";
import { presenceScript } from "@/content/record";
import { systems } from "@/content/systems";
import "./bench.css";

export const metadata = {
  title: "The bench",
};

export default function BenchPage() {
  return (
    <div className="bench-shell">
      <section className="page-intro" aria-label="Orientation">
        <h1>The bench.</h1>
        <p className="lede">
          {identity.name} — {identity.role.toLowerCase()}. The work spans
          interface, service, data and platform. Here it is laid open in
          layers, the way it actually gets opened when it is being worked on.
        </p>
      </section>

      {/* The presence: a scripted orientation voice. It says only what the
          record vouches for. Wayfinding, not performance. */}
      <Reveal>
        <section className="presence" aria-label="Introduction from the engineer">
          <p className="plate-label">The presence · scripted, not improvised</p>
          <div className="presence__lines">
            {presenceScript.map((line) => (
              <p className="presence__line" key={line.order}>
                {line.text}{" "}
                {line.anchor && (
                  <a href={line.anchor.href}>{line.anchor.label}</a>
                )}
                {line.go && <Link href={line.go.href}>{line.go.label}</Link>}
              </p>
            ))}
          </div>
        </section>
      </Reveal>

      {/* The bench: systems as openable plates */}
      <section id="bench" aria-label="Systems on the bench">
        <div className="section-head">
          <h2>On the bench</h2>
          <span className="plate-label">
            {systems.length} systems · open any of them
          </span>
        </div>
        <ul className="bench-grid">
          {systems.map((s) => (
            <Reveal as="li" key={s.id}>
              <Link href={`/bench/${s.id}`} className="system-plate plate">
                <span className="plate-label">
                  {s.kind} · {s.year}
                </span>
                <span className="system-plate__name">{s.name}</span>
                <span className="system-plate__premise">{s.premise}</span>
                <span className="system-plate__foot">
                  <span className={`seal ${s.status === "deployed" ? "seal--deployed" : "seal--source-only"}`}>
                    <span className={`pin ${s.status === "deployed" ? "" : "pin--hollow"}`} aria-hidden="true" />
                    {s.status === "deployed" ? "deployed" : "source only"}
                  </span>
                  <span className="system-plate__open">cross-section →</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Three entrances, one truth */}
      <section aria-label="Ways through" className="doors">
        <div className="section-head">
          <h2>Three ways through</h2>
          <span className="plate-label">same evidence · different doors</span>
        </div>
        <ul className="doors__grid">
          <Reveal as="li">
            <div className="door plate">
              <span className="plate-label">Door 1 · the read</span>
              <h3>The record</h3>
              <p>
                Experience, training, the archive — top to bottom, including
                the part that is still unwritten.
              </p>
              <Link href="/record" className="door__go">
                Enter →
              </Link>
            </div>
          </Reveal>
          <Reveal as="li">
            <div className="door plate">
              <span className="plate-label">Door 2 · the desk</span>
              <h3>Enter by need</h3>
              <p>
                An interface problem, a mobile product, a data problem, a whole
                system, an evaluation — the desk re-frames the same evidence
                around what you came for.
              </p>
              <Link href="/desk" className="door__go">
                Enter →
              </Link>
            </div>
          </Reveal>
          <Reveal as="li">
            <div className="door plate">
              <span className="plate-label">Door 3 · the bench</span>
              <h3>Walk the layers</h3>
              <p>
                You are already here. Open any system above and walk its real
                cross-section — decisions pinned where they were made.
              </p>
              <a href="#bench" className="door__go">
                Back to the bench →
              </a>
            </div>
          </Reveal>
        </ul>
      </section>
    </div>
  );
}
