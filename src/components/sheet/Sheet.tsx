import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The drawing area. Its left and right hairlines are the only persistent
 * decoration on the site and exist to make the grid legible, which is the
 * argument the whole thing is making.
 */
export function Sheet({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-sheet px-5 sm:px-8 lg:px-16", className)}>
      <span aria-hidden className="sheet-edge left-8" />
      <span aria-hidden className="sheet-edge right-8" />
      {children}
    </div>
  );
}

interface SectionShellProps {
  id: string;
  index: string;
  title: string;
  /** The running head sits opposite the section title, as on a printed page. */
  runningHead?: string;
  children: ReactNode;
  tone?: "paper" | "deep";
  className?: string;
}

export function SectionShell({
  id,
  index,
  title,
  runningHead,
  children,
  tone = "paper",
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "relative scroll-mt-20 py-20 md:py-28 lg:py-36",
        tone === "deep" ? "bg-paper-deep" : "bg-paper",
        className,
      )}
    >
      <Sheet>
        <header className="mb-12 md:mb-16">
          <div className="hairline" />
          <div className="flex items-baseline justify-between gap-6 pt-3">
            <h2 id={`${id}-title`} className="label-ink">
              <span className="text-vermilion">{index}</span>
              <span className="px-2 text-rule" aria-hidden>
                /
              </span>
              {title}
            </h2>
            {runningHead ? (
              <p className="label hidden sm:block" aria-hidden>
                {runningHead}
              </p>
            ) : null}
          </div>
        </header>
        {children}
      </Sheet>
    </section>
  );
}
