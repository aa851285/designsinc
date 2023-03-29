import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import { sectionWrapper } from "../hoc";
import { circleVideo } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
    
    
      <div className="flex flex-row justify-end items-center gap-x-28">
        <div>
          <motion.div variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
              Introduction
            </p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Overview
            </h2>
          </motion.div>

          <motion.p
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            variants={fadeIn("", "", 0.1, 1)}
          >
            At TheDesignsInc, we're passionate about creating compelling digital
            experiences that engage and inspire. Our design agency specializes
            in website, mobile app, and logo design services, working closely
            with clients to understand their unique needs and goals. Whether
            you're launching a new brand, refreshing an existing website, or
            building an app from scratch, our team of experts is here to help
            you every step of the way. We pride ourselves on delivering
            customized, high-quality designs that make a lasting impression. So
            why settle for ordinary when you can work with TheDesignsInc to
            create something extraordinary? Contact us today to learn more about
            how we can bring your vision to life.
          </motion.p>
            </div>
          <div className="w-1/2">
            <video
              src={circleVideo}
              autoPlay
              loop
              controls={false}
              style={{ width: "80%", height: "100%" }}
            />
          </div>
        </div>
        
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

       
        
    </>
  );
};

export default sectionWrapper(About, "about");
