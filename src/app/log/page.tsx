import type { Metadata } from "next";
import { log } from "@/content/log";
import { Ledger } from "@/components/Ledger";
import "../page.css";

export const metadata: Metadata = {
  title: "Log",
  description:
    "Dated entries for the rebuild itself: what shipped, what broke, what changed. Nothing aspirational.",
  alternates: { types: { "application/atom+xml": "/feed.xml" } },
};

export default function LogPage() {
  const entries = [...log].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="readout" style={{ color: "var(--ink-faint)" }}>
            build log · real work items only
          </p>
          <h1 className="h1" style={{ marginTop: "0.5rem" }}>
            The rebuild, dated
          </h1>
          <p className="lede">
            This site documents its own construction the way it documents the
            work it presents: entries appear when something actually ships.
            v1&apos;s history lives in this repository&apos;s git log.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Build log entries">
        <div className="wrap" style={{ maxWidth: "52rem" }}>
          {entries.map((e) => (
            <article className="entry" key={e.date + e.title}>
              <p className="entry__when">{e.date}</p>
              <div>
                <h2 className="entry__what" style={{ fontSize: "1.0625rem" }}>
                  {e.title}
                </h2>
                <p className="entry__body">{e.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Ledger route="/log" renderMode="static" />
    </>
  );
}
