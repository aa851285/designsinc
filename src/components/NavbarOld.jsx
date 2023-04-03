import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../../styles";
import { navLinks } from "../constant";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [Active, SetActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);


  /** start dropdown */
  
  /** end dropdown */

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            SetActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-50 h-50 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            
            <li
              onClick={() => SetActive(link.title)}
              key={link.id}
              className={`${
                Active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`/${link.id}`}>{link.title}</a>
              
             
            </li>

            /** checking dropdown */
          ))}
        </ul>

        {/** Mobile Devices */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className="w-9 h-9 cursor-pointer"
            alt="icon-menu"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex  flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  onClick={() => {
                    setToggle(!toggle);
                    SetActive(link.title);
                  }}
                  key={link.id}
                  className={`${
                    Active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer font-poppins`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
