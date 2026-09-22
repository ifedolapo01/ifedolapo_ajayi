import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Fill } from "@/components/sheet/Fill";
import { cn } from "@/lib/utils";

export function ProjectHeading({ project, size = "lg" }: { project: Project; size?: "lg" | "md" }) {
  return (
    <div>
      <p className="label flex items-center gap-3">
        <span className="text-vermilion">Plate {project.plate}</span>
        <span className="h-px w-6 bg-rule" aria-hidden />
        {project.discipline}
      </p>
      <h3
        className={cn(
          "display mt-4",
          size === "lg"
            ? "text-[clamp(2.25rem,8vw,3rem)] lg:text-[clamp(2.5rem,4vw,4rem)]"
            : "text-[clamp(1.875rem,6vw,2.25rem)]",
        )}
      >
        {project.title}
      </h3>
      <p
        className={cn(
          "mt-4 font-display italic text-graphite",
          size === "lg" ? "text-xl md:text-2xl" : "text-lg",
        )}
      >
        {project.tagline}
      </p>
    </div>
  );
}

export function ProjectLink({ project }: { project: Project }) {
  if (!project.link) {
    return (
      <p className="label inline-flex items-center gap-2 border-b border-rule pb-1.5">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-graphite" aria-hidden />
        Not publicly available
      </p>
    );
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer noopener"
      className="group inline-flex items-center gap-2 border-b border-ink pb-1.5 font-mono text-label uppercase text-ink transition-colors hover:border-vermilion hover:text-vermilion"
    >
      {project.linkLabel ?? "Open"}
      <ArrowUpRight
        aria-hidden
        className="h-3.5 w-3.5 transition-transform duration-300 ease-sheet group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function ProjectBody({ project }: { project: Project }) {
  return (
    <div>
      {project.premise ? <p className="prose-sheet">{project.premise}</p> : null}

      {project.build.length > 0 && (
        <>
          <h4 className="label mt-9">What I built</h4>
          <ul className="mt-4 space-y-3">
            {project.build.map((line, i) => (
              <li key={i} className="flex gap-4 border-b border-rule pb-3 last:border-0">
                <span className="nums mt-1 font-mono text-label-sm text-vermilion" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.9375rem] leading-relaxed text-graphite">
                  <Fill text={line} />
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
