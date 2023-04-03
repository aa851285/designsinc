import React, { useEffect, useState } from "react";
import { sectionWrapper } from "../hoc";
import { motion } from "framer-motion";

import Lottie from "lottie-react";

import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { phoneIconjn, calljsicon,emailIconjn} from "../assets";


function IdeaSectionAbout() {
  return (
    <div>
      <div className="xl:flex xl:flex-row sm:flex sm:flex-row md:flex md:flex-row flex flex-col justify-between items-center -mt-36">
        <div>
          <motion.div variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
              GOT A PROJECT IN MIND, LET’S GRAB A COFFEE
            </p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              We’re A Team Of Creative Individuals.
            </h2>

            <motion.p
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
              variants={fadeIn("", "", 0.1, 1)}
            >
              We are a full service digital consultancy with experience and
              capacity to meet the needs of even the largest most complex of
              organizations in the world. Our services portfolio enables us to
              offer clients the best of experiences.
            </motion.p>
          </motion.div>
          <div className="xl:flex xl:flex-row sm:flex sm:flex-row md:flex md:flex-row flex flex-col gap-4 mt-6">
            <div>
              <button
                type="submit"
                className="bg-tertiary w-fit py-3 px-8 outline-none border-none font-bold shadow-md shadow-primary rounded-xl"
              >
                <div className="flex flex-row justify-center gap-2">
                  <span>
                    <Lottie animationData={emailIconjn} className="w-9 h-9" />
                  </span>
                  <span className="mt-2">info@thedesignsinc.com</span>
                </div>
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="bg-tertiary w-fit py-3 px-8 outline-none border-none font-bold shadow-md shadow-primary rounded-xl"
              >
                <div className="flex flex-row justify-center gap-2">
                  <span>
                    <Lottie animationData={phoneIconjn} className="w-9 h-9" />
                  </span>
                  <span className="mt-2">212 560-5943</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div>
          {/*
          <Lottie options={defaultOptions} height={400} width={400} />

  */}
          <Lottie animationData={calljsicon} />
        </div>
      </div>
    </div>
  );
}

export default sectionWrapper(IdeaSectionAbout);
