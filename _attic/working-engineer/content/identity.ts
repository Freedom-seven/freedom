import type { Identity } from "./types";

/**
 * Identity facts, verified from the legacy record. No claims beyond it.
 * "Front end" is not the headline here — the record spans the stack.
 */
export const identity: Identity = {
  name: "Freedom Patrick Nanewortor",
  role: "Software engineer",
  location: "Ghana · working remotely",
  email: "freewhynane62@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/Freedom-seven" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/freedom-patrick-nanewortor-a22235212",
    },
    { label: "Twitter", href: "https://twitter.com/FreedomWhyte" },
  ],
  availability: "open to work — full-time or contract",
};
