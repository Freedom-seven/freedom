/**
 * Per-IP token bucket for the ask route. In-memory by design: the site
 * runs static on one server process; a restart resets the buckets and
 * that is an acceptable trade for zero infrastructure. Caps come from
 * env (ASK_HOURLY_LIMIT / ASK_DAILY_LIMIT) so the operator sets the
 * cost ceiling, not the code.
 */

const HOUR = 3_600_000;
const DAY = 86_400_000;

interface Bucket {
  hourStart: number;
  hourCount: number;
  dayStart: number;
  dayCount: number;
}

const buckets = new Map<string, Bucket>();

export function checkRateLimit(key: string): { ok: boolean; hourly: number; daily: number } {
  const now = Date.now();
  const hourly = Number(process.env.ASK_HOURLY_LIMIT ?? 10);
  const daily = Number(process.env.ASK_DAILY_LIMIT ?? 60);

  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (now - v.dayStart >= DAY) buckets.delete(k);
    }
  }

  let b = buckets.get(key);
  if (!b) {
    b = { hourStart: now, hourCount: 0, dayStart: now, dayCount: 0 };
    buckets.set(key, b);
  }
  if (now - b.hourStart >= HOUR) {
    b.hourStart = now;
    b.hourCount = 0;
  }
  if (now - b.dayStart >= DAY) {
    b.dayStart = now;
    b.dayCount = 0;
  }
  if (b.hourCount >= hourly || b.dayCount >= daily) {
    return { ok: false, hourly, daily };
  }
  b.hourCount += 1;
  b.dayCount += 1;
  return { ok: true, hourly, daily };
}
