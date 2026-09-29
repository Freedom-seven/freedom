import { log } from "@/content/log";
import { identity } from "@/content/identity";

/**
 * Atom feed for the build log. Generated from the same typed entries
 * the /log page renders — one source, two projections.
 */
export const dynamic = "force-static";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const entries = [...log].sort((a, b) => (a.date < b.date ? 1 : -1));
  const updated = entries[0]?.date ?? new Date().toISOString().slice(0, 10);
  const base = identity.baseUrl;

  const items = entries
    .map(
      (e) => `  <entry>
    <title>${esc(e.title)}</title>
    <link href="${base}/log#-${e.date}"/>
    <id>${base}/log/${e.date}</id>
    <updated>${e.date}T00:00:00Z</updated>
    <summary>${esc(e.body)}</summary>
  </entry>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${esc(identity.name)} — build log</title>
  <link href="${base}/log"/>
  <id>${base}/log</id>
  <updated>${updated}T00:00:00Z</updated>
  <author>
    <name>${esc(identity.name)}</name>
  </author>
${items}
</feed>`;

  return new Response(xml, {
    headers: { "content-type": "application/atom+xml" },
  });
}
