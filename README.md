# Teardown — Ifedolapo Ajayi

A portfolio built on one idea: **every interface you like is hiding work.**

The site argues its own case rather than describing it. The hero is not a
greeting — it is a working appointments panel with a control that peels it back
to the structure underneath: the boxes, the component names, the spacing. Work
is presented as teardown sheets with annotated screenshots. Technologies appear
as spec-table rows about a job, never as a wall of logos.

Two inks on paper. Fraunces for display, Inter for reading, IBM Plex Mono for
every label, number and annotation.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # typecheck + production build into dist/
npm run preview    # serve the build, also on :3000
npm run lint
npm run typecheck
npm run images     # regenerate plates from /assets-source
npm run audit      # axe accessibility pass, both themes (dev server must be up)
```

Vite · React 19 · TypeScript (strict) · Tailwind CSS · Radix primitives
(shadcn/ui) · Lucide.

---

## Fill these in

Nothing on this site invents a fact to cover a gap. Anything unknown is drawn as
an unfilled field — `[[like this]]` in the data, rendered on the page as a
dotted blank. Searching the repo for `[[` finds every one.

```bash
grep -rn "\[\[" src/data
```

**`src/data/projects.ts`**

- Every project: `year`, `role`.
- The three main projects: the remaining `build` lines — how stories are
  submitted on Beyond the Pain, what lives in the Urban Threads store, which
  screens you built on the telemedicine app, and the current status of it.
- Every `annotations` entry: `title` and `body`. These are the notes that appear
  when someone opens a mark on a screenshot, so name the part of the screen and
  say what the decision was. Adjust `x` / `y` (percent of the image) to move a
  mark onto the thing it describes. Two or three per project is plenty — more
  than that and the plate gets noisy.

**`src/data/record.ts`**

- `detail` lines for Secured Records, FlexiSAF and Aptech.
- The Digital Literacy Champions hackathon `summary`.

**`src/data/practice.ts`**

- `now`: what you are learning, and what you are open to.
- The four paragraphs are written in your voice from what you have said about
  your own priorities, and the facts in them are real. Read them as a draft and
  make them exactly yours — this is the part of the site that is supposed to
  sound like a person.

**`index.html`** — update the canonical URL and `og:url` when this goes live.

---

## How it is put together

```
src/
  sections/      One file per section of the page.
  components/
    sheet/       The page grammar: Sheet, SectionShell, Reveal, SpecTable, Fill.
    workbench/   The hero exhibit — DemoPanel and the Xray that peels it.
    work/        Project sheets, annotated plates, the secondary index.
    chrome/      Masthead, margin rail, mobile position marker, stock toggle.
    contact/     The closing address.
    ui/          shadcn/ui primitives (Slider, Dialog, Accordion).
  data/          All content. No copy lives in a component.
  hooks/         Reduced motion, media queries, section tracking, reveals.
  lib/           cn(), plate name helper.
```

### The peel

`DemoPanel` renders **twice** inside `Xray` — once as built, once as drawn — and
the two copies are the same component under a `data-variant` attribute. The
schematic styling in `index.css` draws every element carrying `data-part` as a
labelled dashed box. Keeping it to one component tree is the point: two trees
would drift apart, and the x-ray would start showing a structure that was never
really there.

The control is a Radix slider, so arrow keys, Home/End and touch all drive it.
The thumb *is* the seam: built to the left of it, drawn to the right. Because
the reveal is driven by the visitor, it behaves identically with reduced motion
turned on — the only thing suppressed is the one-time sweep on arrival that
teaches the affordance.

### Adding a project

1. Drop the screenshot into `assets-source/` and run `npm run images`. That
   writes a small and a full-size WebP plus a PNG fallback into `public/plates/`.
2. Add an entry to `src/data/projects.ts`, with `image` as `/<basename>.png`.
3. Pick a `layout`: `spread`, `offset` or `pair`. The three compositions exist
   so the plates do not read as a list — if you add a fourth project, give it a
   different layout from its neighbour.
4. Set `discipline` to `Product` (2.14:1 screenshots) or `Interface design`
   (1.37:1 Figma frames). That picks the plate ratio.

### Accessibility and performance

- `npm run audit` runs axe over the page in both the Paper and Ink themes. It
  currently reports zero violations; keep it that way.
- Every interaction has a keyboard path: the peel is a real slider, annotation
  marks are buttons that own their notes through `aria-controls`, the mobile
  index is a Radix dialog with focus trapping, and there is a skip link.
- Motion is gated on `prefers-reduced-motion` in both CSS and JS.
- Screenshots ship as responsive WebP with explicit aspect ratios, so nothing
  reflows while they load. The first plate is eager; everything below it is lazy.
- The chosen stock is applied by an inline script before first paint, so the
  theme never flashes.

---

## Notes

- **Plates on small screens** run edge to edge in their true ratio rather than
  being cropped. A crop would move the annotation marks off the parts of the
  screen they point at, which is a worse trade than a shorter picture.
- **`assets-source/`** holds the original screenshots and is deliberately
  outside `public/`, so the full-size files are never shipped.
