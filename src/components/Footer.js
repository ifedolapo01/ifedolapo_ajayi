"use client";

export default function FooterSection() {
  return (
    <div>
      {/* Talk Section */}
      <section className="text-center my-12">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Have a project?</p>
        <a
          href="mailto:ifedolapoajayi0@gmail.com"
          className="inline-block bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-sm font-medium hover:opacity-80 transition"
        >
          Talk with me
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black text-black dark:text-white px-4 py-6 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0">
          
          <div className="text-center md:text-left">
            <h2 className="text-base font-semibold">Ifedolapo</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Engineer | Mobile Developer</p>
          </div>

          <div className="flex gap-4 text-sm">
            <button onClick={() => scrollToSection("hero")} className="hover:underline">Home</button>
            <button onClick={() => scrollToSection("experience-awards")} className="hover:underline">Experience</button>
            <button onClick={() => scrollToSection("services")} className="hover:underline">Services</button>
            <button onClick={() => scrollToSection("selected-works")} className="hover:underline">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="hover:underline">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
