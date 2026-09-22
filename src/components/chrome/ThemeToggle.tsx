import { useEffect, useState } from "react";

type Stock = "paper" | "ink";

const KEY = "teardown-stock";

function stored(): Stock | null {
  try {
    const value = localStorage.getItem(KEY);
    return value === "paper" || value === "ink" ? value : null;
  } catch {
    return null;
  }
}

/**
 * State is seeded from storage during the first render, not in an effect.
 * Reading it in one effect and writing it in another races: the write lands
 * first, with the default still in state and quietly overwrites the visitor's
 * saved choice before the read has been applied.
 */
function initial(): Stock {
  if (typeof window === "undefined") return "paper";
  return stored() ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "ink" : "paper");
}

/**
 * Not a sun and a moon. You are choosing the stock the thing is printed on,
 * which is what the control actually does here.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [stock, setStock] = useState<Stock>(initial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", stock === "ink");
    try {
      localStorage.setItem(KEY, stock);
    } catch {
      /* Private browsing. The choice just will not survive the tab. */
    }
  }, [stock]);

  // Follow the system only while the visitor has not chosen for themselves.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      if (!stored()) setStock(event.matches ? "ink" : "paper");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const next = stock === "paper" ? "ink" : "paper";

  return (
    <button
      type="button"
      onClick={() => setStock(next)}
      aria-label={`Switch to ${next} stock`}
      className={className}
    >
      <span className="label-sm font-mono uppercase">
        <span className={stock === "paper" ? "text-ink" : "text-graphite"}>Paper</span>
        <span className="px-1.5 text-rule" aria-hidden>
          ·
        </span>
        <span className={stock === "ink" ? "text-vermilion" : "text-graphite"}>Ink</span>
      </span>
    </button>
  );
}
