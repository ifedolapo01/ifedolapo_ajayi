"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { scrollToSection } from "@/lib/scroll";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "experience-awards", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "selected-works", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-20 flex w-full items-center justify-between border-b border-black/5 bg-white/70 p-4 text-black backdrop-blur-md dark:border-white/5 dark:bg-gray-900/70 dark:text-white">
      <button
        onClick={() => handleLinkClick("hero")}
        className="flex flex-col items-start leading-none"
        aria-label="Scroll to top"
      >
        <span className="font-serif text-2xl font-bold italic text-black dark:text-white">Ifedolapo</span>
        <span className="text-[10px] font-semibold tracking-[0.3em] text-brand-600 dark:text-brand-400">AJAYI</span>
      </button>

      <div
        className={`absolute left-0 top-16 z-10 w-full flex-col items-center gap-4 bg-white/90 py-4 backdrop-blur-md dark:bg-gray-900/90 md:static md:flex md:w-auto md:flex-row md:gap-6 md:bg-transparent md:py-0 md:backdrop-blur-none dark:md:bg-transparent ${
          menuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        {LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => handleLinkClick(link.id)}
            className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline"
          >
            {link.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="Toggle dark mode"
          className="rounded-md p-2 text-gray-600 transition hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-gray-600 transition hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
