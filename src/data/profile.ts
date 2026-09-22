import type { SectionMeta } from "@/types";

/**
 * Anything inside [[double brackets]] renders as an unfilled field: a blank
 * on a form. It is never rendered as if it were a fact. See <Fill />.
 */
export const profile = {
  name: "Ifedolapo Ajayi",
  role: "Frontend Engineer",
  location: "Abuja, Nigeria",
  email: "ifedolapoajayi0@gmail.com",
  resume: "/Ifedolapo-Ajayi-Frontend-Developer-Resume.pdf",
  portrait: "/profile_img.jpg",
  site: "https://ifedolapoajayi.vercel.app",
  links: [
    { label: "GitHub", href: "https://github.com/ifedolapo01", handle: "ifedolapo01" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ifedolapo-ajayi-3500aa1b2/",
      handle: "ifedolapo-ajayi",
    },
  ],

  /** The hero statement. The whole introduction is this one line. */
  statement: "Every interface you like is hiding work.",
  standfirst:
    "I'm Ifedolapo Ajayi, a frontend engineer in Abuja. I build the part people actually touch and care about everything underneath it. Drag the control to see what I mean.",
} as const;

export const sections: SectionMeta[] = [
  { id: "workbench", index: "01", label: "Workbench" },
  { id: "work", index: "02", label: "Work" },
  { id: "practice", index: "03", label: "Practice" },
  { id: "record", index: "04", label: "Record" },
  { id: "contact", index: "05", label: "Contact" },
];
