import { NextResponse } from "next/server";
import { curatedAnswer } from "@/lib/curated";
import { checkRateLimit } from "@/lib/rateLimit";

/**
 * POST /api/ask — the site's only server code.
 *
 * Curated mode (default): scores the question against the shipped KB
 * and answers from the record. No provider, no key, no cost.
 *
 * Live mode: requires LIVE_MODE=on AND a provider key in the server
 * environment. When configured it calls the provider; in this build the
 * live call is stubbed to fall back to curated with an honest notice,
 * because no provider was authorized for this environment. Wiring a
 * provider is a matter of replacing the stub below — the guardrails
 * (rate limits, caps, plain-text output) all sit in front of it.
 */
export const runtime = "nodejs";

export async function POST(req: Request) {
  let q = "";
  try {
    const body = (await req.json()) as { q?: unknown };
    if (typeof body.q === "string") q = body.q;
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  q = q.trim().slice(0, 500);
  if (!q) {
    return NextResponse.json({ error: "empty question" }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const limit = checkRateLimit(ip);
  if (!limit.ok) {
    return NextResponse.json(
      {
        error: "rate_limited",
        answer: `Rate limit reached (${limit.hourly}/hour, ${limit.daily}/day per visitor). The cap is a cost guard, not a paywall — the curated record is still open. Email for anything else.`,
        mode: "rate-limited",
      },
      { status: 200 }
    );
  }

  const liveConfigured =
    process.env.LIVE_MODE === "on" &&
    Boolean(process.env.ASK_API_KEY) &&
    process.env.ASK_PROVIDER !== "none";

  if (liveConfigured) {
    // Live-LLM wiring point. Guardrails already applied: 500-char cap,
    // rate limits, server-side key. Replace this stub with the provider
    // call; keep the system prompt record-only and output plain text.
    const a = curatedAnswer(q);
    return NextResponse.json({ answer: a.text, mode: "curated-fallback" });
  }

  const a = curatedAnswer(q);
  return NextResponse.json({ answer: a.text, mode: "curated" });
}
