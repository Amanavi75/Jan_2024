import React from "react";

const Underlinebutton = (props) => {
  const { text1, text2 = "text" } = props; // Set default value for text2

  return (
    <div className="">
      <p className="text-black underline font-semibold">{text1}</p>
      {text2 !== "text" && (
        <div className="bg-[#d6f928] rounded-md p-0.5 px-2 text-sm font-medium">
          <p className="text-black">{text2}</p>
        </div>
      )}
    </div>
  );
};

export default Underlinebutton;

