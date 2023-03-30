import React from 'react'
import { About, Contact, Experience, Feedbacks, Footer, Hero, Navbar, StarsCanvas, Tech, Works } from '../components'


function Home() {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero  />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />

    </div>
  )
}

export default Home