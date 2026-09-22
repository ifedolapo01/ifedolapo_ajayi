import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Sheet } from "@/components/sheet/Sheet";
import { Reveal } from "@/components/sheet/Reveal";
import { CopyEmail } from "@/components/contact/CopyEmail";

/**
 * The closing statement and then the practical things. A colophon underneath
 * because this is a piece of work like any other on the page and work gets
 * signed, including the part about which fields are still blank.
 */
export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-20 border-t border-ink bg-paper pb-28 pt-20 md:pb-32 md:pt-28 lg:pt-36"
    >
      <Sheet>
        <h2 id="contact-title" className="label-ink">
          <span className="text-vermilion">05</span>
          <span className="px-2 text-rule" aria-hidden>
            /
          </span>
          Contact
        </h2>

        <Reveal>
          <p className="display mt-10 max-w-4xl text-[clamp(2.25rem,9vw,3.25rem)] lg:text-[clamp(2.75rem,5vw,5rem)]">
            If you have an interface that is harder than it looks, that is the part I like.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 md:mt-20">
            <p className="label">Write to me</p>
            <div className="mt-4">
              <CopyEmail email={profile.email} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <ul className="mt-14 grid border-y border-rule sm:grid-cols-3 sm:divide-x sm:divide-rule">
            {[
              ...profile.links.map((l) => ({
                label: l.label,
                href: l.href,
                value: l.handle,
                external: true,
              })),
              {
                label: "Résumé",
                href: profile.resume,
                value: "PDF",
                external: true,
              },
            ].map((item) => (
              <li key={item.label} className="border-b border-rule last:border-b-0 sm:border-b-0">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-baseline justify-between gap-4 py-4 sm:flex-col sm:items-start sm:gap-2 sm:px-5 sm:py-6 sm:first:pl-0"
                >
                  <span className="label transition-colors group-hover:text-vermilion">
                    {item.label}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-sm text-ink transition-colors group-hover:text-vermilion">
                    {item.value}
                    <ArrowUpRight
                      aria-hidden
                      className="h-3.5 w-3.5 transition-transform duration-300 ease-sheet group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <footer className="mt-20 border-t border-rule pt-6 md:mt-28">
          <div className="grid gap-6 md:grid-cols-[1fr_auto]">
            <p className="max-w-measure text-[0.8125rem] leading-relaxed text-graphite">
              <span className="label-ink">Colophon</span>
              <span className="mt-2 block">
                Set in Fraunces, Inter and IBM Plex Mono. Built with React, TypeScript, Tailwind CSS
                and Radix primitives. The screenshots are the real products. Anything{" "}
                <span className="field-blank">set like this</span> is a field I have not filled in
                yet. I would rather show you the blank than make something up.
              </span>
            </p>
            <p className="label self-end md:text-right">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
        </footer>
      </Sheet>
    </section>
  );
}
