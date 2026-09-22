import type { Post } from "@/types";

/** Dates, roles and organisations are exact. Detail lines are fill-in fields. */
export const record: Post[] = [
  {
    id: "srms",
    role: "Frontend Engineer",
    org: "Secured Records Management Solutions Ltd",
    period: "2024 - Present",
    kind: "work",
    summary:
      "Building and maintaining the interfaces for a records management business: the screens people use to do their actual job, every day, for hours.",
    detail: [
      "[[The product or products you work on: what they do and who uses them]]",
      "[[A feature you owned end to end, from the design file to production]]",
      "[[Something that was difficult and the decision you made about it]]",
    ],
  },
  {
    id: "flexisaf",
    role: "Frontend Developer Intern",
    org: "FlexiSAF Edusoft Limited",
    period: "Jan 2023 - Apr 2023",
    kind: "work",
    summary:
      "First time writing frontend code that other people depended on, inside an education software team.",
    detail: [
      "[[What you worked on during the internship]]",
      "[[The thing you understood by the end that you did not understand at the start]]",
    ],
  },
  {
    id: "aptech",
    role: "Advanced Diploma in Software Engineering",
    org: "Aptech Computer Education",
    period: "Sept 2021 - Sept 2023",
    kind: "study",
    summary:
      "Two years of formal grounding: programming fundamentals, databases and software engineering practice, alongside the web work.",
    detail: ["[[Anything from the programme worth naming: a project, a specialism]]"],
  },
  {
    id: "dlc",
    role: "Web Development Hackathon",
    org: "Digital Literacy Champions",
    period: "Aug 2024 - Aug 2025",
    kind: "study",
    summary: "[[What you built for this and what came of it]]",
    detail: [],
  },
];
