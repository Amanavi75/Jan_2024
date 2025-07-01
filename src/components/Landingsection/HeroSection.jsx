import React from "react";
import { ArrowUpRight, CircleDot } from "lucide-react";
import BlackButton from "../elements/BlackButton";
import OutlineButton from "../elements/OutlineButton";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full pt-36">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-full text-sm mb-6">
          <CircleDot size={14} />
          UI/UX & Product Designer
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white">
          Suman <span className="font-medium text-gray-300">Sourabh</span>
          <span className="inline-block align-middle ml-2">
            <ArrowUpRight className="w-6 h-6 inline-block" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl">
          I craft intuitive, accessible, and visually compelling user
          experiences for web and product interfaces that drive engagement and
          growth. Let’s turn ideas into stunning digital realities!
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact">
          <BlackButton text1="Contact Now" />
          </Link>
          <Link to="/projects">
            <OutlineButton text1="See All Projects" />
          </Link>
        </div>

        {/* Floating Testimonials */}
        <div className="hidden md:block absolute top-80 right-60 transform rotate-[-8deg] w-64 backdrop-blur-md bg-white/5 border border-white/10 text-white p-4 rounded-xl shadow-lg">
          <p className="text-sm">
            " Collaborating with Suman completely elevated our product design! "
          </p>
          <p className="text-right text-sm mt-2 text-gray-400">- pranavnb</p>
        </div>

        <div className="hidden md:block absolute bottom-40 right-60 transform rotate-[4deg] w-64 backdrop-blur-md bg-white/5 border border-white/10 text-white p-4 rounded-xl shadow-lg">
          <p className="text-sm">
            " Our user retention improved by 150% thanks to Suman's UI revamp. "
          </p>
          <p className="text-right text-sm mt-2 text-gray-400">- vijaynb</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
