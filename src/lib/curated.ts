import { kb } from "@/content/kb";

/**
 * Curated scoring over the shipped knowledge base. Used in two places:
 * the API route (default mode) and the client console (only when the
 * route is unreachable). Transparent, local, unbreakable. A miss says
 * so — it never improvises.
 */

export const MISS =
  "I don't have that in the record — and I don't guess. Email him directly; the contact page has the address.";

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function curatedAnswer(question: string): { text: string; href?: string } {
  const q = normalize(question);
  if (!q) return { text: MISS };
  const terms = q.split(" ").filter((t) => t.length > 1);

  let best: { score: number; entry: (typeof kb)[number] } | null = null;
  for (const entry of kb) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (kw.includes(" ")) {
        if (q.includes(kw)) score += 3;
        continue;
      }
      // Whole-word match only — substrings like "his" inside "this"
      // must not score, or the stand-in answers questions nobody asked.
      if (new RegExp(`\\b${escapeRe(kw)}\\b`).test(q)) {
        score += 2;
      } else if (
        terms.some((t) => t.length >= 4 && (t.startsWith(kw) || kw.startsWith(t)))
      ) {
        score += 1;
      }
    }
    if (score > 0 && (!best || score > best.score)) best = { score, entry };
  }

  if (!best || best.score < 2) return { text: MISS };
  return { text: best.entry.answer, href: best.entry.href };
}
