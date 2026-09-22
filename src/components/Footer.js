"use client";

import { scrollToSection } from "@/lib/scroll";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "experience-awards", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "selected-works", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <div>
      {/* Talk Section */}
      <section className="relative overflow-hidden bg-white py-16 text-center dark:bg-black">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-64 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/10" />
        </div>
        <div className="relative">
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">Have a project?</p>
          <a
            href="mailto:ifedolapoajayi0@gmail.com"
            className="inline-block rounded-md bg-brand-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700"
          >
            Talk with me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white px-4 py-6 text-black dark:border-white/5 dark:bg-black dark:text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <div className="text-center md:text-left">
            <h2 className="text-base font-semibold">Ifedolapo</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Engineer | Mobile Developer</p>
          </div>

          <div className="flex gap-4 text-sm">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-brand-600 hover:underline dark:hover:text-brand-400"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
