import { sections } from "@/data/profile";
import { cn } from "@/lib/utils";

/**
 * The margin of a drawing sheet: section numbers, a tick against the one you
 * are in. It never covers content, since the sheet's own padding leaves the
 * column for it. It is also a plain list of anchors underneath, so it works
 * with the keyboard and reads correctly to a screen reader.
 */
export function MarginRail({ active }: { active: string }) {
  return (
    <nav
      aria-label="Sections"
      className="fixed left-0 top-0 z-30 hidden h-screen w-16 flex-col justify-center border-r border-rule bg-paper/80 backdrop-blur-[2px] xl:flex"
    >
      <ul className="flex flex-col gap-7">
        {sections.map((section) => {
          const current = section.id === active;
          return (
            <li key={section.id} className="relative">
              <a
                href={`#${section.id}`}
                aria-current={current ? "true" : undefined}
                className="group flex flex-col items-center gap-2 py-1"
              >
                <span
                  className={cn(
                    "nums font-mono text-label transition-colors duration-300",
                    current ? "text-vermilion" : "text-graphite group-hover:text-ink",
                  )}
                >
                  {section.index}
                </span>
                <span
                  className={cn(
                    "font-mono text-[0.5625rem] uppercase leading-none tracking-[0.18em] transition-colors duration-300",
                    "[writing-mode:vertical-rl]",
                    current ? "text-ink" : "text-graphite group-hover:text-ink",
                  )}
                >
                  {section.label}
                </span>
              </a>
              {/* The tick. A measurement mark, not a pill. */}
              <span
                aria-hidden
                className={cn(
                  "absolute -right-px top-1 h-5 w-2 border-r-2 border-vermilion transition-all duration-300 ease-sheet",
                  current ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0",
                )}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
