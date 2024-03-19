import React, { useEffect } from "react";
import HeroImg from "../assets/heroImg.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "95vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 20px",
      }}
    >
      <div className="ml-6" data-aos="fade-right">
        <h2 className="font-bold mt-8">WELCOME TO GAUDIT</h2>
        <div className="">
          <h1
            style={{ fontSize: "clamp(36px, 8vw, 80px)", fontWeight: "500" }}
            className="font-bold"
          >
            The Most Trusted
          </h1>
        </div>
        <h1
          style={{ fontSize: "clamp(24px, 6vw, 60px)" }}
          className="font-semibold"
        >
          Accountants on The Planet
        </h1>
        <p style={{ fontSize: "clamp(14px, 4vw, 20px)" }} className="w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          voluptate consequuntur incidunt minima dolorum qui vitae nobis ipsam
          aliquam quam.
        </p>
      </div>
      <div className="ml-6 mt-6">
        <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
          DISCOVER MORE
          <FaExternalLinkAlt className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
