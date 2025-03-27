import React from "react";

const BlackButton = (props) => {
  const { text1, text2 = "text" } = props; // Set default value for text2

  return (
    //hello button
    <div className="bg-black rounded-lg max-w-fit flex items-center justify-center gap-2 p-2 px-4">
      <p className="text-white">{text1}</p>
      {text2 !== "text" && (
        <div className="bg-[#d6f928] rounded-md p-0.5 px-2 text-sm font-medium">
          <p className="text-black">{text2}</p>
        </div>
      )}
    </div>
  );
};

export default BlackButton;

