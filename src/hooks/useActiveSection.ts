import { useEffect, useState } from "react";

/**
 * Tracks which section owns the viewport so the margin rail can mark position.
 *
 * The section that *contains* a line a third of the way down the screen wins,
 * not the section nearest to it. Nearest-wins hands the mark to the next
 * heading while you are still reading the section above it, which is exactly
 * when a position indicator most needs to be right.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const pick = () => {
      const line = window.innerHeight * 0.35;
      let best = elements[0];

      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) best = el;
      }

      // The final section is often too short to reach the line. Claim it once
      // the page has bottomed out, or its heading would never light up.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        best = elements[elements.length - 1];
      }

      setActive((current) => (current === best.id ? current : best.id));
    };

    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, [ids]);

  return active;
}
