import { Reveal } from "@/components/Reveal";
import {
  experience,
  education,
  fieldIndex,
  voices,
  archive,
} from "@/content/record";
import "./record.css";

export const metadata = {
  title: "The record",
  description:
    "Field experience, training, the technology index resolved to evidence, and the archive — including the part that is still unwritten.",
};

const kindLabel: Record<string, string> = {
  study: "study",
  clone: "clone — labeled",
  experiment: "experiment",
  "experiment-mobile": "mobile experiment",
  tool: "tool",
};

export default function RecordPage() {
  return (
    <div className="bench-shell">
      <section className="page-intro">
        <h1>The record.</h1>
        <p className="lede">
          Where the work has happened, what trained it, and everything else the
          bench doesn't show — stated bluntly, including the span that is still
          unwritten.
        </p>
      </section>

      {/* Field experience */}
      <section aria-label="Field experience">
        <div className="section-head">
          <h2>Field experience</h2>
          <span className="plate-label">ends where the record ends</span>
        </div>
        <ol className="record-list">
          {experience.map((e) => (
            <Reveal as="li" key={e.org}>
              <article className={`record-entry ${e.gap ? "record-entry--gap" : ""}`}>
                <header className="record-entry__head">
                  <h3>{e.org}</h3>
                  <span className="record-entry__span">{e.span}</span>
                </header>
                <p className="record-entry__role">{e.role}</p>
                {e.lines.length > 0 && (
                  <ul className="record-entry__lines">
                    {e.lines.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}
                {e.gap && (
                  <p className="record-entry__gapnote">
                    A fabricated line here would corrupt the whole document.
                    The record resumes when it can be written truthfully.
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Training */}
      <section aria-label="Training">
        <div className="section-head">
          <h2>Training</h2>
        </div>
        <ol className="record-list">
          {education.map((e) => (
            <Reveal as="li" key={e.org}>
              <article className="record-entry">
                <header className="record-entry__head">
                  <h3>{e.org}</h3>
                  <span className="record-entry__span">{e.span}</span>
                </header>
                <p className="record-entry__role">{e.role}</p>
                <ul className="record-entry__lines">
                  {e.lines.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Field index: technology resolved to evidence */}
      <section aria-label="Field index">
        <div className="section-head">
          <h2>Field index</h2>
          <span className="plate-label">
            technology → the artifact that exercises it
          </span>
        </div>
        <div className="fieldindex plate plate--flush">
          <table className="fieldindex__table">
            <caption className="plate-label">
              No percentages. A technology earns its row by being used.
            </caption>
            <thead>
              <tr>
                <th scope="col">Technology</th>
                <th scope="col">Exercised in</th>
                <th scope="col">Span</th>
              </tr>
            </thead>
            <tbody>
              {fieldIndex.map((row) => (
                <tr key={row.technology}>
                  <th scope="row">{row.technology}</th>
                  <td>
                    {row.href ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {row.evidence}
                      </a>
                    ) : (
                      row.evidence
                    )}
                  </td>
                  <td className="fieldindex__span">{row.span}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Voices: consent state printed */}
      {voices.length > 0 && (
        <section aria-label="Voices">
          <div className="section-head">
            <h2>Voices</h2>
            <span className="plate-label">quoted with consent stated</span>
          </div>
          <ul className="voices-grid">
            {voices.map((v) => (
              <Reveal as="li" key={v.name}>
                <figure className="voice plate">
                  <blockquote>
                    <p>“{v.quote}”</p>
                  </blockquote>
                  <figcaption>
                    <span className="voice__name">{v.name}</span>
                    <span className="voice__relation">{v.relation}</span>
                    <span className="voice__consent">{v.consent}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </section>
      )}

      {/* The archive */}
      <section aria-label="Archive">
        <div className="section-head">
          <h2>The archive</h2>
          <span className="plate-label">
            {archive.length} entries · nothing hidden, nothing dressed up
          </span>
        </div>
        <p className="archive-note">
          Studies, clones, experiments, tools. Clones are labeled clones — they
          were how the craft was learned, and pretending otherwise would be the
          only dishonest thing on this page.
        </p>
        <ul className="archive-list">
          {archive.map((a) => (
            <li className="archive-entry" key={a.name}>
              <span className="archive-entry__kind" data-kind={a.kind}>
                {kindLabel[a.kind]}
              </span>
              <span className="archive-entry__name">
                {a.href ? (
                  <a href={a.href} target="_blank" rel="noopener noreferrer">
                    {a.name}
                  </a>
                ) : (
                  a.name
                )}
              </span>
              <span className="archive-entry__note">{a.note}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
