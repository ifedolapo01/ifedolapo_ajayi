import type { Post } from "@/types";
import { record } from "@/data/record";
import { SectionShell } from "@/components/sheet/Sheet";
import { Reveal } from "@/components/sheet/Reveal";
import { Fill } from "@/components/sheet/Fill";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KIND_LABEL: Record<Post["kind"], string> = {
  work: "Employment",
  study: "Study",
  service: "NYSC CDS",
};

/**
 * Experience as a record sheet: dates in the margin in tabular figures, the
 * role set large. Every entry starts open, so a recruiter can read the whole
 * history in one pass without clicking anything; anyone who wants a shorter
 * read can still collapse an entry themselves.
 */
export function Record() {
  return (
    <SectionShell id="record" index="04" title="Record" runningHead="Where the time went" tone="deep">
      <Accordion
        type="multiple"
        defaultValue={record.map((post) => post.id)}
        className="border-t border-ink"
      >
        {record.map((post, i) => (
          <Reveal key={post.id} delay={i * 60}>
            <AccordionItem value={post.id}>
              <AccordionTrigger>
                <div className="grid w-full gap-x-8 gap-y-2 md:grid-cols-[9rem_1fr]">
                  <p className="nums label pt-1.5 md:pt-2.5">{post.period}</p>
                  <div>
                    {/* AccordionHeader is already an h3: this is its text. */}
                    <span className="display block text-[clamp(1.5rem,5vw,1.875rem)] lg:text-[2rem]">
                      {post.role}
                    </span>
                    <p className="mt-1.5 text-sm text-graphite">
                      {post.org}
                      <span className="px-2 text-rule" aria-hidden>
                        ·
                      </span>
                      <span className="label-sm font-mono uppercase">{KIND_LABEL[post.kind]}</span>
                    </p>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="grid gap-x-8 gap-y-5 md:grid-cols-[9rem_1fr]">
                  <div aria-hidden className="hidden md:block" />
                  <div>
                    <p className="prose-sheet text-[0.9375rem]">
                      <Fill text={post.summary} />
                    </p>
                    {post.detail.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {post.detail.map((line, j) => (
                          <li key={j} className="flex gap-4 border-b border-rule pb-3 last:border-0">
                            <span
                              className="nums mt-1 font-mono text-label-sm text-vermilion"
                              aria-hidden
                            >
                              {String(j + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[0.9375rem] leading-relaxed text-graphite">
                              <Fill text={line} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Reveal>
        ))}
      </Accordion>
    </SectionShell>
  );
}
