import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "@/data/projects";
import Section from "./Section";

export default function SelectedWorks() {
  return (
    <Section id="selected-works" tone="muted">
      <div className="text-center">
        <h2 className="font-serif text-3xl font-bold">My Projects</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">A glimpse of some of my projects</p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((project) => {
          const isFigma = project.link?.includes("figma.com");

          return (
            <div
              key={project.title}
              className="group overflow-hidden rounded-lg bg-white ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 hover:ring-brand-500/30 dark:bg-gray-800 dark:ring-white/10"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {project.link && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                      <FaArrowUpRightFromSquare />
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>

                {project.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-900/40 dark:text-brand-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    {isFigma ? "View Design →" : "Live Site →"}
                  </Link>
                ) : (
                  <span className="mt-4 inline-block font-medium text-gray-400 dark:text-gray-500">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
