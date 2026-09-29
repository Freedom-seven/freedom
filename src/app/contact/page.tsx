import type { Metadata } from "next";
import { identity } from "@/content/identity";
import { CopyEmail } from "@/components/CopyEmail";
import { Ledger } from "@/components/Ledger";
import "../page.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "The real routes in: email, GitHub, LinkedIn, X, and the résumé as published on the legacy site.",
};

export default function ContactPage() {
  const rows = [
    {
      what: "email — the fastest route; read daily",
      href: `mailto:${identity.email}`,
      val: identity.email,
    },
    {
      what: "github — source of nearly everything on /work",
      href: identity.links.github,
      val: "github.com/Freedom-seven",
    },
    {
      what: "linkedin — the professional record",
      href: identity.links.linkedin,
      val: "linkedin.com/in/freedom-patrick-nanewortor-a22235212",
    },
    {
      what: "x — occasional public notes",
      href: identity.links.x,
      val: "@FreedomWhyte",
    },
    {
      what: "résumé — as published on the legacy site; currency not re-verified",
      href: identity.resume.href,
      val: "resume.pdf",
    },
  ];

  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="readout" style={{ color: "var(--ink-faint)" }}>
            contact · every route real, every label honest
          </p>
          <h1 className="h1" style={{ marginTop: "0.5rem" }}>
            Reach Freedom
          </h1>
          <p className="lede">
            The fastest route is email. This page publishes only what the
            legacy site already published — nothing new is exposed by it.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Contact routes">
        <div className="wrap" style={{ maxWidth: "52rem" }}>
          <div className="contact-grid">
            {rows.map((r) => (
              <a
                key={r.href}
                className="contact-row"
                href={r.href}
                {...(r.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="contact-row__val">{r.val}</span>
                <span className="contact-row__what readout">{r.what}</span>
              </a>
            ))}
          </div>

          <div className="contact-row" style={{ marginTop: "0.75rem", cursor: "default" }}>
            <span className="contact-row__val">{identity.email}</span>
            <CopyEmail email={identity.email} />
          </div>

          <p className="readout" style={{ color: "var(--ink-faint)", marginTop: "1.5rem" }}>
            {identity.availableForWork
              ? "Open to work — as flagged in the site config."
              : "No availability status is claimed here — the record doesn't establish one. When that changes, one line changes in the config."}
          </p>
        </div>
      </section>

      <Ledger route="/contact" renderMode="static" />
    </>
  );
}
