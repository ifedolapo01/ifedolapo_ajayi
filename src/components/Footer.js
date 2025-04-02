"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Profile Summary */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Ifedolapo Ajayi</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Frontend Engineer | Mobile Developer</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-0">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/case-studies" className="hover:underline">Case Studies</Link>
          <Link href="/about" className="hover:underline">About Me</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-300 dark:border-gray-700 mt-6 pt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Ifedolapo Ajayi. All rights reserved.</p>
      </div>
    </footer>
  );
}
