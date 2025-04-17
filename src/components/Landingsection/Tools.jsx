import React from "react";
import PenIcon from "@atlaskit/icon/core/pen";

const Tools = () => {
  return (
    <div className="bg-black py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 justify-between px-6">
        {/* Left Quote */}
        <div className="md:max-w-sm">
          <h1 className="text-2xl font-medium text-white">
            He was definitely the person who, if commits, would deliver with
            utmost excellence.
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            “Suman’s dedication and attention to detail are unmatched. He
            consistently delivers outstanding UI/UX solutions that transform
            user experiences.”
          </p>
        </div>

        {/* Glassy Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="w-40 h-60 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <div className="h-1/2 flex justify-center items-center text-white">
              <PenIcon />
            </div>
            <div className="h-1/2 bg-white/5 border-t border-white/10">
              <div className="text-md font-semibold text-center pt-6 text-white">
                100%
              </div>
              <p className="text-sm text-center text-gray-400 mt-2">
                Happy Clients
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-40 h-60 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <div className="h-1/2 bg-white/5 border-b border-white/10">
              <div className="text-md font-semibold text-center pt-6 text-white">
                35+
              </div>
              <p className="text-sm text-center text-gray-400 mt-2">
                Project Developed
              </p>
            </div>
            <div className="h-1/2 flex justify-center items-center text-white">
              <PenIcon />
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-40 h-60 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <div className="h-1/2 flex justify-center items-center text-white">
              <PenIcon />
            </div>
            <div className="h-1/2 bg-white/5 border-t border-white/10">
              <div className="text-md font-semibold text-center pt-6 text-white">
                2+
              </div>
              <p className="text-sm text-center text-gray-400 mt-2">
                Experience
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-40 h-60 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <div className="h-1/2 bg-white/5 border-b border-white/10">
              <div className="text-md font-semibold text-center pt-6 text-white">
                3
              </div>
              <p className="text-sm text-center text-gray-400 mt-2">
                Public Events
              </p>
            </div>
            <div className="h-1/2 flex justify-center items-center text-white">
              <PenIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
