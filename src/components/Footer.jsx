import React from "react";
import { styles } from "../../styles";
import { logo } from "../assets";
import { sectionWrapper } from "../hoc";


function Footer() {
  return (
    <>
    <div className="bg-black-100  justify-between items-center  w-full mx-auto flex flex-col py-5 px-10 xl:flex-row md:flex-row sm:flex-row">
      <div className="xl:w-1/3 md:w-1/3 sm:w-1/3 ">
        <img src={logo} className="w-30 h-30 " alt="logo" />
        <p className="mt-10">TheDesignsInc is a Design Agency that specializes in providing logo and
          website design services. They help businesses and individuals create
          unique and effective branding by creating custom logos that represent
          their values and mission. Additionally, they create websites that are
          visually appealing and user-friendly, helping their clients establish
          a strong online presence. TheDesignsInc is dedicated to providing
          top-quality design services that meet the specific needs of each
          client.</p>
      </div>
      <div className="xl:w-1/3 md:w-1/3 sm:w-1/3 ">
       <h2 className="font-bold text-white text-[19px]">UseFul Links</h2> 
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Website Design</li>
        <li>E-Commerce</li>
        <li>Logo Design</li>
       </ul>
        </div>
      <div className="">
        <h2 className="font-bold text-white text-[19px]">Contact Info</h2>
        <ul>
            <li>info@thedesignsinc.com</li>
            <li>212-560-5943</li>
            <li>Flushing, NewYork</li>
        </ul>
        </div>
    </div>

    <div className="items-center text-center ">
    <p className="text-gray-400">CopyRight 2023 - HandCoded By: TheDesignsInc.</p>
    </div>
    

    </>
    
  );
}

export default Footer
