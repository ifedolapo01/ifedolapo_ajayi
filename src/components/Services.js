import { FaCode, FaFigma, FaLayerGroup, FaMobileAlt } from "react-icons/fa";
import Section from "./Section";

const SERVICES = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Development",
    description: "Creating mobile applications with Java and Kotlin for Android.",
  },
  {
    icon: FaFigma,
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces with Figma and ensuring accessibility.",
  },
  {
    icon: FaLayerGroup,
    title: "State Management",
    description: "Implementing Redux Toolkit for efficient state handling in applications.",
  },
];

export default function Services() {
  return (
    <Section id="services" tone="base">
      <h2 className="text-center font-serif text-3xl font-bold">What I Do</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-lg bg-white p-6 ring-1 ring-black/5 transition hover:-translate-y-1 hover:ring-brand-500/40 dark:bg-gray-800 dark:ring-white/10"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-900/40 dark:text-brand-300">
              <Icon className="text-lg" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
