import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="HooBank" className="w-[124px] h-[32px]" />

      <ul className="list-none hidden justify-end items-center flex-1 sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins text-[16px] font-normal ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } cursor-pointer text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={open ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setOpen((prev) => !prev)}
        />

        <div
          className={`${
            open ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none justify-end items-center flex-1 flex flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-[16px] font-normal ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } cursor-pointer text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
