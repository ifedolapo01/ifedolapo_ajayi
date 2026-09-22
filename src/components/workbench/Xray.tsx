import { useCallback, useEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DemoPanel } from "./DemoPanel";

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * The peel.
 *
 * Two stacked copies of the same panel, clipped against each other at the
 * thumb: everything left of it is built, everything right of it is drawn, so
 * the control is literally the seam you are dragging. It starts at the right
 * edge — the interface arrives finished, and you take it apart. The
 * control is a real range input (Radix), so arrow keys, Home/End and touch all
 * drive it, and because the reveal is user-driven it behaves identically when
 * the visitor has reduced motion turned on — the only thing that is suppressed
 * is the one-time sweep that teaches the affordance.
 */
export function Xray() {
  // 100 = wholly built. Dragging left peels the structure out from the right.
  const [value, setValue] = useState(100);
  const [selectedId, setSelectedId] = useState("a2");
  const touched = useRef(false);
  const reduced = useReducedMotion();
  const frame = useRef<number>(0);

  const onChange = useCallback((next: number[]) => {
    touched.current = true;
    setValue(next[0]);
  }, []);

  // One gentle sweep on arrival, so nobody has to guess what the control does.
  useEffect(() => {
    if (reduced) return;

    const OUT = 820;
    const HOLD = 640;
    const BACK = 640;
    const REST = 100;
    const PEAK = 56; // far enough to show two labelled boxes, not the whole thing
    const span = REST - PEAK;
    let start = 0;

    const step = (now: number) => {
      if (touched.current) return;
      if (!start) start = now;
      const t = now - start;

      if (t < OUT) setValue(REST - span * easeOut(t / OUT));
      else if (t < OUT + HOLD) setValue(PEAK);
      else if (t < OUT + HOLD + BACK)
        setValue(PEAK + span * easeOut((t - OUT - HOLD) / BACK));
      else {
        setValue(REST);
        return;
      }
      frame.current = requestAnimationFrame(step);
    };

    const timer = window.setTimeout(() => {
      frame.current = requestAnimationFrame(step);
    }, 1100);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame.current);
    };
  }, [reduced]);

  const seam = `${value}%`;

  return (
    <figure className="m-0">
      <div className="relative isolate select-none">
        {/* Built. Occupies everything left of the seam. */}
        <div style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
          <DemoPanel variant="rendered" selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        {/* Drawn. The same tree, inert, occupying the same box exactly. */}
        <div
          aria-hidden
          inert
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${value}%)` }}
        >
          <DemoPanel variant="schematic" selectedId={selectedId} onSelect={() => {}} />
        </div>

        {/* The seam. Hidden at rest so the built state is never marked up. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-px bg-vermilion transition-opacity duration-300"
          style={{ left: seam, opacity: value < 99.5 ? 1 : 0 }}
        >
          <span className="absolute -top-px left-0 h-1.5 w-1.5 -translate-x-1/2 bg-vermilion" />
          <span className="absolute -bottom-px left-0 h-1.5 w-1.5 -translate-x-1/2 bg-vermilion" />
        </div>
      </div>

      <figcaption className="mt-7">
        <Slider
          value={[value]}
          onValueChange={onChange}
          max={100}
          step={0.5}
          aria-label="Drag left to peel the interface back and show the structure underneath it"
        />
        <div className="mt-5 flex items-center justify-between">
          <span
            className="label transition-colors duration-300"
            style={{ color: value > 50 ? "hsl(var(--ink))" : undefined }}
          >
            Built
          </span>
          <span className="label-sm hidden font-mono text-graphite sm:block" aria-hidden>
            ← drag, or use the arrow keys
          </span>
          <span
            className="label transition-colors duration-300"
            style={{ color: value <= 50 ? "hsl(var(--vermilion))" : undefined }}
          >
            Drawn
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
