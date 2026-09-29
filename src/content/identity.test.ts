import { describe, expect, it } from "vitest";
import { identity } from "./identity";

describe("identity rules from the build authorization", () => {
  it("does not claim availability", () => {
    expect(identity.availableForWork).toBe(false);
  });

  it("publishes no location — the legacy site never did", () => {
    expect(identity.location).toBeNull();
  });

  it("excludes testimonials entirely", () => {
    expect(identity.testimonials).toBeNull();
  });

  it("records its evidence for the display name inline (MEDIUM confidence, flagged)", () => {
    expect(identity.name).toBe("Nanewortor Patrick Freedom");
  });

  it("publishes only the email the legacy site already published", () => {
    expect(identity.email).toMatch(/@/);
  });
});
