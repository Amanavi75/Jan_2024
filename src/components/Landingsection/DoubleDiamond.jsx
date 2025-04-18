import React from 'react';

const DoubleDiamond = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white py-32 px-4 overflow-hidden">
      <h1 className="text-2xl font-semibold mb-20 text-center">
        Double Diamond Project Planning
      </h1>

      {/* Glass Container */}
      <div className="relative w-full max-w-4xl bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-4 py-10 shadow-md">
        <svg viewBox="0 0 800 200" className="w-full h-auto">
          {/* Diamond Lines */}
          <line x1="0" y1="100" x2="200" y2="0" stroke="white" strokeWidth="1" />
          <line x1="200" y1="0" x2="400" y2="100" stroke="white" strokeWidth="1" />
          <line x1="400" y1="100" x2="600" y2="0" stroke="white" strokeWidth="1" />
          <line x1="600" y1="0" x2="800" y2="100" stroke="white" strokeWidth="1" />

          <line x1="0" y1="100" x2="200" y2="200" stroke="white" strokeWidth="1" />
          <line x1="200" y1="200" x2="400" y2="100" stroke="white" strokeWidth="1" />
          <line x1="400" y1="100" x2="600" y2="200" stroke="white" strokeWidth="1" />
          <line x1="600" y1="200" x2="800" y2="100" stroke="white" strokeWidth="1" />

          {/* Vertical Dash Lines */}
          <line x1="0" y1="0" x2="0" y2="200" stroke="white" strokeWidth="1" strokeDasharray="4" />
          <line x1="200" y1="0" x2="200" y2="200" stroke="white" strokeWidth="1" strokeDasharray="4" />
          <line x1="400" y1="0" x2="400" y2="200" stroke="white" strokeWidth="1" strokeDasharray="4" />
          <line x1="600" y1="0" x2="600" y2="200" stroke="white" strokeWidth="1" strokeDasharray="4" />
          <line x1="800" y1="0" x2="800" y2="200" stroke="white" strokeWidth="1" strokeDasharray="4" />
        </svg>

        {/* Stage Labels */}
        <div className="absolute inset-0 flex justify-between items-center text-sm font-medium mx-12">
          {["Discover", "Define", "Develop", "Deliver"].map((label, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-[#d6f928] text-black rounded-full px-4 py-1 text-xs shadow-sm">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Descriptions */}
      <div className="mt-10 w-full max-w-6xl flex justify-between text-center text-sm text-gray-400">
        <div className="flex-1">Identifying Problem</div>
        <div className="flex-1">Unstructured Findings</div>
        <div className="flex-1">Opportunities</div>
        <div className="flex-1">Many Ideas</div>
        <div className="flex-1">Proposed Solution</div>
      </div>
    </div>
  );
};

export default DoubleDiamond;
