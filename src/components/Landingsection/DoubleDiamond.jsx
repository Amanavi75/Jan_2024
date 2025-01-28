import React from 'react';

const DoubleDiamond = () => {
  return (
    <div className="flex flex-col items-center bg-white text-black py-32 px-4">

      <h1 className="text-2xl font-regular mb-6 text-center pb-20">Double Diamond Project Planning</h1>

      
      <div className="relative w-full max-w-4xl">
 
        <svg viewBox="0 0 800 200" className="w-full h-auto">
\
          <line x1="0" y1="100" x2="200" y2="0" stroke="black" strokeWidth="1" />
          <line x1="200" y1="0" x2="400" y2="100" stroke="black" strokeWidth="1" />
          <line x1="400" y1="100" x2="600" y2="0" stroke="black" strokeWidth="1" />
          <line x1="600" y1="0" x2="800" y2="100" stroke="black" strokeWidth="1" />

    
          <line x1="0" y1="100" x2="200" y2="200" stroke="black" strokeWidth="1" />
          <line x1="200" y1="200" x2="400" y2="100" stroke="black" strokeWidth="1" />
          <line x1="400" y1="100" x2="600" y2="200" stroke="black" strokeWidth="1" />
          <line x1="600" y1="200" x2="800" y2="100" stroke="black" strokeWidth="1" />

    
          <line x1="000" y1="0" x2="000" y2="800" stroke="black" strokeWidth="1" strokeDasharray="4" />
          <line x1="200" y1="0" x2="200" y2="200" stroke="black" strokeWidth="1" strokeDasharray="4" />
          <line x1="400" y1="0" x2="400" y2="200" stroke="black" strokeWidth="1" strokeDasharray="4" />
          <line x1="600" y1="0" x2="600" y2="200" stroke="black" strokeWidth="1" strokeDasharray="4" />
          <line x1="800" y1="0" x2="800" y2="800" stroke="black" strokeWidth="1" strokeDasharray="4" />
        </svg>

        <div className="absolute inset-0 flex justify-between items-center text-sm font-medium mx-12">
          <div className="flex flex-col items-center">
            <div className="bg-[#d6f928] text-medium rounded-full px-4 py-1">Discover</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#d6f928] text-medium rounded-full px-4 py-1">Define</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#d6f928] text-medium rounded-full px-4 py-1">Develop</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#d6f928] text-medium rounded-full px-4 py-1">Deliver</div>
          </div>
        </div>
      </div>

  
      <div className="mt-6 w-full max-w-6xl flex justify-between text-center text-sm text-gray-700">
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
