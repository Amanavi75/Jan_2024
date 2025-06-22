import React from "react";

import Navbar from "../../Navbar";
import Carter from "../../../assets/CarterRedesign/carter.png";
import Oldcarter from "../../../assets/CarterRedesign/oldcarter.png";
import Beforeafter from "../../../assets/CarterRedesign/Beforeafter.png";
import DSL from "../../../assets/CarterRedesign/dsl.png";
import Footer from "../../Footer";
const CarterDsp = () => {
  return (
    <div className="font-sans text-white bg-black">
      <Navbar />
      <div className="px-6 pt-32">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-sm bg-white/10 border border-white/20 backdrop-blur px-4 py-1 rounded-full">
              ◎ Retail Media Network
            </div>
            <h1 className="text-5xl font-semibold text-white">
              Carter DSP{" "}
            </h1>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">
              Carter is a Retail Media Network (RMN) platform that enables
              brands to run targeted advertising campaigns across retail
              websites. The platform supports campaign management, reporting,
              and analytics.
            </p>
          </div>

          <img src={Carter} alt="" />

          <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10 space-y-10 text-white">
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {["B2B", "SaaS", "Ad Tech", "Design System"].map((tag, index) => (
                <span
                  key={index}
                  className="text-sm font-medium bg-white/10 border border-white/20 text-white px-4 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-5xl">
              Carter, a retail media platform, is a digital advertising solution
              that enables retailers to monetise their online properties by
              allowing brands (publishers) and advertisers to place targeted ads
              within their ecosystems. These platforms leverage first-party data
              from retailer transactions, customer behaviours, and purchase
              history to deliver highly relevant ads to shoppers at key moments
              in their buying journey.
            </p>

            {/* Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-300 text-base">
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-400 font-semibold mb-1">
                  Company:
                </p>
                <p className="text-white font-medium">Shyftlabs</p>
              </div>
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-400 font-semibold mb-1">
                  Role:
                </p>
                <p className="text-white font-medium">Product Designer</p>
              </div>
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-400 font-semibold mb-1">
                  Platform:
                </p>
                <p className="text-white font-medium">
                  Desktop, Web (Responsive)
                </p>
              </div>
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-400 font-semibold mb-1">
                  Key Contributions:
                </p>
                <p className="text-white font-medium">
                  Designed from concept to launch, including UX strategy, UI
                  design, and design system creation.
                </p>
              </div>
            </div>
          </section>
          <img src={Oldcarter} alt="" />
          {/* Problem */}
          <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
              Problem
            </p>
            <h2 className="text-xl font-semibold text-white">
              Managing Campaigns Across Fragmented Retail Media Networks
            </h2>
            <p className="text-base text-gray-400 leading-relaxed">
              Marketers face redundant efforts and high cognitive load due to
              multiple logins, fragmented workflows, repetitive asset uploads,
              and platform-specific setups across RMNs. Disparate performance
              metrics and siloed reports lead to inconsistent brand messaging
              and inefficient optimizations. The ecosystem lacks a unified
              solution to seamlessly integrate RMNs into one centralized
              platform for efficient campaign management.
            </p>
          </section>

          {/* Objectives */}
          <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
              Business Goal
            </p>
            <ul className="list-disc text-gray-300 pl-6 space-y-3 text-base">
              <li>Streamlines campaign creation across multiple networks.</li>
              <li>Unifies budget and targeting workflows.</li>
              <li>Enables cross-platform performance analysis.</li>
              <li>
                Reduces time-to-launch, cost overhead, and execution errors.
              </li>
            </ul>

            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
              Key Performance Indicators (KPIs):
            </p>
            <ul className="list-disc text-gray-300 pl-6 space-y-3 text-base">
              <li>Reduce setup time per campaign by 60–70%.</li>
              <li>Improve asset compliance rate to 95%.</li>
              <li>Decrease cross-platform deployment errors by 50%.</li>
              <li>
                Increase marketing velocity (number of campaigns launched
                monthly).
              </li>
            </ul>
          </section>

          {/* Research & Analysis */}
          <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
              Vision Statement
            </p>
            <p className="text-gray-300 text-base max-w-4xl">
              To become the industry's most reliable multi-RMN orchestration
              platform, equipping advertisers with:
            </p>
            <ul className="list-disc text-gray-300 pl-6 space-y-3 text-base">
              <li>
                <strong className="text-white">Unified Creation Tools:</strong>{" "}
                Streamlined asset management and creative development across
                platforms.
              </li>
              <li>
                <strong className="text-white">
                  Intelligent Targeting Frameworks:
                </strong>{" "}
                Centralized audience segmentation and optimized reach.
              </li>
              <li>
                <strong className="text-white">
                  Modular Campaign Deployment Pipelines:
                </strong>{" "}
                Flexible, scalable rollout processes for faster execution.
              </li>
              <li>
                <strong className="text-white">
                  Real-time Analytics and Insight Generation:
                </strong>{" "}
                Unified performance tracking and actionable insights.
              </li>
            </ul>
            <p className="text-gray-300 text-base max-w-4xl">
              Ultimately, empowering marketers to focus on strategy and
              storytelling, not logistics.
            </p>
          </section>
          <img src={Beforeafter} alt="" />

          {/* Solution */}
          <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
              Target Audience & Personas
            </p>

            {/* Section 01 */}
            <div className="space-y-6">
              <ul className="list-disc text-gray-300 pl-6 space-y-3 text-base">
                <li>
                  <strong className="text-white">Digital Agencies:</strong>{" "}
                  Manage multi-brand campaigns and require scalable, efficient
                  tools.
                </li>
                <li>
                  <strong className="text-white">
                    Retail & eCommerce Giants:
                  </strong>{" "}
                  Strive for omnichannel consistency across platforms.
                </li>
                <li>
                  <strong className="text-white">D2C Brands:</strong> Need
                  simplified workflows to scale with lean ad ops teams.
                </li>
                <li>
                  <strong className="text-white">
                    Enterprise Marketing Teams:
                  </strong>{" "}
                  Demand granular reporting, governance, and collaboration
                  control.
                </li>
              </ul>

              <h3 className="text-white font-semibold mt-4">User Personas:</h3>
              <ul>
                <li>
                  <strong className="text-white">
                    Aarav, 32 – Performance Marketing Manager:
                  </strong>
                  <p>
                    Seeks unified control over assets and budgets, with a focus
                    on efficiency and in-depth reporting.
                  </p>
                </li>
                <li>
                  <strong className="text-white">
                    Riya, 28 – Brand Marketer:
                  </strong>
                  <p>
                    Prioritizes message consistency and relies on intuitive
                    creative previews.
                  </p>
                </li>
                <li>
                  <strong className="text-white">
                    Dev, 40 – Agency Director:
                  </strong>
                  <p>
                    Manages performance for 20+ clients and needs scalable
                    reporting with rapid campaign duplication tools.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <img src={DSL} alt="" />
          {/* Design System Section */}
          <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-12">
            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
              Research & Insights
            </p>
            <h2 className="text-xl font-semibold text-white">
              Foundations for Consistency and Scale
            </h2>
            <p className="text-base text-gray-400 leading-relaxed max-w-5xl">
              To design for real-world campaign complexity, we grounded our
              product development in rigorous research and validation. From user
              interviews to market analysis, each input revealed key friction
              points and opportunities for simplification, scalability, and
              intelligence across the platform.
            </p>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                a. User Interviews
              </h3>
              <p className="text-base text-gray-400 max-w-5xl">
                Conducted 10 in-depth interviews with marketers across retail,
                tech, and media industries. We uncovered major bottlenecks in
                asset duplication, reporting inefficiencies, and inconsistent
                onboarding across channels.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                b. Usability Testing
              </h3>
              <p className="text-base text-gray-400 max-w-5xl">
                Ran 3 iterative rounds of prototype testing. Key needs that
                emerged included real-time creative previews, channel-specific
                compliance flags, and reusable asset workflows to reduce
                repetitive tasks.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                c. Competitive Benchmarking
              </h3>
              <p className="text-base text-gray-400 max-w-5xl">
                Analyzed platforms like Smartly.io, Skai, AdEspresso, and Marin
                Software. We found that 80% of users manually duplicated
                campaigns across RMNs, 60% spent over 4 hours/week compiling
                performance reports, and most tools favored social platforms—
                neglecting DV360 and Yahoo.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                d. Market Trends
              </h3>
              <p className="text-base text-gray-400 max-w-5xl">
                The Retail Media Market is projected to reach $110B globally by
                2027. With growing reliance on first-party data in a post-cookie
                landscape, there's an urgent need for automation and AI-driven
                media operations to improve speed, precision, and scalability.
              </p>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
              Solution
            </p>

            {/* Section 01 */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">
                A Unified Platform for RMN Campaign Management
              </h3>
              <p className="text-base text-gray-400 max-w-4xl">
                Built a scalable, modular platform that simplifies campaign
                execution across Retail Media Networks. Features include
                one-click multi-channel sync, shared and channel-specific
                targeting layers, and a dynamic creative engine that adapts
                assets automatically.
              </p>

              <h3 className="text-xl font-semibold text-white">
                Smart Budgeting and Real-Time Insights
              </h3>
              <p className="text-base text-gray-400 max-w-4xl">
                Integrated a rule-based budget allocator that optimizes spend
                based on ROAS and CPA goals, paired with a real-time analytics
                dashboard offering standardized KPIs across all connected RMNs.
              </p>
            </div>

            {/* Section 02 */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">
                Streamlined Workflow & Integrations
              </h3>
              <p className="text-base text-gray-400 max-w-4xl">
                Enhanced operational efficiency through native support for
                Digital Asset Management (DAM), automated campaign triggers via
                webhooks, and seamless exports to Slack, Email, and Google
                Sheets.
              </p>
            </div>

            {/* Section 03 */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">
                Designed for Scale and Automation
              </h3>
              <p className="text-base text-gray-400 max-w-4xl">
                The platform’s modular architecture and automation-first
                approach empower teams to reduce time-to-launch, lower execution
                errors, and manage complex, multi-channel campaigns with ease.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
              Solution Architecture & Design Process
            </p>

            {/* Information Architecture */}
            <div className="space-y-3 text-base text-gray-300 pl-6">
              <h3 className="text-xl font-semibold text-white">
                Information Architecture
              </h3>
              <p>
                <strong className="text-white">Primary Navigation:</strong>
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Dashboard</li>
                <li>Campaigns (Create, View All)</li>
                <li>Creative Library</li>
                <li>Targeting (Audiences, Geo/Demo/Behavior)</li>
                <li>Channels & Integrations</li>
                <li>Reports & Analytics</li>
                <li>Settings</li>
              </ul>
              <p>
                <strong className="text-white">Core User Flows:</strong>
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>
                  Create Campaign → Select Channels → Upload Creatives → Set
                  Targeting → Launch → Track
                </li>
                <li>Duplicate Campaign by geography/time range</li>
              </ul>
            </div>

            {/* Design Process */}
            <div className="space-y-3 text-base text-gray-300 pl-6">
              <h3 className="text-xl font-semibold text-white">
                Design Process
              </h3>
              <p>
                <strong className="text-white">a. Discovery & Ideation:</strong>{" "}
                Affinity mapping from interview pain points and low-fidelity
                wireframes for validating information architecture.
              </p>
              <p>
                <strong className="text-white">
                  b. Iterative Prototyping:
                </strong>{" "}
                Mid- and high-fidelity flows designed in Figma, with feedback
                from 12 stakeholders across 2 rounds.
              </p>
              <p>
                <strong className="text-white">
                  c. Scalable Design System:
                </strong>{" "}
                Built using atomic components (buttons, inputs, modals) and
                reusable templates for campaign creation, targeting, and
                analytics views.
              </p>
              <p>
                <strong className="text-white">d. Accessibility:</strong>{" "}
                Achieved WCAG 2.1 compliance through proper contrast ratios,
                keyboard navigation, and support for alt text.
              </p>
              <p>
                <strong className="text-white">e. UX Highlights:</strong>{" "}
                Integrated inline error handling, asset spec hints, preview
                toggles per channel, and a smart calendar to visualize campaign
                phases.
              </p>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-12 rounded-3xl space-y-10">
            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
              Impact
            </p>

            <div className="space-y-8 text-gray-300 text-base">
              <div>
                <p className="text-xl text-white font-semibold">
                  60–70% Faster Campaign Setup
                </p>
                <p className="text-gray-400">
                  Measured during internal testing across multiple RMN
                  workflows.
                </p>
              </div>
              <div>
                <p className="text-xl text-white font-semibold">
                  50% Fewer Asset Deployment Issues
                </p>
                <p className="text-gray-400">
                  Reduced creative errors via reusable components and real-time
                  previews.
                </p>
              </div>
              <div>
                <p className="text-xl text-white font-semibold">
                  90%+ Satisfaction from Alpha Testers
                </p>
                <p className="text-gray-400">
                  Early adopters rated the platform highly on usability and
                  performance.
                </p>
              </div>
              <div>
                <p className="text-xl text-white font-semibold">
                  40% Reduction in Go-Live Cycle
                </p>
                <p className="text-gray-400">
                  Faster execution and time-to-market through automation and
                  standardization.
                </p>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <div className="text-center space-y-4 py-16">
            <h3 className="text-2xl font-semibold">
              Let’s Create Impact Together
            </h3>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarterDsp;
