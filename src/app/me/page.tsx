import type { Metadata } from "next";
import Link from "next/link";
import { identity } from "@/content/identity";
import { experience, education, gapStatement } from "@/content/record";
import { kb } from "@/content/kb";
import { AskConsole } from "@/components/AskConsole";
import { Ledger } from "@/components/Ledger";
import "../page.css";

export const metadata: Metadata = {
  title: "Me",
  description:
    "The engineer, on the record: experience, education, the declared gap, and a digital stand-in that answers only from what's published.",
};

export default function MePage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="readout" style={{ color: "var(--ink-faint)" }}>
            the engineer · on the record
          </p>
          <h1 className="h1" style={{ marginTop: "0.5rem" }}>
            Ask the stand-in, then read the record
          </h1>

          <div style={{ marginTop: "2rem" }}>
            <AskConsole contextLine="You're on the engineer's page." />
            <p className="readout" style={{ color: "var(--ink-faint)", marginTop: "0.75rem" }}>
              a digital version of {identity.name.split(" ")[0]}, built from the
              record — it says so every time it answers
            </p>

            <noscript>
              <p className="readout" style={{ color: "var(--oxide-deep)" }}>
                The console needs JavaScript. The full knowledge base is printed
                below as plain text — nothing is hidden behind the script.
              </p>
            </noscript>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="bio-h">
        <div className="wrap">
          <div className="split">
            <div>
              <h2 className="section__title" id="bio-h">The short version</h2>
              <p style={{ marginTop: "1rem" }}>
                Software engineer. The shipped work spans web front ends, a
                React Native mobile listing, and a Solidity contract with its
                web3 client — and this portfolio shows the range with the
                decisions and costs attached, not a wall of logos.
              </p>
              <p style={{ marginTop: "1rem" }}>
                The full release history is on{" "}
                <Link href="/work">/work</Link>; the build&apos;s own numbers are on{" "}
                <Link href="/how">/how</Link>. The fastest route in is email.
              </p>
            </div>
            <div>
              <h2 className="section__title">What the stand-in knows</h2>
              <p className="readout" style={{ color: "var(--ink-faint)", marginTop: "1rem" }}>
                {kb.length} curated entries, shipped in the bundle. No key, no
                provider, no improvisation. The same content, as a document:
              </p>
              <dl style={{ marginTop: "1rem" }}>
                {kb.map((e) => (
                  <div key={e.id} style={{ marginBottom: "1rem" }}>
                    <dt style={{ fontWeight: 500 }}>
                      {e.asks[0]}
                      {e.href && (
                        <>
                          {" "}
                          <Link
                            href={e.href}
                            className="readout"
                            style={{ color: "var(--oxide-deep)" }}
                          >
                            →
                          </Link>
                        </>
                      )}
                    </dt>
                    <dd style={{ margin: "0.25rem 0 0", color: "var(--ink-secondary)" }}>
                      {e.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="record-h">
        <div className="wrap">
          <div className="section__head">
            <h2 className="section__title" id="record-h">The record</h2>
            <p className="section__note readout">as published on the legacy portfolio</p>
          </div>
          <div className="split">
            <div>
              <h3>Experience</h3>
              {experience.map((e) => (
                <div className="entry" key={e.org}>
                  <p className="entry__when">{e.period}</p>
                  <div>
                    <p className="entry__what">
                      {e.role} · {e.org}
                    </p>
                    <p className="entry__body">{e.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3>Education</h3>
              {education.map((e) => (
                <div className="entry" key={e.program}>
                  <p className="entry__when">—</p>
                  <div>
                    <p className="entry__what">{e.program}</p>
                    <p className="entry__body">{e.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="gap-note">{gapStatement}</p>
        </div>
      </section>

      <Ledger route="/me" renderMode="static" />
    </>
  );
}
