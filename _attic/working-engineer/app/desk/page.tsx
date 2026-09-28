import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { deskModes } from "@/content/record";
import "./desk.css";

export const metadata = {
  title: "The desk — enter by need",
  description:
    "Arrive by what you need: an interface problem, a mobile product, a data problem, a whole system, or an evaluation. The same evidence, re-framed.",
};

export default function DeskPage() {
  return (
    <div className="bench-shell">
      <section className="page-intro">
        <h1>The desk.</h1>
        <p className="lede">
          People don't arrive wanting "a projects section". They arrive with a
          need. Pick yours; the desk re-frames the same evidence around it —
          and says where the record ends.
        </p>
      </section>

      <ul className="desk-list">
        {deskModes.map((mode) => (
          <Reveal as="li" key={mode.id}>
            <article className="desk-mode plate" aria-label={mode.need}>
              <h2 className="desk-mode__need">{mode.need}</h2>
              <p className="desk-mode__answer">{mode.answer}</p>

              <p className="plate-label">What this mode shows</p>
              <ul className="desk-mode__shows">
                {mode.shows.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="desk-mode__show-link">
                      {item.label}
                    </Link>
                    <span className="desk-mode__show-note"> — {item.note}</span>
                  </li>
                ))}
              </ul>

              <p className="desk-mode__boundary">
                <span className="plate-label">Boundary</span> {mode.boundary}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
