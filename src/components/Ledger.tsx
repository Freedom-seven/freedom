import { getBuildFacts } from "@/lib/ledger";

/**
 * THE LEDGER — every page prints its own build facts, generated from the
 * real build output (src/lib/ledger.ts). Never typed by hand. In dev, it
 * says so instead of inventing numbers.
 */
export function Ledger({ route, renderMode }: { route: string; renderMode: string }) {
  const facts = getBuildFacts(route, renderMode);

  return (
    <div className="ledger" aria-label="Build facts for this page">
      <div className="ledger__inner">
        <div className="ledger__row">
          <span className="ledger__label">route</span>
          <span className="ledger__value">{facts.route}</span>
        </div>
        <div className="ledger__row">
          <span className="ledger__label">render</span>
          <span className="ledger__value">{facts.renderMode}</span>
        </div>
        <div className="ledger__row">
          <span className="ledger__label">this page js</span>
          <span className="ledger__value ledger__num">
            {facts.dev || facts.jsKB === null
              ? "dev — real numbers print in production builds"
              : `${facts.jsKB} KB gz`}
          </span>
        </div>
        <div className="ledger__row">
          <span className="ledger__label">shared js</span>
          <span className="ledger__value ledger__num">
            {facts.dev || facts.sharedKB === null ? "dev" : `${facts.sharedKB} KB gz`}
          </span>
        </div>
        <div className="ledger__row">
          <span className="ledger__label">build</span>
          <span className="ledger__value">
            {facts.dev ? "dev server" : `${facts.buildId} · built ${facts.builtAt ?? "?"}`}
          </span>
        </div>
      </div>
    </div>
  );
}
