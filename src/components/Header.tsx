"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { identity } from "@/content/identity";

const routes = [
  { href: "/", label: "Build" },
  { href: "/work", label: "Work" },
  { href: "/how", label: "How" },
  { href: "/log", label: "Log" },
  { href: "/me", label: "Me" },
] as const;

/**
 * The rail. Name plate left; the real destinations right, with the oxide
 * pin marking the active route. Availability is deliberately absent —
 * the config flag is off and the site doesn't imply what it can't claim.
 */
export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="rail">
      <Link href="/" className="rail__plate">
        <span className="rail__mark" aria-hidden="true">
          ▞
        </span>
        <span className="rail__name">{identity.name}</span>
        <span className="rail__role readout">{identity.role}</span>
      </Link>
      <nav className="rail__nav" aria-label="Primary">
        {routes.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className={`rail__link${isActive(r.href) ? " is-active" : ""}`}
            aria-current={isActive(r.href) ? "page" : undefined}
          >
            {r.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
