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
      "Sickle cell disease is common in Nigeria and badly understood by people who don't live with it. Beyond the Pain is a place to share and read real accounts of living with it, built so the writing, not the interface, is what you notice.",
    build: [
      "Built with Next.js and Tailwind CSS, with Firebase handling the database and file storage.",
      "Stories come in through a public form, not a spreadsheet: writers submit their own, with an optional photo or video.",
      "The story text is set apart from the rest of the interface: a more book-like typeface, more room between lines, so it feels read rather than scrolled past.",
      "The most interesting build was \"Experience this story\": a full-screen reading mode with a calm soundtrack, generated in the browser as you read. No audio files, so no two visits sound quite the same.",
    ],
    annotations: [
      {
        id: "btp-a",
        x: 49,
        y: 74,
        title: "Two ways in, not one path",
        body: "\"Share Your Journey\" goes to the submission form; \"Explore Knowledge Hub\" goes to a resource library. Equal weight on purpose: some visitors want to write, others just want to read.",
      },
      {
        id: "btp-b",
        x: 90,
        y: 83,
        title: "Five photos, five captions",
        body: "The background rotates through five photos, each with its own caption and its own phone-cropped version, so faces don't get squeezed on small screens.",
      },
    ],
    secondPlate: {
      image: "/beyondthepain_stories.png",
      imageAlt: "The Beyond the Pain stories index, with filters for Patient, Caregiver and Observer perspectives.",
      caption: "One layer in: the stories index",
      annotations: [
        {
          id: "btp-c",
          x: 50,
          y: 66,
          title: "Read by perspective",
          body: "Every story is written from one of three perspectives: patient, caregiver or observer. A reader can filter by any of them.",
        },
      ],
    },
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
    image: "/gidiammini_img.png",
    imageAlt: "The GidiamMini homepage: a rotating hero for a baby, kids' and maternity clothing shop.",
    premise:
      "GidiamMini is a boutique online shop for baby clothing, kids' wear and maternity essentials, built to run several stores at once, each one's data kept fully separate. Customers pay by card or by bank transfer with an uploaded receipt; the system reads the amount and reference off it automatically, but only as a suggestion someone always checks first.",
    build: [
      "Built with Next.js, TypeScript and Supabase. Each store's data is kept fully separate at the database level, not just hidden on screen, so one store can never see another's.",
      "Card payments go through Paystack. For bank transfers, the buyer uploads a receipt; the system reads the amount and reference off it as a first guess, which someone always checks before approving.",
      "The cart survives more than closing the tab: an abandoned one can be picked up later from a link. Prices and stock are also re-checked at the moment of payment, so nobody is ever charged an old price.",
      "Because several stores share one system, keeping their data separate was essential from day one. An automated check runs against the real database and confirms it, every time.",
    ],
    annotations: [
      {
        id: "ut-a",
        x: 15,
        y: 68,
        title: "Each slide sells one category",
        body: "The homepage hero rotates through three slides, with the button changing to match: \"Shop Babies Collection\" here, not one generic \"Shop Now\" for everyone.",
      },
      {
        id: "ut-b",
        x: 90,
        y: 8,
        title: "The shop has its own light and dark mode",
        body: "That's a real toggle for shoppers, the same idea this portfolio uses for Paper and Ink, just built for a different audience.",
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
      "GidiamCare is a hospital management system built around three people who need different things from the same records: a patient checking results, a doctor between appointments, an admin running the building. Each gets their own dashboard, enforced by the system itself, not just hidden behind a tab.",
    build: [
      "Built with Next.js, TypeScript and Supabase. Patient, doctor and admin are three separate areas, each checking who's signed in before letting anyone through.",
      "An appointment can turn into a live video call, right inside the app. The patient always has to agree to it on a consent screen first; it's never assumed.",
      "Medical information (lab results, prescriptions, hospital stays, transfusion records) is dense and each role sees it laid out differently: what a doctor scans in ten seconds isn't what a patient sits and reads.",
      "Still a work in progress: everything above is built and working, but it isn't publicly live yet.",
    ],
    annotations: [
      {
        id: "gc-a",
        x: 50,
        y: 60,
        title: "One login, three dashboards",
        body: "Patient, doctor and admin are three separate areas, not one dashboard with hidden tabs. What you see depends on who you are, checked by the system itself.",
      },
      {
        id: "gc-b",
        x: 50,
        y: 88,
        title: "A call, gated behind consent",
        body: "Booking an appointment can lead to a live video call, but a consent screen has to be accepted first, every time.",
      },
    ],
    secondPlate: {
      image: "/gidiamcare_signup.png",
      imageAlt: "The GidiamCare account creation form, with fields grouped under a General Info section.",
      caption: "One layer in: creating an account",
      annotations: [
        {
          id: "gc-c",
          x: 50,
          y: 90,
          title: "A hint for a long form",
          body: "A floating prompt appears when there's more of the form below the fold, so nobody assumes they're finished too early.",
        },
      ],
    },
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
