import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, UserCheck, Globe, BarChart } from "lucide-react";

import websiteImage from "../../assets/Project/anime.webp";
import framerImage from "../../assets/Project/api.webp";

const DesignServices = () => {
  const features = [
    "UX Workshops",
    "UI/UX Design",
    "Design Systems",
    "Web Design",
    "Prototyping",
    "User Research",
    "Wireframing",
    "Interaction Design",
    "Strategy Planning",
    "Responsive Design",
    "Usability Testing",
    "Accessibility Audits",
    "Framer/Webflow/Wix/Wordpress",
    "Visual Design",
    "Team Facilitation",
  ];

  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
              <span className="text-gray-400">◎</span> Design services
            </div>
            <h1 className="text-4xl font-light">
              Design <span className="font-medium text-gray-400">Services</span>
            </h1>
            <p className="text-gray-400 mt-2 text-sm max-w-md">
              Explore a suite of offerings crafted to boost user experience, product clarity, and digital presence.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:opacity-90 transition"
          >
            Contact Now
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* UI/UX Design */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 text-white">
                <LayoutDashboard size={16} />
                <h2 className="text-sm font-semibold">UI/UX Design</h2>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                I create user-first interfaces that prioritize clarity, usability, and brand identity—resulting in digital products that feel intuitive and impactful.
              </p>
              <img
                src={websiteImage}
                alt="Website Design"
                className="w-full rounded-md object-cover"
              />
            </div>

            {/* UX Workshop Consultant */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-2 text-white">
                <UserCheck size={16} />
                <h2 className="text-sm font-semibold">UX Workshop Consultant</h2>
              </div>
              <p className="text-sm text-gray-400">
                Facilitate hands-on design thinking workshops to align stakeholders, validate ideas, and generate strategic product insights early in the process.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Web Designing */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-2 text-white">
                <Globe size={16} />
                <h2 className="text-sm font-semibold">Web Designing</h2>
              </div>
              <p className="text-sm text-gray-400">
                I design and build modern, responsive websites using tools like Framer, Webflow, WordPress, and Wix—tailored to your brand and content needs.
              </p>
            </div>

            {/* Product Planning and Strategy */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 text-white">
                <BarChart size={16} />
                <h2 className="text-sm font-semibold">Product Planning & Strategy</h2>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                I help define your product roadmap, user personas, and MVP scope—ensuring your UX and business goals align from day one.
              </p>
              <img
                src={framerImage}
                alt="Product Strategy"
                className="w-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-xs bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-full backdrop-blur-md"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignServices;
