import React from "react";

export const DesignProcess = () => {
  const timelineData = [
    {
      title: "Discovery Problem Statement",
      date: "Step 1",
      description: "What is the core requirement of the product? What is the core requirement of the product?",
    },
    {
      title: "Discovery Problem Statement",
      date: "Step 2",
      description: "What is the core requirement of the product?",
    },
    {
      title: "Discovery Problem Statement",
      date: "Step 3",
      description: "What is the core requirement of the product?",
    },
    {
      title: "Discovery Problem Statement",
      date: "Step 4",
      description: "What is the core requirement of the product?",
    },
    {
      title: "Discovery Problem Statement",
      date: "Step 5",
      description: "What is the core requirement of the product?",
    },
    {
      title: "Discovery Problem Statement",
      date: "Step 6",
      description: "What is the core requirement of the product?",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 dark:text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-40 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <h1 className="text-2xl font-medium text-gray-800">
              He was definitely the person who
            </h1>
            <p className="text-sm text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum.
            </p>
          </div>

          <div className="col-span-12 sm:col-span-6 space-y-10 relative">
            <div className="before:absolute before:top-0 before:bottom-0 before:left-4 before:w-0.5 before:bg-gray-300 sm:before:left-[21px]">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col pl-10 sm:pl-12"
                >
                  <div className="absolute top-0 left-4 w-3 h-3 rounded-full bg-black sm:left-4"></div>
                  <time className="text-xs tracking-wide uppercase text-gray-500">
                    {item.date}
                  </time>
                  <h3 className="text-md font-medium tracking-wide text-gray-800">
                    {item.title}
                  </h3>

                  <p className="mb-8 text-sm font-regular text-gray-500 ">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DesignProcess;
