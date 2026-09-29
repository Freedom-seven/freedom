import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

/**
 * The ledger's data source. Every number the site prints about itself comes
 * from here — read from Next's actual build output, gzipped for real with
 * zlib. If the manifests are absent (e.g. `next dev`), the ledger reports
 * dev-mode honestly instead of inventing numbers.
 */

export interface BuildFacts {
  route: string;
  renderMode: string;
  /** First-load JS for this route, gzipped, in KB. Null in dev. */
  jsKB: number | null;
  /** Shared JS across the app, gzipped, in KB. Null in dev. */
  sharedKB: number | null;
  /** Which build produced these numbers. Null in dev. */
  buildId: string | null;
  builtAt: string | null;
  dev: boolean;
}

type AppManifest = Record<string, string[]>;

let cached: {
  appManifest: AppManifest | null;
  buildId: string | null;
} | null = null;

function loadManifests(): { appManifest: AppManifest | null; buildId: string | null } {
  if (cached) return cached;
  try {
    const buildDir = path.join(process.cwd(), ".next");
    const appManifestPath = path.join(buildDir, "app-build-manifest.json");
    const buildIdPath = path.join(buildDir, "BUILD_ID");
    const appManifest = fs.existsSync(appManifestPath)
      ? (JSON.parse(fs.readFileSync(appManifestPath, "utf8")) as { pages: AppManifest }).pages
      : null;
    const buildId = fs.existsSync(buildIdPath)
      ? fs.readFileSync(buildIdPath, "utf8").trim()
      : null;
    cached = { appManifest, buildId };
    return cached;
  } catch {
    cached = { appManifest: null, buildId: null };
    return cached;
  }
}

/** Gzipped size of a built chunk, in KB. */
function gzKB(file: string): number {
  const buf = fs.readFileSync(path.join(process.cwd(), ".next", file));
  return Math.round((zlib.gzipSync(buf).byteLength / 1024) * 10) / 10;
}

/** Shared chunks = files that appear under more than one route entry. */
function sharedFiles(appManifest: AppManifest): string[] {
  const counts = new Map<string, number>();
  for (const files of Object.values(appManifest)) {
    for (const f of files) counts.set(f, (counts.get(f) ?? 0) + 1);
  }
  return [...counts.entries()].filter(([, n]) => n > 1).map(([f]) => f);
}

export function getBuildFacts(route: string, renderMode: string): BuildFacts {
  const { appManifest, buildId } = loadManifests();

  if (!appManifest || !buildId) {
    return {
      route,
      renderMode,
      jsKB: null,
      sharedKB: null,
      buildId: null,
      builtAt: null,
      dev: true,
    };
  }

  // Normalize: manifest keys look like "/page" or "/work/[slug]/page".
  const pageKey = route === "/" ? "/page" : `${route}/page`;
  const routeFiles = appManifest[pageKey];
  const shared = sharedFiles(appManifest);

  let jsKB: number | null = null;
  let sharedKB: number | null = null;

  try {
    if (routeFiles) {
      const own = routeFiles.filter((f) => !shared.includes(f));
      jsKB = own.reduce((sum, f) => sum + gzKB(f), 0);
    }
    sharedKB = shared.reduce((sum, f) => sum + gzKB(f), 0);
  } catch {
    jsKB = jsKB ?? null;
  }

  const builtAt = process.env.__BUILD_TIME__ ?? null;

  return { route, renderMode, jsKB, sharedKB, buildId, builtAt, dev: false };
}

/** Whole-app total (shared + heaviest route) for /how's budget table. */
export function getAppTotals(): { sharedKB: number | null; heaviestKB: number | null; routes: number } {
  const { appManifest, buildId } = loadManifests();
  if (!appManifest || !buildId) return { sharedKB: null, heaviestKB: null, routes: 0 };
  const shared = sharedFiles(appManifest);
  const sharedKB = shared.reduce((sum, f) => sum + gzKB(f), 0);
  let heaviestKB = 0;
  for (const files of Object.values(appManifest)) {
    const own = files.filter((f) => !shared.includes(f));
    const kb = own.reduce((sum, f) => sum + gzKB(f), 0);
    if (kb > heaviestKB) heaviestKB = kb;
  }
  return { sharedKB, heaviestKB, routes: Object.keys(appManifest).length };
}
