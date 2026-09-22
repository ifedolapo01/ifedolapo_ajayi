import { profile } from "@/data/profile";
import { Sheet } from "@/components/sheet/Sheet";
import { ThemeToggle } from "./ThemeToggle";

export function Masthead() {
  return (
    <header className="relative pt-6 md:pt-8">
      <Sheet>
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-label uppercase text-ink">{profile.name}</p>
            <p className="label flex flex-wrap items-center gap-x-1.5 pt-1.5">
              <span>{profile.role}</span>
              <span className="text-rule" aria-hidden>
                /
              </span>
              <span className="whitespace-nowrap">{profile.location}</span>
            </p>
          </div>
          <ThemeToggle className="-m-2 p-2 transition-opacity hover:opacity-70" />
        </div>
      </Sheet>
    </header>
  );
}
