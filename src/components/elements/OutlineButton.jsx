import React from 'react'

const OutlineButton = (props) => {
    const { text1, text2 = "text" } = props; // Set default value for text2
  
    return (
      <div className="outline outline-black rounded-lg max-w-fit flex items-center justify-center gap-2 p-2 px-4">
        <p className="text-black">{text1}</p>
        {text2 !== "text" && (
          <div className="bg-[#C2E12F] rounded-md p-0.5 px-2 text-sm font-medium">
            <p className="text-black">{text2}</p>
          </div>
        )}
      </div>
    );
  };

export default OutlineButton