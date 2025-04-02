import Image from "next/image";
import Link from "next/link";

export default function SelectedWorks() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully functional e-commerce platform with a smooth shopping experience.",
      image: "/projects/ecommerce.png",
      link: "#",
    },
    {
      title: "Bus Management App",
      description: "A mobile app for managing bus schedules and ticketing.",
      image: "/projects/bus-app.png",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A sleek and modern portfolio website showcasing projects and skills.",
      image: "/projects/portfolio.png",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Selected Works</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">A glimpse of some of my projects</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
              <Link href={project.link} className="text-blue-500 dark:text-blue-400 font-medium mt-4 inline-block">View Project →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
