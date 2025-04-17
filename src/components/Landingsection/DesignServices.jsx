import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Image,
  Frame,
  Palette
} from "lucide-react";

import websiteImage from "../../assets/Project/anime.webp";
import framerImage from "../../assets/Project/api.webp";

const DesignServices = () => {
  const features = [
    "Framer Migration",
    "Video & Motion Graphics",
    "Copywriting",
    "Posters",
    "Custom Code",
    "SEO",
    "Icons",
    "Social Media",
    "Landing Pages",
    "Optimization",
  ];

  const cards = [
    {
      icon: <LayoutDashboard size={16} />,
      title: "Website Design",
      desc:
        "Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand.",
      image: websiteImage,
    },
    {
      icon: <Image size={16} />,
      title: "Logo Design",
      desc:
        "Crafting distinctive, scalable, and impactful logos that embody your brand’s identity and vision.",
    },
    {
      icon: <Palette size={16} />,
      title: "Graphic Design",
      desc:
        "Crafting bold, engaging, and versatile graphic designs that elevate your brand and captivate your audience.",
    },
    {
      icon: <Frame size={16} />,
      title: "Framer Design",
      desc:
        "Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience.",
      image: framerImage,
    },
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
              Design{" "}
              <span className="font-medium text-gray-400">Services</span>
            </h1>
            <p className="text-gray-400 mt-2 text-sm max-w-md">
              Explore a suite of design services to elevate your brand.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:opacity-90 transition"
          >
            Contact Now
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4 text-white">
                {card.icon}
                <h2 className="text-sm font-semibold">{card.title}</h2>
              </div>
              <p className="text-sm text-gray-400 mb-4">{card.desc}</p>
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full rounded-md object-cover"
                />
              )}
            </div>
          ))}
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
