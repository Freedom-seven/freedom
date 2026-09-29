/**
 * Ambient type for the build-time stamp injected by next.config.mjs.
 * Read it via process.env.BUILD_TIME_STAMP — server components only.
 */
declare global {
  // eslint-disable-next-line no-var
  var BUILD_TIME_STAMP: string | undefined;
}

export {};
