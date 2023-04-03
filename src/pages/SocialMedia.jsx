import React from 'react'
import { Contact, Feedbacks, Footer, Navbar, StarsCanvas } from '../components'
import Carousel from '../components/Carousel'
import IdeaSectionAbout from '../section/IdeaSectionAbout'
import WebDesignHero from '../section/WebDesignHero'
import SocialMediaHero from '../section/SocialMediaHero'

function SocialMedia() {
  return (
    <div className="relative z-0 bg-primary">
    <div>
      <Navbar />
      <div>
        {/** About Section */}
       <SocialMediaHero />
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
  )
}

export default SocialMedia