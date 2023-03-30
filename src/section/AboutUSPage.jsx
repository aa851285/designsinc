import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../constant";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { sectionWrapper } from "../hoc";
import { circleaboutimage, circleVideo } from "../assets";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
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

function AboutUSPage() {
  return (
    <>
      <div className="flex flex-row justify-end items-center gap-x-28 pt-10 ">
        <div>
          <motion.div variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
              OUR STORY
            </p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              We’re A Team Of Creative Individuals.
            </h2>
          </motion.div>

          <motion.p
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            variants={fadeIn("", "", 0.1, 1)}
          >
            The company has been on the market for a decade growing the
            diversity of services year by year. Now, Web Design Inc is a
            full-stack digital agency with all the specialists required for the
            efficient creative process from scratch. The agency departments are
            organized around different stages of user-friendly product
            development. Solid project management based on the best world
            practices allows us to run complex projects for customers around the
            world and provide high-quality outcomes.
          </motion.p>
        </div>
        <div className="w-1/2">
          <motion.div variants={slideIn("left", "tween", 0, 2, 1)}>
            <img
              src={circleaboutimage}
              className="w-100 h-100 object-contain"
              alt="img"
            />
          </motion.div>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

     
    </>
  );
}

export default sectionWrapper(AboutUSPage);
