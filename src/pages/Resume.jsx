import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import suman from "../assets/Img/suman.jpg";

const Resume = () => {
  return (
    <div className="container__wrapper">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-40">
        <section className="my-16">
          <h1 className="text-3xl font-semibold">Suman Sourabh</h1>
          <div className="mt-6">
            <p className="text-md font-semibold text-gray-800">
              Product Designer at Shyftlabs
            </p>
            <p className="text-sm font-regular text-gray-500 ">
              B.Tech in Computer Science & Engineering, 2024
            </p>
          </div>

          <p className="text-sm font-regula mt-2">
            Product Designer with expertise in user-centered design, intuitive
            interfaces, and design systems. Proven ability to enhance customer
            satisfaction, streamline workflows, and deliver engaging features.
          </p>
        </section>

        {/* Experience Section */}
        <section className="my-16">
          <h2 className="text-sm font-bold text-green-500 tracking-widest">
            EXPERIENCE
          </h2>

          <div className="mt-6">
            <h3 className="font-semibold text-lg">
              Shyftlabs. Product Designer
            </h3>
            <p className="text-gray-600">January 2024—Present. Noida, India</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                Currently Leading the Product{" "}
                <span className="font-semibold">Carter (RMN)</span>
              </li>
              <li>
                Managed multiple projects effectively in demanding environment
                with tight deadlines.
              </li>
              <li>
                Collaborated cross-functionally with developers, engineers, and
                stakeholders throughout the product lifecycle, aligning design
                vision with technical specifications, optimizing performance,
                and facilitating workshops for input and buy-in.
              </li>
              <li>
                Designed and maintained comprehensive design systems, reusable
                style guides, and UI components, enabling efficient scaling of
                product features while ensuring consistency and streamlined
                workflows.
              </li>
              <li>
                Spearheaded user-centered design processes by conducting
                in-depth user research, implementing feedback loops, and
                developing accessible, intuitive interfaces for mobile and web
                applications, resulting in improved customer satisfaction and
                engagement.
              </li>
              <li>
                Mentored designers, fostered a culture of continuous learning,
                and documented design processes.
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h3 className="font-semibold text-lg">
              KraftBase. Product Designer Intern
            </h3>
            <p className="text-gray-600">
              June 2023—August 2023. Punjab, India
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                Stayed up-to-date with industry trends by regularly attending
                workshops, conferences, and webinars related to UI/UX design
                principles.
              </li>
              <li>
                Created wireframes and mockups for mobile applications, ensuring
                consistency across multiple platforms and devices.
              </li>
              <li>
                Designed visually appealing and engaging websites for clients,
                resulting in increased web traffic and conversions.
              </li>
              <li>
                Collaborated with developers to create seamless transitions
                between design and development phases, improving overall project
                efficiency.
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h3 className="font-semibold text-lg">
              RaikarsGoodVibes. UI Consultant
            </h3>
            <p className="text-gray-600">Nov 2022—Feb 2023. Punjab, India</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                Streamlined navigation in existing applications through
                redesigns that prioritized usability and user satisfaction.{" "}
              </li>
              <li>
                Analyzed user feedback and data to inform ongoing design
                iterations, leading to continuous improvement in UI
                solutions.Created wireframes and mockups for mobile
                applications, ensuring consistency across multiple platforms and
                devices.
              </li>
              <li>
                Adapted quickly to changing priorities or new information during
                the course of a project without sacrificing quality or
                efficiency in deliverables.
              </li>
              <li>
                Led design workshops with clients to gather feedback and refine
                interface concepts based on their input.
              </li>
            </ul>
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-sm font-bold text-green-500 tracking-widest">
            EVENTS
          </h2>

          <div className="mt-6">
            <h3 className="font-semibold text-lg">
            Psychology of Colors in Graphic Design (Sep 23)
            </h3>
            <p className="text-gray-600">Lovely Professional University</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
              Led a seminar for 150+ attendees at Lovely Professional University, featuring hands-on Figma poster design practice.
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-lg">
            Intro to UI/UX (Dec 22)
            </h3>
            <p className="text-gray-600">Lovely Professional University</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
              Designed a landing page for a shoe brand, replicated 500+ times in Figma Communities.
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-lg">
            UI/UX Design with Figma (Nov 22) 
            </h3>
            <p className="text-gray-600">Lovely Professional University</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
              Conducted a seminar for 150+ attendees at Lovely Professional University; design gained 850+ copies on Figma Community.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
