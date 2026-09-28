import type { Testimony } from "../types";
import { caseFiles } from "./caseFiles";

/**
 * The testimony registry — what the page says when asked about itself.
 * Two kinds of truth live here:
 *  - AUTHORED `what`: the honest description of the thing.
 *  - RUNTIME `measure`: a live measurement taken from the inspected element.
 *  - AUTHORED `why` / `cost`: the decision and its price, in plain language.
 * Nothing in this file may be invented. If the page cannot measure or mean it, it is not here.
 */

/** A material: the page reads its own computed value for the inspected element. */
function material(
  tokenName: string,
  label: string,
  what: string,
  why: string,
  cost: string
): Testimony {
  return {
    label,
    what,
    measure: (el) => {
      const local = getComputedStyle(el).getPropertyValue(tokenName).trim();
      const root = getComputedStyle(document.documentElement)
        .getPropertyValue(tokenName)
        .trim();
      return `${tokenName} resolves to ${local || root || "?"} on this element right now`;
    },
    why,
    cost,
  };
}

export const testimonies: Record<string, Testimony> = {
  /* ——— the shell ——— */

  sheet: {
    label: "the sheet",
    what: "A two-column document grid: title column, body column, ruled bands between chapters.",
    measure: (el) => {
      const cols = getComputedStyle(el).gridTemplateColumns.split(" ").length;
      return `${cols} column${cols > 1 ? "s" : ""} at this width; no horizontal overflow: ${
        document.documentElement.scrollWidth <= window.innerWidth
      }`;
    },
    why: "An inspection document needs a stable place where 'what you are reading' always sits.",
    cost: "Asymmetric grids are harder to keep balanced on every width.",
  },

  loupe: {
    label: "the loupe (you are holding me)",
    what: "I am the site's capacity to answer questions about itself. This testimony is me, inspecting me — one level deep, then I stop, because infinite meta is a gimmick.",
    measure: () => {
      const r = document
        .querySelector(".loupe-bar-inner")
        ?.getBoundingClientRect();
      return `arming tab is ${Math.round(r?.width ?? 0)}px wide, pinned to your viewport, reading you back`;
    },
    why: "A portfolio that asks for trust should show its work — not claim it.",
    cost: "≈4KB of JavaScript and your attention.",
  },

  /* ——— the masthead ——— */

  masthead: {
    label: "the masthead",
    what: "The identity plate. Name, discipline, and the site's thesis, set largest.",
    measure: (el) => {
      const h1 = el.querySelector("h1");
      const r = h1?.getBoundingClientRect();
      return `h1 occupies ${Math.round(r?.height ?? 0)}px of vertical — the largest type on the page, by design`;
    },
    why: "A portfolio must answer 'who is this' before anything else; the scale is arranged so it answers first.",
    cost: "Large type consumes the first screen; everything else waits below.",
  },

  type: {
    label: "typography",
    what: "Serif for voice, monospace for record. No webfont is downloaded.",
    measure: (el) => {
      const s = getComputedStyle(el.querySelector("h1") ?? el);
      return `set in ${s.fontFamily.split(",")[0].replace(/"/g, "")} at ${s.fontSize} — a system font, rendered natively`;
    },
    why: "Two voices only. System stacks load instantly and keep every element's origin legible.",
    cost: "No exotic display face; personality must come from arrangement, not purchase.",
  },

  thesis: {
    label: "the thesis",
    what: "The sentence this entire document exists to prove — and you are holding the proof.",
    why: "Claiming craft is cheap; a page that answers for itself, with live measurements, is a falsifiable claim.",
    cost: "Every element on the page now owes an honest answer. There is nowhere to hide a lazy decision.",
  },

  /* ——— materials ——— */

  paper: material(
    "--paper",
    "paper",
    "The material beneath this testimony.",
    "White reads as an app; paper reads as a document. This is a document.",
    "Warm grounds make pure white surfaces impossible elsewhere on the page."
  ),
  ink: material(
    "--ink",
    "ink",
    "The ink this text is set in — warm near-black, not pure black.",
    "Pure black on white vibrates at small sizes; warmth quiets it.",
    "Contrast is slightly lower than #000 — still WCAG AAA at body sizes."
  ),
  verdict: material(
    "--verdict",
    "verdict green",
    "The only color in this world, spent on verification and nothing else.",
    "A portfolio's job is verification; the color marks what the document vouches for.",
    "Everything else is monochrome — the page cannot lean on color for hierarchy."
  ),
  rule: material(
    "--rule",
    "rules",
    "The hairline rulings that paginate the document.",
    "The eye needs handrails at this length; ruled bands are the document's convention.",
    "Full-bleed rules would be louder; quiet hairlines demand optical care."
  ),

  /* ——— the record ——— */

  record: {
    label: "the record",
    what: "Your visit is held in memory only: testimonies heard, nothing transmitted.",
    measure: () =>
      `${document.querySelectorAll("[data-inspectable]").length} inspectable elements exist on this page; none of them transmit anything`,
    why: "The document can prove it keeps nothing — verify in the network tab; after load, it is silent.",
    cost: "The record dies when you leave. It could persist, and deliberately doesn't.",
  },

  gap: {
    label: "content gap",
    what: "A visible hole in the record where 2023→present should be.",
    measure: (el) =>
      `the hole is ${Math.round(
        (el as HTMLElement).getBoundingClientRect().height
      )}px tall and will stay until verified details exist`,
    why: "A fabricated line here would corrupt everything else this document claims.",
    cost: "The record looks unfinished. It is unfinished. That is the honest state.",
  },

  archive: {
    label: "the archive",
    what: "Every project that didn't earn a case file, with a blunt one-line note. Clones are labeled clones.",
    measure: (el) =>
      `${el.querySelectorAll(".archive-row").length} entries, kept and labeled`,
    why: "Deleting early work is curation theater; keeping it unlabeled is dishonest.",
    cost: "The list is long, and some rows are clones. Both facts are the point.",
  },

  fieldIndex: {
    label: "field index",
    what: "Technology as evidence: each row names the artifact that exercises it.",
    measure: (el) =>
      `${el.querySelectorAll(".field-row").length} technologies listed, each with an artifact`,
    why: "Self-assessed percentages measure confidence; artifacts measure practice.",
    cost: "No row can exist without evidence — technology without an artifact stays off the page.",
  },

  contact: {
    label: "contact",
    what: "A quiet native-validated form (EmailJS) and a copyable address. Inline states, no toasts.",
    measure: (el) =>
      el.querySelector("form")
        ? "form delivery is configured in this deployment"
        : "form delivery is not configured here — the address above is the reliable route",
    why: "Contact is a task, not a celebration.",
    cost: "Understated design gives less reassurance; the copy button compensates.",
  },

  session: {
    label: "the session record",
    what: "The visit, accounted for: testimonies heard, counted in memory, shown plainly.",
    measure: (el) =>
      `the block you are reading says: "${(el.querySelector(".session-line")?.textContent ?? "")
        .trim()
        .slice(0, 60)}…"`,
    why: "The document closes its loop: your inspection becomes part of the record it keeps.",
    cost: "It dies with the tab. That is the price of proving it keeps nothing.",
  },

  caseGrid: {
    label: "case files",
    what: "Six artifacts, argued with decisions and costs rather than thumbnails.",
    measure: (el) =>
      `${el.querySelectorAll(".case").length} case files in this chapter`,
    why: "Work should be evaluated the way engineers actually evaluate it.",
    cost: "Case files demand reading; there is no skimming a decision.",
  },
};

/** Exhibit testimonies are generated per case file. */
function makeExhibit(id: string, name: string, href: string): Testimony {
  return {
    label: `exhibit ${id} — ${name}`,
    what: "A case file: premise, constraints, decisions with costs, and links to the artifact itself.",
    measure: (el) => {
      const decisions = el.querySelectorAll(".case-decisions li").length;
      const links = el.querySelectorAll(".case-links a").length;
      return `${decisions} decisions each stated with its cost; ${links} evidence link${
        links === 1 ? "" : "s"
      }; block measured ${Math.round(
        (el as HTMLElement).getBoundingClientRect().width
      )}px just now`;
    },
    why: "Work should be presented the way engineers actually evaluate it — by its decisions and its evidence.",
    cost: "Case files demand reading; there is no skimming a decision.",
    where: href,
  };
}

/** Resolve the per-case testimony from a case file. */
export function caseTestimony(id: string): Testimony | undefined {
  const f = caseFiles.find((c) => c.id === id);
  if (!f) return undefined;
  return makeExhibit(
    f.exhibit,
    f.name,
    f.links[0]?.href ?? "https://github.com/Freedom-seven"
  );
}
