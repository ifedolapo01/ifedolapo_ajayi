import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import { Sheet } from "@/components/sheet/Sheet";
import { Reveal } from "@/components/sheet/Reveal";
import { Xray } from "@/components/workbench/Xray";

/**
 * The first screen. No greeting, no job title in 72pt: a claim and a working
 * interface sitting next to it that you can take apart yourself.
 */
export function Workbench() {
  return (
    <section
      id="workbench"
      aria-labelledby="workbench-title"
      className="relative scroll-mt-20 pb-20 pt-14 md:pb-28 md:pt-20 lg:pb-32"
    >
      <Sheet>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* The claim. */}
          <div className="lg:col-span-5 lg:flex lg:flex-col lg:pt-6">
            <Reveal>
              <p className="label-mark">Fig. 00</p>
              <h1
                id="workbench-title"
                className="display mt-5 text-[clamp(2.5rem,10.5vw,3.75rem)] lg:text-[clamp(3rem,4.4vw,4.5rem)]"
              >
                {profile.statement}
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="prose-sheet mt-7">{profile.standfirst}</p>
            </Reveal>

            <Reveal delay={200} className="lg:mt-auto lg:pt-10">
              <a
                href="#work"
                className="group mt-9 inline-flex items-center lg:mt-0 gap-3 border-b border-ink pb-1.5 font-mono text-label uppercase text-ink transition-colors hover:border-vermilion hover:text-vermilion"
              >
                Six things I built
                <ArrowDown
                  aria-hidden
                  className="h-3.5 w-3.5 transition-transform duration-300 ease-sheet group-hover:translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>

          {/* The exhibit. */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={160}>
              <div className="mb-3 flex items-baseline justify-between gap-4 border-b border-rule pb-2">
                <p className="label">Demo interface · built for this page</p>
                <p className="label-sm hidden font-mono text-graphite md:block">Not a screenshot</p>
              </div>
              <Xray />
            </Reveal>
          </div>
        </div>
      </Sheet>
    </section>
  );
}
