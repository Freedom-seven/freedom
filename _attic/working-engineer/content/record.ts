import type {
  PresenceLine,
  RecordEntry,
  Voice,
  FieldIndexEntry,
  ArchiveEntry,
  DeskMode,
} from "./types";
import { identity } from "./identity";
import { systems } from "./systems";

/**
 * The bench presence: a scripted orientation voice. It speaks only what the
 * record vouches for, never improvises, never performs. Wayfinding, not cosplay.
 */
export const presenceScript: PresenceLine[] = [
  {
    order: 1,
    text: `${identity.name}. Software engineer.`,
  },
  {
    order: 2,
    text: "This site is my bench — the work is laid out on it, in layers, the way I actually open it up when I am working on it.",
  },
  {
    order: 3,
    text: "Six systems are on the bench right now. Each one opens into its cross-section: the layers that really exist in it, and the decisions pinned where they were made — with what each one cost.",
    anchor: { label: "See the systems", href: "#bench" },
  },
  {
    order: 4,
    text: "You can read the whole practice top to bottom, enter by what you need, or open any system and walk its layers. All three doors lead to the same evidence.",
  },
  {
    order: 5,
    text: "The record ends in 2023. What I have done since is not written down here yet, and the record says so rather than inventing it.",
    go: { label: "The record", href: "/record" },
  },
  {
    order: 6,
    text: "When you have seen enough — the correspondence page has my direct line.",
    go: { label: "Correspondence", href: "/contact" },
  },
];

/**
 * The record: field experience, education. The 2023→present span is a
 * deliberate, visible gap — a fabricated line here would corrupt the whole document.
 */
export const experience: RecordEntry[] = [
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

export const education: RecordEntry[] = [
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
export const voices: Voice[] = [
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
    evidence:
      "every client in the case files — Qizz Master ships the smallest first-party source (~12KB)",
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

/**
 * The archive: everything else in the record, stated bluntly.
 * Nothing is hidden; nothing is dressed up. Clones are labeled clones.
 */
export const archive: ArchiveEntry[] = [
  {
    name: "Chezz Food",
    note: "restaurant site — layout, menu, reservations shape",
    href: "https://chezzfood.netlify.app",
    kind: "study",
  },
  {
    name: "Brownies Hotel",
    note: "hotel site — booking-flow layout study",
    href: "https://browny.netlify.app",
    kind: "study",
  },
  {
    name: "BeeTech",
    note: "blog front end",
    href: "https://beetechblog.netlify.app",
    kind: "study",
  },
  {
    name: "Elite Homes",
    note: "real-estate listing layout",
    href: "https://elitehome.netlify.app",
    kind: "study",
  },
  {
    name: "Flower Boutique",
    note: "small storefront layout",
    href: "https://flowerboutique.netlify.app",
    kind: "study",
  },
  {
    name: "Tulip Restaurant",
    note: "restaurant site",
    href: "https://tuliprestaurant.netlify.app",
    kind: "study",
  },
  {
    name: "The Fitness Club",
    note: "gym site with class schedule shape",
    href: "https://thefitnessclub.netlify.app",
    kind: "study",
  },
  {
    name: "Oganic Foods",
    note: "grocery storefront",
    href: "https://oganicfoods.netlify.app",
    kind: "study",
  },
  {
    name: "Trip Hub",
    note: "travel site",
    href: "https://triphub.netlify.app",
    kind: "study",
  },
  {
    name: "Netflix Clone",
    note: "clone — study exercise: TMDB data, catalog UI",
    href: "https://realnetflixclone.netlify.app",
    kind: "clone",
  },
  {
    name: "Tesla Clone",
    note: "clone — study exercise: scroll-driven marketing page",
    href: "https://elated-tesla-clone.netlify.app",
    kind: "clone",
  },
  {
    name: "Amazon Clone",
    note: "clone — study exercise: product grid + cart",
    href: "https://comfy-amazon.netlify.app",
    kind: "clone",
  },
  {
    name: "Resort Hotel",
    note: "booking layout study",
    href: "https://hotelbeachresorts.netlify.app",
    kind: "study",
  },
  {
    name: "Timeless Tour",
    note: "tourism site",
    href: "https://timelesstour.netlify.app",
    kind: "study",
  },
  {
    name: "Purpl Pay",
    note: "mobile payments UI — React Native; source not currently public",
    kind: "experiment-mobile",
  },
  {
    name: "Balance",
    note: "CSS motion study — equilibrium animation",
    href: "https://adorable-entremet-593eee.netlify.app",
    kind: "experiment",
  },
  {
    name: "Bouncing Cycles",
    note: "CSS motion study — loop timing",
    href: "https://taupe-cat-3e4912.netlify.app",
    kind: "experiment",
  },
  {
    name: "Credit Card",
    note: "CSS form study — card entry interaction",
    href: "https://frabjous-elf-b7341e.netlify.app",
    kind: "experiment",
  },
  {
    name: "Glow",
    note: "CSS light study",
    href: "https://scintillating-cassata-912915.netlify.app",
    kind: "experiment",
  },
  {
    name: "Hot Cup of Tea",
    note: "CSS steam animation",
    href: "https://courageous-genie-c58060.netlify.app",
    kind: "experiment",
  },
  {
    name: "Lamp Animation",
    note: "CSS light-switch scene",
    href: "https://dulcet-manatee-cfcb45.netlify.app",
    kind: "experiment",
  },
  {
    name: "Product Card",
    note: "CSS component study",
    href: "https://jade-otter-30f570.netlify.app",
    kind: "experiment",
  },
  {
    name: "Flying Plane",
    note: "CSS path animation",
    href: "https://dainty-platypus-3bd868.netlify.app",
    kind: "experiment",
  },
  {
    name: "qrcreator",
    note: "QR generation utility",
    href: "https://github.com/Freedom-seven/qrcreator",
    kind: "tool",
  },
  {
    name: "ScanShare",
    note: "QR scan/share utility",
    href: "https://github.com/Freedom-seven/ScanShare",
    kind: "tool",
  },
  {
    name: "BlogApp",
    note: "MERN blog — first full-stack attempt",
    href: "https://github.com/Freedom-seven/BlogApp",
    kind: "experiment",
  },
  {
    name: "chat-room",
    note: "socket.io chat",
    href: "https://github.com/Freedom-seven/chat-room",
    kind: "experiment",
  },
  {
    name: "react-contacts",
    note: "CRUD study",
    href: "https://github.com/Freedom-seven/react-contacts",
    kind: "experiment",
  },
  {
    name: "kusterthon2023-group-19",
    note: "hackathon team repo (contributor)",
    href: "https://github.com/Freedom-seven/kusterthon2023-group-19",
    kind: "experiment",
  },
  {
    name: "cv_uploader",
    note: "file-upload tool, 2024",
    href: "https://github.com/Freedom-seven/cv_uploader",
    kind: "tool",
  },
];

/**
 * The desk: enter by what you need. Five intentions a real visitor carries.
 * Each mode re-frames the same evidence — no new facts, only ordering and honesty
 * about where the record ends.
 */
export const deskModes: DeskMode[] = [
  {
    id: "interface",
    need: "I have a hard interface problem.",
    answer:
      "The interface work here ranges from a live-data dashboard to a state-machinery study done in pure CSS. The best single proof of interface care is a study that treats focus and disabled states as the work.",
    shows: [
      {
        label: "Toggle Buttons",
        href: "/bench/toggle-buttons",
        note: "one control, every state — CSS as the entire argument",
      },
      {
        label: "Covid-19 Tracker",
        href: "/bench/covid-19-tracker",
        note: "clarity under live-data churn: map, table, cards from one source of truth",
      },
      {
        label: "Fruity",
        href: "/bench/fruity",
        note: "the largest front-end codebase in the record, componentized with intent",
      },
    ],
    boundary:
      "These are interface artifacts with public evidence; none is a design-system engagement at scale.",
  },
  {
    id: "mobile",
    need: "I need a mobile application.",
    answer:
      "Mobile is real in this record: a React Native payments interface was built — and its source is not currently public, which is stated rather than papered over.",
    shows: [
      {
        label: "Purpl Pay",
        href: "/record",
        note: "React Native payments UI — source not currently public; held honestly in the archive",
      },
      {
        label: "CodeTrain training record",
        href: "/record",
        note: "React Native in the formal program, 2021",
      },
    ],
    boundary:
      "No public mobile artifact can be inspected today. If mobile is the deciding evidence, ask directly and I will walk you through the code in private.",
  },
  {
    id: "data-api",
    need: "I have a data or API problem.",
    answer:
      "The record's data work is honest about its scale: live third-party APIs consumed under churn (disease.sh, Open Trivia DB), a MERN exercise with real persistence, a socket chat. The Web3 contract is data-with-a-different-shape: state stored and retrieved on-chain.",
    shows: [
      {
        label: "Covid-19 Tracker",
        href: "/bench/covid-19-tracker",
        note: "one coordinated fetch governing every view",
      },
      {
        label: "Krypto Trade",
        href: "/bench/krypto-trade",
        note: "on-chain state read, written and awaited end to end",
      },
      {
        label: "BlogApp / chat-room",
        href: "https://github.com/Freedom-seven/BlogApp",
        note: "first full-stack attempts: Express + MongoDB, sockets",
      },
    ],
    boundary:
      "Backend work here is exercise-scale, not production-scale. The record says so; hiring for heavy backend depth should weight that accordingly.",
  },
  {
    id: "system",
    need: "I need someone who can carry a whole system.",
    answer:
      "Carrying a system end to end is exactly what the bench is for: Krypto Trade runs interface → state → contract → wallet, and the deployment still answers. What 'carried' means is printed in each cross-section: which decisions were mine, what each cost.",
    shows: [
      {
        label: "Krypto Trade",
        href: "/bench/krypto-trade",
        note: "the full loop, with its tutorial-derived structure disclosed",
      },
      {
        label: "Fruity",
        href: "/bench/fruity",
        note: "the largest codebase in the record, carried to a working checkout",
      },
    ],
    boundary:
      "The strongest end-to-end evidence is a personal deployment, not a production system serving traffic at scale.",
  },
  {
    id: "evaluate",
    need: "I am evaluating this person for a role.",
    answer:
      "Then skip the framing and read the record: where the work ends, where the record ends (2023), what each decision cost, and what the teammates actually said. The résumé PDF is one click away, and the correspondence page is a direct line — no gatekeeping.",
    shows: [
      {
        label: "The record",
        href: "/record",
        note: "experience, training, the gap, and the archive",
      },
      {
        label: "Résumé (PDF)",
        href: "/resume.pdf",
        note: "the formal document, as issued",
      },
      {
        label: "Correspondence",
        href: "/contact",
        note: "direct line — email and live channels",
      },
    ],
    boundary:
      "Nothing here replaces the conversation. The site's job is to make the first ten minutes of it unnecessary.",
  },
];
