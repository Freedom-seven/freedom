import type { ExperienceEntry, FieldIndexEntry, VoiceEntry } from "../types";

/**
 * Field experience. Ends where the record ends. The 2023→present span is a
 * deliberate, visible gap — a fabricated line here would corrupt the whole document.
 */

export const experience: ExperienceEntry[] = [
  {
    org: "ToddlerWalks",
    role: "Frontend Developer — full-time",
    span: "2023",
    lines: [
      "Built and improved user-facing interfaces for a mentorship platform.",
      "Worked alongside mentors and peers; helped align digital skills with career goals.",
    ],
  },
  {
    org: "EasyParcel Sdn. Bhd.",
    role: "Software Developer — internship",
    span: "2023",
    lines: [
      "Contributed to software projects at a Malaysia-based logistics company.",
      "Practiced the team rituals of a real codebase: review, integration, release.",
    ],
  },
  {
    org: "Cotocus",
    role: "Software Developer — internship",
    span: "2022",
    lines: ["First industry exposure; hands-on project work and problem-solving."],
  },
  {
    org: "2023 → present",
    role: "record suspended — awaiting confirmation",
    span: "gap",
    gap: true,
    lines: [],
  },
];

export const education: ExperienceEntry[] = [
  {
    org: "CodeTrain",
    role: "Software development program",
    span: "2021",
    lines: [
      "HTML, CSS, JavaScript; React, React Native, Node/Express, MongoDB.",
      "Team projects; first exposure to collaborative development.",
    ],
  },
  {
    org: "Coursera",
    role: "Data structures & algorithms; full-stack coursework",
    span: "2022",
    lines: ["Coursework applied directly in personal projects."],
  },
  {
    org: "Udacity",
    role: "Front-End Web Developer nanodegree",
    span: "2022",
    lines: ["Project-based front-end program; several shipped exercises."],
  },
];

/**
 * Voices: quoted with consent notes made explicit. If permission cannot be
 * re-confirmed before launch, these come out of the document entirely.
 */

export const voices: VoiceEntry[] = [
  {
    name: "Emmanuel",
    relation: "teammate, ToddlerWalks",
    quote:
      "I was impressed by Freedom's work ethic, his ability to meet deadlines and willingness to help his team members.",
    consent: "consent pending re-confirmation before launch",
  },
  {
    name: "Isaac",
    relation: "teammate",
    quote:
      "His technical skills are top-notch and his ability to collaborate and problem-solve is exceptional.",
    consent: "consent pending re-confirmation before launch",
  },
  {
    name: "Mr. Francis",
    relation: "client",
    quote:
      "Freedom's ability to deliver projects on time and within budget is impressive.",
    consent: "consent pending re-confirmation before launch",
  },
];

/**
 * Field index: technology as evidence, not self-assessment.
 * Every row resolves to an artifact that genuinely exercises it.
 */

export const fieldIndex: FieldIndexEntry[] = [
  {
    technology: "React",
    evidence: "Fruity, Covid-19 Tracker, Smart Tab Organizer, this portfolio",
    href: "https://github.com/Freedom-seven/fruity",
    span: "2021 →",
  },
  {
    technology: "TypeScript",
    evidence: "creative-credits-frontend (2025), this portfolio",
    href: "https://github.com/Freedom-seven/creative-credits-frontend",
    span: "2024 →",
  },
  {
    technology: "Vite",
    evidence: "Krypto Trade client, this portfolio",
    href: "https://github.com/Freedom-seven/web3.0",
    span: "2022 →",
  },
  {
    technology: "Solidity / ethers.js",
    evidence: "Krypto Trade (smart_contract/ + client/)",
    href: "https://github.com/Freedom-seven/web3.0",
    span: "2022",
  },
  {
    technology: "JavaScript",
    evidence: "every client in the case files — Qizz Master ships the smallest first-party source (~12KB)",
    href: "https://github.com/Freedom-seven/quizmaster",
    span: "2021 →",
  },
  {
    technology: "CSS (deep study)",
    evidence: "Toggle Buttons and the motion-study series",
    href: "https://github.com/Freedom-seven/Toggle-btn",
    span: "2023",
  },
  {
    technology: "React Native",
    evidence: "Purpl Pay — source not currently public",
    span: "2023",
  },
  {
    technology: "Node / Express / MongoDB",
    evidence: "BlogApp, chat-room (MERN exercises)",
    href: "https://github.com/Freedom-seven/BlogApp",
    span: "2021",
  },
];
