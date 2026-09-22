import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Reveal } from "@/components/sheet/Reveal";
import { plateName } from "@/lib/plates";
import { Plate } from "./Plate";

/**
 * Smaller pieces, set smaller. Hierarchy is an argument: putting the Figma
 * files and the old portfolio at the same weight as the built products would
 * quietly claim they cost the same.
 */
export function BenchIndex({ items }: { items: Project[] }) {
  return (
    <section aria-labelledby="bench-title" className="mt-24 md:mt-32">
      <div className="hairline" />
      <h3 id="bench-title" className="label-ink pt-3">
        Also on the bench
      </h3>

      <ul className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const Wrapper = item.link ? "a" : "div";
          return (
            <Reveal as="li" key={item.id} delay={i * 70}>
              <Wrapper
                {...(item.link
                  ? { href: item.link, target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="group block"
              >
                <div className="overflow-hidden border border-rule bg-paper-deep">
                  <Plate
                    name={plateName(item.image)}
                    alt={item.imageAlt}
                    /* A single ratio across the row: mismatched heights here
                       read as an accident rather than as composition. */
                    ratio="1.5"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="transition-transform [transition-duration:600ms] ease-sheet group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <p className="label">
                    <span className="text-vermilion">{item.plate}</span>
                    <span className="px-2 text-rule" aria-hidden>
                      /
                    </span>
                    {item.stack.join(" · ")}
                  </p>
                  {item.link && (
                    <ArrowUpRight
                      aria-hidden
                      className="h-3.5 w-3.5 shrink-0 text-graphite transition-all duration-300 ease-sheet group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-vermilion"
                    />
                  )}
                </div>

                <h4 className="mt-2 font-display text-xl tracking-[-0.02em] transition-colors group-hover:text-vermilion">
                  {item.title}
                </h4>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-graphite">{item.premise}</p>
              </Wrapper>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
