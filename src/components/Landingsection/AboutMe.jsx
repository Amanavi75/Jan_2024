import { Link } from "react-router-dom";
import suman from "../../assets/Img/suman.jpg";

export const AboutMe = () => {
  return (
    <div className="flex justify-center items-center pt-0 md:py-32 px-2 md:px-12">
      <div className="max-w-6xl w-auto hidden lg:block ">
        <img
          src={suman}
          className="object-cover brightness-110 rounded-lg h-[400px] w-[400px]"
          alt="description"
        />
      </div>
      <div className="max-w-2xl flex flex-col items-center lg:items-start p-4 md:p-12">
        {/* Image for mobile view */}
        <div
          className="block lg:hidden rounded-full shadow-xl mx-auto mt-16 h-32 w-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${suman})` }}
        ></div>
        {/* Blockquote */}
        
        <h1 className="text-2xl font-medium text-gray-800">
          Hello
        </h1>
        <div className="mt-6">
          <p className="text-md font-semibold text-gray-800">Product Designer | UX/UI Designer | Frontend Developer</p>
          <p className="text-sm font-regular text-gray-500 ">
            B.Tech in Computer Science & Engineering, 2024
          </p>
        </div>

        <blockquote className="text-sm font-regular text-gray-500 mt-4">
          "Suman worked on our dream project as a UX/UI Design Lead. His gift to
          perfect the designs was seen since very beginning of the project in
          his every action. From understanding the product & brand to
          understanding founders vision to executing those minutest details. His
          sincerity and dedication to execute plans inspite of numerous huddles
          is what makes him true winner. I believe his this attitude and grit
          for his work will help him carve his mark in this Industry."
        </blockquote>

        
      </div>
    </div>
  );
};
