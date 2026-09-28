import Link from "next/link";
import { identity } from "@/content/identity";

/** The colophon: the bench signed, plainly. */
export function Footer() {
  return (
    <footer className="site-foot">
      <div className="bench-shell site-foot__row plate plate--flush">
        <div>
          <p className="plate-label">Colophon</p>
          <p className="site-foot__name">{identity.name}</p>
          <p className="site-foot__meta">{identity.role} · {identity.location}</p>
        </div>
        <div className="site-foot__right">
          <a href={`mailto:${identity.email}`}>{identity.email}</a>
          <p className="site-foot__meta">
            <Link href="/record">Record</Link> ·{" "}
            <a href="/resume.pdf" download>
              Résumé
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
