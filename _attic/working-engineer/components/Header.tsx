"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { identity } from "@/content/identity";

const routes = [
  { href: "/", label: "Bench" },
  { href: "/desk", label: "Desk" },
  { href: "/record", label: "Record" },
  { href: "/contact", label: "Correspondence" },
];

/**
 * The bench rail. Name plate left; the four routes right, with the active
 * route marked by the oxide pin — state, not decoration.
 */
export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-head">
      <div className="bench-shell site-head__row">
        <Link href="/" className="site-head__name">
          <span className="site-head__mark pin" aria-hidden="true" />
          {identity.name}
        </Link>
        <nav aria-label="Sections">
          <ul className="site-head__nav">
            {routes.map((r) => {
              const active =
                r.href === "/" ? pathname === "/" : pathname.startsWith(r.href);
              return (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="site-head__link"
                    aria-current={active ? "page" : undefined}
                  >
                    {active && (
                      <span className="pin site-head__pin" aria-hidden="true" />
                    )}
                    {r.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
