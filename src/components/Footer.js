"use client";

import Link from "next/link";

export default function FooterSection() {
  return (
    <div>
      {/* Talk Section */}
      <section className="text-center my-12">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Have a project?</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">"Let's talk with me"</h2>
        <a
          href="mailto:ifedolapoajayi0@gmail.com"
          className="inline-block bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-sm font-medium hover:opacity-80 transition"
        >
          Talk with me
        </a>
        <p className="text-sm text-gray-500 mt-3">
          My social link: <span className="underline">ui.brook.gra</span>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black text-black dark:text-white px-4 py-6 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0">
          {/* Left: Name and Role */}
          <div className="text-center md:text-left">
            <h2 className="text-base font-semibold">Ifedolapo</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Engineer | Mobile Developer</p>
          </div>

          {/* Right: Links */}
          <div className="flex gap-4 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/playground" className="hover:underline">Playground</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/case-studies" className="hover:underline">Case studies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
