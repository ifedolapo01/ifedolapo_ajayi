import { FaAward, FaBriefcase } from "react-icons/fa";
import Section from "./Section";

const EXPERIENCE = [
  {
    role: "Frontend Engineer",
    org: "Secured Records Management Solutions Ltd",
    period: "2024 - Present",
  },
  {
    role: "Frontend Developer Intern",
    org: "FlexiSAF Edusoft Limited",
    period: "Jan 2023 - April 2023",
  },
];

const AWARDS = [
  {
    title: "Hackathon Web Dev",
    org: "Digital Literacy Champions",
    period: "Aug 2024 - Aug 2025",
  },
  {
    title: "Advanced Diploma in Software Engineering",
    org: "Aptech Computer Education",
    period: "Sept 2021 - Sept 2023",
  },
];

function Timeline({ items, icon: Icon }) {
  return (
    <div className="space-y-10 border-l-2 border-brand-200 pl-8 dark:border-brand-900/60">
      {items.map((item) => (
        <div key={item.title ?? item.role} className="relative">
          <span className="absolute -left-[2.6rem] flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white ring-4 ring-gray-100 dark:ring-gray-900">
            <Icon className="text-xs" />
          </span>
          <p className="text-sm">
            {item.title ?? item.role}
            {item.title ? " - " : " at "}
            <span className="font-bold">{item.org}</span>
          </p>
          <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
        </div>
      ))}
    </div>
  );
}

export default function ExperienceAwards() {
  return (
    <Section id="experience-awards" tone="muted">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24 xl:gap-32">
        <div>
          <h3 className="mb-8 font-serif text-2xl font-semibold">Working Experience</h3>
          <Timeline items={EXPERIENCE} icon={FaBriefcase} />
        </div>

        <div>
          <h3 className="mb-8 font-serif text-2xl font-semibold">Awards & Certifications</h3>
          <Timeline items={AWARDS} icon={FaAward} />
        </div>
      </div>
    </Section>
  );
}
