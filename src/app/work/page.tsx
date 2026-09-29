import type { Metadata } from "next";
import { units } from "@/content/units";
import { StreamFilter } from "@/components/StreamFilter";
import { UnitPlate } from "@/components/UnitPlate";
import { Ledger } from "@/components/Ledger";
import "../page.css";

export const metadata: Metadata = {
  title: "Work",
  description:
    "The release history: 28 shipped units across web, mobile, contracts, and experiments — each labeled with its audit state, nothing featured that isn't audited.",
};

const STREAM_ORDER = ["web", "contracts", "mobile", "experiments"] as const;

export default function WorkPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="readout" style={{ color: "var(--ink-faint)" }}>
            release history · ordered by the legacy grid · every row states its audit
          </p>
          <h1 className="h1" style={{ marginTop: "0.5rem" }}>
            The shipped record
          </h1>
          <p className="lede">
            28 units as the legacy portfolio published them — no additions, no
            quiet removals. Four are audited in depth with their decisions and
            costs. The rest are listed exactly as deep as the public record
            goes, including the clones and the unreachable repo.
          </p>
          <StreamFilter />
        </div>
      </section>

      <section className="section" aria-label="All units">
        <div className="wrap">
          {STREAM_ORDER.map((stream) => {
            const rows = units.filter((u) => u.stream === stream);
            if (rows.length === 0) return null;
            return (
              <div className="stream" key={stream} data-stream={stream}>
                <h2 className="stream__title">
                  {stream}
                  <span className="stream__count readout">
                    {rows.length} {rows.length === 1 ? "unit" : "units"}
                  </span>
                  <hr className="stream__rule" />
                </h2>
                <div className="plates">
                  {rows.map((u) => (
                    <UnitPlate key={u.slug} unit={u} index={units.indexOf(u)} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Ledger route="/work" renderMode="static" />
    </>
  );
}
