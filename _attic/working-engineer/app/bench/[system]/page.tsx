import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { getSystem, systems } from "@/content/systems";
import "./crosssection.css";

export function generateStaticParams() {
  return systems.map((s) => ({ system: s.id }));
}

export function generateMetadata({
  params,
}: {
  params: { system: string };
}): Metadata {
  const system = getSystem(params.system);
  if (!system) return {};
  return {
    title: `${system.name} — cross-section`,
    description: system.premise,
  };
}

export default function CrossSectionPage({
  params,
}: {
  params: { system: string };
}) {
  const system = getSystem(params.system);
  if (!system) notFound();

  const index = systems.findIndex((s) => s.id === system.id);
  const prev = systems[(index - 1 + systems.length) % systems.length];
  const next = systems[(index + 1) % systems.length];

  return (
    <div className="bench-shell">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Bench</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{system.name}</span>
      </nav>

      <header className="page-intro">
        <p className="plate-label">
          Cross-section · {system.kind} · {system.year}
        </p>
        <h1>{system.name}</h1>
        <p className="lede">{system.premise}</p>
        <p className="crosssection__seal">
          <span
            className={`seal ${
              system.status === "deployed"
                ? "seal--deployed"
                : "seal--source-only"
            }`}
          >
            <span
              className={`pin ${system.status === "deployed" ? "" : "pin--hollow"}`}
              aria-hidden="true"
            />
            {system.status === "deployed" ? "deployed" : "source only"}
          </span>
          {system.status === "source-only" && (
            <span className="crosssection__seal-note">
              never published — the artifact is unproven in the wild
            </span>
          )}
        </p>
      </header>

      <Reveal>
        <section aria-label="Constraints" className="constraint plate">
          <p className="plate-label">What constrained the work</p>
          <p className="constraint__text">{system.constraints}</p>
        </section>
      </Reveal>

      {/* The cross-section: parallel plates, the real layers of this system */}
      <section aria-label="Layers">
        <div className="section-head">
          <h2>The layers</h2>
          <span className="plate-label">
            {system.layers.length} plates · what is actually there
          </span>
        </div>
        <ul className="plates-stack">
          {system.layers.map((layer) => {
            const pinned = system.decisions.filter((d) =>
              d.on.includes(layer.plate),
            );
            return (
              <Reveal as="li" key={layer.plate}>
                <article className="layer-plate plate">
                  <header className="layer-plate__head">
                    <span className="pin" aria-hidden="true" />
                    <h3 className="layer-plate__name">{layer.plate}</h3>
                  </header>
                  <p className="layer-plate__what">{layer.what}</p>
                  <ul className="layer-plate__tech" aria-label="Technologies on this layer">
                    {layer.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {pinned.length > 0 && (
                    <div className="layer-plate__pins">
                      <p className="plate-label">
                        Decisions pinned here · {pinned.length}
                      </p>
                      {pinned.map((d, i) => (
                        <div className="decision" key={i}>
                          <p className="decision__made">
                            <span className="decision__mark" aria-hidden="true">
                              →
                            </span>
                            {d.made}
                          </p>
                          <p className="decision__cost">
                            <span className="plate-label">Cost</span> {d.cost}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* Decisions not tied to a single plate still get their hearing */}
      {system.decisions.some(
        (d) => !system.layers.some((l) => d.on.includes(l.plate)),
      ) && (
        <section aria-label="General decisions">
          <div className="section-head">
            <h2>Decisions across plates</h2>
          </div>
          <div className="decisions-general">
            {system.decisions
              .filter(
                (d) => !system.layers.some((l) => d.on.includes(l.plate)),
              )
              .map((d, i) => (
                <div className="decision plate" key={i}>
                  <p className="decision__made">{d.made}</p>
                  <p className="decision__cost">
                    <span className="plate-label">Cost</span> {d.cost}
                  </p>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Evidence: only real, verified artifacts */}
      <section aria-label="Evidence">
        <div className="section-head">
          <h2>Evidence</h2>
          <span className="plate-label">real artifacts · no substitutes</span>
        </div>
        <ul className="evidence-row">
          {system.evidence.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="evidence-link plate"
              >
                {e.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            </li>
          ))}
          <li>
            <span className="evidence-stack plate-label">
              Stack · {system.stack.join(" · ")}
            </span>
          </li>
        </ul>
      </section>

      <nav className="crosssection__next" aria-label="More systems">
        <Link href={`/bench/${prev.id}`} className="crosssection__nav-link">
          ← {prev.name}
        </Link>
        <Link href={`/bench/${next.id}`} className="crosssection__nav-link">
          {next.name} →
        </Link>
      </nav>
    </div>
  );
}
