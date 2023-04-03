import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../constant";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { sectionWrapper } from "../hoc";
import { aiimg, circleaboutimage, circleVideo } from "../assets";


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

function WebContentHero() {
  return (
    <>
    <div className="flex flex-row justify-end items-center gap-x-28 pt-20 ">
      <div className="w-1/2">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            DESIGN IS POWERFUL
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[20px] text-[30px]">
            Your Website Unique Conten Doesn’t Have To Be Complicated.
          </h2>
        </motion.div>

        <motion.p
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          We are fearless about taking on challenges! With collaboration at
          our core, we are ready to work with you to craft winning solutions.
          We excel at listening, and then acting on your needs, to deliver a
          successful project outcome. Our team of experts are equipped with
          the knowledge and experience needed to get the job done, and are
          poised to deliver a responsive website for your business.
        </motion.p>
      </div>
      <div className="w-1/2">
        <motion.div variants={slideIn("left", "tween", 0, 2, 1)}>
          <img
            src={aiimg}
            className="w-500 h-500 "
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
  )
}

export default sectionWrapper(WebContentHero)