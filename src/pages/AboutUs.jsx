import React from 'react'
import { Footer, Hero, Navbar } from '../components'

import AboutUSPage from '../section/AboutUSPage'








function AboutUs() {
  return (
    <div className='relative z-0 bg-primary'>
    <div className=''>
      <Navbar />
      <div>
        {/** About Section */}
        <AboutUSPage />
    

        
        
        </div>
    </div>

   
   
    <Footer />

  </div>
  )
}

export default AboutUs