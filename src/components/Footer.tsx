import Link from "next/link";
import { identity } from "@/content/identity";

/**
 * Footer = colophon + contact shortcut. Route-agnostic on purpose:
 * each page prints its own ledger with its real route (see Ledger.tsx),
 * because a footer that guesses the route would print a lie.
 */
export function Footer() {
  return (
    <footer className="foot">
      <div className="foot__inner">
        <p className="foot__line">
          Built by hand, measured by itself. No trackers, no external requests,
          no claims without a cost printed next to them.
        </p>
        <Link href="/contact" className="foot__contact">
          Reach {identity.name.split(" ")[0]} →
        </Link>
      </div>
    </footer>
  );
}
