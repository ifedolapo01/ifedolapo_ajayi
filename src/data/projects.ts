import type { Project } from "@/types";

/**
 * Titles, descriptions, links, screenshots and stacks are real, carried over
 * from the existing site. Everything that would require inventing a claim is a
 * fill-in field ([[…]]) so the sheet reads as a draft awaiting entry rather
 * than a finished lie. README.md lists every blank in one place.
 */
export const projects: Project[] = [
  {
    id: "beyond-the-pain",
    plate: "01",
    title: "Beyond the Pain",
    tagline: "A place to put something you cannot say out loud.",
    year: "2026",
    role: "Sole developer",
    stack: ["Next.js", "Tailwind CSS"],
    discipline: "Product",
    link: "https://beyondthepain.vercel.app/",
    linkLabel: "beyondthepain.vercel.app",
    image: "/beyondthepain_img.png",
    imageAlt:
      "The Beyond the Pain website: a platform for sharing stories about living with sickle cell disease.",
    premise:
      "Sickle cell disease is common in Nigeria and badly understood by people who don't live with it. Beyond the Pain is a digital platform for sharing and reading real accounts of living with it, built so that the writing, not the interface, is what you notice.",
    build: [
      "Built the full front end in Next.js and Tailwind CSS, with Firebase (Firestore and Storage) behind the submission form.",
      "Stories come in through a public form, not a CMS or a spreadsheet: writers submit directly, with an optional photo or short video, straight to Firestore.",
      "Story text is set in serif with generous leading and a quiet left accent border, deliberately distinct from the sans-serif interface around it, so the writing reads like writing rather than another screen.",
      "The hardest part was the \"Experience this story\" mode: a full-screen reader with a generative ambient soundscape built from raw Web Audio oscillators, tuned to an E-minor pentatonic scale and faded in procedurally. No audio files, no network requests.",
    ],
    annotations: [
      {
        id: "btp-a",
        x: 49,
        y: 74,
        title: "Two calls to action, not one funnel",
        body: "\"Share Your Journey\" goes straight to the submission form; \"Explore Knowledge Hub\" goes to resources. Equal visual weight on purpose: someone arriving here might want to write, or might just want to read and feel less alone.",
      },
      {
        id: "btp-b",
        x: 90,
        y: 83,
        title: "Five photos, five captions",
        body: "The background is a five-slide rotation, not one static image, each slide with its own caption and its own mobile crop swapped in under 768px, so a face stays framed instead of just being a squeezed desktop photo.",
      },
    ],
    layout: "spread",
  },
  {
    id: "urban-threads",
    plate: "02",
    title: "GidiamMini",
    tagline: "A shop that checks its own bank transfers.",
    year: "2025",
    role: "Sole developer",
    stack: ["Next.js", "TypeScript", "Supabase", "Paystack"],
    discipline: "Product",
    link: "[[current live URL for GidiamMini]]",
    linkLabel: "[[link label]]",
    image: "/urbanthreads_img.png",
    // This screenshot predates the rename: it's the storefront under its old
    // "UrbanThreads Co." branding. The product underneath has grown a great
    // deal since (see the build notes below); swap in a current shot when
    // there's one to hand.
    imageAlt: "The storefront's homepage, shown here under its earlier UrbanThreads Co. branding.",
    premise:
      "GidiamMini is a boutique e-commerce site for baby clothing, kids' wear and maternity essentials, built to run more than one store: every table is scoped to a store id enforced in Postgres itself, not just filtered by the interface. Customers can pay by card through Paystack or by bank transfer, uploading a receipt afterwards; an OCR pass then reads a candidate amount and reference off that receipt as an editable suggestion. Whoever verifies the payment can always overwrite it before confirming.",
    build: [
      "Built with Next.js and TypeScript, with Supabase (Postgres) behind it and store-level data isolation enforced by row-level security in the database itself, not just filtered in application code.",
      "Card payments run through Paystack. Bank transfers are verified from an uploaded receipt instead, with OCR suggesting the amount and reference as an editable guess; whoever verifies the payment can always overwrite it.",
      "The cart survives more than a refresh: an abandoned one can be captured and reopened later from a resume link. Prices and stock are never trusted from the client either, they're re-checked server-side at checkout, so a stale price sitting in someone's browser is never what gets charged.",
      "Getting store isolation right was the trickiest part: one store's admin should never see another store's orders, even by accident. A standalone script creates real rows for two separate stores and proves neither can read the other's; the fix that made it true lives in a single migration.",
    ],
    annotations: [
      {
        id: "ut-a",
        x: 30,
        y: 38,
        title: "An older name on an older screenshot",
        body: "This is the pre-rename homepage. The storefront has since become a multi-store platform with its own payment verification; the build notes below describe what's actually running now.",
      },
      {
        id: "ut-b",
        x: 50,
        y: 88,
        title: "Featured Products",
        body: "The same card pattern runs across the storefront: image, name, price, one clear action, so a shopper never has to learn a new layout between the homepage and a category page.",
      },
    ],
    layout: "offset",
  },
  {
    id: "gidiam-care",
    plate: "03",
    title: "GidiamCare",
    tagline: "Records and appointments, for people who are already worried.",
    year: "2026",
    role: "Sole developer",
    stack: ["Next.js", "TypeScript", "Supabase", "Socket.IO"],
    discipline: "Product",
    link: "[[current live URL for GidiamCare, if there is one]]",
    linkLabel: "[[link label]]",
    image: "/gidiamcare_img.png",
    imageAlt: "The GidiamCare homepage: a hospital management system with separate patient, doctor and admin dashboards.",
    premise:
      "GidiamCare is a hospital management system built around three different people needing three different things from the same records: a patient checking results, a doctor between appointments and an admin running the building. Each gets its own dashboard, gated by role at the database level, not just hidden behind a tab in the interface.",
    build: [
      "Built with Next.js, TypeScript and Supabase, with patient, doctor and admin as three separate areas, each behind its own auth guard and its own row-level security policy.",
      "An appointment can become a live video consultation over Socket.IO, but only after the patient accepts a telehealth consent screen. Consent is asked every time, never assumed just because a call was requested.",
      "Dense clinical information (lab results, prescriptions, hospital-stay and transfusion logs) gets its own screen per role instead of one shared table: what a doctor needs to scan in ten seconds is not what a patient needs to sit with.",
      "[[Current status: in progress, paused, shipped internally, live for real patients?]]",
    ],
    annotations: [
      {
        id: "gc-a",
        x: 50,
        y: 60,
        title: "One login, three dashboards",
        body: "Patient, doctor and admin are separate areas behind Supabase auth with row-level security, not one dashboard with hidden tabs. What renders after signing in depends on the role stored in the database, not a flag in the browser.",
      },
      {
        id: "gc-b",
        x: 50,
        y: 88,
        title: "A call, gated behind consent",
        body: "Book Appointment can lead to a live video consultation over Socket.IO, but a telehealth consent screen has to be accepted first, every time, not assumed just because a call was requested.",
      },
    ],
    layout: "pair",
  },
];

/** Smaller pieces. Same grammar, less room; hierarchy is an argument too. */
export const alsoOnTheBench: Project[] = [
  {
    id: "city-bus",
    plate: "04",
    title: "City Bus Management",
    tagline: "Schedules and ticketing, designed before they were built.",
    year: "2022",
    role: "Design",
    stack: ["Figma"],
    discipline: "Interface design",
    link: "https://www.figma.com/proto/WYk5XRamem5gnpNmmcjSX8/City-Bus-Management-App?node-id=1-2&t=XY8oAcqEJhedLIl8-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    linkLabel: "Open the prototype",
    image: "/cbma_figma.png",
    imageAlt: "Figma prototype screens for a city bus management and ticketing mobile app.",
    premise:
      "A mobile app for bus schedules and ticketing, taken as far as an interactive Figma prototype.",
    build: [],
    annotations: [],
    layout: "pair",
  },
  {
    id: "damled",
    plate: "05",
    title: "Damled Commerce UI",
    tagline: "An e-commerce app, drawn.",
    year: "2024",
    role: "Design",
    stack: ["Figma"],
    discipline: "Interface design",
    link: "https://www.figma.com/design/P3DAKebFzEOoSDvr8tjRTO/Damled-Ecommerce-App-UI-(Copy)?node-id=0-1&t=ikPlu9LojQw2ABkT-1",
    linkLabel: "Open the file",
    image: "/pf_dam_ecom.png",
    imageAlt: "Figma design file for the Damled e-commerce mobile app interface.",
    premise:
      "A clean e-commerce app interface designed around making the shopping path short and legible.",
    build: [],
    annotations: [],
    layout: "pair",
  },
  {
    id: "portfolio-v1",
    plate: "06",
    title: "Portfolio, first edition",
    tagline: "The version this one replaced.",
    year: "2026",
    role: "Design and build",
    stack: ["Next.js", "Tailwind CSS"],
    discipline: "Product",
    link: "https://ifedolapoajayi.vercel.app/",
    linkLabel: "ifedolapoajayi.vercel.app",
    image: "/portfolio_img.png",
    imageAlt: "The previous version of Ifedolapo Ajayi's portfolio website.",
    premise:
      "The earlier portfolio: a straightforward Next.js site. Kept here because the distance between two versions of the same brief is worth showing.",
    build: [],
    annotations: [],
    layout: "pair",
  },
];
