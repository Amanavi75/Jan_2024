import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import suman from "../assets/Img/suman.jpg";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-40">
        <section className="my-16">
          <h1 className="text-3xl font-semibold">Suman Sourabh</h1>
          <div className="mt-6">
            <p className="text-md font-semibold text-gray-800">
              Product Designer | UX/UI Designer | Frontend Developer
            </p>
            <p className="text-sm font-regular text-gray-500 ">
              B.Tech in Computer Science & Engineering, 2024
            </p>
          </div>

          <p className="text-sm font-regula mt-2">
            Product Designer with 1 years of experience. Specializing in
            Dashboard, Web Design, UX Research.
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
                Working on leading Product{" "}
                <span className="font-semibold">Carter (RMN)</span>
              </li>
              <li>
                Design DRI (Directly Responsible Individual) for multiple
                tentpole projects within two major products
              </li>
              <li>
                Successful timely delivery of compelling experiences that
                launched to millions of users
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
                Working on leading Product{" "}
                <span className="font-semibold">Carter (RMN)</span>
              </li>
              <li>
                Design DRI (Directly Responsible Individual) for multiple
                tentpole projects within two major products
              </li>
              <li>
                Successful timely delivery of compelling experiences that
                launched to millions of users
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
              Shyftlabs. Product Designer
            </h3>
            <p className="text-gray-600">January 2024—Present. Noida, India</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                Working on leading Product{" "}
                <span className="font-semibold">Carter (RMN)</span>
              </li>
              <li>
                Design DRI (Directly Responsible Individual) for multiple
                tentpole projects within two major products
              </li>
              <li>
                Successful timely delivery of compelling experiences that
                launched to millions of users
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
