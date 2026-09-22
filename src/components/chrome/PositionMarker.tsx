import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { sections } from "@/data/profile";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

/**
 * The small-screen counterpart to the margin rail. Not the rail squashed —
 * a different object doing the same job: a marker that always states where you
 * are, and opens the full index on a tap. Thumb-reachable, one line tall.
 */
export function PositionMarker({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const current = sections.find((s) => s.id === active) ?? sections[0];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-paper/95 backdrop-blur-sm xl:hidden">
        <div className="flex items-center justify-between gap-4 px-5 py-2.5">
          <p className="label-ink flex items-center gap-2 truncate">
            <span className="nums text-vermilion">{current.index}</span>
            <span className="text-rule" aria-hidden>
              /
            </span>
            <span className="truncate">{current.label}</span>
          </p>
          <DialogTrigger className="-m-2 flex items-center gap-1.5 p-2 font-mono text-label uppercase text-graphite transition-colors hover:text-vermilion">
            Index
            <ChevronUp aria-hidden className="h-3.5 w-3.5" />
          </DialogTrigger>
        </div>
      </div>

      <DialogContent aria-describedby="index-hint">
        <DialogTitle className="label">Index</DialogTitle>
        <DialogDescription id="index-hint" className="sr-only">
          Jump to a section of the portfolio.
        </DialogDescription>

        <ul className="mt-4">
          {sections.map((section) => (
            <li key={section.id}>
              <DialogClose asChild>
                <a
                  href={`#${section.id}`}
                  aria-current={section.id === active ? "true" : undefined}
                  className="flex items-baseline gap-4 border-b border-rule py-4"
                >
                  <span
                    className={cn(
                      "nums font-mono text-label",
                      section.id === active ? "text-vermilion" : "text-graphite",
                    )}
                  >
                    {section.index}
                  </span>
                  <span className="font-display text-2xl tracking-[-0.02em]">{section.label}</span>
                </a>
              </DialogClose>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex justify-end">
          <ThemeToggle className="-m-2 p-2" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
