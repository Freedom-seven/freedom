"use client";

import { useEffect, useRef, useState } from "react";
import { suggestedAsks } from "@/content/kb";
import { curatedAnswer } from "@/lib/curated";

/**
 * The ask console — the digital stand-in's surface.
 *
 * Curated mode is the default and works with zero services: the client
 * calls /api/ask, which answers from the shipped knowledge base. If the
 * route is unreachable, this component falls back to the same local
 * scoring (src/lib/curated.ts) — identical answers, one honest notice.
 * It never improvises and always identifies itself as a stand-in.
 */

interface Turn {
  who: "you" | "stand-in";
  text: string;
}



export function AskConsole({ contextLine }: { contextLine?: string }) {
  const [turns, setTurns] = useState<Turn[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [turns, busy]);

  async function ask(question: string) {
    const q = question.trim();
    if (!q || busy) return;
    setInput("");
    setNotice(null);
    setTurns((t) => [...t, { who: "you", text: q }]);
    setBusy(true);

    let answered = false;
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ q }),
      });
      if (res.ok) {
        const data = (await res.json()) as { answer: string; mode?: string };
        answered = true;
        if (data.mode === "curated-fallback") {
          setNotice("Live mode is off — answering from the shipped record.");
        }
        setTurns((t) => [...t, { who: "stand-in", text: data.answer }]);
      }
    } catch {
      /* network/route down — fall through to local scoring */
    }

    if (!answered) {
      setNotice("Live route unreachable — answering from the shipped record.");
      const a = curatedAnswer(q);
      setTurns((t) => [...t, { who: "stand-in", text: a.text }]);
    }
    setBusy(false);
  }

  return (
    <section className="console machine" aria-label="Ask the digital stand-in">
      <div className="console__log" ref={logRef} aria-live="polite">
        {turns.length === 0 && (
          <p className="readout">
            {contextLine ?? "Digital stand-in."} Built from the record — shipped
            work, decisions, costs. I don&apos;t improvise and I&apos;m not him.
            Ask, or pick below.
          </p>
        )}
        {turns.map((turn, i) => (
          <div
            key={i}
            className={`console__entry console__entry--${turn.who === "you" ? "ask" : "answer"}`}
          >
            <span className="console__who readout">
              {turn.who === "you" ? "you" : "stand-in"}
            </span>
            <p className={`console__text${turn.who === "stand-in" ? " console__text--type" : ""}`}>
              {turn.text}
            </p>
          </div>
        ))}
        {busy && (
          <p className="console__typing readout" role="status">
            checking the record
          </p>
        )}
      </div>

      {notice && <p className="console__notice readout">{notice}</p>}

      <form
        className="console__form"
        onSubmit={(e) => {
          e.preventDefault();
          void ask(input);
        }}
      >
        <label className="readout" htmlFor="ask-input" style={{ position: "absolute", left: -9999 }}>
          Ask the digital stand-in
        </label>
        <input
          id="ask-input"
          className="console__input"
          value={input}
          maxLength={500}
          placeholder="Ask about the record…"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="console__send" disabled={busy || !input.trim()}>
          ask →
        </button>
      </form>

      <div className="console__chips">
        {suggestedAsks.map((s) => (
          <button
            key={s}
            type="button"
            className="console__chip"
            onClick={() => void ask(s)}
          >
            {s}
          </button>
        ))}
      </div>
    </section>
  );
}
