import type { Project } from "@/types";
import { AnnotatedPlate } from "./AnnotatedPlate";

/**
 * The inner screen a project's main plate doesn't have room for: a reading
 * view, a form, a dashboard. Capped narrower than the main plate and given
 * its own caption, so it reads as supporting evidence for the build notes
 * rather than a second hero competing with the first.
 */
export function SecondPlate({ project, ratio }: { project: Project; ratio: string }) {
  const second = project.secondPlate;
  if (!second) return null;

  return (
    <div className="mx-auto mt-10 max-w-2xl md:mt-14">
      <p className="label mb-3">{second.caption}</p>
      <AnnotatedPlate
        image={second.image}
        alt={second.imageAlt}
        ratio={ratio}
        sizes="(min-width: 1024px) 42rem, 100vw"
        annotations={second.annotations ?? []}
      />
    </div>
  );
}
