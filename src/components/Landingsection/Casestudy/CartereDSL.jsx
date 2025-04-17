import React from "react";
import CarterImg from "../../../assets/CarterDSL/Carterdls.png";


const CartereDSL = () => {
  return (
    <div className="bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto space-y-28">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full">
            ◎ Carter 2.0
          </div>
          <h1 className="text-5xl font-light">
            Platform <span className="text-gray-400 font-medium">Redesign</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Carter is a retail media platform empowering retailers to monetize digital properties through targeted, data-driven ad placements using first-party data.
          </p>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400">
          <div>
            <p className="text-white font-semibold">Company</p>
            <p>Shyftlabs</p>
          </div>
          <div>
            <p className="text-white font-semibold">Role</p>
            <p>Lead Product Designer</p>
          </div>
          <div>
            <p className="text-white font-semibold">Platform</p>
            <p>Web (Responsive)</p>
          </div>
          <div>
            <p className="text-white font-semibold">Contributions</p>
            <p>UX Strategy, UI Design, Design System</p>
          </div>
        </div>

        {/* Problem */}
        <div className="space-y-4 border border-white/10 bg-white/5 backdrop-blur-md p-10 rounded-2xl">
          <h2 className="text-3xl font-semibold">Problem</h2>
          <p className="text-sm text-gray-400">
            Usability gaps and visual inconsistencies hindered Carter’s ability to secure clients, with outdated UI making demos underwhelming and impacting conversion rates.
          </p>
        </div>

        {/* Solution */}
        <div className="space-y-6 border border-white/10 bg-white/5 backdrop-blur-md p-10 rounded-2xl">
          <h2 className="text-3xl font-semibold">Solution</h2>
          <p className="text-sm text-gray-400">
            Applying Jakob’s Law and the Aesthetic-Usability Effect, we rebuilt the platform with a component-based design system prioritizing usability, scalability, and accessibility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="text-xl font-semibold text-white">1. Unified Visual Language</h3>
              <p className="text-sm text-gray-400">
                Created cohesive design rules including colors, typography, spacing, and UI patterns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">2. Modular Components</h3>
              <p className="text-sm text-gray-400">
                Introduced reusable, responsive components reducing rework and boosting dev speed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">3. Accessibility Compliance</h3>
              <p className="text-sm text-gray-400">
                Built WCAG 2.1 compliant interfaces with accessible colors, focus states, and labels.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">4. Scalable Architecture</h3>
              <p className="text-sm text-gray-400">
                Designed to accommodate growth, permissions, multi-user roles, and future features.
              </p>
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="space-y-6 border border-white/10 bg-white/5 backdrop-blur-md p-10 rounded-2xl">
          <h2 className="text-3xl font-semibold">Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4 text-sm text-gray-400">
            <div>
              <p className="text-3xl font-bold text-white">300%</p>
              <p>Increase in clients onboarded (1 to 4 in one year)</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">50%</p>
              <p>Faster design + development with design system</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">40%</p>
              <p>Improved retention and product usage</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">∞</p>
              <p>Infrastructure built for future growth</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Let’s Create Impact Together</h3>
          <p className="text-sm text-gray-400">Available for collaborations, projects, or conversations.</p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 text-sm font-medium text-black bg-white rounded-full hover:opacity-90 transition"
          >
            Get in Touch →
          </a>
        </div>

      </div>
    </div>
  );
};

export default CartereDSL;
