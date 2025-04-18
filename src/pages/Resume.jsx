import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Instagram, Dribbble, X } from "lucide-react";
import profilePic from "../assets/Img/suman.jpg";

const Resume = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-16">
        <section className="bg-black text-white min-h-screen  py-24">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm bg-white/10 border border-white/10 backdrop-blur-md mb-4">
              ◎ Product Designer
            </span>
            <h1 className="text-4xl font-light">
              Suman Sourabh,
              <span className="font-medium text-gray-400"> Your Designer</span>
            </h1>
            <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto">
              A brief personal overview and journey through my experiences as a
              designer, developer, and thinker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* LEFT - Profile Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg">
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-square">
                <img
                  src={profilePic} // replace with your image path
                  alt="Suman Sourabh"
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 text-xs text-white bg-black/50 backdrop-blur px-2 py-0.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Available for work
                </div>
              </div>
              <h2 className="text-lg font-semibold">
                Hello I am Suman Sourabh
              </h2>
              

              {/* Socials */}
              {/* <div className="flex items-center gap-4 mb-6">
        <X size={16} className="text-gray-400 hover:text-white cursor-pointer" />
        <Instagram size={16} className="text-gray-400 hover:text-white cursor-pointer" />
        <Dribbble size={16} className="text-gray-400 hover:text-white cursor-pointer" />
      </div> */}

              
            </div>

            {/* RIGHT - About Content */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg flex flex-col justify-between">
              <div>
                <p className="text-md font-semibold text-gray-300 mt-4">
                UI/UX & Product Designer based in India.
                </p>
                <p className="text-sm text-gray-500">
                  B.Tech in Computer Science & Engineering, Class of 2024
                </p>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                  I craft functional, scalable, and elegant user experiences
                  that drive business value. With strong foundations in UX, UI,
                  and strategy—I bridge gaps between product thinking and
                  execution. From atomic design systems to responsive
                  interfaces, I design with intent, usability, and impact in
                  mind.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "UX Research",
                    "UI Design",
                    "Prototyping",
                    "Design Systems",
                    "Webflow",
                    "Framer",
                    "Figma",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-black/40 border border-white/10 px-3 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button className="bg-white text-black w-full py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
                Connect with me
              </button>

              {/* Timeline */}
              {/* <div className="space-y-2 mt-8">
        {[
          { role: "UX Intern", company: "Pixel Studios", year: 2021 },
          { role: "UI Designer", company: "UrbanFit", year: 2022 },
          { role: "Product Designer", company: "Shyftlabs", year: 2023 },
          { role: "Freelancer", company: "Various Clients", year: "Ongoing" },
        ].map((job, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-black/40 border border-white/10 px-4 py-3 rounded-md text-sm"
          >
            <span>{job.role}</span>
            <span className="text-gray-400">{job.company}</span>
            <span className="text-gray-500">{job.year}</span>
          </div>
        ))}
      </div> */}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 shadow-md">
          <div className="inline-flex items-center gap-2 text-sm text-white mb-2">
            <span className="text-gray-400">◎</span> Work Experience
          </div>
          <h2 className="text-2xl font-light mb-6 text-white">
            Where I’ve Worked
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold">
                Shyftlabs – Product Designer
              </h3>
              <p className="text-sm text-gray-400">
                Jan 2024 – Present · Noida, India
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-400 space-y-1">
                <li>Currently leading the Product Carter (RMN)</li>
                <li>
                  Collaborated cross-functionally across lifecycle, aligning
                  design vision with performance goals
                </li>
                <li>
                  Maintained scalable design systems with reusable UI components
                </li>
                <li>
                  Conducted user research and developed accessible, intuitive
                  interfaces
                </li>
                <li>Mentored fellow designers and documented key processes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                KraftBase – Product Designer Intern
              </h3>
              <p className="text-sm text-gray-400">
                June 2023 – Aug 2023 · Punjab, India
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-400 space-y-1">
                <li>Created mobile app wireframes with platform consistency</li>
                <li>Improved client websites resulting in higher engagement</li>
                <li>Ensured smooth design-to-dev transitions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                RaikarsGoodVibes – UI Consultant
              </h3>
              <p className="text-sm text-gray-400">
                Nov 2022 – Feb 2023 · Punjab, India
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-400 space-y-1">
                <li>Redesigned app flows to enhance usability</li>
                <li>Analyzed feedback to drive continuous UI improvements</li>
                <li>Led client workshops and implemented direct feedback</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 shadow-md">
          <div className="inline-flex items-center gap-2 text-sm text-white mb-2">
            <span className="text-gray-400">◎</span> Public Speaking
          </div>
          <h2 className="text-2xl font-light mb-6 text-white">
            Talks & Workshops
          </h2>

          <div className="space-y-6 text-sm text-gray-400">
            <div>
              <h3 className="font-semibold text-white">
                Psychology of Colors in Graphic Design (Sep 2023)
              </h3>
              <p>Lovely Professional University</p>
              <ul className="list-disc list-inside mt-1">
                <li>Led a hands-on Figma workshop for 150+ attendees</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Intro to UI/UX (Dec 2022)
              </h3>
              <p>Lovely Professional University</p>
              <ul className="list-disc list-inside mt-1">
                <li>Designed a shoe brand landing page, 500+ Figma copies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                UI/UX Design with Figma (Nov 2022)
              </h3>
              <p>Lovely Professional University</p>
              <ul className="list-disc list-inside mt-1">
                <li>
                  Conducted seminar, design gained 850+ Figma Community copies
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
