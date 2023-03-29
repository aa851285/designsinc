import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { sectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constant";

const FeedbacCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex flex-wrap bg-black p-10 xs:w-[320px] w-full rounded-3xl"
    >
      <p className="text-white  font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-[18px] text-white tracking-wider">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p>
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="text-secondary">
              {designation} of {company}
            </p>
          </div>

          <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"/>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded[20px]">
      <div
        className={`sm:px-16 px-6 sm:py-16 py-10 bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubtext}>what others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbacCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default sectionWrapper(Feedbacks,"");
