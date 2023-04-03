import React from "react";
import { Contact, Feedbacks, Footer, Hero, Navbar, StarsCanvas } from "../components";
import Carousel from "../components/Carousel";

import AboutUSPage from "../section/AboutUSPage";
import IdeaSectionAbout from "../section/IdeaSectionAbout";

function AboutUs() {
  return (
    <div className="relative z-0 bg-primary">
      <div>
        <Navbar />
        <div>
          {/** About Section */}
          <AboutUSPage />
          {/**Slider logos company */}
          <Carousel />

          {/**idea section and btns */}
          <IdeaSectionAbout />

          {/** Testimonials */}
          <div className="-mt-36">
          <Feedbacks  />
          </div>
          {/** contact section */}
          <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
