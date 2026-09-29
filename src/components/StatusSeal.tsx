import type { UnitStatus } from "@/content/types";

/**
 * The seal: an audit state, not a decoration. Green means the deployment
 * answered during this build's audit window. Everything else says exactly
 * what the record holds — no status inflation.
 */
const SEALS: Record<UnitStatus, { label: string; tone: "live" | "quiet" }> = {
  "verified-live": { label: "live", tone: "live" },
  linked: { label: "linked", tone: "quiet" },
  "source-only": { label: "source only", tone: "quiet" },
  offline: { label: "offline", tone: "quiet" },
  unavailable: { label: "unreachable", tone: "quiet" },
};

export function StatusSeal({ status }: { status: UnitStatus }) {
  const seal = SEALS[status];
  return (
    <span className={`seal seal--${seal.tone} readout`} title={`audit state: ${status}`}>
      {seal.label}
    </span>
  );
}
