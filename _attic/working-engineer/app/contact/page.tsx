import type { Metadata } from "next";
import { ContactActions } from "./ContactActions";
import { identity } from "@/content/identity";
import "./contact.css";

export const metadata: Metadata = {
  title: "Correspondence",
  description:
    "The direct line: email, channels, and availability. No gatekeeping.",
};

export default function ContactPage() {
  return (
    <div className="bench-shell">
      <section className="page-intro">
        <h1>Correspondence.</h1>
        <p className="lede">
          The direct line. A specific letter gets a specific reply.
        </p>
      </section>

      <div className="contact-grid">
        <section className="contact-main plate" aria-label="Direct line">
          <p className="plate-label">Email · read most often</p>
          <p className="contact-main__email">
            <a href={`mailto:${identity.email}`}>{identity.email}</a>
          </p>
          <ContactActions email={identity.email} />

          <p className="contact-main__avail">
            <span className="pin" aria-hidden="true" /> {identity.availability}
          </p>
        </section>

        <section className="contact-side" aria-label="Channels and first letter">
          <div className="contact-channels">
            <p className="plate-label">Elsewhere</p>
            <ul>
              {identity.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-letter plate plate--flush">
            <p className="plate-label">What makes a good first letter</p>
            <ul>
              <li>What you're building, in one paragraph.</li>
              <li>The problem you actually need solved.</li>
              <li>Whether it's a role, a contract, or a question.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
