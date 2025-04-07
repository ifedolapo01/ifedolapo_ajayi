"use client";

import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../store/store";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between text-left py-20 px-6 md:px-16 lg:px-24 gap-10 md:gap-20 bg-white dark:bg-black text-black dark:text-white">
      
      {/* Left Side - Profile Image & Greeting */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start text-left"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full border border-gray-300 dark:border-gray-700">
          <Image
            src="/profile_img.jpg"
            alt="Profile Picture"
            width={80}
            height={80}
            priority
            className="rounded-full"
          />
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
          Hello! I&apos;m <span className="text-black dark:text-white">Ifedolapo Ajayi</span>
        </h1>
      </motion.div>

      {/* Right Side - Description, Buttons & Socials */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start"
      >
        <h2 className="text-xl md:text-2xl font-semibold">
          A Frontend Engineer based in Abuja, Nigeria.
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Passionate about creating great experiences for digital products.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="mailto:ifedolapoajayi0@gmail.com"
            className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            Talk with me
          </a>
          <button
            onClick={() => scrollToSection("selected-works")}
            className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            See my work
          </button>
        </div>
      </motion.div>

      {/* Social Icons */}
      <div className="absolute right-6 md:right-10 top-10 flex flex-col gap-4">
        <Link
          href="https://www.linkedin.com/in/ifedolapo-ajayi-3500aa1b2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition">
            <FaLinkedin className="text-xl" />
          </button>
        </Link>

        <Link
          href="https://github.com/ifedolapo01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition">
            <FaGithub className="text-xl" />
          </button>
        </Link>

        <a
          href="mailto:ifedolapoajayi0@gmail.com"
          aria-label="Send Email"
          className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          <FaEnvelope className="text-xl" />
        </a>
      </div>
    </section>
  );
}