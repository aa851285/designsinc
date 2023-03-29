import React from "react";
import tilt from "react-tilt";
import { sectionWrapper } from "../hoc";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constant";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="w-full h-[230px]">
          <img
            src={image}
            alt={description}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img-hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>


         
        </div>

        <div className="mt-5">
            <h2 className="text-white font-bold text-[24px]">{name}</h2>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>

          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p className={`text-[14px] ${tag.color}`} key={tag.name}>
                #{tag.name}
              </p>
            ))}
          </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Our Showcase
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Portfolio
        </h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Our design team has completed a series of successful website and logo
          design projects for clients across different industries, delivering
          modern, responsive, and customized designs that reflect each client's
          unique brand identity and values. We approach each project with a
          collaborative mindset, ensuring that clients are involved in the
          design process every step of the way, and strive to exceed their
          expectations with exceptional results.
        </motion.p>
      </div>

      <div className="mt-20  flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(Works, "");
