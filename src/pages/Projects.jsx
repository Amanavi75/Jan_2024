import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Paris Olympics: Team USA",
      year: 2024,
      category: "TV",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },
    {
      title: "Paris Olympics: Team USA",
      year: 2024,
      category: "TV",
      image:
        "https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Paris Olympics: Team USA",
      year: 2024,
      category: "TV",
      image:
        "https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Paris Olympics: Team USA",
      year: 2024,
      category: "TV",
      image:
        "https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      {/* Heading Section */}
      <div className="text-center pt-40 px-4">
        <h1 className="text-2xl font-medium text-gray-800">
          My Creative projects you will love
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          I have displayed some of my projects below, Few of them are lockes and
          few are open to public.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row row-span-2 items-center md:items-start p-8 md:p-16 gap-12 max-w-6xl mx-auto">
        {/* Projects Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              year={project.year}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, year, category, image }) => (
  <div className="space-y-2">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full object-cover h-48 sm:h-72 md:h-96 lg:h-[400px] rounded-md shadow"
      />
      <div className="absolute top-0 left-0 w-[100%] rounded-md bg-black opacity-60 object-cover h-48 sm:h-72 md:h-96 lg:h-[400px] ">
        <div className="flex content-center items-center justify-center h-full">
          <svg
            width="77"
            height="100"
            viewBox="0 0 77 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.5384 0C30.0348 0 22.6881 3.53065 18.1057 9.25481C13.5234 14.979 11.6154 22.4008 11.6154 30.4087V34.6154H23.1538V30.4087C23.1538 24.3389 24.6562 19.5613 27.1202 16.4663C29.5841 13.3714 32.9345 11.5385 38.5384 11.5385C44.1574 11.5385 47.4928 13.2662 49.9567 16.3462C52.4207 19.4261 53.9231 24.2638 53.9231 30.4087V34.6154H65.4615V30.4087C65.4615 22.3558 63.4333 14.8588 58.8509 9.13462C54.2686 3.41046 47.027 0 38.5384 0ZM11.6154 38.4615C5.24517 38.4615 0.0769043 43.6298 0.0769043 50V88.4615C0.0769043 94.8317 5.24517 100 11.6154 100H65.4615C71.8317 100 77 94.8317 77 88.4615V50C77 43.6298 71.8317 38.4615 65.4615 38.4615H11.6154ZM38.5384 57.6923C42.7902 57.6923 46.2307 61.1328 46.2307 65.3846C46.2307 68.2242 44.6833 70.6581 42.3846 71.9952V80.7692C42.3846 82.8876 40.6568 84.6154 38.5384 84.6154C36.4201 84.6154 34.6923 82.8876 34.6923 80.7692V71.9952C32.3936 70.6581 30.8461 68.2242 30.8461 65.3846C30.8461 61.1328 34.2866 57.6923 38.5384 57.6923Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="pt-1">
      <div className="flex justify-between">
        <h3 className="text-md font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-500 ">({year})</p>
      </div>

      <span className="mt-2 inline-block px-4 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
        {category}
      </span>
    </div>
  </div>
);

export default Projects;
