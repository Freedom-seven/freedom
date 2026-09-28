import type { ExperienceEntry, EducationEntry } from "./types";

/**
 * Experience & education — from legacy/components/resume/Data.jsx, verbatim
 * facts only. Years are as the legacy record published them.
 * Testimonials are excluded (see identity.ts).
 */

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Developer · Full-time",
    org: "ToddlerWalks",
    period: "2023",
    note: "Built and improved the platform's interfaces; mentored others on digital skills as part of the role.",
  },
  {
    role: "Software Developer · Intern",
    org: "EasyParcel Sdn. Bhd.",
    period: "2023",
    note: "Shipped features with JavaScript, React, Node.js, and MongoDB.",
  },
  {
    role: "Software Developer · Intern",
    org: "Cotocus",
    period: "2022",
    note: "First industry internship; hands-on project work.",
  },
];

export const education: EducationEntry[] = [
  {
    program: "CodeTrain",
    note: "Software development program: HTML, CSS, JavaScript, React, React Native, MongoDB, Express, Node.",
  },
  {
    program: "Coursera",
    note: "Data structures & algorithms; full-stack web development courses.",
  },
  {
    program: "Udacity",
    note: "Front-End Web Developer Nanodegree.",
  },
];

/**
 * The gap, stated once. The public record goes quiet after 2023.
 * This paragraph is the whole treatment — it is never styled as a motif.
 */
export const gapStatement =
  "The public record above ends in 2023. Work since then isn't published here yet — I'd rather say where the record stops than fill the silence with anything invented.";
