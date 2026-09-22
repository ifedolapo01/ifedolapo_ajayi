"use client";

import { motion } from "framer-motion";

export default function Section({ id, tone = "base", className = "", children }) {
  const toneClasses = tone === "muted" ? "bg-gray-100 dark:bg-gray-900" : "bg-white dark:bg-black";

  return (
    <section id={id} className={`relative overflow-hidden ${toneClasses} px-6 py-16 md:px-12 md:py-20 lg:px-20 ${className}`}>
      {tone === "muted" && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:22px_22px] dark:[background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]"
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
