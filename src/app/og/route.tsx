import { ImageResponse } from "next/og";
import { getAppTotals } from "@/lib/ledger";
import { identity } from "@/content/identity";

/**
 * The OG build sheet — a dark machine surface stating the build's real
 * totals. Opaque to the framework so it renders at request time and
 * reads the production manifest, not the dev one.
 */
export const dynamic = "force-dynamic";

export const runtime = "nodejs";

export function GET() {
  const totals = getAppTotals();
  const shared = totals.sharedKB === null ? "—" : `${totals.sharedKB} KB`;
  const heavy = totals.heaviestKB === null ? "—" : `${totals.heaviestKB} KB`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101418",
          color: "#e8eaed",
          padding: "72px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#9ba3ab" }}>
          <span>build sheet</span>
          <span>og / 1200×630</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-2px", color: "#ffffff" }}>
            {identity.name}
          </div>
          <div style={{ fontSize: 34, color: "#ff8a4c" }}>
            ships, and prints the cost.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 26, color: "#9ba3ab" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>routes measured</span>
            <span style={{ color: "#e8eaed" }}>{totals.routes || "—"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>shared js, gz</span>
            <span style={{ color: "#ff8a4c" }}>{shared}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>heaviest route, gz</span>
            <span style={{ color: "#ff8a4c" }}>{heavy}</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#9ba3ab" }}>
          <span>{identity.role}</span>
          <span>no trackers · zero external requests</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
