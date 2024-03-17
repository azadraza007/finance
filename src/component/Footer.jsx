import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { quickLinks, services } from "../data.js";
import { CiPhone } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { nanoid } from "nanoid";
export let info = [
  {
    id: nanoid(),
    icon: <CiPhone className="text-white" />,
    title: "Phone",
    content: "786752934875",

    url: "#",
  },
  {
    id: nanoid(),
    icon: <IoMailOpenOutline className="text-white" />,
    title: "Email",
    content: "ahsdfa@gmail.com",
    url: "#",
  },
  {
    id: nanoid(),
    icon: <GrMapLocation className="text-white" />,
    title: "Address",
    content: "99 Roving St., Big City, PKU 23456",
    url: "#",
  },
];
const Footer = () => {
  return (
    <section style={{ backgroundColor: "#016e95" }}>
      <div
        className="w-100 py-4 px-2 grid grid-cols-1 lg:grid-cols-2 gap-2"
        style={{ backgroundColor: "#016e95" }}
      >
        <div className="flex flex-col gap-3">
          <img
            src="https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/Gaudit-Logo.png"
            alt=""
            className="w-80"
          />
          <p className="text-slate-300  my-2">
            Donec neque massa, faucibus nec lorem vitae feugiat pharetra sem.
            Nulla elementum eget lectus dapibus amatug mix finibus.
          </p>
          <ul className="flex items-center  gap-4 text-white">
            <li className="p-3 bg-blue-700 rounded-full hover:translate-y-2 transition-transform">
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li className="p-3 bg-blue-700 rounded-full hover:translate-y-2 transition-transform">
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li className="p-3 bg-blue-700 rounded-full hover:translate-y-2 transition-transform">
              <a href="">
                <FaYoutube />
              </a>
            </li>
            <li className="p-3 bg-blue-700 rounded-full hover:translate-y-2 transition-transform">
              <a href="">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        {/*  */}

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className=" flex flex-col gap-3 mt-4">
            <h2 className="text-white text-2xl font-bold tracking-wide">
              Quick links
            </h2>
            {quickLinks.map((item) => {
              return (
                <a
                  href={item.link}
                  key={item.id}
                  className="flex gap-4 items-center hover:translate-y-2 transition-transform"
                >
                  <div>
                    <FaChevronRight className="text-white" />
                  </div>
                  <h3 className=" font-bold text-slate-200  hover:text-red-500 ">
                    {item.title}
                  </h3>
                </a>
              );
            })}
          </div>
          <div className=" flex flex-col gap-3 mt-4">
            <h2 className="text-white text-2xl font-bold tracking-wide">
              Services
            </h2>
            {services.map((item) => {
              return (
                <a
                  href={item.link}
                  key={item.id}
                  className="flex gap-4 items-center hover:translate-y-2 transition-transform"
                >
                  <div>
                    <FaChevronRight className="text-white " />
                  </div>
                  <h3 className="font-bold text-slate-200  hover:text-red-500">
                    {item.title}
                  </h3>
                </a>
              );
            })}
          </div>
          <div className=" flex flex-col gap-3 mt-4">
            <h2 className="text-white text-2xl font-bold tracking-wide">
              Information
            </h2>
            {info.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex gap-4 items-center hover:translate-y-2 transition-transform"
                >
                  <div className="text-4xl text-blue-700 ">{item.icon}</div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-white hover:text-red-500 tracking-wide">
                      {item.title}
                    </h2>
                    <a
                      href={item.url}
                      className="text-slate-200 hover:text-red-500"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="my-10" />

      <p className="flex items-center justify-center text-slate-200 py-6">
        Copyright {new Date().getFullYear()} © All Right Reserved Design by
        Rometheme
      </p>
    </section>
  );
};

export default Footer;
