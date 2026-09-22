import type { Project } from "@/types";
import { Reveal } from "@/components/sheet/Reveal";
import { SpecTable } from "@/components/sheet/SpecTable";
import { AnnotatedPlate } from "./AnnotatedPlate";
import { ProjectBody, ProjectHeading, ProjectLink } from "./ProjectHeading";
import { SecondPlate } from "./SecondPlate";

const RATIO: Record<Project["discipline"], string> = {
  Product: "2.14",
  "Interface design": "1.37",
};

function specsFor(project: Project) {
  return [
    { field: "Role", value: project.role },
    { field: "Year", value: project.year },
    { field: "Built with", value: project.stack.join(" · ") },
  ];
}

/**
 * One grammar, three compositions. Every sheet carries the same parts (mark,
 * title, spec table, premise, plate), but a page where six projects are laid
 * out identically reads as a list and these are supposed to read as cases.
 */
export function ProjectSheet({ project, priority }: { project: Project; priority?: boolean }) {
  const ratio = RATIO[project.discipline];
  const specs = specsFor(project);

  if (project.layout === "spread") {
    return (
      <article className="border-t border-ink pt-8 md:pt-10">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ProjectHeading project={project} />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <SpecTable specs={specs} />
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-10 md:mt-14">
          <AnnotatedPlate
            image={project.image}
            alt={project.imageAlt}
            ratio={ratio}
            sizes="(min-width: 1280px) 1100px, 100vw"
            annotations={project.annotations}
            priority={priority}
          />
        </Reveal>

        <Reveal delay={60} className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ProjectBody project={{ ...project, build: [] }} />
            <div className="mt-8">
              <ProjectLink project={project} />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ProjectBody project={{ ...project, premise: "" }} />
          </div>
        </Reveal>

        <Reveal delay={40}>
          <SecondPlate project={project} ratio={ratio} />
        </Reveal>
      </article>
    );
  }

  if (project.layout === "offset") {
    return (
      <article className="border-t border-ink pt-8 md:pt-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Text column holds the left edge; the plate runs past the grid. */}
          <Reveal className="lg:col-span-5 lg:pt-4">
            <ProjectHeading project={project} />
            <div className="mt-8">
              <ProjectBody project={project} />
            </div>
            <div className="mt-9">
              <SpecTable specs={specs} />
            </div>
            <div className="mt-8">
              <ProjectLink project={project} />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
            {/* Runs past the text grid, but stays inside the viewport. */}
            <div className="lg:-mr-8 xl:-mr-16">
              <AnnotatedPlate
                image={project.image}
                alt={project.imageAlt}
                ratio={ratio}
                sizes="(min-width: 1024px) 60vw, 100vw"
                annotations={project.annotations}
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={40}>
          <SecondPlate project={project} ratio={ratio} />
        </Reveal>
      </article>
    );
  }

  // pair: plate and prose side by side, at equal weight.
  return (
    <article className="border-t border-ink pt-8 md:pt-10">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <AnnotatedPlate
            image={project.image}
            alt={project.imageAlt}
            ratio={ratio}
            sizes="(min-width: 1024px) 55vw, 100vw"
            annotations={project.annotations}
          />
        </Reveal>

        <Reveal delay={90} className="lg:col-span-5 lg:pt-2">
          <ProjectHeading project={project} size="md" />
          <div className="mt-7">
            <ProjectBody project={project} />
          </div>
          <div className="mt-8">
            <SpecTable specs={specs} />
          </div>
          <div className="mt-8">
            <ProjectLink project={project} />
          </div>
        </Reveal>
      </div>

      <Reveal delay={40}>
        <SecondPlate project={project} ratio={ratio} />
      </Reveal>
    </article>
  );
}
