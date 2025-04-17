import React from "react";
import CareerDSL from "../../../assets/CarterDSL/Carterdls.png";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
export default function CampaignCreation() {
  return (
    <div>
      <Navbar />
    <img src={CareerDSL} alt="mockup"></img>
    <div className="bg-white text-black min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-2">Campaign Creation</h1>
        <p className="text-md mb-4">
          Enabling brands (publishers) and advertisers to design, launch, and
          manage targeted ad campaigns within the Carter platform.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["B2B", "SaaS", "Ad Tech", "Design System"].map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-black py-1 px-4 rounded-md text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-md mb-8">
          The Campaign Creation Flow was designed to provide advertisers with an
          intuitive and efficient way to set up, manage, and optimise their ad
          campaigns.
        </p>
        <p className="text-xl font-semibold">Users goal:</p>
        <p className="text-md mb-8">
           Enhance targeting, and improve campaign
          performance
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm mb-12">
          <div>
            <h2 className="uppercase font-bold text-gray-600 mb-1">Company:</h2>
            <p>Shyftlabs</p>
          </div>
          <div>
            <h2 className="uppercase font-bold text-gray-600 mb-1">Role:</h2>
            <p>Lead Designer</p>
          </div>
          <div>
            <h2 className="uppercase font-bold text-gray-600 mb-1">Platform:</h2>
            <p>Desktop, Web (Responsive)</p>
          </div>
          <div>
            <h2 className="uppercase font-bold text-gray-600 mb-1">Key Contributions:</h2>
            <p>
              Led the design from concept to launch, including UX strategy, UI
              design, and design system creation.
            </p>
          </div>
        </div>

        <div className="mb-2">
          <h2 className="uppercase font-semibold text-gray-600 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Campaign Configurations</h3>
              <p className="mb-2">Define objectives, budgets, and timelines.</p>

              <h3 className="text-lg font-bosemiboldld mb-1">Audience Targeting</h3>
              <p className="mb-2">
                Select audience segments based on demographics, behaviour, and
                intent.
              </p>

              <h3 className="text-lg font-semibold mb-1">Review & Launch</h3>
              <p className="mb-2">Define objectives, budgets, and timelines.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Creative Management</h3>
              <p className="mb-2">
                Upload ad assets, write copy, and preview placements.
              </p>

              <h3 className="text-lg font-semibold mb-1">Budget & Bidding</h3>
              <p className="mb-2">Define objectives, budgets, and timelines.</p>

              <h3 className="text-lg font-semibold mb-1">Performance Tracking</h3>
              <p className="mb-1 italic">
                Propose real-time insights with AI,
              </p>
              <p className="mb-2">optimise ads, and generate reports.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}