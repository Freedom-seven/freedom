import Link from "next/link";
import { units } from "@/content/units";
import { Ledger } from "@/components/Ledger";
import "./page.css";

/**
 * "Not shipped" — the 404. Dry copy, no motion, and the way back in.
 */
export default function NotFound() {
  const picks = units.filter((u) => u.featured).slice(0, 3);

  return (
    <>
      <section className="nf">
        <div className="wrap">
          <p className="nf__code" aria-hidden="true">
            404
          </p>
          <h1 className="h1" style={{ marginTop: "-2rem" }}>
            Nothing shipped at this address.
          </h1>
          <p className="lede">
            The URL is not part of the record. These builds are:
          </p>
          <div className="plates" style={{ marginTop: "2rem", maxWidth: "44rem" }}>
            {picks.map((u, i) => (
              <Link
                key={u.slug}
                href={`/work/${u.slug}`}
                className="plate"
                style={{ gridTemplateColumns: "3.5rem 1fr auto" }}
              >
                <span className="plate__no readout" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="plate__main">
                  <span className="plate__name">{u.name}</span>
                  <span className="plate__kind readout">
                    {u.kind} · {u.year}
                  </span>
                </span>
                <span className="plate__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/" className="readout" style={{ color: "var(--oxide-deep)" }}>
              ← back to the build
            </Link>
          </p>
        </div>
      </section>
      <Ledger route="404" renderMode="static" />
    </>
  );
}
