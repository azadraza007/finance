import React from "react";
import aboutCo from "../assets/AboutCo.jpg";
import { FaChevronRight } from "react-icons/fa";

const AboutCo = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-11/12 p-2">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={aboutCo}
              alt="Company"
              className="h-auto w-full"
              style={{ maxHeight: "600px" }}
            />
          </div>
          <div className="w-full md:w-1/2 px-8 md:ml-10">
            <div className="text-center">
              <div className="text-lg font-bold mb-4">About Company</div>
              <h1 className="text-3xl font-bold">
                Your Financial Partner for Success
              </h1>
              <p>
                Proin laoreet nisi vitae pharetra mattis, etiam luctus suscipit
                velit vitae amatug ultricies. Augue molestie a etiam quis
                tincidunt est, et efficitur ipsum nunc bibendum ut risus et
                vehicula proin tempus tellus diam laoreet justo velit ante.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-6">
              <div className="mb-6 md:mb-0">
                <h1 className="font-bold items-center justify-center flex">
                  Our Mission
                </h1>
                <ul>
                  <li className="flex items-center mb-2 hover:text-red-600 hover:translate-y-1 transition-transgorm">
                    <FaChevronRight className="mr-2 text-blue-500" /> Nulla
                    congue aliquet vulputate
                  </li>
                  <li className="flex items-center mb-2 hover:text-red-600 hover:translate-y-1 transition-transgorm">
                    <FaChevronRight className="mr-2 text-blue-500" /> Nulla
                    congue aliquet vulputate
                  </li>
                  <li className="flex items-center mb-2 hover:text-red-600 hover:translate-y-1 transition-transgorm">
                    <FaChevronRight className="mr-2 text-blue-500" /> Nulla
                    congue aliquet vulputate
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold items-center justify-center flex">
                  Our Vision
                </h1>
                <ul>
                  <li className="flex items-center mb-2 hover:text-red-600 hover:translate-y-1 transition-transgorm">
                    <FaChevronRight className="mr-2 text-blue-500" /> Nulla
                    congue aliquet vulputate
                  </li>
                  <li className="flex items-center mb-2 hover:text-red-600 hover:translate-y-1 transition-transgorm">
                    <FaChevronRight className="mr-2 text-blue-500" /> Nulla
                    congue aliquet vulputate
                  </li>
                  <li className="flex items-center mb-2 hover:text-red-600 hover:translate-y-1 transition-transgorm">
                    <FaChevronRight className="mr-2 text-blue-500" /> Nulla
                    congue aliquet vulputate
                  </li>
                  <li className="flex items-center mb-2 hover:text-red-600 hover:translate-y-1 transition-transgorm">
                    <FaChevronRight className="mr-2 text-blue-500" /> Nulla
                    congue aliquet vulputate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCo;
