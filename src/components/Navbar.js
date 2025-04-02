"use client";

import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../store/store";
import { useEffect, useState } from "react";

export default function Navbar() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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

  return (
    <nav
      className={`bg-gray-100 dark:bg-gray-800 p-4 text-black dark:text-white flex items-center justify-between w-full shadow-md ${
        isMobile ? "relative" : "sticky top-0 left-0"
      }`}
    >
      {/* Logo */}
      <h1 className="text-xl font-bold">Ifedolapo</h1>

      {/* Navbar Links */}
      <div className="flex flex-row gap-6">
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

      {/* Dark Mode Toggle */}
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className="p-2 bg-gray-300 dark:bg-gray-600 rounded-md"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}
