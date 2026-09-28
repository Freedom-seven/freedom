"use client";

import { useState } from "react";

/** Copy affordance with honest state feedback. Nothing to hide behind. */
export function ContactActions({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2200);
  }

  return (
    <div className="contact-actions">
      <button type="button" onClick={copy} className="copy-btn">
        {state === "copied"
          ? "Copied ✓"
          : state === "failed"
            ? "Copy failed — select it manually"
            : "Copy address"}
      </button>
    </div>
  );
}
