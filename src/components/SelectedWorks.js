import Image from "next/image";
import Link from "next/link";

export default function SelectedWorks() {
  const projects = [
    {
      title: "Beyond the Pain",
      description: "A digital platform to share and read real stories of living with Sickle cell disease, fostering empathy, support, and community awareness.",
      image: "/beyondthepain_img.png",
      link: "https://beyondthepain.vercel.app/",
    },
    {
      title: "Urban Threads Ecommerce App",
      description: "An ecommerce web application for buying and selling fashion products.",
      image: "/urbanthreads_img.png",
      link: "https://urbanthreads-kappa.vercel.app/",
    },
    {
      title: "Telemedicine Website",
      description: "A medical app for managing patient records and appointments.",
      image: "/gidiamcare_img.png",
    },
    {
      title: "Bus Management App",
      description: "A mobile app for managing bus schedules and ticketing.",
      image: "/cbma_figma.png",
      link: "https://www.figma.com/proto/WYk5XRamem5gnpNmmcjSX8/City-Bus-Management-App?node-id=1-2&t=XY8oAcqEJhedLIl8-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    },
    {
      title: "Portfolio Website",
      description: "A sleek and modern portfolio website showcasing projects and skills.",
      image: "/portfolio_img.png",
      link: "https://ifedolapoajayi.vercel.app/",
    },
    {
      title: "Damled Ecommerce App Design",
      description: "A clean and user-friendly e-commerce app UI designed to enhance shopping experience and improve customer engagement.",
      image: "/pf_dam_ecom.png",
      link: "https://www.figma.com/design/P3DAKebFzEOoSDvr8tjRTO/Damled-Ecommerce-App-UI-(Copy)?node-id=0-1&t=ikPlu9LojQw2ABkT-1",
    },    
  ];

  return (
    <section className="py-16 bg-[#F5F5F0] dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">A glimpse of some of my projects</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">
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
              {project.link ? (
                <Link href={project.link} className="text-blue-500 dark:text-blue-400 font-medium mt-4 inline-block">
                  View Project →
                </Link>
              ) : (
                <span className="text-gray-400 dark:text-gray-500 font-medium mt-4 inline-block">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
