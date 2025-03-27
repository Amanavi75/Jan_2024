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
  {
    id: 3,
    name: "IBM Design Language",
    description:
      "IBM’s design language offers principles, components, and guidelines to create consistent experiences across IBM products and platforms.",
    image: IBM,
    link: "https://www.ibm.com/design/language/",
  },
  {
    id: 3,
    name: "IBM Design Language",
    description:
      "IBM’s design language offers principles, components, and guidelines to create consistent experiences across IBM products and platforms.",
    image: IBM,
    link: "https://www.ibm.com/design/language/",
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
    <div className="container__wrapper">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="px-4 md:px-12 pt-32">
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
            Design Systems
          </p>
          <h2 className="text-sm md:text-md font-regular text-center text-gray-600 py-2 pb-10">
            Crafting intuitive, accessible, and visually compelling designs.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {designsystem.map((item) => (
              <Link key={item.id} to={item.link} target="_blank">
                <div className="p-6 rounded-lg ">
                  <img className="mb-4 h-12" src={item.image} alt={item.name} />
                  <p className="text-lg font-semibold mb-3">{item.name}</p>
                  <p className="text-sm text-gray-600 mb-5">{item.description}</p>
                  <Underlinebutton text1="Click to visit" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="px-4 md:px-12 pt-28">
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
            Design Systems
          </p>
          <h2 className="text-sm md:text-md font-regular text-center text-gray-600 py-2 pb-10">
            Crafting intuitive, accessible, and visually compelling designs.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {designsystem.map((item) => (
              <Link key={item.id} to={item.link} target="_blank">
                <div className="p-6 rounded-lg ">
                  <img className="mb-4 h-12" src={item.image} alt={item.name} />
                  <p className="text-lg font-semibold mb-3">{item.name}</p>
                  <p className="text-sm text-gray-600 mb-5">{item.description}</p>
                  <Underlinebutton text1="Click to visit" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
