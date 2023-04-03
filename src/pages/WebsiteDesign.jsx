import React from "react";
import { Contact, Feedbacks, Footer, Navbar, StarsCanvas } from "../components";
import Carousel from "../components/Carousel";
import IdeaSectionAbout from "../section/IdeaSectionAbout";
import WebDesignHero from "../section/WebDesignHero";

function WebsiteDesign() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />

        {/** About Section */}
        <WebDesignHero />
      </div>

      {/**Slider logos company */}
      <Carousel />

      {/**idea section and btns */}
      <IdeaSectionAbout />

      {/** Testimonials */}
      <div className="-mt-36">
        <Feedbacks />
      </div>
      {/** contact section */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>

      <Footer />
    </div>
  );
}

export default WebsiteDesign;
