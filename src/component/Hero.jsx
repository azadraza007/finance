import React from "react";
import HeroImg from "../assets/heroImg.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "95vh",
          color: "white",
        }}
      >
        <div className="grid grid-flow-row gap-2 px-9">
          <h2 className="font-bold mt-8">WELCOME TO GAUDIT</h2>
          <div className="">
            <h1
              style={{ fontSize: "80px", fontWeight: "500" }}
              className="font-bold"
            >
              The Most Trusted
            </h1>
          </div>
          <h1 style={{ fontSize: "60px" }} className="font-semibold">
            {" "}
            Accountants on The Planet
          </h1>
          <p style={{ fontSize: "20px" }} className="w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            voluptate consequuntur incidunt minima dolorum qui vitae nobis ipsam
            aliquam quam.
          </p>
        </div>

        <div className="px-7 my-9">
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
            DISCOVER MORE
            <FaExternalLinkAlt className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
