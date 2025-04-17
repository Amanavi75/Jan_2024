import React from "react";
import PenIcon from "@atlaskit/icon/core/pen";
import OperationsIcon from "@atlaskit/icon/core/operations";
import AngleBracketsIcon from "@atlaskit/icon/core/angle-brackets";
import AutomationIcon from "@atlaskit/icon/core/automation";

const skills = [
  {
    icon: <PenIcon label="UI/UX" />,
    title: "UI/UX Designer",
    desc: "Designing intuitive and beautiful interfaces that balance aesthetics with functionality.",
  },
  {
    icon: <OperationsIcon label="Workshop" />,
    title: "Workshop & Planning",
    desc: "Leading design sprints and user-centric planning sessions for impactful outcomes.",
  },
  {
    icon: <AngleBracketsIcon label="Code" />,
    title: "Full Stack Development",
    desc: "From design to deployment — I build seamless user experiences end-to-end.",
  },
  {
    icon: <AutomationIcon label="Prototype" />,
    title: "Prototyping & Interaction Design",
    desc: "Creating interactive prototypes to test usability and motion design concepts.",
  },
];

const Skills = () => {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 text-white px-4 py-1 rounded-full border border-white/10 backdrop-blur-md mb-4">
            ⭘ Core Skills
          </div>
          <h1 className="text-5xl font-light text-white">
            What <span className="text-gray-400 font-medium">I Do</span>
          </h1>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            A blend of creativity and strategy fuels my approach to crafting seamless, high-impact digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-white/10 p-4 rounded-md w-fit text-white">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white pt-6">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
