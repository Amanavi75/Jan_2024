import React from "react";
import Blackbutton from "../elements/Blackbutton";
import OutlineButton from "../elements/OutlineButton";

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="container__wrapper pt-72 max-w-screen-md w-max-[400px] ">
        <h1 className="text-4xl font-medium text-gray-900">
          Hello, I'm Suman Sourabh
        </h1>
        <h2 className="text-md font-regular text-gray-900 py-4">
          Crafting intuitive, accessible, and visually compelling interfaces
          that not only meet but exceed user expectations—because your digital
          presence deserves more than just a good design
        </h2>
        <div className="flex gap-4">
          <Blackbutton text1="View Projects" />
          <OutlineButton text1="View Blog" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
