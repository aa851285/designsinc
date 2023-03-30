import React from 'react'
import {  Contact, Footer, Navbar, StarsCanvas } from '../components'

function ContactPage() {
  return (
    <div className='relative z-0 bg-primary'>
    <div className=''>
      <Navbar />
      <div>
        {/** Contact Section from components comes through */}
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

export default ContactPage