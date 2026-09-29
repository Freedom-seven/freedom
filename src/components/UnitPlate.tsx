import Link from "next/link";
import type { Unit } from "@/content/types";
import { StatusSeal } from "./StatusSeal";

/**
 * A shipped unit as a plate row — not a card. Numbered, classified,
 * sealed with its audit state. The arrow is content (it links); the
 * whole row is the link surface.
 */
export function UnitPlate({
  unit,
  index,
}: {
  unit: Unit;
  index: number;
}) {
  return (
    <Link href={`/work/${unit.slug}`} className="plate">
      <span className="plate__no readout" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="plate__main">
        <span className="plate__name">{unit.name}</span>
        <span className="plate__kind readout">
          {unit.kind} · {unit.year}
        </span>
      </span>
      <StatusSeal status={unit.status} />
      <span className="plate__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
