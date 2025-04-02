// WhatIDo.js
"use client";

export default function Services() {
  const services = [
    { title: "Frontend Development", description: "Building responsive and interactive user interfaces using React, Next.js, and Tailwind CSS." },
    { title: "Mobile Development", description: "Creating mobile applications with Java and Kotlin for Android." },
    { title: "UI/UX Design", description: "Designing user-friendly interfaces with Figma and ensuring accessibility." },
    { title: "State Management", description: "Implementing Redux Toolkit for efficient state handling in applications." }
  ];

  return (
    <section id="services" className="py-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">What I Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
