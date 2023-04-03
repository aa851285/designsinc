import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../constant";
import { menu,logo } from "../assets";
import { styles } from "../../styles";
import {  close } from "../assets";







  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Active, SetActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
          
            <Link
              to="/"
              className="flex-shrink-0 text-white uppercase font-bold text-xl"
            >
            <img src={logo} alt="logo" className="w-50 h-50 object-contain" />
            </Link>
          
          <div className="hidden md:block">
            <div className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((item) =>
                item.dropdown ? (
                  <div key={item.id} className="relative">
                    <button
                      onClick={toggleNav}
                      className={`${
                        Active === item.title ? "text-white" : "text-secondary"
                      } hover:text-white text-[18px] font-medium cursor-pointer`}
                    >
                      {item.title}
                     
                    </button>
                    <div
                      className={`${
                        isOpen ? "block" : "hidden"
                      } absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10`}
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.title}
                          to={`/${subitem.url}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                         
                          {subitem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    to={`/${item.id}`}

                    className={`${
                Active === item.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
                  >
                   {item.title}
                  </Link>
                )
              )}
            </div>
          </div>



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
            {navLinks.map((item) =>
                item.dropdown ? (
                  <div key={item.id} className="relative">
                    <button
                      onClick={toggleNav}
                      className={`${
                        Active === item.title ? "text-white" : "text-secondary"
                      } hover:text-white text-[18px] font-medium cursor-pointer`}
                    >
                      {item.title}
                     
                    </button>
                    <div
                      className={`${
                        isOpen ? "block" : "hidden"
                      } absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10`}
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.title}
                          to={`/${subitem.url}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                         
                          {subitem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    to={`/${item.id}`}

                    className={`${
                Active === item.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
                  >
                   {item.title}
                  </Link>
                )
              )}
            </ul>
          </div>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
