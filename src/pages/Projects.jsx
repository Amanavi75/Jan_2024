import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Paris Olympics: Team USA",
      year: 2024,
      category: "TV",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
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
          He was definitely the person who if commits would deliver with utmost
          excellence.
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus,
          elit vitae fermentum.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-8 md:p-16 gap-12 max-w-6xl mx-auto">
        {/* Sidebar */}
        <div className="flex flex-col space-y-6 w-full md:w-3/12">
          <SidebarInfo
            title="Shyftlabs"
            content="Sketch, Keynote, After Effects, Photoshop"
          />
          <SidebarInfo
            title="Kraftbase"
            content="Priject A, Project B"
          />
          <SidebarInfo title="Raikars Good Vibes" content="Apple" />
          <SidebarInfo title="Others" content="Apple" />
        </div>

        {/* Projects Section */}
        <div className="w-full md:w-9/12 space-y-12">
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

// Sidebar Info Component
const SidebarInfo = ({ title, content }) => (
  <div>
    <h2 className="text-sm text-gray-500 font-medium">{title}</h2>
    <p className="text-md text-gray-800">{content}</p>
  </div>
);

// Project Card Component
const ProjectCard = ({ title, year, category, image }) => (
  <div className="space-y-2">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full object-cover h-48 sm:h-72 md:h-96 lg:h-[400px] rounded-lg shadow"
      />
    </div>
    <div className="pt-2">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500">({year})</p>
      <span className="mt-2 inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-full">
        {category}
      </span>
    </div>
  </div>
);

export default Projects;
