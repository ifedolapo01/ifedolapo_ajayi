import { Fill } from "./Fill";
import { cn } from "@/lib/utils";

export interface Spec {
  field: string;
  value: string;
}

/**
 * Where technologies live. A stack is a fact about a job — a row on a spec
 * sheet — not a badge collection, so it is set like one.
 */
export function SpecTable({ specs, className }: { specs: Spec[]; className?: string }) {
  return (
    <dl className={cn("border-t border-rule", className)}>
      {specs.map((spec) => (
        <div
          key={spec.field}
          className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-rule py-2.5 sm:grid-cols-[7rem_1fr]"
        >
          <dt className="label pt-0.5">{spec.field}</dt>
          <dd className="font-mono text-[0.8125rem] leading-relaxed text-ink">
            <Fill text={spec.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
