import { practice } from "@/data/practice";
import { SectionShell } from "@/components/sheet/Sheet";
import { Reveal } from "@/components/sheet/Reveal";
import { SpecTable } from "@/components/sheet/SpecTable";
import { Plate } from "@/components/work/Plate";

/**
 * Not a biography. The margin carries the opinions, the column carries the
 * story, and the spec table at the end carries the facts a recruiter is
 * actually scanning for — three different jobs, three different treatments.
 */
export function Practice() {
  return (
    <SectionShell id="practice" index="03" title="Practice" runningHead="How I work">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Margin: portrait and asides. */}
        <aside className="lg:col-span-3">
          <Reveal>
            <div className="max-w-[9rem] overflow-hidden border border-rule lg:max-w-none">
              <Plate
                name="profile_img"
                alt="Ifedolapo Ajayi"
                ratio="0.82"
                sizes="(min-width: 1024px) 240px, 144px"
                className="grayscale-[0.35] contrast-[1.02]"
              />
            </div>
            <p className="label mt-3">Ifedolapo Ajayi</p>
          </Reveal>

          <ul className="mt-10 space-y-8 lg:mt-12">
            {practice.notes.map((note, i) => (
              <Reveal as="li" key={note.id} delay={80 + i * 70}>
                <p className="label-mark">{note.label}</p>
                <p className="mt-2 border-l-2 border-rule pl-4 text-sm leading-relaxed text-graphite">
                  {note.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </aside>

        {/* Column: the story. */}
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="display text-[clamp(1.875rem,6.5vw,2.5rem)] lg:text-[clamp(2rem,3vw,3rem)]">
              {practice.lead}
            </p>
          </Reveal>

          <div className="mt-8 space-y-6">
            {practice.paragraphs.map((text, i) => (
              <Reveal key={i} delay={60 + i * 50}>
                <p className="prose-sheet max-w-[36rem]">{text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <h3 className="label mt-14">At the moment</h3>
            <SpecTable specs={[...practice.now]} className="mt-4" />
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
