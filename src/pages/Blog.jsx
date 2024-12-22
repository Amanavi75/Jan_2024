import React from "react";
import Navbar from "../components/Navbar";

const Blog = () => {
  const sections = [
    {
      title: "What Is UX?",
      content: `
        UX stands for User Experience, which refers to the feelings and
        perceptions a person has when using a product, service, or system.
        The goal of UX design is to create a positive and efficient
        experience for the user by designing products that meet their needs
        in the most intuitive way.
      `,
      image: {
        src: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "UX Design Concept",
      },
    },
    {
      title: "UX: The Perfect Fit for You?",
      content: `
        Think of UX design like being a party planner. Instead of planning
        a party, you're designing a user’s experience with a website or
        app. You ensure everything runs smoothly, avoids technical
        glitches, and makes users happy. If you enjoy solving problems and
        making people’s lives better, UX could be your calling!
      `,
    },
    {
      title: "Key Facts about UX Design:",
      content: `
        Here are some key aspects of UX design:
      `,
      list: [
        "Focuses on the overall user experience with a product/service",
        "Requires understanding user needs and goals",
        "Involves multidisciplinary collaboration",
        "Demands constant iteration and testing",
        "Improves customer satisfaction and business success",
        "Goes beyond aesthetics to include functionality",
        "Applies to both digital and physical products",
      ],
    },
    {
      title: "Common Myths about UX Design:",
      content: `
        There are several misconceptions about UX design:
      `,
      list: [
        "UX is only about appearance",
        "UX applies only to digital products",
        "UX is a one-time process",
        "UX is only for big companies",
        "UX is solely about making things easier",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-4 flex flex-col items-center text-center">
        <h1 className="title-font tracking-wide text-xl md:text-2xl xl:text-2xl font-regular">
          Difference Between UI/UX
        </h1>
        <p className="text-sm md:text-md ">Best of</p>
      </div>

      <div className="px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          {sections.map((section, index) => (
            <section key={index} className="pt-6">
              <h2 className="suman text-xl">{section.title}</h2>
              <p>{section.content}</p>
              {section.image && (
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className="mt-4"
                />
              )}
              {section.list && (
                <ul className="list-disc list-inside">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
};

export default Blog;
