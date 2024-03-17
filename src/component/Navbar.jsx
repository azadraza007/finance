import React, { useState } from "react";
import aus from "../assets/aus.jpg";
import canada from "../assets/canada.jpg";
import uk from "../assets/uk.jpg";
import usu from "../assets/usu.jpg";
import navbarImg from "../assets/Gaudit-Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaFacebook,
  FaYoutube,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className="flex justify-between items-center px-4 lg:px-8 py-2 lg:py-4"
        style={{ backgroundColor: "#016e95" }}
      >
        <div className="text-white hover:cursor-pointer">
          <h2 className="font-bold">COUNTRIES</h2>
        </div>
        <div className="hidden lg:flex gap-3 hover:cursor-pointer">
          <img src={aus} alt="Australia" />
          <img src={canada} alt="Canada" />
          <img src={uk} alt="United Kingdom" />
          <img src={usu} alt="USA" />
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-white rounded-lg w-6 h-6 flex items-center justify-center hover:cursor-pointer">
            <FaFacebook />
          </div>
          <div className="bg-white rounded-lg w-6 h-6 flex items-center justify-center hover:cursor-pointer">
            <FaInstagramSquare />
          </div>
          <div className="bg-white rounded-lg w-6 h-6 flex items-center justify-center hover:cursor-pointer">
            <FaTwitter />
          </div>
          <div className="bg-white rounded-lg w-6 h-6 flex items-center justify-center hover:cursor-pointer">
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="bg-red-500 flex justify-between items-center px-4 lg:px-8 py-2 lg:py-1">
        <div className="item-center ">
          <img
            src={navbarImg}
            alt="Navbar Img"
            style={{ height: "", width: "80px" }}
          />
        </div>
        <div className="lg:flex items-center hidden">
          <ul className="flex gap-8">
            <li className="font-semibold text-white">Home</li>
            <li className="font-semibold text-white">About</li>
            <li className="font-semibold text-white">Services</li>
            <li className="font-semibold text-white">Cases</li>
            <li className="font-semibold text-white">Pages</li>
            <li className="font-semibold text-white">Contact Us</li>
          </ul>
        </div>
        <div className="flex items-center p-2 mr-3 lg:mr-8">
          <div className="font-semibold text-white mr-3">
            <IoCallOutline className="h-12 w-12" />
          </div>
          <div>
            <h5>
              <span className="text-white font-semibold">Call Us</span>
            </h5>
            <p className="text-white font-weight-800">+123-234-1234</p>
          </div>
          <div className="px-1 lg:hidden ml-5">
            <GiHamburgerMenu
              className="h-10 w-8 text-white"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="lg:hidden bg-red-500 px-4 py-2">
          <ul className="flex flex-col gap-4">
            <li className="font-semibold text-white">Home</li>
            <li className="font-semibold text-white">About</li>
            <li className="font-semibold text-white">Services</li>
            <li className="font-semibold text-white">Cases</li>
            <li className="font-semibold text-white">Pages</li>
            <li className="font-semibold text-white">Contact Us</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
