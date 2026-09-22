/** Matches an unfilled field: [[whatever is inside]]. Shared by <Fill> and isBlank(). */
export const FIELD = /\[\[(.+?)\]\]/g;

/**
 * True when a string is nothing but an unfilled field. A field this site
 * would otherwise use as a live value, a URL, an href, needs to check this
 * first: <Fill> only dresses up text for reading, it can't rescue an
 * attribute that was about to point at a literal "[[…]]".
 */
export function isBlank(text: string): boolean {
  return /^\s*\[\[.*\]\]\s*$/.test(text);
}
