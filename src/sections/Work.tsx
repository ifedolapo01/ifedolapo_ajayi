import { alsoOnTheBench, projects } from "@/data/projects";
import { SectionShell } from "@/components/sheet/Sheet";
import { ProjectSheet } from "@/components/work/ProjectSheet";
import { BenchIndex } from "@/components/work/BenchIndex";

export function Work() {
  return (
    <SectionShell id="work" index="02" title="Work" runningHead="Three taken apart, three noted" tone="deep">
      <div className="space-y-24 md:space-y-36">
        {projects.map((project, i) => (
          <ProjectSheet key={project.id} project={project} priority={i === 0} />
        ))}
      </div>

      <BenchIndex items={alsoOnTheBench} />
    </SectionShell>
  );
}
