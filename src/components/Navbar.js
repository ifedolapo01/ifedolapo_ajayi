"use client";

import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../store/store";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isClient) return null;

  return (
    <nav
      className={`bg-gray-100 dark:bg-gray-800 p-4 text-black dark:text-white flex items-center justify-between w-full shadow-md ${
        isMobile ? "relative" : "sticky top-0 left-0"
      }`}
    >
      {/* Logo */}
      <Image
        src="/name_logo.png"
        alt="Logo"
        width={128}
        height={32}
        className="object-contain"
      />

      {/* Navbar Links */}
      <div
        className={`${
          isMobile ? "flex flex-col items-center absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-800" : "flex-row gap-6"
        } ${menuOpen ? "block" : "hidden"} md:flex z-10`}
      >
        <button onClick={() => scrollToSection("hero")} className="hover:underline">
          Home
        </button>
        <button onClick={() => scrollToSection("experience-awards")} className="hover:underline">
          Experience & Awards
        </button>
        <button onClick={() => scrollToSection("services")} className="hover:underline">
          Services
        </button>
        <button onClick={() => scrollToSection("contact")} className="hover:underline">
          Contact
        </button>
      </div>

      {/* Dark Mode Toggle and Hamburger Menu */}
      <div className="flex items-center space-x-4">
        {/* Mobile Dark Mode Toggle */}
        {isMobile && (
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="p-2 text-gray-500 dark:text-white md:hidden"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        )}

        {/* Hamburger Menu for Mobile */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-500 dark:text-white md:hidden"
          >
            {menuOpen ? "✖️" : "☰"}
          </button>
        )}

        {/* Desktop Dark Mode Toggle */}
        {!isMobile && (
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="p-2 bg-gray-300 dark:bg-gray-600 rounded-md md:flex hidden"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        )}
      </div>
    </nav>
  );
}
