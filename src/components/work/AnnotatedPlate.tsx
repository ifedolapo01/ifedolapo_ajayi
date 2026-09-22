import { useId, useState } from "react";
import type { Annotation } from "@/types";
import { Fill } from "@/components/sheet/Fill";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { plateName } from "@/lib/plates";
import { Plate } from "./Plate";

interface AnnotatedPlateProps {
  image: string;
  alt: string;
  ratio: string;
  sizes: string;
  annotations: Annotation[];
  priority?: boolean;
}

/**
 * A screenshot you can interrogate. Pins are real buttons: hover, focus and
 * tap all open the note and the pin owns the note through aria-controls, so
 * the interaction exists for keyboard and screen reader users rather than only
 * for a mouse.
 *
 * Above `lg` the note is pinned beside the mark with a leader line, the way an
 * annotation sits on a drawing. Below it, notes collect underneath the plate:
 * floating callouts on a 380px screen are a legibility problem, not a feature.
 */
export function AnnotatedPlate({
  image,
  alt,
  ratio,
  sizes,
  annotations,
  priority,
}: AnnotatedPlateProps) {
  const [active, setActive] = useState<string | null>(null);
  const roomForCallouts = useMediaQuery("(min-width: 1024px)");
  const uid = useId();

  const current = annotations.find((a) => a.id === active) ?? null;
  const hasNotes = annotations.length > 0;

  return (
    <div>
      {/* Small screens run the plate edge to edge rather than cropping it: a
          crop would move the marks off the parts of the screen they annotate,
          and a 2:1 screenshot boxed inside a 350px column is barely a picture.
          The negative margins cancel the sheet gutter exactly. */}
      <div className="relative -mx-5 overflow-hidden border-y border-rule bg-paper-deep sm:mx-0 sm:border-x">
        <Plate
          name={plateName(image)}
          alt={alt}
          ratio={ratio}
          sizes={sizes}
          priority={priority}
        />

        {hasNotes &&
          annotations.map((note, i) => {
            const open = note.id === active;
            const toLeft = note.x > 55;
            return (
              <div
                key={note.id}
                className="absolute"
                style={{ left: `${note.x}%`, top: `${note.y}%` }}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`${uid}-${note.id}`}
                  onMouseEnter={() => setActive(note.id)}
                  onMouseLeave={() => setActive((v) => (v === note.id ? null : v))}
                  onFocus={() => setActive(note.id)}
                  onBlur={() => setActive((v) => (v === note.id ? null : v))}
                  onClick={() => setActive((v) => (v === note.id ? null : note.id))}
                  className={cn(
                    "relative z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center",
                    "rounded-full border bg-paper/90 font-mono text-[0.625rem] backdrop-blur-sm",
                    "transition-[background-color,color,border-color] duration-200",
                    open
                      ? "border-vermilion bg-vermilion text-paper"
                      : "border-ink/30 text-ink hover:border-vermilion hover:text-vermilion",
                  )}
                >
                  {String.fromCharCode(65 + i)}
                  <span className="sr-only">, annotation</span>
                </button>

                {/* The leader line: it draws out of the mark toward the note. */}
                {roomForCallouts && (
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-0 h-px origin-left bg-vermilion transition-transform duration-300 ease-sheet",
                      toLeft ? "right-3 origin-right" : "left-3",
                      open ? "scale-x-100" : "scale-x-0",
                    )}
                    style={{ width: "1.75rem" }}
                  />
                )}

                {roomForCallouts && (
                  <div
                    id={`${uid}-${note.id}`}
                    role="note"
                    className={cn(
                      "absolute top-0 w-64 -translate-y-1/2 border border-ink/15 bg-paper-raised p-3.5",
                      "shadow-[0_2px_16px_hsl(var(--ink)/0.1)]",
                      "transition-[opacity,transform] duration-300 ease-sheet",
                      toLeft ? "right-12" : "left-12",
                      open
                        ? "pointer-events-auto translate-x-0 opacity-100"
                        : cn("pointer-events-none opacity-0", toLeft ? "translate-x-2" : "-translate-x-2"),
                    )}
                  >
                    <p className="label-mark">
                      Note {String.fromCharCode(65 + i)}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-snug">
                      <Fill text={note.title} />
                    </p>
                    <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-graphite">
                      <Fill text={note.body} />
                    </p>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      {hasNotes && (
        <p className="label mt-3 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 bg-vermilion" aria-hidden />
          {annotations.length} annotation{annotations.length === 1 ? "" : "s"}: open one
        </p>
      )}

      {/* Small screens: the note lands under the plate instead of over it. */}
      {hasNotes && !roomForCallouts && (
        <div
          id={current ? `${uid}-${current.id}` : undefined}
          role="note"
          className={cn(
            "mt-3 border-l-2 border-vermilion bg-paper-raised p-4 transition-opacity duration-200",
            current ? "opacity-100" : "opacity-60",
          )}
        >
          {current ? (
            <>
              <p className="text-sm font-medium leading-snug">
                <Fill text={current.title} />
              </p>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-graphite">
                <Fill text={current.body} />
              </p>
            </>
          ) : (
            <p className="text-[0.8125rem] leading-relaxed text-graphite">
              Tap a mark on the screenshot to read what happens there.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
