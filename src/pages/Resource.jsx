import React from "react";
import branding from "../assets/Icons/branding.png";
import Atlassian from "../assets/Icons/Atlassian.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Resource = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-12 py-40 md:py-40">
        <p className="text-xl md:text-2xl text-center font-Regular mb-5">
          Branding and Style Guides
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="https://brandingstyleguides.com/" target="_blank">
            <div className="bg-white rounded-xl  p-6">
              <img
                className="w-28 mx-auto mb-4"
                src={branding}
                alt="Branding Style Guides"
              />
              <p className="text-lg font-semibold text-center mb-3">
                Branding Style Guides
              </p>
              <p className="text-sm text-gray-600 mb-5">
                Apple’s first official design kit for Figma contains a
                comprehensive set of components, views, system interfaces, text
                styles, color styles, materials, and layout guides.
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Visit
              </button>
            </div>
          </Link>

          <Link to="https://brandingstyleguides.com/" target="_blank">
            <div className="bg-white rounded-xl  p-6">
              <img
                className="w-28 mx-auto mb-4"
                src={branding}
                alt="Branding Style Guides"
              />
              <p className="text-lg font-semibold text-center mb-3">
                Branding Style Guides
              </p>
              <p className="text-sm text-gray-600 mb-5">
                Apple’s first official design kit for Figma contains a
                comprehensive set of components, views, system interfaces, text
                styles, color styles, materials, and layout guides.
              </p>

              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Visit
              </button>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Resource;
