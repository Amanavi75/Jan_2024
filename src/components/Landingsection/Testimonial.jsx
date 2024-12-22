import rgv from "../../assets/Img/rgv.png";
import sam from "../../assets/Img/sam.png";

const Testimonial = () => {
  return (
    <section className="flex items-center justify-center py-20 min-w-screen">
      <div className="mt-14 flex flex-col md:flex-row justify-center items-center max-w-6xl  rounded-xl p-4 md:p-6">
        <div className="relative h-60 xl:h-80 ">
          <img
            src={sam}
            alt="profile"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="hidden md:flex items-center justify-center w-14 h-14 bg-[#d6f928]  rounded-md absolute -top-4 -right-4 -mb-4 -mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              className=" w-5 h-5 lg:inline-block"
              viewBox="0 0 975.036 975.036"
            >
              {" "}
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
          </div>
        </div>
        <div className="md:ml-20 lg:w-2/3 flex flex-col justify-between mt-4 md:mt-0">
          <h1 className="text-2xl font-medium text-gray-800">
            He was definitely the person who if commits would deliver with
            utmost excellence.
          </h1>

          <blockquote className="text-sm font-regular text-gray-500 mt-4">
            "Suman worked on our dream project as a UX/UI Design Lead. His gift
            to perfect the designs was seen since very beginning of the project
            in his every action. From understanding the product & brand to
            understanding founders vision to executing those minutest details.
            His sincerity and dedication to execute plans inspite of numerous
            huddles is what makes him true winner. I believe his this attitude
            and grit for his work will help him carve his mark in this
            Industry."
          </blockquote>

          <div className="mt-6">
            <p className="text-md font-semibold text-gray-800">Samira Pujari</p>
            <p className="text-sm font-regular text-gray-500 ">
              Founder & Owner, Art & Décor Brand "RaikarsGoodVibes"
            <div className="w-40 bg-[#dab853] px-3 py-1 mt-2 rounded-md overflow-hidden">
              <img
                src={rgv}
                alt="profile"
                className="w-90% h-90% object-cover"
              />
            </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
