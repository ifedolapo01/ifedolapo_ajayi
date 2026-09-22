/** A hotspot pinned to a screenshot, drawn with a leader line on activation. */
export interface Annotation {
  id: string;
  /** Position on the plate, in percent of the image box. */
  x: number;
  y: number;
  title: string;
  body: string;
}

export interface Project {
  id: string;
  /** Plate number as printed on the sheet. */
  plate: string;
  title: string;
  /** One line, set large. The editorial hook, not a description. */
  tagline: string;
  year: string;
  role: string;
  /** Technologies live here: as facts about a piece of work, never a wall. */
  stack: string[];
  discipline: "Product" | "Interface design";
  link?: string;
  linkLabel?: string;
  image: string;
  imageAlt: string;
  /** The problem the thing exists to solve. */
  premise: string;
  /** What was actually built. */
  build: string[];
  annotations: Annotation[];
  /** Plates are not identical: each project is composed differently. */
  layout: "spread" | "offset" | "pair";
  /**
   * An inner screen, not just the landing page: a reading view, a form, a
   * dashboard. Shown smaller than the main plate and set apart with its own
   * caption, so it reads as supporting evidence rather than a second hero.
   */
  secondPlate?: {
    image: string;
    imageAlt: string;
    /** One line of context above the plate. */
    caption: string;
    annotations?: Annotation[];
  };
}

export interface Post {
  id: string;
  role: string;
  org: string;
  period: string;
  /** Present-tense for current work, past for finished. */
  summary: string;
  detail: string[];
  kind: "work" | "study" | "service";
}

export interface SectionMeta {
  id: string;
  index: string;
  label: string;
}
