/**
 * IDENTITY — the one file where every personal fact lives.
 * Edit this file only; every route reads from here.
 *
 * Rules (from the build authorization):
 * · Never fabricate. Omit rather than fake.
 * · Display name: strongest-evidence spelling, evidence recorded inline.
 * · Email/location: publish only what the live legacy site already published.
 * · Availability: config flag, default OFF.
 * · Testimonials: excluded entirely (unverifiable; stock avatars reused).
 */

export interface Identity {
  /**
   * Display name. Evidence (recorded 2026-09-28):
   *  1. Legacy live site hero renders "Nanewortor Patrick Freedom"
   *     (src/components/home/Home.jsx → TextAnimation sentence).
   *  2. Git author name across the repo: "FREEDOM".
   *  3. Legacy meta tags use first name only ("Freedom").
   *  4. Rejected attempts used three different spellings — discarded.
   * Strongest evidence = #1 (live-site rendering). Confidence: MEDIUM.
   * FLAGGED for user confirmation in the final report.
   */
  name: "Nanewortor Patrick Freedom";
  /** Legacy meta description says "Software Engineer"; hero says "Software developer". */
  role: "Software engineer";
  /** Legacy mailto link (src/components/contact/Contact.jsx) — published on the live site. */
  email: "freewhynane62@gmail.com";
  /** Never published on the legacy live site → omitted per user rule. Open item. */
  location: null;
  /** Default OFF. Flip here when true; nothing else on the site claims availability. */
  availableForWork: false;
  links: {
    github: "https://github.com/Freedom-seven";
    linkedin: "https://www.linkedin.com/in/freedom-patrick-nanewortor-a22235212";
    x: "https://twitter.com/FreedomWhyte";
  };
  /** Published on the legacy site (/resume.pdf; file exists in public/). Currency UNVERIFIED — flagged. */
  resume: { href: "/resume.pdf"; label: "Résumé (PDF, as published on the legacy site)" };
  /** Excluded per user rule — see module comment. */
  testimonials: null;
  /**
   * Purpl Pay: legacy site lists it (Mobile, GitHub link only, no deployment;
   * public repo 404s). Presented as legacy-listed, source unavailable.
   * Single toggle per user rule. FLAGGED in final report.
   */
  purplPayEnabled: true;
  /** Legacy og:url. No deploy/DNS changes authorized this run. */
  baseUrl: "https://freedomintech.netlify.app";
}

export const identity: Identity = {
  name: "Nanewortor Patrick Freedom",
  role: "Software engineer",
  email: "freewhynane62@gmail.com",
  location: null,
  availableForWork: false,
  links: {
    github: "https://github.com/Freedom-seven",
    linkedin: "https://www.linkedin.com/in/freedom-patrick-nanewortor-a22235212",
    x: "https://twitter.com/FreedomWhyte",
  },
  resume: { href: "/resume.pdf", label: "Résumé (PDF, as published on the legacy site)" },
  testimonials: null,
  purplPayEnabled: true,
  baseUrl: "https://freedomintech.netlify.app",
};

export default identity;
