import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import branding from "../assets/Icons/branding.png";
import Atlassian from "../assets/Icons/atlassian.png";
import IBM from "../assets/Icons/ibm.png";
import Underlinebutton from "../components/elements/Underlinebutton";

const designsystem = [
  {
    id: 1,
    name: "Branding Style Guides",
    description:
      "Apple’s first official design kit for Figma contains a comprehensive set of components, views, system interfaces, text styles, color styles, materials, and layout guides.",
    image: branding,
    link: "https://brandingstyleguides.com/",
  },
  {
    id: 2,
    name: "Atlassian Design System",
    description:
      "Atlassian Design System focuses on providing valuable assistance to teams worldwide by making collaboration seamless and easy.",
    image: Atlassian,
    link: "https://atlassian.design/",
  },
  {
    id: 3,
    name: "IBM Design Language",
    description:
      "IBM’s design language offers principles, components, and guidelines to create consistent experiences across IBM products and platforms.",
    image: IBM,
    link: "https://www.ibm.com/design/language/",
  },
];

const Resource = () => {
  return (
    <div className="container__wrapper bg-black text-white min-h-screen pb-32">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-40">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
            ◎ Design Resources
          </div>
          <h1 className="text-4xl font-light">
            Curated <span className="font-medium text-gray-400">Systems</span>
          </h1>
          <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto">
            Explore foundational design systems from industry leaders to guide your own product ecosystems.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {designsystem.map((item) => (
            <Link key={item.id} to={item.link} target="_blank">
              <div className="p-6 h-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                <img className="mb-4 h-12 w-auto" src={item.image} alt={item.name} />
                <h2 className="text-lg font-semibold mb-2 text-white">{item.name}</h2>
                <p className="text-sm text-gray-400 mb-5">{item.description}</p>
                <Underlinebutton text1="Click to visit" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resource;
