import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Resume = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-40">
        {/* Hero / Profile Section */}
        <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 shadow-md">
          <div className="inline-flex items-center gap-2 text-sm text-white mb-2">
            <span className="text-gray-400">◎</span> Resume Overview
          </div>
          <h1 className="text-4xl font-light text-white">
            Suman <span className="font-medium text-gray-400">Sourabh</span>
          </h1>
          <p className="text-md font-semibold text-gray-300 mt-4">
            Product Designer at Shyftlabs
          </p>
          <p className="text-sm text-gray-500">
            B.Tech in Computer Science & Engineering, 2024
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Product Designer with expertise in user-centered design, intuitive interfaces, and design systems. Proven ability to enhance customer satisfaction, streamline workflows, and deliver engaging features.
          </p>
        </section>

        {/* Experience Section */}
        <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 shadow-md">
          <div className="inline-flex items-center gap-2 text-sm text-white mb-2">
            <span className="text-gray-400">◎</span> Work Experience
          </div>
          <h2 className="text-2xl font-light mb-6 text-white">Where I’ve Worked</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold">Shyftlabs – Product Designer</h3>
              <p className="text-sm text-gray-400">Jan 2024 – Present · Noida, India</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-400 space-y-1">
                <li>Currently leading the Product Carter (RMN)</li>
                <li>Collaborated cross-functionally across lifecycle, aligning design vision with performance goals</li>
                <li>Maintained scalable design systems with reusable UI components</li>
                <li>Conducted user research and developed accessible, intuitive interfaces</li>
                <li>Mentored fellow designers and documented key processes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">KraftBase – Product Designer Intern</h3>
              <p className="text-sm text-gray-400">June 2023 – Aug 2023 · Punjab, India</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-400 space-y-1">
                <li>Created mobile app wireframes with platform consistency</li>
                <li>Improved client websites resulting in higher engagement</li>
                <li>Ensured smooth design-to-dev transitions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">RaikarsGoodVibes – UI Consultant</h3>
              <p className="text-sm text-gray-400">Nov 2022 – Feb 2023 · Punjab, India</p>
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
          <h2 className="text-2xl font-light mb-6 text-white">Talks & Workshops</h2>

          <div className="space-y-6 text-sm text-gray-400">
            <div>
              <h3 className="font-semibold text-white">Psychology of Colors in Graphic Design (Sep 2023)</h3>
              <p>Lovely Professional University</p>
              <ul className="list-disc list-inside mt-1">
                <li>Led a hands-on Figma workshop for 150+ attendees</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white">Intro to UI/UX (Dec 2022)</h3>
              <p>Lovely Professional University</p>
              <ul className="list-disc list-inside mt-1">
                <li>Designed a shoe brand landing page, 500+ Figma copies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white">UI/UX Design with Figma (Nov 2022)</h3>
              <p>Lovely Professional University</p>
              <ul className="list-disc list-inside mt-1">
                <li>Conducted seminar, design gained 850+ Figma Community copies</li>
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