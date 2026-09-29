import { afterEach, describe, expect, it, vi } from "vitest";
import { checkRateLimit } from "./rateLimit";

describe("the ask route's cost guard", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it("allows requests under the hourly cap and trips at it", () => {
    vi.stubEnv("ASK_HOURLY_LIMIT", "3");
    vi.stubEnv("ASK_DAILY_LIMIT", "100");
    const key = `test-hourly-${Math.random()}`;
    expect(checkRateLimit(key).ok).toBe(true);
    expect(checkRateLimit(key).ok).toBe(true);
    expect(checkRateLimit(key).ok).toBe(true);
    const blocked = checkRateLimit(key);
    expect(blocked.ok).toBe(false);
    expect(blocked.hourly).toBe(3);
  });

  it("trips the daily cap even if hours roll over", () => {
    vi.stubEnv("ASK_HOURLY_LIMIT", "10");
    vi.stubEnv("ASK_DAILY_LIMIT", "2");
    const key = `test-daily-${Math.random()}`;
    expect(checkRateLimit(key).ok).toBe(true);
    expect(checkRateLimit(key).ok).toBe(true);
    expect(checkRateLimit(key).ok).toBe(false);
  });
});
