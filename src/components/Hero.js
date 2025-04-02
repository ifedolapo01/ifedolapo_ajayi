"use client";

import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../store/store";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20 px-6 md:px-16 lg:px-24 gap-10 md:gap-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      {/* Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-full border-4 border-gray-300 dark:border-gray-700"
      >
        <Image
          src="/profile_img.jpg"
          alt="Profile Picture"
          width={224}
          height={224}
          className="rounded-full"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Hi, I&apos;m <span className="text-indigo-500">Ifedolapo</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
          A Frontend Engineer passionate about building seamless digital experiences.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <Link href="/projects">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
              See My Work
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-md hover:bg-gray-400 dark:hover:bg-gray-600 transition">
              Contact Me
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}