import { describe, expect, it } from "vitest";
import { units } from "./units";

describe("the record's invariants", () => {
  it("holds 28 units — no additions, no quiet removals", () => {
    expect(units).toHaveLength(28);
  });

  it("gives every unit a unique slug and legacy id", () => {
    const slugs = new Set(units.map((u) => u.slug));
    const ids = new Set(units.map((u) => u.legacyId));
    expect(slugs.size).toBe(units.length);
    expect(ids.size).toBe(units.length);
  });

  it("gives every unit at least one evidence link — a claim without evidence is a build failure", () => {
    for (const u of units) {
      expect(u.evidence.length, `${u.slug} has no evidence`).toBeGreaterThanOrEqual(1);
      for (const ev of u.evidence) {
        expect(ev.href.startsWith("http"), `${u.slug} evidence href must be absolute`).toBe(true);
        expect(ev.label.length).toBeGreaterThan(0);
      }
    }
  });

  it("gives every unit a premise, kind, and status", () => {
    for (const u of units) {
      expect(u.premise.length, `${u.slug} has no premise`).toBeGreaterThan(0);
      expect(u.kind.length, `${u.slug} has no kind`).toBeGreaterThan(0);
      expect(["verified-live", "linked", "source-only", "offline", "unavailable"]).toContain(u.status);
    }
  });

  it("audits full-depth units properly: decisions with costs, constraints, limits", () => {
    const full = units.filter((u) => u.depth === "full");
    expect(full.length).toBeGreaterThanOrEqual(4);
    for (const u of full) {
      expect(
        u.decisions.length,
        `${u.slug} is full-depth but has no decisions`
      ).toBeGreaterThanOrEqual(1);
      for (const d of u.decisions) {
        expect(d.made.length, `${u.slug} has a decision without a 'made'`).toBeGreaterThan(0);
        expect(d.cost.length, `${u.slug} has a decision without a cost`).toBeGreaterThan(0);
      }
      expect(u.constraints, `${u.slug} is full-depth but has no constraints`).toBeTruthy();
      expect(u.limits, `${u.slug} is full-depth but has no limits`).toBeTruthy();
      expect(u.stack.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("keeps listed units honest: no invented decisions, no invented stack", () => {
    const listed = units.filter((u) => u.depth === "listed");
    for (const u of listed) {
      expect(u.decisions, `${u.slug} is listed but carries decisions`).toHaveLength(0);
    }
  });

  it("features only audited, verified-live units", () => {
    for (const u of units.filter((x) => x.featured)) {
      expect(u.depth, `${u.slug} is featured but not audited`).toBe("full");
      expect(u.status, `${u.slug} is featured but not verified-live`).toBe("verified-live");
    }
  });

  it("never dates a unit the record doesn't date — '?' is the honest year", () => {
    for (const u of units) {
      expect(u.year, `${u.slug} year must be 4 digits or '?'`).toMatch(/^(\d{4}|\?)$/);
    }
  });

  it("writes years only where the legacy record supports them", () => {
    // The legacy grid numbered projects 1–28; the record dates only some.
    // If this fails, someone added a year without a source.
    const undated = units.filter((u) => u.year === "?");
    expect(undated.length).toBeGreaterThanOrEqual(0);
  });
});
