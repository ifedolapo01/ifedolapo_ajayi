import type { Project } from "@/types";

/**
 * Titles, descriptions, links, screenshots and stacks are real — carried over
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
      "The Beyond the Pain website — a platform for sharing stories about living with sickle cell disease.",
    premise:
      "Sickle cell disease is common in Nigeria and badly understood by people who don't live with it. Beyond the Pain is a digital platform for sharing and reading real accounts of living with it — built so that the writing, not the interface, is what you notice.",
    build: [
      "Built the full front end in Next.js and Tailwind CSS.",
      "[[How stories get in — a form, a CMS, something you wrote by hand?]]",
      "[[A decision you made about reading: type size, measure, pacing, quiet]]",
      "[[Anything you had to solve that was harder than it looked]]",
    ],
    annotations: [
      {
        id: "btp-a",
        x: 22,
        y: 30,
        title: "[[name what this part of the screen is]]",
        body: "[[why it is built the way it is]]",
      },
      {
        id: "btp-b",
        x: 68,
        y: 66,
        title: "[[name a second part]]",
        body: "[[the decision behind it]]",
      },
    ],
    layout: "spread",
  },
  {
    id: "urban-threads",
    plate: "02",
    title: "Gidiammini",
    tagline: "Commerce is a state management problem wearing nice clothes.",
    year: "2025",
    role: "Sole developer",
    stack: ["React", "Redux Toolkit"],
    discipline: "Product",
    link: "https://urbanthreads-kappa.vercel.app/",
    linkLabel: "urbanthreads-kappa.vercel.app",
    image: "/urbanthreads_img.png",
    // The screenshot below still shows the old "UrbanThreads Co." branding —
    // swap it for a current one whenever there's a fresh shot to hand.
    imageAlt: "The Gidiammini storefront — an e-commerce application for fashion products.",
    premise:
      "A storefront for buying and selling fashion. The interesting part of a shop is never the product grid — it's the cart: the one piece of state that has to survive navigation, stay correct, and never surprise anyone.",
    build: [
      "Built in React with Redux Toolkit holding cart and catalogue state.",
      "[[What lives in the store, and what you deliberately kept out of it]]",
      "[[How the cart persists between visits]]",
      "[[A bug or edge case that taught you something]]",
    ],
    annotations: [
      {
        id: "ut-a",
        x: 30,
        y: 38,
        title: "[[name what this part of the screen is]]",
        body: "[[why it is built the way it is]]",
      },
      {
        id: "ut-b",
        x: 74,
        y: 58,
        title: "[[name a second part]]",
        body: "[[the decision behind it]]",
      },
    ],
    layout: "offset",
  },
  {
    id: "gidiam-care",
    plate: "03",
    title: "Gidiamcare",
    tagline: "Records and appointments, for people who are already worried.",
    year: "2026",
    role: "Sole developer",
    stack: ["React"],
    discipline: "Product",
    image: "/gidiamcare_img.png",
    imageAlt: "A telemedicine web application for managing patient records and appointments.",
    premise:
      "A medical application for managing patient records and appointments. Health software is used by people under stress and by staff under time pressure, which makes clarity a functional requirement rather than a matter of taste.",
    build: [
      "Built the interface in React.",
      "[[Which screens you built — records, scheduling, something else]]",
      "[[How you handled dense information without it becoming noise]]",
      "[[Current status — in progress, paused, shipped internally?]]",
    ],
    annotations: [
      {
        id: "gc-a",
        x: 26,
        y: 44,
        title: "[[name what this part of the screen is]]",
        body: "[[why it is built the way it is]]",
      },
    ],
    layout: "pair",
  },
];

/** Smaller pieces. Same grammar, less room — hierarchy is an argument too. */
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
      "The earlier portfolio — a straightforward Next.js site. Kept here because the distance between two versions of the same brief is worth showing.",
    build: [],
    annotations: [],
    layout: "pair",
  },
];
