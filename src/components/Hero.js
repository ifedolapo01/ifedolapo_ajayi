"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { scrollToSection } from "@/lib/scroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white px-6 py-24 text-black dark:bg-black dark:text-white md:px-16 md:py-32 lg:px-24"
    >
      {/* Decorative glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-700/20" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex max-w-4xl flex-col items-start"
      >
        <div className="mb-6 h-20 w-20 overflow-hidden rounded-full ring-4 ring-brand-500/20 md:h-24 md:w-24">
          <Image
            src="/profile_img.jpg"
            alt="Profile Picture"
            width={96}
            height={96}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Frontend Engineer · Abuja, Nigeria
        </p>

        <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
          Hello, I&apos;m{" "}
          <span className="bg-gradient-to-r from-brand-700 to-brand-400 bg-clip-text text-transparent dark:from-brand-400 dark:to-brand-200">
            Ifedolapo Ajayi
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
          I turn Figma designs into fast, accessible React and Next.js apps — from healthcare
          platforms to e-commerce.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/Ifedolapo-Ajayi-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-medium text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700"
          >
            My Resume <FaArrowUpRightFromSquare className="text-sm" />
          </a>

          <button
            onClick={() => scrollToSection("selected-works")}
            className="rounded-lg border border-black px-6 py-3 font-medium text-black transition hover:border-brand-600 hover:text-brand-600 dark:border-white dark:text-white dark:hover:border-brand-400 dark:hover:text-brand-400"
          >
            See my work
          </button>

          <div className="flex items-center gap-3 pl-2">
            <a
              href="https://www.linkedin.com/in/ifedolapo-ajayi-3500aa1b2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-full bg-gray-200 p-2.5 transition hover:bg-brand-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://github.com/ifedolapo01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="rounded-full bg-gray-200 p-2.5 transition hover:bg-brand-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="mailto:ifedolapoajayi0@gmail.com"
              aria-label="Send Email"
              className="rounded-full bg-gray-200 p-2.5 transition hover:bg-brand-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
