import { ImageResponse } from "next/og";
import { units } from "@/content/units";

/**
 * Per-unit OG build sheet: the unit's own facts on the dark machine
 * surface. 28 static images, generated at build from typed content.
 */

const SEAL_LABELS: Record<string, string> = {
  "verified-live": "live",
  linked: "linked",
  "source-only": "source only",
  offline: "offline",
  unavailable: "unreachable",
};

export function generateImageMetadata({ params }: { params: { slug: string } }) {
  return [{ content: { type: "image/png", size: [1200, 630] } }];
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage({ params }: { params: { slug: string } }) {
  const unit = units.find((u) => u.slug === params.slug);
  if (!unit) return new ImageResponse(<div>not found</div>, size);

  const seal = SEAL_LABELS[unit.status] ?? unit.status;

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
          padding: "64px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#9ba3ab" }}>
          <span>unit sheet · {unit.stream}</span>
          <span style={{ color: unit.status === "verified-live" ? "#3fae74" : "#9ba3ab" }}>
            {seal}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: unit.name.length > 18 ? 56 : 68, fontWeight: 700, color: "#ffffff" }}>
            {unit.name}
          </div>
          <div style={{ fontSize: 28, color: "#9ba3ab" }}>
            {unit.kind} · {unit.year}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#9ba3ab" }}>
          <span>
            {unit.depth === "full"
              ? `${unit.decisions.length} decisions, costs published`
              : "listed depth — the record holds no more"}
          </span>
          <span style={{ color: "#ff8a4c" }}>evidence on the unit page</span>
        </div>
      </div>
    ),
    size
  );
}
