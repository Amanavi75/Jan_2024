import { Link } from "react-router-dom";
import suman from "../../assets/Img/suman.jpg";

export const AboutMe = () => {
  return (
    <div className="bg-black flex justify-center items-center pt-0 md:py-32 px-4">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-md p-8 md:p-12">
        {/* Desktop Image */}
        <div className="hidden lg:block">
          <img
            src={suman}
            className="object-cover rounded-xl h-[400px] w-[400px] brightness-110"
            alt="Suman Sourabh"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Mobile Image */}
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto mt-4 h-32 w-32 bg-cover bg-center"
            style={{ backgroundImage: `url(${suman})` }}
          ></div>

          {/* Greeting */}
          <h1 className="text-2xl font-semibold text-white mt-6">Hello</h1>

          {/* Title & Degree */}
          <div className="mt-4">
            <p className="text-md font-semibold text-white">
              Product Designer | UX/UI Designer | Frontend Developer
            </p>
            <p className="text-sm text-gray-400">
              B.Tech in Computer Science & Engineering, 2024
            </p>
          </div>

          {/* Testimonial / Description */}
          <blockquote className="text-sm text-gray-400 mt-6 leading-relaxed">
            "Suman worked on our dream project as a UX/UI Design Lead. His gift
            to perfect the designs was seen since very beginning of the project
            in his every action. From understanding the product & brand to
            understanding founders' vision to executing those minutest details.
            His sincerity and dedication to execute plans inspite of numerous
            huddles is what makes him a true winner. I believe this attitude and
            grit for his work will help him carve his mark in this industry."
          </blockquote>
        </div>
      </div>
    </div>
  );
};
