import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

/**
 * Radix underneath, so the x-ray control is a real slider: arrow keys, Home,
 * End, page keys and touch all work without a line of extra code.
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, "aria-label": ariaLabel, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    {/* The colours are the other way round on purpose. The track is the
        annotation ink and the range paints over it in hairline grey, so the
        vermilion showing to the right of the thumb is exactly the part of the
        interface that has been peeled back. */}
    <SliderPrimitive.Track className="relative h-px w-full grow bg-vermilion">
      <SliderPrimitive.Range className="absolute h-full bg-rule" />
    </SliderPrimitive.Track>
    {/* role="slider" lands here, so the label has to as well. */}
    <SliderPrimitive.Thumb
      aria-label={ariaLabel}
      className={cn(
        "block h-7 w-7 cursor-grab rounded-full border border-ink bg-paper-raised",
        "shadow-[0_1px_3px_hsl(var(--ink)/0.14)] transition-[border-color,transform] duration-200",
        "hover:border-vermilion active:cursor-grabbing active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vermilion focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        "after:absolute after:inset-0 after:m-auto after:h-2.5 after:w-px after:bg-ink/50 after:content-['']",
      )}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
