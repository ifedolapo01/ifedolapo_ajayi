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
      "Built the front end in Next.js and Tailwind CSS, with Firebase handling the database and file storage behind the submission form.",
      "Stories come in through a public form, not a spreadsheet or someone typing them in by hand: writers submit their own story, with an optional photo or short video, straight into the database.",
      "The story text itself is set apart from the rest of the interface: a different, more book-like typeface and more room between lines, so the words feel like they're being read rather than scrolled past.",
      "The most interesting thing to build was \"Experience this story\": a full-screen reading mode with a calm, generated soundtrack that plays as you read. It's created entirely in the browser rather than using audio files, so nothing has to download and no two visits sound quite the same.",
    ],
    annotations: [
      {
        id: "btp-a",
        x: 49,
        y: 74,
        title: "Two ways in, not one path",
        body: "\"Share Your Journey\" goes straight to the submission form; \"Explore Knowledge Hub\" goes to a resource library instead. Equal visual weight on purpose: someone arriving here might want to write, or might just want to read and feel less alone.",
      },
      {
        id: "btp-b",
        x: 90,
        y: 83,
        title: "Five photos, five captions",
        body: "The background isn't one static photo: it's five images that rotate, each with its own caption and each has its own version cropped specifically for phones so a face doesn't get squeezed or cut off on a small screen.",
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
    link: "https://gidiammini.vercel.app/",
    linkLabel: "gidiammini.vercel.app",
    image: "/urbanthreads_img.png",
    // This screenshot predates the rename: it's the storefront under its old
    // "UrbanThreads Co." branding. The product underneath has grown a great
    // deal since (see the build notes below); swap in a current shot when
    // there's one to hand.
    imageAlt: "The storefront's homepage, shown here under its earlier UrbanThreads Co. branding.",
    premise:
      "GidiamMini is a boutique online shop for baby clothing, kids' wear and maternity essentials, built so it can run several stores at once, each one's data kept completely separate from the others, not just hidden by how a screen is laid out. Customers can pay by card, or by bank transfer with a receipt they upload afterwards. When a receipt comes in, the system reads the amount and reference number off it automatically and fills them in, but always as a suggestion a person checks: the final say is never left to the software alone.",
    build: [
      "Built with Next.js and TypeScript, backed by Supabase for the database. Each store's information is kept apart at the database level itself, not just hidden by what a particular screen shows, so one store can never accidentally see another's data.",
      "Card payments go through Paystack. For bank transfers, the buyer uploads a receipt and the system reads the amount and reference off it automatically as a first guess, one a person always checks and can correct before it's approved.",
      "The cart survives more than closing the tab: if someone leaves without buying, it can be picked up again later from a link. Prices and stock are also double-checked again at the moment of payment, not just trusted from whatever the shopper's browser last showed, so nobody is ever charged an old price by mistake.",
      "Because more than one store shares the same system, keeping their information separate was treated as essential from day one, not an afterthought. An automated check runs against the real database and confirms, every time, that one store genuinely cannot see another's orders or customers.",
    ],
    annotations: [
      {
        id: "ut-a",
        x: 30,
        y: 38,
        title: "An older name on an older screenshot",
        body: "This screenshot is from before the rename. The shop itself has grown a lot since then: see the notes below for what it actually does now.",
      },
      {
        id: "ut-b",
        x: 50,
        y: 88,
        title: "Featured Products",
        body: "Every product is shown the same way everywhere on the site, a picture, the name, the price, one clear button, so shoppers never have to learn a new layout moving from the homepage into a category.",
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
    stack: ["Next.js", "TypeScript", "Supabase"],
    discipline: "Product",
    image: "/gidiamcare_img.png",
    imageAlt: "The GidiamCare homepage: a hospital management system with separate patient, doctor and admin dashboards.",
    premise:
      "GidiamCare is a hospital management system built around three different people who need three different things from the same records: a patient checking their results, a doctor moving between appointments and an admin running the building. Each one gets their own dashboard. What they're allowed to see is enforced by the system itself, not just hidden behind a tab someone could click past.",
    build: [
      "Built with Next.js, TypeScript and Supabase. Patient, doctor and admin are three completely separate areas of the app, each one checking who's signed in and only letting in the people who should be there.",
      "An appointment can turn into a live video call with a doctor, right inside the app. Before any call starts, the patient has to actively agree to it on a consent screen, every time: it's never just assumed because a call was requested.",
      "There's a lot of dense medical information (lab results, prescriptions, hospital stays, blood transfusion records) and each role sees it laid out differently. What a doctor needs to scan in ten seconds isn't what a patient needs to sit and read carefully.",
      "Still a work in progress: the pieces above are built and working, but it isn't a finished, publicly live product yet.",
    ],
    annotations: [
      {
        id: "gc-a",
        x: 50,
        y: 60,
        title: "One login, three dashboards",
        body: "Patient, doctor and admin are three separate areas, not one dashboard with hidden tabs other people could stumble into. What you see after signing in depends on who you actually are, checked by the system itself.",
      },
      {
        id: "gc-b",
        x: 50,
        y: 88,
        title: "A call, gated behind consent",
        body: "Booking an appointment can lead to a live video call with a doctor, but a consent screen has to be accepted first, every time, never assumed just because a call was requested.",
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
