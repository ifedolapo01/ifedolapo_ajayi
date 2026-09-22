import { useMediaQuery } from "./useMediaQuery";

/**
 * Motion on this site is either measurement or it is off. Components ask this
 * before animating anything the visitor did not initiate themselves.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
