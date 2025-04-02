"use client";

import React from "react";

export default function ExperienceAwards() {
  return (
    <section id="experience" className="py-12 px-6 md:px-16 lg:px-32 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience & Awards</h2>
        
        {/* Work Experience */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
          <div className="space-y-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="text-lg font-bold">Frontend Engineer - Secured Records Management Solutions Ltd</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">2024 - Present</p>
              <p className="mt-2">Developing and maintaining web applications using React, Next.js, Redux, and Tailwind CSS.</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="text-lg font-bold">Frontend Developer Intern - FlexiSAF Edusoft Limited</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Internship</p>
              <p className="mt-2">Gained experience in building educational platforms and interactive web interfaces.</p>
            </div>
          </div>
        </div>

        {/* Awards & Recognitions */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Awards & Certifications</h3>
          <div className="space-y-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="text-lg font-bold">Hackathon Web Dev - Digital Literacy Champions</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Recognized for participation and innovation in digital literacy programs.</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="text-lg font-bold">Advanced Diploma in Software Engineering - Aptech Computer Education</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Acknowledged for significant contributions to frontend and mobile development.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
