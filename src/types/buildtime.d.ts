/**
 * Ambient type for the build-time stamp injected by next.config.mjs.
 * Read it via process.env.__BUILD_TIME__ — server components only.
 */
declare global {
  // eslint-disable-next-line no-var
  var __BUILD_TIME__: string | undefined;
}

export {};
