import React from 'react'
const Experience = () => {
  const experiences = [
    {
      icon: "UbShyftlabser",
      title: "Product designr",
      date: "January 2024 - Present",
    },
    {
      icon: "Kraftbase",
      title: "UI/UX Intern",
      date: "June 2020 - August 2023",
    },
    {
      icon: "Raikars Good Vibes",
      title: "UI/UX Consultant",
      date: "October 2022 - Febuary 2023",
    },
  ];

  const awards = [
    {
      icon: "Event 1",
      title: "Website of the Day at ",
      date: "November 2023",
    },
    {
      icon: "Event 1",
      title: "Website of the Day at ",
      date: "November 2023",
    },
    {
      icon: "Event 1",
      title: "Website of the Day at ",
      date: "November 2023",
    },
  ];

  return (
    <div className="bg-[#f9f9f9] py-32 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:gap-40 gap-12">
        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-medium text-black mb-16">
            Working experience
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border-b border-gray-200 pb-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-xl font-Medium text-black">
                    {experience.icon[0]}
                  </span>
                </div>
                {/* Details */}
                <div>
                  <p className="text-black font-medium">{experience.title}</p>
                  <p className="text-gray-600 text-sm">{experience.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div>
          <h2 className="text-2xl font-medium text-black mb-16">
            Public Events
          </h2>
          <div className="space-y-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border-b border-gray-200 pb-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-xl font-medium text-black">
                    {award.icon[0]}
                  </span>
                </div>
                {/* Details */}
                <div>
                  <p className="text-black font-medium">{award.title}</p>
                  <p className="text-gray-600 text-sm">{award.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Experience