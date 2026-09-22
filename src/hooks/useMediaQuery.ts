import { useCallback, useSyncExternalStore } from "react";

/**
 * useSyncExternalStore rather than useState + useEffect: a media query is an
 * external store, and subscribing to it this way means the first render is
 * already correct instead of correcting itself a frame later.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
