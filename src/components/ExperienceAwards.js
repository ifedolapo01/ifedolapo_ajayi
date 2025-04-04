"use client";

import React from "react";
import { FaBriefcase, FaAward } from "react-icons/fa";

export default function ExperienceAwards() {
  return (
    <section
      id="experience"
      className="py-12 px-6 md:px-12 lg:px-20 bg-[#F5F5F0] text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 xl:gap-32">
          {/* Working Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Working Experience</h3>
            <div className="space-y-10">
              <div className="relative">
                <div className="flex items-start gap-4">
                  <FaBriefcase className="text-xl text-gray-500 flex-shrink-0 mt-1" />
                  <div className="flex flex-col w-full">
                    <p className="text-sm">
                      Frontend Engineer at{" "}
                      <span className="font-bold">
                        Secured Records Management Solutions Ltd
                      </span>
                    </p>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      2024 - Present
                    </span>
                  </div>
                </div>
                <hr className="border-t border-gray-300 mt-4" />
              </div>

              <div className="relative">
                <div className="flex items-start gap-4">
                  <FaBriefcase className="text-xl text-gray-500 flex-shrink-0 mt-1" />
                  <div className="flex flex-col w-full">
                    <p className="text-sm">
                      Frontend Developer Intern at{" "}
                      <span className="font-bold">FlexiSAF Edusoft Limited</span>
                    </p>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Jan 2023 - April 2023
                    </span>
                  </div>
                </div>
                <hr className="border-t border-gray-300 mt-4" />
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Awards & Recognition</h3>
            <div className="space-y-10">
              <div className="relative">
                <div className="flex items-start gap-4">
                  <FaAward className="text-xl text-gray-500 flex-shrink-0 mt-1" />
                  <div className="flex flex-col w-full">
                    <p className="text-sm">
                      Hackathon Web Dev{" "}-{" "}
                      <span className="font-bold">Digital Literacy Champions</span>
                    </p>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Ongoing
                    </span>
                  </div>
                </div>
                <hr className="border-t border-gray-300 mt-4" />
              </div>

              <div className="relative">
                <div className="flex items-start gap-4">
                  <FaAward className="text-xl text-gray-500 flex-shrink-0 mt-1" />
                  <div className="flex flex-col w-full">
                    <p className="text-sm">
                      Advanced Diploma in Software Engineering{" "}-{" "}
                      <span className="font-bold">Aptech Computer Education</span>
                    </p>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Sept 2021 - Sept 2023
                    </span>
                  </div>
                </div>
                <hr className="border-t border-gray-300 mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
