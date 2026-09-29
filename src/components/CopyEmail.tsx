"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Copy-to-clipboard for the email, with a labeled confirmation.
 * Uses the async clipboard API where available; a no-op that says so
 * where not (e.g. insecure contexts). Announced via aria-live.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className="stream-btn"
      onClick={() => void copy()}
      aria-live="polite"
    >
      {copied ? "copied ✓" : "copy address"}
    </button>
  );
}
