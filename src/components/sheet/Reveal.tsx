import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Milliseconds. Kept small — stagger should be felt, not watched. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}

/**
 * The single reveal used site-wide: a short rise with the text clipped at the
 * baseline, like a line being set. Reduced motion renders it already arrived.
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const reduced = useReducedMotion();
  const { ref, shown } = useReveal<HTMLDivElement>();

  if (reduced) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "transition-[opacity,transform] [transition-duration:620ms] ease-sheet will-change-transform",
        shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
