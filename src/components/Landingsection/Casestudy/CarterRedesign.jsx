import React from "react";
import CarterImg from "../../../assets/CarterDSL/Carterdls.png";
import Navbar from "../../Navbar";

const CarterRedesign = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black text-white px-6 py-32">
        <div className="max-w-6xl mx-auto space-y-28">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full">
              ◎ Retail Media Network
            </div>
            <h1 className="text-5xl font-light">
              Carter 2.0 <span className="text-gray-400 font-medium">Redesign</span>
            </h1>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Carter is a retail media platform empowering retailers to monetize
              digital properties through targeted, data-driven ad placements
              using first-party data.
            </p>
          </div>

          {/* Project Overview */}
          <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10 space-y-10">
            <div className="flex flex-wrap gap-3">
              {["B2B", "SaaS", "Ad Tech", "Design System"].map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-white/5 border border-white/10 text-white px-4 py-1 rounded-full backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-4xl">
              Carter, a retail media platform is a digital advertising
              solution that enables retailers to monetise their online
              properties by allowing brands (publishers) and advertisers to
              place targeted ads within their ecosystems. These platforms
              leverage first-party data from retailer transactions, customer
              behaviours, and purchase history to deliver highly relevant ads
              to shoppers at key moments in their buying journey.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-400">
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-500 mb-1">Company</p>
                <p className="text-white font-medium">Shyftlabs</p>
              </div>
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-500 mb-1">Role</p>
                <p className="text-white font-medium">Lead Designer</p>
              </div>
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-500 mb-1">Platform</p>
                <p className="text-white font-medium">Desktop, Web (Responsive)</p>
              </div>
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-500 mb-1">Key Contributions</p>
                <p className="text-white font-medium">
                  Led the design from concept to launch, including UX strategy, UI design, and design system creation.
                </p>
              </div>
            </div>
          </section>

          {/* Problem Block Styled Like Screenshot */}
          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-6">
            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">Problem</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Usability & Design Gaps Impacting Client Conversions
            </h2>
            <p className="text-lg text-gray-400 max-w-4xl">
              Our platform's usability and design shortcomings have weakened client pitches,
              resulting in fewer contracts. Enhancing usability and aesthetics is critical to
              improving engagement and conversion rates.
            </p>
          </section>

          {/* Footer CTA */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Let’s Create Impact Together</h3>
            <p className="text-sm text-gray-400">
              Available for collaborations, projects, or conversations.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 text-sm font-medium text-black bg-white rounded-full hover:opacity-90 transition"
            >
              Get in Touch →
            </a>
          </div>

           {/* Solution Subsections */}
          <div className="space-y-16">
            {/* Section 01 */}
            <div className="space-y-6">
              <p className="text-sm text-gray-400 font-semibold">01.</p>
              <h3 className="text-2xl font-semibold text-white">
                Ensuring Consistency Across the Product
              </h3>
              <p className="text-lg text-gray-400 max-w-4xl">
                Established a unified style guide, maintaining consistency in colours, typography,
                buttons, and layouts.
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Accelerating Development & Design Process
              </h3>
              <p className="text-lg text-gray-400 max-w-4xl">
                The component library enables designers and developers to reuse pre-built
                elements, reducing redundant work and speeding up workflows.
              </p>
            </div>

            {/* Section 02 with image + text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl overflow-hidden">
                <img src="/path-to-your-accessibility-image.png" alt="Accessibility UI" className="w-full object-cover" />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-400 font-semibold">02.</p>
                <h3 className="text-2xl font-semibold text-white">
                  Improving Accessibility & Compliance
                </h3>
                <p className="text-lg text-gray-400 max-w-4xl">
                  After thorough analysis (Applying Jakob’s Law and Aesthetic-Usability Effect),
                  we determined that a <span className="font-semibold text-white">complete platform redesign</span> was necessary to address
                  usability and design challenges.
                </p>
              </div>
            </div>

            {/* Section 03 with image + text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl overflow-hidden">
                <img src="/path-to-your-scalability-image.png" alt="Scalability UI" className="w-full object-cover" />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-400 font-semibold">03.</p>
                <h3 className="text-2xl font-semibold text-white">
                  Enabling Scalability for Growth
                </h3>
                <p className="text-lg text-gray-400 max-w-4xl">
                  After thorough analysis (Applying Jakob’s Law and Aesthetic-Usability Effect),
                  we determined that a <span className="font-semibold text-white">complete platform redesign</span> was necessary to address
                  usability and design challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Summary */}
          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-8">
            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">Impact</p>
            <div className="space-y-6 text-gray-400 text-lg">
              <div>
                <p className="text-xl text-white font-semibold">300% Growth in Clients</p>
                <p>Expanded from 1 client to 4 clients within a year.</p>
              </div>
              <div>
                <p className="text-xl text-white font-semibold">50% Faster Deployment</p>
                <p>Reduced design and development time with reusable components.</p>
              </div>
              <div>
                <p className="text-xl text-white font-semibold">40% Increase in User Engagement</p>
                <p>Improved usability led to higher client satisfaction and retention.</p>
              </div>
              <div>
                <p className="text-xl text-white font-semibold">Consistent Brand Identity</p>
                <p>Strengthened market presence and trust.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CarterRedesign;