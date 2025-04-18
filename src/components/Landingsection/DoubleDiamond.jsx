import React from "react";

const DoubleDiamond = () => {
  const labels = ["Discover", "Define", "Develop", "Deliver"];
  const descriptions = [
    "Identifying Problem",
    "Unstructured Findings",
    "Opportunities",
    "Many Ideas",
    "Proposed Solution",
  ];

  return (
    <div className="flex flex-col items-center bg-black text-white py-32 px-4">
      {/* Headline */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 text-sm bg-white/5 text-white px-4 py-1 rounded-full border border-white/10 backdrop-blur-md mb-4">
          ⭘ UX Process
        </div>
        <h1 className="text-4xl font-light">
          Double <span className="text-gray-400 font-medium">Diamond</span> Framework
        </h1>
        <p className="text-sm text-gray-400 mt-2 max-w-xl">
          A strategic approach to innovation by separating problem and solution spaces.
        </p>
      </div>

      {/* Scrollable Diamond */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[800px] mx-auto bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-4 py-12 shadow-md relative">
          {/* Diamond SVG */}
          <svg viewBox="0 0 800 200" className="w-full h-auto">
            {/* Diamond Paths */}
            <line x1="0" y1="100" x2="200" y2="0" stroke="white" strokeWidth="1" />
            <line x1="200" y1="0" x2="400" y2="100" stroke="white" strokeWidth="1" />
            <line x1="400" y1="100" x2="600" y2="0" stroke="white" strokeWidth="1" />
            <line x1="600" y1="0" x2="800" y2="100" stroke="white" strokeWidth="1" />
            <line x1="0" y1="100" x2="200" y2="200" stroke="white" strokeWidth="1" />
            <line x1="200" y1="200" x2="400" y2="100" stroke="white" strokeWidth="1" />
            <line x1="400" y1="100" x2="600" y2="200" stroke="white" strokeWidth="1" />
            <line x1="600" y1="200" x2="800" y2="100" stroke="white" strokeWidth="1" />

            {/* Dashed Dividers */}
            {[0, 200, 400, 600, 800].map((x) => (
              <line
                key={x}
                x1={x}
                y1="0"
                x2={x}
                y2="200"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="4"
              />
            ))}
          </svg>

          {/* Stage Labels */}
          <div className="absolute top-6 left-0 w-full flex justify-between px-8 text-xs font-semibold">
            {labels.map((label, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="bg-[#d6f928] text-black rounded-full px-4 py-1 shadow-sm">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Descriptions */}
      <div className="mt-10 w-full overflow-x-auto">
        <div className="min-w-[800px] flex justify-between text-center text-xs text-gray-400 px-2">
          {descriptions.map((desc, idx) => (
            <div key={idx} className="flex-1 px-2">
              {desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoubleDiamond;
