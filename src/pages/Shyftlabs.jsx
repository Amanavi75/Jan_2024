// App.jsx
import React from "react";
import Navbar from "../components/Navbar";

const Shyftlabs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-8 md:p-16 gap-8">
        <div className="flex flex-col space-y-6 w-full md:w-1/3">
          
          <div>
            <h2 className="text-sm text-gray-500 font-medium">Company</h2>
            <p className="text-lg">Apple</p>
          </div>
          <div>
            <h2 className="text-sm text-gray-500 font-medium">Tools</h2>
            <p className="text-lg">Sketch, Keynote, After Effects, Photoshop</p>
          </div>
          <div>
            <h2 className="text-sm text-gray-500 font-medium">Year</h2>
            <p className="text-lg">2019—Present</p>
          </div>
          <div>
            <h2 className="text-sm text-gray-500 font-medium">Team</h2>
            <p className="text-lg">
              Hanna: Senior Product Designer & the wonderful design, product,
              and engineering teams in Services
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-2/3">
          <main className="max-w-4xl mx-auto px-6">
            <section className="">
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


            <section className="my-16">
              <h2 className="text-sm font-bold text-green-500 tracking-widest">
                EXPERIENCE
              </h2>

              <div className="mt-6">
                <h3 className="font-semibold text-lg">
                  Shyftlabs. Product Designer
                </h3>
                <p className="text-gray-600">
                  January 2024—Present. Noida, India
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
                <p className="text-gray-600">
                  January 2024—Present. Noida, India
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shyftlabs;
