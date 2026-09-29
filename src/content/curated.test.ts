import { describe, expect, it } from "vitest";
import { curatedAnswer, MISS } from "../lib/curated";
import { kb, suggestedAsks } from "./kb";

describe("the curated stand-in", () => {
  it("matches known intents from suggested asks", () => {
    const hits = suggestedAsks.map((q) => curatedAnswer(q));
    for (const h of hits) {
      expect(h.text, `suggested ask "${h}" missed the KB`).not.toBe(MISS);
    }
  });

  it("answers a krypto question from the record, including the tutorial disclosure", () => {
    const a = curatedAnswer("tell me about krypto trade and the wallet");
    expect(a.text).toContain("tutorial");
  });

  it("never invents on a miss — the miss message points to email", () => {
    expect(curatedAnswer("what is his favourite colour").text).toBe(MISS);
    expect(curatedAnswer("").text).toBe(MISS);
    expect(MISS).toContain("Email");
  });

  it("keeps every KB entry internally complete", () => {
    for (const e of kb) {
      expect(e.keywords.length).toBeGreaterThan(0);
      expect(e.asks.length).toBeGreaterThan(0);
      expect(e.answer.length).toBeGreaterThan(20);
    }
  });

  it("always answers from the record — no entry promises unavailable things", () => {
    for (const e of kb) {
      expect(e.answer.toLowerCase()).not.toContain("as an ai");
      expect(e.answer).not.toMatch(/!\s*$/); // no exclamation enthusiasm
    }
  });
});
