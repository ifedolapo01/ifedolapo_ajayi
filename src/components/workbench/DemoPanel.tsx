import { useEffect, useState } from "react";
import { appointments, type Appointment } from "@/data/demo";
import { cn } from "@/lib/utils";

const statusTone: Record<Appointment["status"], string> = {
  Confirmed: "border-ink/25 text-ink",
  Waiting: "border-vermilion/50 text-vermilion",
  Cancelled: "border-rule text-graphite line-through",
};

interface DemoPanelProps {
  variant: "rendered" | "schematic";
  selectedId: string;
  onSelect: (id: string) => void;
}

/**
 * ONE component, rendered twice by <Xray />: once as built, once as drawn.
 *
 * The schematic pass is not a separate illustration: it is this exact tree
 * under [data-variant="schematic"], where the CSS draws every [data-part] as a
 * labelled box. Two trees would drift apart and the x-ray would start showing
 * a structure that was never there.
 */
export function DemoPanel({ variant, selectedId, onSelect }: DemoPanelProps) {
  const [owned, setOwned] = useState(false);
  const selected = appointments.find((a) => a.id === selectedId) ?? appointments[0];
  const isSchematic = variant === "schematic";

  useEffect(() => {
    if (!owned) return;
    const t = window.setTimeout(() => setOwned(false), 3200);
    return () => window.clearTimeout(t);
  }, [owned]);

  return (
    <div
      data-variant={variant}
      data-part="panel"
      className="h-full border border-ink/12 bg-paper-raised p-4 sm:p-6"
    >
      <header data-part="header" className="flex items-baseline justify-between gap-4 pb-4">
        <div>
          <p className="label-sm font-mono uppercase text-graphite">Tuesday, 12 March</p>
          {/* Set like a heading, not marked up as one: this is product chrome
              inside a figure and it would otherwise break the page outline. */}
          <p className="pt-1 font-display text-xl tracking-[-0.02em] sm:text-2xl">Appointments</p>
        </div>
        <p data-part="count" data-chip className="rounded-full border border-rule px-2.5 py-1 font-mono text-label-sm uppercase text-graphite">
          {appointments.length} today
        </p>
      </header>

      <div data-part="table" className="border-t border-rule">
        <div className="grid grid-cols-[3.25rem_1fr_auto] gap-3 border-b border-rule py-2 sm:grid-cols-[3.75rem_1fr_7rem_auto]">
          <span className="label-sm font-mono uppercase text-graphite">Time</span>
          <span className="label-sm font-mono uppercase text-graphite">Patient</span>
          <span className="label-sm hidden font-mono uppercase text-graphite sm:block">Reason</span>
          <span className="label-sm font-mono uppercase text-graphite">Status</span>
        </div>

        <ul>
          {appointments.map((item) => {
            const active = item.id === selected.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  data-part="row"
                  aria-pressed={active}
                  tabIndex={isSchematic ? -1 : 0}
                  onClick={() => onSelect(item.id)}
                  className={cn(
                    "grid w-full grid-cols-[3.25rem_1fr_auto] items-center gap-3 border-b border-rule py-2.5 text-left",
                    "transition-colors duration-200 sm:grid-cols-[3.75rem_1fr_7rem_auto]",
                    "hover:bg-ink/[0.04]",
                    active && "bg-ink/[0.05]",
                  )}
                >
                  <span className="nums font-mono text-xs text-graphite">{item.time}</span>
                  <span className="truncate text-sm font-medium">{item.name}</span>
                  <span className="hidden truncate text-sm text-graphite sm:block">
                    {item.reason}
                  </span>
                  <span
                    data-part="status"
                    data-chip
                    className={cn(
                      "justify-self-end rounded-full border px-2 py-0.5 font-mono text-label-sm uppercase",
                      statusTone[item.status],
                    )}
                  >
                    {item.status}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* The reason the rows are buttons: selection has somewhere to go. */}
      <div data-part="detail" className="mt-4 border border-rule p-3.5">
        <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="label-sm font-mono uppercase text-graphite">Selected</p>
          <p className="truncate pt-1.5 text-sm font-medium">{selected.name}</p>
          <p className="nums truncate pt-0.5 font-mono text-xs text-graphite">
            {selected.time} · {selected.reason}
          </p>
        </div>
        {/* A demo whose only button does nothing would be a small lie in the
            middle of a page arguing for honesty, so it answers. */}
        <button
          type="button"
          data-part="action"
          data-fill
          tabIndex={isSchematic ? -1 : 0}
          onClick={() => setOwned(true)}
          className="shrink-0 bg-ink px-3 py-2 font-mono text-label-sm uppercase text-paper transition-colors hover:bg-vermilion"
        >
          Open record
        </button>
        </div>

        <p
          role="status"
          className={cn(
            "overflow-hidden text-[0.8125rem] leading-relaxed text-graphite transition-all duration-300 ease-sheet",
            owned ? "mt-3 max-h-16 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          There is no record behind it. This panel exists to be taken apart.
        </p>
      </div>
    </div>
  );
}
