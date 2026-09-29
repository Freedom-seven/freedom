import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { units } from "@/content/units";
import { Ledger } from "@/components/Ledger";
import { StatusSeal } from "@/components/StatusSeal";
import "../../page.css";

export function generateStaticParams() {
  return units.map((u) => ({ slug: u.slug }));
}

const TITLES: Record<string, string> = {
  web: "Web",
  contracts: "Contracts & systems",
  mobile: "Mobile",
  experiments: "Experiments",
};

const SHEETS: Record<string, string> = {
  "covid-19-tracker": "/og-covid-19-tracker.png",
  "krypto-trade": "/og-krypto-trade.png",
  fruity: "/og-fruity.png",
  "qizz-master": "/og-qizz-master.png",
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const unit = units.find((u) => u.slug === params.slug);
  if (!unit) return {};
  const sheet = SHEETS[unit.slug] ?? "/og-home.png";
  return {
    title: unit.name,
    description: unit.premise,
    openGraph: { title: unit.name, description: unit.premise, images: [sheet] },
    twitter: { card: "summary_large_image", images: [sheet] },
  };
}

export default function UnitPage({ params }: { params: { slug: string } }) {
  const unit = units.find((u) => u.slug === params.slug);
  if (!unit) notFound();

  const siblings = units
    .filter((u) => u.stream === unit.stream && u.slug !== unit.slug)
    .slice(0, 3);

  return (
    <>
      <section className="unit__head">
        <div className="wrap">
          <p className="unit__meta readout">
            <StatusSeal status={unit.status} />
            <span>{TITLES[unit.stream] ?? unit.stream}</span>
            <span>·</span>
            <span>{unit.kind}</span>
            <span>·</span>
            <span>{unit.year}</span>
          </p>
          <h1 className="unit__title">{unit.name}</h1>
        </div>
      </section>

      <div className="wrap unit__grid">
        <div className="unit__prose">
          <span className="unit__label">premise</span>
          <p>{unit.premise}</p>

          {unit.constraints && (
            <>
              <span className="unit__label">constraints</span>
              <p className="unit__constraints">{unit.constraints}</p>
            </>
          )}

          <span className="unit__label">decisions &amp; costs</span>
          {unit.decisions.length === 0 ? (
            <>
              <p>
                No engineering decisions are on the public record for this
                unit. It ships here as a listed row — the audit exists only
                where the record supports it, and this page refuses to invent
                the rest.
              </p>
              <p className="readout" style={{ color: "var(--ink-faint)", marginTop: "0.75rem" }}>
                listed depth · the record holds a title, a category, and links
              </p>
            </>
          ) : (
            unit.decisions.map((d, i) => (
              <div className="decision" key={i}>
                <span className="decision__no" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="decision__made">{d.made}</p>
                <p className="decision__cost">{d.cost}</p>
              </div>
            ))
          )}

          {unit.limits && (
            <div className="sheet__limits machine" style={{ marginTop: "2.5rem" }}>
              <div className="machine__inner">
                <p className="sheet__title">what it did not do</p>
                <p>{unit.limits}</p>
              </div>
            </div>
          )}
        </div>

        <aside className="sheet">
          <div className="sheet__block">
            <p className="sheet__title">stack by layer</p>
            <dl style={{ margin: 0 }}>
              {unit.stack.map((layer) => (
                <div className="sheet__layer" key={layer.layer}>
                  <dt>{layer.layer}</dt>
                  <dd>
                    {layer.items.map((item) => (
                      <span className="sheet__tag readout" key={item}>
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="sheet__block">
            <p className="sheet__title">evidence</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {unit.evidence.map((ev) => (
                <li key={ev.href} style={{ marginBottom: "0.5rem" }}>
                  <a href={ev.href} rel="noopener noreferrer" target="_blank">
                    {ev.label} ↗
                  </a>
                </li>
              ))}
              <li className="readout" style={{ color: "var(--ink-faint)", marginTop: "0.5rem" }}>
                external — verified during the {unit.status === "verified-live" ? "live audit" : "content audit"}
              </li>
            </ul>
          </div>

          {siblings.length > 0 && (
            <div className="sheet__block">
              <p className="sheet__title">same stream</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {siblings.map((s) => (
                  <li key={s.slug} style={{ marginBottom: "0.375rem" }}>
                    <Link href={`/work/${s.slug}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <Ledger route={`/work/${unit.slug}`} renderMode="static" />
    </>
  );
}
