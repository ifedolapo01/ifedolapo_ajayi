import { Fragment } from "react";

const FIELD = /\[\[(.+?)\]\]/g;

/**
 * Renders copy in which [[bracketed passages]] are real, visible blanks —
 * a field on a form that has not been filled in yet. Nothing on this site
 * invents a fact to cover a gap; it shows you the gap.
 */
export function Fill({ text, className }: { text: string; className?: string }) {
  const parts = text.split(FIELD);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="field-blank" title="To be filled in">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </span>
  );
}
