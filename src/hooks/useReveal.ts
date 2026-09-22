import { useEffect, useRef, useState } from "react";

/**
 * Fires once, when an element first enters. Deliberately not reversible:
 * elements that re-animate on every pass are noise, not hierarchy.
 */
export function useReveal<T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T>(null);
  // Browsers without IntersectionObserver get the content, not the animation.
  const [shown, setShown] = useState(
    () => typeof window === "undefined" || !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shown]);

  return { ref, shown };
}
