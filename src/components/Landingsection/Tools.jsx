import React from "react";
import PenIcon from "@atlaskit/icon/core/pen";
import OperationsIcon from "@atlaskit/icon/core/operations";
import SmartLinkListIcon from "@atlaskit/icon/core/smart-link-list";
import AngleBracketsIcon from "@atlaskit/icon/core/angle-brackets";
import DashboardIcon from "@atlaskit/icon/core/dashboard";
import AutomationIcon from "@atlaskit/icon/core/automation";

const Tools = () => {
  return (
    <div className="bg-white py-40 ">
      <div className="max-w-6xl mx-auto flex gap-16 justify-between">
        <div className="mt-4 md:mt-0 max-w-sm">
          <h1 className="text-2xl font-medium text-gray-800">
            He was definitely the person who if commits would deliver with
            utmost excellence.
          </h1>
          <p className="text-sm font-regular text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            cursus, elit vitae fermentum.
          </p>
        </div>
        <div class="grid grid-cols-4 gap-auto">
          <div className="border-r border-gray-200 w-40 h-60">
            <div className=" h-[50%] flex justify-center content-center items-center ">
              <PenIcon />
            </div>
            <div className=" h-[50%] bg-[#f9f9f9] border-t border-gray-200">
              <div class="text-md font-semibold text-center pt-6">
                100%
              </div>
              <p className="text-s font-regular text-center text-gray-500 mt-2">
                Happy Client
              </p>
            </div>
          </div>
          <div className="border-r border-gray-200 w-40 h-60">
            <div className=" h-[50%] bg-[#f9f9f9] ">
              <div class="text-md font-semibold text-center pt-6">
                35+
              </div>
              <p className="text-sm  font-regular text-center text-gray-500 mt-2">
                Project Developed
              </p>
            </div>
            <div className=" h-[50%] border-t border-gray-200 bg-white flex justify-center content-center items-center ">
              <PenIcon />
            </div>
          </div>
          <div className="rounded-md  border-r border-gray-200 w-40 h-60">
            <div className=" h-[50%] bg-white flex justify-center content-center items-center ">
              <PenIcon />
            </div>
            <div className=" h-[50%] bg-[#f9f9f9] border-t border-gray-200">
              <div class="text-md font-semibold text-center pt-6">
                2+
              </div>
              <p className="text-sm font-regular text-center text-gray-500 mt-2">
                Experience
              </p>
            </div>
          </div>
          <div className="w-40 h-60">
            <div className=" h-[50%] bg-[#f9f9f9] ">
              <div class="text-md font-semibold text-center pt-6">
                3
              </div>
              <p className="text-sm font-regular text-center text-gray-500 mt-2">
                Public Events
              </p>
            </div>
            <div className=" h-[50%] border-t border-gray-200 bg-white flex justify-center content-center items-center ">
              <PenIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
